const sharp = require('/Users/mcm/Desktop/rovanx-main/node_modules/sharp');
const fs = require('fs');
const path = require('path');

async function deployAssets() {
  const masterPath = '/Users/mcm/.gemini/antigravity/brain/978a2e5c-0bcd-4dc1-9f56-74c7555ffccb/scratch/test_perfect3.png';
  const publicBrand = '/Users/mcm/Desktop/rovanx-main/public/brand';
  const publicDir = '/Users/mcm/Desktop/rovanx-main/public';

  console.log('Generating public/brand/rovanx-logo.png...');
  await sharp(masterPath)
    .png({ compressionLevel: 9 })
    .toFile(path.join(publicBrand, 'rovanx-logo.png'));

  console.log('Generating public/brand/rovanx-logo.webp...');
  await sharp(masterPath)
    .webp({ quality: 95, effort: 6 })
    .toFile(path.join(publicBrand, 'rovanx-logo.webp'));

  console.log('Generating public/brand/rovanx-mark.webp...');
  // Lion bounds: minX: 185, maxX: 682, minY: 46, maxY: 699 (width: 498, height: 654)
  // Extract with 15px padding: left: 170, top: 35, width: 528, height: 680
  await sharp(masterPath)
    .extract({ left: 170, top: 35, width: 528, height: 680 })
    .webp({ quality: 95, effort: 6 })
    .toFile(path.join(publicBrand, 'rovanx-mark.webp'));

  console.log('Generating public/icon.png (192x192)...');
  // Square container for icon with lion emblem centered
  const lionMark = await sharp(masterPath)
    .extract({ left: 175, top: 40, width: 518, height: 665 })
    .resize(176, 176, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: {
      width: 192,
      height: 192,
      channels: 4,
      background: { r: 15, g: 17, b: 23, alpha: 1 } // Dark brand navy bg
    }
  })
    .composite([{ input: lionMark, gravity: 'center' }])
    .png()
    .toFile(path.join(publicDir, 'icon.png'));

  console.log('Generating public/favicon.png (32x32)...');
  await sharp(path.join(publicDir, 'icon.png'))
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));

  console.log('All brand assets successfully generated and deployed to public/ !');
}

deployAssets().catch(console.error);
