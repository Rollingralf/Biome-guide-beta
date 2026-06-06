const BIOMES = [
  {
    id: 1,
    name: 'Plains',
    icon: '🌾',
    description: 'Uitgestrekte grasvelden vol mogelijkheden',
    temperature: 0.8,
    rainfall: 0.4,
    details: {
      description: 'Plains zijn een van de meest basis biomes. Ze zijn volledig vlak en vol gras. Ideaal voor het beginnen van je wereld en voor grote bouwprojecten.',
      characteristics: [
        'Groot en vlak terrein',
        'Veel gras en wilde bloemen',
        'Veel paarden, schapen en koeien',
        'Geen bergen of grotten aan de oppervlakte'
      ]
    },
    items: [
      { name: 'Gras', use: 'Basis bouwmateriaal voor decoratie' },
      { name: 'Zaden', use: 'Voor het planten van gewassen' },
      { name: 'Bloemen', use: 'Decoratie en kleurstof maken' },
      { name: 'Paarden', use: 'Transport en decoratie' }
    ],
    resources: [
      'Veel dieren (koeien, schapen, paarden)',
      'Bloemen voor kleurtoffen',
      'Mogelijkheid voor landbouw'
    ]
  },
  {
    id: 2,
    name: 'Forest',
    icon: '🌲',
    description: 'Dicht beboste gebied vol hout en vida',
    temperature: 0.7,
    rainfall: 0.8,
    details: {
      description: 'Bossen zijn volle gebieden met bomen. Ze bieden veel hout en zijn goed voor het verzamelen van resources. Er zijn veel kleine dieren.',
      characteristics: [
        'Veel verschillende soorten bomen',
        'Dicht bladerdak',
        'Veel mieren en insecten',
        'Moeilijk om grote gebouwen te maken'
      ]
    },
    items: [
      { name: 'Hout', use: 'Essentieel bouwmateriaal' },
      { name: 'Bladeren', use: 'Decoratie, kan honing geven' },
      { name: 'Appels', use: 'Voedsel en genezing' },
      { name: 'Bijen', use: 'Honey en pollinatie' }
    ],
    resources: [
      'Onbeperkt hout',
      'Diverse plantensoorten',
      'Veel dieren voor voedsel'
    ]
  },
  {
    id: 3,
    name: 'Mountain',
    icon: '⛰️',
    description: 'Hoge bergketens met veel gesteente',
    temperature: 0.2,
    rainfall: 0.6,
    details: {
      description: 'Bergen zijn steil en hoog. Ze bevatten veel steen en andere ertsen. Ideaal voor het vinden van mineralen en edele stenen.',
      characteristics: [
        'Zeer hoge pieken',
        'Veel steen en erts',
        'Moeilijk om rond te navigeren',
        'Weinig vegetatie'
      ]
    },
    items: [
      { name: 'Steen', use: 'Basis bouwmateriaal' },
      { name: 'IJzer', use: 'Tools en rüstung' },
      { name: 'Kool', use: 'Brandstof' },
      { name: 'Goud', use: 'Decoratie en tools' }
    ],
    resources: [
      'Veel erts (ijzer, goud, diamant)',
      'Steen voor constructie',
      'Hoge uitzichtspunten'
    ]
  },
  {
    id: 4,
    name: 'Desert',
    icon: '🏜️',
    description: 'Zandwoestijn met extreme hitte',
    temperature: 2.0,
    rainfall: 0.0,
    details: {
      description: 'Woestijnen zijn droog en vol zand. Ze bevatten tempels en piramidecomplexen. Het kan overdag erg heet worden.',
      characteristics: [
        'Alleen zand en zeer weinig vegetatie',
        'Geen regen',
        'Veel zonlicht',
        'Antieke structuren aanwezig'
      ]
    },
    items: [
      { name: 'Zand', use: 'Bouwmateriaal' },
      { name: 'Tempel schatten', use: 'Waardevolle items' },
      { name: 'Cactus', use: 'Groene kleurstof' },
      { name: 'Bedrock puzzle', use: 'Mystieke structuren' }
    ],
    resources: [
      'Antieke tempels met schatten',
      'Cactus voor groene kleurstof',
      'Zand voor glas maken'
    ]
  },
  {
    id: 5,
    name: 'Swamp',
    icon: '🌿',
    description: 'Moerasgebied vol water en moeras vegetatie',
    temperature: 0.8,
    rainfall: 0.9,
    details: {
      description: 'Moerassem zijn natte, donkere gebieden. Ze bevatten veel water en moeras vegetatie. Kijk uit voor giftige dieren.',
      characteristics: [
        'Veel water en modder',
        'Donker en vochtig',
        'Veel giftige dieren',
        'Heksenhutten aanwezig'
      ]
    },
    items: [
      { name: 'Modder', use: 'Decoratie en bouwmateriaal' },
      { name: 'Waterplanten', use: 'Decoratie' },
      { name: 'Wortels', use: 'Voedsel' },
      { name: 'Zelfrode', use: 'Magische items' }
    ],
    resources: [
      'Heksenhutten met poties',
      'Water voor hydratatie',
      'Diverse planten'
    ]
  },
  {
    id: 6,
    name: 'Ocean',
    icon: '🌊',
    description: 'Diep blauw water vol leven',
    temperature: 0.5,
    rainfall: 0.5,
    details: {
      description: 'Oceanen zijn grote lichamen water. Ze bevatten veel vissen en onderzeese schatten. Zwemmen is essentieel.',
      characteristics: [
        'Diep water',
        'Veel vis',
        'Onderzeese ruïnes',
        'Koraalriffen in warme gebieden'
      ]
    },
    items: [
      { name: 'Vis', use: 'Voedsel' },
      { name: 'Koraal', use: 'Decoratie en verlichting' },
      { name: 'Zeewier', use: 'Decoratie en voedsel' },
      { name: 'Parel', use: 'Kostbare sieraden' }
    ],
    resources: [
      'Veel vis voor voeding',
      'Koraal voor schoonheid',
      'Diepzee schatten'
    ]
  },
  {
    id: 7,
    name: 'Jungle',
    icon: '🌴',
    description: 'Dichte jungle vol leven en avontuur',
    temperature: 0.95,
    rainfall: 0.9,
    details: {
      description: 'Jungles zijn dicht begroeid met exotische bomen. Ze bevatten tempel en veel unieke dieren. Het is moeilijk om rond te navigeren.',
      characteristics: [
        'Zeer dichte begroeiing',
        'Veel exotische dieren',
        'Piramides en tempels',
        'Hoog terrein'
      ]
    },
    items: [
      { name: 'Jungle hout', use: 'Uniek bouwmateriaal' },
      { name: 'Cacao boon', use: 'Chocolade maken' },
      { name: 'Jungle zaad', use: 'Planten van jungle trees' },
      { name: 'Parrots', use: 'Gezelschap en decoratie' }
    ],
    resources: [
      'Jungle tempels met ontdekkingen',
      'Cacao voor chocolade',
      'Exotische dieren'
    ]
  },
  {
    id: 8,
    name: 'Tundra',
    icon: '❄️',
    description: 'Bevroren landen met ijs en sneeuw',
    temperature: 0.0,
    rainfall: 0.5,
    details: {
      description: 'Tundra is een bevroren biome. Het is erg koud en sneeuwachtig. Er zijn ijsberen en andere koude dieren.',
      characteristics: [
        'Ijs en sneeuw overal',
        'Zeer koud',
        'Weinig vegetatie',
        'Mogelijkheid voor ijsgebouwen'
      ]
    },
    items: [
      { name: 'Ijs', use: 'Bouwmateriaal en verlichting' },
      { name: 'Sneeuw', use: 'Decoratie en bouwmateriaal' },
      { name: 'Poolvoedsel', use: 'Voeding voor dieren' },
      { name: 'Kristallen', use: 'Decoratie' }
    ],
    resources: [
      'Ijs voor unieke bouwprojecten',
      'Sneeuw voor decoratie',
      'Koude dieren'
    ]
  },
  {
    id: 9,
    name: 'Nether',
    icon: '🔥',
    description: 'Onderwereld vol lava en gevaar',
    temperature: 2.0,
    rainfall: 0.0,
    details: {
      description: 'De Nether is een verwoeste onderwereld. Het is vol lava, vuur en gevaarlijke monsterkiezen. Unieke resources te vinden hier.',
      characteristics: [
        'Lava overal',
        'Zeer heet',
        'Gevaarlijke monsterkiezen',
        'Unieke mineralen'
      ]
    },
    items: [
      { name: 'Nether bricks', use: 'Unieke bouwmateriaal' },
      { name: 'Glowstone', use: 'Verlichting' },
      { name: 'Nether wort', use: 'Potion brewing' },
      { name: 'Ancient debris', use: 'Netherite crafting' }
    ],
    resources: [
      'Netherite voor beste tools',
      'Glowstone voor verlichting',
      'Unieke planten voor potions'
    ]
  },
  {
    id: 10,
    name: 'The End',
    icon: '✨',
    description: 'Mystieke dimensie met de Ender Dragon',
    temperature: 0.5,
    rainfall: 0.5,
    details: {
      description: 'Het Einde is het eindgame biome. Je vindt hier obsidiaan en andere waardevolle items. De Ender Dragon wacht hier.',
      characteristics: [
        'Drijvende eilanden',
        'Obsidiaan',
        'Paars tint overal',
        'Ender Dragon aanwezig'
      ]
    },
    items: [
      { name: 'Obsidiaan', use: 'Diamon als beste bouwmateriaal' },
      { name: 'Ender perles', use: 'Teleportatie' },
      { name: 'Ender krisyal', use: 'Dragon healing' },
      { name: 'Chorus fruit', use: 'Voeding en teleportatie' }
    ],
    resources: [
      'Obsidiaan voor portalen',
      'Chorus fruit voor voeding',
      'Eindschat'
    ]
  }
];
