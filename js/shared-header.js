'use strict';

(function renderSharedHeader() {
  var slot = document.getElementById('header-slot');
  if (!slot) return;

  var LEVELS = {
    a1:   { label: 'A1',    icon: '🌱', color: '#1D4ED8', name: 'Débutant' },
    a2:   { label: 'A2',    icon: '🌿', color: '#0ea5e9', name: 'Élémentaire' },
    b1:   { label: 'B1',    icon: '🌳', color: '#f59e0b', name: 'Intermédiaire' },
    b2:   { label: 'B2',    icon: '🌟', color: '#7C3AED', name: 'Avancé' },
    c1c2: { label: 'C1/C2', icon: '🎓', color: '#f43f5e', name: 'Maîtrise' }
  };

  function getLevel() {
    try { return localStorage.getItem('ef_level') || null; } catch(e) { return null; }
  }

  var root = window.EF_ROOT || './';
  var level = getLevel();
  var lv = level ? LEVELS[level] : null;

  var levelChip = lv
    ? '<button class="header-level-chip" id="sharedLevelChip" title="Changer de niveau" type="button">'
      + '<span class="hlc-badge" style="background:' + lv.color + '">' + lv.label + '</span>'
      + '<span class="hlc-icon">' + lv.icon + '</span>'
      + '<span class="hlc-name">' + lv.name + '</span>'
      + '</button>'
    : '';

  slot.innerHTML = '<header class="header">'
    + '<div class="header-row1">'
    + '<a href="' + root + 'index.html" class="header-logo">'
    + '<img src="' + root + 'assets/logo.png" class="header-logo-img" alt="École Francophone">'
    + '<span class="header-logo-text">'
    + '<span class="header-logo-blue">learning</span>&nbsp;<span class="header-logo-purple">progress</span>'
    + '</span>'
    + '</a>'
    + '<div class="header-right">'
    + levelChip
    + ''
    + '</div>'
    + '</div>'
    + '</header>';

  var PLATFORM_URLS = {
    a1: root + 'plateformes/a1/index.html',
    a2: root + 'plateformes/a2/index.html',
    b1: root + 'plateformes/b1/index.html',
    b2: root + 'plateformes/b2/index.html',
    c1c2: root + 'plateformes/c1c2/index.html'
  };

  function openLevelOverlay() {
    if (document.getElementById('sharedLevelOverlay')) return;
    var overlay = document.createElement('div');
    overlay.id = 'sharedLevelOverlay';
    overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(15,12,41,0.7);backdrop-filter:blur(6px)';
    overlay.innerHTML = '<div style="background:#fff;border-radius:20px;padding:32px;max-width:600px;width:calc(100vw - 32px);box-shadow:0 24px 60px rgba(0,0,0,0.3)">'
      + '<p style="font-weight:900;font-size:1.1rem;margin:0 0 20px;color:#1a1a2e">Mon niveau de français</p>'
      + '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:12px">'
      + Object.keys(LEVELS).map(function(k) {
          var l = LEVELS[k];
          return '<button data-lvl="' + k + '" style="padding:16px 10px;border:2px solid #e5e7eb;border-radius:12px;background:#fff;cursor:pointer;font-family:inherit;display:flex;flex-direction:column;align-items:center;gap:6px;transition:border-color .15s">'
            + '<span style="background:' + l.color + ';color:#fff;border-radius:8px;padding:4px 10px;font-weight:800;font-size:.85rem">' + l.label + '</span>'
            + '<span style="font-size:1.4rem">' + l.icon + '</span>'
            + '<span style="font-size:.8rem;font-weight:700;color:#1a1a2e">' + l.name + '</span>'
            + '</button>';
        }).join('')
      + '</div>'
      + '<button id="sharedOverlayClose" style="margin-top:20px;background:none;border:none;color:#9090b0;cursor:pointer;font-size:.9rem">Fermer</button>'
      + '</div>';
    document.body.appendChild(overlay);

    overlay.addEventListener('click', function(e) {
      var btn = e.target.closest('[data-lvl]');
      if (btn) {
        try { localStorage.setItem('ef_level', btn.dataset.lvl); } catch(e) {}
        window.location.href = PLATFORM_URLS[btn.dataset.lvl] || root + 'cours/index.html';
      }
      if (e.target === overlay || e.target.id === 'sharedOverlayClose') overlay.remove();
    });
    document.addEventListener('keydown', function esc(e) {
      if (e.key === 'Escape') { overlay.remove(); document.removeEventListener('keydown', esc); }
    });
  }

  if (lv) {
    document.getElementById('sharedLevelChip').addEventListener('click', openLevelOverlay);
  }
})();
