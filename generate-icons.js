const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function createPng(width, height, drawFn) {
  const bytesPerPixel = 4;
  const rowSize = width * bytesPerPixel;
  const rawData = Buffer.alloc((rowSize + 1) * height);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * (rowSize + 1);
    rawData[rowOffset] = 0; // Filter type None
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = drawFn(x, y, width, height);
      const pixelOffset = rowOffset + 1 + x * bytesPerPixel;
      rawData[pixelOffset] = r;
      rawData[pixelOffset + 1] = g;
      rawData[pixelOffset + 2] = b;
      rawData[pixelOffset + 3] = a;
    }
  }

  const deflated = zlib.deflateSync(rawData);

  function crc32(buf) {
    let crc = 0 ^ (-1);
    for (let i = 0; i < buf.length; i++) {
      crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
    }
    return (crc ^ (-1)) >>> 0;
  }
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) c = ((c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1));
    table[i] = c >>> 0;
  }

  function makeChunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeAndData = Buffer.concat([Buffer.from(type, 'ascii'), data]);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(typeAndData), 0);
    return Buffer.concat([len, typeAndData, crc]);
  }

  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8;
  ihdrData[9] = 6;
  ihdrData[10] = 0;
  ihdrData[11] = 0;
  ihdrData[12] = 0;

  const ihdr = makeChunk('IHDR', ihdrData);
  const idat = makeChunk('IDAT', deflated);
  const iend = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdr, idat, iend]);
}

// Geometric functions
function pointInTriangle(px, py, ax, ay, bx, by, cx, cy) {
  const d1 = (px - bx) * (ay - by) - (ax - bx) * (py - by);
  const d2 = (px - cx) * (by - cy) - (bx - cx) * (py - cy);
  const d3 = (px - ax) * (cy - ay) - (cx - ax) * (py - ay);
  const hasNeg = (d1 < 0) || (d2 < 0) || (d3 < 0);
  const hasPos = (d1 > 0) || (d2 > 0) || (d3 > 0);
  return !(hasNeg && hasPos);
}

function pointInStar(px, py, cx, cy, rOuter, rInner, points = 5) {
  const dx = px - cx;
  const dy = py - cy;
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist > rOuter) return false;
  if (dist < rInner * 0.5) return true;

  // angle from top (-PI/2)
  let angle = Math.atan2(dy, dx) + Math.PI / 2;
  while (angle < 0) angle += 2 * Math.PI;
  angle = angle % (2 * Math.PI);

  const step = Math.PI / points;
  const relAngle = angle % (2 * step);
  const symAngle = relAngle > step ? 2 * step - relAngle : relAngle;
  const maxR = rInner / Math.cos(symAngle);
  return dist <= Math.min(rOuter, maxR * 1.55);
}

function renderAppIcon(x, y, w, h, isMaskable = false) {
  // Normalize
  const nx = x / w;
  const ny = y / h;

  // Background
  const bgR = 10, bgG = 18, bgB = 34; // #0a1222

  // TV Screen boundaries
  const tvMargin = isMaskable ? 0.22 : 0.12;
  const tvLeft = tvMargin;
  const tvRight = 1 - tvMargin;
  const tvTop = tvMargin * 1.05;
  const tvBottom = 1 - tvMargin * 1.25;

  const tvW = tvRight - tvLeft;
  const tvH = tvBottom - tvTop;

  // Stand at bottom
  if (ny > tvBottom && ny < tvBottom + 0.08 && nx > 0.42 && nx < 0.58) {
    return [30, 41, 59, 255];
  }
  if (ny >= tvBottom + 0.07 && ny <= tvBottom + 0.11 && nx > 0.32 && nx < 0.68) {
    return [51, 65, 85, 255];
  }

  // Inside TV Screen
  if (nx >= tvLeft && nx <= tvRight && ny >= tvTop && ny <= tvBottom) {
    // Bezel check
    const border = 0.022;
    if (nx < tvLeft + border || nx > tvRight - border || ny < tvTop + border || ny > tvBottom - border) {
      // Sleek metallic border
      return [30, 48, 80, 255];
    }

    // Inside Flag Display Area
    const fx = (nx - (tvLeft + border)) / (tvW - 2 * border);
    const fy = (ny - (tvTop + border)) / (tvH - 2 * border);

    // Live dot in top-right
    const dotDx = fx - 0.92;
    const dotDy = fy - 0.12;
    if (dotDx * dotDx + dotDy * dotDy < 0.0016) {
      return [239, 68, 68, 255]; // Red live dot
    }

    // Triangle chevron on the left (Puerto Rico flag blue)
    // Points: (0, 0), (0.45, 0.5), (0, 1)
    const inChevron = pointInTriangle(fx, fy, 0, 0, 0.46, 0.5, 0, 1);

    if (inChevron) {
      // Star inside chevron: center at (0.15, 0.5)
      const starCx = 0.155;
      const starCy = 0.5;
      const rOuter = 0.11;
      const rInner = 0.046;
      if (pointInStar(fx, fy, starCx, starCy, rOuter, rInner)) {
        return [255, 255, 255, 255]; // White star
      }
      // PR Flag Blue: #0047BA (or classic royal celestial blue #0050d8)
      return [0, 85, 212, 255];
    } else {
      // 5 stripes: Red, White, Red, White, Red
      const stripeIdx = Math.floor(fy * 5);
      if (stripeIdx % 2 === 0) {
        // Red stripe: #ED0000
        return [237, 28, 36, 255];
      } else {
        // White stripe
        return [255, 255, 255, 255];
      }
    }
  }

  // Exterior background
  // Radial gradient glow
  const cdx = nx - 0.5;
  const cdy = ny - 0.45;
  const distCenter = Math.sqrt(cdx * cdx + cdy * cdy);
  const glow = Math.max(0, 1 - distCenter * 1.5);

  return [
    Math.round(bgR + glow * 15),
    Math.round(bgG + glow * 25),
    Math.round(bgB + glow * 45),
    255
  ];
}

console.log('Generating PWA icons...');
const iconDir = path.join(__dirname, 'icons');

const sizes = [
  { name: 'icon-192.png', size: 192, maskable: false },
  { name: 'icon-512.png', size: 512, maskable: false },
  { name: 'icon-maskable-192.png', size: 192, maskable: true },
  { name: 'icon-maskable-512.png', size: 512, maskable: true },
  { name: 'apple-touch-icon.png', size: 180, maskable: false },
  { name: 'favicon.png', size: 64, maskable: false }
];

for (const item of sizes) {
  const buf = createPng(item.size, item.size, (x, y, w, h) => renderAppIcon(x, y, w, h, item.maskable));
  fs.writeFileSync(path.join(iconDir, item.name), buf);
  console.log(`Generated ${item.name} (${item.size}x${item.size}) - ${buf.length} bytes`);
}
console.log('Icon generation complete!');
