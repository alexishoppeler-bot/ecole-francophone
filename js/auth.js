/* Auth client-side — école-francophone.ch */
(function () {
  var AUTH_KEY  = 'ef_auth';
  var LEVEL_KEY = 'ef_level';
  var VALID_USER = 'école-francophone.ch';
  var VALID_PASS = '1984';

  var LEVELS = {
    a1:   { label: 'A1', name: 'Débutant',            icon: '🌱', color: '#1D4ED8', desc: 'Je découvre le français et les repères essentiels.' },
    a2:   { label: 'A2', name: 'Élémentaire',          icon: '🌿', color: '#0ea5e9', desc: 'Je m\'exprime sur des sujets familiers du quotidien.' },
    b1:   { label: 'B1', name: 'Intermédiaire',        icon: '🌳', color: '#f59e0b', desc: 'Je comprends et m\'exprime dans des situations variées.' },
    b2:   { label: 'B2', name: 'Avancé',               icon: '🌟', color: '#A855F7', desc: 'Je communique avec aisance sur des sujets complexes.' },
    c1c2: { label: 'C1/C2', name: 'Maîtrise',         icon: '🎓', color: '#f43f5e', desc: 'Je maîtrise le français avec fluidité et nuance.' }
  };
  var PLATFORM_URLS = {
    a1: 'plateformes/a1/index.html',
    a2: 'plateformes/a2/index.html',
    b1: 'plateformes/b1/index.html',
    b2: 'plateformes/b2/index.html',
    c1c2: 'plateformes/c1c2/index.html'
  };

  function isLoggedIn() {
    return sessionStorage.getItem(AUTH_KEY) === '1';
  }

  function login(user, pass) {
    if (user === VALID_USER && pass === VALID_PASS) {
      sessionStorage.setItem(AUTH_KEY, '1');
      return true;
    }
    return false;
  }

  function logout() {
    sessionStorage.removeItem(AUTH_KEY);
  }

  function requireAuth(loginUrl) {
    if (!isLoggedIn()) {
      window.location.replace(loginUrl || '../login.html');
    }
  }

  function getLevel() {
    return localStorage.getItem(LEVEL_KEY) || null;
  }

  function setLevel(key) {
    localStorage.setItem(LEVEL_KEY, key);
  }

  function getLevelData(key) {
    return LEVELS[key] || null;
  }

  function getAllLevels() {
    return LEVELS;
  }

  function getPlatformUrl(key, prefix) {
    return PLATFORM_URLS[key] ? (prefix || '') + PLATFORM_URLS[key] : null;
  }

  window.efAuth = {
    isLoggedIn: isLoggedIn, login: login, logout: logout, requireAuth: requireAuth,
    getLevel: getLevel, setLevel: setLevel, getLevelData: getLevelData, getAllLevels: getAllLevels,
    getPlatformUrl: getPlatformUrl
  };
})();
