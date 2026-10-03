import React, { useState, useRef, useEffect } from 'react';
import { Play, Video, Phone, Upload, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { VENUE_CONFIG } from '../data/venueData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const VenueVideoTour: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [videoSrc, setVideoSrc] = useState<string>(VENUE_CONFIG.videoUrl || '');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(!VENUE_CONFIG.videoUrl);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [uploadMessage, setUploadMessage] = useState<string>('');
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  // Check if server already has a video file
  useEffect(() => {
    if (!VENUE_CONFIG.videoUrl) {
      setHasError(true);
      return;
    }
    fetch(VENUE_CONFIG.videoUrl, { method: 'HEAD' })
      .then((res) => {
        if (res.ok) {
          setHasError(false);
          setVideoSrc(VENUE_CONFIG.videoUrl);
        } else {
          setHasError(true);
        }
      })
      .catch(() => {
        // Still keep videoSrc configured, let HTML5 video attempt playback
        setVideoSrc(VENUE_CONFIG.videoUrl);
      });
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
          }
        });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleFileUpload = async (file: File) => {
    if (!file) return;

    // 1. Immediately create a local blob URL so video plays right away
    const localUrl = URL.createObjectURL(file);
    setVideoSrc(localUrl);
    setHasError(false);
    setIsPlaying(false);
    setUploadStatus('uploading');
    setUploadMessage(`Loading ${file.name}...`);

    // 2. Persist to server /api/upload-video
    try {
      const response = await fetch('/api/upload-video', {
        method: 'POST',
        headers: {
          'Content-Type': file.type || 'video/mp4',
        },
        body: file,
      });

      if (response.ok) {
        setUploadStatus('success');
        setUploadMessage(`Official video saved successfully (${(file.size / (1024 * 1024)).toFixed(1)} MB)`);
        // Play automatically
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
          }
        }, 300);
      } else {
        const errorData = await response.json().catch(() => ({}));
        setUploadStatus('error');
        setUploadMessage(errorData.error || 'Server could not save file, playing locally.');
      }
    } catch {
      setUploadStatus('error');
      setUploadMessage('Playing local preview; could not persist to disk.');
    }
  };

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('video/')) {
      handleFileUpload(file);
    }
  };

  const videoWhatsAppUrl = `https://wa.me/${VENUE_CONFIG.whatsapp1}?text=${encodeURIComponent(
    'Hello JN Function Hall, please share the venue walkthrough video and available dates on WhatsApp.'
  )}`;

  return (
    <div id="venue-video-tour" className="w-full">
      {/* Hidden File Input for Video Selection */}
      <input
        ref={fileInputRef}
        type="file"
        accept="video/mp4,video/quicktime,video/webm,video/*"
        className="hidden"
        onChange={onFileInputChange}
      />

      {/* Container Frame */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={handleDrop}
        className={`relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 transition-all ${
          isDragOver ? 'border-[#22c55e] scale-[1.01]' : 'border-[#dec9ab]/70'
        } bg-[#0d0e12] shadow-2xl group`}
      >
        {/* Upload Status Banner */}
        {uploadStatus !== 'idle' && (
          <div
            className={`px-4 py-2 text-xs font-semibold flex items-center justify-between transition-all ${
              uploadStatus === 'uploading'
                ? 'bg-blue-600/90 text-white'
                : uploadStatus === 'success'
                ? 'bg-emerald-600/95 text-white'
                : 'bg-amber-600/90 text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              {uploadStatus === 'uploading' && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
              {uploadStatus === 'success' && <CheckCircle2 className="w-3.5 h-3.5" />}
              {uploadStatus === 'error' && <AlertCircle className="w-3.5 h-3.5" />}
              <span>{uploadMessage}</span>
            </div>
            <button
              type="button"
              onClick={() => setUploadStatus('idle')}
              className="text-[11px] underline opacity-80 hover:opacity-100 cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Aspect Ratio Box with Clean Stage Frame */}
        <div className="relative w-full aspect-[9/16] max-h-[75vh] sm:max-h-[80vh] flex items-center justify-center bg-[#07090d] overflow-hidden">
          {videoSrc && !hasError ? (
            <>
              <video
                ref={videoRef}
                src={videoSrc}
                poster={VENUE_CONFIG.videoPoster || '/jn-video-poster.jpg'}
                playsInline
                muted={isMuted}
                preload="metadata"
                controls
                width={1080}
                height={1920}
                title="JN Function Hall Venue Walkthrough Tour"
                aria-label="JN Function Hall Venue Walkthrough Tour"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onError={() => {
                  setHasError(true);
                }}
                className="relative z-10 w-full h-full object-contain bg-black shadow-inner"
              >
                Your browser does not support HTML5 video playback.
              </video>

              {/* Quick Play Floating Overlay when paused and no error */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center pointer-events-none transition-opacity">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="pointer-events-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#141b25]/90 hover:bg-[#9e6f2c] border-2 border-[#dec9ab] text-white flex items-center justify-center shadow-2xl transition-transform transform hover:scale-110 active:scale-95 cursor-pointer"
                    aria-label="Play JN Function Hall Video Tour"
                  >
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5 text-[#dec9ab]" />
                  </button>
                </div>
              )}
            </>
          ) : (
            /* Standby Video Screen */
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1015] via-[#141822]/95 to-[#0e1015] flex flex-col items-center justify-center p-6 text-center text-white space-y-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#f4ebe0]/10 border-2 border-[#dec9ab] flex items-center justify-center text-[#dec9ab] shadow-lg">
                <Video className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>

              <div className="max-w-md space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#dec9ab] bg-[#9e6f2c]/30 px-3 py-1 rounded-full border border-[#dec9ab]/40 inline-block">
                  Venue Video Walkthrough
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">
                  JN Function Hall Walkthrough Tour
                </h3>
                <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                  Select your venue video clip, drag and drop a video file here, or request the walkthrough directly on WhatsApp.
                </p>
              </div>

              {/* Action Buttons: Pick File, WhatsApp, Call */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  id="select-client-video-btn"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-5 py-2.5 rounded-xl bg-[#9e6f2c] hover:bg-[#855d24] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all cursor-pointer transform hover:scale-105 active:scale-95"
                >
                  <Upload className="w-4 h-4" />
                  <span>Choose Video Clip</span>
                </button>

                <a
                  href={videoWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <WhatsAppIcon size={16} />
                  <span>Request on WhatsApp</span>
                </a>

                <a
                  href={`tel:${VENUE_CONFIG.phone1.replace(/\s+/g, '')}`}
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-[#dec9ab]" />
                  <span>Call Desk</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
