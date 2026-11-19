import React, { useState, useMemo } from 'react';
import { BookOpen, FileText, Search, X, Eye } from 'lucide-react';
import { getAllRoles, EDITIONS } from '../data/roles';

const TEAM_LABELS = {
  all: { label: 'Alla lag', badge: 'bg-zinc-800/80 text-zinc-300 border-zinc-700/60' },
  townsfolk: { label: 'Stadsbor', badge: 'bg-blue-950/50 text-blue-300 border-blue-900/50' },
  outsider: { label: 'Utbölingar', badge: 'bg-cyan-950/50 text-cyan-300 border-cyan-900/50' },
  minion: { label: 'Hantlangare', badge: 'bg-orange-950/50 text-orange-300 border-orange-900/50' },
  demon: { label: 'Demoner', badge: 'bg-rose-950/50 text-rose-300 border-rose-900/50' },
  traveller: { label: 'Resenärer', badge: 'bg-purple-950/50 text-purple-300 border-purple-900/50' },
};

const GLOSSARY_RULES = [
  {
    term: 'Berusad & förgiftad',
    icon: '🍺',
    desc: 'En berusad eller förgiftad spelare har INGEN förmåga, men tror att den har det. Berättaren får ge falsk eller sann information efter eget val. Om förmågan skulle orsaka ett dödsfall misslyckas den.',
  },
  {
    term: 'Galenskap',
    icon: '🧠',
    desc: 'En spelare som är "galen" över något försöker övertyga gruppen om att det är sant. Om spelaren bryter galenskapen eller inte är uppriktig får berättaren avrätta den eller utdela straffet.',
  },
  {
    term: 'Döda spelares röster (spökröster)',
    icon: '👻',
    desc: 'Döda spelare får fortfarande delta fritt i diskussionerna. Varje död spelare har exakt EN spökröst kvar resten av spelet. När den är använd kan spelaren inte rösta igen.',
  },
  {
    term: 'Resenärer',
    icon: '🧳',
    desc: 'Resenärer kommer sent eller går tidigt. De räknas inte in i antalet spelare för fördelningen mellan gott och ont eller för majoriteten vid avrättning. De kan förvisas med enkel majoritet utan att dagen tar slut.',
  },
  {
    term: 'Levande grannar',
    icon: '👥',
    desc: 'Döda spelare hoppas över när man räknar "levande grannar" (t.ex. för Empat, Tedam, Kock, No Dashii). Cirkeln sluts över de döda.',
  },
  {
    term: 'Nattordning & första natten',
    icon: '🌙',
    desc: 'Hantlangare och demoner får veta vilka de andra är natt 1 (utom i Sects & Violets eller när Vallmoodlaren är i spel). Demonen dödar från natt 2 och framåt (förmågor markerade med asterisk).',
  },
];

export default function CompendiumView({ onShowRoleFullscreen }) {
  const [activeSubTab, setActiveSubTab] = useState('characters'); // 'characters' | 'rules'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('all');
  const [selectedEdition, setSelectedEdition] = useState('all');

  const allRoles = useMemo(() => getAllRoles(), []);

  // Filter roles based on query, team, and edition
  const filteredRoles = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return allRoles.filter((r) => {
      // Team filter
      if (selectedTeam !== 'all' && r.team !== selectedTeam) {
        return false;
      }
      // Edition filter
      if (selectedEdition !== 'all' && r.edition !== selectedEdition) {
        return false;
      }
      // Query filter
      if (q) {
        const matchName = r.name.toLowerCase().includes(q);
        const matchAbility = r.ability.toLowerCase().includes(q);
        const matchId = r.id.toLowerCase().includes(q);
        if (!matchName && !matchAbility && !matchId) return false;
      }
      return true;
    });
  }, [allRoles, searchQuery, selectedTeam, selectedEdition]);

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto w-full space-y-5 pb-24 md:pb-12 select-none animate-fadeIn">
      {/* Top Compendium Header */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-zinc-300" />
            <h1 className="text-lg sm:text-xl font-black text-zinc-100 tracking-tight">
              Kompendium
            </h1>
          </div>
          <span className="text-xs font-medium text-zinc-300 bg-zinc-800 px-2.5 py-0.5 rounded-full border border-zinc-700">
            {allRoles.length} Karaktärer
          </span>
        </div>
        <p className="text-xs text-zinc-400">
          Alla officiella karaktärer, regelförtydliganden och visning med stor text.
        </p>
      </div>

      {/* Sub-sections tabs */}
      <div className="grid grid-cols-2 gap-1 bg-zinc-900 p-1 rounded-xl border border-zinc-800 text-xs font-medium max-w-xs">
        <button
          onClick={() => setActiveSubTab('characters')}
          className={`py-1.5 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
            activeSubTab === 'characters'
              ? 'bg-zinc-800 text-zinc-100 border border-zinc-700 shadow-sm'
              : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Karaktärer</span>
        </button>
        <button
          onClick={() => setActiveSubTab('rules')}
          className={`py-1.5 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
            activeSubTab === 'rules'
              ? 'bg-zinc-800 text-zinc-100 border border-zinc-700 shadow-sm'
              : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Regler & ordlista</span>
        </button>
      </div>

      {/* SUB-SECTION 1: CHARACTERS */}
      {activeSubTab === 'characters' && (
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Sök på karaktär eller förmåga (t.ex. förgift, avrätta, granne)..."
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-9 py-2.5 text-xs sm:text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-200 text-sm w-5 h-5 flex items-center justify-center rounded-full bg-zinc-800"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Team Filter Pills (No emojis) */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
              Filtrera på lag
            </span>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {Object.entries(TEAM_LABELS).map(([k, v]) => {
                const isSel = selectedTeam === k;
                return (
                  <button
                    key={k}
                    onClick={() => setSelectedTeam(k)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium shrink-0 transition-colors border ${
                      isSel
                        ? 'bg-zinc-800 text-zinc-100 border-zinc-600 shadow-sm'
                        : 'bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:border-zinc-700'
                    }`}
                  >
                    <span>{v.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Edition Filter Pills */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
              Filtrera på utgåva
            </span>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {Object.entries(EDITIONS).map(([k, v]) => {
                const isSel = selectedEdition === k;
                return (
                  <button
                    key={k}
                    onClick={() => setSelectedEdition(k)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium shrink-0 transition-colors border ${
                      isSel
                        ? 'bg-zinc-800 text-zinc-100 border-zinc-600 shadow-sm'
                        : 'bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:border-zinc-700'
                    }`}
                  >
                    <span>{v.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Filter Count Status */}
          <div className="flex items-center justify-between text-xs text-zinc-400 px-1 pt-1">
            <span>
              Visar <strong className="text-zinc-200">{filteredRoles.length}</strong> av {allRoles.length} roller
            </span>
            {(searchQuery || selectedTeam !== 'all' || selectedEdition !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTeam('all');
                  setSelectedEdition('all');
                }}
                className="text-zinc-400 hover:text-zinc-200 hover:underline text-[11px] font-medium"
              >
                Rensa alla filter
              </button>
            )}
          </div>

          {/* Characters Grid */}
          {filteredRoles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredRoles.map((role) => {
                const teamStyle = TEAM_LABELS[role.team] || TEAM_LABELS.all;
                const editionInfo = EDITIONS[role.edition] || { label: 'Egen' };

                return (
                  <div
                    key={role.id}
                    className="bg-zinc-900/90 border border-zinc-800 hover:border-zinc-750 rounded-2xl p-4 transition-all flex flex-col justify-between space-y-3 shadow-sm hover:shadow-md"
                  >
                    <div className="space-y-2">
                      {/* Card Header: Icon, Name, Badges */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <span className="text-2xl w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700 flex items-center justify-center shrink-0 overflow-hidden">
                            {role.icon}
                          </span>
                          <div>
                            <h2 className="text-sm font-bold text-zinc-100 leading-snug">
                              {role.name}
                            </h2>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <span
                                className={`text-[9px] font-bold uppercase px-1.5 py-0.2 rounded border ${teamStyle.badge}`}
                              >
                                {teamStyle.label}
                              </span>
                              <span className="text-[9px] text-zinc-400 bg-zinc-800/80 px-1.5 py-0.2 rounded border border-zinc-700/60">
                                {editionInfo.label}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Ability text */}
                      <p className="text-xs text-zinc-300 leading-relaxed bg-zinc-950/60 p-2.5 rounded-xl border border-zinc-800/60">
                        {role.ability || 'Ingen officiell beskrivning finns.'}
                      </p>
                    </div>

                    {/* Show to player CTA (Neutral styling) */}
                    <div className="pt-1 flex items-center justify-end">
                      <button
                        onClick={() =>
                          onShowRoleFullscreen({
                            title: role.name,
                            icon: role.icon,
                            subtitle: `${teamStyle.label} • ${editionInfo.label}`,
                            body: role.ability,
                          })
                        }
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:border-zinc-700 rounded-lg text-xs font-medium transition-colors shadow-sm active:scale-95"
                        title="Visa kortet i helskärm för att tyst visa det för en spelare"
                      >
                        <Eye className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Visa för spelare</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 text-center space-y-3">
              <Search className="w-8 h-8 text-zinc-600 mx-auto" />
              <p className="text-sm text-zinc-300 font-semibold">Inga karaktärer hittades</p>
              <p className="text-xs text-zinc-500">
                Inga roller matchade sökningen "{searchQuery}". Prova ett annat sökord eller rensa filtren.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTeam('all');
                  setSelectedEdition('all');
                }}
                className="px-4 py-2 bg-zinc-800 text-zinc-200 text-xs font-bold rounded-xl border border-zinc-700 hover:bg-zinc-700 transition-colors"
              >
                Rensa filter
              </button>
            </div>
          )}
        </div>
      )}

      {/* SUB-SECTION 2: RULES & GLOSSARY */}
      {activeSubTab === 'rules' && (
        <div className="space-y-3">
          {GLOSSARY_RULES.map((rule) => (
            <div
              key={rule.term}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 space-y-1.5 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0 overflow-hidden">
                  {rule.icon}
                </span>
                <h2 className="text-sm font-bold text-zinc-100">{rule.term}</h2>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed pl-10">
                {rule.desc}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
