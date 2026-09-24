import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

// Minimal standalone PNG encoder in pure Node.js
function createPNG(width, height, getPixel) {
  // Signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr.writeUInt8(8, 8); // 8-bit depth
  ihdr.writeUInt8(6, 9); // RGBA color type
  ihdr.writeUInt8(0, 10); // Deflate
  ihdr.writeUInt8(0, 11); // Filter method 0
  ihdr.writeUInt8(0, 12); // Interlace 0

  function chunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, 'ascii');
    const crcBuf = Buffer.alloc(4);

    let c = 0xffffffff;
    const update = (buf) => {
      for (let i = 0; i < buf.length; i++) {
        c = (c ^ buf[i]);
        for (let j = 0; j < 8; j++) {
          c = (c >>> 1) ^ ((c & 1) ? 0xedb88320 : 0);
        }
      }
    };
    update(typeBuf);
    update(data);
    crcBuf.writeInt32BE(~c, 0);

    return Buffer.concat([len, typeBuf, data, crcBuf]);
  }

  const ihdrChunk = chunk('IHDR', ihdr);

  // Raw image data with 0 filter byte per scanline
  const rowSize = 1 + width * 4;
  const rawData = Buffer.alloc(height * rowSize);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0; // None filter
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = getPixel(x, y, width, height);
      const pixelOffset = rowOffset + 1 + x * 4;
      rawData[pixelOffset] = r;
      rawData[pixelOffset + 1] = g;
      rawData[pixelOffset + 2] = b;
      rawData[pixelOffset + 3] = a;
    }
  }

  const idatData = zlib.deflateSync(rawData);
  const idatChunk = chunk('IDAT', idatData);
  const iendChunk = chunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function renderIcon(isMaskable) {
  return (x, y, w, h) => {
    // Normalizing coordinates -1 to 1
    const nx = (x / w) * 2 - 1;
    const ny = (y / h) * 2 - 1;
    const r = Math.sqrt(nx * nx + ny * ny);

    // Background gradient: Navy (#1e3a8a) to deep midnight (#0f172a)
    const t = (nx + ny + 2) / 4;
    let bgR = Math.round(30 * (1 - t) + 15 * t);
    let bgG = Math.round(58 * (1 - t) + 23 * t);
    let bgB = Math.round(138 * (1 - t) + 42 * t);
    let alpha = 255;

    if (!isMaskable) {
      // Rounded corner squircle
      const cornerR = 0.78;
      const ax = Math.abs(nx);
      const ay = Math.abs(ny);
      if (ax > cornerR && ay > cornerR) {
        const d = Math.sqrt(Math.pow(ax - cornerR, 2) + Math.pow(ay - cornerR, 2));
        if (d > (1 - cornerR)) {
          alpha = 0;
        }
      }
    }

    if (alpha === 0) return [0, 0, 0, 0];

    // Inner icon graphics (scale slightly down for maskable safe zone)
    const scale = isMaskable ? 0.75 : 0.85;
    const sx = nx / scale;
    const sy = (ny + 0.05) / scale; // slight vertical center

    // Cap diamond: |sx|/0.7 + |sy - (-0.2)|/0.25 <= 1
    const diamondDist = Math.abs(sx) / 0.65 + Math.abs(sy - (-0.18)) / 0.22;
    if (diamondDist <= 1.0) {
      // Cap highlight gradient: bright sky blue #38bdf8 to cobalt #2563eb
      const ct = (sx + 0.65) / 1.3;
      const cr = Math.round(56 * (1 - ct) + 37 * ct);
      const cg = Math.round(189 * (1 - ct) + 99 * ct);
      const cb = Math.round(248 * (1 - ct) + 235 * ct);
      return [cr, cg, cb, 255];
    }

    // Open book below: sy between 0.15 and 0.55, |sx| < 0.65
    if (sy >= 0.15 && sy <= 0.55 && Math.abs(sx) <= 0.62) {
      // spine divider
      if (Math.abs(sx) < 0.03) {
        return [59, 130, 246, 255]; // blue spine
      }
      // pages
      const pageR = sx > 0 ? 235 : 248;
      const pageG = sx > 0 ? 240 : 250;
      const pageB = sx > 0 ? 248 : 252;
      return [pageR, pageG, pageB, 255];
    }

    // Star/beacon on top
    const starDist = Math.sqrt(sx * sx + (sy - (-0.45)) * (sy - (-0.45)));
    if (starDist <= 0.08) {
      return [245, 158, 11, 255]; // Amber gold
    }

    return [bgR, bgG, bgB, alpha];
  };
}

const outDir = path.resolve(process.cwd(), 'public');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Generate 192x192
const p192 = createPNG(192, 192, renderIcon(false));
fs.writeFileSync(path.join(outDir, 'pwa-192x192.png'), p192);

// Generate 512x512
const p512 = createPNG(512, 512, renderIcon(false));
fs.writeFileSync(path.join(outDir, 'pwa-512x512.png'), p512);

// Generate 512x512 maskable (safe-zone padding, full bleed background)
const pMask = createPNG(512, 512, renderIcon(true));
fs.writeFileSync(path.join(outDir, 'pwa-maskable-512x512.png'), pMask);

// Generate apple-touch-icon 180x180
const pApple = createPNG(180, 180, renderIcon(false));
fs.writeFileSync(path.join(outDir, 'apple-touch-icon.png'), pApple);

// Generate favicon 64x64
const pFavicon = createPNG(64, 64, renderIcon(false));
fs.writeFileSync(path.join(outDir, 'favicon.ico'), pFavicon);

console.log('Successfully generated all PWA icons (PNG and ICO)');
