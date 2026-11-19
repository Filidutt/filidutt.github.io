import React, { useState, useMemo } from 'react';
import {
  BUILT_IN_MESSAGES,
  MESSAGE_CATEGORIES,
  COLOR_THEMES,
} from '../data/messages';
import { getAllRoles } from '../data/roles';

export function BigTextModal({ message, onClose }) {
  if (!message) return null;

  const theme = COLOR_THEMES[message.color] || COLOR_THEMES.zinc;

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 ${theme.fullscreenBg} text-zinc-100 flex flex-col items-center justify-between p-6 select-none cursor-pointer transition-all animate-fadeIn pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))]`}
    >
      {/* Top Bar with dismiss cue */}
      <div className="w-full flex items-center justify-between text-zinc-400 text-xs sm:text-sm font-semibold max-w-2xl mx-auto">
        <span className="opacity-75">Tryck var som helst för att stänga</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="w-9 h-9 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 flex items-center justify-center text-base"
        >
          ✕
        </button>
      </div>

      {/* Main Massive Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-3xl mx-auto w-full px-2 space-y-6">
        {message.icon && (
          <div className="text-7xl sm:text-9xl drop-shadow-2xl animate-scaleUp">
            {message.icon}
          </div>
        )}

        <div className="space-y-3">
          <h1
            className={`font-black uppercase tracking-tight leading-none text-center drop-shadow-md ${theme.text} ${
              message.text.length > 25
                ? 'text-3xl sm:text-5xl md:text-6xl'
                : message.text.length > 12
                ? 'text-4xl sm:text-6xl md:text-7xl'
                : 'text-6xl sm:text-8xl md:text-9xl'
            }`}
          >
            {message.text}
          </h1>

          {message.subtext && (
            <p className="text-base sm:text-2xl text-zinc-300 font-medium max-w-xl mx-auto leading-relaxed">
              {message.subtext}
            </p>
          )}
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="text-center text-[11px] sm:text-xs text-zinc-500 uppercase tracking-widest font-bold">
        Blood on the Clocktower • Pocket Grimoire
      </div>
    </div>
  );
}

export default function MessagesView({
  favoriteMessageIds = [],
  onToggleFavorite,
  customMessages = [],
  onCreateCustomMessage,
  onDeleteCustomMessage,
}) {
  const [activeCategory, setActiveCategory] = useState('favorites');
  const [searchQuery, setSearchQuery] = useState('');

  // Free text quick show
  const [freeText, setFreeText] = useState('');
  const [freeTextColor, setFreeTextColor] = useState('amber');
  const [freeTextIcon, setFreeTextIcon] = useState('💬');

  // Role Token in Big Text
  const [selectedRoleToken, setSelectedRoleToken] = useState('');
  const [roleCustomAction, setRoleCustomAction] = useState('Du får veta den här karaktären');

  // Active Fullscreen Big Text modal
  const [activeBigText, setActiveBigText] = useState(null);

  // New Custom Message Modal
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newMsgText, setNewMsgText] = useState('');
  const [newMsgIcon, setNewMsgIcon] = useState('📢');
  const [newMsgColor, setNewMsgColor] = useState('amber');
  const [newMsgDesc, setNewMsgDesc] = useState('');

  const allRoles = useMemo(() => getAllRoles(), []);

  // Merge built-in + custom messages
  const combinedMessages = useMemo(() => {
    return [...BUILT_IN_MESSAGES, ...customMessages];
  }, [customMessages]);

  // Filter messages
  const filteredMessages = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return combinedMessages.filter((msg) => {
      // Category filter
      if (activeCategory === 'favorites') {
        if (!favoriteMessageIds.includes(msg.id)) return false;
      } else if (activeCategory === 'custom') {
        if (msg.category !== 'custom') return false;
      } else if (activeCategory !== 'all') {
        if (msg.category !== activeCategory) return false;
      }

      // Query filter
      if (q) {
        const matchText = msg.text.toLowerCase().includes(q);
        const matchDesc = msg.description ? msg.description.toLowerCase().includes(q) : false;
        if (!matchText && !matchDesc) return false;
      }

      return true;
    });
  }, [combinedMessages, activeCategory, favoriteMessageIds, searchQuery]);

  // Handler for showing free text
  const handleShowFreeText = () => {
    if (!freeText.trim()) return;
    setActiveBigText({
      text: freeText.trim(),
      icon: freeTextIcon,
      color: freeTextColor,
    });
  };

  // Handler for showing role token
  const handleShowRoleToken = () => {
    if (!selectedRoleToken) return;
    const roleObj = allRoles.find((r) => r.id === selectedRoleToken);
    if (!roleObj) return;

    setActiveBigText({
      text: roleObj.name,
      icon: roleObj.icon,
      color:
        roleObj.team === 'demon' || roleObj.team === 'minion'
          ? 'red'
          : roleObj.team === 'traveller'
          ? 'purple'
          : 'blue',
      subtext: roleCustomAction ? `${roleCustomAction} (${roleObj.editionLabel || 'Officiell'})` : '',
    });
  };

  // Handler for creating custom message
  const handleSaveCustomMessage = (e) => {
    e.preventDefault();
    if (!newMsgText.trim()) return;

    const newMsg = {
      id: 'custom_msg_' + Date.now(),
      category: 'custom',
      text: newMsgText.trim(),
      icon: newMsgIcon || '💬',
      color: newMsgColor,
      description: newMsgDesc.trim() || 'Eget meddelande från berättaren',
    };

    onCreateCustomMessage(newMsg);
    // Auto-favorite new custom message for convenience
    onToggleFavorite(newMsg.id);

    setNewMsgText('');
    setNewMsgDesc('');
    setShowCreateModal(false);
  };

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto w-full space-y-6 pb-28 md:pb-12 select-none animate-fadeIn">
      {/* Fullscreen Big Text Modal */}
      <BigTextModal message={activeBigText} onClose={() => setActiveBigText(null)} />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-zinc-100 flex items-center gap-2">
            <span>💬</span>
            <span>Meddelanden & stor text</span>
          </h1>
          <p className="text-xs text-zinc-400 mt-0.5">
            Tyst kommunikation med hög kontrast för mörka rum och spelare långt bort.
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold rounded-xl text-xs transition-all shadow-md flex items-center gap-1 active:scale-95"
        >
          <span>+</span>
          <span>Nytt meddelande</span>
        </button>
      </div>

      {/* QUICK COMMUNICATOR BOX 1: Free Text On-The-Fly */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 space-y-3 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-base">✍️</span>
            <h2 className="text-xs font-bold text-zinc-200 uppercase tracking-wider">
              Fritext i stor text
            </h2>
          </div>
          <span className="text-[11px] text-zinc-400">Skriv och visa över hela rummet</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={freeText}
            onChange={(e) => setFreeText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleShowFreeText()}
            placeholder="Skriv valfritt meddelande (t.ex. Du är avrättad, Använder du ditt dråparskott?)..."
            className="flex-1 bg-zinc-950 border border-zinc-700/80 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-amber-400"
          />

          <div className="flex items-center gap-2">
            {/* Emoji icon input */}
            <input
              type="text"
              value={freeTextIcon}
              onChange={(e) => setFreeTextIcon(e.target.value)}
              title="Egen emoji till stora texten"
              className="w-10 bg-zinc-800 border border-zinc-700 rounded-xl py-2 text-center text-sm focus:outline-none"
            />

            {/* Color selector */}
            <select
              value={freeTextColor}
              onChange={(e) => setFreeTextColor(e.target.value)}
              className="bg-zinc-800 border border-zinc-700 rounded-xl px-2.5 py-2 text-xs text-zinc-200 focus:outline-none"
            >
              <option value="amber">Bärnsten 🟡</option>
              <option value="green">Grön 🟢</option>
              <option value="red">Röd 🔴</option>
              <option value="blue">Blå 🔵</option>
              <option value="purple">Lila 🟣</option>
              <option value="zinc">Vit ⚪</option>
            </select>

            <button
              onClick={handleShowFreeText}
              disabled={!freeText.trim()}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-bold rounded-xl transition-all disabled:opacity-50 shadow-md shrink-0 flex items-center gap-1.5 active:scale-95"
            >
              <span>Visa stor text</span>
              <span>👁️</span>
            </button>
          </div>
        </div>
      </div>

      {/* QUICK COMMUNICATOR BOX 2: Character Token in Big Text */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 space-y-3 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-base">🃏</span>
            <h2 className="text-xs font-bold text-zinc-200 uppercase tracking-wider">
              Visa karaktärspolett
            </h2>
          </div>
          <span className="text-[11px] text-zinc-400">Stor ikon & rollnamn</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {/* Character select */}
          <select
            value={selectedRoleToken}
            onChange={(e) => setSelectedRoleToken(e.target.value)}
            className="sm:col-span-1 bg-zinc-950 border border-zinc-700/80 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-amber-400"
          >
            <option value="">-- Välj karaktär --</option>
            {allRoles.map((r) => (
              <option key={r.id} value={r.id}>
                {r.icon} {r.name} ({r.teamName})
              </option>
            ))}
          </select>

          {/* Subtext prompt */}
          <input
            type="text"
            value={roleCustomAction}
            onChange={(e) => setRoleCustomAction(e.target.value)}
            placeholder="Instruktion (t.ex. Du får veta den här karaktären)"
            className="sm:col-span-1 bg-zinc-950 border border-zinc-700/80 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-amber-400"
          />

          <button
            onClick={handleShowRoleToken}
            disabled={!selectedRoleToken}
            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-750 text-amber-300 hover:text-amber-200 border border-zinc-700 rounded-xl text-xs font-bold transition-all disabled:opacity-40 flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
          >
            <span>Visa rollpolett</span>
            <span>👁️</span>
          </button>
        </div>
      </div>

      {/* Search Cues */}
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 text-sm">🔍</span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Sök signaler & uppmaningar (t.ex. ja, välj, förgiftad, vakna)..."
          className="w-full bg-zinc-900 border border-zinc-700/80 rounded-2xl pl-10 pr-9 py-2 text-xs sm:text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-200 text-sm w-5 h-5 flex items-center justify-center rounded-full bg-zinc-800"
          >
            ✕
          </button>
        )}
      </div>

      {/* Category Filter Pills */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
            Kategorier & favoriter
          </span>
          <span className="text-[11px] text-zinc-400">
            {favoriteMessageIds.length} Stjärnmärkta ⭐
          </span>
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {Object.entries(MESSAGE_CATEGORIES).map(([key, cat]) => {
            const isSel = activeCategory === key;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all flex items-center gap-1.5 border ${
                  isSel
                    ? 'bg-amber-500 text-zinc-950 font-bold border-amber-400 shadow-md'
                    : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Messages Grid */}
      {filteredMessages.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
          {filteredMessages.map((msg) => {
            const isFav = favoriteMessageIds.includes(msg.id);
            const theme = COLOR_THEMES[msg.color] || COLOR_THEMES.zinc;

            return (
              <div
                key={msg.id}
                onClick={() => setActiveBigText(msg)}
                className={`${theme.bg} border ${theme.border} hover:scale-[1.02] rounded-2xl p-3 flex flex-col justify-between transition-all cursor-pointer shadow-sm relative group`}
              >
                {/* Favorite Star Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(msg.id);
                  }}
                  title={isFav ? 'Ta bort från favoriter' : 'Lägg till i favoriter'}
                  className={`absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center text-sm transition-all ${
                    isFav
                      ? 'text-amber-400 bg-amber-950/80 border border-amber-500/50'
                      : 'text-zinc-500 hover:text-zinc-300 bg-zinc-900/60'
                  }`}
                >
                  {isFav ? '★' : '☆'}
                </button>

                {/* Delete button if custom */}
                {msg.category === 'custom' && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (confirm(`Radera eget meddelande "${msg.text}"?`)) {
                        onDeleteCustomMessage(msg.id);
                      }
                    }}
                    title="Radera meddelande"
                    className="absolute top-2 left-2 text-zinc-500 hover:text-red-400 text-xs w-6 h-6 flex items-center justify-center"
                  >
                    ✕
                  </button>
                )}

                <div className="space-y-1.5 pt-1 text-center">
                  <div className="text-3xl sm:text-4xl">{msg.icon}</div>
                  <h3
                    className={`font-black uppercase tracking-tight text-xs sm:text-sm leading-tight ${theme.text}`}
                  >
                    {msg.text}
                  </h3>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[10px] text-zinc-400 font-medium line-clamp-1">
                    {msg.description || 'Tryck för att visa'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 text-center space-y-2">
          <div className="text-3xl">⭐</div>
          <p className="text-sm font-semibold text-zinc-300">
            {activeCategory === 'favorites' ? 'Inga favoriter än' : 'Inga meddelanden hittades'}
          </p>
          <p className="text-xs text-zinc-500 max-w-sm mx-auto">
            {activeCategory === 'favorites'
              ? 'Stjärnmärk (★) de signaler du använder mest, så har du dem nära till hands under natten.'
              : 'Välj en annan kategori eller skapa ett nytt meddelande.'}
          </p>
          {activeCategory === 'favorites' && (
            <button
              onClick={() => setActiveCategory('all')}
              className="mt-2 px-4 py-2 bg-amber-500 text-zinc-950 font-bold rounded-xl text-xs"
            >
              Visa alla meddelanden ➔
            </button>
          )}
        </div>
      )}

      {/* CREATE CUSTOM MESSAGE MODAL */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <form
            onSubmit={handleSaveCustomMessage}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-md w-full p-5 space-y-4 shadow-2xl animate-scaleUp"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-zinc-100 flex items-center gap-2">
                <span>✍️</span>
                <span>Skapa eget meddelande</span>
              </h3>
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="text-zinc-400 hover:text-zinc-200 text-sm"
              >
                ✕
              </button>
            </div>

            {/* Message Text */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-zinc-300 uppercase">
                Meddelandetext (stor text)
              </label>
              <input
                type="text"
                required
                value={newMsgText}
                onChange={(e) => setNewMsgText(e.target.value)}
                placeholder="t.ex. Du är Fang Gu nu!"
                className="w-full bg-zinc-950 border border-zinc-700/80 rounded-xl px-3 py-2 text-xs sm:text-sm text-zinc-100 focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Icon & Color */}
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-300 uppercase">Emoji</label>
                <input
                  type="text"
                  value={newMsgIcon}
                  onChange={(e) => setNewMsgIcon(e.target.value)}
                  placeholder="e.g. 🗡️"
                  className="w-full bg-zinc-950 border border-zinc-700/80 rounded-xl px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-400 text-center text-lg"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-300 uppercase">Färg</label>
                <select
                  value={newMsgColor}
                  onChange={(e) => setNewMsgColor(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-700/80 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-amber-400"
                >
                  <option value="amber">Bärnsten 🟡</option>
                  <option value="green">Grön 🟢</option>
                  <option value="red">Röd 🔴</option>
                  <option value="blue">Blå 🔵</option>
                  <option value="purple">Lila 🟣</option>
                  <option value="pink">Rosa 🌸</option>
                  <option value="zinc">Neutral ⚪</option>
                </select>
              </div>
            </div>

            {/* Optional Description */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-zinc-300 uppercase">
                Underrubrik / beskrivning (valfritt)
              </label>
              <input
                type="text"
                value={newMsgDesc}
                onChange={(e) => setNewMsgDesc(e.target.value)}
                placeholder="t.ex. Visa när Fang Gu hoppar till en utböling"
                className="w-full bg-zinc-950 border border-zinc-700/80 rounded-xl px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="flex-1 py-2.5 bg-zinc-800 hover:bg-zinc-750 text-zinc-300 font-semibold rounded-xl text-xs border border-zinc-700"
              >
                Avbryt
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold rounded-xl text-xs transition-all shadow-md"
              >
                Spara & lägg till i favoriter ⭐
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
