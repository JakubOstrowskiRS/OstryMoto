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
    if (!el) return;
    if (item.url) {
      el.href = item.url;
      el.classList.remove("social-card--soon");
      el.removeAttribute("aria-disabled");
      el.removeAttribute("tabindex");
      el.removeAttribute("aria-label");
      return;
    }
    el.removeAttribute("href");
    el.classList.add("social-card--soon");
    el.setAttribute("aria-disabled", "true");
    el.setAttribute("tabindex", "-1");
    var name = el.getAttribute("data-platform") || "Social";
    el.setAttribute("aria-label", name + " — wkrótce");
  });

  var shop = document.getElementById("link-shop");
  if (shop) {
    if (cfg.shop) {
      shop.href = cfg.shop;
      shop.textContent = "Przejdź do sklepu";
      shop.classList.remove("btn--soon");
      shop.removeAttribute("aria-disabled");
      shop.removeAttribute("tabindex");
    } else {
      shop.removeAttribute("href");
      shop.textContent = "Coming soon";
      shop.classList.add("btn--soon");
      shop.setAttribute("aria-disabled", "true");
      shop.setAttribute("tabindex", "-1");
    }
  }

  var ytHero = document.getElementById("link-youtube-hero");
  if (ytHero && cfg.youtube) ytHero.href = cfg.youtube;

  var mail = document.getElementById("link-mail");
  if (mail && cfg.email) mail.href = cfg.email;
})();
