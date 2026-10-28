/* ─────────────────────────────────────────────────────────────
   Son of the Hero King — Spoilers: Character List
   Plain grouped vertical list. Renders GROUPS + DATA below into
   the page, with a live search filter and counts.
   ───────────────────────────────────────────────────────────── */
(function () {
  "use strict";

  /* ── Groups (display order) ─────────────────────────────── */
  var GROUPS = [
    { key: "luxuria", title: "The House of Luxuria" },
    { key: "dragon", title: "The Dragon Line" },
    { key: "highland", title: "House Highland" },
    { key: "milaris", title: "Milaris & Travers" },
    { key: "gorfard", title: "House Gorfard" },
    { key: "gustav", title: "House Gustav" },
    { key: "church", title: "The Church of Castitas" },
    { key: "witches", title: "The Witches of Walpurgisnacht" },
    { key: "wratharis", title: "Wratharis & the Wolf Throne" },
    { key: "pride", title: "The Elves of Southern Pride" },
    { key: "phoenix", title: "The Phoenix Court" },
    { key: "wings", title: "The Wings of Freedom" },
    { key: "chaos", title: "Tartarus, Chaos & the Titans" },
    { key: "fae", title: "The Fae Courts" },
    { key: "envilya", title: "Envilya & the Night Courts" },
    { key: "household", title: "Sol’s Household & Chosen" },
    { key: "divine", title: "Goddesses, Divine Beasts & Legends" },
    { key: "world", title: "The Wider World" }
  ];

  /* ── Characters ─────────────────────────────────────────── */
  /* { n: name, aka: aliases, g: group key, role: short title,
     rel: description, s: status } */
  var DATA = /*__DATA__*/[
 {
  "n": "Jupiter",
  "aka": "Era of Jupiter; Conqueror King; First King",
  "g": "luxuria",
  "role": "Founder-King of Lustburg",
  "rel": "Ancestor of Sol; father of Pluto; an ancient power humanity once rose to break free from, aided by the witches",
  "s": "dead"
 },
 {
  "n": "Pluto",
  "aka": "Pluto the peaceful King",
  "g": "luxuria",
  "role": "Second King",
  "rel": "Son of Jupiter; father of Venus",
  "s": "dead"
 },
 {
  "n": "Venus",
  "aka": "",
  "g": "luxuria",
  "role": "Third ruler",
  "rel": "Daughter of Pluto and third ruler of Lustburg, the infamous bloodthirsty queen Sol cites as a negative example — he refuses to rule through such terror",
  "s": "dead"
 },
 {
  "n": "Mercury",
  "aka": "",
  "g": "luxuria",
  "role": "Fourth ruler",
  "rel": "Dynastic link only; no family scene",
  "s": "dead"
 },
 {
  "n": "Saturn",
  "aka": "",
  "g": "luxuria",
  "role": "Fifth ruler",
  "rel": "Dynastic link only; no family scene",
  "s": "dead"
 },
 {
  "n": "Uranus Luxuria",
  "aka": "Tyrant King; Uranus",
  "g": "luxuria",
  "role": "Sixth King",
  "rel": "Sol’s great-grandfather; Neptune’s father",
  "s": "dead"
 },
 {
  "n": "Neptune Luxuria",
  "aka": "Puppet King",
  "g": "luxuria",
  "role": "Seventh King; experimenter",
  "rel": "Sol’s grandfather; the Puppet King who fathered Mars and Lilith, forced Lilith into marriage, and is connected to Lilin’s creation",
  "s": "dead"
 },
 {
  "n": "Mars Luxuria",
  "aka": "King of Lustburg; Hero King; Mars Lustburg; Mars",
  "g": "luxuria",
  "role": "Eighth King",
  "rel": "Sol’s father; the Hero King who sacrificed himself to finish sealing Echidna after Ibuki’s betrayal; Camelia’s old friend",
  "s": "dead"
 },
 {
  "n": "Blaze Dragona",
  "aka": "Chaos Dragon; Blaze Dragona Luxuria; Blaze Dragon; Queen of Lustburg",
  "g": "luxuria",
  "role": "Dragon Queen; Tiamat’s daughter",
  "rel": "Sol’s mother; dragon daughter of Tiamat; died following Mars, entrusting baby Sol to Camelia and her core and horns to Theresa",
  "s": "dead"
 },
 {
  "n": "Sol Dragona Luxuria",
  "aka": "Sol Dragon Luxuria; Prince of Lustburg; honored guest; Sol; young dragon",
  "g": "luxuria",
  "role": "Crown Prince of Lustburg, 15",
  "rel": "Crown prince of Lustburg, reincarnated university student and dragon hybrid with limitless stamina; son of Mars and Blaze, wielder of the mirror dimension, his life magically linked to Camelia’s. The elven doomsday oracle names him the key to salvation, and Goddess Luxuria’s second trial is to earn dragonkind’s recognition.",
  "s": "alive"
 },
 {
  "n": "Lilith Luxuria",
  "aka": "Tyrfing; Lilith; Queen of Lustburg; Musashi (new Avatar); Tyrfing (old Avatar)",
  "g": "luxuria",
  "role": "Ruling Queen Regent of Lustburg",
  "rel": "Mars’s sister and Sol’s aunt; a homunculus created by Neptune. Mother of Lilin — a clone made by experiment, not born of her — whom she raised cruelly to make her strong; reconciling with her as her own death approaches, within weeks.",
  "s": "dying"
 },
 {
  "n": "Lilin Luxuria",
  "aka": "princess of Lustburg; Lilin; Ilaha; homunculus clone; Dream Demon",
  "g": "luxuria",
  "role": "Princess of Lustburg",
  "rel": "Lilith’s “daughter”, a clone made by experiment and likely Mars’s biological daughter — Sol’s cousin, half-sister, or aunt by the text’s own uncertainty. Young duke with awakening nightmare/succubus blood, seeking strength.",
  "s": "alive"
 },
 {
  "n": "Tarrik Luxuria",
  "aka": "",
  "g": "luxuria",
  "role": "General of Lustburg",
  "rel": "Kinsman of the royal house; exact link unstated",
  "s": "dead"
 },
 {
  "n": "Tiamat",
  "aka": "dragon of Pride; Divine Beast of Pride; Dragon Empress; Supreme Dragon; old hag",
  "g": "dragon",
  "role": "Divine beast of Pride",
  "rel": "Sol’s grandmother and mother of Blaze; governs the dragons and represents the high elves; a union of one of her grandchildren with an elf produced the first high-elf queen and the thin dragon blood of all high elves",
  "s": "divine"
 },
 {
  "n": "Fafnir",
  "aka": "big bro; Aegis; Golden Dragon",
  "g": "dragon",
  "role": "Dragon king of the moon elves",
  "rel": "Snow dragon; one of the four tribal dragon kings under Tiamat",
  "s": "alive"
 },
 {
  "n": "Kiyohime",
  "aka": "Kiyo; Artemis; warden of Tartarus; Water Dragon King; Water Dragon",
  "g": "dragon",
  "role": "Dragon king of the water elves",
  "rel": "Water dragon; one of the four tribal dragon kings under Tiamat",
  "s": "alive"
 },
 {
  "n": "Apsu",
  "aka": "",
  "g": "dragon",
  "role": "Tiamat’s only love",
  "rel": "Died in the Age of Gods; not named as Blaze’s father",
  "s": "dead"
 },
 {
  "n": "Tyr Highland",
  "aka": "god of war; Duke Tyr; Highland",
  "g": "highland",
  "role": "Duke Highland",
  "rel": "Elder duke, loyal to the kingdom; absent from the war council, asked via Athena to prepare countermeasures for a winter Wratharis attack",
  "s": "alive"
 },
 {
  "n": "Gerald Highland",
  "aka": "Gerard",
  "g": "highland",
  "role": "Ex-general; Sol’s father-figure",
  "rel": "Highland elder and Sol’s beloved father-figure teacher who briefly betrayed the kingdom; exiled to the battlefield escorted by black knights and the Crown’s Shadow after Ambrosia wiped his dangerous memories. Final fate unstated.",
  "s": "unknown"
 },
 {
  "n": "Athena Highland",
  "aka": "Lady Athena; Secretary Athena",
  "g": "highland",
  "role": "Heir of Highland; Sol’s knight",
  "rel": "Heiress of the Highland duchy and gifted knight, Sol’s close friend; stands in for Tyr at the war council",
  "s": "alive"
 },
 {
  "n": "Ares Highland",
  "aka": "Ares Highland; Ares; Ares",
  "g": "highland",
  "role": "Second heir of Highland",
  "rel": "Twin of Athena; grandson of Tyr and Gerald",
  "s": "alive"
 },
 {
  "n": "Aurora",
  "aka": "sleeping beauty; Aurore; Aurora Highland; Dawn; Aurora Castitas",
  "g": "highland",
  "role": "Holy-daughter candidate",
  "rel": "Gerald’s granddaughter; Athena and Ares’s cousin; asleep",
  "s": "asleep"
 },
 {
  "n": "Athena & Ares’s parents",
  "aka": "",
  "g": "highland",
  "role": "The hinge of the house",
  "rel": "Both dead; names unstated; Gerald calls their father ‘my son-in-law’",
  "s": "dead"
 },
 {
  "n": "Arachne Milaris",
  "aka": "Duchess Milaris; Duchess Arachne; Mistress Milaris",
  "g": "milaris",
  "role": "Duchess Milaris",
  "rel": "Seamstress duchess commanding golems, in love with the late Mars; reluctantly ordered to hire tailors for the soldiers’ winter gear",
  "s": "alive"
 },
 {
  "n": "The Milaris niece",
  "aka": "",
  "g": "milaris",
  "role": "Arachne’s successor",
  "rel": "Arachne’s niece; name unstated",
  "s": "alive"
 },
 {
  "n": "Hermes Travers",
  "aka": "Traver; Hermes Traver",
  "g": "milaris",
  "role": "Merchant duke of Travers",
  "rel": "Lustburg merchant duke, an ally only while Sol is strong; rejected his wife’s honey-trap scheme and hosts Sol’s night party",
  "s": "alive"
 },
 {
  "n": "Loki Gorfard",
  "aka": "",
  "g": "gorfard",
  "role": "Duke Gorfard",
  "rel": "Ambitious duke who plotted to kill Sol for power; executed for the conspiracy and hanged publicly alongside Leonard to vent the crowd’s anger",
  "s": "dead"
 },
 {
  "n": "Cerios Gorfard",
  "aka": "",
  "g": "gorfard",
  "role": "Lilith’s husband in name only",
  "rel": "Loki’s brother; publicly Lilin’s father; killed by Neptune",
  "s": "dead"
 },
 {
  "n": "Duchess Gorfard",
  "aka": "Gorfar",
  "g": "gorfard",
  "role": "Loki’s wife",
  "rel": "Leonard’s likely mother; name unstated",
  "s": "unknown"
 },
 {
  "n": "Leonard Gorfard",
  "aka": "",
  "g": "gorfard",
  "role": "Executed heir of Gorfard",
  "rel": "Traitor son of Loki; executed for the plot and publicly hanged at the coliseum executions as a warning to the nobles",
  "s": "dead"
 },
 {
  "n": "The Gorfard cadets",
  "aka": "concubine children",
  "g": "gorfard",
  "role": "Cadet branch",
  "rel": "Loki’s children by maids; no inheritance; conscripted",
  "s": "alive"
 },
 {
  "n": "Alfred",
  "aka": "",
  "g": "gorfard",
  "role": "Leonard’s aged servant",
  "rel": "No kin stated; the Gorfard hand in the ball",
  "s": "unknown"
 },
 {
  "n": "Mongov Gustav",
  "aka": "",
  "g": "gustav",
  "role": "Dwarf magnate",
  "rel": "Theresa’s father",
  "s": "dead"
 },
 {
  "n": "Theresa Gustav",
  "aka": "Lady Theresa; Miss Theresa; Daedalus",
  "g": "gustav",
  "role": "Master smith; Sol’s godmother",
  "rel": "Dwarf master smith of the hero party, old friend of Mars and Blaze, Greed Dike council member who once killed her own brother; forges rune weapons for Sol’s people and a divine weapon from Blaze’s core. Heiress of Sol’s fortune.",
  "s": "alive"
 },
 {
  "n": "Theresa’s brother",
  "aka": "",
  "g": "gustav",
  "role": "Traitor of the Gustav family",
  "rel": "Theresa’s brother; fate unstated",
  "s": "unknown"
 },
 {
  "n": "Camelia Castitas",
  "aka": "Duchess Camelia; Camellia; Saint; regent; Blessed of Castitas",
  "g": "church",
  "role": "Supreme Daughter of Castitas",
  "rel": "Priestess of the church, powerful mind-controlling duchess and Sol’s lover whose life is magically linked to his; admitted hiding her manipulations and is now reconciled with him and maneuvering to lead his women — while hiding the toll the broken ritual barrier takes on her, coughing blood, and resolving to confess it",
  "s": "alive"
 },
 {
  "n": "Iris Industria",
  "aka": "Iris Diligentia",
  "g": "church",
  "role": "Supreme Daughter of Industria",
  "rel": "Supreme Daughter of Sloth and Chloe’s mother; former enemy turned ally of Mars’s group, spared like Pandora",
  "s": "alive"
 },
 {
  "n": "Chloe / Clover Industria",
  "aka": "Clover Industria; Chloe Diligentia",
  "g": "church",
  "role": "Paladin-in-training; Holy Daughter of Industria",
  "rel": "Daughter of Iris; not Sol’s lover but dragged into the women’s meeting",
  "s": "alive"
 },
 {
  "n": "Lily Castitas",
  "aka": "",
  "g": "church",
  "role": "Former Supreme Daughter",
  "rel": "Camelia’s predecessor; no kin stated",
  "s": "unknown"
 },
 {
  "n": "Elsmere Gorfard",
  "aka": "",
  "g": "church",
  "role": "Senior nun of Castitas",
  "rel": "Gorfard by blood; Camelia’s former favourite; exact parentage unstated",
  "s": "unknown"
 },
 {
  "n": "The White Knight",
  "aka": "",
  "g": "church",
  "role": "Paladin; Camelia’s admirer",
  "rel": "No kin stated; tricked into attacking Sol",
  "s": "unknown"
 },
 {
  "n": "Ambrosia",
  "aka": "Thousand Spells Witch; Thousands Spell Witch; Supreme Witch; first Witch; All-knowing witch",
  "g": "witches",
  "role": "Mother of Witches; Witch of Origin",
  "rel": "Demi-god witch dwelling in Medea’s world and adoptive mother of Kali, Medea, Freya and Persephone; her presence fortifies Lustburg. Wiped Gerald’s dangerous memories and may yet train Setsuna.",
  "s": "alive"
 },
 {
  "n": "Medea (Edea)",
  "aka": "Medea West Asmodeus; Edea; Supreme Witch; witch of time; Avatar: Chronos",
  "g": "witches",
  "role": "Witch of Time; Sol’s teacher",
  "rel": "Cardinal witch of the Asmodeus household, Ambrosia’s adopted daughter and Witch of Time; hosts the other witches in her own world. Sol’s beloved teacher, she sheds her meek act to challenge Camelia’s bid to boss the women’s gathering.",
  "s": "alive"
 },
 {
  "n": "Persephone",
  "aka": "Persephone Asmodeus; witch of life; healer; Teacher; South",
  "g": "witches",
  "role": "Witch of Life; healer",
  "rel": "Blunt cardinal witch of Life and Ambrosia’s adopted daughter — one of the world’s strongest women and now Sol’s lover. Reportedly surpassed Freya in his favor and is suspected of asking him for a child; once fought and lost to Fenrir, and her mastery of life and nature helped defeat Queen Satella.",
  "s": "alive"
 },
 {
  "n": "Kali",
  "aka": "Khali; Kali Asmodeus; Witch of Destruction; Kalin; Crimson Witch",
  "g": "witches",
  "role": "Witch of Destruction; youngest cardinal witch",
  "rel": "Ambrosia’s adopted daughter and Sol’s subordinate, of the Asmodeus household; volunteered to escort Lilin if she travels abroad.",
  "s": "alive"
 },
 {
  "n": "Freya",
  "aka": "Freya East Asmodeus; Freya Asmodeus; witch of space; Avatar: Ouranos; East",
  "g": "witches",
  "role": "Witch of Space; cardinal witch",
  "rel": "Ambrosia’s adopted daughter and Sol’s lover, part of the three-witch bloc; teased by Ambrosia about losing to Persephone in Sol’s favor, jealous and shocked that Persephone succeeded where she failed",
  "s": "alive"
 },
 {
  "n": "Setsuna Ira",
  "aka": "little blue wolf; Storm Wolf; Blue; Sestuna; Setsuna the Knight",
  "g": "wratharis",
  "role": "Princess of Wratharis; Storm Wolf",
  "rel": "Sol’s knight and future spouse: a slave princess and sword-user magical being, blue-wolf Storm Wolf of Wratharis and Sol’s lover. Lilin’s friend and rival; to be trained by Lilith and Ambrosia. Camelia’s plan would make her queen once the Wolf King dies",
  "s": "alive"
 },
 {
  "n": "The Wolf Queen",
  "aka": "",
  "g": "wratharis",
  "role": "Setsuna’s mother",
  "rel": "Died with her husband",
  "s": "dead"
 },
 {
  "n": "Lupus Ira",
  "aka": "Tiangou; Tiangou Lupus Ira",
  "g": "wratharis",
  "role": "King of Wratharis; usurper",
  "rel": "Setsuna’s uncle; killed her father; wants her as a consort",
  "s": "alive"
 },
 {
  "n": "Neun",
  "aka": "Mio (born name); Nine; bunny woman; Ayame; Atame",
  "g": "wings",
  "role": "Wings member; Wratharis agent",
  "rel": "Setsuna’s former teacher, not her sister; successfully stole the Holy Sword, keeping the Lustburg mission from total fiasco",
  "s": "alive"
 },
 {
  "n": "Kio",
  "aka": "",
  "g": "wratharis",
  "role": "Servant of the princess",
  "rel": "Used himself as bait; fate unknown",
  "s": "unknown"
 },
 {
  "n": "Kiku",
  "aka": "Kiku Inari Patientia; Inari Kiku Patientia; six-tailed kitsune; Kiku Inari Patienta; Kuki",
  "g": "wratharis",
  "role": "Supreme Daughter of Patientia",
  "rel": "Six-tailed kitsune of Wratharis and direct descendant of Tamamo no Mae; wants the Wolf King dead so Setsuna can reign",
  "s": "alive"
 },
 {
  "n": "Sakura",
  "aka": "",
  "g": "wratharis",
  "role": "Kiku’s heir and future Miko",
  "rel": "No blood link stated",
  "s": "alive"
 },
 {
  "n": "Shuten",
  "aka": "Shuten-Doji; Shouten Douji; Lady Doji",
  "g": "wratharis",
  "role": "Leader of the Oni",
  "rel": "Cunning, Duke-ranked daughter of Ibuki and current Oni clan leader; suspected by Camelia of prompting Kiku’s king-assassination idea",
  "s": "alive"
 },
 {
  "n": "Ibuki-Douji",
  "aka": "Zwei; Zwei (Wings numbering); Two; Ibuki-Doji; Ibuki",
  "g": "wings",
  "role": "Ex-leader of the Oni; Wings captain",
  "rel": "Former Oni clan leader who actually betrayed the alliance and stole the Holy Sword, wrecking Echidna’s seal; a grey-skinned battle junkie, secretly King-ranked, banished by Nihil after questioning her leadership",
  "s": "alive"
 },
 {
  "n": "Sun Wukong",
  "aka": "little monkey; Monkey King; Heaven Equal; Wukong; Uncrowned King",
  "g": "wratharis",
  "role": "Stone Monkey clan leader",
  "rel": "No kin named; beat Fafnir and took his blood",
  "s": "alive"
 },
 {
  "n": "Gabriel",
  "aka": "Queen of the Phoenixes; herald of chastity; divine beast of Chastity; Phoenix Queen",
  "g": "phoenix",
  "role": "Elder phoenix",
  "rel": "Nephtys’s mother; an elder phoenix who comforts her daughter, noting Sol might refuse Isis and calling the girl a miracle",
  "s": "divine"
 },
 {
  "n": "Nephtys",
  "aka": "Nephthys; Nepthys; Neppthys; Nepthphis; Nepthphys",
  "g": "phoenix",
  "role": "Phoenix Queen",
  "rel": "Vermillion-haired Phoenix Queen of the Astral realm, servant of goddess Castitas; devoted mother of Isis, anxious about Sol’s visit as a possible fiancé",
  "s": "alive"
 },
 {
  "n": "Anubis",
  "aka": "Necromancer King; Demon King; Harbinger of Chaos; Rider of the Apocalypse; Horror of the Night",
  "g": "divine",
  "role": "Necromancer King of the Underworld",
  "rel": "First mortal to reach demi-god; rules the Underworld, a domain stolen from the Afterlife; his absence once let the Wings escape with Drei’s soul",
  "s": "divine"
 },
 {
  "n": "Isis",
  "aka": "princess of the dead; Child of Death; Death Phoenix; little phoenix girl; Isis Crow",
  "g": "phoenix",
  "role": "Phoenix–demon princess",
  "rel": "Nephtys’s only daughter, born from love rather than asexual energy-splitting — a singularity between life and death; currently refusing to see her mother",
  "s": "alive"
 },
 {
  "n": "Nihil",
  "aka": "Dhalia Industria; “Dahlia”; Queen of Chaos",
  "g": "wings",
  "role": "Leader of the Wings; fallen angel",
  "rel": "Formerly the first blessed of Industria and one of the first angels; discarded her name to lead the Wings of Freedom rebellion for the Mother Goddess of Chaos; wounded in the Lustburg raid",
  "s": "alive"
 },
 {
  "n": "Drei / Hansel",
  "aka": "Three; Necromancer King; Hansel Darwin; Hansel",
  "g": "wings",
  "role": "Necromancer; body-jumper",
  "rel": "A soul anchored by grudge and held in a phylactery; Lilith’s soul-attack left him fatally wounded — using his avatar would crumble him to dust",
  "s": "dying"
 },
 {
  "n": "Zehn",
  "aka": "Ten; Number Ten",
  "g": "wings",
  "role": "Vampire daywalker",
  "rel": "Vampire daywalker captured by Lustburg defenders during the failed attack on the country",
  "s": "captive"
 },
 {
  "n": "Acht",
  "aka": "Atch (Wings numbering); Eight; Acth",
  "g": "wings",
  "role": "Mechanic and gunsmith",
  "rel": "Wings member with a living physical body that slowly nourishes his soul-wound from Lilith’s attack; recovering, not dying",
  "s": "alive"
 },
 {
  "n": "Eins",
  "aka": "Ein (Wings numbering); One; Hypnos; God of Dreams; Dream",
  "g": "wings",
  "role": "Artificer; King-class",
  "rel": "Wings artificer, King-class; reported Acht’s condition back to Nihil",
  "s": "alive"
 },
 {
  "n": "Funf",
  "aka": "Five",
  "g": "wings",
  "role": "Numbered member",
  "rel": "Rumoured to be Nuwa’s sibling; unconfirmed",
  "s": "alive"
 },
 {
  "n": "Sechs",
  "aka": "Six",
  "g": "wings",
  "role": "Numbered member",
  "rel": "No kin named",
  "s": "alive"
 },
 {
  "n": "Milia",
  "aka": "head maid; master spy; Milia Castitas; Lunaria; cow woman",
  "g": "household",
  "role": "Head maid; Sol’s wet nurse",
  "rel": "Sol’s head maid, lover and trusted aide — a former street urchin and spymaster of the crown’s shadow with a weak shadow-based Devouring. Organized the girls’ goddess-sworn non-aggression contract, keeps the household peace and teaches Nuwa",
  "s": "alive"
 },
 {
  "n": "Eric ‘Bull’",
  "aka": "",
  "g": "household",
  "role": "Milia’s husband",
  "rel": "Cowman; betrayed the experiment; killed by Milia",
  "s": "dead"
 },
 {
  "n": "Nuwa",
  "aka": "Princess of Gluttony; Aergia; Princess of Gluttony Foss",
  "g": "household",
  "role": "Chimera battle maid",
  "rel": "Sol’s shy chimera maid with the innate Devouring ability that converts food to mana; Lilin’s first friend. Being trained as a maid by Milia, distrusts Hermes, and accompanied Sol to the Travers mansion and Theresa’s forge",
  "s": "alive"
 },
 {
  "n": "Clara",
  "aka": "Clara Humilitas; Carla; Administrator of Lustburg; Supreme Secretary",
  "g": "household",
  "role": "Sol’s provisional secretary",
  "rel": "Elf raised her whole life to serve dragons; petitions Sol to become his advisor and is made provisional secretary pending a contract",
  "s": "alive"
 },
 {
  "n": "Ketia",
  "aka": "",
  "g": "household",
  "role": "Crown’s Shadow; maid",
  "rel": "No kin named; guarded Lilin",
  "s": "alive"
 },
 {
  "n": "Berthold",
  "aka": "",
  "g": "household",
  "role": "Crown’s Shadow; bartender",
  "rel": "No kin named; killed, his body used by Drei",
  "s": "dead"
 },
 {
  "n": "Edgar",
  "aka": "",
  "g": "household",
  "role": "Crown’s Shadow; jeweller",
  "rel": "No kin named; one of the Fingers",
  "s": "alive"
 },
 {
  "n": "Aria",
  "aka": "",
  "g": "household",
  "role": "Crown’s Shadow; madam",
  "rel": "Crown’s Shadow madam who runs Lustburg’s red-light district, where many succubi work; told Sol about succubus ranks as potential trainers for Lilin",
  "s": "alive"
 },
 {
  "n": "Alpha, Beta & Omega",
  "aka": "",
  "g": "household",
  "role": "Lilith’s three eldest maids",
  "rel": "No kin named; Wratharis veterans",
  "s": "alive"
 },
 {
  "n": "Anastasia Invidia",
  "aka": "Princess Anastasia",
  "g": "envilya",
  "role": "Princess of Envilya",
  "rel": "Lilin’s friend from her elven adventure, living in politically unstable Envilya; the succubus trainer Lilin wanted to visit",
  "s": "alive"
 },
 {
  "n": "Eridina",
  "aka": "",
  "g": "household",
  "role": "King of Greed Dike",
  "rel": "No kin named; wants a channel to Theresa",
  "s": "alive"
 },
 {
  "n": "Castitas",
  "aka": "Chastity; Goddess of Chastity; Goddess Castitas",
  "g": "divine",
  "role": "Goddess of chastity",
  "rel": "Camelia’s patron; one of fourteen sisters",
  "s": "divine"
 },
 {
  "n": "Luxuria",
  "aka": "Goddess of Lust; Goddess Luxuria",
  "g": "divine",
  "role": "Goddess of lust",
  "rel": "Goddess of Lust who honed Sol for years — possibly grooming a foreign soul to reach demi-god or beyond. Spared Camelia and bound her life to Sol’s in exchange for three tasks; summons Sol to assign his second trial, to earn dragonkind’s recognition",
  "s": "divine"
 },
 {
  "n": "Ira",
  "aka": "Goddess of Wrath",
  "g": "divine",
  "role": "Goddess of wrath",
  "rel": "Lupus’s patron; one of fourteen sisters",
  "s": "divine"
 },
 {
  "n": "Gula",
  "aka": "Goddess of Gluttony; Goddess Gula; Gluttony",
  "g": "divine",
  "role": "Goddess of gluttony",
  "rel": "Echidna’s patron; one of fourteen sisters",
  "s": "divine"
 },
 {
  "n": "Industria",
  "aka": "goddess of Diligence; Diligentia",
  "g": "divine",
  "role": "Goddess of diligence",
  "rel": "Nihil’s former patron; one of fourteen sisters",
  "s": "divine"
 },
 {
  "n": "Patientia",
  "aka": "Patienta",
  "g": "divine",
  "role": "Goddess of patience",
  "rel": "Kiku’s patron; one of fourteen sisters",
  "s": "divine"
 },
 {
  "n": "Asmodeus",
  "aka": "Divine Beast of Lust; Amsodeus; Grandpa Asmodeus; Divine Beast; Snake of Lust",
  "g": "divine",
  "role": "Deity of the witches’ household",
  "rel": "The deity who laid the curse on the witches of the Asmodeus household; promised not to interfere in their handling of it, so Sol must convince him to change their fate",
  "s": "divine"
 },
 {
  "n": "Echidna",
  "aka": "Thousand Monsters; Queen of Chimera; Echidna Gula; First Blessed; first Chimera",
  "g": "divine",
  "role": "Demon Queen of Gluttony Foss",
  "rel": "The vast demon queen of Gluttony Foss whose sealing ritual Ibuki wrecked by stealing the Holy Sword, costing Mars and Blaze their lives; Blaze sacrificed herself against her. Still under seal, her own outcome unstated.",
  "s": "sealed"
 },
 {
  "n": "The Nightmare Queen",
  "aka": "Succubus Queen; Nightmare Queen",
  "g": "envilya",
  "role": "Ancient succubus queen of Envilya",
  "rel": "The ancient, strongest queen of Envilya, a Nightmare-rank succubus whose blood Lilin inherited and is now awakening",
  "s": "dead"
 },
 {
  "n": "Mother Goddess of Chaos",
  "aka": "Chaos Goddess; Goddess of Chaos",
  "g": "divine",
  "role": "The goddess above the fourteen",
  "rel": "Mother of the goddesses; the Wings want her unsealed",
  "s": "sealed"
 },
 {
  "n": "Satella Superbia",
  "aka": "Satella; Queen of the elves; Queen of Southern Pride; Elf Queen; Elven Queen",
  "g": "pride",
  "role": "Queen of Southern Pride",
  "rel": "Fourth and most talented elven queen, centuries older than Jasmine, her friend and tutor; her past loss to the witches of time and life stalled her demi-god ascent. Swears the elves will take revenge on Dracula.",
  "s": "alive"
 },
 {
  "n": "Jasmine Humilitas",
  "aka": "Saintess of Southern Pride",
  "g": "pride",
  "role": "High Priestess of Southern Pride",
  "rel": "Brown-skinned, tomboyish elven high priestess; Satella’s friend and pupil. Glad that a dark elf of her tribe has grown close to Sol.",
  "s": "alive"
 },
 {
  "n": "Ismelya",
  "aka": "",
  "g": "pride",
  "role": "Elf mother of Sol’s advisor",
  "rel": "Mother of the bright but martially unskilled dark-elf daughter who landed the job of Sol’s advisor.",
  "s": "unknown"
 },
 {
  "n": "Sol’s dark-elf advisor",
  "aka": "",
  "g": "pride",
  "role": "Sol’s advisor",
  "rel": "Orphaned dark elf of Jasmine’s tribe who became Sol’s advisor and is favored by the prince.",
  "s": "alive"
 },
 {
  "n": "Yggdrasil",
  "aka": "Humilitas; Yggi; divine beast of Modesty; goddess of Humility; World Tree",
  "g": "divine",
  "role": "Divine beast of the elves",
  "rel": "Divine beast whose seed grew into the World Tree, the cloud-piercing tree housing the elven sanctuary; incarnated in every elf tribe, providing elves limitless resources.",
  "s": "divine"
 },
 {
  "n": "Welsh",
  "aka": "Fire Dragon",
  "g": "dragon",
  "role": "Dragon king of the sun elves",
  "rel": "Fire dragon; one of Tiamat’s four tribal dragon kings.",
  "s": "alive"
 },
 {
  "n": "Hydra",
  "aka": "Poison Dragon; Kusanagi no Tsurugi",
  "g": "dragon",
  "role": "Dragon king of the dark elves",
  "rel": "Poison dragon; one of Tiamat’s four tribal dragon kings.",
  "s": "alive"
 },
 {
  "n": "Dame Travers",
  "aka": "",
  "g": "milaris",
  "role": "Duchess of Travers",
  "rel": "Hermes’s wife, a shrewd duchess who raises girls to place as concubines; blocked from presenting them to Sol.",
  "s": "alive"
 },
 {
  "n": "Pandora",
  "aka": "Queen of Envilya; Queen of Succubi; Succubus Queen",
  "g": "envilya",
  "role": "Queen of Envilya",
  "rel": "Current Queen of Envilya, former crown princess and former companion of Mars; anchor of the special Lustburg–Envilya royal relationship. Guarded the Holy Sword with Lilith and Ibuki and survived the betrayal.",
  "s": "alive"
 },
 {
  "n": "Fenrir",
  "aka": "",
  "g": "divine",
  "role": "Divine beast of Ira",
  "rel": "Mighty wolf ancestor of Setsuna; once fought and defeated Persephone.",
  "s": "divine"
 },
 {
  "n": "Tamamo no Mae",
  "aka": "Nine-Tailed Fox",
  "g": "divine",
  "role": "Divine beast of Patientia",
  "rel": "Nine-tailed kitsune divine beast; parent of Kiku through a mortal kitsune — a rare third-generation birth.",
  "s": "divine"
 },
 {
  "n": "Dracula",
  "aka": "Worthless bloodsucker; Dracula Nosferatu",
  "g": "envilya",
  "role": "Vampire legend",
  "rel": "Vampire whom Satella swears the elves must take revenge on, so other nations do not think elves have gone soft.",
  "s": "unknown"
 },
 {
  "n": "Superbia",
  "aka": "Goddess of Pride; Sin of Pride",
  "g": "divine",
  "role": "Goddess of pride",
  "rel": "Goddess credited with shaping the dragons’ fierce pride — the reason dragonkind refuses to bow to Sol by birthright.",
  "s": "divine"
 },
 {
  "n": "Nent",
  "aka": "Nut; Nent Castitas; Mjolnir; Wicked Phoenix; Phoenix Queen",
  "g": "phoenix",
  "role": "",
  "rel": "Voluptuous phoenix queen, Nefertiti's grandmother and mentor; seduces Sol and helps steer Nefertiti's takeover of the church.",
  "s": "alive"
 },
 {
  "n": "Hathor",
  "aka": "Hator; Immortal Phoenix; Water Phoenix",
  "g": "phoenix",
  "role": "",
  "rel": "King-ranked phoenix and the Astral Realm's greatest healer; helped save Lilith, now returns home for the Divine Beast summit.",
  "s": "alive"
 },
 {
  "n": "Neith",
  "aka": "Neit",
  "g": "phoenix",
  "role": "",
  "rel": "Phoenix divine beast, Hathor's younger sister and a reclusive training maniac; questions Hathor's bet",
  "s": "alive"
 },
 {
  "n": "Sheherazade",
  "aka": "Scheherazade; Sheherezade; Sherezade",
  "g": "fae",
  "role": "",
  "rel": "Tiny mischievous wish fairy and Isis's first friend; reveals Isis's insecurity and teases Sol relentlessly.",
  "s": "alive"
 },
 {
  "n": "Jormungandr",
  "aka": "",
  "g": "dragon",
  "role": "",
  "rel": "Asmodeus's first child; the identity of his second child remains unknown.",
  "s": "unknown"
 },
 {
  "n": "Rio",
  "aka": "Dark Sword",
  "g": "world",
  "role": "",
  "rel": "Metal-type spirit Duke leading slavers; absorbs and returns mana with her swords; refuses Sol and is killed.",
  "s": "dead"
 },
 {
  "n": "White",
  "aka": "White Sparrow; White; White Sparrow",
  "g": "world",
  "role": "",
  "rel": "Rio's Duke-ranked companion beast and closest friend; killed by Sol and later raised as undead.",
  "s": "dead"
 },
 {
  "n": "Dakin",
  "aka": "",
  "g": "world",
  "role": "",
  "rel": "One-eyed tan-skinned leader of the Vira slaver band; cautious and careful never to provoke phoenixes.",
  "s": "unknown"
 },
 {
  "n": "Aslong",
  "aka": "",
  "g": "world",
  "role": "",
  "rel": "Greedy Asad bandit whose group ambushed Sol and Isis; judged and killed during interrogation.",
  "s": "dead"
 },
 {
  "n": "Aktrach",
  "aka": "",
  "g": "world",
  "role": "",
  "rel": "Rock-skinned son of a desert settlement's leader; thanks Sol and chooses to resettle his people in the city.",
  "s": "alive"
 },
 {
  "n": "Order",
  "aka": "",
  "g": "divine",
  "role": "",
  "rel": "Primordial mother goddess paired with Chaos, recognized as highest but without a dedicated faith",
  "s": "divine"
 },
 {
  "n": "Greed",
  "aka": "Avaritia",
  "g": "divine",
  "role": "",
  "rel": "Sin goddess whose divine beast was sealed by Anubis.",
  "s": "divine"
 },
 {
  "n": "Temperance",
  "aka": "Temperatia",
  "g": "divine",
  "role": "",
  "rel": "Virtue goddess whose divine beast was sealed by Anubis.",
  "s": "divine"
 },
 {
  "n": "Nefertiti",
  "aka": "Ishtar (avatar name); Ishtar; Queen of Heaven; Nerftiti; little Nefertiti",
  "g": "phoenix",
  "role": "",
  "rel": "Charm-spirit/Phoenix hybrid, Nent's granddaughter, Sol's devoted submissive; awakens the <<Servitude>> concept once held by Michael.",
  "s": "alive"
 },
 {
  "n": "Kemour",
  "aka": "",
  "g": "phoenix",
  "role": "",
  "rel": "Nent's son, inherits her lightning, manages a breeding harem, delivers Sekhmet to Sol",
  "s": "alive"
 },
 {
  "n": "Sekhmet",
  "aka": "Sek; Sekh; Blazing Lioness; Sekmeth; Sekmet",
  "g": "divine",
  "role": "",
  "rel": "Cat-shaped divine beast with one life left; Nabu's master, refuses Sol's contract and later attends the party.",
  "s": "alive"
 },
 {
  "n": "Black",
  "aka": "",
  "g": "household",
  "role": "",
  "rel": "Sol's nightmare horse back home in Lustburg, named for its color",
  "s": "alive"
 },
 {
  "n": "Ymir",
  "aka": "primordial titan; First goddess of Chaos; Goddess of Destruction",
  "g": "chaos",
  "role": "",
  "rel": "Goddess of destruction, creator of titans and giants; attacks Sol's soul, is devoured, and wakes sealed in chains.",
  "s": "sealed"
 },
 {
  "n": "Skryrim",
  "aka": "",
  "g": "chaos",
  "role": "",
  "rel": "Another false-god-level titan the Chaos faction wished to recruit but could not risk.",
  "s": "unknown"
 },
 {
  "n": "Lakshmi",
  "aka": "",
  "g": "divine",
  "role": "",
  "rel": "Divine beast of Greed; Tiamat's scheming business partner, repeatedly humiliated by her.",
  "s": "divine"
 },
 {
  "n": "Midas",
  "aka": "",
  "g": "divine",
  "role": "",
  "rel": "Divine beast of Charity, one of the few divine beasts Nent respects",
  "s": "divine"
 },
 {
  "n": "Michael",
  "aka": "Micheal",
  "g": "divine",
  "role": "",
  "rel": "Deceased divine beast and messenger of the goddesses, mightiest after Lucifer; his <<Servitude>> concept passes to Nefertiti.",
  "s": "dead"
 },
 {
  "n": "Lucifer",
  "aka": "Torch-bearer; Lucifer Superbia; Light Bringer",
  "g": "divine",
  "role": "",
  "rel": "Dead god whose soul-shade lingers in Tartarus; bitter about the Norns' manipulations and the coming end of all timelines.",
  "s": "dead"
 },
 {
  "n": "Azazel",
  "aka": "",
  "g": "divine",
  "role": "",
  "rel": "Original divine beast of Wrath, one of Gabriel's lost friends",
  "s": "dead"
 },
 {
  "n": "Leviathan",
  "aka": "",
  "g": "divine",
  "role": "",
  "rel": "Original divine beast of Envy, one of the few originals still living",
  "s": "divine"
 },
 {
  "n": "Belzebub",
  "aka": "Beelzebub; Beelzebub; Beelzebub",
  "g": "divine",
  "role": "",
  "rel": "Original divine beast of Gluttony, still living",
  "s": "divine"
 },
 {
  "n": "Raphael",
  "aka": "Raphaël; Rapha?l; Rapha?l",
  "g": "divine",
  "role": "",
  "rel": "Original divine beast of Temperance, still living",
  "s": "divine"
 },
 {
  "n": "Vier",
  "aka": "Four",
  "g": "wings",
  "role": "",
  "rel": "Number four of the Wings of Freedom; an elf who hates dragons, kills them and moves alone or with Ein",
  "s": "alive"
 },
 {
  "n": "Sieben",
  "aka": "Seven",
  "g": "wings",
  "role": "",
  "rel": "Unrevealed numbered member of the Wings of Freedom",
  "s": "unknown"
 },
 {
  "n": "Shunten Douji",
  "aka": "",
  "g": "wings",
  "role": "",
  "rel": "Son of Zwei, named in the Wings roster",
  "s": "unknown"
 },
 {
  "n": "Ra",
  "aka": "",
  "g": "divine",
  "role": "",
  "rel": "Sun god of local myth, father of the goddess Sekhmet in legend",
  "s": "unknown"
 },
 {
  "n": "Gretel Darwin",
  "aka": "Gretel Darwin; Darwin; Darwin",
  "g": "witches",
  "role": "",
  "rel": "Hansel's sister, executed alongside him in Lustburg; haunts Nent's memories and dreams.",
  "s": "unknown"
 },
 {
  "n": "Ladon",
  "aka": "",
  "g": "dragon",
  "role": "",
  "rel": "King-rank dragon contracted to Jupiter; driven mad by his master's death, he died by Siegfried's hand leaving four warnings",
  "s": "dead"
 },
 {
  "n": "Siegfried",
  "aka": "Dragon Slayer; Sirfried",
  "g": "world",
  "role": "",
  "rel": "Nidhogg's estranged father and Southern Pride royalty; secretly a dragon, he reveals Ladon's warning and unveils his War Form",
  "s": "alive"
 },
 {
  "n": "Kaiser",
  "aka": "",
  "g": "dragon",
  "role": "",
  "rel": "Young dragon of Fafnir's line, once Sol's rival for prince; jealous yet humble enough to keep learning from him.",
  "s": "alive"
 },
 {
  "n": "Nidhogg",
  "aka": "Nidhoog Superbia; Nid; Nidhoog Superbia; Nid",
  "g": "dragon",
  "role": "",
  "rel": "Proud poison-obsessed dragon daughter of Siegfried; hunts Sol for his blood, then is schooled and challenged by her father",
  "s": "alive"
 },
 {
  "n": "Aqua",
  "aka": "",
  "g": "dragon",
  "role": "",
  "rel": "Kiyohime's dragon daughter; manages paperwork and teases her lovesick mother about missing Sol.",
  "s": "alive"
 },
 {
  "n": "Genesis",
  "aka": "Book of Genesis",
  "g": "world",
  "role": "",
  "rel": "Adam's divine weapon grimoire whose spirit died; a new spirit is forming for Sol",
  "s": "dead"
 },
 {
  "n": "Dordonii",
  "aka": "",
  "g": "chaos",
  "role": "",
  "rel": "Armored Lord of the 4th Circle, defense-focused Chaos Spawn who led the ambush and was killed by Sol",
  "s": "dead"
 },
 {
  "n": "Derk",
  "aka": "",
  "g": "chaos",
  "role": "",
  "rel": "Insectoid chaos spawn sniper guarding an entrance; captured, tortured and killed by Sol",
  "s": "dead"
 },
 {
  "n": "Drachmae",
  "aka": "",
  "g": "chaos",
  "role": "",
  "rel": "Chaos spawn lord whose territory lies on Sol's route through the fourth circle",
  "s": "unknown"
 },
 {
  "n": "Liya",
  "aka": "",
  "g": "chaos",
  "role": "",
  "rel": "Chaos spawn lord whose territory borders Sol's path to the safe zone",
  "s": "unknown"
 },
 {
  "n": "Kert",
  "aka": "",
  "g": "chaos",
  "role": "",
  "rel": "Insectoid chaos spawn subordinate ordered by Dordonii to prepare the legion",
  "s": "alive"
 },
 {
  "n": "Merk",
  "aka": "",
  "g": "chaos",
  "role": "",
  "rel": "Dordonii's fastest subordinate, sent to warn the other lords of the intruder",
  "s": "alive"
 },
 {
  "n": "Acedia",
  "aka": "goddess of Sloth",
  "g": "divine",
  "role": "",
  "rel": "Goddess of sloth who drowsily remarks that only \"mother\" and Luxuria truly want a new god born.",
  "s": "divine"
 },
 {
  "n": "Mia",
  "aka": "",
  "g": "world",
  "role": "",
  "rel": "Nymph traitor in the 5th Circle; tortured into drawing maps for Sol, then killed by him",
  "s": "dead"
 },
 {
  "n": "Nabu",
  "aka": "Nadu, ice dragon; Nadu; ice dragon",
  "g": "dragon",
  "role": "",
  "rel": "White dragon, strongest Duke Sol fought; former traitor imprisoned in Tartarus, Sekhmet's disciple, refuses Sol's deal.",
  "s": "alive"
 },
 {
  "n": "Marduk",
  "aka": "",
  "g": "dragon",
  "role": "",
  "rel": "Nabu's father, first King-rank dragon outside the four originals; rebelled and was killed by Kiyohime",
  "s": "dead"
 },
 {
  "n": "Phoebe",
  "aka": "",
  "g": "divine",
  "role": "",
  "rel": "Dryad King serving Yggdrasil, divine beast of humility; trained Nidhogg in poison",
  "s": "alive"
 },
 {
  "n": "Urd",
  "aka": "That which happened; \"That which transpired\"; Norn of the past; Norn",
  "g": "divine",
  "role": "",
  "rel": "Eldest of the Three Norns, demigod-ranked Titan, contacted by Verdandi but unable to reach Tiamat's territory in time",
  "s": "alive"
 },
 {
  "n": "Verdandi",
  "aka": "That which is happening; Norn of the present; \"That which is transpiring\"; Norn",
  "g": "divine",
  "role": "",
  "rel": "Skuld's sister Norn, King-ranked Titan linked to the present; fearful and exasperated guardian of Skuld",
  "s": "alive"
 },
 {
  "n": "Skuld",
  "aka": "Darling's seer; one of the Norns; pink Titaness; Norn; That which should become",
  "g": "divine",
  "role": "",
  "rel": "Norn sister, King-ranked titan devoted to Sol; weaves fate with Sheherazade and Verdandi to save him, badly hurt.",
  "s": "alive"
 },
 {
  "n": "Minerva",
  "aka": "",
  "g": "envilya",
  "role": "",
  "rel": "Pandora's younger daughter and Blessed heiress; dream-pulling eyes and the Acting skill copying anyone",
  "s": "alive"
 },
 {
  "n": "Wisteria Humanitas",
  "aka": "",
  "g": "church",
  "role": "",
  "rel": "Supreme Daughter of Humanitas, Pandora's political rival in Envilya",
  "s": "alive"
 },
 {
  "n": "Lagon",
  "aka": "",
  "g": "dragon",
  "role": "",
  "rel": "Dragon strong enough for a Prince title who declined out of disinterest",
  "s": "alive"
 },
 {
  "n": "Invidia",
  "aka": "Goddess of Envy",
  "g": "divine",
  "role": "",
  "rel": "Goddess who stalked Lilith's fate and demanded a holy war; her motion to brand Sol a heretic is rejected at the summit.",
  "s": "divine"
 },
 {
  "n": "Surtr",
  "aka": "King of Fire Giants",
  "g": "chaos",
  "role": "",
  "rel": "Titan whose alone is enough to make several divine beasts struggle; part of the threat behind the Wings of Freedom.",
  "s": "unknown"
 },
 {
  "n": "Adam",
  "aka": "God King; Creator God",
  "g": "divine",
  "role": "",
  "rel": "Aurora's father, the creator-god of Sol's dream; melancholic over the world's death and the secret burden he carries.",
  "s": "divine"
 },
 {
  "n": "Bastet",
  "aka": "",
  "g": "divine",
  "role": "",
  "rel": "Divine beast who refused to follow Sol; cited as having had foresight about his troubles.",
  "s": "divine"
 },
 {
  "n": "Eve",
  "aka": "",
  "g": "divine",
  "role": "",
  "rel": "Adam's wife and counterpart who became the universe's guardian after his death; her split authority permits reincarnation.",
  "s": "divine"
 },
 {
  "n": "Sol (Other Timeline)",
  "aka": "",
  "g": "luxuria",
  "role": "",
  "rel": "Alternate-timeline Sol who inverted all timelines and became enemy of the world to resurrect everyone.",
  "s": "unknown"
 },
 {
  "n": "Doro",
  "aka": "",
  "g": "chaos",
  "role": "",
  "rel": "Lord-ranked chaos spawn, an ancient lamia/naga hiding in the 6th circle; killed by Sol's holy flame.",
  "s": "dead"
 },
 {
  "n": "La Befana",
  "aka": "Number One; Zero One; One; Miss Number One; Befana",
  "g": "witches",
  "role": "",
  "rel": "Witch president who admits hating Medea yet supports the wedding, then leads the hunt for saboteur witches with Kali.",
  "s": "alive"
 },
 {
  "n": "An",
  "aka": "",
  "g": "divine",
  "role": "",
  "rel": "Sky god named in the author's myth notes as Ishtar's father.",
  "s": "divine"
 },
 {
  "n": "Tammuz",
  "aka": "",
  "g": "divine",
  "role": "",
  "rel": "Fertility god named in the myth notes as Ishtar's husband.",
  "s": "divine"
 },
 {
  "n": "Humanitas",
  "aka": "",
  "g": "divine",
  "role": "",
  "rel": "Goddess representing the demons' human side; refuses Sol's plea, insisting mortals must pay for divine meddling.",
  "s": "divine"
 },
 {
  "n": "Sinbad",
  "aka": "",
  "g": "divine",
  "role": "",
  "rel": "Soul Castitas brought into the Phoenix Realm; rebelled and nearly claimed the concept of Famine.",
  "s": "dead"
 },
 {
  "n": "Count Ross",
  "aka": "",
  "g": "world",
  "role": "",
  "rel": "Count whose proposal to build a new hospital Sol reviews and shelves for the future.",
  "s": "alive"
 },
 {
  "n": "William",
  "aka": "Knight Commander William",
  "g": "highland",
  "role": "",
  "rel": "Human captain of the Black Knights and a Highland retainer; distrusts Clara, then swears his blade to Sol.",
  "s": "alive"
 },
 {
  "n": "Edwin",
  "aka": "",
  "g": "world",
  "role": "",
  "rel": "Hunter's son turned Black Knight; spars with Lilin and earns her praise for his skill during training.",
  "s": "alive"
 },
 {
  "n": "Luteam Grimbreaker",
  "aka": "Luteam",
  "g": "world",
  "role": "",
  "rel": "Dwarf adventurer leading the ore expedition; sent to Lustburg to meet Theresa",
  "s": "alive"
 },
 {
  "n": "Candy",
  "aka": "",
  "g": "world",
  "role": "",
  "rel": "Bunny-girl adventurer left behind to guard the fainted merchant woman",
  "s": "alive"
 },
 {
  "n": "Alexander The Great",
  "aka": "Stormbreaker",
  "g": "world",
  "role": "",
  "rel": "Ancient Blessed dwarven king who led the Exodus and forged near-divine weapons",
  "s": "dead"
 },
 {
  "n": "Slothein",
  "aka": "Slothtein; God of Sloth; Slothtein; God of Sloth",
  "g": "divine",
  "role": "",
  "rel": "God of sloth whose supreme daughter is Chloe's mother and Theresa's old friend.",
  "s": "divine"
 },
 {
  "n": "Aubis",
  "aka": "",
  "g": "world",
  "role": "",
  "rel": "Mortal named by Ira as having the highest chance, alongside Sol, of becoming a god",
  "s": "unknown"
 },
 {
  "n": "Gerald Trahison",
  "aka": "",
  "g": "highland",
  "role": "",
  "rel": "Camelia's father and exiled Highland general; Camelia recalls manipulating him to purge Lustburg's traitors.",
  "s": "alive"
 },
 {
  "n": "Viktor",
  "aka": "Lieutenant Viktor",
  "g": "luxuria",
  "role": "",
  "rel": "Frontier lieutenant commanding the teleportation circle's defense; turns to Gerald for counsel against the Tiger ambushes.",
  "s": "alive"
 },
 {
  "n": "Bai Hu",
  "aka": "Baihu; Tiger Lord",
  "g": "wratharis",
  "role": "",
  "rel": "Young Duke leader of the declining Tiger clan; traps Nuwa in his trigram zone, then kneels and swears fealty to Sol.",
  "s": "alive"
 },
 {
  "n": "Ping Hu",
  "aka": "",
  "g": "wratharis",
  "role": "",
  "rel": "Bai Hu's concubine and mother of his child; begs him to defect rather than die for the Tyrant.",
  "s": "alive"
 },
 {
  "n": "Gepard",
  "aka": "",
  "g": "luxuria",
  "role": "",
  "rel": "Commander whose efforts alongside Nuwa saved the fortress front from collapse.",
  "s": "alive"
 },
 {
  "n": "Pengui",
  "aka": "ice spirit",
  "g": "world",
  "role": "",
  "rel": "White's monocled penguin-shaped ice-spirit companion, fused with him; jokes about his crush and divulges their technique.",
  "s": "alive"
 },
 {
  "n": "Rose Oscar",
  "aka": "General Rose; Marchioness",
  "g": "luxuria",
  "role": "",
  "rel": "Aged Countess-General of the Ever Victorious Fortress at Godfall; awed into submission by Sol's presence.",
  "s": "alive"
 },
 {
  "n": "Camel King",
  "aka": "Camel",
  "g": "wratharis",
  "role": "",
  "rel": "Elderly hybrid sage from the Phoenix realm and Wukong's strategist; defeated and caged by Lilin, then submits to Sol.",
  "s": "captive"
 },
 {
  "n": "Jialong",
  "aka": "Flood Dragon Queen; Flood; Flood Queen",
  "g": "wratharis",
  "role": "",
  "rel": "Hybrid dragon sage; defeated by Lilin, recognizes Sol as Dragon Prince and submits without betraying Wukong.",
  "s": "captive"
 },
 {
  "n": "Kun Peng",
  "aka": "Peng King",
  "g": "wratharis",
  "role": "",
  "rel": "Fastest of the Seven Sages, a whale-winged hybrid; frozen by Setsuna's time zone and captured in one instant.",
  "s": "captive"
 },
 {
  "n": "Bull King",
  "aka": "",
  "g": "wratharis",
  "role": "",
  "rel": "Strongest sage below Wukong; challenges Sol, burns a battlefield with his volcano zone and is annihilated by the dragon form.",
  "s": "captive"
 },
 {
  "n": "Lion King",
  "aka": "",
  "g": "wratharis",
  "role": "",
  "rel": "One of the Seven Sages; swallowed into Sol's dimension after the three-way ambush fails.",
  "s": "captive"
 },
 {
  "n": "Macaque King",
  "aka": "",
  "g": "wratharis",
  "role": "",
  "rel": "One of the Seven Sages; admits the princesses won fairly, then is swallowed into Sol's dimension.",
  "s": "captive"
 },
 {
  "n": "Ifrit",
  "aka": "",
  "g": "divine",
  "role": "",
  "rel": "Fire demon Sol claims to have toyed with, cited while mocking the Bull King's flames.",
  "s": "divine"
 },
 {
  "n": "Bloody Queen",
  "aka": "",
  "g": "luxuria",
  "role": "",
  "rel": "Ancient Lustburg queen who established the law that none may look upon the King.",
  "s": "dead"
 },
 {
  "n": "Reckless Monkey",
  "aka": "",
  "g": "wratharis",
  "role": "",
  "rel": "One of the Seven Sages, named as the comrade the others refuse to be mocked by.",
  "s": "alive"
 },
 {
  "n": "Nyx",
  "aka": "",
  "g": "divine",
  "role": "",
  "rel": "Dawn's twin sister and goddess of night, devoured so Dawn could take her authority.",
  "s": "dead"
 },
 {
  "n": "Pangu",
  "aka": "",
  "g": "world",
  "role": "",
  "rel": "Creator figure from legend who separated Heaven and Earth; Adam compares universe seeds to his myth.",
  "s": "unknown"
 },
 {
  "n": "Caritas",
  "aka": "Goddess of Charity",
  "g": "divine",
  "role": "",
  "rel": "Gentle goddess of charity who asks how Hypnos survived their father's massacre",
  "s": "divine"
 },
 {
  "n": "Buddha",
  "aka": "",
  "g": "divine",
  "role": "",
  "rel": "Heavenly being whose enlightenment let the mortal Adam awaken [The World]",
  "s": "divine"
 },
 {
  "n": "Hephaestus",
  "aka": "",
  "g": "divine",
  "role": "",
  "rel": "God-name Theresa considers and rejects for her Avatar",
  "s": "divine"
 },
 {
  "n": "Prometheus",
  "aka": "",
  "g": "divine",
  "role": "",
  "rel": "Titan name of selfless dedication Theresa rejects as her Avatar",
  "s": "divine"
 },
 {
  "n": "Sindri",
  "aka": "",
  "g": "world",
  "role": "",
  "rel": "Dwarven smith name promising unsurpassed divine weapons; Theresa rejects it as her Avatar",
  "s": "unknown"
 },
 {
  "n": "Gaia",
  "aka": "",
  "g": "divine",
  "role": "",
  "rel": "Primordial entity named as one of Aergia's parents in Earth myth",
  "s": "divine"
 },
 {
  "n": "Aether",
  "aka": "",
  "g": "divine",
  "role": "",
  "rel": "Primordial entity named as Aergia's other parent in Earth myth",
  "s": "divine"
 },
 {
  "n": "Grand Priest",
  "aka": "",
  "g": "world",
  "role": "",
  "rel": "Nameless ancient elf, religious leader of Tiamat's faithful; scolds Satella, then settles on twin statues of Sol.",
  "s": "alive"
 },
 {
  "n": "Huginn",
  "aka": "",
  "g": "world",
  "role": "",
  "rel": "One-eyed raven companion of the Grand Priest, gifted precognition by the Dragon Empress",
  "s": "alive"
 },
 {
  "n": "Muninn",
  "aka": "",
  "g": "world",
  "role": "",
  "rel": "Second one-eyed raven companion of the Grand Priest, old scout of the Mortal Realm",
  "s": "alive"
 },
 {
  "n": "Odin",
  "aka": "",
  "g": "divine",
  "role": "",
  "rel": "Norse god of Sol's old world, cited as the master of the ravens Huginn and Muninn",
  "s": "divine"
 },
 {
  "n": "Lyod",
  "aka": "",
  "g": "world",
  "role": "",
  "rel": "Doomed Snake-crest squire driven by Daji's illusions to kill his own lover and die.",
  "s": "dead"
 },
 {
  "n": "Asura",
  "aka": "God of Struggle; demigod of struggle",
  "g": "divine",
  "role": "",
  "rel": "Four-armed oni demigod who slaughtered Qinglong Fang's monks to fuel his ascension; erased by Deus.",
  "s": "dead"
 },
 {
  "n": "Karma",
  "aka": "",
  "g": "divine",
  "role": "",
  "rel": "Child-faced god of karma who plucks his lyre, probes Dawn's plans and vows neutral observation of the coming war.",
  "s": "divine"
 },
 {
  "n": "Su Daji",
  "aka": "Euphoria; Goddess of Hatred; embodiment of ecstasy; Goddess of Love; Daji",
  "g": "divine",
  "role": "",
  "rel": "Newly ascended goddess who crashed the wedding, summoned meteors and was stripped of Love and banished from the Mortal Realm.",
  "s": "divine"
 },
 {
  "n": "Khan",
  "aka": "",
  "g": "world",
  "role": "",
  "rel": "The Mortal Realm's highest-ranked King, cited as proof that even the strongest mortals are merely Kings",
  "s": "alive"
 },
 {
  "n": "Amora",
  "aka": "Goddess of Love",
  "g": "divine",
  "role": "",
  "rel": "Euphoria's twin sister and original goddess of Love, betrayed and killed by Euphoria in the Twilight of the Gods.",
  "s": "dead"
 },
 {
  "n": "Thanatos",
  "aka": "Death; Goddess of Death",
  "g": "divine",
  "role": "",
  "rel": "Death goddess who fused with her twin Vita's Life authority; now the strongest demigod, seeking a vast war to ascend.",
  "s": "divine"
 },
 {
  "n": "Chronos",
  "aka": "",
  "g": "divine",
  "role": "",
  "rel": "Time Avatar from the Book of Akasha that Ambrosia uses to nearly halt the meteor.",
  "s": "divine"
 },
 {
  "n": "Vita",
  "aka": "Goddess of Life",
  "g": "divine",
  "role": "",
  "rel": "Thanatos's twin sister and goddess of Life, absorbed into her sibling to form a dual-authority being.",
  "s": "dead"
 }
];

  /* ── Render ─────────────────────────────────────────────── */
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

  /* ── Search filter ──────────────────────────────────────── */
  var rows = Array.prototype.slice.call(list.querySelectorAll(".ft-row"));
  var noMatch = document.getElementById("ftNoMatch");
  var clearBtn = document.getElementById("ftClear");
  var groupTitles = {};
  GROUPS.forEach(function (g) { groupTitles[g.key] = g.title; });

  // Precompute one lowercase haystack per row (name + alias + role + desc + group).
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

    // hide a group header + rows block when nothing in it matches
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

  // "/" jumps to the search field, like the site's terminal shortcuts.
  document.addEventListener("keydown", function (e) {
    if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
    var t = e.target;
    var tag = t && t.tagName ? t.tagName.toLowerCase() : "";
    if (tag === "input" || tag === "textarea" || (t && t.isContentEditable)) return;
    e.preventDefault();
    if (search) { search.focus(); search.select(); }
  });
})();
