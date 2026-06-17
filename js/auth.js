/* Auth client-side — école-francophone.ch */
(function () {
  var core = window.EF_SITE || {};

  function isLoggedIn() {
    return true;
  }

  function login(user, pass) {
    return true;
  }

  function logout() {}

  function requireAuth(loginUrl) {}

  function getLevel() {
    return core.getLevel ? core.getLevel() : null;
  }

  function setLevel(key) {
    return core.setLevel ? core.setLevel(key) : false;
  }

  function getLevelData(key) {
    return core.getLevelData ? core.getLevelData(key) : null;
  }

  function getAllLevels() {
    return core.getAllLevels ? core.getAllLevels() : {};
  }

  function getPlatformUrl(key, prefix) {
    return core.getPlatformUrl ? core.getPlatformUrl(key, prefix || '') : null;
  }

  window.efAuth = {
    isLoggedIn: isLoggedIn, login: login, logout: logout, requireAuth: requireAuth,
    getLevel: getLevel, setLevel: setLevel, getLevelData: getLevelData, getAllLevels: getAllLevels,
    getPlatformUrl: getPlatformUrl
  };
})();
