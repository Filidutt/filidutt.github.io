// Canonical Blood on the Clocktower Role Reminder Tokens database
// Essential for Storytellers and the Spy who sees the full Grimoire with reminders

export const ROLE_REMINDERS_DB = {
  // === Trouble Brewing ===
  washerwoman: [
    { id: 'washerwoman_townsfolk', role: 'washerwoman', label: 'Stadsbo', icon: '🧺' },
    { id: 'washerwoman_wrong', role: 'washerwoman', label: 'Fel', icon: '🧺' },
  ],
  librarian: [
    { id: 'librarian_outsider', role: 'librarian', label: 'Utböling', icon: '📚' },
    { id: 'librarian_wrong', role: 'librarian', label: 'Fel', icon: '📚' },
  ],
  investigator: [
    { id: 'investigator_minion', role: 'investigator', label: 'Hantlangare', icon: '🔍' },
    { id: 'investigator_wrong', role: 'investigator', label: 'Fel', icon: '🔍' },
  ],
  fortuneteller: [
    { id: 'fortuneteller_red_herring', role: 'fortuneteller', label: 'Falsk demon', icon: '🔮' },
  ],
  undertaker: [
    { id: 'undertaker_died_today', role: 'undertaker', label: 'Dog i dag', icon: '⚰️' },
  ],
  monk: [
    { id: 'monk_safe', role: 'monk', label: 'Skyddad', icon: '🛡️' },
  ],
  ravenkeeper: [
    { id: 'ravenkeeper_died_today', role: 'ravenkeeper', label: 'Dog i dag', icon: '🦅' },
  ],
  virgin: [
    { id: 'virgin_no_ability', role: 'virgin', label: 'Ingen förmåga', icon: '🕊️' },
  ],
  slayer: [
    { id: 'slayer_no_ability', role: 'slayer', label: 'Ingen förmåga', icon: '🏹' },
  ],
  butler: [
    { id: 'butler_master', role: 'butler', label: 'Husbonde', icon: '🛎️' },
  ],
  drunk: [
    { id: 'drunk_drunk', role: 'drunk', label: 'Berusad', icon: '🍺' },
  ],
  poisoner: [
    { id: 'poisoner_poisoned', role: 'poisoner', label: 'Förgiftad', icon: '🧪' },
  ],
  scarletwoman: [
    { id: 'scarletwoman_demon', role: 'scarletwoman', label: 'Är demonen', icon: '💃' },
  ],

  // === Bad Moon Rising ===
  grandmother: [
    { id: 'grandmother_grandchild', role: 'grandmother', label: 'Barnbarn', icon: '👵' },
  ],
  sailor: [
    { id: 'sailor_drunk', role: 'sailor', label: 'Berusad', icon: '⚓' },
  ],
  exorcist: [
    { id: 'exorcist_chosen', role: 'exorcist', label: 'Vald', icon: '✝️' },
  ],
  innkeeper: [
    { id: 'innkeeper_safe', role: 'innkeeper', label: 'Skyddad', icon: '🍺' },
    { id: 'innkeeper_drunk', role: 'innkeeper', label: 'Berusad', icon: '🍺' },
  ],
  gambler: [
    { id: 'gambler_dead', role: 'gambler', label: 'Död', icon: '🎲' },
  ],
  gossip: [
    { id: 'gossip_dead', role: 'gossip', label: 'Död', icon: '🗣️' },
  ],
  courtier: [
    { id: 'courtier_drunk_1', role: 'courtier', label: 'Berusad 1', icon: '👑' },
    { id: 'courtier_drunk_2', role: 'courtier', label: 'Berusad 2', icon: '👑' },
    { id: 'courtier_drunk_3', role: 'courtier', label: 'Berusad 3', icon: '👑' },
  ],
  professor: [
    { id: 'professor_alive', role: 'professor', label: 'Levande', icon: '🎓' },
    { id: 'professor_no_ability', role: 'professor', label: 'Ingen förmåga', icon: '🎓' },
  ],
  minstrel: [
    { id: 'minstrel_everyone_drunk', role: 'minstrel', label: 'Alla berusade', icon: '🪕' },
  ],
  fool: [
    { id: 'fool_no_ability', role: 'fool', label: 'Ingen förmåga', icon: '🃏' },
  ],
  goon: [
    { id: 'goon_drunk', role: 'goon', label: 'Berusad', icon: '🥊' },
  ],
  lunatic: [
    { id: 'lunatic_attack_1', role: 'lunatic', label: 'Attack 1', icon: '🤪' },
    { id: 'lunatic_attack_2', role: 'lunatic', label: 'Attack 2', icon: '🤪' },
    { id: 'lunatic_attack_3', role: 'lunatic', label: 'Attack 3', icon: '🤪' },
  ],
  tinker: [
    { id: 'tinker_dead', role: 'tinker', label: 'Död', icon: '🔧' },
  ],
  moonchild: [
    { id: 'moonchild_dead', role: 'moonchild', label: 'Död', icon: '🌙' },
  ],
  godfather: [
    { id: 'godfather_died_today', role: 'godfather', label: 'Dog i dag', icon: '🥀' },
    { id: 'godfather_dead', role: 'godfather', label: 'Död', icon: '🥀' },
  ],
  devilsadvocate: [
    { id: 'devilsadvocate_survives', role: 'devilsadvocate', label: 'Överlever avrättning', icon: '📜' },
  ],
  assassin: [
    { id: 'assassin_dead', role: 'assassin', label: 'Död', icon: '🗡️' },
    { id: 'assassin_no_ability', role: 'assassin', label: 'Ingen förmåga', icon: '🗡️' },
  ],
  zombuul: [
    { id: 'zombuul_died_today', role: 'zombuul', label: 'Dog i dag', icon: '🧟' },
  ],
  pukka: [
    { id: 'pukka_poisoned_1', role: 'pukka', label: 'Förgiftad 1', icon: '🪱' },
    { id: 'pukka_poisoned_2', role: 'pukka', label: 'Förgiftad 2', icon: '🪱' },
    { id: 'pukka_dead', role: 'pukka', label: 'Död', icon: '🪱' },
  ],
  shabaloth: [
    { id: 'shabaloth_alive', role: 'shabaloth', label: 'Levande', icon: '🐊' },
    { id: 'shabaloth_dead', role: 'shabaloth', label: 'Död', icon: '🐊' },
  ],
  po: [
    { id: 'po_3_attacks', role: 'po', label: '3 attacker', icon: '💨' },
  ],

  // === Sects & Violets ===
  snakecharmer: [
    { id: 'snakecharmer_poisoned', role: 'snakecharmer', label: 'Förgiftad', icon: '🐍' },
  ],
  mathematician: [
    { id: 'mathematician_abnormal', role: 'mathematician', label: 'Onormal', icon: '➗' },
  ],
  flowergirl: [
    { id: 'flowergirl_demon_voted', role: 'flowergirl', label: 'Demonen röstade', icon: '🌸' },
  ],
  towncrier: [
    { id: 'towncrier_minions_voted', role: 'towncrier', label: 'Hantlangare röstade', icon: '📢' },
  ],
  seamstress: [
    { id: 'seamstress_no_ability', role: 'seamstress', label: 'Ingen förmåga', icon: '🧵' },
  ],
  philosopher: [
    { id: 'philosopher_drunk', role: 'philosopher', label: 'Berusad', icon: '🏛️' },
    { id: 'philosopher_is_char', role: 'philosopher', label: 'Är karaktären', icon: '🏛️' },
  ],
  artist: [
    { id: 'artist_no_ability', role: 'artist', label: 'Ingen förmåga', icon: '🎨' },
  ],
  sweetheart: [
    { id: 'sweetheart_drunk', role: 'sweetheart', label: 'Berusad', icon: '💔' },
  ],
  barber: [
    { id: 'barber_haircut', role: 'barber', label: 'Klippning', icon: '💈' },
  ],
  eviltwin: [
    { id: 'eviltwin_twin', role: 'eviltwin', label: 'Tvilling', icon: '♊' },
  ],
  witch: [
    { id: 'witch_cursed', role: 'witch', label: 'Förbannad', icon: '🧙' },
  ],
  cerenovus: [
    { id: 'cerenovus_mad', role: 'cerenovus', label: 'Galen', icon: '🧠' },
  ],
  pithag: [
    { id: 'pithag_transformed', role: 'pithag', label: 'Förvandlad', icon: '🧙‍♀️' },
  ],
  fanggu: [
    { id: 'fanggu_once', role: 'fanggu', label: 'En gång', icon: '🐒' },
  ],
  vigormortis: [
    { id: 'vigormortis_has_ability', role: 'vigormortis', label: 'Har förmåga', icon: '💀' },
    { id: 'vigormortis_poisoned', role: 'vigormortis', label: 'Förgiftad', icon: '💀' },
  ],
  nodashii: [
    { id: 'nodashii_poisoned', role: 'nodashii', label: 'Förgiftad', icon: '🐉' },
  ],

  // === Travellers ===
  bureaucrat: [
    { id: 'bureaucrat_3_votes', role: 'bureaucrat', label: '3 röster', icon: '📜' },
  ],
  thief: [
    { id: 'thief_negative_vote', role: 'thief', label: 'Negativ röst', icon: '🥷' },
  ],
  bonecollector: [
    { id: 'bonecollector_has_ability', role: 'bonecollector', label: 'Har förmåga', icon: '🦴' },
    { id: 'bonecollector_no_ability', role: 'bonecollector', label: 'Ingen förmåga', icon: '🦴' },
  ],
  barista: [
    { id: 'barista_sober', role: 'barista', label: 'Nykter & frisk', icon: '☕' },
    { id: 'barista_twice', role: 'barista', label: 'Agerar två gånger', icon: '☕' },
  ],
  orderly: [
    { id: 'orderly_safe', role: 'orderly', label: 'Skyddad', icon: '🩺' },
  ],
};

// Common generic reminders always available
export const GENERIC_REMINDERS = [
  { id: 'Poisoned', label: 'Förgiftad', icon: '🧪' },
  { id: 'Safe', label: 'Skyddad', icon: '🛡️' },
  { id: 'Drunk', label: 'Berusad', icon: '🍺' },
  { id: 'Mad', label: 'Galen', icon: '🤪' },
  { id: 'Dead', label: 'Dog i natt', icon: '💀' },
];

/**
 * Returns all reminder tokens associated with the characters active in the game,
 * plus generic reminders.
 */
export function getAvailableReminders(activeRoleIds = []) {
  const seen = new Set();
  const list = [];

  // 1. Role-specific reminders for all roles present
  activeRoleIds.forEach((rid) => {
    const roleRems = ROLE_REMINDERS_DB[rid];
    if (Array.isArray(roleRems)) {
      roleRems.forEach((rem) => {
        if (!seen.has(rem.id)) {
          seen.add(rem.id);
          list.push(rem);
        }
      });
    }
  });

  // 2. Generic fallback reminders
  GENERIC_REMINDERS.forEach((rem) => {
    if (!seen.has(rem.id)) {
      seen.add(rem.id);
      list.push(rem);
    }
  });

  return list;
}

/**
 * Resolves icon and label for any reminder ID (canonical or legacy string)
 */
export function resolveReminderInfo(remId) {
  if (!remId) return { id: '', label: '', icon: '🏷️' };

  // Look in all role reminders
  for (const group of Object.values(ROLE_REMINDERS_DB)) {
    const found = group.find((r) => r.id === remId);
    if (found) return found;
  }

  // Look in generic
  const gen = GENERIC_REMINDERS.find((r) => r.id === remId || r.label.toLowerCase() === remId.toLowerCase());
  if (gen) return gen;

  // Fallback for custom or legacy string
  return { id: remId, label: remId, icon: '🏷️' };
}
