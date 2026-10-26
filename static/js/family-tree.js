/* Son of the Hero King — family tree data, charts, and index. */
(function () {
"use strict";
const BRANCHES = [
  {
    key:"luxuria", num:"01", title:"The House of Luxuria", color:"var(--accent)",
    tag:"Lustburg · the human crown",
    note:"Eight kings from Jupiter to Mars, and then a fifteen-year-old with two bloodlines in his veins. The short version: Neptune's children, a dragon's son, and one child whose father is a secret the palace has never admitted.",
    rows:[
      { label:"The tyrant", nodes:[
        { id:"uranus", name:"Uranus Luxuria", role:"Sixth King · ‘the Tyrant King’", meta:"† Sol’s great-grandfather", state:"dead" }
      ]},
      { label:"The puppet king", nodes:[
        { id:"neptune", name:"Neptune Luxuria", role:"Seventh King · ‘the Puppet King’", meta:"† Sol’s grandfather · created Lilith · killed by her", state:"dead" }
      ]},
      { label:"The hero & the dragon", nodes:[
        { id:"lilith", name:"Lilith Luxuria", role:"Queen Regent · sword saint", meta:"Homunculus · Mars’s half-sister · dying", state:"secret" },
        { id:"mars", name:"Mars Luxuria", role:"Eighth King · the Hero King", meta:"† Sol’s father · Lilith’s half-brother", state:"dead" },
        { id:"blaze", name:"Blaze Dragona Luxuria", role:"Dragon Queen · daughter of Tiamat", meta:"† Sol’s mother · Mars’s wife and mate", state:"dead" }
      ]},
      { label:"The last heirs", nodes:[
        { id:"lilin", name:"Lilin Luxuria", role:"Princess of Lustburg", meta:"Publicly Cerios’s daughter · secretly Mars’s", state:"secret" },
        { id:"sol", name:"Sol Dragona Luxuria", role:"Crown Prince · the sole Blessed heir", meta:"Son of Mars & Blaze · fifteen years old" }
      ]}
    ],
    links:[
      { a:"uranus", b:"neptune", type:"blood" },
      { a:"neptune", b:"mars", type:"blood" },
      { a:"neptune", b:"lilith", type:"secret", label:"created" },
      { a:"mars", b:"blaze", type:"marriage" },
      { a:["mars","blaze"], b:"sol", type:"blood" },
      { a:["mars","lilith"], b:"lilin", type:"secret", label:"secret parents" }
    ],
    notes:[
      "Neptune did not simply sire Lilith. He made her from his own sperm, a noblewoman’s egg, and a little Nightmare Queen blood (ch. 139). The court was told she was a concubine’s daughter — which is why she and Mars are called half-siblings.",
      "Lilin is publicly Cerios Gorfard’s daughter. Chapter 146 reveals she was made from Lilith’s and Mars’s genes. Sol does not know this by chapter 155.",
      "The crown does not pass by blood alone. Lilith and Lilin have no blessing and almost no Capacity, so Sol is the only legitimate heir (ch. 1, 41, 120).",
      "‘Dragona’ comes from his mother, ‘Luxuria’ from the royal house. The serial also spells it ‘Dragna’."
    ]
  },
  {
    key:"dragon", num:"02", title:"The Dragon Line", color:"var(--bar-c)",
    tag:"The Astral realm · Pride",
    note:"Tiamat’s line is the maternal half of Sol’s inheritance: a divine beast for a grandmother, a dragon for a mother, and two siblings who have never met him.",
    rows:[
      { label:"The dragon of pride", nodes:[
        { id:"tiamat", name:"Tiamat", role:"Divine beast of Pride", meta:"One of the fourteen · dimensional mage", state:"divine" }
      ]},
      { label:"Her children", nodes:[
        { id:"fafnir", name:"Fafnir", role:"Red dragon · Blaze’s brother", meta:"Still sulking about the bullying" },
        { id:"blaze", name:"Blaze", role:"Blaze Dragona · Sol’s mother", meta:"† Left the Astral realm for Mars", state:"dead" },
        { id:"kiyo", name:"Kiyo", role:"Blue dragon · Blaze’s sister", meta:"Chosen to train Sol at the trial" }
      ]},
      { label:"The mortal line", nodes:[
        { id:"sol", name:"Sol", role:"Half-dragon · Tiamat’s grandson", meta:"Son of Blaze and Mars Luxuria" }
      ]}
    ],
    links:[
      { a:"tiamat", b:"fafnir", type:"blood" },
      { a:"tiamat", b:"blaze", type:"blood" },
      { a:"tiamat", b:"kiyo", type:"blood" },
      { a:"blaze", b:"sol", type:"blood", label:"mother" }
    ],
    notes:[
      "Apsu was the only being Tiamat ever loved, and he died in the Age of Gods. The text never names Blaze’s father (ch. 148).",
      "Blaze left the Astral realm to contract with Mars. Fafnir organised the largest party in dragon history; Kiyo still smiles bitterly about the bullying (ch. 148).",
      "Asmodeus refuses to let dragons enter Lustburg, which is why Sol meets his grandmother and uncle only at the Astral trial (ch. 148).",
      "Tiamat is one of the fourteen divine beasts. Treat ‘grandmother’ as blood and title at once — divine kinship is not ordinary genealogy."
    ]
  },
  {
    key:"highland", num:"03", title:"House Highland", color:"var(--bar-a)",
    tag:"The north · sword and loyalty",
    note:"The ducal house that stayed loyal — until its own elder brother chose a granddaughter over a king. The tree is partly reconstructed: Tyr and Gerald are brothers, and their children married each other.",
    rows:[
      { label:"The two brothers", nodes:[
        { id:"tyr", name:"Tyr Highland", role:"Duke Highland · ‘god of war’", meta:"Paternal grandfather of Athena & Ares" },
        { id:"gerald", name:"Gerald Highland", role:"Ex-general · Sol’s father-figure", meta:"Maternal grandfather of Athena & Ares" }
      ]},
      { label:"The hinge", nodes:[
        { id:"parents", name:"Tyr’s son  ═  Gerald’s daughter", role:"Athena & Ares’s parents", meta:"† Names unstated · both died before ch. 155", state:"dead" }
      ]},
      { label:"The grandchildren", nodes:[
        { id:"athena", name:"Athena Highland", role:"Heir of Highland · Sol’s knight", meta:"Twin of Ares · granddaughter of both dukes" },
        { id:"ares", name:"Ares Highland", role:"Second heir of Highland", meta:"Twin of Athena · poisoned during the coup" },
        { id:"aurora", name:"Aurora", role:"Gerald’s granddaughter", meta:"Holy-daughter candidate · asleep", state:"asleep" }
      ]}
    ],
    links:[
      { a:"tyr", b:"gerald", type:"sibling", label:"brothers" },
      { a:"tyr", b:"parents", type:"blood" },
      { a:"gerald", b:"parents", type:"blood" },
      { a:"parents", b:"athena", type:"blood" },
      { a:"parents", b:"ares", type:"blood" },
      { a:"gerald", b:"aurora", type:"blood", label:"grandfather" }
    ],
    notes:[
      "Why this shape: Tyr and Gerald are brothers (ch. 77); Athena and Ares are twins (ch. 74); Gerald calls their dead father ‘my son-in-law’ (ch. 113). That makes Tyr the paternal grandfather and Gerald the maternal one.",
      "Ares calls Gerald ‘Uncle Gerald’; Athena calls him ‘Grandfather’. Both are true — he is their great-uncle by blood and their mother’s father.",
      "Aurora is Gerald’s granddaughter and the holy-daughter candidate whose illness bought his betrayal. She is Athena and Ares’s cousin (ch. 113, 123, 128).",
      "The Highland parents are never named. Their marriage is the hinge that makes the rest of the tree fit."
    ]
  },
  {
    key:"gorfard", num:"04", title:"House Gorfard", color:"var(--bar-b)",
    tag:"The east · gold, grudges, and a very bad ball",
    note:"A ducal house bound to the crown by Lilith’s sham marriage, and undone by it. Loki’s main line ends at chapter 136; the cadet children survive as barons on the border.",
    rows:[
      { label:"The ducal generation", nodes:[
        { id:"cerios", name:"Cerios Gorfard", role:"Loki’s brother · Lilith’s husband", meta:"† Publicly Lilin’s father · killed by Neptune", state:"dead" },
        { id:"lilith", name:"Lilith Luxuria", role:"The bride, in name only", meta:"See House of Luxuria", state:"xref" },
        { id:"loki", name:"Loki Gorfard", role:"Duke Gorfard", meta:"† The house’s last duke · hanged", state:"dead" },
        { id:"duchess", name:"Duchess Gorfard", role:"Loki’s wife", meta:"Name unstated · Leonard’s likely mother", state:"xref" }
      ]},
      { label:"The next generation", nodes:[
        { id:"lilin", name:"Lilin Luxuria", role:"Claimed Gorfard · true Luxuria", meta:"Loki’s ‘niece’ · refuses the Gorfard name", state:"secret" },
        { id:"concubines", name:"The cadet children", role:"Loki’s children by maids", meta:"No inheritance · conscripted after ch. 136", state:"group" },
        { id:"leonard", name:"Leonard Gorfard", role:"Heir of Gorfard", meta:"† Loki’s son · killed by Neun", state:"dead" }
      ]}
    ],
    links:[
      { a:"cerios", b:"loki", type:"sibling", label:"brothers" },
      { a:"cerios", b:"lilith", type:"marriage" },
      { a:"loki", b:"duchess", type:"marriage" },
      { a:["cerios","lilith"], b:"lilin", type:"secret", label:"claimed parents" },
      { a:["loki","duchess"], b:"leonard", type:"blood" },
      { a:"loki", b:"concubines", type:"bond", label:"by concubines" }
    ],
    notes:[
      "Cerios was Loki’s brother and Lilith’s husband in name only. A maid drugged him on the wedding night, and Neptune killed him soon after (ch. 141).",
      "Loki believed Lilin was Cerios’s daughter. Lilith still refused the girl the Gorfard name, which is one reason the house moved against Sol (ch. 65, 116).",
      "Leonard and Loki die in the ball’s aftermath; the duchy is stripped and demoted to Baron, its cadet children conscripted (ch. 121–136).",
      "Elsmere Gorfard, the church nun who betrayed Camelia, belongs to this bloodline, but her exact parentage is never given (ch. 41, 58)."
    ]
  },
  {
    key:"milaris", num:"05", title:"Milaris &amp; Travers", color:"var(--accent-2)",
    tag:"The south and west · two very different duchies",
    note:"Neither is a family in the ordinary sense: Milaris is one obsessed woman and her heir; Travers is a ledger with a duke attached.",
    rows:[
      { label:"The duchess and her lost betrothal", nodes:[
        { id:"mars", name:"Mars Luxuria", role:"The man she never married", meta:"See House of Luxuria", state:"xref" },
        { id:"arachne", name:"Arachne Milaris", role:"Duchess Milaris · ‘the black widow’", meta:"Mars’s original fiancée · never married" },
        { id:"hermes", name:"Hermes Travers", role:"Duke Travers", meta:"No family named in range" }
      ]},
      { label:"The heir", nodes:[
        { id:"niece", name:"The Milaris niece", role:"Arachne’s successor", meta:"Name unstated · suffocated by her aunt’s shadow", state:"group" }
      ]}
    ],
    links:[
      { a:"mars", b:"arachne", type:"bond", label:"betrothal, ended" },
      { a:"arachne", b:"niece", type:"blood", label:"aunt & heir" }
    ],
    notes:[
      "Arachne was Mars’s original fiancée. The betrothal ended when he married Blaze; she never married and still wears black (ch. 13, 41, 95).",
      "Her niece is her named successor, but the serial never gives her a name (ch. 56).",
      "Arachne’s love is why she would help revive Mars — and why the Wings thought they could use her (ch. 97, 123).",
      "Hermes Travers has no named relatives in range. His house is defined by profit, not blood (ch. 40, 126)."
    ]
  },
  {
    key:"gustav", num:"06", title:"House Gustav", color:"var(--yellow)",
    tag:"Greed Dike · dwarven steel",
    note:"The dwarven family behind Sol’s godmother, and the one branch where every important tie is chosen: a foster daughter, a surrogate daughter, a godson.",
    rows:[
      { label:"The magnate", nodes:[
        { id:"mongov", name:"Mongov Gustav", role:"Dwarf magnate", meta:"† Theresa’s father", state:"dead" }
      ]},
      { label:"His children", nodes:[
        { id:"theresa", name:"Theresa Gustav", role:"Master smith · Sol’s godmother", meta:"Lilin’s foster mother · Nuwa’s surrogate mother" },
        { id:"brother", name:"Theresa’s brother", role:"The traitor of the family", meta:"† Fate unstated · she took the house from him", state:"dead" }
      ]},
      { label:"The chosen daughters", nodes:[
        { id:"lilin", name:"Lilin", role:"Foster daughter", meta:"Raised by Theresa after running away", state:"xref" },
        { id:"nuwa", name:"Nuwa", role:"Surrogate daughter", meta:"Chimera · taken from Echidna’s castle" }
      ]}
    ],
    links:[
      { a:"mongov", b:"theresa", type:"blood" },
      { a:"mongov", b:"brother", type:"blood" },
      { a:"theresa", b:"lilin", type:"bond", label:"foster mother" },
      { a:"theresa", b:"nuwa", type:"bond", label:"surrogate mother" }
    ],
    notes:[
      "Theresa is Sol’s godmother (ch. 90) and Lilin’s foster mother (ch. 117). ‘Aunt Theresa’ is honorary, not blood (ch. 129).",
      "Her brother betrayed her and the family; she took control of the Gustav fortune and never forgave him (ch. 94).",
      "Nuwa is her surrogate daughter ‘in a way’ — Theresa took the chimera from Echidna’s castle and raised her (ch. 117).",
      "Theresa plans to leave Sol everything she owns, which makes this small branch a financial power in its own right (ch. 129)."
    ]
  },
  {
    key:"church", num:"07", title:"The Church of Castitas", color:"var(--orange)",
    tag:"Lustburg · the second court",
    note:"A goddess, her Supreme Daughter, and the angel niece who calls her aunt. Whether that aunt is blood is a question the text never answers.",
    rows:[
      { label:"The goddess", nodes:[
        { id:"castitas", name:"Castitas", role:"Goddess of chastity", meta:"One of the fourteen sisters", state:"divine" }
      ]},
      { label:"The two Supreme Daughters", nodes:[
        { id:"camelia", name:"Camelia Castitas", role:"Supreme Daughter · the Saint", meta:"Sol’s lover · named him as a baby · Blaze’s best friend" },
        { id:"iris", name:"Iris Industria", role:"Supreme Daughter of Industria", meta:"Chloe’s mother · never appears on-page" }
      ]},
      { label:"The next generation", nodes:[
        { id:"sol", name:"Sol", role:"The godson who became something else", meta:"See House of Luxuria", state:"xref" },
        { id:"chloe", name:"Chloe / Clover Industria", role:"Angel paladin · Holy Daughter candidate", meta:"Calls Camelia ‘aunt’ · Iris’s daughter" }
      ]}
    ],
    links:[
      { a:"castitas", b:"camelia", type:"bond", label:"patron" },
      { a:"camelia", b:"sol", type:"bond", label:"lover" },
      { a:"iris", b:"chloe", type:"blood", label:"mother" },
      ],
    notes:[
      "Camelia was born to ordinary villagers. Her blessing woke at ten and killed her parents and her whole village by accident (ch. 37, 62).",
      "Chloe calls Camelia ‘aunt’, but Camelia’s own family is dead and the link is never confirmed as blood (ch. 40, 58, 65).",
      "Iris Industria is Chloe’s mother and a Supreme Daughter. Chloe sheds her birth name for the flower-name Clover (ch. 30).",
      "Castitas calls Camelia ‘my little girl’ (ch. 149) — patron and goddess, not parent."
    ]
  },
  {
    key:"witches", num:"08", title:"The Witches of Walpurgisnacht", color:"color-mix(in srgb, var(--accent) 55%, var(--fg))",
    tag:"The four directions · the oldest chosen family",
    note:"Four sisters, one mother, and a contract that is not a marriage. Ambrosia’s coven is the oldest chosen family in the story — and the one most tangled with Sol’s.",
    rows:[
      { label:"The mother and the patron", nodes:[
        { id:"ambrosia", name:"Ambrosia", role:"First witch · ‘Mother’", meta:"Blood mother of Kali · mother of all witches" },
        { id:"asmodeus", name:"Asmodeus", role:"Divine beast of Lust", meta:"The witches’ patron · ‘husband’ by pact", state:"divine" }
      ]},
      { label:"The four directions", nodes:[
        { id:"medea", name:"Medea (Edea)", role:"Witch of Time · Sol’s teacher and mate", meta:"Jupiter’s former lover · the first crack in the curse" },
        { id:"persephone", name:"Persephone", role:"Witch of Life · healer", meta:"Sol’s would-be godmother · his lover" },
        { id:"kali", name:"Kali", role:"Witch of Destruction", meta:"Sol’s sister-in-law · bound as his maid" },
        { id:"freya", name:"Freya", role:"Witch of Space", meta:"Asked Sol for a child · refused" }
      ]},
      { label:"The man in the middle", nodes:[
        { id:"sol", name:"Sol", role:"The descendant and the mate", meta:"See House of Luxuria", state:"xref" }
      ]}
    ],
    links:[
      { a:"asmodeus", b:"ambrosia", type:"bond", label:"patron" },
      { a:"ambrosia", b:"medea", type:"bond" },
      { a:"ambrosia", b:"persephone", type:"bond" },
      { a:"ambrosia", b:"kali", type:"blood" },
      { a:"ambrosia", b:"freya", type:"bond" },
      { a:"medea", b:"sol", type:"bond", label:"mate" },
      { a:"persephone", b:"sol", type:"bond", label:"lover" }
    ],
    notes:[
      "Ambrosia is ‘Mother’ to every witch and Kali’s blood mother; the other three are daughters by coven and curse (ch. 143, 155).",
      "Medea is Edea — the same witch, the witch of time, Sol’s first teacher and later his mate (ch. 134, 144).",
      "Witches are called ‘the wives of Asmodeus’ by contract. It is not a literal marriage and gives him no children (ch. 11).",
      "All witches are infertile. Freya asked Sol for a child and was refused; Medea’s bond with him is the first crack in that curse (ch. 95)."
    ]
  },
  {
    key:"wratharis", num:"09", title:"Wratharis &amp; the Wolf Throne", color:"var(--cyan)",
    tag:"The republic of a hundred clans",
    note:"A republic where only the Blessed may rule — which is another way of saying a family feud with a parliament attached. Setsuna’s branch is what the war is actually about.",
    rows:[
      { label:"The murdered king and his brother", nodes:[
        { id:"king", name:"The Wolf King", role:"Setsuna’s father · the rightful king", meta:"† Killed in Lupus’s usurpation", state:"dead" },
        { id:"queen", name:"The Wolf Queen", role:"Setsuna’s mother", meta:"† Died with her husband", state:"dead" },
        { id:"lupus", name:"Lupus Ira", role:"King of Wratharis · ‘the Wolf King’", meta:"The late king’s brother · Setsuna’s uncle" }
      ]},
      { label:"The scattered household", nodes:[
        { id:"setsuna", name:"Setsuna Ira", role:"Princess of Wratharis · Storm Wolf", meta:"Sol’s lover · possible royal concubine" },
        { id:"mio", name:"Mio / Neun", role:"Servant · later Wings #9", meta:"Setsuna’s teacher · the last bow" },
        { id:"kio", name:"Kio", role:"Servant of the princess", meta:"Used himself as bait · fate unknown", state:"group" }
      ]},
      { label:"The man she chose", nodes:[
        { id:"sol", name:"Sol", role:"The foreign prince", meta:"See House of Luxuria", state:"xref" }
      ]}
    ],
    links:[
      { a:"king", b:"queen", type:"marriage" },
      { a:"king", b:"lupus", type:"sibling", label:"brothers" },
      { a:["king","queen"], b:"setsuna", type:"blood" },
      { a:"lupus", b:"setsuna", type:"bond", label:"uncle & usurper" },
      { a:"setsuna", b:"mio", type:"bond", label:"teacher" },
      { a:"setsuna", b:"sol", type:"bond", label:"lover" }
    ],
    notes:[
      "Lupus gained a blessing, killed his brother — Setsuna’s father — and sold Setsuna into slavery. The war is his attempt to keep what he took (ch. 39, 61, 154).",
      "Mio and Kio were servants, not siblings, though Setsuna names them with her parents. Mio survives as Neun of the Wings (ch. 61, 121).",
      "Only the Blessed may rule Wratharis. Setsuna’s royal blood makes her a claimant and a prize; Lupus wanted her to bear his heir (ch. 39, 64, 152).",
      "Neun was Setsuna’s teacher and still bows to her while serving the Wings. Her loyalty is the loose thread of the Wratharis plot (ch. 133, 154)."
    ]
  },
  {
    key:"phoenix", num:"10", title:"The Phoenix Court", color:"color-mix(in srgb, var(--accent) 70%, var(--orange))",
    tag:"The Astral realm · Gabriel’s line",
    note:"The Astral realm’s royal family, and the contract that may save Lilith. Three generations, one necromancer, and a goddess who arranged the match.",
    rows:[
      { label:"The divine phoenix", nodes:[
        { id:"gabriel", name:"Gabriel", role:"Divine phoenix", meta:"One of the fourteen divine beasts", state:"divine" }
      ]},
      { label:"The queen and her consort", nodes:[
        { id:"nephtys", name:"Nephtys", role:"Phoenix Queen", meta:"Gabriel’s daughter · Isis’s mother" },
        { id:"anubis", name:"Anubis", role:"Necromancer King · demi-god", meta:"Nephtys’s husband · Isis’s father", state:"divine" }
      ]},
      { label:"The heir", nodes:[
        { id:"isis", name:"Isis", role:"Phoenix–demon princess", meta:"Necromancer by inheritance · Sol’s first contract" }
      ]},
      { label:"The contract", nodes:[
        { id:"sol", name:"Sol", role:"The prince who needs Nirvana", meta:"See House of Luxuria", state:"xref" }
      ]}
    ],
    links:[
      { a:"gabriel", b:"nephtys", type:"blood" },
      { a:"nephtys", b:"anubis", type:"marriage" },
      { a:["nephtys","anubis"], b:"isis", type:"blood" },
      { a:"isis", b:"sol", type:"bond", label:"first contract" }
    ],
    notes:[
      "Gabriel → Nephtys → Isis is the Phoenix royal line; Anubis’s necromancy passes to his daughter (ch. 111).",
      "Isis is Sol’s ‘first contract’, the arrangement that opens Nirvana. The text wavers between betrothal and magical contract (ch. 111).",
      "Nephtys never regretted marrying Anubis, though the Phoenix court despises necromancy (ch. 111).",
      "This is the line Camelia bargained for when Sol was a child — the ‘direct daughter of the sacred Phoenix’ (ch. 32)."
    ]
  },
  {
    key:"wings", num:"11", title:"The Wings of Freedom", color:"var(--fg-dim)",
    tag:"The crimson lady’s cult",
    note:"A cult of ten numbered killers and their fallen-angel boss. Most of them are not related; the few family ties here are the ones that explain their grudges.",
    rows:[
      { label:"The boss and her captains", nodes:[
        { id:"nihil", name:"Nihil / Dahlia", role:"Leader · fallen angel · demi-god", meta:"Former Supreme Daughter of Industria" },
        { id:"zwei", name:"Zwei / Ibuki-Douji", role:"Wings #2 · oni", meta:"Shuten’s mother · led the Oni rebellion" },
        { id:"drei", name:"Drei / Hansel", role:"Wings #3 · necromancer", meta:"Darwin’s brother · 600 years old" },
        { id:"darwin", name:"Darwin", role:"Witch · reincarnator", meta:"† Drei’s sister · executed with him", state:"dead" }
      ]},
      { label:"The next generation and the rest", nodes:[
        { id:"numbered", name:"The numbered ten", role:"Ein · Funf · Sechs · Atch · Neun · Zehn", meta:"Five Kings, five Dukes · Neun is Mio", state:"group" },
        { id:"shuten", name:"Shuten", role:"Leader of the Oni · Wratharis", meta:"Ibuki-Douji’s daughter" }
      ]}
    ],
    links:[
      { a:"nihil", b:"numbered", type:"bond", label:"commands" },
      { a:"zwei", b:"shuten", type:"blood", label:"mother" },
      { a:"drei", b:"darwin", type:"sibling", label:"siblings" }
    ],
    notes:[
      "Drei is Hansel, executed centuries ago with his sister Darwin for the Human Genesis theory (ch. 151).",
      "Zwei is Ibuki-Douji, Shuten’s mother, who led a failed Oni rebellion and fled to Wratharis (ch. 135).",
      "Neun is Mio, Setsuna’s former servant and teacher. Funf may be Nuwa’s sibling — unconfirmed (ch. 121, 130).",
      "Nihil was Dahlia, Supreme Daughter of Industria, before she discarded the name. She has no named family (ch. 133)."
    ]
  },
  {
    key:"bonds", num:"12", title:"Sol’s Chosen Family", color:"var(--accent-bright)",
    tag:"The centre of the map",
    note:"Blood is only half of it. Sol’s real family is a wet nurse, a traitorous uncle, a goddess’s saint, four witches, and a wolf princess.",
    rows:[
      { label:"", nodes:[
        { id:"sol", name:"Sol Dragona Luxuria", role:"Crown Prince · half-dragon · fifteen", meta:"Everything above converges here" }
      ]}
    ],
    links:[],
    board:[
      { title:"Blood", sub:"as far as he knows", items:[
        ["Mars","father †"],["Blaze","mother †"],["Neptune","grandfather †"],["Uranus","great-grandfather †"],
        ["Lilith","aunt & guardian"],["Lilin","cousin"],["Tiamat","grandmother"],["Jupiter","ancestor"]
      ]},
      { title:"Chosen family", sub:"the ties he actually lives by", items:[
        ["Milia","wet nurse · foster mother · lover"],["Gerald","father-figure · betrayed him"],["Camelia","named him · lover · estranged"],
        ["Theresa","godmother"],["Medea","teacher · mate"],["Setsuna","knight · lover"],["Persephone","lover"],["Nuwa","battle maid"],["Clara","future assistant"],["Ketia","Crown’s Shadow"]
      ]},
      { title:"Unfinished", sub:"promises, contracts, maybes", items:[
        ["Isis","first contract · six days"],["Athena","knight · possible concubine"],["Freya","asked for a child"],["Arachne","Mars’s ex-fiancée"],
        ["Kali","sister-in-law · maid"],["Chloe","ally"],["Eridina","King of Greed Dike"],["Anastasia","Envilyan princess"]
      ]}
    ],
    notes:[
      "Chosen family matters as much as blood: Milia is wet nurse, foster mother and lover; Gerald is the father-figure who betrayed him; Theresa is godmother; Camelia gave him his name.",
      "Romances to ch. 155: Milia, Setsuna, Camelia, Medea (mate), Persephone. Lilin’s betrothal is a childhood promise; Isis is a contract; Athena and Freya are interested but unconfirmed.",
      "The secret at the centre: Lilin is his half-sister. He does not know it by 155; the reader does.",
      "Sol is still crown prince, not king. The Astral trial, not the crown, is the next threshold."
    ]
  }
];

const INDEX = [
  {n:"Jupiter", aka:"the Conqueror", b:"luxuria", role:"Founder-King of Lustburg", rel:"Ancestor of Sol; father of Pluto", s:"dead"},
  {n:"Pluto", aka:"the Peaceful", b:"luxuria", role:"Second King", rel:"Son of Jupiter; father of Venus", s:"dead"},
  {n:"Venus", aka:"the Bloodthirsty", b:"luxuria", role:"Third ruler", rel:"Daughter of Pluto; granddaughter of Jupiter", s:"dead"},
  {n:"Mercury", aka:"", b:"luxuria", role:"Fourth ruler", rel:"Dynastic link only; no family scene", s:"dead"},
  {n:"Saturn", aka:"", b:"luxuria", role:"Fifth ruler", rel:"Dynastic link only; no family scene", s:"dead"},
  {n:"Uranus Luxuria", aka:"the Tyrant King", b:"luxuria", role:"Sixth King", rel:"Sol’s great-grandfather; Neptune’s father", s:"dead"},
  {n:"Neptune Luxuria", aka:"the Puppet King", b:"luxuria", role:"Seventh King; experimenter", rel:"Sol’s grandfather; Mars and Lilith’s father; created Lilith", s:"dead"},
  {n:"Mars Luxuria", aka:"the Hero King", b:"luxuria", role:"Eighth King", rel:"Sol’s father; Lilith’s half-brother; Blaze’s husband; Lilin’s secret father", s:"dead"},
  {n:"Blaze Dragona", aka:"the dragon wife", b:"luxuria", role:"Dragon Queen; Tiamat’s daughter", rel:"Sol’s mother; Mars’s wife and mate", s:"dead"},
  {n:"Sol Dragona Luxuria", aka:"the crown prince", b:"luxuria", role:"Crown Prince of Lustburg, 15", rel:"Son of Mars and Blaze; Lilith’s nephew; Lilin’s cousin and secret half-brother", s:"alive"},
  {n:"Lilith Luxuria", aka:"the sword saint", b:"luxuria", role:"Queen Regent; homunculus", rel:"Neptune’s creation; Mars’s half-sister; Lilin’s mother; Sol’s guardian", s:"dying"},
  {n:"Lilin Luxuria", aka:"the princess", b:"luxuria", role:"Princess of Lustburg", rel:"Publicly Cerios’s daughter; secretly Mars’s; Sol’s cousin", s:"alive"},
  {n:"Tarrik Luxuria", aka:"", b:"luxuria", role:"General of Lustburg", rel:"Kinsman of the royal house; exact link unstated", s:"dead"},
  {n:"Tiamat", aka:"dragon of Pride", b:"dragon", role:"Divine beast of Pride", rel:"Blaze’s mother; Sol’s grandmother; one of the fourteen", s:"divine"},
  {n:"Fafnir", aka:"", b:"dragon", role:"Red dragon", rel:"Son of Tiamat; Blaze’s brother; Sol’s uncle", s:"alive"},
  {n:"Kiyo", aka:"", b:"dragon", role:"Blue dragon", rel:"Daughter of Tiamat; Blaze’s sister; Sol’s aunt", s:"alive"},
  {n:"Apsu", aka:"", b:"dragon", role:"Tiamat’s only love", rel:"Died in the Age of Gods; not named as Blaze’s father", s:"dead"},
  {n:"Tyr Highland", aka:"god of war", b:"highland", role:"Duke Highland", rel:"Gerald’s brother; Athena and Ares’s paternal grandfather", s:"alive"},
  {n:"Gerald Highland", aka:"Uncle Gerald", b:"highland", role:"Ex-general; Sol’s father-figure", rel:"Tyr’s brother; Athena and Ares’s maternal grandfather; Aurora’s grandfather", s:"alive"},
  {n:"Athena Highland", aka:"Sir Athena", b:"highland", role:"Heir of Highland; Sol’s knight", rel:"Twin of Ares; granddaughter of Tyr and Gerald", s:"alive"},
  {n:"Ares Highland", aka:"", b:"highland", role:"Second heir of Highland", rel:"Twin of Athena; grandson of Tyr and Gerald", s:"alive"},
  {n:"Aurora", aka:"", b:"highland", role:"Holy-daughter candidate", rel:"Gerald’s granddaughter; Athena and Ares’s cousin; asleep", s:"asleep"},
  {n:"Athena & Ares’s parents", aka:"Tyr’s son and Gerald’s daughter", b:"highland", role:"The hinge of the house", rel:"Both dead; names unstated; Gerald calls their father ‘my son-in-law’", s:"dead"},
  {n:"Arachne Milaris", aka:"the black widow", b:"milaris", role:"Duchess Milaris", rel:"Mars’s original fiancée; never married; no children", s:"alive"},
  {n:"The Milaris niece", aka:"", b:"milaris", role:"Arachne’s successor", rel:"Arachne’s niece; name unstated", s:"alive"},
  {n:"Hermes Travers", aka:"", b:"milaris", role:"Duke Travers", rel:"No family named in range", s:"alive"},
  {n:"Loki Gorfard", aka:"the last duke", b:"gorfard", role:"Duke Gorfard", rel:"Cerios’s brother; Leonard’s father; Lilin’s public uncle", s:"dead"},
  {n:"Cerios Gorfard", aka:"", b:"gorfard", role:"Lilith’s husband in name only", rel:"Loki’s brother; publicly Lilin’s father; killed by Neptune", s:"dead"},
  {n:"Duchess Gorfard", aka:"", b:"gorfard", role:"Loki’s wife", rel:"Leonard’s likely mother; name unstated", s:"unknown"},
  {n:"Leonard Gorfard", aka:"", b:"gorfard", role:"Heir of Gorfard", rel:"Loki’s son; killed by Neun", s:"dead"},
  {n:"The Gorfard cadets", aka:"concubine children", b:"gorfard", role:"Cadet branch", rel:"Loki’s children by maids; no inheritance; conscripted", s:"alive"},
  {n:"Alfred", aka:"", b:"gorfard", role:"Leonard’s aged servant", rel:"No kin stated; the Gorfard hand in the ball", s:"unknown"},
  {n:"Mongov Gustav", aka:"", b:"gustav", role:"Dwarf magnate", rel:"Theresa’s father", s:"dead"},
  {n:"Theresa Gustav", aka:"Aunt Theresa", b:"gustav", role:"Master smith; Sol’s godmother", rel:"Mongov’s daughter; Lilin’s foster mother; Nuwa’s surrogate mother", s:"alive"},
  {n:"Theresa’s brother", aka:"", b:"gustav", role:"Traitor of the Gustav family", rel:"Theresa’s brother; fate unstated", s:"unknown"},
  {n:"Camelia Castitas", aka:"the Saint", b:"church", role:"Supreme Daughter of Castitas", rel:"Sol’s lover; Chloe’s ‘aunt’; Blaze’s best friend; named Sol", s:"alive"},
  {n:"Iris Industria", aka:"", b:"church", role:"Supreme Daughter of Industria", rel:"Chloe’s mother; never appears on-page", s:"unknown"},
  {n:"Chloe / Clover Industria", aka:"", b:"church", role:"Angel paladin; Holy Daughter candidate", rel:"Iris’s daughter; calls Camelia ‘aunt’", s:"alive"},
  {n:"Lily Castitas", aka:"", b:"church", role:"Former Supreme Daughter", rel:"Camelia’s predecessor; no kin stated", s:"unknown"},
  {n:"Elsmere Gorfard", aka:"", b:"church", role:"Senior nun of Castitas", rel:"Gorfard by blood; Camelia’s former favourite; exact parentage unstated", s:"unknown"},
  {n:"The white knight", aka:"", b:"church", role:"Paladin; Camelia’s admirer", rel:"No kin stated; tricked into attacking Sol", s:"unknown"},
  {n:"Ambrosia", aka:"Mother", b:"witches", role:"First witch; demi-god", rel:"Mother of Medea, Persephone, Kali and Freya; Kali by blood", s:"alive"},
  {n:"Medea (Edea)", aka:"witch of time", b:"witches", role:"Witch of Time; Sol’s teacher", rel:"Ambrosia’s daughter; Kali’s sister; Jupiter’s former lover; Sol’s mate", s:"alive"},
  {n:"Persephone", aka:"witch of life", b:"witches", role:"Witch of Life; healer", rel:"Ambrosia’s daughter; Medea’s sister; Sol’s lover", s:"alive"},
  {n:"Kali", aka:"witch of destruction", b:"witches", role:"Witch of Destruction; reincarnator", rel:"Ambrosia’s blood daughter; Medea’s sister; Sol’s sister-in-law and maid", s:"alive"},
  {n:"Freya", aka:"witch of space", b:"witches", role:"Witch of Space", rel:"Ambrosia’s daughter; Medea’s sister; asked Sol for a child", s:"alive"},
  {n:"Setsuna Ira", aka:"the Gladiator Queen", b:"wratharis", role:"Princess of Wratharis; Storm Wolf", rel:"Daughter of the late king; Lupus’s niece; Sol’s lover", s:"alive"},
  {n:"The Wolf King", aka:"", b:"wratharis", role:"Setsuna’s father", rel:"Lupus’s brother; killed in the usurpation", s:"dead"},
  {n:"The Wolf Queen", aka:"", b:"wratharis", role:"Setsuna’s mother", rel:"Died with her husband", s:"dead"},
  {n:"Lupus Ira", aka:"the Wolf King", b:"wratharis", role:"King of Wratharis; usurper", rel:"Setsuna’s uncle; killed her father; wants her as a consort", s:"alive"},
  {n:"Mio / Neun", aka:"Wings #9", b:"wings", role:"Wratharis servant; Wings assassin", rel:"Setsuna’s former teacher; served her family; escaped with the Holy Sword", s:"alive"},
  {n:"Kio", aka:"", b:"wratharis", role:"Servant of the princess", rel:"Used himself as bait; fate unknown", s:"unknown"},
  {n:"Kiku Patientia", aka:"Miko-sama", b:"wratharis", role:"Holy Daughter of Patientia; kitsune", rel:"No kin named; Sakura’s patron; Shuten’s old ally", s:"alive"},
  {n:"Sakura", aka:"", b:"wratharis", role:"Kiku’s heir and future Miko", rel:"No blood link stated", s:"alive"},
  {n:"Shuten", aka:"", b:"wratharis", role:"Leader of the Oni; Wratharis", rel:"Ibuki-Douji’s daughter; Kiku’s friend", s:"alive"},
  {n:"Ibuki-Douji / Zwei", aka:"Wings #2", b:"wings", role:"Oni rebel; Wings captain", rel:"Shuten’s mother; led the failed Oni rebellion", s:"alive"},
  {n:"Sun Wukong", aka:"", b:"wratharis", role:"Stone Monkey clan leader", rel:"No kin named; beat Fafnir and took his blood", s:"alive"},
  {n:"Gabriel", aka:"the sacred Phoenix", b:"phoenix", role:"Divine phoenix", rel:"Nephtys’s mother; Isis’s grandmother", s:"divine"},
  {n:"Nephtys", aka:"", b:"phoenix", role:"Phoenix Queen", rel:"Gabriel’s daughter; Anubis’s wife; Isis’s mother", s:"alive"},
  {n:"Anubis", aka:"", b:"phoenix", role:"Necromancer King; demi-god", rel:"Isis’s father; Nephtys’s husband", s:"divine"},
  {n:"Isis", aka:"", b:"phoenix", role:"Phoenix–demon princess", rel:"Daughter of Nephtys and Anubis; Sol’s first contract", s:"alive"},
  {n:"Nihil / Dahlia", aka:"the crimson lady", b:"wings", role:"Leader of the Wings; fallen angel", rel:"Former Supreme Daughter of Industria; no kin named", s:"alive"},
  {n:"Drei / Hansel", aka:"Wings #3", b:"wings", role:"Necromancer; body-jumper", rel:"Darwin’s brother; executed centuries ago", s:"alive"},
  {n:"Darwin", aka:"", b:"wings", role:"Witch; reincarnator", rel:"Drei’s sister; executed with him", s:"dead"},
  {n:"Zehn", aka:"Wings #10", b:"wings", role:"Vampire daywalker", rel:"No kin named; captured by Theresa", s:"captive"},
  {n:"Atch", aka:"Wings #8", b:"wings", role:"Mechanic and gunsmith", rel:"No kin named", s:"alive"},
  {n:"Ein", aka:"Wings #1", b:"wings", role:"Artificer; King-class", rel:"No kin named", s:"alive"},
  {n:"Funf", aka:"Wings #5", b:"wings", role:"Numbered member", rel:"Rumoured to be Nuwa’s sibling; unconfirmed", s:"alive"},
  {n:"Sechs", aka:"Wings #6", b:"wings", role:"Numbered member", rel:"No kin named", s:"alive"},
  {n:"Milia", aka:"Number 26", b:"household", role:"Head maid; Sol’s wet nurse", rel:"Foster mother and lover of Sol; Eric’s widow; the only successful Genesis experiment", s:"alive"},
  {n:"Eric ‘Bull’", aka:"", b:"household", role:"Milia’s husband", rel:"Cowman; betrayed the experiment; killed by Milia", s:"dead"},
  {n:"Nuwa", aka:"", b:"household", role:"Chimera battle maid", rel:"Likely Echidna’s daughter; Theresa’s surrogate daughter; Sol’s maid", s:"alive"},
  {n:"Clara", aka:"", b:"household", role:"Elf envoy of Southern Pride", rel:"Lilin’s friend; Sol’s future assistant", s:"alive"},
  {n:"Ketia", aka:"", b:"household", role:"Crown’s Shadow; maid", rel:"No kin named; guarded Lilin", s:"alive"},
  {n:"Berthold", aka:"", b:"household", role:"Crown’s Shadow; bartender", rel:"No kin named; killed, his body used by Drei", s:"dead"},
  {n:"Edgar", aka:"", b:"household", role:"Crown’s Shadow; jeweller", rel:"No kin named; one of the Fingers", s:"alive"},
  {n:"Aria", aka:"", b:"household", role:"Crown’s Shadow; madam", rel:"No kin named; one of the Fingers", s:"alive"},
  {n:"Alpha, Beta & Omega", aka:"", b:"household", role:"Lilith’s three eldest maids", rel:"No kin named; Wratharis veterans", s:"alive"},
  {n:"Anastasia Invidia", aka:"", b:"household", role:"Princess of Envilya", rel:"No kin named; Clara’s friend", s:"alive"},
  {n:"Eridina", aka:"", b:"household", role:"King of Greed Dike", rel:"No kin named; wants a channel to Theresa", s:"alive"},
  {n:"Castitas", aka:"", b:"divine", role:"Goddess of chastity", rel:"Camelia’s patron; one of fourteen sisters", s:"divine"},
  {n:"Luxuria", aka:"", b:"divine", role:"Goddess of lust", rel:"Sol’s patron; one of fourteen sisters", s:"divine"},
  {n:"Ira", aka:"", b:"divine", role:"Goddess of wrath", rel:"Lupus’s patron; one of fourteen sisters", s:"divine"},
  {n:"Gula", aka:"", b:"divine", role:"Goddess of gluttony", rel:"Echidna’s patron; one of fourteen sisters", s:"divine"},
  {n:"Industria", aka:"", b:"divine", role:"Goddess of diligence", rel:"Nihil’s former patron; one of fourteen sisters", s:"divine"},
  {n:"Patientia", aka:"", b:"divine", role:"Goddess of patience", rel:"Kiku’s patron; one of fourteen sisters", s:"divine"},
  {n:"Asmodeus", aka:"the old snake", b:"divine", role:"Divine beast of Lust", rel:"Witches’ patron and ‘husband’ by pact; Echidna’s former lover", s:"divine"},
  {n:"Echidna", aka:"mother of monsters", b:"divine", role:"Demon Queen of Gluttony Foss", rel:"Mother of all chimeras; killed Mars and Blaze; sealed, not dead", s:"sealed"},
  {n:"The Nightmare Queen", aka:"Succubus Queen", b:"divine", role:"Ancient succubus queen", rel:"Her blood was used to create Lilith", s:"dead"},
  {n:"Mother Goddess of Chaos", aka:"", b:"divine", role:"The goddess above the fourteen", rel:"Mother of the goddesses; the Wings want her unsealed", s:"sealed"}
];

/* ─────────────────────────────────────────────────────────────
   Render: branch panels
   ───────────────────────────────────────────────────────────── */
const BRANCH_LABEL = {
  luxuria: "Luxuria", dragon: "Dragon line", highland: "Highland", gorfard: "Gorfard",
  milaris: "Milaris & Travers", gustav: "Gustav", church: "Church", witches: "Witches",
  wratharis: "Wratharis", phoenix: "Phoenix", wings: "Wings", household: "Household", divine: "Gods"
};

const STATUS_LABEL = {
  alive: "Alive", dead: "Dead", divine: "Divine", sealed: "Sealed",
  asleep: "Asleep", unknown: "Unknown", captive: "Captive", dying: "Dying"
};

const CHART_LINKS = new WeakMap();
const chartRoot = document.getElementById("charts");
const NS = "http://www.w3.org/2000/svg";

function esc(str) {
  return String(str).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

function makeNode(branchKey, n) {
  const el = document.createElement("article");
  el.className = "node" + (n.state ? " is-" + n.state : "");
  el.id = branchKey + "-" + n.id;
  el.dataset.node = n.id;
  el.tabIndex = 0;
  el.setAttribute("role", "button");
  el.setAttribute("aria-label", n.name + " — trace family lines");
  el.innerHTML =
    '<h3 class="node-name">' + esc(n.name) + "</h3>" +
    '<p class="node-role">' + esc(n.role) + "</p>" +
    (n.meta ? '<p class="node-meta">' + esc(n.meta) + "</p>" : "");
  return el;
}

BRANCHES.forEach(branch => {
  const sec = document.createElement("section");
  sec.className = "branch";
  sec.id = branch.key;
  sec.style.setProperty("--house", branch.color);

  const head = document.createElement("header");
  head.className = "branch-head";
  head.innerHTML =
    '<div class="branch-num">' + branch.num + "</div>" +
    "<div>" +
      '<h2 class="branch-title">' + branch.title + "</h2>" +
      '<p class="branch-note">' + branch.note + "</p>" +
      '<span class="branch-tag">' + branch.tag + "</span>" +
    "</div>";
  sec.appendChild(head);

  const scroll = document.createElement("div");
  scroll.className = "chart-scroll";
  const chart = document.createElement("div");
  chart.className = "chart";
  chart.dataset.branch = branch.key;

  branch.rows.forEach(row => {
    const gen = document.createElement("div");
    gen.className = "gen";
    if (row.label) {
      const lab = document.createElement("div");
      lab.className = "gen-label";
      lab.textContent = row.label;
      gen.appendChild(lab);
    }
    const rowEl = document.createElement("div");
    rowEl.className = "row";
    row.nodes.forEach(n => rowEl.appendChild(makeNode(branch.key, n)));
    gen.appendChild(rowEl);
    chart.appendChild(gen);
  });

  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("class", "links");
  svg.setAttribute("aria-hidden", "true");
  chart.prepend(svg);
  CHART_LINKS.set(chart, branch.links || []);
  scroll.appendChild(chart);
  sec.appendChild(scroll);

  if (branch.board) {
    const board = document.createElement("div");
    board.className = "bond-board";
    branch.board.forEach(col => {
      const div = document.createElement("div");
      div.className = "bond-col";
      div.innerHTML = "<h4>" + esc(col.title) + " <span>" + esc(col.sub) + "</span></h4>" +
        '<div class="bond-list">' + col.items.map(([name, note]) =>
          '<span class="bond">' + esc(name) + " <small>" + esc(note) + "</small></span>"
        ).join("") + "</div>";
      board.appendChild(div);
    });
    sec.appendChild(board);
  }

  if (branch.notes) {
    const notes = document.createElement("div");
    notes.className = "branch-notes";
    branch.notes.forEach(n => {
      const p = document.createElement("p");
      p.textContent = n;
      notes.appendChild(p);
    });
    sec.appendChild(notes);
  }

  chartRoot.appendChild(sec);
});

/* Live counts */
const countEl = document.getElementById("ftCount");
if (countEl) countEl.textContent = INDEX.length;
const indexCountEl = document.getElementById("ftIndexCount");
if (indexCountEl) indexCountEl.textContent = INDEX.length + " entries";

/* ─────────────────────────────────────────────────────────────
   Connectors: measured from the laid-out cards, so the charts
   reflow on any screen without hard-coded coordinates.
   ───────────────────────────────────────────────────────────── */
function svgEl(tag, attrs) {
  const el = document.createElementNS(NS, tag);
  for (const k in attrs) el.setAttribute(k, attrs[k]);
  return el;
}

function boxFor(chart, cRect, id) {
  const el = chart.querySelector('[data-node="' + id + '"]');
  if (!el) return null;
  const r = el.getBoundingClientRect();
  return {
    x: r.left - cRect.left, y: r.top - cRect.top,
    w: r.width, h: r.height,
    cx: r.left - cRect.left + r.width / 2,
    cy: r.top - cRect.top + r.height / 2
  };
}

function drawChart(chart) {
  const links = CHART_LINKS.get(chart) || [];
  const svg = chart.querySelector(".links");
  if (!svg) return;

  const cRect = chart.getBoundingClientRect();
  const W = Math.ceil(chart.offsetWidth);
  const H = Math.ceil(chart.offsetHeight);
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.style.width = W + "px";
  svg.style.height = H + "px";
  while (svg.firstChild) svg.removeChild(svg.firstChild);

  links.forEach((link, i) => {
    const aIds = Array.isArray(link.a) ? link.a : [link.a];
    const aBoxes = aIds.map(id => boxFor(chart, cRect, id)).filter(Boolean);
    const bBox = boxFor(chart, cRect, link.b);
    if (!aBoxes.length || !bBox) return;

    const ax = aBoxes.reduce((s, b) => s + b.cx, 0) / aBoxes.length;
    const ayBase = Math.max(...aBoxes.map(b => b.y + b.h));
    const type = link.type || "blood";
    const cls = "l-" + type;
    let path, labelX, labelY;

    const sameRow = aBoxes.length === 1 &&
      Math.abs(aBoxes[0].cy - bBox.cy) < 18 &&
      Math.abs(aBoxes[0].cx - bBox.cx) > 120;

    if (type === "sibling") {
      const a = aBoxes[0];
      const topY = Math.min(a.y, bBox.y) - 16;
      path = svgEl("path", {
        d: "M" + a.cx + " " + a.y + " L" + a.cx + " " + topY +
           " L" + bBox.cx + " " + topY + " L" + bBox.cx + " " + bBox.y,
        "class": cls
      });
      svg.appendChild(path);
      labelX = (a.cx + bBox.cx) / 2;
      labelY = topY - 5;
    } else if (type === "marriage" && sameRow) {
      const a = aBoxes[0];
      const left = a.cx < bBox.cx ? a : bBox;
      const right = a.cx < bBox.cx ? bBox : a;
      const x1 = left.x + left.w, x2 = right.x;
      const y = (left.cy + right.cy) / 2;
      path = svgEl("path", { d: "M" + x1 + " " + y + " L" + x2 + " " + y, "class": cls });
      svg.appendChild(path);
      const mx = (x1 + x2) / 2;
      svg.appendChild(svgEl("rect", {
        x: mx - 4.2, y: y - 4.2, width: 8.4, height: 8.4,
        transform: "rotate(45 " + mx + " " + y + ")",
        "class": "l-diamond"
      }));
      labelX = mx; labelY = y - 8;
    } else if ((type === "bond" || type === "secret") && sameRow) {
      const a = aBoxes[0];
      const left = a.cx < bBox.cx ? a : bBox;
      const right = a.cx < bBox.cx ? bBox : a;
      const x1 = left.x + left.w, x2 = right.x;
      const y = (left.cy + right.cy) / 2;
      path = svgEl("path", { d: "M" + x1 + " " + y + " L" + x2 + " " + y, "class": cls });
      svg.appendChild(path);
      svg.appendChild(svgEl("circle", {
        cx: (x1 + x2) / 2, cy: y, r: 2, "class": "l-node"
      }));
      labelX = null; labelY = null;
    } else {
      const sx = ax, sy = ayBase + 2;
      const tx = bBox.cx, ty = bBox.y - 6;
      const my = sy + (ty - sy) / 2;
      path = svgEl("path", {
        d: "M" + sx + " " + sy + " C " + sx + " " + my + ", " + tx + " " + my + ", " + tx + " " + ty,
        "class": cls
      });
      svg.appendChild(path);
      if (type === "blood" || type === "secret") {
        svg.appendChild(svgEl("circle", {
          cx: tx, cy: ty, r: 2.3, "class": "l-node"
        }));
      }
      if (link.label) {
        const pt = path.getPointAtLength(path.getTotalLength() / 2);
        labelX = pt.x; labelY = pt.y - 6;
      } else {
        labelX = tx; labelY = ty - 14;
      }
    }

    path.dataset.link = i;
    path.dataset.a = aIds.join(",");
    path.dataset.b = link.b;

    if (link.label && labelX !== null) {
      const text = svgEl("text", {
        x: labelX, y: labelY, "text-anchor": "middle", "class": "l-label"
      });
      text.textContent = link.label;
      svg.appendChild(text);
    }
  });

  if (chart.dataset.traced) {
    paintTrace(chart, chart.dataset.traced);
  } else if (chart.classList.contains("tracing")) {
    clearTrace(chart);
  }
}

function paintTrace(chart, id) {
  const links = CHART_LINKS.get(chart) || [];
  const litNodes = new Set([id]);
  const litLinks = new Set();
  links.forEach((l, i) => {
    const as = Array.isArray(l.a) ? l.a : [l.a];
    const bs = [l.b];
    if (as.includes(id) || bs.includes(id)) {
      as.forEach(x => litNodes.add(x));
      bs.forEach(x => litNodes.add(x));
      litLinks.add(String(i));
    }
  });
  chart.dataset.traced = id;
  chart.classList.add("tracing");
  chart.querySelectorAll(".node").forEach(n => {
    n.classList.toggle("is-lit", litNodes.has(n.dataset.node));
  });
  chart.querySelectorAll(".links path").forEach(p => {
    p.classList.toggle("is-lit", litLinks.has(p.dataset.link));
  });
}

function clearTrace(chart) {
  delete chart.dataset.traced;
  chart.classList.remove("tracing");
  chart.querySelectorAll(".node").forEach(n => n.classList.remove("is-lit"));
  chart.querySelectorAll(".links path").forEach(p => p.classList.remove("is-lit"));
}

document.querySelectorAll(".chart").forEach(chart => {
  chart.addEventListener("click", e => {
    const node = e.target.closest(".node");
    if (!node) return;
    if (chart.dataset.traced === node.dataset.node) clearTrace(chart);
    else paintTrace(chart, node.dataset.node);
  });
  chart.addEventListener("keydown", e => {
    const node = e.target.closest(".node");
    if (!node) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (chart.dataset.traced === node.dataset.node) clearTrace(chart);
      else paintTrace(chart, node.dataset.node);
    }
    if (e.key === "Escape") clearTrace(chart);
  });
});

document.addEventListener("click", e => {
  if (!e.target.closest(".chart")) {
    document.querySelectorAll(".chart.tracing").forEach(clearTrace);
  }
});

/* Redraw on layout change */
let raf = 0;
function scheduleDraw() {
  if (raf) return;
  raf = requestAnimationFrame(() => {
    raf = 0;
    document.querySelectorAll(".chart").forEach(drawChart);
  });
}
window.addEventListener("resize", scheduleDraw);
if ("ResizeObserver" in window) {
  const ro = new ResizeObserver(scheduleDraw);
  document.querySelectorAll(".chart").forEach(c => ro.observe(c));
}
window.addEventListener("load", scheduleDraw);
window.addEventListener("pageshow", scheduleDraw);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(scheduleDraw);
scheduleDraw();

/* ─────────────────────────────────────────────────────────────
   The index table
   ───────────────────────────────────────────────────────────── */
const tbody = document.getElementById("indexBody");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const filters = document.getElementById("filters");
let activeBranch = "all";

const filterList = [["all", "All"], ...Object.entries(BRANCH_LABEL)];
filterList.forEach(([key, label]) => {
  const btn = document.createElement("button");
  btn.className = "filter" + (key === "all" ? " is-on" : "");
  btn.type = "button";
  btn.dataset.filter = key;
  btn.textContent = label;
  btn.addEventListener("click", () => {
    activeBranch = key;
    filters.querySelectorAll(".filter").forEach(b => b.classList.toggle("is-on", b === btn));
    renderIndex();
  });
  filters.appendChild(btn);
});

function renderIndex() {
  const q = (searchInput.value || "").trim().toLowerCase();
  const rows = INDEX.filter(p => {
    if (activeBranch !== "all" && p.b !== activeBranch) return false;
    if (!q) return true;
    return [p.n, p.aka, p.role, p.rel, BRANCH_LABEL[p.b], STATUS_LABEL[p.s]]
      .join(" ").toLowerCase().includes(q);
  });
  tbody.innerHTML = rows.map(p =>
    "<tr>" +
      '<td class="who">' + esc(p.n) + (p.aka ? '<span class="aka">' + esc(p.aka) + "</span>" : "") + "</td>" +
      '<td class="house">' + esc(BRANCH_LABEL[p.b]) + "</td>" +
      "<td>" + esc(p.role) + "</td>" +
      '<td class="rel">' + esc(p.rel) + "</td>" +
      '<td class="status"><span class="ft-dot s-' + p.s + '"></span>' + esc(STATUS_LABEL[p.s]) + "</td>" +
    "</tr>"
  ).join("");
  emptyState.style.display = rows.length ? "none" : "block";
}
searchInput.addEventListener("input", renderIndex);
renderIndex();
searchInput.placeholder = "Search " + INDEX.length + " names…";

/* ─────────────────────────────────────────────────────────────
   Section scroll-spy
   ───────────────────────────────────────────────────────────── */
const navLinks = [...document.querySelectorAll(".ft-nav-track a")];
const sections = navLinks.map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);
if ("IntersectionObserver" in window) {
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id));
    });
  }, { rootMargin: "-15% 0px -70% 0px", threshold: 0 });
  sections.forEach(s => spy.observe(s));
}
})();
