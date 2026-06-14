'use strict';

// Assemble les donnees d'exercices chargees par niveau dans window.EXERCISE_CONTENT.
(function initExerciseContent() {
  var parts = window.EXERCISE_CONTENT_PARTS || {};
  var byUnit = {};
  Object.keys(parts).forEach(function(levelKey) {
    var group = parts[levelKey];
    if (!group || !group.units) return;
    Object.keys(group.units).forEach(function(unitId) {
      byUnit[unitId] = group.units[unitId];
    });
  });
  window.EXERCISE_CONTENT = { byUnit: byUnit, parts: parts };
}());
