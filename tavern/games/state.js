/* Pirate Strike — Meyxana reputation, daily table rewards and statistics.
 * Gold goes through the existing wallet (PirateEconomy.earn): every paid win is a receipt
 * 'TV<date>' / '<game>:<slot>', so a reward can never be paid twice even if this file's own
 * save fails or the same result is reported again. No entry fees, no stakes, no real money.
 * Saved in 'pf-tavern-v1' (+ backup). Missing/old saves start clean; other game saves are untouched. */
(function (root, factory) { const api = factory(root); if (typeof module === 'object' && module.exports) module.exports = api; else root.PirateTavernState = api; })(typeof self !== 'undefined' ? self : this, function (root) {
 'use strict';
 const KEY = 'pf-tavern-v1', BACKUP = 'pf-tavern-v1-backup', LIMIT = 2;
 // gold per rewarded win (small, see README: at most ~96 gold/day at the Master table)
 const REWARD = { checkers: { easy: 10, normal: 20, master: 30 }, xo: { easy: 4, normal: 8 }, dice: { normal: 8 }, knife: { normal: 10 } };
 const REP = { checkers: { easy: 3, normal: 5, master: 7 }, xo: { easy: 1, normal: 2 }, dice: { normal: 2 }, knife: { normal: 2 } };
 const RANKS = [0, 10, 30, 60];          // Stranger, Regular, Trusted sailor, Tavern legend
 const MASTER_REP = 30;                  // reputation that unlocks the Master checkers table
 const GAMES = Object.keys(REWARD);
 const dict = v => v !== null && typeof v === 'object' && !Array.isArray(v);
 const today = (now = Date.now()) => { const d = new Date(now); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
 const blank = () => ({ v: 1, rep: 0, daily: { date: '', wins: {}, done: {} }, stats: { played: {}, won: {}, best: {} }, seen: {} });
 function valid(s) {
  if (!dict(s) || s.v !== 1 || !Number.isInteger(s.rep) || s.rep < 0 || s.rep > 1e6 || !dict(s.daily) || !dict(s.stats)) return false;
  if (typeof s.daily.date !== 'string' || !dict(s.daily.wins) || !dict(s.daily.done)) return false;
  for (const k of ['played', 'won', 'best']) if (!dict(s.stats[k])) return false;
  if (!dict(s.seen)) s.seen = {};
  return true;
 }
 function create(opts = {}) {
  const store = opts.storage !== undefined ? opts.storage : (() => { try { return root.localStorage; } catch { return null; } })();
  const E = () => (opts.economy !== undefined ? opts.economy : root.PirateEconomy) || null;
  const now = opts.now || (() => Date.now());
  const get = k => { try { return store ? store.getItem(k) : null; } catch { return null; } };
  const set = (k, v) => { try { if (!store) return false; store.setItem(k, v); return true; } catch { return false; } };
  function read() {
   for (const k of [KEY, BACKUP]) { try { const s = JSON.parse(get(k) || 'null'); if (valid(s)) return s; } catch {} }
   return blank();
  }
  function roll(s) { const d = today(now()); if (s.daily.date !== d) s.daily = { date: d, wins: {}, done: {} }; return s; }
  function write(s) { const raw = JSON.stringify(s); if (!set(KEY, raw)) return false; set(BACKUP, raw); return true; }
  const matches = new Map();
  const api = {
   LIMIT, REWARD, REP, RANKS, MASTER_REP, GAMES,
   snapshot() { return roll(read()); },
   rep() { return read().rep; },
   rank() { const rep = read().rep; let i = 0; while (i + 1 < RANKS.length && rep >= RANKS[i + 1]) i++; return { i, rep, next: RANKS[i + 1] ?? null }; },
   masterUnlocked() { return read().rep >= MASTER_REP; },
   /** what a win pays right now, shown before the game starts */
   daily(game, diff = 'normal') { const s = roll(read()), used = s.daily.wins[game] || 0, amount = REWARD[game]?.[diff] ?? REWARD[game]?.normal ?? 0; return { used, limit: LIMIT, left: Math.max(0, LIMIT - used), amount: used < LIMIT ? amount : 0, rep: used < LIMIT ? (REP[game]?.[diff] ?? REP[game]?.normal ?? 0) : 0 }; },
   msUntilReset() { const n = new Date(now()); const m = new Date(n.getFullYear(), n.getMonth(), n.getDate() + 1); return m - n; },
   seen(key, mark) { const s = read(); if (mark) { if (!s.seen[key]) { s.seen[key] = 1; write(s); } return true; } return !!s.seen[key]; },
   begin(game, diff = 'normal') { const id = game + '-' + now().toString(36) + '-' + Math.random().toString(36).slice(2, 8); matches.set(id, { game, diff, done: false }); return id; },
   /** report a finished match once: outcome 'win' | 'loss' | 'draw'. Returns what was granted. */
   finish(id, outcome, extra = {}) {
    const m = matches.get(id); if (!m) return { code: 'unknown' };
    if (m.done) return Object.assign({ already: true }, m.result);
    const s = roll(read()), g = m.game;
    s.stats.played[g] = (s.stats.played[g] || 0) + 1; if (outcome === 'win') s.stats.won[g] = (s.stats.won[g] || 0) + 1;
    if (Number.isFinite(extra.best)) s.stats.best[g] = Math.max(s.stats.best[g] || 0, extra.best);
    let gold = 0, rep = 0, limited = false, code = null;
    if (outcome === 'win' && !s.daily.done[id]) {
     const used = s.daily.wins[g] || 0;
     if (used >= LIMIT) limited = true;
     else {
      const slot = used + 1, amount = REWARD[g]?.[m.diff] ?? REWARD[g]?.normal ?? 0, eco = E(), scope = 'TV' + s.daily.date, rid = g + ':' + slot;
      if (eco) { gold = eco.earn(scope, rid, amount); if (!gold && !eco.claimed(scope, rid)) code = 'storage'; }
      if (!code) { s.daily.wins[g] = slot; s.daily.done[id] = 1; rep = REP[g]?.[m.diff] ?? REP[g]?.normal ?? 0; s.rep += rep; }
     }
    }
    if (!write(s) && !code) code = 'storage';
    const result = { outcome, gold, rep, limited, code, daily: api.daily(g, m.diff) };
    m.done = true; m.result = result; return result;
   },
   reset() { set(KEY, JSON.stringify(blank())); set(BACKUP, JSON.stringify(blank())); }
  };
  return api;
 }
 return { create, today, KEY };
});
