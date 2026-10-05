import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// High payload limit for compressed screenshots and sync data
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Universal CORS for multi-device cross-network support
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.setHeader('Access-Control-Expose-Headers', '*');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// Ensure data and uploads directories exist
const dataDir = path.resolve(__dirname, 'public', 'data');
const uploadsDir = path.resolve(__dirname, 'public', 'uploads');
const receiptsDir = path.resolve(uploadsDir, 'receipts');
const videosUploadDir = path.resolve(uploadsDir, 'videos');

[dataDir, uploadsDir, receiptsDir, videosUploadDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const subsFile = path.resolve(dataDir, 'submissions.json');
const chatFile = path.resolve(dataDir, 'chat.json');
const videosFile = path.resolve(dataDir, 'videos.json');

const loadSubmissions = (): any[] => {
  try {
    if (fs.existsSync(subsFile)) {
      return JSON.parse(fs.readFileSync(subsFile, 'utf-8'));
    }
  } catch (e) {
    console.error('Error loading submissions:', e);
  }
  return [];
};

const saveSubmissions = (subs: any[]) => {
  try {
    fs.writeFileSync(subsFile, JSON.stringify(subs, null, 2), 'utf-8');
    // Also mirror to dist if exists
    const distData = path.resolve(__dirname, 'dist', 'data');
    if (fs.existsSync(distData)) {
      fs.writeFileSync(path.resolve(distData, 'submissions.json'), JSON.stringify(subs, null, 2), 'utf-8');
    }
  } catch (e) {
    console.error('Error saving submissions:', e);
  }
};

const loadChat = (): any[] => {
  try {
    if (fs.existsSync(chatFile)) {
      return JSON.parse(fs.readFileSync(chatFile, 'utf-8'));
    }
  } catch {}
  return [];
};

const saveChat = (messages: any[]) => {
  try {
    fs.writeFileSync(chatFile, JSON.stringify(messages, null, 2), 'utf-8');
  } catch {}
};

const loadVideos = (): any[] => {
  try {
    if (fs.existsSync(videosFile)) {
      return JSON.parse(fs.readFileSync(videosFile, 'utf-8'));
    }
  } catch {}
  return [];
};

const saveVideos = (videos: any[]) => {
  try {
    fs.writeFileSync(videosFile, JSON.stringify(videos, null, 2), 'utf-8');
  } catch {}
};

// Serve static uploaded receipts and videos with no-cache headers
app.use('/uploads', express.static(uploadsDir, {
  setHeaders: (res) => {
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('Access-Control-Allow-Origin', '*');
  }
}));

app.use('/data', express.static(dataDir, {
  setHeaders: (res) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
    res.setHeader('Access-Control-Allow-Origin', '*');
  }
}));

// --- API: Submissions (Cross-Device Payment & Verification) ---
app.get('/api/submissions', (_req, res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  const subs = loadSubmissions();
  res.json(subs);
});

app.post('/api/submissions', (req, res) => {
  try {
    const sub = req.body;
    if (!sub || !sub.id || !sub.studentName) {
      return res.status(400).json({ error: 'Missing required submission fields' });
    }

    // Save screenshot to disk if it is a base64 data URL
    if (sub.screenshotUrl && typeof sub.screenshotUrl === 'string' && sub.screenshotUrl.startsWith('data:')) {
      try {
        const matches = sub.screenshotUrl.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        if (matches && matches.length === 3) {
          const ext = matches[1].includes('png') ? 'png' : 'jpg';
          const filename = `${sub.id}.${ext}`;
          const filePath = path.resolve(receiptsDir, filename);
          const buffer = Buffer.from(matches[2], 'base64');
          fs.writeFileSync(filePath, buffer);
          sub.screenshotUrl = `/uploads/receipts/${filename}`;

          // Also mirror to dist if exists
          const distReceipts = path.resolve(__dirname, 'dist', 'uploads', 'receipts');
          if (fs.existsSync(distReceipts)) {
            fs.writeFileSync(path.resolve(distReceipts, filename), buffer);
          }

          // Asynchronously mirror image to global CDN and broadcast to admin
          fetch('https://ntfy.sh/smartstudy_receipts_guduru29', {
            method: 'POST',
            headers: { 'Filename': filename, 'Title': `Receipt ${sub.id}` },
            body: buffer
          })
            .then(r => r.json())
            .then(cdnData => {
              if (cdnData?.attachment?.url) {
                const cloudUrl = cdnData.attachment.url;
                fetch('https://ntfy.sh/smartstudy_subs_guduru29', {
                  method: 'POST',
                  headers: { 'Title': `300 ETB: ${sub.studentName}` },
                  body: JSON.stringify({ type: 'SUBMISSION', data: { ...sub, screenshotUrl: cloudUrl, cloudScreenshotUrl: cloudUrl } })
                }).catch(() => {});
              }
            })
            .catch(() => {});
        }
      } catch (err) {
        console.warn('Could not save screenshot buffer to file:', err);
      }
    }

    const currentSubs = loadSubmissions();
    const existingIndex = currentSubs.findIndex((s: any) => s.id === sub.id);
    if (existingIndex >= 0) {
      currentSubs[existingIndex] = { ...currentSubs[existingIndex], ...sub };
    } else {
      currentSubs.unshift(sub);
    }

    saveSubmissions(currentSubs);
    res.json({ success: true, submission: sub });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/upload-receipt', (req, res) => {
  try {
    const { image, id } = req.body;
    if (!image) return res.status(400).json({ error: 'No image provided' });
    const filename = `receipt-${id || Date.now()}.jpg`;
    const filePath = path.resolve(receiptsDir, filename);
    const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    fs.writeFileSync(filePath, buffer);
    const localUrl = `/uploads/receipts/${filename}`;

    // Mirror to global CDN
    fetch('https://ntfy.sh/smartstudy_receipts_guduru29', {
      method: 'POST',
      headers: { 'Filename': filename, 'Title': `Receipt ${id}` },
      body: buffer
    })
      .then(r => r.json())
      .then(cdnData => {
        const cloudUrl = cdnData?.attachment?.url || localUrl;
        res.json({ success: true, url: cloudUrl, localUrl });
      })
      .catch(() => {
        res.json({ success: true, url: localUrl, localUrl });
      });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.patch('/api/submissions', (req, res) => {
  try {
    const { id, status, adminNotes, verifiedAt } = req.body;
    const currentSubs = loadSubmissions();
    const target = currentSubs.find((s: any) => s.id === id);
    if (target) {
      if (status) target.status = status;
      if (adminNotes !== undefined) target.adminNotes = adminNotes;
      if (verifiedAt) target.verifiedAt = verifiedAt;
      saveSubmissions(currentSubs);
      return res.json({ success: true, target });
    }
    res.status(404).json({ error: 'Submission not found' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/submissions/:id', (req, res) => {
  try {
    const { id } = req.params;
    let currentSubs = loadSubmissions();
    currentSubs = currentSubs.filter((s: any) => s.id !== id);
    saveSubmissions(currentSubs);
    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// --- API: Chat Messages ---
app.get('/api/chat', (_req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.json(loadChat());
});

app.post('/api/chat', (req, res) => {
  try {
    const msg = req.body;
    if (!msg || !msg.id || !msg.text) {
      return res.status(400).json({ error: 'Missing message fields' });
    }
    const currentChat = loadChat();
    currentChat.push(msg);
    saveChat(currentChat.slice(-500));
    res.json({ success: true, message: msg });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// --- API: Video Synchronization ---
app.get('/api/videos', (_req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.json(loadVideos());
});

app.post('/api/videos', (req, res) => {
  try {
    const video = req.body;
    if (!video || !video.id) {
      return res.status(400).json({ error: 'Missing video fields' });
    }
    const currentVideos = loadVideos();
    const existingIndex = currentVideos.findIndex((v: any) => v.id === video.id);
    if (existingIndex >= 0) {
      currentVideos[existingIndex] = { ...currentVideos[existingIndex], ...video };
    } else {
      currentVideos.push(video);
    }
    saveVideos(currentVideos);
    res.json({ success: true, video });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/upload-video', (req, res) => {
  const rawFilename = req.query.filename || req.headers['x-filename'] || `video_${Date.now()}.mp4`;
  const cleanFilename = String(rawFilename).replace(/[^a-zA-Z0-9._-]/g, '_');
  const filePath = path.resolve(videosUploadDir, cleanFilename);
  const writeStream = fs.createWriteStream(filePath);
  req.pipe(writeStream);
  writeStream.on('finish', () => {
    res.json({ success: true, url: `/uploads/videos/${cleanFilename}`, filename: cleanFilename });
  });
  writeStream.on('error', (err: any) => {
    res.status(500).json({ error: err.message });
  });
});

app.delete('/api/videos', (req, res) => {
  const vidId = req.query.id as string;
  if (vidId) {
    let currentVideos = loadVideos();
    currentVideos = currentVideos.filter((v: any) => v.id !== vidId);
    saveVideos(currentVideos);
    return res.json({ success: true });
  }
  res.status(400).json({ error: 'Missing video id' });
});

// --- Mount Vite / Static ---
const isProduction = process.env.NODE_ENV === 'production';

async function startServer() {
  const { createServer } = await import('http');
  const server = createServer(app);

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: { server }
      },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  server.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port} [${isProduction ? 'production' : 'development'}]`);
  });
}

startServer();
