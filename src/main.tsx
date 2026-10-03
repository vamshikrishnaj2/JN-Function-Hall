// Defensive initialization: ensure window.fetch is configurable and writable
if (typeof window !== 'undefined') {
  try {
    const origFetch = window.fetch ? window.fetch.bind(window) : null;
    let activeFetch = origFetch;
    const descriptor: PropertyDescriptor = {
      get() {
        return activeFetch || origFetch;
      },
      set(val) {
        activeFetch = val;
      },
      configurable: true,
      enumerable: true,
    };
    try {
      Object.defineProperty(window, 'fetch', descriptor);
    } catch (_) {}
    if (typeof Window !== 'undefined' && Window.prototype) {
      try {
        Object.defineProperty(Window.prototype, 'fetch', descriptor);
      } catch (_) {}
    }
  } catch (_) {}
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
