/* Top-bar design toggle: classic (glass) <-> new (solid). The head script
   reads localStorage.design on load, so switching reloads once. */
(function () {
  var root = document.documentElement;
  var btn = document.getElementById("design-btn");
  if (!btn) return;

  function current() {
    return root.getAttribute("data-design") === "new" ? "new" : "classic";
  }

  function paint() {
    var target = current() === "new" ? "classic" : "new";
    var label = target === "new" ? "Switch to new design" : "Switch to classic design";
    btn.setAttribute("aria-label", label);
    btn.setAttribute("title", label);
    btn.setAttribute("aria-pressed", String(current() === "new"));
  }

  btn.addEventListener("click", function () {
    var target = current() === "new" ? "classic" : "new";
    try { localStorage.setItem("design", target); } catch (e) {}

    // Drop the migration ?design=... param so the stored choice wins.
    var url = new URL(window.location.href);
    url.searchParams.delete("design");
    window.location.replace(url.pathname + url.search + url.hash);
  });

  paint();
})();
