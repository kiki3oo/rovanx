const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function deployFinitionBrandAssets() {
  const inputPath = '/Users/mcm/.gemini/antigravity/brain/978a2e5c-0bcd-4dc1-9f56-74c7555ffccb/.user_uploaded/media_1791066495541.png';
  const publicBrand = '/Users/mcm/Desktop/rovanx-main/public/brand';
  const publicDir = '/Users/mcm/Desktop/rovanx-main/public';

  console.log('Reading source image:', inputPath);
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  const isBg = new Uint8Array(w * h);
  const queue = [];

  // 1. Seed borders
  for (let x = 0; x < w; x++) {
    for (const y of [0, h - 1]) {
      const idx = y * w + x;
      const p = idx * 4;
      if (data[p] >= 245 && data[p+1] >= 245 && data[p+2] >= 245 && isBg[idx] === 0) {
        isBg[idx] = 1;
        queue.push(idx);
      }
    }
  }
  for (let y = 0; y < h; y++) {
    for (const x of [0, w - 1]) {
      const idx = y * w + x;
      const p = idx * 4;
      if (data[p] >= 245 && data[p+1] >= 245 && data[p+2] >= 245 && isBg[idx] === 0) {
        isBg[idx] = 1;
        queue.push(idx);
      }
    }
  }

  // 2. Letter counters:
  // - O in ROVANX (267, 683)
  // - R in ROVANX (126, 664)
  // - A in ROVANX (541, 680)
  // - A in VITALITY (606, 788)
  const letterSeeds = [
    [267, 683], // O in ROVANX
    [126, 664], // R in ROVANX
    [541, 680], // A in ROVANX
    [606, 788]  // A in VITALITY
  ];

  for (const [sx, sy] of letterSeeds) {
    const idx = sy * w + sx;
    const p = idx * 4;
    if (data[p] >= 230 && data[p+1] >= 230 && data[p+2] >= 230 && isBg[idx] === 0) {
      isBg[idx] = 1;
      queue.push(idx);
    }
  }

  // 3. Flood fill
  let head = 0;
  while (head < queue.length) {
    const idx = queue[head++];
    const x = idx % w, y = Math.floor(idx / w);
    for (const [nx, ny] of [[x+1, y], [x-1, y], [x, y+1], [x, y-1]]) {
      if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
        const nidx = ny * w + nx;
        if (isBg[nidx] === 0) {
          const p = nidx * 4;
          const thresh = y > 600 ? 230 : 246;
          if (data[p] >= thresh && data[p+1] >= thresh && data[p+2] >= thresh) {
            isBg[nidx] = 1;
            queue.push(nidx);
          }
        }
      }
    }
  }

  console.log(`Marked ${queue.length} background pixels.`);

  // 4. Clean RGBA buffer
  const rgba = Buffer.alloc(w * h * 4);
  for (let i = 0; i < w * h; i++) {
    const p = i * 4;
    if (isBg[i] === 1) {
      rgba[p] = 0;
      rgba[p+1] = 0;
      rgba[p+2] = 0;
      rgba[p+3] = 0;
    } else {
      rgba[p] = data[p];
      rgba[p+1] = data[p+1];
      rgba[p+2] = data[p+2];
      rgba[p+3] = 255;
    }
  }

  // 5. Anti-alias fringe adjacent to background
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const idx = y * w + x;
      if (isBg[idx] === 0) {
        let bgNeighbors = 0;
        for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
          if (isBg[(y+dy)*w + (x+dx)] === 1) bgNeighbors++;
        }
        if (bgNeighbors > 0) {
          const p = idx * 4;
          const r = rgba[p], g = rgba[p+1], b = rgba[p+2];
          if (r >= 220 && g >= 220 && b >= 220) {
            rgba[p+3] = Math.round(255 * (4 - bgNeighbors) / 4);
          }
        }
      }
    }
  }

  const masterPng = await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
    .extract({ left: 54, top: 15, width: 906, height: 804 })
    .png({ compressionLevel: 9 })
    .toBuffer();

  const masterWebp = await sharp(masterPng)
    .webp({ quality: 95, effort: 6 })
    .toBuffer();

  const markPng = await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
    .extract({ left: 260, top: 18, width: 535, height: 597 })
    .png({ compressionLevel: 9 })
    .toBuffer();

  const markWebp = await sharp(markPng)
    .webp({ quality: 95, effort: 6 })
    .toBuffer();

  // Save all variants
  console.log('Writing public/brand logo and mark files...');
  await sharp(masterPng).toFile(path.join(publicBrand, 'rovanx-logo.png'));
  await sharp(masterPng).toFile(path.join(publicBrand, 'rovanx-logo-v2.png'));
  await sharp(masterWebp).toFile(path.join(publicBrand, 'rovanx-logo.webp'));
  await sharp(masterWebp).toFile(path.join(publicBrand, 'rovanx-logo-v2.webp'));
  await sharp(markPng).toFile(path.join(publicBrand, 'rovanx-mark.png'));
  await sharp(markWebp).toFile(path.join(publicBrand, 'rovanx-mark.webp'));
  await sharp(markWebp).toFile(path.join(publicBrand, 'rovanx-mark-v2.webp'));

  console.log('Writing public/icon.png and src/app/icon.png (192x192 transparent)...');
  const lionIcon192 = await sharp(markPng)
    .resize(184, 184, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const icon192 = await sharp({
    create: {
      width: 192,
      height: 192,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([{ input: lionIcon192, gravity: 'center' }])
    .png()
    .toBuffer();

  await sharp(icon192).toFile(path.join(publicDir, 'icon.png'));
  await sharp(icon192).toFile('/Users/mcm/Desktop/rovanx-main/src/app/icon.png');
  await sharp(icon192).resize(180, 180).toFile(path.join(publicDir, 'apple-touch-icon.png'));

  console.log('Writing public/favicon.png (32x32 transparent)...');
  const favicon32 = await sharp(icon192)
    .resize(32, 32)
    .png()
    .toBuffer();
  await sharp(favicon32).toFile(path.join(publicDir, 'favicon.png'));
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), favicon32);

  console.log('Writing public/favicon.svg (transparent SVG)...');
  const svgMarkBase64 = (await sharp(markPng).resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer()).toString('base64');
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
  <image href="data:image/png;base64,${svgMarkBase64}" x="0" y="0" width="180" height="180"/>
</svg>
`;
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent, 'utf8');

  console.log('All brand assets deployed transparently!');
}

deployFinitionBrandAssets().catch(err => {
  console.error('Error deploying assets:', err);
  process.exit(1);
});
