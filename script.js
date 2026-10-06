/* Yolando Mitchell Brown — v1 preview build interactions */
(function () {
  "use strict";

  /* --- mobile hamburger --- */
  var hamburger = document.getElementById("hamburger");
  var nav = document.getElementById("mainNav");
  hamburger.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", open ? "true" : "false");
    hamburger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  /* --- portfolio liquid tab bar + filtering --- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".filter-tab"));
  var liquid = document.getElementById("filterLiquid");
  var cards = Array.prototype.slice.call(document.querySelectorAll(".pf-card"));

  function moveLiquid(tab) {
    if (!tab) return;
    liquid.style.width = tab.offsetWidth + "px";
    liquid.style.transform = "translateX(" + tab.offsetLeft + "px)";
  }
  function applyFilter(tab) {
    tabs.forEach(function (t) {
      var active = t === tab;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", active ? "true" : "false");
    });
    moveLiquid(tab);
    var f = tab.getAttribute("data-filter");
    cards.forEach(function (card) {
      var show = f === "all" || card.getAttribute("data-cat") === f;
      card.classList.toggle("is-hidden", !show);
    });
  }
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () { applyFilter(tab); });
  });
  window.addEventListener("resize", function () {
    var active = document.querySelector(".filter-tab.is-active");
    moveLiquid(active);
  });
  // Position the liquid pill on load (after fonts/layout settle)
  window.addEventListener("load", function () {
    moveLiquid(document.querySelector(".filter-tab.is-active"));
  });
  moveLiquid(document.querySelector(".filter-tab.is-active"));

  /* --- theater lightbox (videos) --- */
  var lightbox = document.getElementById("lightbox");
  var lightboxTitle = document.getElementById("lightboxTitle");
  var lightboxClose = document.getElementById("lightboxClose");
  var lightboxBackdrop = document.getElementById("lightboxBackdrop");
  var lastFocus = null;

  function openLightbox(title) {
    lastFocus = document.activeElement;
    lightboxTitle.textContent = title;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    lightboxClose.focus();
  }
  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
    // If a real embed is added later, this is where it gets stopped/removed.
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  document.querySelectorAll(".pf-play").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openLightbox(btn.getAttribute("data-video-title") || "Video");
    });
  });
  lightboxClose.addEventListener("click", closeLightbox);
  lightboxBackdrop.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
  });

  /* --- testimonial slider --- */
  var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
  var dotsWrap = document.getElementById("sliderDots");
  var prev = document.getElementById("prevSlide");
  var next = document.getElementById("nextSlide");
  var idx = 0;

  slides.forEach(function (_, i) {
    var dot = document.createElement("button");
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", "Testimonial " + (i + 1));
    dot.addEventListener("click", function () { goTo(i); });
    dotsWrap.appendChild(dot);
  });
  var dots = Array.prototype.slice.call(dotsWrap.children);

  function goTo(i) {
    idx = (i + slides.length) % slides.length;
    slides.forEach(function (s, j) { s.classList.toggle("is-active", j === idx); });
    dots.forEach(function (d, j) { d.classList.toggle("is-active", j === idx); });
  }
  prev.addEventListener("click", function () { goTo(idx - 1); });
  next.addEventListener("click", function () { goTo(idx + 1); });
  goTo(0);

  /* --- demo contact form (not wired) --- */
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Demo form — not wired up. Connect this to Yolando's email or form service at launch.");
  });
})();
