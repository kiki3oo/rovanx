const sharp = require('sharp');
const fs = require('fs');

async function process() {
  const img1 = '/Users/mcm/.gemini/antigravity/brain/978a2e5c-0bcd-4dc1-9f56-74c7555ffccb/.user_uploaded/media_1791074386874.jpg';
  const out1 = 'public/hero/rovanx-hero-showcase-couple-rf.webp';
  await sharp(img1).webp({ quality: 95, effort: 6 }).toFile(out1);
  console.log('Saved couple RF WebP:', fs.statSync(out1).size, 'bytes');

  const img2 = '/Users/mcm/.gemini/antigravity/brain/978a2e5c-0bcd-4dc1-9f56-74c7555ffccb/.user_uploaded/media_1791074386921.jpg';
  const out2 = 'public/hero/rovanx-hero-showcase-adventure-rf.webp';
  await sharp(img2).webp({ quality: 95, effort: 6 }).toFile(out2);
  console.log('Saved adventure RF WebP:', fs.statSync(out2).size, 'bytes');
}

process().catch(console.error);
