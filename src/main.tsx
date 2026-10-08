import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Only register service worker in production builds so dev HMR and Vite modules are not hijacked
if ('serviceWorker' in navigator) {
  if (import.meta.env.PROD) {
    registerSW({
      immediate: true,
      onNeedRefresh() {
        console.log('[PWA] New version ready - auto refreshing cache');
      },
      onOfflineReady() {
        console.log('[PWA] Smart Study Freshman Portal is ready to work 100% offline');
      },
    });
  } else {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations) {
        registration.unregister();
      }
    });
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

