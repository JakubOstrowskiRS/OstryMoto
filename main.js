(function () {
  var cfg = window.SITE_CONFIG || {};
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  var map = [
    { selector: '[data-platform="YouTube"]', url: cfg.youtube },
    { selector: '[data-platform="Facebook"]', url: cfg.facebook },
    { selector: '[data-platform="Instagram"]', url: cfg.instagram },
    { selector: '[data-platform="TikTok"]', url: cfg.tiktok },
  ];

  map.forEach(function (item) {
    var el = document.querySelector(item.selector);
    if (el && item.url) el.href = item.url;
  });

  var shop = document.getElementById("link-shop");
  if (shop && cfg.shop) shop.href = cfg.shop;

  var ytHero = document.getElementById("link-youtube-hero");
  if (ytHero && cfg.youtube) ytHero.href = cfg.youtube;

  var mail = document.getElementById("link-mail");
  if (mail && cfg.email) mail.href = cfg.email;
})();
