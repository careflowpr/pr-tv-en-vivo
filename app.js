// PR TV en Vivo - Aplicación Web Progresiva Oficial
// Diseñada para la diáspora puertorriqueña en Texas y el mundo

const CHANNELS = [
  {
    id: 'wapa',
    name: 'WAPA TV',
    dial: 'Canal 4',
    category: 'general',
    logo: 'logos/wapa.svg',
    tagline: 'NotiCentro · La Noticia Primero',
    badge: {
      text: 'Noticieros y Especiales en Vivo',
      status: 'warning'
    },
    usStatus: {
      summary: 'Disponible en EE.UU. durante NotiCentro',
      detail: 'Las 4 ediciones diarias de NotiCentro y coberturas de emergencia o elecciones transmiten en vivo gratis por su web y YouTube oficial. La programación regular 24/7 de entretenimiento está restringida en EE.UU. por derechos de sindicación (en EE.UU. se emite Wapa América por cable).'
    },
    schedule: 'NotiCentro al Amanecer (5:00 AM AST / 4:00 AM Texas) · Edición Estelar (4:00 PM AST / 3:00 PM Texas) · Edición Nocturna (11:00 PM AST / 10:00 PM Texas)',
    streamUrl: 'https://www.wapa.tv/en-vivo/',
    youtubeUrl: 'https://www.youtube.com/@WapaTVOficial',
    officialUrl: 'https://www.wapa.tv',
    embedType: 'portal',
    embedUrl: null,
    embedNotes: 'WAPA protege su reproductor web principal contra incrustaciones (X-Frame-Options). Haz clic en el botón para abrir la transmisión oficial en vivo o ver la cobertura en YouTube.'
  },
  {
    id: 'telemundo',
    name: 'Telemundo PR',
    dial: 'Canal 2 (WKAQ-TV)',
    category: 'general',
    logo: 'logos/telemundo.svg',
    tagline: 'Telenoticias · Puerto Rico',
    badge: {
      text: 'En Vivo en Telenoticias',
      status: 'warning'
    },
    usStatus: {
      summary: 'Disponible en EE.UU. en emisiones informativas',
      detail: 'Telenoticias PR y transmisiones especiales (Primera Pregunta, debates, alertas de tormenta) transmiten en vivo abierto en su portal web y canal de YouTube. Durante novelas y series la señal se pausa en web para EE.UU. debido a derechos de exclusividad de Telemundo continental.'
    },
    schedule: 'Telenoticias Mediodía (11:00 AM AST / 10:00 AM Texas) · Primera Edición (4:00 PM AST / 3:00 PM Texas) · Edición Central (5:00 PM AST / 4:00 PM Texas) · Telenoticias 10 PM (10:00 PM AST / 9:00 PM Texas)',
    streamUrl: 'https://www.telemundopr.com/en-vivo/',
    youtubeUrl: 'https://www.youtube.com/@telemundopr',
    officialUrl: 'https://www.telemundopr.com',
    embedType: 'portal',
    embedUrl: null,
    embedNotes: 'Abre la señal oficial de Telemundo Puerto Rico directamente en su portal verificado o accede a los videos y directos de Telenoticias en su YouTube oficial.'
  },
  {
    id: 'teleonce',
    name: 'TeleOnce',
    dial: 'Canal 11 (WLII-DT)',
    category: 'noticias',
    logo: 'logos/teleonce.svg',
    tagline: 'Las Noticias · Jugando Pelota Dura',
    badge: {
      text: 'En Vivo Noticias y Análisis',
      status: 'warning'
    },
    usStatus: {
      summary: 'Disponible en vivo en programas locales',
      detail: 'TeleOnce transmite en directo por su web oficial y YouTube sus programas de noticias y análisis de mayor sintonía: Las Noticias, Jugando Pelota Dura, En la Mañana y PR en Vivo.'
    },
    schedule: 'En la Mañana (5:00 AM AST) · Las Noticias Mediodía (12:00 PM AST) · Las Noticias Tarde (4:00 PM AST) · Jugando Pelota Dura (7:00 PM AST / 6:00 PM Texas)',
    streamUrl: 'https://teleonce.com/en-vivo/',
    youtubeUrl: 'https://www.youtube.com/@teleoncepr',
    officialUrl: 'https://teleonce.com',
    embedType: 'portal',
    embedUrl: null,
    embedNotes: 'Haz clic para abrir teleonce.com/en-vivo de forma directa o sintoniza sus programas en vivo desde su canal oficial de YouTube.'
  },
  {
    id: 'wipr',
    name: 'WIPR TV · PRTV+',
    dial: 'Canal 6 / Canal 3 (PRTV)',
    category: 'publico',
    logo: 'logos/wipr.svg',
    tagline: 'Corporación de Puerto Rico para la Difusión Pública',
    badge: {
      text: 'Señal 24/7 Libre en EE.UU.',
      status: 'success'
    },
    usStatus: {
      summary: '100% Disponible en EE.UU. sin geo-bloqueo',
      detail: 'WIPR (Canal 6) es la televisora pública educativa y cultural de Puerto Rico. Su señal oficial es libre, gratuita y accesible para toda la diáspora en Estados Unidos mediante su plataforma PRTV+ y YouTube.'
    },
    schedule: 'Programación cultural, educativa, noticias locales, conferencias de prensa del gobierno y eventos especiales las 24 horas del día.',
    streamUrl: 'https://prtv.pr',
    youtubeUrl: 'https://www.youtube.com/@WIPRTVPR',
    officialUrl: 'https://wipr.pr',
    embedType: 'video',
    embedUrl: 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC4g3W4Ovi9Lw8F6aF4g_fPA',
    embedNotes: 'Puedes ver la transmisión en directo dentro de esta aplicación o abrir el portal oficial PRTV+ para ver la señal lineal de alta definición.'
  },
  {
    id: 'teleoro',
    name: 'TeleOro Canal 13',
    dial: 'Canal 13 (WORO-DT)',
    category: 'familiar',
    logo: 'logos/teleoro.svg',
    tagline: 'El Canal de la Familia Puertorriqueña',
    badge: {
      text: 'Señal 24/7 en Vivo',
      status: 'success'
    },
    usStatus: {
      summary: '100% Disponible en Texas y EE.UU.',
      detail: 'TeleOro Canal 13 transmite 24/7 programación religiosa, misa católica en vivo desde Puerto Rico, valores familiares, música y documentales boricuas sin restricciones geográficas.'
    },
    schedule: 'Santa Misa en Vivo diaria, Santo Rosario, programación cultural de la Isla y reflexiones las 24 horas.',
    streamUrl: 'https://canal13pr.tv/en-vivo/',
    youtubeUrl: 'https://www.youtube.com/@Canal13TeleOro',
    officialUrl: 'https://canal13pr.tv',
    embedType: 'video',
    embedUrl: 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCv0r4O7hJ2QvC58D3P9s-2w',
    embedNotes: 'Transmisión oficial de Canal 13 WORO disponible tanto en reproductor integrado como en su página web oficial.'
  },
  {
    id: 'cdm',
    name: 'CDM Internacional',
    dial: 'Canal 7.2 (Teleisla Digital)',
    category: 'familiar',
    logo: 'logos/cdm.svg',
    tagline: 'Cadena del Milagro · Radio Redentor',
    badge: {
      text: 'Señal 24/7 en Vivo',
      status: 'success'
    },
    usStatus: {
      summary: '100% Abierto en EE.UU.',
      detail: 'Cadena cristiana puertorriqueña de amplia trayectoria en la isla que emite 24 horas de programas familiares, música y conferencias.'
    },
    schedule: 'Transmisión continua 24 horas.',
    streamUrl: 'https://cdm.tv',
    youtubeUrl: 'https://www.youtube.com/@cdminternacional/live',
    officialUrl: 'https://cdm.tv',
    embedType: 'video',
    embedUrl: 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCyJUXo2c-R12Gv82wQ5J1-w',
    embedNotes: 'Transmisión oficial disponible 24/7 sin geo-restricción.'
  },
  {
    id: 'abc5',
    name: 'ABC 5 Puerto Rico',
    dial: 'Canal 5 (WORA-TV)',
    category: 'noticias',
    logo: 'logos/abc5.svg',
    tagline: 'Noticias y Contenido Local de PR',
    badge: {
      text: 'Noticias y Cobertura Local',
      status: 'info'
    },
    usStatus: {
      summary: 'Reportajes y noticias locales disponibles en web',
      detail: 'La filial de ABC en Puerto Rico produce segmentos informativos de la isla y coberturas del tiempo para Mayagüez, San Juan y todo Puerto Rico.'
    },
    schedule: 'Segmentos informativos diarios y cobertura de eventos en Puerto Rico.',
    streamUrl: 'https://abc5.pr/noticias/',
    youtubeUrl: 'https://www.youtube.com/@ABC5PuertoRico',
    officialUrl: 'https://abc5.pr',
    embedType: 'portal',
    embedUrl: null,
    embedNotes: 'Abre el portal oficial de ABC 5 Puerto Rico para consultar las últimas noticias y transmisiones informativas locales.'
  },
  {
    id: 'vivatv',
    name: 'Viva TV · Canal 8',
    dial: 'Canal 8 (WVEO / San Juan)',
    category: 'general',
    logo: 'logos/vivatv.svg',
    tagline: 'Variedades y Entretenimiento Boricua',
    badge: {
      text: 'Programación Local',
      status: 'info'
    },
    usStatus: {
      summary: 'Emisión digital en web oficial',
      detail: 'Canal puertorriqueño enfocado en la música, talento local y producciones independientes transmitidas desde la isla.'
    },
    schedule: 'Programas de variedades, música puertorriqueña y entretenimiento regional.',
    streamUrl: 'https://canal8.pr',
    youtubeUrl: 'https://canal8.pr',
    officialUrl: 'https://canal8.pr',
    embedType: 'portal',
    embedUrl: null,
    embedNotes: 'Acceso al portal oficial de Viva TV Canal 8.'
  },
  {
    id: 'allegro',
    name: 'PRTV Radio Cultural',
    dial: 'Allegro 91.3 FM & WIPR 940 AM',
    category: 'radio',
    logo: 'logos/allegro.svg',
    tagline: 'Radio Pública Oficial de Puerto Rico',
    badge: {
      text: 'Audio 24/7 en Vivo',
      status: 'success'
    },
    usStatus: {
      summary: '100% Disponible en vivo en Texas',
      detail: 'Señal oficial de radio pública de Puerto Rico, ofreciendo música clásica puertorriqueña, historia, tertulias culturales y noticias de la isla en directo.'
    },
    schedule: 'Música clásica, danza puertorriqueña, programas de historia de PR y noticias institucionales 24/7.',
    streamUrl: 'https://prtv.pr',
    youtubeUrl: 'https://www.youtube.com/@WIPRTVPR',
    officialUrl: 'https://prtv.pr',
    embedType: 'portal',
    embedUrl: null,
    embedNotes: 'Transmisión de audio oficial abierta a través de la plataforma PRTV+.'
  },
  {
    id: 'wkaq580',
    name: 'WKAQ 580 AM',
    dial: '580 AM (Univision Radio)',
    category: 'radio',
    logo: 'logos/wkaq.svg',
    tagline: 'Primera en Noticias · Análisis Político de PR',
    badge: {
      text: 'Radio de Noticias en Vivo',
      status: 'success'
    },
    usStatus: {
      summary: '100% Accesible en EE.UU.',
      detail: 'La emisora de radio hablada más escuchada de Puerto Rico. Muy apreciada por la diáspora en Texas para seguir la política y el acontecer diario boricua.'
    },
    schedule: 'Programas de análisis en vivo desde las 6:00 AM AST: WKAQ en la Mañana, Temprano en la Mañana, Rubén Sánchez, El Azote y más.',
    streamUrl: 'https://www.audacy.com/wkaq580/listen',
    youtubeUrl: 'https://www.facebook.com/WKAQ580',
    officialUrl: 'https://www.audacy.com/wkaq580',
    embedType: 'portal',
    embedUrl: null,
    embedNotes: 'Transmisión oficial de audio en vivo vía Audacy/WKAQ 580 AM.'
  },
  {
    id: 'notiuno',
    name: 'NotiUno 630 AM',
    dial: '630 AM (Uno Radio Group)',
    category: 'radio',
    logo: 'logos/notiuno.svg',
    tagline: 'La Fuerza Informativa de Puerto Rico',
    badge: {
      text: 'Radio Informativa en Vivo',
      status: 'success'
    },
    usStatus: {
      summary: '100% Disponible en vivo',
      detail: 'Noticias continuas, tránsito, tiempo e información de todos los pueblos de Puerto Rico transmitida en directo las 24 horas.'
    },
    schedule: 'Noticieros continuos, análisis político, deportes y entrevistas en directo todo el día.',
    streamUrl: 'https://www.notiuno.com/envivo/',
    youtubeUrl: 'https://www.facebook.com/notiuno',
    officialUrl: 'https://www.notiuno.com',
    embedType: 'portal',
    embedUrl: null,
    embedNotes: 'Señal en directo oficial provista por Uno Radio Group en notiuno.com.'
  }
];

// Estado de la Aplicación
const state = {
  currentFilter: 'all',
  searchQuery: '',
  favorites: JSON.parse(localStorage.getItem('prtv_favorites') || '["wapa","telemundo","teleonce","wipr"]'),
  activeModalChannel: null,
  deferredInstallPrompt: null
};

// Guardar favoritos
function saveFavorites() {
  localStorage.setItem('prtv_favorites', JSON.stringify(state.favorites));
}

// Inicializar Reloj con hora de Puerto Rico (AST) y Texas (CT)
function initClocks() {
  function updateTime() {
    const now = new Date();

    // Puerto Rico es siempre Atlantic Standard Time (UTC-4, sin cambio de hora)
    const prTimeStr = now.toLocaleTimeString('es-PR', {
      timeZone: 'America/Puerto_Rico',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });

    // Texas principalmente Central Time (America/Chicago)
    const txTimeStr = now.toLocaleTimeString('es-US', {
      timeZone: 'America/Chicago',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });

    const prEl = document.getElementById('prClock');
    const txEl = document.getElementById('txClock');
    if (prEl) prEl.textContent = prTimeStr;
    if (txEl) txEl.textContent = txTimeStr;
  }

  updateTime();
  setInterval(updateTime, 1000);
}

// Renderizado de Canales
function renderChannels() {
  const container = document.getElementById('channelsGrid');
  const emptyState = document.getElementById('emptyState');
  if (!container) return;

  const filtered = CHANNELS.filter(ch => {
    // Filtro por categoría o favoritos
    if (state.currentFilter === 'favs') {
      if (!state.favorites.includes(ch.id)) return false;
    } else if (state.currentFilter !== 'all') {
      if (ch.category !== state.currentFilter) return false;
    }

    // Filtro de búsqueda
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const matchName = ch.name.toLowerCase().includes(q);
      const matchDial = ch.dial.toLowerCase().includes(q);
      const matchTag = ch.tagline.toLowerCase().includes(q);
      const matchDesc = ch.usStatus.detail.toLowerCase().includes(q);
      if (!matchName && !matchDial && !matchTag && !matchDesc) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  container.innerHTML = filtered.map(ch => {
    const isFav = state.favorites.includes(ch.id);
    const badgeClass = ch.badge.status === 'success' 
      ? 'badge-success' 
      : ch.badge.status === 'warning' 
        ? 'badge-warning' 
        : 'badge-info';

    const embedAction = ch.embedType === 'video'
      ? `openVideoModal('${ch.id}')`
      : `openPortalModal('${ch.id}')`;

    return `
      <article class="channel-card ${isFav ? 'is-fav' : ''}" data-id="${ch.id}">
        <div class="card-header">
          <div class="card-logo-wrap">
            <img src="${ch.logo}" alt="${ch.name}" class="channel-logo" loading="lazy" />
          </div>
          <button class="fav-btn ${isFav ? 'active' : ''}" 
                  onclick="toggleFavorite('${ch.id}', event)" 
                  title="${isFav ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}"
                  aria-label="Favorito ${ch.name}">
            <svg class="star-icon" viewBox="0 0 24 24" width="22" height="22">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="${isFav ? '#fbbf24' : 'none'}" stroke="${isFav ? '#d97706' : '#94a3b8'}" stroke-width="2"/>
            </svg>
          </button>
        </div>

        <div class="card-body">
          <div class="card-title-row">
            <h3 class="channel-name">${ch.name}</h3>
            <span class="channel-dial">${ch.dial}</span>
          </div>
          <p class="channel-tagline">${ch.tagline}</p>

          <div class="status-pill ${badgeClass}">
            <span class="status-dot"></span>
            <span class="status-text">${ch.badge.text}</span>
          </div>

          <div class="us-status-note">
            <div class="us-flag-row">
              <span class="geo-icon">📍</span>
              <strong>Desde Texas / EE.UU.:</strong>
            </div>
            <p>${ch.usStatus.summary}</p>
          </div>
        </div>

        <div class="card-footer">
          <button class="btn btn-primary" onclick="${embedAction}">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            <span>${ch.embedType === 'video' ? 'Ver en Vivo Integrado' : 'Ver Señal Oficial'}</span>
          </button>
          
          <button class="btn btn-secondary" onclick="openChannelInfo('${ch.id}')" title="Ver Horarios y Guía">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
            <span>Info &amp; Horarios</span>
          </button>
        </div>
      </article>
    `;
  }).join('');
}

// Alternar Favorito
function toggleFavorite(id, event) {
  if (event) event.stopPropagation();
  const index = state.favorites.indexOf(id);
  if (index > -1) {
    state.favorites.splice(index, 1);
  } else {
    state.favorites.push(id);
  }
  saveFavorites();
  renderChannels();
  updateFavBadgeCount();
}

function updateFavBadgeCount() {
  const badge = document.getElementById('favCountBadge');
  if (badge) {
    badge.textContent = state.favorites.length;
    badge.style.display = state.favorites.length > 0 ? 'inline-block' : 'none';
  }
}

// Modal de Video Integrado (Fullscreen compatible)
function openVideoModal(id) {
  const ch = CHANNELS.find(c => c.id === id);
  if (!ch) return;

  const modal = document.getElementById('videoModal');
  const title = document.getElementById('videoModalTitle');
  const frameWrap = document.getElementById('videoFrameWrap');
  const notes = document.getElementById('videoModalNotes');
  const officialBtn = document.getElementById('modalOfficialBtn');
  const youtubeBtn = document.getElementById('modalYoutubeBtn');

  if (!modal || !frameWrap) return;

  state.activeModalChannel = ch;
  title.textContent = `${ch.name} · Señal Oficial en Directo`;
  notes.textContent = ch.embedNotes || '';
  
  officialBtn.onclick = () => window.open(ch.streamUrl, '_blank', 'noopener,noreferrer');
  youtubeBtn.onclick = () => window.open(ch.youtubeUrl, '_blank', 'noopener,noreferrer');

  // Iframe con atributos para Fullscreen y autoplay
  frameWrap.innerHTML = `
    <iframe 
      id="mainVideoPlayer"
      src="${ch.embedUrl}?autoplay=1&mute=0&rel=0&modestbranding=1" 
      title="${ch.name}" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" 
      allowfullscreen
      loading="lazy">
    </iframe>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const frameWrap = document.getElementById('videoFrameWrap');
  if (frameWrap) frameWrap.innerHTML = ''; // Detener audio al cerrar
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
  state.activeModalChannel = null;
}

// Pantalla Completa
function togglePlayerFullscreen() {
  const player = document.getElementById('mainVideoPlayer') || document.getElementById('videoFrameWrap');
  if (!player) return;

  if (!document.fullscreenElement && !document.webkitFullscreenElement) {
    if (player.requestFullscreen) {
      player.requestFullscreen().catch(err => console.log('Fullscreen error:', err));
    } else if (player.webkitRequestFullscreen) {
      player.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

// Modal de Señal Oficial Segura (para canales protegidos por X-Frame-Options)
function openPortalModal(id) {
  const ch = CHANNELS.find(c => c.id === id);
  if (!ch) return;

  const modal = document.getElementById('portalModal');
  const title = document.getElementById('portalModalTitle');
  const logo = document.getElementById('portalModalLogo');
  const statusSummary = document.getElementById('portalStatusSummary');
  const statusDetail = document.getElementById('portalStatusDetail');
  const scheduleText = document.getElementById('portalSchedule');
  const openPrimaryBtn = document.getElementById('portalOpenPrimaryBtn');
  const openYoutubeBtn = document.getElementById('portalOpenYoutubeBtn');

  if (!modal) return;

  title.textContent = `${ch.name} (${ch.dial})`;
  logo.src = ch.logo;
  statusSummary.textContent = ch.usStatus.summary;
  statusDetail.textContent = ch.usStatus.detail;
  scheduleText.textContent = ch.schedule;

  openPrimaryBtn.onclick = () => {
    window.open(ch.streamUrl, '_blank', 'noopener,noreferrer');
  };

  openYoutubeBtn.onclick = () => {
    window.open(ch.youtubeUrl, '_blank', 'noopener,noreferrer');
  };

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePortalModal() {
  const modal = document.getElementById('portalModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Modal Informativo / Horarios
function openChannelInfo(id) {
  openPortalModal(id);
}

// Guía de Texas / Horarios Modal
function openGuideModal() {
  const modal = document.getElementById('guideModal');
  if (modal) modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeGuideModal() {
  const modal = document.getElementById('guideModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Compartir enlace con familiar
function shareApp() {
  const shareData = {
    title: 'PR TV en Vivo 🇵🇷',
    text: 'Mira televisión y noticias oficiales de Puerto Rico en vivo. ¡Instálala gratis en tu teléfono!',
    url: window.location.href
  };

  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else {
    // Copiar al portapapeles
    navigator.clipboard.writeText(window.location.href).then(() => {
      showToast('¡Enlace copiado al portapapeles para compartir!');
    }).catch(() => {
      prompt('Copia este enlace para compartir:', window.location.href);
    });
  }
}

// Notificación Toast
function showToast(msg) {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// Configuración de Filtros
function setupFilters() {
  const filterBtns = document.querySelectorAll('.filter-tab');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentFilter = btn.dataset.filter;
      renderChannels();
    });
  });

  const searchInput = document.getElementById('channelSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim();
      renderChannels();
    });
  }
}

// Soporte PWA - Instalación
function setupPWA() {
  const installBanner = document.getElementById('pwaInstallBanner');
  const installBtn = document.getElementById('pwaInstallBtn');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    state.deferredInstallPrompt = e;
    if (installBanner) installBanner.style.display = 'flex';
  });

  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (!state.deferredInstallPrompt) {
        // En iOS / Safari o navegadores donde ya se instaló
        openGuideModal();
        return;
      }
      state.deferredInstallPrompt.prompt();
      const { outcome } = await state.deferredInstallPrompt.userChoice;
      if (outcome === 'accepted') {
        if (installBanner) installBanner.style.display = 'none';
      }
      state.deferredInstallPrompt = null;
    });
  }

  window.addEventListener('appinstalled', () => {
    if (installBanner) installBanner.style.display = 'none';
    showToast('¡PR TV en Vivo se instaló correctamente!');
  });

  // Registrar Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then(reg => {
        console.log('PR TV Service Worker registrado:', reg.scope);
      }).catch(err => {
        console.log('PR TV Service Worker error:', err);
      });
    });
  }
}

// Atajos de Teclado
function setupKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeVideoModal();
      closePortalModal();
      closeGuideModal();
    }
  });
}

// Inicio
document.addEventListener('DOMContentLoaded', () => {
  initClocks();
  renderChannels();
  updateFavBadgeCount();
  setupFilters();
  setupPWA();
  setupKeyboard();
});
