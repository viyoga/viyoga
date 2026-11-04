(function () {
  "use strict";

  var GROUPS = [
    { key: "household", title: "Long Qingyi & His Household" },
    { key: "dragon", title: "The Long Clan & Dragon People" },
    { key: "mortal", title: "Mortal Heaven & the Ascending Dragon Sect" },
    { key: "valemont", title: "Valemont & the Western Kingdoms" },
    { key: "gold", title: "The Gold King & Five Colors Pavilion" },
    { key: "beasts", title: "Beast Peoples & the Myriad Beasts" },
    { key: "cosmic", title: "The Cosmic Dawn Sect" },
    { key: "central", title: "The Celestial Orthodox Martial Alliance" },
    { key: "demons", title: "The Demon Cult & Celestial Court" },
    { key: "divine", title: "Gods, Legends & Ancient Powers" }
  ];

  var DATA = [
    {
      "n": "Long Qingyi",
      "aka": "Qingyi; Young Master Qingyi; Dragon of the Divine Fist; Primordial Dragon God",
      "g": "household",
      "role": "Protagonist; bearer of the Lust System",
      "rel": "Reincarnated transmigrator from Earth who rises from a weakened outer disciple to the Cosmic Emperor Realm, gathering wives and allies across the mortal, celestial, and orthodox worlds.",
      "s": "alive"
    },
    {
      "n": "Dian Ruxue",
      "aka": "Ruxue; teacher; sword spirit",
      "g": "household",
      "role": "Spirit of the Heaven-Defying Thunder Sword",
      "rel": "Ancient weapon spirit attached to Qingyi's sword; becomes his teacher, confidante, and wife, and is the older sister of Dian Huoyue.",
      "s": "alive"
    },
    {
      "n": "Elize",
      "aka": "Big Sis Elize",
      "g": "household",
      "role": "Lightning cultivator; cook",
      "rel": "Purple-haired lightning cultivator, gifted cook, and one of Qingyi's earliest wives; a steady, motherly anchor of the household.",
      "s": "alive"
    },
    {
      "n": "Hua Feiyan",
      "aka": "Feiyan; Senior Sister Feiyan",
      "g": "household",
      "role": "Alchemist; Qingyi's senior sister",
      "rel": "Qingyi's senior sister at the Ascending Dragon Sect and a prodigious alchemist; one of his first wives and a core part of his household.",
      "s": "alive"
    },
    {
      "n": "Tang Biyue",
      "aka": "Biyue; poisonous beauty",
      "g": "household",
      "role": "Tang family daughter; serpent bloodline",
      "rel": "Daughter of the Tang family and bearer of the Emerald Abyss Winged Serpent bloodline; proud, reserved, and devoted to Qingyi.",
      "s": "alive"
    },
    {
      "n": "Qin Yueli",
      "aka": "Sister Yueli",
      "g": "household",
      "role": "Head priestess of the Lightning Spirit Temple",
      "rel": "Head priestess who is saved by Qingyi and later becomes one of his wives; deputy to Xia Yunfei among the Lightning Priestesses.",
      "s": "alive"
    },
    {
      "n": "Qing Ruyan",
      "aka": "Ruyan",
      "g": "household",
      "role": "Serene Cloud Sect disciple",
      "rel": "Veiled swordswoman of the Serene Cloud Sect and daughter of Qing Shuyin; later one of Qingyi's wives and a shrewd manager of his interests.",
      "s": "alive"
    },
    {
      "n": "Xia Yunfei",
      "aka": "Master of the Lightning Priestesses",
      "g": "household",
      "role": "Lightning Priestess master",
      "rel": "Master of the Lightning Priestesses and a fanatical follower of the lightning spirit; becomes one of Qingyi's wives.",
      "s": "alive"
    },
    {
      "n": "Xu Qingxue",
      "aka": "Master Qingxue; Elder Qingxue",
      "g": "household",
      "role": "Qingyi's former master",
      "rel": "Cold, reserved master at the Ascending Dragon Sect who becomes Qingyi's wife and a calm presence in his household.",
      "s": "alive"
    },
    {
      "n": "Xue Ruyan",
      "aka": "Ruyan of the Demon Cult",
      "g": "household",
      "role": "Daughter of the Demon Cult Leader",
      "rel": "Hundredth child of the Demon Cult Leader; a demonic beauty who becomes one of Qingyi's wives and a link to the demonic world.",
      "s": "alive"
    },
    {
      "n": "Zhu Rongyan",
      "aka": "Captain Rongyan",
      "g": "household",
      "role": "Captain of White Peak City's Third Regiment",
      "rel": "Fiery captain of the White Peak City Guard who becomes one of Qingyi's wives and a dependable fighter.",
      "s": "alive"
    },
    {
      "n": "Bai Xueyao",
      "aka": "Little Snow; white fox",
      "g": "household",
      "role": "White fox of the Transcendence Realm",
      "rel": "White fox from the Transcendence Realm who becomes one of Qingyi's wives and a bridge between him and the fox people.",
      "s": "alive"
    },
    {
      "n": "Jin Meilin",
      "aka": "Meilin; Miss Meilin",
      "g": "household",
      "role": "Daughter of the Gold King",
      "rel": "Daughter of Jin Hao and Yunfeng; a merchant heiress who becomes Qingyi's wife and helps manage the wealth of his household.",
      "s": "alive"
    },
    {
      "n": "Isabel Valemont",
      "aka": "Princess Isabel; Isabella",
      "g": "household",
      "role": "Princess of Valemont",
      "rel": "White-haired, dark-skinned princess of Valemont and a holy knight of the Church of Auranys; becomes one of Qingyi's wives.",
      "s": "alive"
    },
    {
      "n": "Margareth",
      "aka": "Lady Margareth; Baroness of Eagle Peak",
      "g": "household",
      "role": "Baroness of Eagle Peak Valley",
      "rel": "Blue-eyed baroness of the western valley who becomes Qingyi's wife and a researcher in the magical laboratory.",
      "s": "alive"
    },
    {
      "n": "Linyue",
      "aka": "Nyan; little cat",
      "g": "household",
      "role": "Cat-folk princess",
      "rel": "Daughter of Tai'Ren, patriarch of the cat people; playful cat beastwoman and one of Qingyi's wives.",
      "s": "alive"
    },
    {
      "n": "Long Qianyao",
      "aka": "Qianyao; little dragon",
      "g": "household",
      "role": "Golden dragon princess",
      "rel": "Daughter of Long Tianjin, patriarch of the dragon people; a true-blood golden dragon and one of Qingyi's wives.",
      "s": "alive"
    },
    {
      "n": "Hu Lanyin",
      "aka": "Grand Elder Lanyin",
      "g": "household",
      "role": "Grand Elder of the fox people",
      "rel": "Mature fox beauty and Grand Elder of the fox people; becomes one of Qingyi's wives after the fox-realm arc.",
      "s": "alive"
    },
    {
      "n": "Ye Lingxue",
      "aka": "Lingxue; fox matriarch",
      "g": "household",
      "role": "Matriarch of the fox people",
      "rel": "Reclusive fox matriarch and half-blood mythical beast; becomes one of Qingyi's wives and a protector of her people.",
      "s": "alive"
    },
    {
      "n": "Bai Nianxue",
      "aka": "Nianxue; demonic spawn",
      "g": "household",
      "role": "Demonic white tiger",
      "rel": "Demon-spawned tiger girl spared and renamed by Qingyi; later one of his wives and a cheerful member of the household.",
      "s": "alive"
    },
    {
      "n": "Bai Yunxi",
      "aka": "Yunxi",
      "g": "household",
      "role": "Daughter of the Myriad Beasts Sect leader",
      "rel": "Only daughter of Bai Hu Tian and younger sister of Bai Hu Lie; a tigress who becomes one of Qingyi's wives.",
      "s": "alive"
    },
    {
      "n": "Xue Hua",
      "aka": "Little Hua; Xue Hua of the Cosmic Void Sect",
      "g": "household",
      "role": "Cosmic Void Sect disciple",
      "rel": "Daughter of Grand Elder Feiyue; a black-lipsticked disciple who becomes Qingyi's wife and later helps administer his affairs.",
      "s": "alive"
    },
    {
      "n": "Tian Ruoxi",
      "aka": "Rouxi; Celestial Fairy Mommy; adoptive mother",
      "g": "household",
      "role": "Master of the Celestial Fairy Pavilion",
      "rel": "Stellar Sovereign master of the Celestial Fairy Pavilion; Qingyi's adoptive mother in the sect and later one of his wives.",
      "s": "alive"
    },
    {
      "n": "Long Rou'er",
      "aka": "Rou'er; little Rou'er",
      "g": "household",
      "role": "Dragon-blooded wife",
      "rel": "Daughter of Long Wujin and Yuelan and niece of Long Tianjin; pink-haired dragon girl with a hidden bloodline and Qingyi's wife.",
      "s": "alive"
    },
    {
      "n": "Seraphine",
      "aka": "Red dragon of Valemont",
      "g": "household",
      "role": "Scarred red dragon",
      "rel": "Red dragon ally from the western continent who becomes one of Qingyi's wives and a member of his magical-research circle.",
      "s": "alive"
    },
    {
      "n": "Dian Huoyue",
      "aka": "Huoyue",
      "g": "household",
      "role": "Ruxue's sister",
      "rel": "Fiery dragon woman and Ruxue's younger sister; joins Qingyi's household late in the story.",
      "s": "alive"
    },
    {
      "n": "Sapphire",
      "aka": "Child of Prophecy; Daughter of Water",
      "g": "household",
      "role": "Blue-haired mana user",
      "rel": "One of the five heroes of Valemont and a Child of Prophecy; later part of Qingyi's household and magical-research circle.",
      "s": "alive"
    },
    {
      "n": "Aeryn Silverveil",
      "aka": "Aeryn; elf princess",
      "g": "household",
      "role": "High elf princess",
      "rel": "High elf princess and holy hero of Valemont; later a close ally and wife in Qingyi's circle.",
      "s": "alive"
    },
    {
      "n": "Ma Mingzhu",
      "aka": "Divine Maiden; Mingzhu",
      "g": "household",
      "role": "Divine Maiden of the Divine Maiden Sect",
      "rel": "Divine Maiden of the Divine Maiden Sect and Ma Zhenwu's granddaughter; betrothed to Qingyi and later one of his wives.",
      "s": "alive"
    },
    {
      "n": "Su Yuehan",
      "aka": "Celestial Sword Fairy; Little Yuehan",
      "g": "household",
      "role": "Sword fairy of the Orthodox Alliance",
      "rel": "Veiled Celestial Sword Fairy who returns after more than 100,000 years; joins Qingyi's household and fights beside him.",
      "s": "alive"
    },
    {
      "n": "Long Tianjin",
      "aka": "Patriarch Tianjin; golden dragon",
      "g": "dragon",
      "role": "Patriarch of the dragon people",
      "rel": "Celestial Emperor and father of Long Qianyao; best friend and killer of Long Wujin, and a powerful political ally of Qingyi.",
      "s": "alive"
    },
    {
      "n": "Long Wujin",
      "aka": "Dragon God of Corruption",
      "g": "dragon",
      "role": "Ancient dragon god",
      "rel": "Husband of Yuelan and father of Long Rou'er; an immensely powerful dragon driven mad before Long Tianjin killed him.",
      "s": "dead"
    },
    {
      "n": "Yuelan",
      "aka": "Wujin's wife; Rou'er's mother",
      "g": "dragon",
      "role": "Dragon of the Long clan",
      "rel": "Long Wujin's beloved wife and Long Rou'er's mother; dies protecting her daughter before the main story.",
      "s": "dead"
    },
    {
      "n": "Long Xuefeng",
      "aka": "Little Xue",
      "g": "dragon",
      "role": "Dragon prodigy",
      "rel": "Arrogant young dragon of the Long clan who ambushes Qingyi and is killed during the dragon-capital arc.",
      "s": "dead"
    },
    {
      "n": "Long Jinrui",
      "aka": "Young Master Jinrui",
      "g": "dragon",
      "role": "Dragon prodigy",
      "rel": "Cold, proud dragon swordsman and rival in the dragon tournament; his father attacks Qingyi after Jinrui's defeat.",
      "s": "unknown"
    },
    {
      "n": "Long Tianyu",
      "aka": "Dragon Battalion leader",
      "g": "dragon",
      "role": "Leader of the Dragon Battalion",
      "rel": "Rebirth Realm cultivator and commander of the Dragon Battalion in the mortal sect; a mentor figure who values Qingyi's talent.",
      "s": "alive"
    },
    {
      "n": "Long Aoxue Wushuang Zhizun",
      "aka": "Aoxue; dragon prodigy",
      "g": "dragon",
      "role": "Dragon genius of the central region",
      "rel": "Dragon prodigy from an engineer family and a rival at the Cosmic Void tournament; killed by Qingyi during their duel.",
      "s": "dead"
    },
    {
      "n": "Elder Yu",
      "aka": "Nature dragon elder",
      "g": "dragon",
      "role": "Tournament organizer",
      "rel": "Ancient nature dragon beastman who organizes the dragon-capital tournament and oversees its matches.",
      "s": "alive"
    },
    {
      "n": "Long Baiyu",
      "aka": "Ancestral Dragon Sect leader",
      "g": "dragon",
      "role": "Leader of the Ancestral Dragon Sect",
      "rel": "Dragon leader who fights in the demonic war and later works alongside the Orthodox alliance.",
      "s": "unknown"
    },
    {
      "n": "Primordial Dragon Empress",
      "aka": "Dragon Empress",
      "g": "dragon",
      "role": "Ancient dragon ruler",
      "rel": "One of the oldest and strongest dragons; a prideful ruler connected to Long Wujin, Yuelan, and Rou'er's bloodline.",
      "s": "divine"
    },
    {
      "n": "Feiyue",
      "aka": "Grand Elder Feiyue",
      "g": "dragon",
      "role": "Grand Elder of the Cosmic Void Sect",
      "rel": "Long Tianjin's right hand and Xue Hua's mother; a playful but dangerous Celestial Empress who tests Qingyi.",
      "s": "alive"
    },
    {
      "n": "Mo Feixue",
      "aka": "Feixue",
      "g": "mortal",
      "role": "Noble girl of the mortal realm",
      "rel": "Petite noble girl from Qingyi's early mortal-realm days; one of his first affairs and the first woman he meets with an elastic throat trait.",
      "s": "unknown"
    },
    {
      "n": "Xu Tianming",
      "aka": "Young Master Xu",
      "g": "mortal",
      "role": "Arrogant young master",
      "rel": "Xu family heir and early rival who gains a poisonous Qi and dies after his feud with Qingyi.",
      "s": "dead"
    },
    {
      "n": "Elder Tian",
      "aka": "Recruitment Elder",
      "g": "mortal",
      "role": "Ascending Dragon Sect elder",
      "rel": "Elder of the recruitment pavilion who oversees Qingyi's entry tests and early sect matches.",
      "s": "alive"
    },
    {
      "n": "Bao Zhang",
      "aka": "Brother Bao",
      "g": "mortal",
      "role": "Ascending Dragon Sect disciple",
      "rel": "Friendly disciple who guides Qingyi on his first mission and becomes one of his early companions.",
      "s": "alive"
    },
    {
      "n": "Lei Feng",
      "aka": "Lei Feng",
      "g": "mortal",
      "role": "Ascending Dragon Sect disciple",
      "rel": "Sect disciple and member of Bao Zhang's mission group; a minor early ally.",
      "s": "alive"
    },
    {
      "n": "Jun Hao",
      "aka": "Jun Hao",
      "g": "mortal",
      "role": "Ascending Dragon Sect disciple",
      "rel": "Sect disciple and member of Bao Zhang's mission group; a minor early ally.",
      "s": "alive"
    },
    {
      "n": "Chu Yang",
      "aka": "Chu Yang",
      "g": "mortal",
      "role": "Ascending Dragon Sect disciple",
      "rel": "Sect disciple and member of Bao Zhang's mission group; a minor early ally.",
      "s": "alive"
    },
    {
      "n": "Yu Hanzi",
      "aka": "Yu Hanzi",
      "g": "mortal",
      "role": "Ascending Dragon Sect disciple",
      "rel": "Handsome common-born disciple who participates in the inner-disciple selection.",
      "s": "unknown"
    },
    {
      "n": "Chen Xiaohu",
      "aka": "Xiaohu",
      "g": "mortal",
      "role": "Flame cultivator",
      "rel": "Famous flame cultivator and early opponent of Qingyi; later becomes an ally and remains part of his wider circle.",
      "s": "alive"
    },
    {
      "n": "Qing Shuyin",
      "aka": "Elder Shuyin",
      "g": "mortal",
      "role": "Serene Cloud Sect elder",
      "rel": "Serene Cloud Sect elder and Qing Ruyan's father; a political figure in the mortal-realm sect conflicts.",
      "s": "unknown"
    },
    {
      "n": "Tang Yandu",
      "aka": "Yandu",
      "g": "mortal",
      "role": "Tang family brother",
      "rel": "Tang Biyue's brother; provides Qingyi with information about the Tang family and the Nine Peaks Basin.",
      "s": "unknown"
    },
    {
      "n": "Young Master Yang",
      "aka": "Yang",
      "g": "mortal",
      "role": "Noble young master",
      "rel": "Noble husband of Mo Feixue during Qingyi's early mortal-realm arc; a jealous and humiliated rival.",
      "s": "unknown"
    },
    {
      "n": "Lord Fang",
      "aka": "Lord Fang of the spiritual grass village",
      "g": "mortal",
      "role": "Village lord",
      "rel": "Local lord who sends Qingyi and Bao Zhang's group after a giant horned wolf.",
      "s": "unknown"
    },
    {
      "n": "Yanxiao",
      "aka": "Guardian of the Eternal River Sect",
      "g": "mortal",
      "role": "Tiger guardian beast",
      "rel": "Ancient tiger guardian of the Eternal River Sect; tests Qingyi and later fights in the demonic war.",
      "s": "alive"
    },
    {
      "n": "Hei Lang",
      "aka": "Black Wolf",
      "g": "mortal",
      "role": "Bandit leader",
      "rel": "Bald bandit leader who attacks the Lightning Spirit Temple and is defeated by Qingyi.",
      "s": "dead"
    },
    {
      "n": "Red Claw",
      "aka": "Red Claw gang",
      "g": "mortal",
      "role": "Bandit gang",
      "rel": "Criminal gang operating near the Lightning Spirit Temple; wiped out by Qingyi during the early arcs.",
      "s": "dead"
    },
    {
      "n": "David Valemont",
      "aka": "King David Valemont",
      "g": "valemont",
      "role": "King of Valemont",
      "rel": "Ruler of the kingdom of Valemont and Isabel's father; a pragmatic monarch caught between church politics and his daughter's choices.",
      "s": "alive"
    },
    {
      "n": "Lucien",
      "aka": "Holy knight Lucien",
      "g": "valemont",
      "role": "Hero of the Holy Church",
      "rel": "Holy knight and one of Valemont's five heroes; an early rival for Isabel who is humiliated by Qingyi and later fights alongside him.",
      "s": "alive"
    },
    {
      "n": "Lucios",
      "aka": "Bronze Dragon rider",
      "g": "valemont",
      "role": "Dragon rider",
      "rel": "Old dragon rider and ally from the western continent; partners with the Bronze Dragon and supports the fight against the corrupted beasts.",
      "s": "alive"
    },
    {
      "n": "Red Death",
      "aka": "Red Death",
      "g": "valemont",
      "role": "Ancient dragon",
      "rel": "Powerful dragon rival of Khaedryss; defeated and devoured during the western-continent conflict.",
      "s": "dead"
    },
    {
      "n": "Jin Hao",
      "aka": "The Gold King; King of Gold",
      "g": "gold",
      "role": "Ruler of the Five Colors Pavilion",
      "rel": "One of the most powerful rulers of the mortal realm and Meilin's father; a pragmatic king who tests Qingyi before accepting him as family.",
      "s": "alive"
    },
    {
      "n": "Yunfeng",
      "aka": "Lady Yunfeng",
      "g": "gold",
      "role": "Wife of the Gold King",
      "rel": "Jin Hao's wife and Jin Meilin's mother; a sharp political operator in the Five Colors Pavilion.",
      "s": "alive"
    },
    {
      "n": "Jin Tianshi",
      "aka": "Tianshi",
      "g": "gold",
      "role": "Son of the Gold King",
      "rel": "Meilin's half-brother and rival for the Gold King's favor; schemes against her before being sidelined.",
      "s": "alive"
    },
    {
      "n": "Mei Xiu",
      "aka": "Mei Xiu",
      "g": "gold",
      "role": "Meilin's friend",
      "rel": "One of Jin Meilin's closest friends and travel companions in the Five Colors Pavilion arc.",
      "s": "alive"
    },
    {
      "n": "Wang Haoran",
      "aka": "Young Master Wang",
      "g": "gold",
      "role": "Noble rival",
      "rel": "Arrogant son of Wang Jiantian who resents Qingyi's effect on the noble women around him.",
      "s": "unknown"
    },
    {
      "n": "Wang Jiantian",
      "aka": "Lord Wang",
      "g": "gold",
      "role": "Noble patriarch",
      "rel": "Powerful nobleman and Wang Haoran's father; quietly hostile to Qingyi after his son's humiliation.",
      "s": "unknown"
    },
    {
      "n": "Tai'Ren",
      "aka": "Patriarch Tai'Ren",
      "g": "beasts",
      "role": "Patriarch of the cat people",
      "rel": "Lion-like patriarch of the cat folk and Linyue's father; a mighty ally who supports Qingyi's marriage to his daughter.",
      "s": "alive"
    },
    {
      "n": "Elder Lu",
      "aka": "Elder Lu",
      "g": "beasts",
      "role": "Cat-folk elder",
      "rel": "Grumpy elder of the cat people who opposes handing Linyue over to an outsider.",
      "s": "alive"
    },
    {
      "n": "Bai Hu Lie",
      "aka": "White tiger; lunatic tiger",
      "g": "beasts",
      "role": "Tiger prodigy of the Myriad Beasts",
      "rel": "Bai Yunxi's brother and a fierce white-tiger prodigy; becomes Qingyi's close friend and rival, always eager for a fight.",
      "s": "alive"
    },
    {
      "n": "Bai Hu Tian",
      "aka": "Myriad Beasts Sect leader",
      "g": "beasts",
      "role": "Father of Bai Hu Lie and Bai Yunxi",
      "rel": "Leader of the Myriad Beasts Sect and a powerful tiger patriarch; approves of Qingyi as his daughter's husband.",
      "s": "alive"
    },
    {
      "n": "Peacock Patriarch",
      "aka": "Peacock Patriarch",
      "g": "beasts",
      "role": "Patriarch of the peacock people",
      "rel": "Beast patriarch and tournament host in the Cosmic Void Sect; guardian of an important ancient technique.",
      "s": "alive"
    },
    {
      "n": "Li Chenfeng",
      "aka": "Sect Leader Chenfeng",
      "g": "cosmic",
      "role": "Leader of the Cosmic Dawn Sect",
      "rel": "Cosmic Dawn Sect leader and Long Rou'er's adoptive father; a patient ruler who comes to trust Qingyi with his sect's future.",
      "s": "alive"
    },
    {
      "n": "Chen Wei",
      "aka": "Big Bro Chen Wei",
      "g": "cosmic",
      "role": "Qingyi's best friend",
      "rel": "Young master of the Fallen Moon World and Qingyi's closest friend in the Cosmic Dawn Sect; a spear wielder who later becomes a Celestial Emperor.",
      "s": "alive"
    },
    {
      "n": "Peng Tao",
      "aka": "Peng Tao",
      "g": "cosmic",
      "role": "Chen Wei's servant",
      "rel": "Chen Wei's loyal servant and companion during their early flight into the Celestial Heavens.",
      "s": "alive"
    },
    {
      "n": "Guo Tianhao",
      "aka": "Young Master Guo",
      "g": "cosmic",
      "role": "Guo family heir",
      "rel": "Arrogant star of the Cosmic Dawn Sect and Qingyi's main rival for Rou'er; killed by Qingyi after repeated schemes.",
      "s": "dead"
    },
    {
      "n": "Guo Longwei",
      "aka": "Young Master Guo Longwei",
      "g": "cosmic",
      "role": "Guo family youngest son",
      "rel": "Guo Tianhao's younger brother and Xue Hua's fiancé; killed by Bai Hu Lie during the Cosmic Void tournament.",
      "s": "dead"
    },
    {
      "n": "Guo Lingyun",
      "aka": "Patriarch Guo",
      "g": "cosmic",
      "role": "Guo family patriarch",
      "rel": "Father of Guo Tianhao and Guo Longwei; a cold schemer who tries to claim the Primordial Demon Empress.",
      "s": "unknown"
    },
    {
      "n": "Ma Zhenwu",
      "aka": "Founding Hero Ma",
      "g": "cosmic",
      "role": "Cosmic Dawn Sect founding hero",
      "rel": "Revered founding hero of the Cosmic Dawn Sect and Ma Mingzhu's grandfather; a powerful old ally of Qingyi.",
      "s": "alive"
    },
    {
      "n": "Elder Shen",
      "aka": "Elder Shen",
      "g": "cosmic",
      "role": "Cosmic Dawn Sect elder",
      "rel": "Senior elder who recruits Qingyi and guides him through the sect's politics and missions.",
      "s": "alive"
    },
    {
      "n": "Elder Yuelan",
      "aka": "War Pavilion elder",
      "g": "cosmic",
      "role": "Cosmic Dawn Sect elder",
      "rel": "Leader of the War Pavilion and a powerful elder at the Cosmic Dawn Sect; not to be confused with Long Wujin's wife.",
      "s": "alive"
    },
    {
      "n": "Han Zhentian",
      "aka": "Zhentian",
      "g": "cosmic",
      "role": "Wealthy inner disciple",
      "rel": "Wealthy inner disciple of the Cosmic Dawn Sect and Qingyi's mission companion; becomes a reliable ally.",
      "s": "alive"
    },
    {
      "n": "Li Tianfa",
      "aka": "Elder Li Tianfa",
      "g": "cosmic",
      "role": "Corrupt sect elder",
      "rel": "Greedy elder of the Cosmic Dawn Sect who initially opposes Qingyi but later supports him for the sake of the sect.",
      "s": "alive"
    },
    {
      "n": "Beifeng",
      "aka": "Young Master Beifeng",
      "g": "cosmic",
      "role": "Inner disciple",
      "rel": "Cruel inner disciple who tortures Chen Wei and steals his spear; killed by Qingyi.",
      "s": "dead"
    },
    {
      "n": "Mo Shouming",
      "aka": "Mo Shouming",
      "g": "cosmic",
      "role": "Subordinate of the Primordial Demon Empress",
      "rel": "Ancient subordinate connected to Akane and the revival of the Primordial Demon Empress; later acts as an intermediary.",
      "s": "unknown"
    },
    {
      "n": "Fa Yun",
      "aka": "Taoist Brother Fa Yun",
      "g": "cosmic",
      "role": "Young monk prodigy",
      "rel": "Humble young monk and powerful fist cultivator; becomes a respected ally and friendly rival of Qingyi.",
      "s": "alive"
    },
    {
      "n": "Old Cang",
      "aka": "Cangyun",
      "g": "cosmic",
      "role": "Cosmic Dawn Sect instructor",
      "rel": "Veteran instructor of the Cosmic Dawn Sect who tests young disciples and recognizes Qingyi's potential.",
      "s": "alive"
    },
    {
      "n": "Mu Ziyue",
      "aka": "Celestial Empress Ziyue",
      "g": "central",
      "role": "Head of the Mu family",
      "rel": "Celestial Empress and head of the Mu family, the largest spacecraft manufacturer in the Orthodox Universe; Su Yuehan's grandaunt and Qingyi's ally.",
      "s": "alive"
    },
    {
      "n": "Elder Ling",
      "aka": "Old Ling",
      "g": "central",
      "role": "Cosmic Emperor of the Orthodox Alliance",
      "rel": "Ancient Cosmic Emperor and elder of the Celestial Orthodox Martial Alliance; one of the first central-region powers to recognize Qingyi.",
      "s": "alive"
    },
    {
      "n": "Zihao",
      "aka": "Young Master Zihao",
      "g": "central",
      "role": "Young master of the central region",
      "rel": "Arrogant young master who challenges Qingyi to avenge his master; defeated and spared.",
      "s": "alive"
    },
    {
      "n": "Zhang Lingfeng",
      "aka": "Young Master Zhang",
      "g": "central",
      "role": "Honorable Zhang cousin",
      "rel": "Zhang Fei's cousin and opposite in character; famous for his beauty, pride, and honorable conduct in the Celestial Immortal Capital.",
      "s": "alive"
    },
    {
      "n": "Zhang Fei",
      "aka": "Young Master Zhang Fei",
      "g": "central",
      "role": "Zhang family villain",
      "rel": "Arrogant Zhang family young master who tries to force Ma Mingzhu into marriage; killed by Qingyi.",
      "s": "dead"
    },
    {
      "n": "Patriarch Zhang",
      "aka": "Zhang family patriarch",
      "g": "central",
      "role": "Patriarch of the Zhang family",
      "rel": "Powerful patriarch of the Zhang family in the Celestial Immortal Capital; a looming political threat after Zhang Fei's death.",
      "s": "alive"
    },
    {
      "n": "Heavenly Demon",
      "aka": "Celestial Demon; Demon Lord",
      "g": "demons",
      "role": "Leader of the Demon Cult",
      "rel": "Ancient tyrant and main demonic antagonist; poisoned Yuelan, ruined Long Wujin, and commands the demonic forces threatening the Orthodox world.",
      "s": "alive"
    },
    {
      "n": "Xue Mo",
      "aka": "Xue Mochen; Young Lord of the Demon Cult",
      "g": "demons",
      "role": "Heir to the Heavenly Demon bloodline",
      "rel": "Most talented young demon of his generation and bearer of the complete Heavenly Demon bloodline; killed by Qingyi during the demonic war.",
      "s": "dead"
    },
    {
      "n": "Demon Doctor",
      "aka": "Demon Doctor",
      "g": "demons",
      "role": "Demon Cult healer",
      "rel": "Old healer and plotter of the Demon Cult who tends to Mochen and others; his full allegiances remain opaque.",
      "s": "unknown"
    },
    {
      "n": "Akane Kurotsuki",
      "aka": "Akane-sama; Primordial Demon Empress",
      "g": "demons",
      "role": "Primordial Demon Empress",
      "rel": "Ancient demon empress and fellow transmigrator from Earth; feared by the Celestial Court and later becomes Qingyi's lover and ally.",
      "s": "divine"
    },
    {
      "n": "Qing Xuanyu",
      "aka": "Seventeenth Celestial General",
      "g": "demons",
      "role": "Celestial Court general",
      "rel": "Arrogant Celestial General sent to take Qingyi's child; defeated in battle and left in critical condition.",
      "s": "unknown"
    },
    {
      "n": "Primordial Emperor",
      "aka": "Golden Primordial Emperor",
      "g": "demons",
      "role": "Ruler of the Celestial Court",
      "rel": "Ancient emperor of the True Gods and leader of the Celestial Court; a calculating antagonist who sees Qingyi as a threat to heaven's order.",
      "s": "divine"
    },
    {
      "n": "Hong Maozen",
      "aka": "Hong Maozen",
      "g": "demons",
      "role": "Demonic ritualist",
      "rel": "Demonic formation master who tries to complete a soul-devouring ritual in the Temple of Light and is thwarted by Ye Chen.",
      "s": "unknown"
    },
    {
      "n": "Auranys",
      "aka": "Great Creator; Goddess Auranys",
      "g": "divine",
      "role": "Goddess of the Church of Auranys",
      "rel": "The Great Creator worshiped across the western continent; a lonely goddess who becomes one of Qingyi's wives and allies.",
      "s": "divine"
    },
    {
      "n": "Khaedryss",
      "aka": "Butcher of Empires; Slayer of Immortals",
      "g": "divine",
      "role": "Ancient red dragon",
      "rel": "Terrifying ancient dragon and mother of Qingyi's child; a legendary destroyer who becomes fiercely loyal to her family.",
      "s": "alive"
    },
    {
      "n": "The God of War",
      "aka": "Red-haired war god",
      "g": "divine",
      "role": "War deity",
      "rel": "Red-haired god who terrorizes a winged city and tries to claim a wife by force; defeated by Qingyi during the western campaign.",
      "s": "dead"
    },
    {
      "n": "Ye Chen",
      "aka": "Ye Chen",
      "g": "divine",
      "role": "Ancient cultivator",
      "rel": "Powerful cultivator encountered in the Temple of Light trial; opposes Hong Maozen's soul-devouring ritual.",
      "s": "unknown"
    },
    {
      "n": "Chu Yuechan",
      "aka": "Yuechan",
      "g": "divine",
      "role": "Formation expert",
      "rel": "Ye Chen's companion and a skilled formation analyst in the Temple of Light trial.",
      "s": "unknown"
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
