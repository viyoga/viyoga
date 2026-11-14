(function () {
  "use strict";

  var GROUPS = [
  {
    "key": "household",
    "title": "Xavier & His Household"
  },
  {
    "key": "drakenfell",
    "title": "Drakenfell & the Imperial Family"
  },
  {
    "key": "faculty",
    "title": "Imperial Academy Faculty"
  },
  {
    "key": "students",
    "title": "Academy Students & Nobility"
  },
  {
    "key": "nonhuman",
    "title": "Non-Human Students & Allies"
  },
  {
    "key": "forest",
    "title": "Red Forest & the Bloodmoor"
  },
  {
    "key": "frostborn",
    "title": "The Frostborn Faction"
  },
  {
    "key": "antagonists",
    "title": "Caldris, Demons & Rivals"
  },
  {
    "key": "legends",
    "title": "Founders, Gods & Legends"
  },
  {
    "key": "creatures",
    "title": "Bound Beasts & Sentient Weapons"
  }
];

  var DATA = [
  {
    "n": "Xavier Drakenfell",
    "aka": "Young Master; heir of Drakenfell; Rank 2 freshman",
    "g": "household",
    "role": "Protagonist; heir to the Drakenfell dukedom",
    "rel": "Reincarnated mana prodigy and Emberfell freshman. Lover of Elena, Fiona, Melli, Arabelle, Nyxara, Lilith, Rosalie, Felicia, Clara and Kaya; betrothed to Cherie and later inducted into the Frostborn faction.",
    "s": "alive"
  },
  {
    "n": "Elena Goldsworth",
    "aka": "Overall rank 1; Miss Rank 1",
    "g": "household",
    "role": "Freshman; merchant heiress",
    "rel": "Xavier's childhood friend, first love and treasure-hunt partner. Daughter of the empire's wealthiest merchant; keeper of the Founder's diary and a core member of his inner circle.",
    "s": "alive"
  },
  {
    "n": "Fiona Wildfang",
    "aka": "Fiona; young master's maid; vixen",
    "g": "household",
    "role": "Drakenfell maid; wolfkin",
    "rel": "Wolfkin servant chosen by Xavier's mother and sent to the academy. Devoted to Xavier, close to Benny and Clara, and accepts his other lovers.",
    "s": "alive"
  },
  {
    "n": "Melli Mariselle",
    "aka": "Melli; the slime girl; rank 34",
    "g": "household",
    "role": "Gelkin student; enchantment prodigy",
    "rel": "Translucent blue Gelkin from Dawncrest. Xavier's first academy friend and later lover; helps decode the pendant-compass and shares him openly with Elena.",
    "s": "alive"
  },
  {
    "n": "Arabelle Holstein",
    "aka": "Senior Arabelle; rank 52",
    "g": "household",
    "role": "Silverkeep senior; bovinekin",
    "rel": "Horned bovinekin noble and Xavier's lover. A fierce sparring partner related to Tyson Angus, initially driven into heat by Xavier's pheromones.",
    "s": "alive"
  },
  {
    "n": "Akron Drakenfell",
    "aka": "Duke Akron Drakenfell; Lord Drakenfell",
    "g": "drakenfell",
    "role": "Duke of Drakenfell; Xavier's father",
    "rel": "Reigning duke and a close friend of Milfias. He arranges Xavier's betrothal to Princess Cherie and expects absolute obedience from his heir.",
    "s": "alive"
  },
  {
    "n": "The Duchess Drakenfell",
    "aka": "Lady Duchess",
    "g": "drakenfell",
    "role": "Xavier's mother",
    "rel": "Unnamed duchess who studied Xavier's arousal triggers and selected Fiona to serve him. She accepted Fiona into the household after the wolfkin's parents died.",
    "s": "alive"
  },
  {
    "n": "Cherie Evander",
    "aka": "Lady Cherie; Imperial Princess",
    "g": "drakenfell",
    "role": "Imperial princess; runic-formation researcher",
    "rel": "Xavier's arranged fiancée and a research-focused princess. She corresponds with Xavier and represents the political expectations of the imperial court.",
    "s": "alive"
  },
  {
    "n": "Samuel Evander",
    "aka": "Sixth Prince; fifth-year rank 1",
    "g": "drakenfell",
    "role": "Imperial prince; Frostborn faction member",
    "rel": "Ninth child of the emperor and a top fifth-year. Outwardly cordial to Xavier but wary of the Drakenfell family's growing power.",
    "s": "alive"
  },
  {
    "n": "Clair Drakenclaw",
    "aka": "Clair of House Drakenclaw; fifth-year rank 2",
    "g": "drakenfell",
    "role": "Drakenclaw heir; academy senior",
    "rel": "Xavier's cousin from one of Drakenfell's three vassal houses. Militaristic and formal toward the main house in public, blunt and teasing in private.",
    "s": "alive"
  },
  {
    "n": "Jean Woodburn",
    "aka": "Professor Woodburn; Professor Jean",
    "g": "faculty",
    "role": "Diplomacy professor",
    "rel": "Lilith's husband and a senior faculty member. Impotent and sexually frustrated, he eventually agrees to divorce Lilith and proctors several academy exams.",
    "s": "alive"
  },
  {
    "n": "Lilith Woodburn",
    "aka": "Professor Lilith; Level 6 mage",
    "g": "faculty",
    "role": "Mana-control professor",
    "rel": "Caramel-skinned professor trapped in a sexless marriage with Jean. She becomes Xavier's lover and serves as his tether into the sword realm.",
    "s": "alive"
  },
  {
    "n": "Nyxara Slythaine",
    "aka": "Professor Nyxara; Head of Alchemical Research",
    "g": "faculty",
    "role": "Lamia alchemist; professor",
    "rel": "Older lamia with a human lower half who desperately wants children. She becomes Xavier's lover and helps him create a perfect-body potion and elemental sword.",
    "s": "alive"
  },
  {
    "n": "Grushka Redrock",
    "aka": "Professor Grushka",
    "g": "faculty",
    "role": "Orc enchantments professor",
    "rel": "Firm orc instructor whose birthmarks preserve her sanity and intelligence. A demon-tainted jade briefly drives her insane; afterward she becomes Xavier's woman and a Frostborn informant.",
    "s": "alive"
  },
  {
    "n": "Freya Ashgrove",
    "aka": "Professor Freya; Group 3 leader",
    "g": "faculty",
    "role": "Wolfkin beastmaster; professor",
    "rel": "Silver-haired, scarred wolfkin in her mid-fifties. She leads Xavier's Red Forest expedition, protects her students, and kills the demon Tharwok with Hollowmaw.",
    "s": "alive"
  },
  {
    "n": "Draven",
    "aka": "Professor Draven",
    "g": "faculty",
    "role": "Conjuration professor; Group 2 leader",
    "rel": "Upbeat instructor of magical-beast summoning. He runs the token hunt, leads Group 2 in the Red Forest, and uses Milfias's teleport scroll to evacuate students.",
    "s": "alive"
  },
  {
    "n": "Peter Alhound",
    "aka": "Professor Alhound; Instructor Alhound",
    "g": "faculty",
    "role": "Advanced swordsmanship instructor",
    "rel": "Human swordmaster who conducted Xavier's entrance exam and later proctors the advanced swordsmanship and aura exams.",
    "s": "alive"
  },
  {
    "n": "Meisner",
    "aka": "Professor Meisner",
    "g": "faculty",
    "role": "Practical Endurance professor",
    "rel": "Instructor responsible for physical examinations, including the 100-metre sprint during the first-year exams.",
    "s": "alive"
  },
  {
    "n": "Rosalie Hayes",
    "aka": "Miss Rosalie; head gardener; Daddy",
    "g": "faculty",
    "role": "Head gardener of Emberfell",
    "rel": "Academy-raised gardener in her mid-thirties. She lets Xavier train in a private garden clearing and later becomes his lover.",
    "s": "alive"
  },
  {
    "n": "David",
    "aka": "Rank 5 freshman; Silverkeep captain",
    "g": "students",
    "role": "Silverkeep freshman; Orbies captain",
    "rel": "Xavier's friendly rival and a capable team leader during the Red Forest expedition. He respects Xavier's strength and fights alongside Allen.",
    "s": "alive"
  },
  {
    "n": "Allen Steelvein",
    "aka": "Allen of Steelvein County",
    "g": "students",
    "role": "Emberfell freshman; Xavier's friend",
    "rel": "Good-natured minor noble and recurring expedition partner. He is frequently rescued by Xavier and becomes Benny's boyfriend.",
    "s": "alive"
  },
  {
    "n": "Benny",
    "aka": "",
    "g": "students",
    "role": "Emberfell freshman",
    "rel": "Fiona's close friend. Injured by a goblin arrow in the Red Forest, saved by Xavier, and later begins a romance with Allen.",
    "s": "alive"
  },
  {
    "n": "Henry Sterling",
    "aka": "Rank 38 freshman",
    "g": "students",
    "role": "Sterling baron heir",
    "rel": "Pragmatic noble freshman in Xavier's Red Forest group. He is knowledgeable about academy customs and keeps a level head under pressure.",
    "s": "alive"
  },
  {
    "n": "Tyson Angus",
    "aka": "Senior Tyson; Emberfell house head",
    "g": "students",
    "role": "Fifth-year top ranker; bovinekin",
    "rel": "Bull-horned northern noble and Emberfell house head. Related to Arabelle, he supports Xavier and supplies his expedition gear.",
    "s": "alive"
  },
  {
    "n": "Felicia Velaria",
    "aka": "Felicia; Nyan",
    "g": "nonhuman",
    "role": "Cat beastkin; Thornveil student",
    "rel": "Feisty violet-haired catgirl who fights Xavier over a token and kicks him before warming to him. She later becomes one of his lovers.",
    "s": "alive"
  },
  {
    "n": "Clara Sinns",
    "aka": "Assistant librarian",
    "g": "nonhuman",
    "role": "Third-year student; latent succubus",
    "rel": "Fiona's friend and an assistant librarian. Xavier saves her from enchanted vines; intimacy awakens her succubus traits, which they keep secret.",
    "s": "alive"
  },
  {
    "n": "Kiki Frezelbell",
    "aka": "Kiki",
    "g": "nonhuman",
    "role": "Goblin fourth-year student",
    "rel": "Friendly, short-statured goblin girl in the advanced mana-control class. Xavier coaches her through precision exercises and she becomes flustered around him.",
    "s": "alive"
  },
  {
    "n": "Sylvia Zelrath",
    "aka": "Rank 1 of the fourth years; blood-haired ghost",
    "g": "nonhuman",
    "role": "Elf senior; Church faction",
    "rel": "Powerful red-haired elf with a giant hawk. She initially attacks Xavier and Allen at her lake, then becomes a wary ally who explains the academy's three factions.",
    "s": "alive"
  },
  {
    "n": "Rora Bloodmoor",
    "aka": "126th Chief of the Bloodmoor",
    "g": "forest",
    "role": "Bloodmoor tribal chief",
    "rel": "Stern, muscular Red Forest chief and Kaya's father. He permits the academy group to camp after receiving offerings of meat and hides.",
    "s": "alive"
  },
  {
    "n": "Kaya Bloodmoor",
    "aka": "Daughter of the Bloodmoor chief; future chief",
    "g": "forest",
    "role": "Bloodmoor warrior; tribal heir",
    "rel": "Dark-skinned warrior who hunts rather than is hunted. She fights a basilisk beside Xavier during her coming-of-age ceremony and becomes his lover for a night.",
    "s": "alive"
  },
  {
    "n": "Milfias Frostborn",
    "aka": "Dean; Imperial Archmage; Her Eminence",
    "g": "frostborn",
    "role": "Dean of the Academy; Frostborn leader",
    "rel": "Seventh-level archmage with absolute authority inside the academy. A close friend of Akron Drakenfell, she becomes Xavier's patron and lover and leads the anti-demon Frostborn faction.",
    "s": "alive"
  },
  {
    "n": "Adrian Solmire",
    "aka": "Head of the Academic Department",
    "g": "frostborn",
    "role": "Professor; Frostborn administrator",
    "rel": "Green-haired, sharp-tongued academic head. He defends Xavier's inclusion in the faction and is assigned to the cathedral guard rotation.",
    "s": "alive"
  },
  {
    "n": "Charles Bellmoore",
    "aka": "Fourth-year rank 204",
    "g": "frostborn",
    "role": "Emberfell senior; Frostborn member",
    "rel": "Casual, hospitable upperclassman who hosts the pre-expedition party. He later guards the cathedral with Samuel and competes in the practical exams.",
    "s": "alive"
  },
  {
    "n": "Nerissa Montclair",
    "aka": "Daughter of the Margrave of Montclair; rank 8",
    "g": "frostborn",
    "role": "Third-year noble; Frostborn member",
    "rel": "Blue-haired, doll-like margrave's daughter with a perpetually bored expression. She is assigned to guard the cathedral alongside Xavier.",
    "s": "alive"
  },
  {
    "n": "Viktor Varkhas",
    "aka": "Heir to the Varkhas Earldom; rank 12",
    "g": "frostborn",
    "role": "Fourth-year noble; Frostborn member",
    "rel": "Sharp-eyed earl's heir who is blunt and dismissive of Samuel's sentimentality. He joins Adrian on the cathedral guard rotation.",
    "s": "alive"
  },
  {
    "n": "The High Priestess",
    "aka": "Leader of the Church faction",
    "g": "frostborn",
    "role": "Head of the academy cathedral",
    "rel": "Unnamed high priestess who leads the Church faction allied with Milfias. Her cathedral becomes the suspected target of Caldris spies.",
    "s": "alive"
  },
  {
    "n": "Orren Caldris",
    "aka": "Vice Dean Orren Caldris; Professor Orren",
    "g": "antagonists",
    "role": "Vice Dean; Caldris faction leader",
    "rel": "Sixth-level mage and leader of the anti-Milfias faction. He is suspected of demonic ties and of hunting the Harvester's Signet and the academy's hidden treasures.",
    "s": "alive"
  },
  {
    "n": "Tharwok",
    "aka": "",
    "g": "antagonists",
    "role": "Demon commander",
    "rel": "Blood-absorbing demon who leads survivors through the Red Forest and carries orders to seek the Harvester's Signet. Freya's Hollowmaw kills him before other students see.",
    "s": "dead"
  },
  {
    "n": "Jane Evander",
    "aka": "First Emperor; the Founder",
    "g": "legends",
    "role": "Founder of the Evander Empire",
    "rel": "Unified the continent, helped seal the Demon King and hid seven sacred treasures in the academy. She is Xavier's maternal ancestor and author of the Founder's diary.",
    "s": "dead"
  },
  {
    "n": "Michael Giowald",
    "aka": "The Messiah of the North",
    "g": "legends",
    "role": "Ancient hero; original Axis Bracelet owner",
    "rel": "One of the seven heroes in Jane Evander's party. He died in the Great Demonic War after leaving the Axis Bracelet and its treasury to a worthy successor.",
    "s": "dead"
  },
  {
    "n": "Goddess Ovaliss",
    "aka": "Goddess of pleasure",
    "g": "legends",
    "role": "Deity of the academy cathedral",
    "rel": "Primary goddess worshipped at the Imperial Academy's cathedral. Her cult is tied to the Church faction and the cathedral's hidden secrets.",
    "s": "divine"
  },
  {
    "n": "Goddess Anora",
    "aka": "Goddess of death",
    "g": "legends",
    "role": "Death goddess",
    "rel": "One of the seven goddesses who blessed the founding heroes. Sudden demand for books about her suggests the Caldris faction is investigating the cathedral.",
    "s": "divine"
  },
  {
    "n": "Miss Incinerator",
    "aka": "The black blade; ego sword",
    "g": "creatures",
    "role": "Sentient fire-elemental sword",
    "rel": "Sharp-tongued female sword spirit bound to Xavier. She teaches him the Supernova Sword Form, calls him Owner, and is both weapon and lover.",
    "s": "alive"
  },
  {
    "n": "Zuzu",
    "aka": "",
    "g": "creatures",
    "role": "Xavier's contracted lightning beast",
    "rel": "Small white-and-gold familiar with sky-blue eyes and a long tail. Xavier borrows her lightning for speed, strength and enhanced vision.",
    "s": "alive"
  },
  {
    "n": "Hadeon",
    "aka": "Cerberus; king of the hellhounds",
    "g": "creatures",
    "role": "Ancient three-headed hellhound",
    "rel": "Ten-thousand-year-old guardian bound by Jane Evander to protect the Axis Bracelet. Xavier defeats and frees him; Hadeon swears a blood contract and becomes his bound beast.",
    "s": "alive"
  },
  {
    "n": "Hollowmaw",
    "aka": "Freya's contracted beast",
    "g": "creatures",
    "role": "Behemoth sandworm",
    "rel": "Massive sandworm-like beast with hundreds of teeth, contracted to Freya Ashgrove. It devours the demon Tharwok during the Red Forest expedition.",
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
