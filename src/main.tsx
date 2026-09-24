import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Register service worker immediately so all pages, assets, notes, and exam questions are cached offline
registerSW({
  immediate: true,
  onNeedRefresh() {
    console.log('[PWA] New version ready - auto refreshing cache');
  },
  onOfflineReady() {
    console.log('[PWA] Smart Study Freshman Portal is ready to work 100% offline');
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

