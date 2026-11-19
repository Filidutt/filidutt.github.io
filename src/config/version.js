// Global build-time constants injected by Vite via `define` in vite.config.js
/* global __APP_VERSION__, __GIT_HASH__, __BUILD_TIME__ */

export const APP_VERSION = typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '0.3.5';
export const GIT_HASH = typeof __GIT_HASH__ !== 'undefined' ? __GIT_HASH__ : 'dev';
export const BUILD_TIME = typeof __BUILD_TIME__ !== 'undefined' ? __BUILD_TIME__ : '';

export const GITHUB_REPO = 'https://github.com/IvanK-9/grimoire';
export const GITLAB_REPO = 'https://gitlab.com/commi-union/botc/botc-pocket-grimoire';

export const GITHUB_COMMIT_URL =
  GIT_HASH && GIT_HASH !== 'dev'
    ? `${GITHUB_REPO}/commit/${GIT_HASH}`
    : `${GITHUB_REPO}/commits/development`;

export const RELEASE_HIGHLIGHTS = [
  'v0.3.5: Mobilanpassat gränssnitt och renare utseende',
  'v0.3.5: Nya SVG-ikoner (Lucide) i stället för emojier i knappar och kontroller',
  'v0.3.5: Tydligare färgschema (bärnsten bara för huvudknappen, lugna gråtoner för flikar och filter)',
  'v0.3.5: Navigeringsfält längst ner på mobilen',
  'v0.3.5: Stegvisare vid spelstart (Påse ➔ Bordet)',
  'v0.3.5: Rättad ikon för Kock på poletter',
  'v0.3.4: Digital utdelning (slumpa roller till alla platser med ett tryck, utan fysisk påse)',
  'v0.3.4: Roller utanför skriptet (tilldela valfri karaktär, t.ex. för Grophäxa, Barberare och Alkemist)',
  'v0.3.4: Bord och påse behålls när man byter skript',
  'v0.3.4: Designbeslut dokumenterade i ADR-0011',
  'v0.3.3: Officiella påminnelsepoletter för alla roller i skriptet',
  'v0.3.3: Påminnelser visas direkt på platserna runt bordet',
  'v0.3.3: Ny resenär i Trouble Brewing: Syndabock 🐐',
  'v0.3.3: Välj mellan skriptets resenärer och alla resenärer',
  'v0.3.3: Märkning av experimentella resenärer (Vårdbiträde, Vodyanoi)',
  'v0.3.2: Spökröster (👻 på döda spelare, kan markeras som använd)',
  'v0.3.2: Ångra-knapp (de senaste 15 ändringarna vid bordet)',
  'v0.3.1: Rättad räkning av fyllots polett och val av fyllots förklädnad',
  'v0.3.1: 3 demonbluffar (slumpa och visa i helskärm för demon/spion)',
  '5 huvuddelar: Hem, Kompendium, Skript, Spel, Meddelanden',
  'Fungerar offline (PWA) och uppdateras automatiskt',
];
