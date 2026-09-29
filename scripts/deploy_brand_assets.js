const sharp = require('sharp');
const path = require('path');

async function deployFinitionBrandAssets() {
  const inputPath = '/Users/mcm/.gemini/antigravity/brain/978a2e5c-0bcd-4dc1-9f56-74c7555ffccb/.user_uploaded/media_1790714827753.png';
  const publicBrand = '/Users/mcm/Desktop/rovanx-main/public/brand';
  const publicDir = '/Users/mcm/Desktop/rovanx-main/public';

  console.log('Reading source image:', inputPath);
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  const isBg = new Uint8Array(w * h);
  const queue = [];

  // Seed borders
  for (let x = 0; x < w; x++) {
    for (const y of [0, h - 1]) {
      const idx = y * w + x;
      const p = idx * 4;
      if (data[p] === 255 && data[p+1] === 255 && data[p+2] === 255 && isBg[idx] === 0) {
        isBg[idx] = 1;
        queue.push(idx);
      }
    }
  }
  for (let y = 0; y < h; y++) {
    for (const x of [0, w - 1]) {
      const idx = y * w + x;
      const p = idx * 4;
      if (data[p] === 255 && data[p+1] === 255 && data[p+2] === 255 && isBg[idx] === 0) {
        isBg[idx] = 1;
        queue.push(idx);
      }
    }
  }

  // All letter seeds:
  // - O in ROVANX (245, 777)
  // - R in ROVANX (124, 763)
  // - A in ROVANX (473, 777)
  // - E in MEN'S (250, 873)
  // - S in MEN'S (349, 872)
  // - A in VITALITY (527, 853)
  const letterSeeds = [
    [245, 777], // O in ROVANX
    [124, 763], // R in ROVANX
    [473, 777], // A in ROVANX
    [250, 873], // E in MEN'S
    [349, 872], // S in MEN'S
    [527, 853]  // A in VITALITY
  ];

  for (const [sx, sy] of letterSeeds) {
    const idx = sy * w + sx;
    const p = idx * 4;
    if (data[p] >= 235 && data[p+1] >= 235 && data[p+2] >= 235 && isBg[idx] === 0) {
      isBg[idx] = 1;
      queue.push(idx);
    }
  }

  // Flood fill
  let head = 0;
  while (head < queue.length) {
    const idx = queue[head++];
    const x = idx % w, y = Math.floor(idx / w);
    for (const [nx, ny] of [[x+1, y], [x-1, y], [x, y+1], [x, y-1]]) {
      if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
        const nidx = ny * w + nx;
        if (isBg[nidx] === 0) {
          const p = nidx * 4;
          const thresh = y > 680 ? 235 : 252;
          if (data[p] >= thresh && data[p+1] >= thresh && data[p+2] >= thresh) {
            isBg[nidx] = 1;
            queue.push(nidx);
          }
        }
      }
    }
  }

  console.log(`Marked ${queue.length} background pixels.`);

  // Create clean RGBA buffer
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

  // Anti-alias fringe adjacent to background
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
          if (r >= 235 && g >= 235 && b >= 235) {
            rgba[p+3] = Math.round(255 * (4 - bgNeighbors) / 4);
          }
        }
      }
    }
  }

  const masterPng = await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toBuffer();

  const masterWebp = await sharp(masterPng)
    .webp({ quality: 95, effort: 6 })
    .toBuffer();

  const markWebp = await sharp(masterPng)
    .extract({ left: 170, top: 35, width: 528, height: 680 })
    .webp({ quality: 95, effort: 6 })
    .toBuffer();

  // Save all variants (both root and cache-busted v2)
  console.log('Writing public/brand logo and mark files...');
  await sharp(masterPng).toFile(path.join(publicBrand, 'rovanx-logo.png'));
  await sharp(masterPng).toFile(path.join(publicBrand, 'rovanx-logo-v2.png'));
  await sharp(masterWebp).toFile(path.join(publicBrand, 'rovanx-logo.webp'));
  await sharp(masterWebp).toFile(path.join(publicBrand, 'rovanx-logo-v2.webp'));
  await sharp(markWebp).toFile(path.join(publicBrand, 'rovanx-mark.webp'));
  await sharp(markWebp).toFile(path.join(publicBrand, 'rovanx-mark-v2.webp'));

  console.log('Writing public/icon.png (192x192)...');
  const lionMark = await sharp(masterPng)
    .extract({ left: 175, top: 40, width: 518, height: 665 })
    .resize(176, 176, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: {
      width: 192,
      height: 192,
      channels: 4,
      background: { r: 15, g: 17, b: 23, alpha: 1 }
    }
  })
    .composite([{ input: lionMark, gravity: 'center' }])
    .png()
    .toFile(path.join(publicDir, 'icon.png'));

  console.log('Writing public/favicon.png (32x32)...');
  await sharp(path.join(publicDir, 'icon.png'))
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));

  console.log('All finished brand assets deployed successfully!');
}

deployFinitionBrandAssets().catch(err => {
  console.error('Error deploying assets:', err);
  process.exit(1);
});
