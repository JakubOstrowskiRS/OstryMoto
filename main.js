$(function () {
  var cfg = window.SITE_CONFIG || {};
  $("#year").text(String(new Date().getFullYear()));

  var map = [
    { selector: '[data-platform="YouTube"]', url: cfg.youtube },
    { selector: '[data-platform="Facebook"]', url: cfg.facebook },
    { selector: '[data-platform="Instagram"]', url: cfg.instagram },
    { selector: '[data-platform="TikTok"]', url: cfg.tiktok },
  ];

  $.each(map, function (_, item) {
    var $el = $(item.selector);
    if (!$el.length) return;
    if (item.url) {
      $el
        .attr("href", item.url)
        .removeClass("social-card--soon")
        .removeAttr("aria-disabled tabindex aria-label");
      return;
    }
    var name = $el.attr("data-platform") || "Social";
    $el
      .removeAttr("href")
      .addClass("social-card--soon")
      .attr({
        "aria-disabled": "true",
        tabindex: "-1",
        "aria-label": name + " — wkrótce",
      });
  });

  if (cfg.youtube) $("#link-youtube-hero").attr("href", cfg.youtube);

  var $mail = $("#link-mail");
  if ($mail.length && cfg.email) {
    $mail.attr("href", cfg.email);
    var visible = String(cfg.email).replace(/^mailto:/i, "");
    if (visible) $mail.text(visible);
  }

  $("#contact-form").on("submit", function (event) {
    event.preventDefault();
    var form = this;
    if (!form.checkValidity()) {
      $(form).addClass("was-validated");
      return;
    }
    $("#contactModalName").text($("#contact-name").val());
    bootstrap.Modal.getOrCreateInstance(document.getElementById("contactModal")).show();
    form.reset();
    $(form).removeClass("was-validated");
  });

  $("#mainNav .nav-link").on("click", function () {
    var nav = document.getElementById("mainNav");
    if (!nav || !window.bootstrap || !nav.classList.contains("show")) return;
    bootstrap.Collapse.getOrCreateInstance(nav).hide();
  });
});
