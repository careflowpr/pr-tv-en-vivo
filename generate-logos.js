const fs = require('fs');
const path = require('path');

const logosDir = path.join(__dirname, 'logos');

const logos = {
  'wapa.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <defs>
    <linearGradient id="wapaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0066cc"/>
      <stop offset="100%" stop-color="#003380"/>
    </linearGradient>
    <linearGradient id="gold4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fbbf24"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
  </defs>
  <rect width="240" height="80" rx="14" fill="#0c1829"/>
  <rect x="2" y="2" width="236" height="76" rx="12" fill="none" stroke="#1e3a66" stroke-width="2"/>
  <!-- WAPA text in bold -->
  <text x="18" y="52" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="34" font-weight="900" fill="#ffffff" letter-spacing="1.5">WAPA</text>
  <!-- Canal 4 Badge -->
  <circle cx="178" cy="40" r="24" fill="url(#gold4)"/>
  <text x="178" y="49" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="900" fill="#0c1829" text-anchor="middle">4</text>
  <!-- Subtext -->
  <text x="18" y="68" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="700" fill="#93c5fd" letter-spacing="2">PUERTO RICO · NOTICENTRO</text>
</svg>`,

  'telemundo.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <defs>
    <linearGradient id="teleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#e11d48"/>
      <stop offset="100%" stop-color="#be123c"/>
    </linearGradient>
  </defs>
  <rect width="240" height="80" rx="14" fill="#0f172a"/>
  <rect x="2" y="2" width="236" height="76" rx="12" fill="none" stroke="#334155" stroke-width="2"/>
  <!-- Telemundo T emblem -->
  <g transform="translate(18, 16)">
    <path d="M 6 0 L 34 0 C 37 0 40 3 40 6 L 40 12 C 40 14 38 16 36 16 L 24 16 L 24 44 C 24 46 22 48 20 48 L 14 48 C 12 48 10 46 10 44 L 10 16 L 4 16 C 2 16 0 14 0 12 L 0 6 C 0 3 3 0 6 0 Z" fill="url(#teleGrad)"/>
    <circle cx="42" cy="10" r="5" fill="#38bdf8"/>
  </g>
  <!-- Text -->
  <text x="74" y="40" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="21" font-weight="800" fill="#ffffff" letter-spacing="1">TELEMUNDO</text>
  <text x="74" y="58" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" fill="#f43f5e" letter-spacing="1.5">PUERTO RICO · CANAL 2</text>
</svg>`,

  'teleonce.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <defs>
    <linearGradient id="onceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#dc2626"/>
      <stop offset="100%" stop-color="#991b1b"/>
    </linearGradient>
  </defs>
  <rect width="240" height="80" rx="14" fill="#14080e"/>
  <rect x="2" y="2" width="236" height="76" rx="12" fill="none" stroke="#4c1d2e" stroke-width="2"/>
  <!-- TeleOnce Text -->
  <text x="20" y="47" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="900" fill="#ffffff">Tele<tspan fill="#ef4444">Once</tspan></text>
  <!-- 11 badge -->
  <rect x="172" y="18" width="46" height="44" rx="8" fill="url(#onceGrad)"/>
  <text x="195" y="49" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26" font-weight="900" fill="#ffffff" text-anchor="middle">11</text>
  <text x="20" y="66" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="700" fill="#fca5a5" letter-spacing="2">LAS NOTICIAS · PELOTA DURA</text>
</svg>`,

  'wipr.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <defs>
    <linearGradient id="wiprGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
  </defs>
  <rect width="240" height="80" rx="14" fill="#061c1b"/>
  <rect x="2" y="2" width="236" height="76" rx="12" fill="none" stroke="#0d4d44" stroke-width="2"/>
  <!-- WIPR Circle -->
  <circle cx="44" cy="40" r="24" fill="url(#wiprGrad)"/>
  <text x="44" y="49" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26" font-weight="900" fill="#ffffff" text-anchor="middle">6</text>
  <!-- Text -->
  <text x="82" y="42" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="27" font-weight="900" fill="#34d399" letter-spacing="1">WIPR</text>
  <text x="156" y="42" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="700" fill="#38bdf8">PRTV+</text>
  <text x="82" y="62" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="700" fill="#a7f3d0" letter-spacing="1.5">TELEVISIÓN PÚBLICA DE PR</text>
</svg>`,

  'teleoro.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <defs>
    <linearGradient id="oroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#b45309"/>
    </linearGradient>
  </defs>
  <rect width="240" height="80" rx="14" fill="#181308"/>
  <rect x="2" y="2" width="236" height="76" rx="12" fill="none" stroke="#543c13" stroke-width="2"/>
  <circle cx="44" cy="40" r="24" fill="url(#oroGrad)"/>
  <text x="44" y="49" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="900" fill="#ffffff" text-anchor="middle">13</text>
  <text x="80" y="41" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="900" fill="#fbbf24">TELEORO</text>
  <text x="80" y="61" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="700" fill="#fef3c7" letter-spacing="1.5">CANAL 13 · WORO PUERTO RICO</text>
</svg>`,

  'abc5.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <rect width="240" height="80" rx="14" fill="#0d1117"/>
  <rect x="2" y="2" width="236" height="76" rx="12" fill="none" stroke="#30363d" stroke-width="2"/>
  <circle cx="44" cy="40" r="22" fill="#21262d"/>
  <text x="44" y="48" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="900" fill="#ffffff" text-anchor="middle">abc</text>
  <text x="80" y="44" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="30" font-weight="900" fill="#ffffff">5 <tspan font-size="16" font-weight="700" fill="#60a5fa">PR</tspan></text>
  <text x="80" y="63" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="700" fill="#9ca3af" letter-spacing="1.5">WORA-TV · NOTICIAS LOCALES</text>
</svg>`,

  'cdm.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <defs>
    <linearGradient id="cdmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#0369a1"/>
    </linearGradient>
  </defs>
  <rect width="240" height="80" rx="14" fill="#081829"/>
  <rect x="2" y="2" width="236" height="76" rx="12" fill="none" stroke="#143e6d" stroke-width="2"/>
  <circle cx="42" cy="40" r="23" fill="url(#cdmGrad)"/>
  <!-- stylized globe lines -->
  <ellipse cx="42" cy="40" rx="15" ry="21" fill="none" stroke="#7dd3fc" stroke-width="1.8"/>
  <line x1="20" y1="40" x2="64" y2="40" stroke="#7dd3fc" stroke-width="1.8"/>
  <text x="80" y="42" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26" font-weight="900" fill="#38bdf8">CDM</text>
  <text x="146" y="42" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="700" fill="#f8fafc">7.2</text>
  <text x="80" y="62" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="700" fill="#bae6fd" letter-spacing="1.5">INTERNACIONAL · PUERTO RICO</text>
</svg>`,

  'vivatv.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <defs>
    <linearGradient id="vivaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>
  </defs>
  <rect width="240" height="80" rx="14" fill="#170c22"/>
  <rect x="2" y="2" width="236" height="76" rx="12" fill="none" stroke="#48246d" stroke-width="2"/>
  <rect x="18" y="18" width="46" height="44" rx="12" fill="url(#vivaGrad)"/>
  <text x="41" y="49" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26" font-weight="900" fill="#ffffff" text-anchor="middle">8</text>
  <text x="76" y="42" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="25" font-weight="900" fill="#c084fc">VIVA <tspan fill="#f472b6">TV</tspan></text>
  <text x="76" y="62" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="700" fill="#e9d5ff" letter-spacing="1.5">CANAL 8 · SAN JUAN / AGUADILLA</text>
</svg>`,

  'allegro.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <defs>
    <linearGradient id="radGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14b8a6"/>
      <stop offset="100%" stop-color="#0f766e"/>
    </linearGradient>
  </defs>
  <rect width="240" height="80" rx="14" fill="#071b19"/>
  <rect x="2" y="2" width="236" height="76" rx="12" fill="none" stroke="#134e48" stroke-width="2"/>
  <circle cx="42" cy="40" r="22" fill="url(#radGrad)"/>
  <!-- soundwave icon -->
  <path d="M 33 46 L 33 34 M 38 50 L 38 30 M 42 54 L 42 26 M 46 50 L 46 30 M 51 46 L 51 34" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
  <text x="78" y="41" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="900" fill="#2dd4bf">PRTV RADIO</text>
  <text x="78" y="61" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="700" fill="#99f6e4" letter-spacing="1.5">940 AM &amp; ALLEGRO 91.3 FM</text>
</svg>`,

  'wkaq.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <defs>
    <linearGradient id="wkaqGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e40af"/>
      <stop offset="100%" stop-color="#172554"/>
    </linearGradient>
  </defs>
  <rect width="240" height="80" rx="14" fill="#0b1329"/>
  <rect x="2" y="2" width="236" height="76" rx="12" fill="none" stroke="#1d3557" stroke-width="2"/>
  <rect x="18" y="20" width="48" height="40" rx="8" fill="url(#wkaqGrad)"/>
  <text x="42" y="47" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="900" fill="#ffffff" text-anchor="middle">580</text>
  <text x="78" y="41" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="900" fill="#60a5fa">WKAQ <tspan font-size="15" fill="#ffffff">AM</tspan></text>
  <text x="78" y="61" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="700" fill="#bfdbfe" letter-spacing="1.5">PRIMERA EN NOTICIAS · PR</text>
</svg>`,

  'notiuno.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <defs>
    <linearGradient id="notiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#b91c1c"/>
      <stop offset="100%" stop-color="#7f1d1d"/>
    </linearGradient>
  </defs>
  <rect width="240" height="80" rx="14" fill="#190a0a"/>
  <rect x="2" y="2" width="236" height="76" rx="12" fill="none" stroke="#521616" stroke-width="2"/>
  <rect x="18" y="20" width="48" height="40" rx="8" fill="url(#notiGrad)"/>
  <text x="42" y="47" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="900" fill="#ffffff" text-anchor="middle">630</text>
  <text x="78" y="41" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="900" fill="#f87171">NOTIUNO <tspan font-size="14" fill="#ffffff">630</tspan></text>
  <text x="78" y="61" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="700" fill="#fecaca" letter-spacing="1.5">EN VIVO · INFORMACIÓN DE PR</text>
</svg>`
};

for (const [filename, svg] of Object.entries(logos)) {
  fs.writeFileSync(path.join(logosDir, filename), svg.trim());
  console.log('Saved logo:', filename);
}
console.log('All SVG logos created successfully!');
