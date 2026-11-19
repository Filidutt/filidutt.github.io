// Canonical Blood on the Clocktower Travellers Database
// Includes official core Travellers (TB, BMR, SNV) and Carousel / Experimental Travellers

export const TRAVELLERS_DB = {
  // === Trouble Brewing (TB) Official Travellers ===
  gunslinger: {
    id: 'gunslinger',
    name: 'Revolverman',
    icon: '🤠',
    team: 'traveller',
    edition: 'tb',
    editionLabel: 'Trouble Brewing',
    isOfficial: true,
    ability: 'Varje dag, efter att den 1:a omröstningen har räknats, får du välja en spelare som röstade: den dör.',
  },
  beggar: {
    id: 'beggar',
    name: 'Tiggare',
    icon: '🪙',
    team: 'traveller',
    edition: 'tb',
    editionLabel: 'Trouble Brewing',
    isOfficial: true,
    ability: 'Du har inga röstpoletter. För att rösta måste du få en polett av en annan spelare.',
  },
  bureaucrat: {
    id: 'bureaucrat',
    name: 'Byråkrat',
    icon: '📜',
    team: 'traveller',
    edition: 'tb',
    editionLabel: 'Trouble Brewing',
    isOfficial: true,
    ability: 'Varje natt, välj en spelare: dennes röst räknas som 3 röster i morgon.',
  },
  thief: {
    id: 'thief',
    name: 'Tjuv',
    icon: '🥷',
    team: 'traveller',
    edition: 'tb',
    editionLabel: 'Trouble Brewing',
    isOfficial: true,
    ability: 'Varje natt, välj en spelare: dennes röst räknas negativt i morgon.',
  },
  scapegoat: {
    id: 'scapegoat',
    name: 'Syndabock',
    icon: '🐐',
    team: 'traveller',
    edition: 'tb',
    editionLabel: 'Trouble Brewing',
    isOfficial: true,
    ability: 'Om en spelare med din lagtillhörighet avrättas kan du bli avrättad i stället.',
  },

  // === Bad Moon Rising (BMR) Official Travellers ===
  butcher: {
    id: 'butcher',
    name: 'Slaktare',
    icon: '🔪',
    team: 'traveller',
    edition: 'bmr',
    editionLabel: 'Bad Moon Rising',
    isOfficial: true,
    ability: 'Varje dag får du nominera så många gånger du vill.',
  },
  bonecollector: {
    id: 'bonecollector',
    name: 'Bensamlare',
    icon: '🦴',
    team: 'traveller',
    edition: 'bmr',
    editionLabel: 'Bad Moon Rising',
    isOfficial: true,
    ability: 'En gång per spel, på natten, välj en död spelare: den får tillbaka sin förmåga i natt och under morgondagen.',
  },
  harlot: {
    id: 'harlot',
    name: 'Kurtisan',
    icon: '💋',
    team: 'traveller',
    edition: 'bmr',
    editionLabel: 'Bad Moon Rising',
    isOfficial: true,
    ability: 'Varje natt*, välj en levande spelare: du får veta dennes karaktär, men demonen kan döda dig.',
  },

  // === Sects & Violets (SNV) Official Travellers ===
  judge: {
    id: 'judge',
    name: 'Domare',
    icon: '⚖️',
    team: 'traveller',
    edition: 'snv',
    editionLabel: 'Sects & Violets',
    isOfficial: true,
    ability: 'En gång per spel får du välja att avrätta en nominerad spelare omedelbart.',
  },
  matron: {
    id: 'matron',
    name: 'Husmor',
    icon: '👵',
    team: 'traveller',
    edition: 'snv',
    editionLabel: 'Sects & Violets',
    isOfficial: true,
    ability: 'Varje dag får du välja upp till 3 par spelare som byter platser.',
  },
  deviant: {
    id: 'deviant',
    name: 'Avvikare',
    icon: '🎭',
    team: 'traveller',
    edition: 'snv',
    editionLabel: 'Sects & Violets',
    isOfficial: true,
    ability: 'Om du var rolig i dag kan du inte dö genom avrättning.',
  },

  // === Official Carousel Travellers ===
  barista: {
    id: 'barista',
    name: 'Barista',
    icon: '☕',
    team: 'traveller',
    edition: 'carousel',
    editionLabel: 'Officiell karusell',
    isOfficial: true,
    ability: 'Varje natt, välj en spelare: den får sann information eller vaknar två gånger i natt.',
  },

  // === Experimental / Custom Travellers ===
  orderly: {
    id: 'orderly',
    name: 'Vårdbiträde',
    icon: '🩺',
    team: 'traveller',
    edition: 'experimental',
    editionLabel: 'Experimentell',
    isOfficial: false,
    isExperimental: true,
    ability: 'Varje natt*, välj en spelare: den är skyddad från demonen i natt.',
  },
  vodyanoi: {
    id: 'vodyanoi',
    name: 'Vodyanoi',
    icon: '🌊',
    team: 'traveller',
    edition: 'experimental',
    editionLabel: 'Experimentell',
    isOfficial: false,
    isExperimental: true,
    ability: 'Varje natt*, välj en hantlangare: den vaknar och gör ett val.',
  },
};

/**
 * Filter Travellers by script name or edition
 */
export function getScriptTravellers(scriptName = '') {
  const norm = String(scriptName).toLowerCase();
  if (norm.includes('trouble')) {
    return Object.values(TRAVELLERS_DB).filter((t) => t.edition === 'tb');
  }
  if (norm.includes('bad moon') || norm.includes('bmr')) {
    return Object.values(TRAVELLERS_DB).filter((t) => t.edition === 'bmr');
  }
  if (norm.includes('sects') || norm.includes('violet') || norm.includes('snv')) {
    return Object.values(TRAVELLERS_DB).filter((t) => t.edition === 'snv');
  }
  // Default to official core Travellers if unknown
  return Object.values(TRAVELLERS_DB).filter((t) => t.isOfficial);
}

export function getAllTravellers() {
  return Object.values(TRAVELLERS_DB);
}
