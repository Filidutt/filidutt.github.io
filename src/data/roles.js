// Comprehensive Blood on the Clocktower character database
// Includes all roles from Trouble Brewing, Bad Moon Rising, Sects & Violets, and official Travellers/Fabled/Experimental

export const EDITIONS = {
  all: { id: 'all', label: 'Alla utgåvor' },
  tb: { id: 'tb', label: 'Trouble Brewing', badge: 'bg-rose-950/70 text-rose-300 border-rose-600/40' },
  bmr: { id: 'bmr', label: 'Bad Moon Rising', badge: 'bg-amber-950/70 text-amber-300 border-amber-600/40' },
  snv: { id: 'snv', label: 'Sects & Violets', badge: 'bg-purple-950/70 text-purple-300 border-purple-600/40' },
  traveller: { id: 'traveller', label: 'Resenärer', badge: 'bg-indigo-950/70 text-indigo-300 border-indigo-600/40' },
  experimental: { id: 'experimental', label: 'Experimentella', badge: 'bg-emerald-950/70 text-emerald-300 border-emerald-600/40' },
};

export const TEAM_NAMES = {
  townsfolk: 'Stadsbo',
  outsider: 'Utböling',
  minion: 'Hantlangare',
  demon: 'Demon',
  traveller: 'Resenär',
  unknown: 'Övrig',
};

export const ALL_ROLES_DB = {
  // === TROUBLE BREWING (TB) ===
  washerwoman: ['Tvätterska', 'townsfolk', '🧺', 'Du börjar med att veta att 1 av 2 spelare är en specifik stadsbo.', 'tb'],
  librarian: ['Bibliotekarie', 'townsfolk', '📚', 'Du börjar med att veta att 1 av 2 spelare är en specifik utböling, eller att inga finns i spel.', 'tb'],
  investigator: ['Utredare', 'townsfolk', '🔍', 'Du börjar med att veta att 1 av 2 spelare är en specifik hantlangare.', 'tb'],
  chef: ['Kock', 'townsfolk', '🍳', 'Du börjar med att veta hur många par av onda spelare som sitter bredvid varandra.', 'tb'],
  empath: ['Empat', 'townsfolk', '👁️', 'Varje natt får du veta hur många av dina 2 levande grannar som är onda.', 'tb'],
  fortuneteller: ['Siare', 'townsfolk', '🔮', 'Varje natt, välj 2 spelare: du får veta om någon av dem är en demon. 1 god spelare registreras som en demon.', 'tb'],
  undertaker: ['Dödgrävare', 'townsfolk', '⚰️', 'Varje natt* får du veta vilken karaktär som dog genom avrättning i dag.', 'tb'],
  monk: ['Munk', 'townsfolk', '🛡️', 'Varje natt*, välj en spelare (inte dig själv): den är skyddad från demonen i natt.', 'tb'],
  ravenkeeper: ['Korphållare', 'townsfolk', '🦅', 'Om du dör på natten väcks du för att välja en spelare: du får veta dennes karaktär.', 'tb'],
  virgin: ['Jungfru', 'townsfolk', '🕊️', 'Första gången du blir nominerad, om den som nominerar är en stadsbo, avrättas den omedelbart.', 'tb'],
  slayer: ['Dråpare', 'townsfolk', '🏹', 'En gång per spel, under dagen, välj offentligt en spelare: om den är demonen dör den.', 'tb'],
  soldier: ['Soldat', 'townsfolk', '⚔️', 'Du är skyddad från demonen.', 'tb'],
  mayor: ['Borgmästare', 'townsfolk', '🏛️', 'Om bara 3 spelare lever och ingen avrättning sker vinner ditt lag. Om du dör på natten kan en annan spelare dö i stället.', 'tb'],
  butler: ['Betjänt', 'outsider', '🛎️', 'Varje natt, välj en husbonde: du får bara rösta om den också röstar.', 'tb'],
  drunk: ['Fyllo', 'outsider', '🍺', 'Du vet inte att du är fyllot. Du tror att du är en stadsbo, men det är du inte.', 'tb'],
  recluse: ['Enstöring', 'outsider', '🦹', 'Du kan registreras som ond och som hantlangare eller demon, även när du är död.', 'tb'],
  saint: ['Helgon', 'outsider', '😇', 'Om du dör genom avrättning förlorar ditt lag.', 'tb'],
  poisoner: ['Förgiftare', 'minion', '🧪', 'Varje natt, välj en spelare: den är förgiftad i natt och under morgondagen.', 'tb'],
  spy: ['Spion', 'minion', '🕵️', 'Varje natt ser du grimoiren. Du kan registreras som god och som stadsbo eller utböling, även när du är död.', 'tb'],
  scarletwoman: ['Prostituerad', 'minion', '💃', 'Om 5 eller fler spelare lever och demonen dör blir du demonen.', 'tb'],
  baron: ['Baron', 'minion', '🎩', 'Det finns extra utbölingar i spel. [+2 utbölingar]', 'tb'],
  imp: ['Demon', 'demon', '😈', 'Varje natt*, välj en spelare: den dör. Om du dödar dig själv på detta sätt blir en hantlangare den nya demonen.', 'tb'],

  // === BAD MOON RISING (BMR) ===
  grandmother: ['Mormor', 'townsfolk', '👵', 'Du börjar med att veta en god spelare och dennes karaktär. Om demonen dödar den spelaren dör du också.', 'bmr'],
  sailor: ['Sjöman', 'townsfolk', '⚓', 'Varje natt, välj en levande spelare: antingen du eller den är berusad till skymningen. Du kan inte dö.', 'bmr'],
  chambermaid: ['Kammarjungfru', 'townsfolk', '🧹', 'Varje natt, välj 2 levande spelare (inte dig själv): du får veta hur många av dem som vaknade i natt på grund av sin förmåga.', 'bmr'],
  exorcist: ['Exorcist', 'townsfolk', '✝️', 'Varje natt*, välj en spelare (en annan än i går natt): om demonen väljs får den veta vem du är och vaknar sedan inte i natt.', 'bmr'],
  innkeeper: ['Värdshusvärd', 'townsfolk', '🍺', 'Varje natt*, välj 2 spelare: de kan inte dö i natt, men 1 av dem är berusad till skymningen.', 'bmr'],
  gambler: ['Hasardör', 'townsfolk', '🎲', 'Varje natt*, välj en spelare och gissa dennes karaktär: gissar du fel dör du i natt.', 'bmr'],
  gossip: ['Skvallerbytta', 'townsfolk', '🗣️', 'Varje dag får du göra ett offentligt påstående. Om det var sant dör en spelare i natt.', 'bmr'],
  courtier: ['Hovman', 'townsfolk', '👑', 'En gång per spel, på natten, välj en karaktär: den är berusad i 3 nätter och 3 dagar.', 'bmr'],
  professor: ['Professor', 'townsfolk', '🎓', 'En gång per spel, på natten*, välj en död spelare: om den är en stadsbo återuppstår den.', 'bmr'],
  minstrel: ['Spelman', 'townsfolk', '🪕', 'När en hantlangare dör genom avrättning är alla andra spelare (utom resenärer) berusade till skymningen i morgon.', 'bmr'],
  tealady: ['Tedam', 'townsfolk', '🫖', 'Om båda dina levande grannar är goda kan de inte dö.', 'bmr'],
  pacifist: ['Pacifist', 'townsfolk', '☮️', 'Avrättade goda spelare kanske inte dör.', 'bmr'],
  fool: ['Narr', 'townsfolk', '🃏', 'Första gången du dör gör du det inte.', 'bmr'],
  goon: ['Torped', 'outsider', '🥊', 'Varje natt blir den 1:a spelaren som väljer dig med sin förmåga berusad till skymningen. Du får dennes lagtillhörighet.', 'bmr'],
  lunatic: ['Galning', 'outsider', '🤪', 'Du tror att du är en demon, men det är du inte. Demonen vet vem du är och vem du väljer på natten.', 'bmr'],
  tinker: ['Mekare', 'outsider', '🔧', 'Du kan dö när som helst.', 'bmr'],
  moonchild: ['Månbarn', 'outsider', '🌙', 'När du får veta att du har dött, välj offentligt 1 levande spelare. Om det var en god spelare dör den i natt.', 'bmr'],
  godfather: ['Gudfader', 'minion', '🥀', 'Du börjar med att veta vilka utbölingar som är i spel. Om 1 dog i dag, välj en spelare i natt: den dör. [-1 eller +1 utböling]', 'bmr'],
  devilsadvocate: ['Djävulens advokat', 'minion', '📜', 'Varje natt, välj en levande spelare (en annan än i går natt): om den avrättas i morgon dör den inte.', 'bmr'],
  assassin: ['Lönnmördare', 'minion', '🗡️', 'En gång per spel, på natten*, välj en spelare: den dör, även om den av någon anledning inte kunde det.', 'bmr'],
  mastermind: ['Mästerhjärna', 'minion', '🧠', 'Om demonen dör genom avrättning (och spelet tar slut), spela 1 dag till. Om en spelare då avrättas förlorar dennes lag.', 'bmr'],
  zombuul: ['Zombuul', 'demon', '🧟', 'Varje natt*, om ingen dog i dag, välj en spelare: den dör. Första gången du dör lever du, men registreras som död.', 'bmr'],
  pukka: ['Pukka', 'demon', '🐸', 'Varje natt, välj en spelare: den blir förgiftad. Den tidigare förgiftade spelaren dör och blir sedan frisk.', 'bmr'],
  shabaloth: ['Shabaloth', 'demon', '🦷', 'Varje natt*, välj 2 spelare: de dör. En död spelare du valde i går natt kan bli uppstött igen.', 'bmr'],
  po: ['Po', 'demon', '🦁', 'Varje natt* får du välja en spelare: den dör. Om ditt senaste val var ingen, välj 3 spelare i natt.', 'bmr'],

  // === SECTS & VIOLETS (S&V) ===
  clockmaker: ['Urmakare', 'townsfolk', '🕰️', 'Du börjar med att veta hur många steg det är från demonen till närmaste hantlangare.', 'snv'],
  dreamer: ['Drömmare', 'townsfolk', '💭', 'Varje natt, välj en spelare (inte dig själv eller resenärer): du får veta 1 god och 1 ond karaktär, varav 1 stämmer.', 'snv'],
  snakecharmer: ['Ormtjusare', 'townsfolk', '🐍', 'Varje natt, välj en levande spelare: en vald demon byter karaktär och lagtillhörighet med dig och blir sedan förgiftad.', 'snv'],
  mathematician: ['Matematiker', 'townsfolk', '📐', 'Varje natt får du veta hur många spelares förmågor som fungerade onormalt (sedan gryningen) på grund av en annan karaktärs förmåga.', 'snv'],
  flowergirl: ['Blomsterflicka', 'townsfolk', '🌸', 'Varje natt* får du veta om en demon röstade i dag.', 'snv'],
  towncrier: ['Utropare', 'townsfolk', '📢', 'Varje natt* får du veta om en hantlangare nominerade i dag.', 'snv'],
  oracle: ['Orakel', 'townsfolk', '🪞', 'Varje natt* får du veta hur många döda spelare som är onda.', 'snv'],
  savant: ['Savant', 'townsfolk', '💡', 'Varje dag får du besöka berättaren och i enrum få veta 2 saker: 1 är sann och 1 är falsk.', 'snv'],
  seamstress: ['Sömmerska', 'townsfolk', '🧵', 'En gång per spel, på natten, välj 2 spelare: du får veta om de har samma lagtillhörighet.', 'snv'],
  philosopher: ['Filosof', 'townsfolk', '🏛️', 'En gång per spel, på natten, välj en stadsbo-karaktär: du får den förmågan. Om den är i spel blir den karaktären berusad.', 'snv'],
  artist: ['Konstnär', 'townsfolk', '🎨', 'En gång per spel, under dagen, ställ en ja/nej-fråga till berättaren i enrum och få ett sanningsenligt svar.', 'snv'],
  juggler: ['Jonglör', 'townsfolk', '🤹', 'Din 1:a dag, gissa offentligt upp till 5 spelares karaktärer. Den natten får du veta hur många du gissade rätt.', 'snv'],
  sage: ['Vis', 'townsfolk', '🕯️', 'Om demonen dödar dig får du veta att du dödades av demonen, och vilken av 2 spelare som är demonen.', 'snv'],
  mutant: ['Mutant', 'outsider', '🧬', 'Om du är "galen" över att vara en utböling kan du bli avrättad.', 'snv'],
  sweetheart: ['Hjärtevän', 'outsider', '💖', 'När du dör blir 1 spelare berusad från och med nu.', 'snv'],
  barber: ['Barberare', 'outsider', '💈', 'Om du dog på natten får demonen i dag eller i natt byta karaktärer mellan 2 spelare.', 'snv'],
  klutz: ['Klantskalle', 'outsider', '🤕', 'När du får veta att du har dött, välj offentligt 1 levande spelare: om den är ond förlorar ditt lag.', 'snv'],
  eviltwin: ['Ond tvilling', 'minion', '♊', 'Du och en spelare från motståndarlaget känner till varandra. Om din tvilling dör genom avrättning vinner de goda. Om båda lever kan de goda inte vinna.', 'snv'],
  witch: ['Häxa', 'minion', '🧙', 'Varje natt, välj en spelare: om den nominerar i morgon dör den. Om bara 3 spelare lever har du ingen förmåga.', 'snv'],
  cerenovus: ['Cerenovus', 'minion', '🧠', 'Varje natt, välj en spelare och en karaktär: den ska vara "galen" över att vara den karaktären i morgon, annars riskerar den avrättning.', 'snv'],
  pithag: ['Grophäxa', 'minion', '🫕', 'Varje natt*, välj en spelare och en karaktär som den blir (om den inte är i spel). Dödsfall kan inträffa.', 'snv'],
  fanggu: ['Fang Gu', 'demon', '🐅', 'Varje natt*, välj en spelare: den dör. Den 1:a utbölingen du dödar blir en ond Fang Gu och du dör i stället. [+1 utböling]', 'snv'],
  vigormortis: ['Vigormortis', 'demon', '💀', 'Varje natt*, välj en spelare: den dör. Döda hantlangare behåller sin förmåga och 1 stadsbo-granne blir förgiftad. [-1 utböling]', 'snv'],
  nodashii: ['No Dashii', 'demon', '🐙', 'Varje natt*, välj en spelare: den dör. Dina 2 stadsbo-grannar är förgiftade.', 'snv'],
  vortox: ['Vortox', 'demon', '🌀', 'Varje natt*, välj en spelare: den dör. Stadsbornas förmågor ger falsk information. Om ingen avrättas i dag vinner de onda.', 'snv'],

  // === OFFICIAL TRAVELLERS ===
  gunslinger: ['Revolverman', 'traveller', '🤠', 'Varje dag, efter att den 1:a omröstningen har räknats, får du välja en spelare som röstade: den dör.', 'tb'],
  beggar: ['Tiggare', 'traveller', '🪙', 'Du har inga röstpoletter. För att rösta måste du få en polett av en annan spelare.', 'tb'],
  bureaucrat: ['Byråkrat', 'traveller', '📜', 'Varje natt, välj en spelare: dennes röst räknas som 3 röster i morgon.', 'tb'],
  thief: ['Tjuv', 'traveller', '🥷', 'Varje natt, välj en spelare: dennes röst räknas negativt i morgon.', 'tb'],
  scapegoat: ['Syndabock', 'traveller', '🐐', 'Om en spelare med din lagtillhörighet avrättas kan du bli avrättad i stället.', 'tb'],
  butcher: ['Slaktare', 'traveller', '🔪', 'Varje dag får du nominera så många gånger du vill.', 'bmr'],
  bonecollector: ['Bensamlare', 'traveller', '🦴', 'En gång per spel, på natten, välj en död spelare: den får tillbaka sin förmåga i natt och under morgondagen.', 'bmr'],
  harlot: ['Kurtisan', 'traveller', '💋', 'Varje natt*, välj en levande spelare: du får veta dennes karaktär, men demonen kan döda dig.', 'bmr'],
  judge: ['Domare', 'traveller', '⚖️', 'En gång per spel får du välja att avrätta en nominerad spelare omedelbart.', 'snv'],
  matron: ['Husmor', 'traveller', '👵', 'Varje dag får du välja upp till 3 par spelare som byter platser.', 'snv'],
  deviant: ['Avvikare', 'traveller', '🎭', 'Om du var rolig i dag kan du inte dö genom avrättning.', 'snv'],
  barista: ['Barista', 'traveller', '☕', 'Varje natt, välj en spelare: den får sann information eller vaknar två gånger i natt.', 'experimental'],
  orderly: ['Vårdbiträde', 'traveller', '🩺', 'Varje natt*, välj en spelare: den är skyddad från demonen i natt.', 'experimental'],
  vodyanoi: ['Vodyanoi', 'traveller', '🌊', 'Varje natt*, välj en hantlangare: den vaknar och gör ett val.', 'experimental'],

  // === POPULAR EXPERIMENTAL / FABLED ===
  alchemist: ['Alkemist', 'townsfolk', '⚗️', 'Du har förmågan hos en hantlangare som inte är i spel.', 'experimental'],
  amnesiac: ['Minneslös', 'townsfolk', '❓', 'Du vet inte vad din förmåga är. Varje dag, gissa i enrum vad den är: du får veta hur nära du är.', 'experimental'],
  noble: ['Adelsman', 'townsfolk', '⚜️', 'Du börjar med att veta 3 spelare, varav 1 och endast 1 är ond.', 'experimental'],
  pixie: ['Älva', 'townsfolk', '🧚', 'Du börjar med att veta 1 stadsbo i spel. Om du har varit "galen" över att vara den, får du dess förmåga när den dör.', 'experimental'],
  balloonist: ['Ballongfarare', 'townsfolk', '🎈', 'Varje natt får du veta 1 spelare av varje karaktärstyp, tills du har fått veta alla 4.', 'experimental'],
  heretic: ['Kättare', 'outsider', '🕯️', 'Den som vinner förlorar och den som förlorar vinner, även när du är död.', 'experimental'],
  damsel: ['Ungmö', 'outsider', '🎀', 'Alla hantlangare vet att du är i spel. Om en hantlangare gissar vem du är vinner de onda.', 'experimental'],
  plaguedoctor: ['Pestdoktor', 'outsider', '🦤', 'Om du dör får berättaren en hantlangarförmåga.', 'experimental'],
  marionette: ['Marionett', 'minion', '🎎', 'Du tror att du är en god karaktär, men det är du inte. Demonen vet vem du är. Du sitter bredvid demonen.', 'experimental'],
  boomdandy: ['Boomdandy', 'minion', '💣', 'Om du avrättas dör alla spelare utom 3.', 'experimental'],
  goblin: ['Vätte', 'minion', '👺', 'Om du offentligt påstår att du är vätten och avrättas samma dag vinner ditt lag.', 'experimental'],
  widow: ['Änka', 'minion', '🕷️', 'Natt 1 ser du grimoiren och väljer en spelare: den blir förgiftad. 1 god spelare vet att en änka är i spel.', 'experimental'],
  mezepheles: ['Mezepheles', 'minion', '🗣️', 'Du börjar med att veta ett hemligt ord. Den 1:a goda spelaren som säger det blir ond i natt.', 'experimental'],
  riot: ['Upplopp', 'demon', '🔥', 'Nominerade dör omedelbart. Dagarna går i snabb takt.', 'experimental'],
  alhadikhia: ['Al-Hadikhia', 'demon', '🦂', 'Varje natt*, välj 3 spelare: de bestämmer i hemlighet om de ska leva eller dö. Om alla väljer att leva dör alla.', 'experimental'],
  legion: ['Legion', 'demon', '👥', 'Varje natt* kan en spelare dö. Avrättningar kräver att alla onda spelare röstar. [De flesta spelare är Legion]', 'experimental'],
  leviathan: ['Leviatan', 'demon', '🐋', 'Om mer än 1 god spelare avrättas vinner de onda. Alla spelare vet att Leviatan är i spel. [Inga hantlangare]', 'experimental'],
};

export function resolveRoleInfo(id) {
  if (!id) return null;
  const cleanId = String(id).toLowerCase().replace(/[^a-z0-9]/g, '');
  if (ALL_ROLES_DB[cleanId]) {
    const entry = ALL_ROLES_DB[cleanId];
    const editionKey = entry[4] || 'custom';
    return {
      id: cleanId,
      name: entry[0],
      team: entry[1],
      icon: entry[2] || '✦',
      ability: entry[3] || '',
      edition: editionKey,
      editionLabel: EDITIONS[editionKey]?.label || 'Egen',
      teamName: TEAM_NAMES[entry[1]] || entry[1],
    };
  }
  return {
    id: cleanId,
    name: String(id).replace(/_/g, ' '),
    team: 'unknown',
    icon: '✦',
    ability: '',
    edition: 'custom',
    editionLabel: 'Egen',
    teamName: TEAM_NAMES.unknown,
  };
}

export function getAllRoles() {
  return Object.keys(ALL_ROLES_DB).map(resolveRoleInfo);
}
