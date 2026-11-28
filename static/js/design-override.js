/* Redesign: keep the old controls, relabel them to the redesign themes/fonts,
   and replace the desktop button handlers so the labels always match. The old
   ids (amber/zeel/safelight/tungsten, maple/iosevka/space) stay in the DOM
   so the old CSS and chapter-settings.js keep working. */
(function () {
  var root = document.documentElement;
  if (root.getAttribute("data-design") !== "new") return;
  var THEMES = ["amber", "zeel", "safelight", "tungsten", "toxic"];
  var THEME_LABELS = {
    amber: "Caelus",
    zeel: "Zeel",
    safelight: "Gruvbox Material",
    tungsten: "Rebellion",
    toxic: "Toxic"
  };
  var FONTS = ["maple", "iosevka", "space"];
  var FONT_LABELS = {
    maple: "Annotation Mono",
    iosevka: "Iosevka",
    space: "Nunito"
  };

  function store(key, value) {
    try { localStorage.setItem(key, String(value)); } catch (e) {}
  }
  function load(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function currentTheme() {
    var t = root.getAttribute("data-theme");
    return THEMES.indexOf(t) < 0 ? "amber" : t;
  }
  function currentFont() {
    var f = root.getAttribute("data-font");
    return FONTS.indexOf(f) < 0 ? "iosevka" : f;
  }

  function paintTheme() {
    var t = currentTheme();
    var label = THEME_LABELS[t];
    var btn = document.getElementById("theme-btn");
    if (btn) {
      btn.setAttribute("aria-label", "Theme: " + label + " (click to switch)");
      btn.setAttribute("title", "Theme: " + label + " (click to switch)");
    }
    var name = document.getElementById("cs-theme-name");
    if (name) name.textContent = label;
    var choices = document.querySelectorAll("[data-theme-choice]");
    for (var i = 0; i < choices.length; i++) {
      choices[i].setAttribute(
        "aria-pressed",
        choices[i].getAttribute("data-theme-choice") === t ? "true" : "false"
      );
    }
  }

  function paintFont() {
    var f = currentFont();
    var label = FONT_LABELS[f];
    var btn = document.getElementById("font-btn");
    if (btn) {
      btn.setAttribute("aria-label", "Font: " + label + " (click to switch)");
      btn.setAttribute("title", "Font: " + label + " (click to switch)");
    }
    var choices = document.querySelectorAll("[data-font-choice]");
    for (var i = 0; i < choices.length; i++) {
      choices[i].setAttribute(
        "aria-pressed",
        choices[i].getAttribute("data-font-choice") === f ? "true" : "false"
      );
    }
  }

  function setTheme(name, announce) {
    if (THEMES.indexOf(name) < 0) name = "amber";
    (window.__themeSwap || function (fn) { fn(); })(function () {
      root.setAttribute("data-theme", name);
      store("theme", name);
      paintTheme();
      if (announce) document.dispatchEvent(new Event("themechange"));
    });
  }
  function setFont(name, announce) {
    if (FONTS.indexOf(name) < 0) name = "iosevka";
    root.setAttribute("data-font", name);
    store("font", name);
    paintFont();
    if (announce) document.dispatchEvent(new Event("fontchange"));
  }

  function replaceButton(id, onClick) {
    var old = document.getElementById(id);
    if (!old) return;
    var btn = old.cloneNode(true);
    old.parentNode.replaceChild(btn, old);
    btn.addEventListener("click", onClick);
  }

  replaceButton("theme-btn", function () {
    var t = currentTheme();
    setTheme(THEMES[(THEMES.indexOf(t) + 1) % THEMES.length], true);
  });
  replaceButton("font-btn", function () {
    var f = currentFont();
    setFont(FONTS[(FONTS.indexOf(f) + 1) % FONTS.length], true);
  });

  /* Mobile sheet: drop the theme that is not in the replica and relabel the
     remaining controls. chapter-settings.js already captured these nodes, and
     its click handlers read the data-* attributes live. */
  function refresh() {
    paintTheme();
    paintFont();

    var extras = document.querySelectorAll('[data-theme-choice="nyctophobia"], [data-theme-choice="ocean"]');
    for (var i = 0; i < extras.length; i++) {
      if (extras[i].parentNode) extras[i].parentNode.removeChild(extras[i]);
    }

    var themeChoices = document.querySelectorAll("[data-theme-choice]");
    for (var j = 0; j < themeChoices.length; j++) {
      var themeKey = themeChoices[j].getAttribute("data-theme-choice");
      if (THEME_LABELS[themeKey]) {
        themeChoices[j].setAttribute("aria-label", THEME_LABELS[themeKey]);
        themeChoices[j].setAttribute("title", THEME_LABELS[themeKey]);
        themeChoices[j].setAttribute("data-label", THEME_LABELS[themeKey]);
      }
    }

    var fontChoices = document.querySelectorAll("[data-font-choice]");
    for (var k = 0; k < fontChoices.length; k++) {
      var fontKey = fontChoices[k].getAttribute("data-font-choice");
      var span = fontChoices[k].querySelector("span");
      if (span && FONT_LABELS[fontKey]) span.textContent = FONT_LABELS[fontKey];
    }
  }

  window.__refreshDesignOverrides = refresh;
  refresh();

  document.addEventListener("themechange", paintTheme);
  document.addEventListener("fontchange", paintFont);

  if (THEMES.indexOf(root.getAttribute("data-theme")) < 0) {
    setTheme(load("theme") || "amber", false);
  } else {
    paintTheme();
  }
  if (FONTS.indexOf(root.getAttribute("data-font")) < 0) {
    setFont(load("font") || "iosevka", false);
  } else {
    paintFont();
  }
})();
