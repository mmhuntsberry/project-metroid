const platforms = [
  {
    full: "1292 Advanced Programmable Video System",
    short: "1292",
  },
  {
    full: "3DO Interactive Multiplayer",
    short: "3DO",
  },
  {
    full: "Acorn Archimedes",
    short: "ARCH",
  },
  {
    full: "Acorn Electron",
    short: "ELEC",
  },
  {
    full: "Amazon Fire TV",
    short: "FRTV",
  },
  {
    full: "Amiga",
    short: "AMG",
  },
  {
    full: "Amiga CD32",
    short: "CD32",
  },
  {
    full: "Amstrad CPC",
    short: "ACPC",
  },
  {
    full: "Amstrad PCW",
    short: "APCW",
  },
  {
    full: "Android",
    short: "AND",
  },
  {
    full: "Apple II",
    short: "APL2",
  },
  {
    full: "Apple IIGS",
    short: "A2GS",
  },
  {
    full: "Atari 2600",
    short: "2600",
  },
  {
    full: "Atari 5200",
    short: "5200",
  },
  {
    full: "Atari 7800",
    short: "7800",
  },
  {
    full: "Atari 8-bit",
    short: "AT8B",
  },
  {
    full: "Atari Jaguar",
    short: "JAG",
  },
  {
    full: "Atari Lynx",
    short: "LYNX",
  },
  {
    full: "Atari ST/STE",
    short: "ATST",
  },
  {
    full: "AY-3-8500",
    short: "AY38",
  },
  {
    full: "AY-3-8603",
    short: "AY38",
  },
  {
    full: "AY-3-8605",
    short: "AY38",
  },
  {
    full: "AY-3-8606",
    short: "AY38",
  },
  {
    full: "AY-3-8607",
    short: "AY38",
  },
  {
    full: "AY-3-8610",
    short: "AY38",
  },
  {
    full: "AY-3-8710",
    short: "AY38",
  },
  {
    full: "AY-3-8760",
    short: "AY38",
  },
  {
    full: "BBC Microcomputer System",
    short: "BBCM",
  },
  {
    full: "BlackBerry OS",
    short: "BBOS",
  },
  {
    full: "Blu-ray Player",
    short: "BRP",
  },
  {
    full: "Call-A-Computer time-shared mainframe computer system",
    short: "CAC",
  },
  {
    full: "CDC Cyber 70",
    short: "CY70",
  },
  {
    full: "ColecoVision",
    short: "CV",
  },
  {
    full: "Commodore 16",
    short: "CM16",
  },
  {
    full: "Commodore C64/128",
    short: "C64",
  },
  {
    full: "Commodore CDTV",
    short: "CDTV",
  },
  {
    full: "Commodore PET",
    short: "PET",
  },
  {
    full: "Commodore Plus/4",
    short: "CPLS",
  },
  {
    full: "Commodore VIC-20",
    short: "VIC",
  },
  {
    full: "Donner Model 30",
    short: "DM30",
  },
  {
    full: "Dragon 32/64",
    short: "DRGN",
  },
  {
    full: "Dreamcast",
    short: "DC",
  },
  {
    full: "DVD Player",
    short: "DVD",
  },
  {
    full: "EDSAC",
    short: "EDSAC",
  },
  {
    full: "Evercade",
    short: "EVRC",
  },
  {
    full: "Exidy Sorcerer",
    short: "XIDY",
  },
  {
    full: "Fairchild Channel F",
    short: "CHNF",
  },
  {
    full: "Family Computer (FAMICOM)",
    short: "FAM",
  },
  {
    full: "Family Computer Disk System",
    short: "FCDS",
  },
  {
    full: "Ferranti Nimrod Computer",
    short: "NMRD",
  },
  {
    full: "FM Towns",
    short: "FMT",
  },
  {
    full: "FM-7",
    short: "FM7",
  },
  {
    full: "Game & Watch",
    short: "G&W",
  },
  {
    full: "Game Boy",
    short: "GB",
  },
  {
    full: "Game Boy Advance",
    short: "GBA",
  },
  {
    full: "Game Boy Color",
    short: "GBC",
  },
  {
    full: "Google Stadia",
    short: "STAD",
  },
  {
    full: "HP 2100",
    short: "HP21",
  },
  {
    full: "HP 3000",
    short: "HP3K",
  },
  {
    full: "Hyper Neo Geo 64",
    short: "HNG",
  },
  {
    full: "Intellivision",
    short: "INT",
  },
  {
    full: "iOS",
    short: "IOS",
  },
  {
    full: "Linux",
    short: "LINX",
  },
  {
    full: "Mac",
    short: "MAC",
  },
  {
    full: "Microvision",
    short: "MCVN",
  },
  {
    full: "MSX",
    short: "MSX",
  },
  {
    full: "MSX2",
    short: "MSX2",
  },
  {
    full: "N-Gage",
    short: "NGAG",
  },
  {
    full: "NEC PC-6000 Series",
    short: "PC6K",
  },
  {
    full: "Neo Geo AES",
    short: "AES",
  },
  {
    full: "Neo Geo CD",
    short: "NGCD",
  },
  {
    full: "Neo Geo MVS",
    short: "MVS",
  },
  {
    full: "Neo Geo Pocket",
    short: "NGP",
  },
  {
    full: "Neo Geo Pocket Color",
    short: "NGPC",
  },
  {
    full: "New Nintendo 3DS",
    short: "N3DS",
  },
  {
    full: "Nintendo 3DS",
    short: "3DS",
  },
  {
    full: "Nintendo 64",
    short: "N64",
  },
  {
    full: "Nintendo DS",
    short: "NDS",
  },
  {
    full: "Nintendo DSi",
    short: "NDSI",
  },
  {
    full: "Nintendo Entertainment System (NES)",
    short: "NES",
  },
  {
    full: "Nintendo eShop",
    short: "ESHP",
  },
  {
    full: "Nintendo GameCube",
    short: "GCN",
  },
  {
    full: "Nintendo PlayStation",
    short: "NPS",
  },
  {
    full: "Nintendo Switch",
    short: "NSW",
  },
  {
    full: "Nuon",
    short: "NUON",
  },
  {
    full: "Odyssey",
    short: "ODY",
  },
  {
    full: "OnLive Game System",
    short: "ONLV",
  },
  {
    full: "Ouya",
    short: "OUYA",
  },
  {
    full: "PC (Microsoft Windows)",
    short: "PC",
  },
  {
    full: "PC DOS",
    short: "DOS",
  },
  {
    full: "PC Engine SuperGrafx",
    short: "PCE",
  },
  {
    full: "PC-50X Family",
    short: "PC5",
  },
  {
    full: "PC-8801",
    short: "8801",
  },
  {
    full: "PC-98",
    short: "PC98",
  },
  {
    full: "PC-FX",
    short: "PCFX",
  },
  {
    full: "PDP-1",
    short: "PDP1",
  },
  {
    full: "PDP-10",
    short: "PDP",
  },
  {
    full: "PDP-11",
    short: "PDP11",
  },
  {
    full: "PDP-8",
    short: "PDP8",
  },
  {
    full: "Philips CD-i",
    short: "CDI",
  },
  {
    full: "Philips Videopac G7000",
    short: "VG7K",
  },
  {
    full: "PLATO",
    short: "PLTO",
  },
  {
    full: "Playdia",
    short: "PLAY",
  },
  {
    full: "PlayStation",
    short: "PS1",
  },
  {
    full: "PlayStation 2",
    short: "PS2",
  },
  {
    full: "PlayStation 3",
    short: "PS3",
  },
  {
    full: "PlayStation 4",
    short: "PS4",
  },
  {
    full: "PlayStation 5",
    short: "PS5",
  },
  {
    full: "PlayStation Network",
    short: "PSN",
  },
  {
    full: "PlayStation Portable",
    short: "PSP",
  },
  {
    full: "PlayStation Vita",
    short: "VITA",
  },
  {
    full: "Pokémon mini",
    short: "PKMN",
  },
  {
    full: "SDS Sigma 7",
    short: "SIG7",
  },
  {
    full: "Sega 32X",
    short: "32X",
  },
  {
    full: "Sega CD",
    short: "SGCD",
  },
  {
    full: "Sega Game Gear",
    short: "GG",
  },
  {
    full: "Sega Master System",
    short: "SMS",
  },
  {
    full: "Sega Mega Drive/Genesis",
    short: "SG",
  },
  {
    full: "Sega Saturn",
    short: "SAT",
  },
  {
    full: "SG-1000",
    short: "SG1K",
  },
  {
    full: "Sharp X1",
    short: "X1",
  },
  {
    full: "Sharp X68000",
    short: "X68K",
  },
  {
    full: "Sol-20",
    short: "SL20",
  },
  {
    full: "SteamOS",
    short: "STM",
  },
  {
    full: "Super Famicom",
    short: "SFC",
  },
  {
    full: "Super Nintendo Entertainment System (SNES)",
    short: "SNES",
  },
  {
    full: "SwanCrystal",
    short: "SWNC",
  },
  {
    full: "Tapwave Zodiac",
    short: "ZOD",
  },
  {
    full: "Tatung Einstein",
    short: "EIN",
  },
  {
    full: "Texas Instruments TI-99",
    short: "TI99",
  },
  {
    full: "Thomson MO5",
    short: "TMO5",
  },
  {
    full: "TRS-80",
    short: "TRS8",
  },
  {
    full: "TRS-80 Color Computer",
    short: "T80C",
  },
  {
    full: "TurboGrafx-16/PC Engine",
    short: "TG16",
  },
  {
    full: "Turbografx-16/PC Engine CD",
    short: "TGCD",
  },
  {
    full: "VC 4000",
    short: "VC4K",
  },
  {
    full: "Vectrex",
    short: "VTRX",
  },
  {
    full: "Virtual Boy",
    short: "VB",
  },
  {
    full: "Virtual Console (Nintendo)",
    short: "NVC",
  },
  {
    full: "Web browser",
    short: "WEB",
  },
  {
    full: "Wii",
    short: "WII",
  },
  {
    full: "Wii U",
    short: "WIIU",
  },
  {
    full: "Windows Phone",
    short: "WPHO",
  },
  {
    full: "WonderSwan",
    short: "WNSW",
  },
  {
    full: "WonderSwan Color",
    short: "WSWC",
  },
  {
    full: "Xbox",
    short: "XBOX",
  },
  {
    full: "Xbox 360",
    short: "X360",
  },
  {
    full: "Xbox Live Arcade",
    short: "XBLA",
  },
  {
    full: "Xbox One",
    short: "XBO",
  },
  {
    full: "Xbox Series X",
    short: "XBSX",
  },
  {
    full: "Zeebo",
    short: "ZEBO",
  },
  {
    full: "ZX Spectrum",
    short: "ZXSP",
  },
];
