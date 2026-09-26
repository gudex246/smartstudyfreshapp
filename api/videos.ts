// Vercel Serverless Function: /api/videos
// Stores and syncs tutorial masterclasses across all installed PWA apps and devices

interface VideoPayload {
  id: string;
  courseId: string;
  courseCode: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: string;
  topic: string;
  instructor: string;
  isPremium: boolean;
  views?: number;
  addedAt?: string;
}

export default function handler(req: any, res: any) {
  // CORS Headers for multi-device & mobile support
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }

  // File system persistence via public/data/videos.json if available
  let fs: any;
  let path: any;
  let videosFile = '';
  try {
    fs = require('fs');
    path = require('path');
    videosFile = path.resolve(process.cwd(), 'public', 'data', 'videos.json');
  } catch {}

  const loadVideos = (): VideoPayload[] => {
    try {
      if (fs && fs.existsSync(videosFile)) {
        const raw = fs.readFileSync(videosFile, 'utf-8');
        return JSON.parse(raw);
      }
    } catch {}
    return [];
  };

  const saveVideos = (data: VideoPayload[]) => {
    try {
      if (fs && videosFile) {
        const dir = path.dirname(videosFile);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(videosFile, JSON.stringify(data, null, 2), 'utf-8');
      }
    } catch {}
  };

  const videos = loadVideos();

  if (req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify(videos));
  }

  if (req.method === 'POST') {
    let body = '';
    req.on('data', (chunk: any) => { body += chunk; });
    req.on('end', () => {
      try {
        const newVideo: VideoPayload = JSON.parse(body);
        const idx = videos.findIndex(v => v.id === newVideo.id);
        if (idx >= 0) {
          videos[idx] = { ...videos[idx], ...newVideo };
        } else {
          videos.unshift(newVideo);
        }
        saveVideos(videos);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ success: true, video: newVideo }));
      } catch (e: any) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  if (req.method === 'DELETE') {
    const url = new URL(req.url, 'http://localhost:3000');
    const id = url.searchParams.get('id');
    if (id) {
      const filtered = videos.filter(v => v.id !== id);
      saveVideos(filtered);
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify({ success: true }));
    }
    res.statusCode = 400;
    return res.end(JSON.stringify({ error: 'Missing video id' }));
  }

  res.statusCode = 405;
  res.end(JSON.stringify({ error: 'Method not allowed' }));
}
