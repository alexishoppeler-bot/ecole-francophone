'use strict';

(function initSiteCore() {
  if (window.EF_SITE) return;

  var LEVEL_KEY = 'ef_level';
  var LEVELS = {
    a1:   { label: 'A1',    name: 'Débutant',      icon: '🌱', color: '#1D4ED8', desc: 'Je découvre le français et les repères essentiels.' },
    a2:   { label: 'A2',    name: 'Élémentaire',   icon: '🌿', color: '#0ea5e9', desc: 'Je m\'exprime sur des sujets familiers du quotidien.' },
    b1:   { label: 'B1',    name: 'Intermédiaire', icon: '🌳', color: '#f59e0b', desc: 'Je comprends et m\'exprime dans des situations variées.' },
    b2:   { label: 'B2',    name: 'Avancé',        icon: '🌟', color: '#A855F7', desc: 'Je communique avec aisance sur des sujets complexes.' },
    c1c2: { label: 'C1/C2', name: 'Maîtrise',      icon: '🎓', color: '#f43f5e', desc: 'Je maîtrise le français avec fluidité et nuance.' }
  };

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>"']/g, function(char) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      }[char];
    });
  }

  function joinRoot(root, path) {
    return (root || '') + path;
  }

  function getLevel() {
    try { return localStorage.getItem(LEVEL_KEY) || null; } catch(e) { return null; }
  }

  function setLevel(key) {
    if (!LEVELS[key]) return false;
    try { localStorage.setItem(LEVEL_KEY, key); } catch(e) {}
    return true;
  }

  function getLevelData(key) {
    return LEVELS[key] || null;
  }

  function getAllLevels() {
    return LEVELS;
  }

  function getPlatformUrl(key, root) {
    return LEVELS[key] ? joinRoot(root, 'cours/index.html') : null;
  }

  function injectLevelPickerStyles() {
    if (document.getElementById('ef-level-picker-style')) return;
    var style = document.createElement('style');
    style.id = 'ef-level-picker-style';
    style.textContent = [
      '.ef-level-picker{position:fixed;inset:0;z-index:9999;display:none}',
      '.ef-level-picker.open{display:block}',
      '.ef-level-picker__backdrop{position:absolute;inset:0;background:rgba(15,12,41,.68);backdrop-filter:blur(6px)}',
      '.ef-level-picker__panel{position:relative;width:min(640px,calc(100vw - 32px));margin:clamp(40px,12vh,96px) auto 0;padding:28px;border-radius:18px;background:#fff;box-shadow:0 24px 60px rgba(0,0,0,.28);font-family:var(--font-body,system-ui,sans-serif)}',
      '.ef-level-picker__close{position:absolute;top:12px;right:12px;width:36px;height:36px;border:0;border-radius:999px;background:#f3f4f6;color:#475569;font-size:18px;cursor:pointer}',
      '.ef-level-picker__title{margin:0 42px 6px 0;color:#111122;font-weight:900;font-size:1.08rem}',
      '.ef-level-picker__hint{margin:0 42px 18px 0;color:#667085;font-size:.88rem;line-height:1.45}',
      '.ef-level-picker__grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(112px,1fr));gap:12px}',
      '.ef-level-picker__card{display:flex;min-height:142px;flex-direction:column;align-items:center;justify-content:flex-start;gap:7px;padding:17px 10px;border:2px solid #e5e7eb;border-radius:12px;background:#fff;color:#111122;font-family:inherit;text-align:center;cursor:pointer;transition:transform .15s,border-color .15s,box-shadow .15s}',
      '.ef-level-picker__card:hover,.ef-level-picker__card:focus-visible{transform:translateY(-2px);border-color:var(--level-color,#5AABF0);box-shadow:0 10px 28px rgba(15,23,42,.12)}',
      '.ef-level-picker__badge{display:inline-flex;align-items:center;justify-content:center;border-radius:8px;padding:4px 10px;color:#fff;font-weight:900;font-size:.84rem}',
      '.ef-level-picker__icon{font-size:1.45rem;line-height:1}',
      '.ef-level-picker__name{font-size:.86rem;font-weight:800}',
      '.ef-level-picker__desc{font-size:.74rem;color:#667085;line-height:1.35}',
      '@media (max-width:520px){.ef-level-picker__panel{padding:22px}.ef-level-picker__grid{grid-template-columns:1fr 1fr}.ef-level-picker__card{min-height:132px}}'
    ].join('');
    document.head.appendChild(style);
  }

  function createLevelPicker(options) {
    options = options || {};
    var existing = document.getElementById(options.id || 'efLevelPicker');
    if (existing) return existing;
    injectLevelPickerStyles();

    var root = options.root || window.EF_ROOT || '';
    var overlay = document.createElement('div');
    overlay.id = options.id || 'efLevelPicker';
    overlay.className = 'ef-level-picker';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', options.title || 'Mon niveau de français');
    overlay.innerHTML = [
      '<div class="ef-level-picker__backdrop"></div>',
      '<div class="ef-level-picker__panel">',
      '  <button class="ef-level-picker__close" type="button" aria-label="Fermer">×</button>',
      '  <p class="ef-level-picker__title">' + escapeHtml(options.title || 'Mon niveau de français') + '</p>',
      '  <p class="ef-level-picker__hint">' + escapeHtml(options.hint || 'Choisissez un parcours. Le site affichera ensuite les liens adaptés.') + '</p>',
      '  <div class="ef-level-picker__grid">',
      Object.keys(LEVELS).map(function(key) {
        var level = LEVELS[key];
        return [
          '<button class="ef-level-picker__card" style="--level-color:' + level.color + '" data-level="' + key + '" type="button">',
          '  <span class="ef-level-picker__badge" style="background:' + level.color + '">' + level.label + '</span>',
          '  <span class="ef-level-picker__icon">' + level.icon + '</span>',
          '  <span class="ef-level-picker__name">' + escapeHtml(level.name) + '</span>',
          '  <span class="ef-level-picker__desc">' + escapeHtml(level.desc) + '</span>',
          '</button>'
        ].join('');
      }).join(''),
      '  </div>',
      '</div>'
    ].join('');
    document.body.appendChild(overlay);

    function close() { overlay.classList.remove('open'); }
    function open() {
      overlay.classList.add('open');
      var closeButton = overlay.querySelector('.ef-level-picker__close');
      if (closeButton) closeButton.focus();
    }

    overlay.open = open;
    overlay.close = close;
    overlay.querySelector('.ef-level-picker__backdrop').addEventListener('click', close);
    overlay.querySelector('.ef-level-picker__close').addEventListener('click', close);
    overlay.addEventListener('keydown', function(e) { if (e.key === 'Escape') close(); });
    overlay.querySelector('.ef-level-picker__grid').addEventListener('click', function(e) {
      var btn = e.target.closest('[data-level]');
      if (!btn) return;
      setLevel(btn.dataset.level);
      if (typeof options.onSelect === 'function') {
        options.onSelect(btn.dataset.level);
        return;
      }
      window.location.href = joinRoot(root, 'cours/index.html');
    });
    return overlay;
  }

  function openLevelPicker(options) {
    createLevelPicker(options).open();
  }

  window.EF_SITE = {
    levels: LEVELS,
    escapeHtml: escapeHtml,
    getLevel: getLevel,
    setLevel: setLevel,
    getLevelData: getLevelData,
    getAllLevels: getAllLevels,
    getPlatformUrl: getPlatformUrl,
    createLevelPicker: createLevelPicker,
    openLevelPicker: openLevelPicker
  };
})();
