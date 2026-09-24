import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, Plugin} from 'vite';
import {VitePWA} from 'vite-plugin-pwa';

// LINT.IfChange(aistudio_media_plugin)
function aistudioMediaPlugin(): Plugin {
  return {
    name: 'vite-plugin-aistudio-media',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith('/assets/aistudio/')) {
          const rawPath = req.url.split('?')[0].split('#')[0];
          try {
            const decodedPath = decodeURIComponent(rawPath);
            const relativePath = decodedPath.replace(/^\//, '');
            const aistudioDir = path.resolve(
              __dirname,
              'public',
              'assets',
              'aistudio',
            );
            const filePath = path.resolve(__dirname, 'public', relativePath);
            if (
              filePath.startsWith(aistudioDir + path.sep) &&
              fs.existsSync(filePath) &&
              fs.statSync(filePath).isFile()
            ) {
              const ext = path.extname(filePath).toLowerCase();
              const mimeMap: Record<string, string> = {
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.png': 'image/png',
                '.gif': 'image/gif',
                '.webp': 'image/webp',
                '.svg': 'image/svg+xml',
                '.bmp': 'image/bmp',
                '.ico': 'image/x-icon',
                '.mp4': 'video/mp4',
                '.webm': 'video/webm',
                '.ogv': 'video/ogg',
                '.mp3': 'audio/mpeg',
                '.wav': 'audio/wav',
                '.ogg': 'audio/ogg',
                '.pdf': 'application/pdf',
              };
              res.setHeader(
                'Content-Type',
                mimeMap[ext] || 'application/octet-stream',
              );
              res.setHeader('Cache-Control', 'no-cache');
              fs.createReadStream(filePath).pipe(res);
              return;
            }
          } catch {
            // Fall through if URI decoding or file access fails
          }
        }
        next();
      });
    },
  };
}
// LINT.ThenChange(//depot/google3/java/com/google/alkali/boq/makersuite/applet_dev_service/templates/initializers/react_theme/vite.config.ts:aistudio_media_plugin)

// Dev API Middleware to simulate Vercel serverless /api endpoints in local Vite dev server
function apiDevServerPlugin(): Plugin {
  const dataDir = path.resolve(__dirname, 'public', 'data');
  const subsFile = path.resolve(dataDir, 'submissions.json');
  const chatFile = path.resolve(dataDir, 'chat.json');

  const loadSubmissions = (): any[] => {
    try {
      if (fs.existsSync(subsFile)) {
        const raw = fs.readFileSync(subsFile, 'utf-8');
        return JSON.parse(raw);
      }
    } catch {}
    return [
      {
        id: 'pay-demo-blen',
        studentName: 'Blen Tsegaye',
        studentEmail: 'student.sample@smartstudy.edu.et',
        studentPhone: '0911223344',
        paymentMethod: 'Telebirr',
        accountOrPhoneUsed: '0953201048',
        transactionRef: 'TL-98421035',
        amount: 300,
        screenshotUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
        submittedAt: new Date(Date.now() - 3600000 * 3).toISOString(),
        status: 'verified',
        verifiedAt: new Date(Date.now() - 3600000 * 2).toISOString(),
        adminNotes: 'Payment confirmed on Telebirr 0953201048. Access activated.',
        syncCode: 'SS-849102'
      },
      {
        id: 'pay-demo-dawit',
        studentName: 'Dawit Bekele',
        studentEmail: 'dawit.b@freshman.edu.et',
        studentPhone: '0922334455',
        paymentMethod: 'CBE',
        accountOrPhoneUsed: '1000521750255',
        transactionRef: 'FT24089921',
        amount: 300,
        screenshotUrl: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=600&q=80',
        submittedAt: new Date(Date.now() - 3600000 * 1).toISOString(),
        status: 'pending',
        adminNotes: 'Awaiting admin review from gudurualemayehu29@gmail.com',
        syncCode: 'SS-904128'
      }
    ];
  };

  const saveSubmissions = (data: any[]) => {
    try {
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      fs.writeFileSync(subsFile, JSON.stringify(data, null, 2), 'utf-8');
    } catch {}
  };

  const loadChat = (): any[] => {
    try {
      if (fs.existsSync(chatFile)) {
        return JSON.parse(fs.readFileSync(chatFile, 'utf-8'));
      }
    } catch {}
    return [];
  };

  const saveChat = (data: any[]) => {
    try {
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      fs.writeFileSync(chatFile, JSON.stringify(data, null, 2), 'utf-8');
    } catch {}
  };

  let devSubmissions: any[] = loadSubmissions();
  let devChatMessages: any[] = loadChat();

  return {
    name: 'vite-plugin-dev-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith('/api/')) {
          return next();
        }

        const url = new URL(req.url, 'http://localhost:3000');
        const pathname = url.pathname;

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

        if (req.method === 'OPTIONS') {
          res.statusCode = 200;
          return res.end();
        }

        if (pathname === '/api/submissions') {
          if (req.method === 'GET') {
            res.setHeader('Content-Type', 'application/json');
            return res.end(JSON.stringify(devSubmissions));
          }
          if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
              try {
                const sub = JSON.parse(body);
                const existingIdx = devSubmissions.findIndex(s => s.id === sub.id);
                if (existingIdx >= 0) {
                  devSubmissions[existingIdx] = { ...devSubmissions[existingIdx], ...sub };
                } else {
                  devSubmissions.unshift(sub);
                }
                saveSubmissions(devSubmissions);
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, submission: sub }));
              } catch (e: any) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: e.message }));
              }
            });
            return;
          }
          if (req.method === 'PATCH') {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
              try {
                const { id, status, adminNotes, verifiedAt } = JSON.parse(body);
                const target = devSubmissions.find(s => s.id === id);
                if (target) {
                  if (status) target.status = status;
                  if (adminNotes !== undefined) target.adminNotes = adminNotes;
                  if (verifiedAt) target.verifiedAt = verifiedAt;
                  saveSubmissions(devSubmissions);
                  res.setHeader('Content-Type', 'application/json');
                  return res.end(JSON.stringify({ success: true, target }));
                }
                res.statusCode = 404;
                res.end(JSON.stringify({ error: 'Submission not found' }));
              } catch (e: any) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: e.message }));
              }
            });
            return;
          }
        }

        if (pathname === '/api/chat') {
          if (req.method === 'GET') {
            res.setHeader('Content-Type', 'application/json');
            return res.end(JSON.stringify(devChatMessages));
          }
          if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
              try {
                const msg = JSON.parse(body);
                devChatMessages.push(msg);
                saveChat(devChatMessages);
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, message: msg }));
              } catch (e: any) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: e.message }));
              }
            });
            return;
          }
        }

        next();
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      aistudioMediaPlugin(),
      apiDevServerPlugin(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'icon.svg', 'pwa-192x192.png', 'pwa-512x512.png', 'pwa-maskable-512x512.png'],
        manifest: {
          id: '/',
          name: 'Smart Study Tutorial Freshman',
          short_name: 'SmartStudy',
          description: 'Comprehensive offline-ready PWA for freshman university students with modules, past exams, GPA calculator, and admin portal.',
          theme_color: '#090d16',
          background_color: '#090d16',
          display: 'standalone',
          start_url: '/',
          scope: '/',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-maskable-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2,json}'],
          navigateFallback: '/index.html',
          cleanupOutdatedCaches: true,
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'gstatic-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
        devOptions: {
          enabled: true,
          type: 'module',
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
