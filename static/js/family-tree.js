/* ─────────────────────────────────────────────────────────────
   Son of the Hero King — Spoilers: Character List
   Plain grouped vertical list. Renders GROUPS + DATA below into
   the page, with a live search filter and counts.
   ───────────────────────────────────────────────────────────── */
(function () {
  "use strict";

  /* ── Groups (display order) ─────────────────────────────── */
  var GROUPS = [
    { key: "luxuria",   title: "The House of Luxuria" },
    { key: "dragon",    title: "The Dragon Line" },
    { key: "highland",  title: "House Highland" },
    { key: "milaris",   title: "Milaris & Travers" },
    { key: "gorfard",   title: "House Gorfard" },
    { key: "gustav",    title: "House Gustav" },
    { key: "church",    title: "The Church of Castitas" },
    { key: "witches",   title: "The Witches of Walpurgisnacht" },
    { key: "wratharis", title: "Wratharis & the Wolf Throne" },
    { key: "pride",     title: "The Elves of Southern Pride" },
    { key: "phoenix",   title: "The Phoenix Court" },
    { key: "wings",     title: "The Wings of Freedom" },
    { key: "household", title: "Sol’s Household & Chosen" },
    { key: "divine",    title: "Goddesses, Divine Beasts & Legends" }
  ];

  /* ── Characters ─────────────────────────────────────────── */
  /* { n: name, aka: aliases, g: group key, role: short title,
     rel: description, s: status } */
  var DATA = /*__DATA__*/[
 {
  "n": "Jupiter",
  "aka": "the Conqueror",
  "role": "Founder-King of Lustburg",
  "rel": "Ancestor of Sol; father of Pluto; an ancient power humanity once rose to break free from, aided by the witches",
  "s": "dead",
  "g": "luxuria"
 },
 {
  "n": "Pluto",
  "aka": "the Peaceful",
  "role": "Second King",
  "rel": "Son of Jupiter; father of Venus",
  "s": "dead",
  "g": "luxuria"
 },
 {
  "n": "Venus",
  "aka": "the Bloodthirsty",
  "role": "Third ruler",
  "rel": "Daughter of Pluto and third ruler of Lustburg, the infamous bloodthirsty queen Sol cites as a negative example — he refuses to rule through such terror",
  "s": "dead",
  "g": "luxuria"
 },
 {
  "n": "Mercury",
  "aka": "",
  "role": "Fourth ruler",
  "rel": "Dynastic link only; no family scene",
  "s": "dead",
  "g": "luxuria"
 },
 {
  "n": "Saturn",
  "aka": "",
  "role": "Fifth ruler",
  "rel": "Dynastic link only; no family scene",
  "s": "dead",
  "g": "luxuria"
 },
 {
  "n": "Uranus Luxuria",
  "aka": "the Tyrant King",
  "role": "Sixth King",
  "rel": "Sol’s great-grandfather; Neptune’s father",
  "s": "dead",
  "g": "luxuria"
 },
 {
  "n": "Neptune Luxuria",
  "aka": "the Puppet King",
  "role": "Seventh King; experimenter",
  "rel": "Sol’s grandfather; the Puppet King who fathered Mars and Lilith, forced Lilith into marriage, and is connected to Lilin’s creation",
  "s": "dead",
  "g": "luxuria"
 },
 {
  "n": "Mars Luxuria",
  "aka": "the Hero King",
  "role": "Eighth King",
  "rel": "Sol’s father; the Hero King who sacrificed himself to finish sealing Echidna after Ibuki’s betrayal; Camelia’s old friend",
  "s": "dead",
  "g": "luxuria"
 },
 {
  "n": "Blaze Dragona",
  "aka": "the dragon wife",
  "role": "Dragon Queen; Tiamat’s daughter",
  "rel": "Sol’s mother; dragon daughter of Tiamat; died following Mars, entrusting baby Sol to Camelia and her core and horns to Theresa",
  "s": "dead",
  "g": "luxuria"
 },
 {
  "n": "Sol Dragona Luxuria",
  "aka": "the crown prince",
  "role": "Crown Prince of Lustburg, 15",
  "rel": "Crown prince of Lustburg, reincarnated university student and dragon hybrid with limitless stamina; son of Mars and Blaze, wielder of the mirror dimension, his life magically linked to Camelia’s. The elven doomsday oracle names him the key to salvation, and Goddess Luxuria’s second trial is to earn dragonkind’s recognition.",
  "s": "alive",
  "g": "luxuria"
 },
 {
  "n": "Lilith Luxuria",
  "aka": "the sword saint",
  "role": "Ruling Queen Regent of Lustburg",
  "rel": "Mars’s sister and Sol’s aunt; a homunculus created by Neptune. Mother of Lilin — a clone made by experiment, not born of her — whom she raised cruelly to make her strong; reconciling with her as her own death approaches, within weeks.",
  "s": "dying",
  "g": "luxuria"
 },
 {
  "n": "Lilin Luxuria",
  "aka": "the princess",
  "role": "Princess of Lustburg",
  "rel": "Lilith’s “daughter”, a clone made by experiment and likely Mars’s biological daughter — Sol’s cousin, half-sister, or aunt by the text’s own uncertainty. Young duke with awakening nightmare/succubus blood, seeking strength.",
  "s": "alive",
  "g": "luxuria"
 },
 {
  "n": "Tarrik Luxuria",
  "aka": "",
  "role": "General of Lustburg",
  "rel": "Kinsman of the royal house; exact link unstated",
  "s": "dead",
  "g": "luxuria"
 },
 {
  "n": "Tiamat",
  "aka": "dragon of Pride",
  "role": "Divine beast of Pride",
  "rel": "Sol’s grandmother and mother of Blaze; governs the dragons and represents the high elves; a union of one of her grandchildren with an elf produced the first high-elf queen and the thin dragon blood of all high elves",
  "s": "divine",
  "g": "dragon"
 },
 {
  "n": "Fafnir",
  "aka": "",
  "role": "Dragon king of the moon elves",
  "rel": "Snow dragon; one of the four tribal dragon kings under Tiamat",
  "s": "alive",
  "g": "dragon"
 },
 {
  "n": "Kiyohime",
  "aka": "Kiyo",
  "role": "Dragon king of the water elves",
  "rel": "Water dragon; one of the four tribal dragon kings under Tiamat",
  "s": "alive",
  "g": "dragon"
 },
 {
  "n": "Apsu",
  "aka": "",
  "role": "Tiamat’s only love",
  "rel": "Died in the Age of Gods; not named as Blaze’s father",
  "s": "dead",
  "g": "dragon"
 },
 {
  "n": "Tyr Highland",
  "aka": "god of war",
  "role": "Duke Highland",
  "rel": "Elder duke, loyal to the kingdom; absent from the war council, asked via Athena to prepare countermeasures for a winter Wratharis attack",
  "s": "alive",
  "g": "highland"
 },
 {
  "n": "Gerald Highland",
  "aka": "Uncle Gerald",
  "role": "Ex-general; Sol’s father-figure",
  "rel": "Highland elder and Sol’s beloved father-figure teacher who briefly betrayed the kingdom; exiled to the battlefield escorted by black knights and the Crown’s Shadow after Ambrosia wiped his dangerous memories. Final fate unstated.",
  "s": "unknown",
  "g": "highland"
 },
 {
  "n": "Athena Highland",
  "aka": "Lady Athena; Sir Athena",
  "role": "Heir of Highland; Sol’s knight",
  "rel": "Heiress of the Highland duchy and gifted knight, Sol’s close friend; stands in for Tyr at the war council",
  "s": "alive",
  "g": "highland"
 },
 {
  "n": "Ares Highland",
  "aka": "",
  "role": "Second heir of Highland",
  "rel": "Twin of Athena; grandson of Tyr and Gerald",
  "s": "alive",
  "g": "highland"
 },
 {
  "n": "Aurora",
  "aka": "",
  "role": "Holy-daughter candidate",
  "rel": "Gerald’s granddaughter; Athena and Ares’s cousin; asleep",
  "s": "asleep",
  "g": "highland"
 },
 {
  "n": "Athena & Ares’s parents",
  "aka": "Tyr’s son and Gerald’s daughter",
  "role": "The hinge of the house",
  "rel": "Both dead; names unstated; Gerald calls their father ‘my son-in-law’",
  "s": "dead",
  "g": "highland"
 },
 {
  "n": "Arachne Milaris",
  "aka": "the black widow",
  "role": "Duchess Milaris",
  "rel": "Seamstress duchess commanding golems, in love with the late Mars; reluctantly ordered to hire tailors for the soldiers’ winter gear",
  "s": "alive",
  "g": "milaris"
 },
 {
  "n": "The Milaris niece",
  "aka": "",
  "role": "Arachne’s successor",
  "rel": "Arachne’s niece; name unstated",
  "s": "alive",
  "g": "milaris"
 },
 {
  "n": "Hermes Travers",
  "aka": "Duke Hermes Travers",
  "role": "Merchant duke of Travers",
  "rel": "Lustburg merchant duke, an ally only while Sol is strong; rejected his wife’s honey-trap scheme and hosts Sol’s night party",
  "s": "alive",
  "g": "milaris"
 },
 {
  "n": "Loki Gorfard",
  "aka": "the last duke",
  "role": "Duke Gorfard",
  "rel": "Ambitious duke who plotted to kill Sol for power; executed for the conspiracy and hanged publicly alongside Leonard to vent the crowd’s anger",
  "s": "dead",
  "g": "gorfard"
 },
 {
  "n": "Cerios Gorfard",
  "aka": "",
  "role": "Lilith’s husband in name only",
  "rel": "Loki’s brother; publicly Lilin’s father; killed by Neptune",
  "s": "dead",
  "g": "gorfard"
 },
 {
  "n": "Duchess Gorfard",
  "aka": "",
  "role": "Loki’s wife",
  "rel": "Leonard’s likely mother; name unstated",
  "s": "unknown",
  "g": "gorfard"
 },
 {
  "n": "Leonard Gorfard",
  "aka": "",
  "role": "Executed heir of Gorfard",
  "rel": "Traitor son of Loki; executed for the plot and publicly hanged at the coliseum executions as a warning to the nobles",
  "s": "dead",
  "g": "gorfard"
 },
 {
  "n": "The Gorfard cadets",
  "aka": "concubine children",
  "role": "Cadet branch",
  "rel": "Loki’s children by maids; no inheritance; conscripted",
  "s": "alive",
  "g": "gorfard"
 },
 {
  "n": "Alfred",
  "aka": "",
  "role": "Leonard’s aged servant",
  "rel": "No kin stated; the Gorfard hand in the ball",
  "s": "unknown",
  "g": "gorfard"
 },
 {
  "n": "Mongov Gustav",
  "aka": "",
  "role": "Dwarf magnate",
  "rel": "Theresa’s father",
  "s": "dead",
  "g": "gustav"
 },
 {
  "n": "Theresa Gustav",
  "aka": "Aunt Theresa",
  "role": "Master smith; Sol’s godmother",
  "rel": "Dwarf master smith of the hero party, old friend of Mars and Blaze, Greed Dike council member who once killed her own brother; forges rune weapons for Sol’s people and a divine weapon from Blaze’s core. Heiress of Sol’s fortune.",
  "s": "alive",
  "g": "gustav"
 },
 {
  "n": "Theresa’s brother",
  "aka": "",
  "role": "Traitor of the Gustav family",
  "rel": "Theresa’s brother; fate unstated",
  "s": "unknown",
  "g": "gustav"
 },
 {
  "n": "Camelia Castitas",
  "aka": "Duchess Camelia",
  "role": "Supreme Daughter of Castitas",
  "rel": "Priestess of the church, powerful mind-controlling duchess and Sol’s lover whose life is magically linked to his; admitted hiding her manipulations and is now reconciled with him and maneuvering to lead his women — while hiding the toll the broken ritual barrier takes on her, coughing blood, and resolving to confess it",
  "s": "alive",
  "g": "church"
 },
 {
  "n": "Iris Industria",
  "aka": "",
  "role": "Supreme Daughter of Industria",
  "rel": "Supreme Daughter of Sloth and Chloe’s mother; former enemy turned ally of Mars’s group, spared like Pandora",
  "s": "alive",
  "g": "church"
 },
 {
  "n": "Chloe / Clover Industria",
  "aka": "Clover Industria",
  "role": "Paladin-in-training; Holy Daughter of Industria",
  "rel": "Daughter of Iris; not Sol’s lover but dragged into the women’s meeting",
  "s": "alive",
  "g": "church"
 },
 {
  "n": "Lily Castitas",
  "aka": "",
  "role": "Former Supreme Daughter",
  "rel": "Camelia’s predecessor; no kin stated",
  "s": "unknown",
  "g": "church"
 },
 {
  "n": "Elsmere Gorfard",
  "aka": "",
  "role": "Senior nun of Castitas",
  "rel": "Gorfard by blood; Camelia’s former favourite; exact parentage unstated",
  "s": "unknown",
  "g": "church"
 },
 {
  "n": "The white knight",
  "aka": "",
  "role": "Paladin; Camelia’s admirer",
  "rel": "No kin stated; tricked into attacking Sol",
  "s": "unknown",
  "g": "church"
 },
 {
  "n": "Ambrosia",
  "aka": "Mother",
  "role": "Mother of Witches; Witch of Origin",
  "rel": "Demi-god witch dwelling in Medea’s world and adoptive mother of Kali, Medea, Freya and Persephone; her presence fortifies Lustburg. Wiped Gerald’s dangerous memories and may yet train Setsuna.",
  "s": "alive",
  "g": "witches"
 },
 {
  "n": "Medea (Edea)",
  "aka": "Medea West Asmodeus; Edea",
  "role": "Witch of Time; Sol’s teacher",
  "rel": "Cardinal witch of the Asmodeus household, Ambrosia’s adopted daughter and Witch of Time; hosts the other witches in her own world. Sol’s beloved teacher, she sheds her meek act to challenge Camelia’s bid to boss the women’s gathering.",
  "s": "alive",
  "g": "witches"
 },
 {
  "n": "Persephone",
  "aka": "Persephone Asmodeus",
  "role": "Witch of Life; healer",
  "rel": "Blunt cardinal witch of Life and Ambrosia’s adopted daughter — one of the world’s strongest women and now Sol’s lover. Reportedly surpassed Freya in his favor and is suspected of asking him for a child; once fought and lost to Fenrir, and her mastery of life and nature helped defeat Queen Satella.",
  "s": "alive",
  "g": "witches"
 },
 {
  "n": "Kali",
  "aka": "Kali Asmodeus",
  "role": "Witch of Destruction; youngest cardinal witch",
  "rel": "Ambrosia’s adopted daughter and Sol’s subordinate, of the Asmodeus household; volunteered to escort Lilin if she travels abroad.",
  "s": "alive",
  "g": "witches"
 },
 {
  "n": "Freya",
  "aka": "Freya East Asmodeus",
  "role": "Witch of Space; cardinal witch",
  "rel": "Ambrosia’s adopted daughter and Sol’s lover, part of the three-witch bloc; teased by Ambrosia about losing to Persephone in Sol’s favor, jealous and shocked that Persephone succeeded where she failed",
  "s": "alive",
  "g": "witches"
 },
 {
  "n": "Setsuna Ira",
  "aka": "the fallen princess",
  "role": "Princess of Wratharis; Storm Wolf",
  "rel": "Sol’s knight and future spouse: a slave princess and sword-user magical being, blue-wolf Storm Wolf of Wratharis and Sol’s lover. Lilin’s friend and rival; to be trained by Lilith and Ambrosia. Camelia’s plan would make her queen once the Wolf King dies",
  "s": "alive",
  "g": "wratharis"
 },
 {
  "n": "The Wolf King",
  "aka": "",
  "role": "Setsuna’s father",
  "rel": "Lupus’s brother; killed in the usurpation",
  "s": "dead",
  "g": "wratharis"
 },
 {
  "n": "The Wolf Queen",
  "aka": "",
  "role": "Setsuna’s mother",
  "rel": "Died with her husband",
  "s": "dead",
  "g": "wratharis"
 },
 {
  "n": "Lupus Ira",
  "aka": "the Wolf King",
  "role": "King of Wratharis; usurper",
  "rel": "Setsuna’s uncle; killed her father; wants her as a consort",
  "s": "alive",
  "g": "wratharis"
 },
 {
  "n": "Neun",
  "aka": "Mio (born name); Setsuna’s former teacher",
  "role": "Wings member; Wratharis agent",
  "rel": "Setsuna’s former teacher, not her sister; successfully stole the Holy Sword, keeping the Lustburg mission from total fiasco",
  "s": "alive",
  "g": "wings"
 },
 {
  "n": "Kio",
  "aka": "",
  "role": "Servant of the princess",
  "rel": "Used himself as bait; fate unknown",
  "s": "unknown",
  "g": "wratharis"
 },
 {
  "n": "Kiku",
  "aka": "Inari Kiku Patientia; six-tailed kitsune",
  "role": "Supreme Daughter of Patientia",
  "rel": "Six-tailed kitsune of Wratharis and direct descendant of Tamamo no Mae; wants the Wolf King dead so Setsuna can reign",
  "s": "alive",
  "g": "wratharis"
 },
 {
  "n": "Sakura",
  "aka": "",
  "role": "Kiku’s heir and future Miko",
  "rel": "No blood link stated",
  "s": "alive",
  "g": "wratharis"
 },
 {
  "n": "Shuten",
  "aka": "Shuten-Doji",
  "role": "Leader of the Oni",
  "rel": "Cunning, Duke-ranked daughter of Ibuki and current Oni clan leader; suspected by Camelia of prompting Kiku’s king-assassination idea",
  "s": "alive",
  "g": "wratharis"
 },
 {
  "n": "Ibuki-Douji",
  "aka": "Zwei (Wings numbering)",
  "role": "Ex-leader of the Oni; Wings captain",
  "rel": "Former Oni clan leader who actually betrayed the alliance and stole the Holy Sword, wrecking Echidna’s seal; a grey-skinned battle junkie, secretly King-ranked, banished by Nihil after questioning her leadership",
  "s": "alive",
  "g": "wings"
 },
 {
  "n": "Sun Wukong",
  "aka": "",
  "role": "Stone Monkey clan leader",
  "rel": "No kin named; beat Fafnir and took his blood",
  "s": "alive",
  "g": "wratharis"
 },
 {
  "n": "Gabriel",
  "aka": "the sacred Phoenix",
  "role": "Elder phoenix",
  "rel": "Nephtys’s mother; an elder phoenix who comforts her daughter, noting Sol might refuse Isis and calling the girl a miracle",
  "s": "divine",
  "g": "phoenix"
 },
 {
  "n": "Nephtys",
  "aka": "",
  "role": "Phoenix Queen",
  "rel": "Vermillion-haired Phoenix Queen of the Astral realm, servant of goddess Castitas; devoted mother of Isis, anxious about Sol’s visit as a possible fiancé",
  "s": "alive",
  "g": "phoenix"
 },
 {
  "n": "Anubis",
  "aka": "the Necromancer King",
  "role": "Necromancer King of the Underworld",
  "rel": "First mortal to reach demi-god; rules the Underworld, a domain stolen from the Afterlife; his absence once let the Wings escape with Drei’s soul",
  "s": "divine",
  "g": "phoenix"
 },
 {
  "n": "Isis",
  "aka": "",
  "role": "Phoenix–demon princess",
  "rel": "Nephtys’s only daughter, born from love rather than asexual energy-splitting — a singularity between life and death; currently refusing to see her mother",
  "s": "alive",
  "g": "phoenix"
 },
 {
  "n": "Nihil",
  "aka": "Dhalia Industria; “Dahlia”",
  "role": "Leader of the Wings; fallen angel",
  "rel": "Formerly the first blessed of Industria and one of the first angels; discarded her name to lead the Wings of Freedom rebellion for the Mother Goddess of Chaos; wounded in the Lustburg raid",
  "s": "alive",
  "g": "wings"
 },
 {
  "n": "Drei / Hansel",
  "aka": "Wings #3",
  "role": "Necromancer; body-jumper",
  "rel": "A soul anchored by grudge and held in a phylactery; Lilith’s soul-attack left him fatally wounded — using his avatar would crumble him to dust",
  "s": "dying",
  "g": "wings"
 },
 {
  "n": "Darwin",
  "aka": "",
  "role": "Witch; reincarnator",
  "rel": "Drei’s sister; executed with him",
  "s": "dead",
  "g": "wings"
 },
 {
  "n": "Zehn",
  "aka": "Wings #10",
  "role": "Vampire daywalker",
  "rel": "Vampire daywalker captured by Lustburg defenders during the failed attack on the country",
  "s": "captive",
  "g": "wings"
 },
 {
  "n": "Acht",
  "aka": "Atch (Wings numbering)",
  "role": "Mechanic and gunsmith",
  "rel": "Wings member with a living physical body that slowly nourishes his soul-wound from Lilith’s attack; recovering, not dying",
  "s": "alive",
  "g": "wings"
 },
 {
  "n": "Eins",
  "aka": "Ein (Wings numbering)",
  "role": "Artificer; King-class",
  "rel": "Wings artificer, King-class; reported Acht’s condition back to Nihil",
  "s": "alive",
  "g": "wings"
 },
 {
  "n": "Funf",
  "aka": "Wings #5",
  "role": "Numbered member",
  "rel": "Rumoured to be Nuwa’s sibling; unconfirmed",
  "s": "alive",
  "g": "wings"
 },
 {
  "n": "Sechs",
  "aka": "Wings #6",
  "role": "Numbered member",
  "rel": "No kin named",
  "s": "alive",
  "g": "wings"
 },
 {
  "n": "Milia",
  "aka": "Number 26",
  "role": "Head maid; Sol’s wet nurse",
  "rel": "Sol’s head maid, lover and trusted aide — a former street urchin and spymaster of the crown’s shadow with a weak shadow-based Devouring. Organized the girls’ goddess-sworn non-aggression contract, keeps the household peace and teaches Nuwa",
  "s": "alive",
  "g": "household"
 },
 {
  "n": "Eric ‘Bull’",
  "aka": "",
  "role": "Milia’s husband",
  "rel": "Cowman; betrayed the experiment; killed by Milia",
  "s": "dead",
  "g": "household"
 },
 {
  "n": "Nuwa",
  "aka": "",
  "role": "Chimera battle maid",
  "rel": "Sol’s shy chimera maid with the innate Devouring ability that converts food to mana; Lilin’s first friend. Being trained as a maid by Milia, distrusts Hermes, and accompanied Sol to the Travers mansion and Theresa’s forge",
  "s": "alive",
  "g": "household"
 },
 {
  "n": "Clara",
  "aka": "Clara Humilitas",
  "role": "Sol’s provisional secretary",
  "rel": "Elf raised her whole life to serve dragons; petitions Sol to become his advisor and is made provisional secretary pending a contract",
  "s": "alive",
  "g": "household"
 },
 {
  "n": "Ketia",
  "aka": "",
  "role": "Crown’s Shadow; maid",
  "rel": "No kin named; guarded Lilin",
  "s": "alive",
  "g": "household"
 },
 {
  "n": "Berthold",
  "aka": "",
  "role": "Crown’s Shadow; bartender",
  "rel": "No kin named; killed, his body used by Drei",
  "s": "dead",
  "g": "household"
 },
 {
  "n": "Edgar",
  "aka": "",
  "role": "Crown’s Shadow; jeweller",
  "rel": "No kin named; one of the Fingers",
  "s": "alive",
  "g": "household"
 },
 {
  "n": "Aria",
  "aka": "",
  "role": "Crown’s Shadow; madam",
  "rel": "Crown’s Shadow madam who runs Lustburg’s red-light district, where many succubi work; told Sol about succubus ranks as potential trainers for Lilin",
  "s": "alive",
  "g": "household"
 },
 {
  "n": "Alpha, Beta & Omega",
  "aka": "",
  "role": "Lilith’s three eldest maids",
  "rel": "No kin named; Wratharis veterans",
  "s": "alive",
  "g": "household"
 },
 {
  "n": "Anastasia Invidia",
  "aka": "",
  "role": "Princess of Envilya",
  "rel": "Lilin’s friend from her elven adventure, living in politically unstable Envilya; the succubus trainer Lilin wanted to visit",
  "s": "alive",
  "g": "household"
 },
 {
  "n": "Eridina",
  "aka": "",
  "role": "King of Greed Dike",
  "rel": "No kin named; wants a channel to Theresa",
  "s": "alive",
  "g": "household"
 },
 {
  "n": "Castitas",
  "aka": "",
  "role": "Goddess of chastity",
  "rel": "Camelia’s patron; one of fourteen sisters",
  "s": "divine",
  "g": "divine"
 },
 {
  "n": "Luxuria",
  "aka": "",
  "role": "Goddess of lust",
  "rel": "Goddess of Lust who honed Sol for years — possibly grooming a foreign soul to reach demi-god or beyond. Spared Camelia and bound her life to Sol’s in exchange for three tasks; summons Sol to assign his second trial, to earn dragonkind’s recognition",
  "s": "divine",
  "g": "divine"
 },
 {
  "n": "Ira",
  "aka": "",
  "role": "Goddess of wrath",
  "rel": "Lupus’s patron; one of fourteen sisters",
  "s": "divine",
  "g": "divine"
 },
 {
  "n": "Gula",
  "aka": "",
  "role": "Goddess of gluttony",
  "rel": "Echidna’s patron; one of fourteen sisters",
  "s": "divine",
  "g": "divine"
 },
 {
  "n": "Industria",
  "aka": "",
  "role": "Goddess of diligence",
  "rel": "Nihil’s former patron; one of fourteen sisters",
  "s": "divine",
  "g": "divine"
 },
 {
  "n": "Patientia",
  "aka": "",
  "role": "Goddess of patience",
  "rel": "Kiku’s patron; one of fourteen sisters",
  "s": "divine",
  "g": "divine"
 },
 {
  "n": "Asmodeus",
  "aka": "the old snake",
  "role": "Deity of the witches’ household",
  "rel": "The deity who laid the curse on the witches of the Asmodeus household; promised not to interfere in their handling of it, so Sol must convince him to change their fate",
  "s": "divine",
  "g": "divine"
 },
 {
  "n": "Echidna",
  "aka": "mother of monsters",
  "role": "Demon Queen of Gluttony Foss",
  "rel": "The vast demon queen of Gluttony Foss whose sealing ritual Ibuki wrecked by stealing the Holy Sword, costing Mars and Blaze their lives; Blaze sacrificed herself against her. Still under seal, her own outcome unstated.",
  "s": "sealed",
  "g": "divine"
 },
 {
  "n": "The Nightmare Queen",
  "aka": "Succubus Queen",
  "role": "Ancient succubus queen of Envilya",
  "rel": "The ancient, strongest queen of Envilya, a Nightmare-rank succubus whose blood Lilin inherited and is now awakening",
  "s": "dead",
  "g": "divine"
 },
 {
  "n": "Mother Goddess of Chaos",
  "aka": "",
  "role": "The goddess above the fourteen",
  "rel": "Mother of the goddesses; the Wings want her unsealed",
  "s": "sealed",
  "g": "divine"
 },
 {
  "n": "Satella Superbia",
  "aka": "",
  "g": "pride",
  "role": "Queen of Southern Pride",
  "s": "alive",
  "rel": "Fourth and most talented elven queen, centuries older than Jasmine, her friend and tutor; her past loss to the witches of time and life stalled her demi-god ascent. Swears the elves will take revenge on Dracula."
 },
 {
  "n": "Jasmine Humilitas",
  "aka": "",
  "g": "pride",
  "role": "High Priestess of Southern Pride",
  "s": "alive",
  "rel": "Brown-skinned, tomboyish elven high priestess; Satella’s friend and pupil. Glad that a dark elf of her tribe has grown close to Sol."
 },
 {
  "n": "Ismelya",
  "aka": "",
  "g": "pride",
  "role": "Elf mother of Sol’s advisor",
  "s": "unknown",
  "rel": "Mother of the bright but martially unskilled dark-elf daughter who landed the job of Sol’s advisor."
 },
 {
  "n": "Sol’s dark-elf advisor",
  "aka": "Ismelya’s daughter (nameless)",
  "g": "pride",
  "role": "Sol’s advisor",
  "s": "alive",
  "rel": "Orphaned dark elf of Jasmine’s tribe who became Sol’s advisor and is favored by the prince."
 },
 {
  "n": "Yggdrasil",
  "aka": "the World Tree; Humilitas",
  "g": "pride",
  "role": "Divine beast of the elves",
  "s": "divine",
  "rel": "Divine beast whose seed grew into the World Tree, the cloud-piercing tree housing the elven sanctuary; incarnated in every elf tribe, providing elves limitless resources."
 },
 {
  "n": "Welsh",
  "aka": "",
  "g": "dragon",
  "role": "Dragon king of the sun elves",
  "s": "alive",
  "rel": "Fire dragon; one of Tiamat’s four tribal dragon kings."
 },
 {
  "n": "Hydra",
  "aka": "",
  "g": "dragon",
  "role": "Dragon king of the dark elves",
  "s": "alive",
  "rel": "Poison dragon; one of Tiamat’s four tribal dragon kings."
 },
 {
  "n": "Dame Travers",
  "aka": "",
  "g": "milaris",
  "role": "Duchess of Travers",
  "s": "alive",
  "rel": "Hermes’s wife, a shrewd duchess who raises girls to place as concubines; blocked from presenting them to Sol."
 },
 {
  "n": "Pandora",
  "aka": "",
  "g": "household",
  "role": "Queen of Envilya",
  "s": "alive",
  "rel": "Current Queen of Envilya, former crown princess and former companion of Mars; anchor of the special Lustburg–Envilya royal relationship. Guarded the Holy Sword with Lilith and Ibuki and survived the betrayal."
 },
 {
  "n": "Fenrir",
  "aka": "",
  "g": "divine",
  "role": "Divine beast of Ira",
  "s": "divine",
  "rel": "Mighty wolf ancestor of Setsuna; once fought and defeated Persephone."
 },
 {
  "n": "Tamamo no Mae",
  "aka": "",
  "g": "divine",
  "role": "Divine beast of Patientia",
  "s": "divine",
  "rel": "Nine-tailed kitsune divine beast; parent of Kiku through a mortal kitsune — a rare third-generation birth."
 },
 {
  "n": "Dracula",
  "aka": "",
  "g": "divine",
  "role": "Vampire legend",
  "s": "unknown",
  "rel": "Vampire whom Satella swears the elves must take revenge on, so other nations do not think elves have gone soft."
 },
 {
  "n": "The Mother of thousands of monsters",
  "aka": "",
  "g": "divine",
  "role": "Legendary monster-progenitor",
  "s": "unknown",
  "rel": "Monster-progenitor who, like the Necromancer King, failed to reach transcendence."
 },
 {
  "n": "The Necromancer King",
  "aka": "possibly Anubis",
  "g": "divine",
  "role": "Legendary failed god",
  "s": "divine",
  "rel": "Legendary figure said to have failed at transcendence; his absence from the Underworld aided the Wings’ escape with Drei’s soul — likely the same being as Anubis."
 },
 {
  "n": "Superbia",
  "aka": "the pride goddess",
  "g": "divine",
  "role": "Goddess of pride",
  "s": "divine",
  "rel": "Goddess credited with shaping the dragons’ fierce pride — the reason dragonkind refuses to bow to Sol by birthright."
 },
 {
  "n": "Traver",
  "aka": "",
  "g": "milaris",
  "role": "Namesake of Traver’s Mansion",
  "s": "unknown",
  "rel": "Namesake owner of Traver’s Mansion, where Theresa forges; referenced only by the location label, possibly Theresa’s family or an alias."
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

  /* ── Search filter ──────────────────────────────────────── */
  var rows = Array.prototype.slice.call(list.querySelectorAll(".ft-row"));
  var groupSections = Array.prototype.slice.call(list.querySelectorAll(".ft-group"));
  var noMatch = document.getElementById("ftNoMatch");

  function applyFilter() {
    var q = (search && search.value ? search.value : "").trim().toLowerCase();
    var shown = 0;
    rows.forEach(function (row) {
      var hit =
        !q ||
        row.getAttribute("data-name").toLowerCase().indexOf(q) !== -1 ||
        row.getAttribute("data-aka").toLowerCase().indexOf(q) !== -1 ||
        row.getAttribute("data-role").toLowerCase().indexOf(q) !== -1 ||
        row.getAttribute("data-rel").toLowerCase().indexOf(q) !== -1;
      row.style.display = hit ? "" : "none";
      if (hit) shown++;
    });
    if (shownEl) shownEl.textContent = String(shown);
    if (noMatch) noMatch.style.display = shown ? "none" : "block";

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

  if (search) {
    search.addEventListener("input", applyFilter);
    var form = search.closest("form");
    if (form) form.addEventListener("submit", function (e) { e.preventDefault(); });
  }
})();
