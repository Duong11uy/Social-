'use strict';

// Authored crisp SVG icons matching Zalo PC Dark Mode rail aesthetic (Image 2)
const SERVICE_ICONS = {
  // Zalo official speech bubble with 'Zalo' wordmark cutout in monochrome (matching all rail icons via currentColor)
  zalo: `<svg viewBox="0 0 50 50" fill="currentColor">
    <path fill-rule="evenodd" d="M7.779 43.589C10.102 43.846 13.006 43.184 15.068 42.183C24.023 47.132 38.02 46.895 46.492 41.473C46.821 40.98 47.128 40.468 47.413 39.936C49.106 36.778 50 33.22 50 27.132V22.718C50 16.629 49.106 13.071 47.413 9.913C45.739 6.754 43.246 4.281 40.088 2.588C36.929 0.894 33.371 0 27.283 0H22.85C17.664 0 14.298 0.653 11.47 1.899C11.315 2.037 11.164 2.178 11.015 2.321C2.717 10.32 2.087 27.659 9.123 37.078C9.131 37.092 9.139 37.106 9.149 37.12C10.233 38.719 9.187 41.515 7.551 43.152C7.284 43.399 7.379 43.551 7.779 43.589ZM20.563 17H10.838V19.085H17.587L10.933 27.332C10.724 27.635 10.573 27.919 10.573 28.564V29.095H19.748C20.203 29.095 20.582 28.716 20.582 28.261V27.142H13.492L19.748 19.294C19.843 19.18 20.013 18.972 20.089 18.877L20.127 18.82C20.487 18.289 20.563 17.834 20.563 17.284V17ZM32.942 29.095H34.326V17H32.24V28.393C32.24 28.773 32.544 29.095 32.942 29.095ZM25.814 19.692C23.198 19.692 21.075 21.816 21.075 24.432C21.075 27.048 23.198 29.171 25.814 29.171C28.43 29.171 30.553 27.048 30.553 24.432C30.572 21.816 28.449 19.692 25.814 19.692ZM25.814 27.218C24.279 27.218 23.027 25.967 23.027 24.432C23.027 22.896 24.279 21.645 25.814 21.645C27.35 21.645 28.601 22.896 28.601 24.432C28.601 25.967 27.369 27.218 25.814 27.218ZM40.487 19.616C37.852 19.616 35.71 21.758 35.71 24.393C35.71 27.029 37.852 29.171 40.487 29.171C43.122 29.171 45.264 27.029 45.264 24.393C45.264 21.758 43.122 19.616 40.487 19.616ZM40.487 27.218C38.932 27.218 37.681 25.967 37.681 24.412C37.681 22.858 38.932 21.607 40.487 21.607C42.041 21.607 43.292 22.858 43.292 24.412C43.292 25.967 42.041 27.218 40.487 27.218ZM29.456 29.094H30.575V19.957H28.622V28.279C28.622 28.715 29.001 29.094 29.456 29.094Z"/>
  </svg>`,

  // Facebook Messenger lightning speech bubble
  messenger: `<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17.16.14.26.35.27.57l.05 1.78c.02.57.61.94 1.13.71l1.99-.88c.17-.08.36-.1.55-.05.91.25 1.87.38 2.87.38 5.64 0 10-4.13 10-9.68C22 6.13 17.64 2 12 2zm5.95 7.56-2.93 4.65a1.5 1.5 0 0 1-2.17.4l-2.33-1.75a.6.6 0 0 0-.72 0l-3.15 2.39c-.42.32-.97-.18-.68-.63l2.93-4.65a1.5 1.5 0 0 1 2.17-.4l2.33 1.75a.6.6 0 0 0 .72 0l3.15-2.39c.42-.32.97.18.68.63z"/>
  </svg>`,

  // Telegram paper plane
  telegram: `<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.66 3.72 3.38 10.39c-1.18.47-1.17 1.13-.22 1.42l4.44 1.38 10.27-6.48c.49-.3.93-.14.56.19l-8.32 7.51-.31 4.53c.45 0 .65-.21.9-.45l2.16-2.1 4.49 3.31c.83.46 1.42.22 1.63-.77l2.94-13.86c.3-1.21-.46-1.76-1.26-1.35z"/>
  </svg>`,

  // Facebook 'f' emblem
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
  </svg>`,

  // Instagram camera outline
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2.5" y="2.5" width="19" height="19" rx="5"/>
    <circle cx="12" cy="12" r="4.2"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>`,

  // Threads @ loop emblem
  threads: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 12a7 7 0 1 0-2.2 5.1"/>
    <path d="M15.2 12c0 2-1.3 3.4-3.2 3.4-1.8 0-3.1-1.3-3.1-3.2 0-2 1.4-3.4 3.3-3.4 2.1 0 3.3 1.5 3.3 3.9 0 2.5 1.8 3.3 3.1 2.1.8-.8 1.2-2.1 1.2-3.8A8.5 8.5 0 1 0 12 20.5c2.4 0 4.5-.8 6-2.2"/>
  </svg>`,

  // X (Twitter) geometric cross
  x: `<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>`,

  // Google 'G' emblem
  google: `<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 1.81-1.5 3.34-3.2 4.37v3.62h5.18c3.03-2.79 4.78-6.9 4.78-11.79 0-.8-.08-1.57-.22-2.31z"/>
    <path d="M12.18 22c4.32 0 7.95-1.43 10.6-3.88l-5.18-3.62c-1.43.96-3.26 1.53-5.42 1.53-4.17 0-7.7-2.81-8.96-6.59H-.13v3.73C2.51 18.41 7 22 12.18 22z"/>
    <path d="M3.22 9.44A9.62 9.62 0 0 1 2.71 6.4c0-1.06.19-2.09.51-3.04V-.37H-.13A11.97 11.97 0 0 0-1.42 6.4c0 1.93.46 3.76 1.29 5.39l3.35-2.35z" transform="translate(1.42 5.6)"/>
    <path d="M12.18 5.97c2.35 0 4.46.81 6.12 2.4l4.59-4.59C20.12 1.19 16.5 0 12.18 0 7 0 2.51 3.59-.13 8.83l3.35 2.73c1.26-3.78 4.79-5.59 8.96-5.59z"/>
  </svg>`,

  // TikTok musical note emblem
  tiktok: `<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>`,

  // WhatsApp handset in chat bubble
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 14.01c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-2.99 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .89 2.14.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.35 1.45.29.15.46.12.63-.07.17-.19.73-.85.92-1.14.19-.29.39-.24.65-.15.27.1 1.7.8 1.99.95.29.15.48.22.56.34.07.12.07.7-.17 1.38z"/>
  </svg>`,

  // Discord controller mask
  discord: `<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.01.06.02.09.01 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z"/>
  </svg>`,

  // Slack hash
  slack: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
    <line x1="9" y1="3" x2="7" y2="21"/><line x1="17" y1="3" x2="15" y2="21"/>
    <line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/>
  </svg>`,

  // Gmail / Google Chat envelope
  gmail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>`,

  // Teams / Contacts notebook (matches Image 2 second icon style)
  teams: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="5" y="3" width="15" height="18" rx="2"/>
    <line x1="3" y1="7" x2="6" y2="7"/><line x1="3" y1="12" x2="6" y2="12"/><line x1="3" y1="17" x2="6" y2="17"/>
    <circle cx="13" cy="10" r="2.2"/>
    <path d="M9.5 16c.6-1.6 2-2.5 3.5-2.5s2.9.9 3.5 2.5"/>
  </svg>`,

  // Book / Novel reader icon (Tiểu Thuyết Mạng)
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>`,

  // Default custom app icon
  custom: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>`,
};

const state = {
  services: [],
  presets: [],
  activeServiceId: null,
  splitSecondaryId: null,
  splitMode: false,
  brightness: 100,
  dndMuted: false,
  windowHidden: false,
  locked: false,
  notificationMode: 'minimal',
  muteNotificationSound: false,
  autoStart: false,
  closeToTray: true,
  adBlockEnabled: true,
  unreadCounts: {},
  lastDomSenders: {},
};

const els = {
  titlebarText: document.getElementById('titlebar-text'),
  railTop: document.getElementById('app-rail-top'),
  webviewStage: document.getElementById('webview-stage'),
  btnReload: document.getElementById('btn-reload'),
  btnSplitView: document.getElementById('btn-split-view'),
  btnThemeToggle: document.getElementById('btn-theme-toggle'),
  brightnessOverlay: document.getElementById('brightness-overlay'),
  brightnessPopover: document.getElementById('brightness-popover'),
  brightnessSlider: document.getElementById('brightness-slider'),
  brightnessValue: document.getElementById('brightness-value'),
  btnBrightnessReset: document.getElementById('btn-brightness-reset'),
  btnSettings: document.getElementById('btn-settings'),
  btnDnd: document.getElementById('btn-dnd'),
  btnAddApp: document.getElementById('btn-add-app'),
  btnLockApp: document.getElementById('btn-lock-app'),
  btnUnlockApp: document.getElementById('btn-unlock-app'),
  btnWinMin: document.getElementById('btn-win-min'),
  btnWinMax: document.getElementById('btn-win-max'),
  btnWinClose: document.getElementById('btn-win-close'),
  addModal: document.getElementById('add-service-modal'),
  btnCloseAddModal: document.getElementById('btn-close-add-modal'),
  btnCancelAdd: document.getElementById('btn-cancel-add'),
  presetGrid: document.getElementById('preset-grid'),
  formAddService: document.getElementById('form-add-service'),
  inputServiceName: document.getElementById('input-service-name'),
  inputServiceUrl: document.getElementById('input-service-url'),
  inputServiceIcon: document.getElementById('input-service-icon'),
  inputServiceColor: document.getElementById('input-service-color'),
  addServiceError: document.getElementById('add-service-error'),
  settingsModal: document.getElementById('settings-modal'),
  btnCloseSettingsModal: document.getElementById('btn-close-settings-modal'),
  btnTestNotify: document.getElementById('btn-test-notify'),
  toggleMuteNotifySound: document.getElementById('toggle-mute-notify-sound'),
  toggleAutoStart: document.getElementById('toggle-auto-start'),
  toggleCloseToTray: document.getElementById('toggle-close-to-tray'),
  toggleAdblock: document.getElementById('toggle-adblock'),
  btnOpenUblock: document.getElementById('btn-open-ublock'),
  btnCheckUpdate: document.getElementById('btn-check-update'),
  settingsServiceList: document.getElementById('settings-service-list'),
  lockOverlay: document.getElementById('lock-overlay'),
};

const lastNotifiedAt = {};
const lastNotifiedText = {};
const lastDomUnreadCounts = {};
const pendingTitleNotifyTimers = {};
const zeroUnreadResetTimers = {};
let lastGlobalChimeAt = 0;

function getEnabledServices() {
  return state.services.filter((s) => s.enabled !== false);
}

function getOrderedRailServiceIds() {
  if (els.railTop) {
    const domBtns = Array.from(els.railTop.querySelectorAll('.rail-app-btn[data-service-id]'));
    if (domBtns.length > 0) {
      return domBtns.map((btn) => btn.dataset.serviceId).filter(Boolean);
    }
  }
  return getEnabledServices().map((s) => s.id);
}

function updateTitlebar() {
  const active = getEnabledServices().find((s) => s.id === state.activeServiceId);
  els.titlebarText.textContent = active ? `${active.name} — Social Hub` : 'Social Hub';
}

function playNotificationChime(force = false) {
  if (state.dndMuted || state.muteNotificationSound) return;
  const now = Date.now();
  if (!force && now - lastGlobalChimeAt < 2500) return;
  lastGlobalChimeAt = now;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1174.66, ctx.currentTime + 0.09);
    gain.gain.setValueAtTime(0.14, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.25);
    setTimeout(() => ctx.close().catch(() => {}), 350);
  } catch {}
}

function triggerServiceNotification(service, rawInput, force = false) {
  if (state.dndMuted && !force) return;
  if (service && service.enabled === false && !force) return;
  const now = Date.now();
  const key = service ? service.id : 'system';
  if (pendingTitleNotifyTimers[key]) {
    clearTimeout(pendingTitleNotifyTimers[key]);
    delete pendingTitleNotifyTimers[key];
  }

  const cached = (service && state.lastDomSenders[service.id]) || {};
  const inputObj =
    rawInput && typeof rawInput === 'object'
      ? rawInput
      : { sender: String(rawInput || '') };

  const cleanInputSender = window.chatHub.extractSenderFromTitle(inputObj.sender || '');
  let effectiveGroup = inputObj.group || cached.group || '';
  let effectiveSender =
    cleanInputSender ||
    cached.sender ||
    (typeof cached === 'string' ? cached : '') ||
    inputObj.sender ||
    '';
  const effectiveBody = inputObj.body || cached.body || '';

  if (
    effectiveGroup &&
    cleanInputSender &&
    cleanInputSender.toLowerCase() === effectiveGroup.toLowerCase() &&
    cached.sender &&
    cached.sender.toLowerCase() !== effectiveGroup.toLowerCase()
  ) {
    effectiveSender = cached.sender;
  }

  const displayText = window.chatHub.formatNotificationText(state.notificationMode, {
    sender: effectiveSender,
    group: effectiveGroup,
    body: effectiveBody,
    serviceName: service ? service.name : '',
  });

  if (!force && lastNotifiedAt[key] && now - lastNotifiedAt[key] < 2500) {
    const prevText = String(lastNotifiedText[key] || '');
    const canUpgradeSender =
      state.notificationMode === 'sender' &&
      displayText !== 'Social Hub có thông báo mới' &&
      displayText !== prevText &&
      (prevText === 'Social Hub có thông báo mới' ||
        (!prevText.includes('\n') && displayText.includes('\n')));
    if (!canUpgradeSender) return;
  }
  lastNotifiedAt[key] = now;
  lastNotifiedText[key] = displayText;

  playNotificationChime(force);
  window.chatHub.notify({
    serviceId: service ? service.id : null,
    text: displayText,
  });
}

let draggedServiceId = null;

function renderRailButtons() {
  els.railTop.innerHTML = '';
  const visibleServices = getEnabledServices();
  visibleServices.forEach((service, idx) => {
    const btn = document.createElement('button');
    btn.className = 'rail-app-btn';
    btn.draggable = true;
    if (service.id === state.activeServiceId) btn.classList.add('active');
    if (state.splitMode && service.id === state.splitSecondaryId) {
      btn.classList.add('split-secondary');
    }
    btn.dataset.serviceId = service.id;
    const shortcutHint = idx < 9 ? ` (Ctrl+${idx + 1})` : idx === 9 ? ' (Ctrl+0)' : '';
    btn.title = `${service.name}${shortcutHint} • Kéo thả để đổi vị trí`;
    btn.setAttribute('aria-label', service.name);

    const iconHtml = SERVICE_ICONS[service.iconKey] || SERVICE_ICONS.custom;
    const count = state.unreadCounts[service.id] || 0;
    const badgeText = count > 99 ? '99+' : String(count);

    btn.innerHTML = `
      ${iconHtml}
      <span class="unread-badge" data-badge-for="${service.id}" ${count > 0 ? '' : 'hidden'}>${badgeText}</span>
    `;

    btn.addEventListener('click', (e) => {
      if (state.splitMode && e.shiftKey && service.id !== state.activeServiceId) {
        state.splitSecondaryId = service.id;
        syncVisibleWebviews();
        renderRailButtons();
      } else {
        switchService(service.id);
      }
    });

    btn.addEventListener('dragstart', (e) => {
      draggedServiceId = service.id;
      btn.classList.add('dragging');
      if (e.dataTransfer) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', service.id);
      }
    });

    btn.addEventListener('dragover', (e) => {
      e.preventDefault();
      if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';
      if (draggedServiceId && draggedServiceId !== service.id) {
        btn.classList.add('drag-over');
      }
    });

    btn.addEventListener('dragleave', () => {
      btn.classList.remove('drag-over');
    });

    btn.addEventListener('drop', async (e) => {
      e.preventDefault();
      btn.classList.remove('drag-over');
      const fromId = draggedServiceId || (e.dataTransfer && e.dataTransfer.getData('text/plain'));
      draggedServiceId = null;
      if (!fromId || fromId === service.id) return;
      state.services = await window.chatHub.reorderServices(fromId, service.id);
      renderRailButtons();
    });

    btn.addEventListener('dragend', () => {
      draggedServiceId = null;
      els.railTop.querySelectorAll('.rail-app-btn').forEach((el) => {
        el.classList.remove('dragging', 'drag-over');
      });
    });

    els.railTop.appendChild(btn);
  });
}

function ensureWebviewPane(service) {
  let pane = els.webviewStage.querySelector(`.webview-pane[data-service-id="${service.id}"]`);
  if (pane) return pane;

  pane = document.createElement('div');
  pane.className = 'webview-pane';
  pane.dataset.serviceId = service.id;

  const wv = document.createElement('webview');
  wv.dataset.serviceId = service.id;
  wv.setAttribute('src', service.url);
  wv.setAttribute('partition', service.partition);
  wv.setAttribute('allowpopups', 'true');
  if (typeof window.chatHub.getWebviewPreloadUrl === 'function') {
    const preloadUrl = window.chatHub.getWebviewPreloadUrl();
    if (preloadUrl) wv.setAttribute('preload', preloadUrl);
  }
  const desktopUa =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36';
  wv.setAttribute('useragent', desktopUa);

  // Dedicated header bar for Cửa sổ 2 (Split Secondary Window)
  const splitBar = document.createElement('div');
  splitBar.className = 'split-window-bar';
  splitBar.innerHTML = `
    <div class="split-window-title-group">
      <span class="split-window-badge">Cửa sổ 2</span>
      <button type="button" class="split-mxh-select-btn" title="Bấm để chọn Mạng Xã Hội khác">
        <span class="split-mxh-name">${service.name}</span>
        <svg class="chevron" viewBox="0 0 12 12" width="10" height="10" fill="currentColor">
          <path d="M2.5 4.5L6 8l3.5-3.5"/>
        </svg>
      </button>
      <div class="split-mxh-dropdown" hidden></div>
    </div>
    <div class="split-window-pills"></div>
    <div class="split-window-actions">
      <button type="button" class="browser-nav-btn split-btn-reload" title="Làm mới cửa sổ này (F5)" aria-label="Làm mới">
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
          <path d="M3 3v5h5"/>
          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/>
          <path d="M16 16h5v5"/>
        </svg>
      </button>
      <button type="button" class="browser-nav-btn split-btn-close" title="Đóng cửa sổ thứ 2 (Ctrl+\)" aria-label="Đóng cửa sổ thứ 2">
        <svg viewBox="0 0 12 12" width="12" height="12" stroke="currentColor" stroke-width="1.8">
          <line x1="2" y1="2" x2="10" y2="10"></line>
          <line x1="10" y1="2" x2="2" y2="10"></line>
        </svg>
      </button>
    </div>
  `;

  const btnSelect = splitBar.querySelector('.split-mxh-select-btn');
  const dropdown = splitBar.querySelector('.split-mxh-dropdown');
  const pillsContainer = splitBar.querySelector('.split-window-pills');
  const btnSplitReload = splitBar.querySelector('.split-btn-reload');
  const btnSplitClose = splitBar.querySelector('.split-btn-close');

  const updateSplitPills = () => {
    const list = getEnabledServices();
    pillsContainer.innerHTML = list
      .filter((s) => s.id !== service.id && s.id !== state.activeServiceId)
      .slice(0, 4)
      .map(
        (s) => `
        <button type="button" class="split-pill-btn" data-target-id="${s.id}" title="Mở ${s.name} ở cửa sổ này">
          <span>${s.name}</span>
        </button>
      `
      )
      .join('');
    pillsContainer.querySelectorAll('.split-pill-btn').forEach((p) => {
      p.addEventListener('click', () => {
        const tid = p.dataset.targetId;
        if (tid) setSplitSecondary(tid);
      });
    });
  };

  const populateDropdown = () => {
    const list = getEnabledServices();
    dropdown.innerHTML = `
      <div class="split-mxh-dropdown-title">Chọn Mạng Xã Hội cho Cửa sổ 2:</div>
      ${list
        .map(
          (s) => `
        <button type="button" class="split-mxh-item ${s.id === service.id ? 'selected' : ''}" data-target-id="${s.id}">
          ${SERVICE_ICONS[s.iconKey] || SERVICE_ICONS.custom}
          <span>${s.name}</span>
        </button>
      `
        )
        .join('')}
      <button type="button" class="split-mxh-add-btn" id="btn-split-add-service">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        <span>+ Thêm mạng xã hội mới...</span>
      </button>
    `;
    dropdown.querySelectorAll('.split-mxh-item').forEach((item) => {
      item.addEventListener('click', () => {
        const tid = item.dataset.targetId;
        dropdown.hidden = true;
        if (tid) setSplitSecondary(tid);
      });
    });
    const btnAddService = dropdown.querySelector('#btn-split-add-service');
    if (btnAddService) {
      btnAddService.addEventListener('click', () => {
        dropdown.hidden = true;
        els.formAddService.reset();
        els.addServiceError.hidden = true;
        els.addModal.hidden = false;
        els.inputServiceName.focus();
      });
    }
  };

  btnSelect.addEventListener('click', (e) => {
    e.stopPropagation();
    const isHidden = dropdown.hidden;
    if (isHidden) {
      populateDropdown();
      dropdown.hidden = false;
    } else {
      dropdown.hidden = true;
    }
  });

  document.addEventListener('click', (e) => {
    if (!splitBar.contains(e.target)) {
      dropdown.hidden = true;
    }
  });

  btnSplitReload.addEventListener('click', () => {
    try {
      if (typeof wv.reload === 'function') wv.reload();
    } catch {}
  });

  btnSplitClose.addEventListener('click', () => {
    toggleSplitView();
  });

  updateSplitPills();
  pane.appendChild(splitBar);

  if (service.id === 'google' || service.iconKey === 'google') {
    const toolbar = document.createElement('div');
    toolbar.className = 'browser-toolbar';
    toolbar.innerHTML = `
      <button type="button" class="browser-nav-btn browser-btn-back" title="Quay lại (Alt+←)" aria-label="Quay lại" disabled>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 12H5"></path>
          <path d="m12 19-7-7 7-7"></path>
        </svg>
      </button>
      <button type="button" class="browser-nav-btn browser-btn-forward" title="Tiếp theo (Alt+→)" aria-label="Tiếp theo" disabled>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </button>
      <button type="button" class="browser-nav-btn browser-btn-home" title="Trang chủ Google" aria-label="Trang chủ Google">
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </button>
      <form class="browser-omnibox-form">
        <input type="text" class="browser-url-input" value="${service.url}" placeholder="Dán link (URL) hoặc nhập từ khóa tìm kiếm rồi nhấn Enter..." spellcheck="false" autocomplete="off" />
        <button type="submit" class="browser-url-go" title="Truy cập đường dẫn">Đi</button>
      </form>
    `;

    const btnBack = toolbar.querySelector('.browser-btn-back');
    const btnForward = toolbar.querySelector('.browser-btn-forward');
    const btnHome = toolbar.querySelector('.browser-btn-home');
    const formOmnibox = toolbar.querySelector('.browser-omnibox-form');
    const inputUrl = toolbar.querySelector('.browser-url-input');

    const navigateWebviewTo = (rawInput) => {
      const targetUrl =
        typeof window.chatHub.resolveOmniboxInput === 'function'
          ? window.chatHub.resolveOmniboxInput(rawInput)
          : rawInput;
      if (!targetUrl) return;
      inputUrl.value = targetUrl;
      try {
        if (wv.dataset.domReady === '1' && typeof wv.loadURL === 'function') {
          wv.loadURL(targetUrl).catch(() => {});
        } else {
          wv.setAttribute('src', targetUrl);
        }
      } catch {
        wv.setAttribute('src', targetUrl);
      }
    };

    const syncToolbarState = (explicitUrl) => {
      if (wv.dataset.domReady !== '1') return;
      try {
        btnBack.disabled = typeof wv.canGoBack === 'function' ? !wv.canGoBack() : true;
        btnForward.disabled = typeof wv.canGoForward === 'function' ? !wv.canGoForward() : true;
        if (document.activeElement !== inputUrl) {
          const currentUrl = explicitUrl || (typeof wv.getURL === 'function' ? wv.getURL() : '');
          if (currentUrl && currentUrl !== 'about:blank') {
            inputUrl.value = currentUrl;
          }
        }
      } catch {}
    };

    btnBack.addEventListener('click', () => {
      try {
        if (wv.dataset.domReady === '1' && typeof wv.canGoBack === 'function' && wv.canGoBack()) {
          wv.goBack();
        }
      } catch {}
    });

    btnForward.addEventListener('click', () => {
      try {
        if (
          wv.dataset.domReady === '1' &&
          typeof wv.canGoForward === 'function' &&
          wv.canGoForward()
        ) {
          wv.goForward();
        }
      } catch {}
    });

    btnHome.addEventListener('click', () => {
      navigateWebviewTo('https://www.google.com/');
    });

    inputUrl.addEventListener('focus', () => {
      inputUrl.select();
    });

    formOmnibox.addEventListener('submit', (e) => {
      e.preventDefault();
      navigateWebviewTo(inputUrl.value);
      inputUrl.blur();
    });

    wv.addEventListener('dom-ready', () => syncToolbarState());
    wv.addEventListener('did-navigate', (e) => syncToolbarState(e && e.url));
    wv.addEventListener('did-navigate-in-page', (e) => syncToolbarState(e && e.url));

    pane.appendChild(toolbar);
  }

  const isSocialNav =
    ['facebook', 'threads', 'instagram'].includes((service.iconKey || '').toLowerCase()) ||
    ['facebook', 'threads', 'instagram'].includes((service.id || '').toLowerCase()) ||
    service.id.startsWith('facebook-') ||
    service.id.startsWith('threads-') ||
    service.id.startsWith('instagram-');

  if (isSocialNav) {
    const toolbar = document.createElement('div');
    toolbar.className = 'social-nav-toolbar';
    toolbar.innerHTML = `
      <div class="social-nav-group">
        <button type="button" class="browser-nav-btn social-btn-back" title="Quay lại (Alt+←)" aria-label="Quay lại" disabled>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 12H5"></path>
            <path d="m12 19-7-7 7-7"></path>
          </svg>
        </button>
        <button type="button" class="browser-nav-btn social-btn-forward" title="Tiếp theo (Alt+→)" aria-label="Tiếp theo" disabled>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
        <button type="button" class="browser-nav-btn social-btn-reload" title="Làm mới trang (F5)" aria-label="Làm mới trang">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
            <path d="M21 3v5h-5"></path>
          </svg>
        </button>
        <button type="button" class="browser-nav-btn social-btn-home" title="Về trang chủ" aria-label="Về trang chủ">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </button>
      </div>
      <div class="social-nav-title">
        <span class="social-nav-badge">${service.name}</span>
        <span class="social-nav-url" title=""></span>
      </div>
    `;

    const btnBack = toolbar.querySelector('.social-btn-back');
    const btnForward = toolbar.querySelector('.social-btn-forward');
    const btnReload = toolbar.querySelector('.social-btn-reload');
    const btnHome = toolbar.querySelector('.social-btn-home');
    const lblUrl = toolbar.querySelector('.social-nav-url');

    const syncToolbarState = (explicitUrl) => {
      if (wv.dataset.domReady !== '1') return;
      try {
        btnBack.disabled = typeof wv.canGoBack === 'function' ? !wv.canGoBack() : true;
        btnForward.disabled = typeof wv.canGoForward === 'function' ? !wv.canGoForward() : true;
        if (lblUrl) {
          const currentUrl = explicitUrl || (typeof wv.getURL === 'function' ? wv.getURL() : '');
          if (currentUrl && currentUrl !== 'about:blank') {
            try {
              const u = new URL(currentUrl);
              const pathPart = u.pathname + (u.search ? u.search : '');
              lblUrl.textContent = pathPart === '/' ? '' : pathPart;
              lblUrl.title = currentUrl;
            } catch {
              lblUrl.textContent = '';
            }
          }
        }
      } catch {}
    };

    btnBack.addEventListener('click', () => {
      try {
        if (wv.dataset.domReady === '1' && typeof wv.canGoBack === 'function' && wv.canGoBack()) {
          wv.goBack();
        }
      } catch {}
    });

    btnForward.addEventListener('click', () => {
      try {
        if (
          wv.dataset.domReady === '1' &&
          typeof wv.canGoForward === 'function' &&
          wv.canGoForward()
        ) {
          wv.goForward();
        }
      } catch {}
    });

    btnReload.addEventListener('click', () => {
      try {
        if (typeof wv.reload === 'function') {
          wv.reload();
        }
      } catch {}
    });

    btnHome.addEventListener('click', () => {
      try {
        if (typeof wv.loadURL === 'function') {
          wv.loadURL(service.url).catch(() => {});
        } else {
          wv.setAttribute('src', service.url);
        }
      } catch {}
    });

    wv.addEventListener('dom-ready', () => syncToolbarState());
    wv.addEventListener('did-navigate', (e) => syncToolbarState(e && e.url));
    wv.addEventListener('did-navigate-in-page', (e) => syncToolbarState(e && e.url));

    pane.appendChild(toolbar);
  }

  const isServiceVisible = (id) => {
    const isPrimary = id === state.activeServiceId;
    const isSecondary =
      state.splitMode &&
      state.splitSecondaryId &&
      id === state.splitSecondaryId &&
      id !== state.activeServiceId;
    return Boolean(isPrimary || isSecondary);
  };

  wv.addEventListener('dom-ready', () => {
    wv.dataset.domReady = '1';
    applyWebviewMediaGate(wv, isServiceVisible(service.id));
  });

  wv.addEventListener('media-started-playing', () => {
    if (service.id === 'tieuthuyetmang') return;
    const visible = isServiceVisible(service.id);
    if (!visible || document.hidden || state.dndMuted) {
      applyWebviewMediaGate(wv, visible);
    }
  });

  wv.addEventListener('ipc-message', (event) => {
    if (event.channel === 'webview:dom-sender') {
      const payload = (event.args && event.args[0]) || {};
      if (payload.sender || payload.group) {
        state.lastDomSenders[service.id] = {
          sender: payload.sender || '',
          group: payload.group || '',
          body: payload.body || '',
        };
      }
    } else if (event.channel === 'webview:notification') {
      const payload = (event.args && event.args[0]) || {};
      if (payload.sender || payload.group) {
        state.lastDomSenders[service.id] = {
          sender: payload.sender || payload.title || '',
          group: payload.group || '',
          body: payload.body || '',
        };
      }
      // Increment unread count and show red badge when this tab is not actively viewed
      const isCurrentActiveTab =
        state.activeServiceId === service.id && !state.windowHidden && document.hasFocus();
      if (!isCurrentActiveTab) {
        const nextCount = (state.unreadCounts[service.id] || 0) + 1;
        state.unreadCounts[service.id] = nextCount;
        updateBadgeCount(service.id, nextCount);
      }
      triggerServiceNotification(service, {
        sender: payload.sender || payload.title || '',
        group: payload.group || '',
        body: payload.body || '',
      });
    } else if (event.channel === 'webview:unread-count') {
      const payload = (event.args && event.args[0]) || {};
      const count = Number(payload.count) || 0;
      lastDomUnreadCounts[service.id] = count;
      if (payload.sender || payload.group) {
        state.lastDomSenders[service.id] = {
          sender: payload.sender || '',
          group: payload.group || '',
          body: payload.body || '',
        };
      }
      const isCurrentActiveTab =
        state.activeServiceId === service.id && !state.windowHidden && document.hasFocus();
      if (count > 0) {
        if (!isCurrentActiveTab) {
          const prevCount = state.unreadCounts[service.id] || 0;
          const nextCount = Math.max(prevCount, count);
          state.unreadCounts[service.id] = nextCount;
          updateBadgeCount(service.id, nextCount);
          if (window.chatHub.shouldTriggerUnreadNotification(prevCount, nextCount, state.dndMuted)) {
            triggerServiceNotification(service, {
              sender: payload.sender || '',
              group: payload.group || '',
              body: payload.body || '',
            });
          }
        }
      } else if (count === 0 && isCurrentActiveTab) {
        state.unreadCounts[service.id] = 0;
        updateBadgeCount(service.id, 0);
      }
    } else if (event.channel === 'webview:shortcut') {
      const action = (event.args && event.args[0]) || {};
      handleGlobalShortcut(action);
    }
  });

  wv.addEventListener('page-title-updated', (event) => {
    const rawTitle = event.title || '';
    const count = window.chatHub.parseUnreadCount(rawTitle);

    // Prevent blinking tab titles (e.g. Messenger alternating "(3) Messenger" <-> "Bọn Điên")
    // from dropping unread count to 0 and re-triggering notifications in a loop
    if (count === 0) {
      if ((state.unreadCounts[service.id] || 0) > 0 && !zeroUnreadResetTimers[service.id]) {
        zeroUnreadResetTimers[service.id] = setTimeout(() => {
          delete zeroUnreadResetTimers[service.id];
          state.unreadCounts[service.id] = 0;
          updateBadgeCount(service.id, 0);
        }, 4000);
      }
      return;
    }

    if (zeroUnreadResetTimers[service.id]) {
      clearTimeout(zeroUnreadResetTimers[service.id]);
      delete zeroUnreadResetTimers[service.id];
    }

    const prevCount = state.unreadCounts[service.id] || 0;
    state.unreadCounts[service.id] = count;
    updateBadgeCount(service.id, count);

    if (window.chatHub.shouldTriggerUnreadNotification(prevCount, count, state.dndMuted)) {
      if (pendingTitleNotifyTimers[service.id]) {
        clearTimeout(pendingTitleNotifyTimers[service.id]);
      }
      pendingTitleNotifyTimers[service.id] = setTimeout(() => {
        delete pendingTitleNotifyTimers[service.id];
        triggerServiceNotification(service, rawTitle);
      }, 320);
    }
  });

  pane.appendChild(wv);
  els.webviewStage.appendChild(pane);
  return pane;
}

function updateBadgeCount(serviceId, count) {
  const badge = els.railTop.querySelector(`.unread-badge[data-badge-for="${serviceId}"]`);
  if (badge) {
    if (count > 0) {
      badge.textContent = count > 99 ? '99+' : String(count);
      badge.hidden = false;
    } else {
      badge.hidden = true;
    }
  }
  const total = window.chatHub.totalUnreadCount(state.unreadCounts);
  window.chatHub.setAppBadge(total);
}

function destroyWebviewPane(serviceId) {
  delete state.unreadCounts[serviceId];
  delete state.lastDomSenders[serviceId];
  delete lastDomUnreadCounts[serviceId];
  const pane = els.webviewStage.querySelector(`.webview-pane[data-service-id="${serviceId}"]`);
  if (pane) {
    const wv = pane.querySelector('webview');
    if (wv) {
      try {
        if (typeof wv.stop === 'function') wv.stop();
        wv.setAttribute('src', 'about:blank');
      } catch {}
      wv.remove();
    }
    pane.remove();
  }
  updateBadgeCount(serviceId, 0);
}

function applyWebviewMediaGate(wv, isVisible) {
  if (!wv || wv.dataset.domReady !== '1') return;
  const pane = wv.closest ? wv.closest('.webview-pane') : null;
  const serviceId = (pane && pane.dataset.serviceId) || wv.dataset.serviceId;

  // Allow tieuthuyetmang (Tiểu Thuyết Mạng) to keep playing stories in background even when window/tab is hidden
  if (serviceId === 'tieuthuyetmang') {
    if (typeof wv.setAudioMuted === 'function') {
      try {
        wv.setAudioMuted(false);
      } catch {}
    }
    if (typeof wv.executeJavaScript === 'function') {
      try {
        const p = wv.executeJavaScript('window.__SOCIALHUB_TAB_HIDDEN__ = false;');
        if (p && typeof p.catch === 'function') p.catch(() => {});
      } catch {}
    }
    return;
  }

  const shouldHideMedia = Boolean(!isVisible || state.windowHidden || document.hidden);
  if (typeof wv.setAudioMuted === 'function') {
    try {
      wv.setAudioMuted(Boolean(state.dndMuted || shouldHideMedia));
    } catch {}
  }
  if (typeof wv.executeJavaScript === 'function') {
    try {
      const script = shouldHideMedia
        ? 'window.__SOCIALHUB_TAB_HIDDEN__ = true; document.querySelectorAll("video, audio").forEach(m => { try { m.pause(); } catch {} });'
        : 'window.__SOCIALHUB_TAB_HIDDEN__ = false;';
      const p = wv.executeJavaScript(script);
      if (p && typeof p.catch === 'function') p.catch(() => {});
    } catch {}
  }
}

function syncVisibleWebviews() {
  const enabledList = getEnabledServices();
  const enabledIds = new Set(enabledList.map((s) => s.id));

  // Unload & remove webview DOM nodes for any disabled service so background processes stop completely
  const existingPanes = Array.from(els.webviewStage.querySelectorAll('.webview-pane'));
  existingPanes.forEach((pane) => {
    const id = pane.dataset.serviceId;
    if (!enabledIds.has(id)) {
      destroyWebviewPane(id);
    }
  });

  // Lazy-mount only the active service (and split-view secondary service) immediately
  // so startup and video playback stay ultra-fast without spawning 9 heavy tabs at once
  const activeService = enabledList.find((s) => s.id === state.activeServiceId);
  if (activeService) {
    ensureWebviewPane(activeService);
  }
  if (state.splitMode && state.splitSecondaryId) {
    const secondaryService = enabledList.find((s) => s.id === state.splitSecondaryId);
    if (secondaryService) {
      ensureWebviewPane(secondaryService);
    }
  }

  const panes = els.webviewStage.querySelectorAll('.webview-pane');
  panes.forEach((pane) => {
    const id = pane.dataset.serviceId;
    const isPrimary = id === state.activeServiceId;
    const isSecondary =
      state.splitMode &&
      state.splitSecondaryId &&
      id === state.splitSecondaryId &&
      id !== state.activeServiceId;
    const isVisible = Boolean(isPrimary || isSecondary);

    pane.classList.toggle('active', isPrimary);
    pane.classList.toggle('split-secondary', Boolean(isSecondary));

    const wv = pane.querySelector('webview');
    if (wv) {
      applyWebviewMediaGate(wv, isVisible);
      if (isPrimary && !document.hidden && wv.dataset.domReady === '1' && typeof wv.focus === 'function') {
        try {
          wv.focus();
        } catch {}
      }
    }
  });
}

function switchService(serviceId) {
  if (!getEnabledServices().some((s) => s.id === serviceId)) return;
  const prevServiceId = state.activeServiceId;
  if (state.splitMode && state.activeServiceId && state.activeServiceId !== serviceId && !state.splitSecondaryId) {
    state.splitSecondaryId = state.activeServiceId;
  }
  state.activeServiceId = serviceId;
  if (prevServiceId && prevServiceId !== serviceId && (lastDomUnreadCounts[prevServiceId] || 0) > 0) {
    state.unreadCounts[prevServiceId] = lastDomUnreadCounts[prevServiceId];
    updateBadgeCount(prevServiceId, state.unreadCounts[prevServiceId]);
  }
  state.unreadCounts[serviceId] = 0;
  updateBadgeCount(serviceId, 0);
  updateTitlebar();
  renderRailButtons();
  syncVisibleWebviews();
}

function toggleSplitView() {
  state.splitMode = !state.splitMode;
  if (state.splitMode && !state.splitSecondaryId) {
    const other = getEnabledServices().find((s) => s.id !== state.activeServiceId);
    state.splitSecondaryId = other ? other.id : null;
  }
  if (els.btnSplitView) {
    els.btnSplitView.classList.toggle('active-toggle', state.splitMode);
  }
  renderRailButtons();
  syncVisibleWebviews();
}

function setSplitSecondary(serviceId) {
  if (!serviceId) return;
  state.splitSecondaryId = serviceId;
  if (!state.splitMode) {
    state.splitMode = true;
    if (els.btnSplitView) {
      els.btnSplitView.classList.add('active-toggle');
    }
  }
  renderRailButtons();
  syncVisibleWebviews();
}

function reloadActiveService() {
  const pane = els.webviewStage.querySelector(`.webview-pane[data-service-id="${state.activeServiceId}"]`);
  const wv = pane ? pane.querySelector('webview') : null;
  if (wv && typeof wv.reload === 'function') {
    try {
      wv.reload();
    } catch {}
  }
  const svg = els.btnReload ? els.btnReload.querySelector('svg') : null;
  if (svg) {
    svg.classList.remove('is-spinning');
    void svg.offsetWidth;
    svg.classList.add('is-spinning');
    setTimeout(() => svg.classList.remove('is-spinning'), 600);
  }
}

const MAX_DIM_OPACITY = 0.92;

function clampBrightness(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return 100;
  return Math.max(0, Math.min(100, Math.round(num)));
}

function syncBrightnessButtonState() {
  if (!els.btnThemeToggle) return;
  const isOpen = Boolean(els.brightnessPopover && !els.brightnessPopover.hidden);
  els.btnThemeToggle.setAttribute('aria-expanded', String(isOpen));
  els.btnThemeToggle.classList.toggle('active-toggle', isOpen || state.brightness < 100);
  els.btnThemeToggle.title = `Độ sáng: ${state.brightness}% (Ctrl+Shift+T)`;
}

function applyBrightness(level) {
  const clamped = clampBrightness(level);
  state.brightness = clamped;
  const dimOpacity = ((100 - clamped) / 100) * MAX_DIM_OPACITY;
  if (els.brightnessOverlay) {
    els.brightnessOverlay.style.opacity = dimOpacity.toFixed(3);
  }
  if (els.brightnessSlider) {
    els.brightnessSlider.value = String(clamped);
  }
  if (els.brightnessValue) {
    els.brightnessValue.textContent = `${clamped}%`;
  }
  try {
    localStorage.setItem('social_hub_brightness', String(clamped));
  } catch {}
  syncBrightnessButtonState();
}

function toggleBrightnessPopover(forceOpen) {
  if (!els.brightnessPopover) return;
  const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : els.brightnessPopover.hidden;
  els.brightnessPopover.hidden = !shouldOpen;
  syncBrightnessButtonState();
  if (shouldOpen && els.brightnessSlider) {
    els.brightnessSlider.focus();
  }
}

function toggleDndMute() {
  state.dndMuted = !state.dndMuted;
  els.btnDnd.classList.toggle('active-toggle', state.dndMuted);
  syncVisibleWebviews();
}

function toggleLockOverlay(forceState) {
  state.locked = typeof forceState === 'boolean' ? forceState : !state.locked;
  els.lockOverlay.hidden = !state.locked;
}

function renderPresets() {
  els.presetGrid.innerHTML = '';
  state.presets.forEach((preset) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'preset-btn';
    btn.title = `Bấm để thêm ngay tab ${preset.name}`;
    btn.innerHTML = `
      ${SERVICE_ICONS[preset.iconKey] || SERVICE_ICONS.custom}
      <span class="preset-name">${preset.name}</span>
      <span class="preset-badge">+ Thêm ngay</span>
    `;
    btn.addEventListener('click', async () => {
      try {
        const payload = {
          name: preset.name,
          url: preset.url,
          iconKey: preset.iconKey,
          color: preset.color || '#0068ff',
        };
        const updated = await window.chatHub.addService(payload);
        state.services = updated;
        els.addModal.hidden = true;
        renderRailButtons();
        const newest = state.services[state.services.length - 1];
        if (newest) switchService(newest.id);
      } catch (err) {
        els.addServiceError.textContent = err.message || 'Không thể thêm ứng dụng';
        els.addServiceError.hidden = false;
      }
    });
    els.presetGrid.appendChild(btn);
  });
}

function renderSettingsModalList() {
  els.settingsServiceList.innerHTML = '';
  state.services.forEach((service) => {
    const isEnabled = service.enabled !== false;
    const isDeletable = state.services.length > 1;
    const card = document.createElement('div');
    card.className = `settings-service-card${isEnabled ? '' : ' is-disabled'}`;
    card.innerHTML = `
      <div class="card-top">
        <div class="card-brand">
          <div class="card-icon-box">
            ${SERVICE_ICONS[service.iconKey] || SERVICE_ICONS.custom}
          </div>
          <span class="settings-service-name" title="${service.name}">${service.name}</span>
        </div>
        <button
          type="button"
          class="service-toggle-switch${isEnabled ? ' is-on' : ''}"
          role="switch"
          aria-checked="${isEnabled}"
          data-id="${service.id}"
          title="${isEnabled ? 'Đang bật' : 'Đang tắt'}"
        >
          <span class="toggle-thumb"></span>
        </button>
      </div>
      <div class="card-actions">
        <button type="button" class="btn-card-action btn-clear-session" data-id="${service.id}">Đăng xuất / Cache</button>
        ${isDeletable ? `<button type="button" class="btn-card-action btn-delete-service" data-id="${service.id}" style="color: #ef4444;" title="Xóa tab này khỏi thanh bên">Xóa tab</button>` : ''}
      </div>
    `;

    card.querySelector('.service-toggle-switch').addEventListener('click', async () => {
      try {
        const updated = await window.chatHub.toggleService(service.id);
        state.services = updated;
        const enabledList = getEnabledServices();
        if (!enabledList.some((s) => s.id === state.activeServiceId)) {
          state.activeServiceId = enabledList[0]?.id || null;
        }
        if (state.splitSecondaryId && !enabledList.some((s) => s.id === state.splitSecondaryId)) {
          state.splitSecondaryId = enabledList.find((s) => s.id !== state.activeServiceId)?.id || null;
        }
        updateTitlebar();
        renderRailButtons();
        syncVisibleWebviews();
        renderSettingsModalList();
      } catch (err) {
        alert(err.message || 'Cần giữ lại tối thiểu 1 ứng dụng hiển thị trên thanh bên');
      }
    });

    card.querySelector('.btn-clear-session').addEventListener('click', async () => {
      await window.chatHub.clearServiceSession(service.partition);
      const pane = els.webviewStage.querySelector(`.webview-pane[data-service-id="${service.id}"]`);
      const wv = pane ? pane.querySelector('webview') : null;
      if (wv && typeof wv.reload === 'function') wv.reload();
    });

    const deleteBtn = card.querySelector('.btn-delete-service');
    if (deleteBtn) {
      deleteBtn.addEventListener('click', async () => {
        try {
          const updated = await window.chatHub.removeService(service.id);
          state.services = updated;
          destroyWebviewPane(service.id);
          const enabledList = getEnabledServices();
          if (!enabledList.some((s) => s.id === state.activeServiceId)) {
            state.activeServiceId = enabledList[0]?.id || null;
          }
          if (state.splitSecondaryId && !enabledList.some((s) => s.id === state.splitSecondaryId)) {
            state.splitSecondaryId = enabledList.find((s) => s.id !== state.activeServiceId)?.id || null;
          }
          updateTitlebar();
          renderRailButtons();
          syncVisibleWebviews();
          renderSettingsModalList();
        } catch (err) {
          alert(err.message || 'Không thể xóa ứng dụng này');
        }
      });
    }

    els.settingsServiceList.appendChild(card);
  });
}

async function initApp() {
  const initialData = await window.chatHub.getInitialState();
  state.services = initialData.services || [];
  state.presets = initialData.presets || [];
  state.notificationMode = initialData.notificationMode === 'sender' ? 'sender' : 'minimal';
  state.muteNotificationSound = Boolean(initialData.muteNotificationSound);
  state.autoStart = Boolean(initialData.autoStart);
  state.closeToTray = initialData.closeToTray !== false;
  state.adBlockEnabled = initialData.adBlockEnabled !== false;
  state.activeServiceId = getEnabledServices()[0]?.id || state.services[0]?.id || null;

  const pushWindowsOptions = async (patch = {}) => {
    if (typeof window.chatHub.setWindowsOptions === 'function') {
      const res = await window.chatHub.setWindowsOptions({
        autoStart: state.autoStart,
        closeToTray: state.closeToTray,
        adBlockEnabled: state.adBlockEnabled,
        muteNotificationSound: state.muteNotificationSound,
        ...patch,
      });
      if (res) {
        state.autoStart = Boolean(res.autoStart);
        state.closeToTray = res.closeToTray !== false;
        state.adBlockEnabled = res.adBlockEnabled !== false;
        state.muteNotificationSound = Boolean(res.muteNotificationSound);
      }
    }
  };

  if (els.toggleMuteNotifySound) {
    els.toggleMuteNotifySound.checked = state.muteNotificationSound;
    els.toggleMuteNotifySound.addEventListener('change', () => {
      pushWindowsOptions({ muteNotificationSound: els.toggleMuteNotifySound.checked });
    });
  }

  if (els.toggleAutoStart) {
    els.toggleAutoStart.checked = state.autoStart;
    els.toggleAutoStart.addEventListener('change', () => {
      pushWindowsOptions({ autoStart: els.toggleAutoStart.checked });
    });
  }

  if (els.toggleCloseToTray) {
    els.toggleCloseToTray.checked = state.closeToTray;
    els.toggleCloseToTray.addEventListener('change', () => {
      pushWindowsOptions({ closeToTray: els.toggleCloseToTray.checked });
    });
  }

  if (els.toggleAdblock) {
    els.toggleAdblock.checked = state.adBlockEnabled;
    els.toggleAdblock.addEventListener('change', () => {
      pushWindowsOptions({ adBlockEnabled: els.toggleAdblock.checked });
    });
  }

  if (els.btnOpenUblock) {
    els.btnOpenUblock.addEventListener('click', () => {
      if (typeof window.chatHub.openUblockDashboard === 'function') {
        window.chatHub.openUblockDashboard();
      }
    });
  }

  if (els.btnCheckUpdate) {
    els.btnCheckUpdate.addEventListener('click', async () => {
      if (typeof window.chatHub.checkUpdate !== 'function') return;
      const origText = els.btnCheckUpdate.textContent;
      els.btnCheckUpdate.disabled = true;
      els.btnCheckUpdate.textContent = 'Đang kiểm tra...';
      try {
        const res = await window.chatHub.checkUpdate();
        if (res && res.updated) {
          els.btnCheckUpdate.textContent = 'Đang khởi động lại...';
        } else if (res && res.error) {
          els.btnCheckUpdate.textContent = 'Lỗi kết nối, thử lại';
          setTimeout(() => {
            els.btnCheckUpdate.textContent = origText;
            els.btnCheckUpdate.disabled = false;
          }, 2500);
        } else {
          els.btnCheckUpdate.textContent = 'Đã là bản mới nhất';
          setTimeout(() => {
            els.btnCheckUpdate.textContent = origText;
            els.btnCheckUpdate.disabled = false;
          }, 2200);
        }
      } catch {
        els.btnCheckUpdate.textContent = origText;
        els.btnCheckUpdate.disabled = false;
      }
    });
  }

  if (typeof window.chatHub.onWindowsOptionsChanged === 'function') {
    window.chatHub.onWindowsOptionsChanged((opts = {}) => {
      state.autoStart = Boolean(opts.autoStart);
      state.closeToTray = opts.closeToTray !== false;
      state.adBlockEnabled = opts.adBlockEnabled !== false;
      state.muteNotificationSound = Boolean(opts.muteNotificationSound);
      if (els.toggleAutoStart) els.toggleAutoStart.checked = state.autoStart;
      if (els.toggleCloseToTray) els.toggleCloseToTray.checked = state.closeToTray;
      if (els.toggleAdblock) els.toggleAdblock.checked = state.adBlockEnabled;
      if (els.toggleMuteNotifySound) els.toggleMuteNotifySound.checked = state.muteNotificationSound;
    });
  }

  if (typeof window.chatHub.onWindowVisibilityChanged === 'function') {
    window.chatHub.onWindowVisibilityChanged((payload = {}) => {
      state.windowHidden = Boolean(payload.hidden);
      syncVisibleWebviews();
    });
  }
  document.addEventListener('visibilitychange', () => {
    syncVisibleWebviews();
  });
  window.addEventListener('focus', () => {
    state.windowHidden = false;
    syncVisibleWebviews();
  });

  const modeRadios = document.querySelectorAll('input[name="notify-mode"]');
  modeRadios.forEach((radio) => {
    radio.checked = radio.value === state.notificationMode;
    radio.addEventListener('change', async () => {
      if (radio.checked) {
        state.notificationMode = await window.chatHub.setNotificationMode(radio.value);
      }
    });
  });

  updateTitlebar();
  renderRailButtons();
  syncVisibleWebviews();
  renderPresets();

  // Pre-mount enabled messaging tabs (Zalo, Messenger, Telegram) in background shortly after startup
  // so they can receive incoming messages and fire desktop notifications before being clicked
  setTimeout(() => {
    const bgChatKeys = new Set(['zalo', 'messenger', 'telegram']);
    const bgChats = getEnabledServices().filter(
      (s) => bgChatKeys.has(s.iconKey) && s.id !== state.activeServiceId
    );
    bgChats.forEach((svc, idx) => {
      setTimeout(() => {
        if (!getEnabledServices().some((s) => s.id === svc.id)) return;
        ensureWebviewPane(svc);
        syncVisibleWebviews();
      }, idx * 800);
    });
  }, 2200);

  // Window controls
  els.btnWinMin.addEventListener('click', () => window.chatHub.minimizeWindow());
  els.btnWinMax.addEventListener('click', () => window.chatHub.maximizeWindow());
  els.btnWinClose.addEventListener('click', () => window.chatHub.closeWindow());

  // Brightness initialization (0% - 100%, applies to shell and all webview tabs)
  const savedBrightness = localStorage.getItem('social_hub_brightness');
  applyBrightness(savedBrightness === null ? 100 : savedBrightness);

  // Rail utilities
  if (els.btnReload) els.btnReload.addEventListener('click', reloadActiveService);
  if (els.btnSplitView) els.btnSplitView.addEventListener('click', toggleSplitView);
  if (els.btnThemeToggle) {
    els.btnThemeToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleBrightnessPopover();
    });
  }
  if (els.brightnessSlider) {
    els.brightnessSlider.addEventListener('input', () => {
      applyBrightness(els.brightnessSlider.value);
    });
  }
  if (els.btnBrightnessReset) {
    els.btnBrightnessReset.addEventListener('click', () => {
      applyBrightness(100);
    });
  }
  document.addEventListener('click', (e) => {
    if (
      els.brightnessPopover &&
      !els.brightnessPopover.hidden &&
      !els.brightnessPopover.contains(e.target) &&
      (!els.btnThemeToggle || !els.btnThemeToggle.contains(e.target))
    ) {
      toggleBrightnessPopover(false);
    }
  });
  window.addEventListener('blur', () => {
    if (els.brightnessPopover && !els.brightnessPopover.hidden) {
      toggleBrightnessPopover(false);
    }
  });
  if (els.btnDnd) els.btnDnd.addEventListener('click', toggleDndMute);
  if (els.btnLockApp) els.btnLockApp.addEventListener('click', () => toggleLockOverlay());
  if (els.btnUnlockApp) els.btnUnlockApp.addEventListener('click', () => toggleLockOverlay(false));

  // Add modal
  els.btnAddApp.addEventListener('click', () => {
    els.formAddService.reset();
    els.addServiceError.hidden = true;
    els.addModal.hidden = false;
    els.inputServiceName.focus();
  });
  els.btnCloseAddModal.addEventListener('click', () => (els.addModal.hidden = true));
  els.btnCancelAdd.addEventListener('click', () => (els.addModal.hidden = true));

  els.formAddService.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: els.inputServiceName.value,
        url: els.inputServiceUrl.value,
        iconKey: els.inputServiceIcon.value,
        color: els.inputServiceColor.value,
      };
      const updated = await window.chatHub.addService(payload);
      state.services = updated;
      const newest = state.services[state.services.length - 1];
      els.addModal.hidden = true;
      if (newest) switchService(newest.id);
    } catch (err) {
      els.addServiceError.textContent = err.message || 'Không thể thêm ứng dụng';
      els.addServiceError.hidden = false;
    }
  });

  // Settings modal
  const openSettings = () => {
    renderSettingsModalList();
    els.settingsModal.hidden = false;
  };
  els.btnSettings.addEventListener('click', openSettings);
  els.btnCloseSettingsModal.addEventListener('click', () => (els.settingsModal.hidden = true));

  if (els.btnTestNotify) {
    els.btnTestNotify.addEventListener('click', () => {
      const active = getEnabledServices().find((s) => s.id === state.activeServiceId) || state.services[0];
      if (active) {
        state.unreadCounts[active.id] = (state.unreadCounts[active.id] || 0) + 1;
        updateBadgeCount(active.id, state.unreadCounts[active.id]);
        triggerServiceNotification(
          active,
          { group: 'Nhóm Công Việc', sender: 'Nguyễn Văn A', body: 'Tin nhắn thử nghiệm thông báo' },
          true
        );
      }
    });
  }

  if (typeof window.chatHub.onActivateService === 'function') {
    window.chatHub.onActivateService((serviceId) => {
      if (serviceId) switchService(serviceId);
    });
  }

  if (typeof window.chatHub.onShortcutAction === 'function') {
    window.chatHub.onShortcutAction((action) => {
      handleGlobalShortcut(action);
    });
  }

  // Keyboard shortcuts (Ctrl+1..9, Ctrl+0, Ctrl+Tab, F5/Ctrl+R, Ctrl+N, Ctrl+L, Ctrl+\, Ctrl+Shift+T)
  window.addEventListener(
    'keydown',
    (e) => {
      const action = parseHostShortcut(e);
      if (action) {
        e.preventDefault();
        e.stopPropagation();
        handleGlobalShortcut(action);
      } else if (e.key === 'Escape') {
        els.addModal.hidden = true;
        els.settingsModal.hidden = true;
        toggleBrightnessPopover(false);
      }
    },
    true
  );
}

let lastShortcutAt = 0;
let lastShortcutSig = '';

function parseHostShortcut(e) {
  if (!e) return null;
  const ctrl = Boolean(e.ctrlKey || e.metaKey);
  const alt = Boolean(e.altKey);
  const shift = Boolean(e.shiftKey);
  const key = String(e.key || '');
  const code = String(e.code || '');

  let digit = -1;
  if (/^[0-9]$/.test(key)) {
    digit = parseInt(key, 10);
  } else if (/^Digit([0-9])$/.test(code)) {
    digit = parseInt(code.slice(5), 10);
  } else if (/^Numpad([0-9])$/.test(code)) {
    digit = parseInt(code.slice(6), 10);
  }

  if (ctrl && !alt && !shift && digit >= 0 && digit <= 9) {
    return { type: 'switch-tab-index', index: digit === 0 ? 9 : digit - 1 };
  }
  if (ctrl && !alt && key === 'Tab') {
    return { type: 'cycle-tab', direction: shift ? -1 : 1 };
  }
  if (key === 'F5' || (ctrl && !alt && !shift && (key.toLowerCase() === 'r' || code === 'KeyR'))) {
    return { type: 'reload' };
  }
  if (ctrl && !alt && !shift && (key.toLowerCase() === 'n' || code === 'KeyN')) {
    return { type: 'add-tab' };
  }
  if (ctrl && !alt && !shift && (key.toLowerCase() === 'l' || code === 'KeyL')) {
    return { type: 'toggle-lock' };
  }
  if (ctrl && !alt && !shift && key === '\\') {
    return { type: 'toggle-split' };
  }
  if (ctrl && !alt && shift && (key.toLowerCase() === 't' || code === 'KeyT')) {
    return { type: 'toggle-theme' };
  }
  return null;
}

function handleGlobalShortcut(action) {
  if (!action || !action.type) return;
  const now = Date.now();
  const sig = `${action.type}:${action.index ?? ''}:${action.direction ?? ''}`;
  if (sig === lastShortcutSig && now - lastShortcutAt < 120) {
    return;
  }
  lastShortcutSig = sig;
  lastShortcutAt = now;

  const orderedIds = getOrderedRailServiceIds();
  if (action.type === 'switch-tab-index') {
    const idx = Number(action.index);
    if (idx >= 0 && idx < orderedIds.length && orderedIds[idx]) {
      els.addModal.hidden = true;
      els.settingsModal.hidden = true;
      switchService(orderedIds[idx]);
    }
  } else if (action.type === 'cycle-tab') {
    if (orderedIds.length > 0) {
      const dir = action.direction === -1 ? -1 : 1;
      const curIdx = orderedIds.indexOf(state.activeServiceId);
      const nextIdx = (curIdx + dir + orderedIds.length) % orderedIds.length;
      if (orderedIds[nextIdx]) {
        els.addModal.hidden = true;
        els.settingsModal.hidden = true;
        switchService(orderedIds[nextIdx]);
      }
    }
  } else if (action.type === 'reload') {
    reloadActiveService();
  } else if (action.type === 'add-tab') {
    if (els.btnAddApp) els.btnAddApp.click();
  } else if (action.type === 'toggle-lock') {
    toggleLockOverlay();
  } else if (action.type === 'toggle-split') {
    toggleSplitView();
  } else if (action.type === 'toggle-theme') {
    toggleBrightnessPopover();
  }
}

window.__socialHubShortcut = handleGlobalShortcut;

document.addEventListener('DOMContentLoaded', initApp);
