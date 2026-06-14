'use strict';

(function initHomepage() {
  var home = (window.SITE_TEXT && window.SITE_TEXT.home) || null;
  if (!home) return;

  function setText(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function setHtml(id, value) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = value;
  }

  if (home.documentTitle) document.title = home.documentTitle;

  var metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && home.metaDescription) metaDescription.setAttribute('content', home.metaDescription);

  var ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && home.ogTitle) ogTitle.setAttribute('content', home.ogTitle);

  var ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription && home.ogDescription) ogDescription.setAttribute('content', home.ogDescription);

  var schema = document.getElementById('siteSchema');
  if (schema) {
    try {
      var data = JSON.parse(schema.textContent);
      if (home.schemaName) data.name = home.schemaName;
      if (home.schemaDescription) data.description = home.schemaDescription;
      schema.textContent = JSON.stringify(data, null, 2);
    } catch (error) {}
  }

  setText('homeHeroLabel', home.heroLabel);
  setHtml('homeTitleBlue', home.heroTitleBlueHtml);
  setHtml('homeTitlePurple', home.heroTitlePurpleHtml);
  setText('homeHeroBody', home.heroBody);
  setText('homePrimaryAction', home.primaryAction);
  setText('homeSecondaryAction', home.secondaryAction);
  setText('homePanelTitle', home.panelTitle);

  (home.panelItems || []).forEach(function(item, index) {
    setText('homePanelItem' + (index + 1), item);
  });

  (home.cards || []).forEach(function(card, index) {
    var n = index + 1;
    setText('homeCardTitle' + n, card.title);
    setText('homeCardBody' + n, card.body);
    setText('homeCardBadge' + n, card.badge);
  });
}());
