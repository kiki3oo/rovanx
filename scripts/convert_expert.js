const sharp = require('sharp');
const fs = require('fs');

const input = '/Users/mcm/.gemini/antigravity/brain/978a2e5c-0bcd-4dc1-9f56-74c7555ffccb/.user_uploaded/media_1791071373779.jpg';
const output = 'public/hero/rovanx-hero-showcase-expert.webp';

async function process() {
  await sharp(input).webp({ quality: 95, effort: 6 }).toFile(output);
  console.log('Saved expert WebP successfully:', fs.statSync(output).size, 'bytes');
}

process().catch(console.error);
