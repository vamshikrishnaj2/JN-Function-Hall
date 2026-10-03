import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parsing middlewares
  app.use(express.json({ limit: '1mb' }));
  app.use(express.urlencoded({ extended: true, limit: '1mb' }));

  // API health check
  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'ok',
      service: 'JN Function Hall Service API',
      timestamp: new Date().toISOString()
    });
  });

  // Direct venue video upload endpoint (supports files up to 150MB)
  app.post('/api/upload-video', express.raw({ type: '*/*', limit: '150mb' }), (req, res) => {
    try {
      const publicDir = path.join(process.cwd(), 'public');
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      const targetPath = path.join(publicDir, 'jn-function-hall-tour.mp4');
      fs.writeFileSync(targetPath, req.body);
      console.log(`[JN Function Hall] Video saved: ${targetPath} (${req.body.length} bytes)`);
      res.json({ success: true, message: 'Video saved successfully', bytes: req.body.length });
    } catch (err: any) {
      console.error('[JN Function Hall] Video upload failed:', err);
      res.status(500).json({ success: false, error: err?.message || 'Upload failed' });
    }
  });

  // Dedicated SEO static endpoints ensuring exact MIME types and headers
  app.get('/robots.txt', (_req, res) => {
    const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
    if (fs.existsSync(robotsPath)) {
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=86400');
      return res.sendFile(robotsPath);
    }
    res.type('text/plain').send("User-agent: *\nAllow: /\nSitemap: https://ais-pre-j6fm4q66twjwqs2p4lfk4f-190513320017.asia-southeast1.run.app/sitemap.xml\n");
  });

  app.get('/sitemap.xml', (_req, res) => {
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    if (fs.existsSync(sitemapPath)) {
      res.setHeader('Content-Type', 'application/xml; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=86400');
      return res.sendFile(sitemapPath);
    }
    res.status(404).send('Not found');
  });

  app.get('/site.webmanifest', (_req, res) => {
    const manifestPath = path.join(process.cwd(), 'public', 'site.webmanifest');
    if (fs.existsSync(manifestPath)) {
      res.setHeader('Content-Type', 'application/manifest+json; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=86400');
      return res.sendFile(manifestPath);
    }
    res.status(404).send('Not found');
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // Express 5 route wildcard syntax
    app.get('*all', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[JN Function Hall] Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
