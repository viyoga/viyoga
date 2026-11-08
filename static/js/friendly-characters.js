(function () {
  "use strict";

  var GROUPS = [
    { key: "family", title: "Shiwoo's Immediate Family" },
    { key: "relatives", title: "Aunts, Cousins & Extended Family" },
    { key: "friends", title: "Family Friends" },
    { key: "academy", title: "Academy Friends & Classmates" },
    { key: "staff", title: "Academy Teachers" },
    { key: "tattoo", title: "The Tattoo-Shop Circle" }
  ];

  var DATA = [
    {
      "n": "Yoo Shiwoo",
      "aka": "Shiwoo; Si-woo; Siu; Oppa",
      "g": "family",
      "role": "Only son; protagonist",
      "rel": "Middle-academy student and the household's only son. The story follows his increasingly tangled relationships with his mother, sisters, aunts, cousin, and the people around them.",
      "s": "alive"
    },
    {
      "n": "Na Seonmi",
      "aka": "Mom; Sunmi; Seonmi-eonni; Na Seonmi",
      "g": "family",
      "role": "Matriarch; Shiwoo's mother",
      "rel": "Widow of Yu Jinseong and the household's full-time mother. Her calm, nagging surface hides long-held secrets about Dad, Sejin, Gyuri, and the family's contracts.",
      "s": "alive"
    },
    {
      "n": "Yu Jinseong",
      "aka": "Dad; Shiwoo's father",
      "g": "family",
      "role": "Shiwoo's late father",
      "rel": "Died before the story begins. His affairs, rental contracts, and secret will set the family's past, inheritance plot, and the central meeting in motion.",
      "s": "dead"
    },
    {
      "n": "Sejin",
      "aka": "Se-jin; Sejin-nuuna; Nuna",
      "g": "family",
      "role": "Eldest sister; university student",
      "rel": "The eldest sibling, living away from home. She is Sae-a's mother, and her history with Dad is one of the family's earliest and darkest secrets.",
      "s": "alive"
    },
    {
      "n": "Sehee",
      "aka": "Se-hee; Sehee-nuna; Nuna; Sehee-nim",
      "g": "family",
      "role": "Second sister; high-academy student",
      "rel": "Shiwoo's sharp-tongued second sister and a former track-and-field prospect. She quit sports after her body changed and is closest to Sinbi's friend group.",
      "s": "alive"
    },
    {
      "n": "Seyoung",
      "aka": "Se-young; Seyoung-i; Seyoung-ie; Seyoung-ah",
      "g": "family",
      "role": "Youngest sister; elementary-academy student",
      "rel": "The cheerful, clingy youngest sibling. After Father died she began sleeping beside Mom, and she remains the family's most protected member.",
      "s": "alive"
    },
    {
      "n": "Seonju",
      "aka": "Sun-ju; Sunju; Seonju-imo; Aunt Seonju; Aunt Sun-ju",
      "g": "relatives",
      "role": "Seonmi's younger sister; Sua's mother",
      "rel": "A single mother and one of Seonmi's oldest confidantes. She visits the house often with Sua and later explains much of the family's past.",
      "s": "alive"
    },
    {
      "n": "Sua",
      "aka": "Su-a; Su-ah; Sua",
      "g": "relatives",
      "role": "Seonju's daughter; Seyoung's cousin",
      "rel": "Same age as Seyoung and a frequent companion. Quiet and reserved on the surface, but more mischievous and observant than she first appears.",
      "s": "alive"
    },
    {
      "n": "Yoo Sae-a",
      "aka": "Sae-a; Sejin's daughter",
      "g": "relatives",
      "role": "Sejin's daughter",
      "rel": "Sejin's daughter, named in Dad's will and the inheritance contract before birth. Her name is also given to the family's white puppy, so context decides which Sae-a is meant.",
      "s": "alive"
    },
    {
      "n": "Sae-a (puppy)",
      "aka": "Sae-a; the puppy; white puppy",
      "g": "relatives",
      "role": "Family puppy",
      "rel": "A female white puppy adopted from Seonju's house and named after Sejin's daughter. She lives with the family and appears throughout the later household scenes.",
      "s": "alive"
    },
    {
      "n": "Yu Yena",
      "aka": "Yoo Ye-na; Yena Teacher; Yena-seonsaengnim; Gomo",
      "g": "relatives",
      "role": "Magic-academy director; Shiwoo's paternal aunt",
      "rel": "Seyoung and Sua's magic teacher and the academy's head teacher. She is later revealed to be Dad's younger sister, making her Shiwoo's aunt; her legal marriage to Shiwoo's grandfather is another late reveal.",
      "s": "alive"
    },
    {
      "n": "Gyuri",
      "aka": "Gyu-ri; Gyuri Ajumma; Auntie Gyuri",
      "g": "friends",
      "role": "Seonmi's best friend; Cheoljin's mother",
      "rel": "A gentle, soft-spoken beauty and one of Seonmi's closest friends. Her household is tied to the early slave-contract mystery and Dad's past.",
      "s": "alive"
    },
    {
      "n": "Cheoljin",
      "aka": "Chul-jin; Cheoljin-i",
      "g": "friends",
      "role": "Shiwoo's best friend; Gyuri's son",
      "rel": "Shiwoo's same-class friend, a photographer and gossip with a meddling streak. He digs into the family's secrets and later sides with Juni's group and Yena's schemes.",
      "s": "alive"
    },
    {
      "n": "Sinbi",
      "aka": "Shin-bi; Bi; Sinbi Nuna",
      "g": "academy",
      "role": "Sehee's best friend; Seulgi's older sister",
      "rel": "Sehee's closest friend and former track teammate. Mysterious and exotic-looking, she is part of the five-girl friend group and becomes Shiwoo's blind-date partner.",
      "s": "alive"
    },
    {
      "n": "Shin Seulgi",
      "aka": "Seul-gi; Shin Seulgi; Seulgi",
      "g": "academy",
      "role": "Sinbi's younger sister; academy student",
      "rel": "Introduced as the 'beautiful pervert' and Sinbi's younger sister. She becomes a recurring academy character in the later school arc.",
      "s": "alive"
    },
    {
      "n": "Yoon Sora",
      "aka": "Sora; Sora Nuna",
      "g": "academy",
      "role": "Sehee's friend",
      "rel": "One of Sehee's five close friends. She is paired with Seongguk at the group gatherings and later appears in the friendship-tattoo thread.",
      "s": "alive"
    },
    {
      "n": "Kang Semi",
      "aka": "Semi; Semi Nuna",
      "g": "academy",
      "role": "Sehee's friend",
      "rel": "Part of Sehee's close friend group; appears at the park, cafe, and group dates.",
      "s": "alive"
    },
    {
      "n": "Jung Saerom",
      "aka": "Saerom; Sae-rom; Saerom Nuna",
      "g": "academy",
      "role": "Sehee's friend",
      "rel": "Part of Sehee's close friend group; paired with Hyeokjin at the group gatherings.",
      "s": "alive"
    },
    {
      "n": "Juni",
      "aka": "Juni Hyeong",
      "g": "academy",
      "role": "Sehee's blind-date partner; group leader",
      "rel": "The older academy student at the center of the group blind date. He pairs with Sehee, and Cheoljin briefly sides with him against Shiwoo.",
      "s": "alive"
    },
    {
      "n": "Hyeokjin",
      "aka": "Hyeokjin Hyeong",
      "g": "academy",
      "role": "Juni's friend",
      "rel": "Part of Juni's group and paired with Saerom at the group date.",
      "s": "alive"
    },
    {
      "n": "Seongguk",
      "aka": "Seongguk Hyeong",
      "g": "academy",
      "role": "Juni's friend",
      "rel": "Part of Juni's group and paired with Sora at the group date.",
      "s": "alive"
    },
    {
      "n": "Oh Yerin",
      "aka": "Oh Ye-rin; Oh Yerin-seonsaengnim; Ms. Oh Ye-rin",
      "g": "staff",
      "role": "Shiwoo's homeroom teacher",
      "rel": "Shiwoo's homeroom teacher at the intermediate academy. Warm, attentive, and concerned about his absences and his friendship with Cheoljin.",
      "s": "alive"
    },
    {
      "n": "Lee Jina",
      "aka": "Lee Ji-na; Lee Jina-seonsaengnim; Ms. Lee Ji-na",
      "g": "staff",
      "role": "Academy teacher",
      "rel": "A teacher who handles Shiwoo's class during the school arc; she becomes another member of the academy staff drawn into his orbit.",
      "s": "alive"
    },
    {
      "n": "Shin Yuna",
      "aka": "Yuna; Shin Yuna",
      "g": "tattoo",
      "role": "Tattoo artist from Dad's past",
      "rel": "A tattoo artist and former member of Dad's household. She knows the family's hidden history and becomes the gatekeeper of the late-arc tattoo-shop circle.",
      "s": "alive"
    },
    {
      "n": "Kang Haeun",
      "aka": "Haeun; Kang Haeun",
      "g": "tattoo",
      "role": "Tattoo-shop client",
      "rel": "A married mother of two who is drawn into Shin Yuna's tattoo-shop circle in the final arc.",
      "s": "alive"
    }
  ];

  var list = document.getElementById("charList");
  var search = document.getElementById("ftSearch");
  var shownEl = document.getElementById("ftShown");
  var totalEl = document.getElementById("ftTotal");
  var groupsEl = document.getElementById("ftGroups");
  if (!list) return;

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  var STATUS_LABEL = {
    alive: "alive", dead: "dead", divine: "divine", sealed: "sealed",
    asleep: "asleep", unknown: "unknown", captive: "captive", dying: "dying"
  };

  function rowHTML(c) {
    var s = STATUS_LABEL[c.s] || "unknown";
    var mods = " ft-row s-" + s;
    if (s === "dead") mods += " is-dead";
    if (s === "divine") mods += " is-divine";
    var aka = c.aka ? '<p class="ft-aka">' + esc(c.aka) + "</p>" : "";
    return (
      '<article class="' + mods.trim() + '" data-name="' + esc(c.n) +
      '" data-aka="' + esc(c.aka) + '" data-role="' + esc(c.role) +
      '" data-rel="' + esc(c.rel) + '" data-group="' + esc(c.g) + '">' +
        '<div class="ft-who">' +
          '<h3 class="ft-name">' + esc(c.n) + "</h3>" + aka +
        "</div>" +
        '<div class="ft-desc">' +
          (c.role ? '<p class="ft-role">' + esc(c.role) + "</p>" : "") +
          '<p class="ft-rel">' + esc(c.rel) + "</p>" +
        "</div>" +
        '<p class="ft-status"><span class="ft-dot s-' + s + '" aria-hidden="true"></span>' + s + "</p>" +
      "</article>"
    );
  }

  var html = "";
  var total = 0;
  GROUPS.forEach(function (g) {
    var members = DATA.filter(function (c) { return c.g === g.key; });
    if (!members.length) return;
    total += members.length;
    html +=
      '<section class="ft-group" data-group="' + esc(g.key) + '">' +
        '<h2>' + esc(g.title) + "</h2>" +
        '<span class="ft-group-line" aria-hidden="true"></span>' +
        '<span class="ft-group-count">' + members.length + "</span>" +
      "</section>" +
      '<div class="ft-group-rows" data-group-rows="' + esc(g.key) + '">' +
        members.map(rowHTML).join("") +
      "</div>" +
      '<p class="ft-empty" data-group-empty="' + esc(g.key) + '">No one in this group matches.</p>';
  });
  html += '<p class="ft-empty" id="ftNoMatch">No character matches that search.</p>';
  list.innerHTML = html;

  if (totalEl) totalEl.textContent = String(total);
  if (groupsEl) groupsEl.textContent = String(GROUPS.filter(function (g) {
    return DATA.some(function (c) { return c.g === g.key; });
  }).length);
  if (shownEl) shownEl.textContent = String(total);
  var ofEl = document.getElementById("ftOf");
  if (ofEl) ofEl.textContent = String(total);

  var rows = Array.prototype.slice.call(list.querySelectorAll(".ft-row"));
  var noMatch = document.getElementById("ftNoMatch");
  var clearBtn = document.getElementById("ftClear");
  var groupTitles = {};
  GROUPS.forEach(function (g) { groupTitles[g.key] = g.title; });

  function fold(s) {
    return String(s == null ? "" : s)
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  rows.forEach(function (row) {
    row._hay = fold([
      row.getAttribute("data-name"),
      row.getAttribute("data-aka"),
      row.getAttribute("data-role"),
      row.getAttribute("data-rel"),
      groupTitles[row.getAttribute("data-group")] || ""
    ].join(" "));
  });

  function applyFilter() {
    var raw = search ? search.value : "";
    var q = fold(raw).trim();
    var tokens = q ? q.split(/\s+/) : [];
    var shown = 0;

    rows.forEach(function (row) {
      var hit = true;
      for (var i = 0; i < tokens.length; i++) {
        if (row._hay.indexOf(tokens[i]) === -1) { hit = false; break; }
      }
      row.style.display = hit ? "" : "none";
      if (hit) shown++;
    });

    if (shownEl) shownEl.textContent = String(shown);
    if (noMatch) noMatch.style.display = shown ? "none" : "block";
    if (clearBtn) clearBtn.hidden = !raw.length;
    if (raw.trim()) {
      search.closest(".ft-search").classList.add("is-typing");
    } else {
      search.closest(".ft-search").classList.remove("is-typing");
    }

    Array.prototype.forEach.call(list.querySelectorAll("[data-group-rows]"), function (wrap) {
      var any = Array.prototype.some.call(wrap.children, function (r) {
        return r.style.display !== "none";
      });
      wrap.style.display = any ? "" : "none";
      var key = wrap.getAttribute("data-group-rows");
      var head = list.querySelector('.ft-group[data-group="' + key + '"]');
      if (head) head.style.display = any ? "" : "none";
      var empty = list.querySelector('[data-group-empty="' + key + '"]');
      if (empty) empty.style.display = any ? "none" : "block";
    });
  }

  function clearSearch() {
    if (!search) return;
    search.value = "";
    applyFilter();
    search.focus();
  }

  if (search) {
    search.addEventListener("input", applyFilter);
    search.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { clearSearch(); }
    });
    var form = search.closest("form");
    if (form) form.addEventListener("submit", function (e) { e.preventDefault(); });
  }

  if (clearBtn) clearBtn.addEventListener("click", clearSearch);

  document.addEventListener("keydown", function (e) {
    if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
    var t = e.target;
    var tag = t && t.tagName ? t.tagName.toLowerCase() : "";
    if (tag === "input" || tag === "textarea" || (t && t.isContentEditable)) return;
    e.preventDefault();
    if (search) { search.focus(); search.select(); }
  });
})();
