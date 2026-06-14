'use strict';

(function initCourseData() {
  var parts = window.COURSE_DATA_PARTS || {};
  var order = ['a1', 'a2', 'b1', 'b2', 'c1c2'];
  var sections = [];
  var unitContent = {};
  var verbData = {};
  var dialogues = {};

  order.forEach(function(key) {
    var part = parts[key];
    if (!part) return;
    if (part.section) sections.push(part.section);
    Object.assign(unitContent, part.units || {});
    Object.assign(verbData, part.verbs || {});
    Object.assign(dialogues, part.dialogues || {});
  });

  window.COURSE_DATA = {
    sections: sections,
    unitContent: unitContent,
    verbData: verbData,
    dialogues: dialogues
  };
})();
