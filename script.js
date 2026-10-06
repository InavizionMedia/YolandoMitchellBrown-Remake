/* Yolando Mitchell Brown — v2 polish build interactions
   Hamburger + portfolio filter + native <dialog> video lightbox with
   click-to-load YouTube facade. No sliders, no form backend. */
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
  window.addEventListener("load", function () {
    moveLiquid(document.querySelector(".filter-tab.is-active"));
  });
  moveLiquid(document.querySelector(".filter-tab.is-active"));

  /* --- video dialog: native <dialog>, click-to-load facade, src cleared on close --- */
  var dialog = document.getElementById("videoDialog");
  var dialogTitle = document.getElementById("dialogTitle");
  var dialogPlayer = document.getElementById("dialogPlayer");
  var lastFocus = null;

  function stopVideo() {
    // Remove the iframe entirely so playback stops on close.
    dialogPlayer.innerHTML = "";
  }

  function openDialog(title, videoId) {
    lastFocus = document.activeElement;
    dialogTitle.textContent = title;
    stopVideo();
    if (videoId) {
      // Click-to-load facade: the YouTube iframe is only created after an explicit click.
      var facade = document.createElement("button");
      facade.className = "facade-play";
      facade.setAttribute("aria-label", "Load and play " + title);
      var glyph = document.createElement("span");
      glyph.setAttribute("aria-hidden", "true");
      glyph.textContent = "▶ ";
      facade.appendChild(glyph);
      facade.appendChild(document.createTextNode("Play video"));
      facade.addEventListener("click", function () {
        stopVideo();
        var iframe = document.createElement("iframe");
        iframe.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&rel=0";
        iframe.title = title;
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        dialogPlayer.appendChild(iframe);
      });
      dialogPlayer.appendChild(facade);
    } else {
      // MOCK: no data-video-id set yet — show the placeholder note.
      var note = document.createElement("p");
      note.className = "mock-note";
      var tag = document.createElement("span");
      tag.className = "mock-tag";
      tag.textContent = "sample — real video embed goes here";
      note.appendChild(tag);
      dialogPlayer.appendChild(note);
    }
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
  }

  function closeDialog() {
    stopVideo();
    if (dialog.open) dialog.close();
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.querySelectorAll(".pf-play").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openDialog(
        btn.getAttribute("data-video-title") || "Video",
        btn.getAttribute("data-video-id") || ""
      );
    });
  });
  document.getElementById("dialogClose").addEventListener("click", closeDialog);
  // Backdrop click closes (clicks on the dialog element itself, outside the box)
  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) closeDialog();
  });
  // Escape is native to <dialog>; make sure video stops too.
  dialog.addEventListener("close", stopVideo);
})();
