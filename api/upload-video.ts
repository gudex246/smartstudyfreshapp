// Vercel Serverless / Node Function: /api/upload-video
// Handles permanent video file uploads so videos are streamable on mobile phones & all devices

export const config = {
  api: {
    bodyParser: false, // Disables body parsing so raw video streams pipe directly to disk
  },
};

export default function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-filename');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    return res.end(JSON.stringify({ error: 'Method not allowed' }));
  }

  let fs: any;
  let path: any;
  try {
    fs = require('fs');
    path = require('path');
  } catch {
    res.statusCode = 500;
    return res.end(JSON.stringify({ error: 'Filesystem not available' }));
  }

  const url = new URL(req.url, 'http://localhost:3000');
  const rawFilename = url.searchParams.get('filename') || req.headers['x-filename'] || `video_${Date.now()}.mp4`;
  const cleanFilename = String(rawFilename).replace(/[^a-zA-Z0-9._-]/g, '_');
  
  const uploadDir = path.resolve(process.cwd(), 'public', 'uploads', 'videos');
  try {
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
  } catch {}

  const targetPath = path.resolve(uploadDir, cleanFilename);
  const writeStream = fs.createWriteStream(targetPath);

  req.pipe(writeStream);

  writeStream.on('finish', () => {
    const publicUrl = `/uploads/videos/${cleanFilename}`;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ success: true, url: publicUrl, filename: cleanFilename }));
  });

  writeStream.on('error', (err: any) => {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: err.message }));
  });
}
