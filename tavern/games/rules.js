/* Pirate Strike — Meyxana table games: pure rule engines and opponents (no DOM).
 * Shared by the in-game UI (games.js) and the Node unit tests (v3/test-tavern-rules.cjs).
 *
 * Checkers: Russian draughts, the variant played across Azerbaijan and the region. The same rules
 * are explained to the player before the game:
 *  - 8×8 board, 12 men each on the dark squares; the player (white) moves first.
 *  - Men move one square diagonally forward; they capture forward AND backward.
 *  - Capturing is compulsory. A capture must continue while another capture is possible (one turn).
 *    A piece is removed only after the move, and it cannot be jumped twice.
 *  - A man reaching the far row becomes a king; if this happens mid-capture it continues as a king.
 *  - Kings move any distance diagonally and capture at a distance, landing on any free square beyond.
 *  - When several captures exist the player may choose any of them (no "capture the most" rule).
 *  - A side with no legal move loses. 30 moves in a row by kings only without a capture is a draw.
 * X–O: classic 3×3; the first move alternates between games.
 * Dice ("Pig" to 50): roll one die; 2–6 is added to the turn total; HOLD banks it; a 1 loses the
 * turn total and passes the die. First to 50 wins.
 * Knives: a rotating wooden target; a throw that lands within MIN_GAP of a knife already stuck fails. */
(function (root, factory) { const api = factory(); if (typeof module === 'object' && module.exports) module.exports = api; else root.PirateTavernRules = api; })(typeof self !== 'undefined' ? self : this, function () {
 'use strict';

 /* ------------------------------------------------------------------ checkers (Russian draughts) */
 // board: Array(64), index r*8+c, r=0 is the top (black's home). Values: 0 empty, 1 white man, 2 white king, -1 black man, -2 black king.
 // White = player (bottom, moves up = r-1). Black = opponent.
 const W = 1, B = -1, DIRS = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
 const on = (r, c) => r >= 0 && r < 8 && c >= 0 && c < 8;
 const side = v => (v > 0 ? W : v < 0 ? B : 0);
 const isKing = v => Math.abs(v) === 2;
 function initialBoard() {
  const b = new Array(64).fill(0);
  for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) if ((r + c) % 2 === 1) { if (r < 3) b[r * 8 + c] = -1; else if (r > 4) b[r * 8 + c] = 1; }
  return b;
 }
 function newCheckers() { return { board: initialBoard(), turn: W, quiet: 0, history: 0 }; }
 const promoteRow = s => (s === W ? 0 : 7);
 /* all capture sequences for the piece on `from`: each move = {from, path:[squares landed], caps:[captured squares], to, promote} */
 function capturesFrom(board, from) {
  const v = board[from], s = side(v), out = [];
  function dfs(pos, king, path, caps) {
   const r0 = Math.floor(pos / 8), c0 = pos % 8; let extended = false;
   for (const [dr, dc] of DIRS) {
    if (king) {
     let r = r0 + dr, c = c0 + dc;
     while (on(r, c) && board[r * 8 + c] === 0 || (on(r, c) && r * 8 + c === from && path.length)) { r += dr; c += dc; }   // the moving piece's start square counts as empty
     if (!on(r, c)) continue; const mid = r * 8 + c;
     if (mid === from) continue;
     if (side(board[mid]) !== -s || caps.includes(mid)) continue;
     let lr = r + dr, lc = c + dc;
     const lands = [];
     while (on(lr, lc) && (board[lr * 8 + lc] === 0 || lr * 8 + lc === from) && !caps.includes(lr * 8 + lc)) { lands.push(lr * 8 + lc); lr += dr; lc += dc; }
     if (!lands.length) continue;
     // Russian rule: if from some landing square the capture can continue, only those landing squares are allowed
     const cont = lands.filter(l => canContinue(board, from, l, true, s, [...caps, mid]));
     for (const l of (cont.length ? cont : lands)) { extended = true; dfs(l, true, [...path, l], [...caps, mid]); }
    } else {
     const r = r0 + dr, c = c0 + dc, lr = r0 + 2 * dr, lc = c0 + 2 * dc; if (!on(lr, lc)) continue;
     const mid = r * 8 + c, land = lr * 8 + lc;
     if (side(board[mid]) !== -s || caps.includes(mid)) continue;
     if (board[land] !== 0 && land !== from) continue;
     extended = true; const k = lr === promoteRow(s);
     dfs(land, k, [...path, land], [...caps, mid]);
    }
   }
   if (!extended && caps.length) out.push({ from, path, caps, to: path[path.length - 1], promote: !isKing(v) && (king || path.some(p => Math.floor(p / 8) === promoteRow(s))) });
  }
  dfs(from, isKing(v), [], []);
  return out;
 }
 function canContinue(board, from, pos, king, s, caps) {
  const r0 = Math.floor(pos / 8), c0 = pos % 8;
  for (const [dr, dc] of DIRS) {
   let r = r0 + dr, c = c0 + dc;
   if (king) { while (on(r, c) && (board[r * 8 + c] === 0 || r * 8 + c === from)) { r += dr; c += dc; } }
   if (!on(r, c)) continue; const mid = r * 8 + c;
   if (side(board[mid]) !== -s || caps.includes(mid)) continue;
   const lr = r + dr, lc = c + dc; if (!on(lr, lc)) continue; const l = lr * 8 + lc;
   if ((board[l] === 0 || l === from) && !caps.includes(l)) return true;
  }
  return false;
 }
 function quietFrom(board, from) {
  const v = board[from], s = side(v), r0 = Math.floor(from / 8), c0 = from % 8, out = [];
  for (const [dr, dc] of DIRS) {
   if (isKing(v)) { let r = r0 + dr, c = c0 + dc; while (on(r, c) && board[r * 8 + c] === 0) { out.push({ from, path: [r * 8 + c], caps: [], to: r * 8 + c, promote: false }); r += dr; c += dc; } }
   else { if (dr !== (s === W ? -1 : 1)) continue; const r = r0 + dr, c = c0 + dc; if (on(r, c) && board[r * 8 + c] === 0) out.push({ from, path: [r * 8 + c], caps: [], to: r * 8 + c, promote: r === promoteRow(s) }); }
  }
  return out;
 }
 function legalMoves(state) {
  const { board, turn } = state; let caps = [], quiet = [];
  for (let i = 0; i < 64; i++) if (side(board[i]) === turn) { caps.push(...capturesFrom(board, i)); }
  if (caps.length) return caps;
  for (let i = 0; i < 64; i++) if (side(board[i]) === turn) quiet.push(...quietFrom(board, i));
  return quiet;
 }
 function applyMove(state, m) {
  const b = state.board.slice(), v = b[m.from];
  b[m.from] = 0; for (const c of m.caps) b[c] = 0;
  b[m.to] = m.promote ? 2 * side(v) : v;
  const kingsOnly = !m.caps.length && isKing(v);
  return { board: b, turn: -state.turn, quiet: kingsOnly ? state.quiet + 1 : 0, history: state.history + 1 };
 }
 function result(state) {   // null while playing; 'white' | 'black' | 'draw'
  if (state.quiet >= 30) return 'draw';
  if (!legalMoves(state).length) return state.turn === W ? 'black' : 'white';
  return null;
 }
 function evaluate(board) {   // from black's (AI's) point of view
  let s = 0;
  for (let i = 0; i < 64; i++) { const v = board[i]; if (!v) continue; const r = Math.floor(i / 8), c = i % 8;
   const val = isKing(v) ? 3.2 : 1 + (v < 0 ? r : 7 - r) * .06 + ((c === 0 || c === 7) ? .04 : 0) + ((c > 1 && c < 6 && r > 1 && r < 6) ? .03 : 0);
   s += v < 0 ? val : -val; }
  return s;
 }
 function search(state, depth, alpha, beta, maximizing, budget) {
  budget.n++;
  const moves = legalMoves(state);
  if (!moves.length) return maximizing ? -100 - depth : 100 + depth;
  if (state.quiet >= 30) return 0;
  if (depth <= 0 || budget.n > budget.max) return evaluate(state.board);
  // capture sequences first (better pruning)
  moves.sort((a, b) => b.caps.length - a.caps.length);
  if (maximizing) { let best = -Infinity; for (const m of moves) { best = Math.max(best, search(applyMove(state, m), depth - 1, alpha, beta, false, budget)); alpha = Math.max(alpha, best); if (alpha >= beta) break; } return best; }
  let best = Infinity; for (const m of moves) { best = Math.min(best, search(applyMove(state, m), depth - 1, alpha, beta, true, budget)); beta = Math.min(beta, best); if (alpha >= beta) break; } return best;
 }
 /* opponent (black) move. level: 'easy' | 'normal' | 'master'. rng: () => [0,1) */
 function checkersAI(state, level = 'normal', rng = Math.random) {
  const moves = legalMoves(state); if (!moves.length) return null;
  if (level === 'easy') {
   // shallow: avoids obvious blunders half of the time, otherwise plays a random legal move
   if (rng() < .45) return moves[Math.floor(rng() * moves.length)];
   return bestOf(state, moves, 1, rng);
  }
  return bestOf(state, moves, level === 'master' ? 6 : 4, rng);
 }
 function bestOf(state, moves, depth, rng) {
  const budget = { n: 0, max: depth >= 6 ? 160000 : 40000 }; let best = -Infinity, pick = [];
  for (const m of moves) { const v = search(applyMove(state, m), depth - 1, -Infinity, Infinity, false, budget) + rng() * .02; if (v > best + 1e-9) { best = v; pick = [m]; } else if (Math.abs(v - best) < 1e-9) pick.push(m); }
  return pick[Math.floor(rng() * pick.length)];
 }

 /* ------------------------------------------------------------------ X–O */
 const LINES = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
 function xoWinner(cells) { for (const l of LINES) { const [a, b, c] = l; if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) return { mark: cells[a], line: l }; } return cells.every(Boolean) ? { mark: 'draw', line: null } : null; }
 function xoMinimax(cells, me, turn) {
  const w = xoWinner(cells); if (w) return w.mark === 'draw' ? 0 : w.mark === me ? 10 : -10;
  const scores = [];
  for (let i = 0; i < 9; i++) if (!cells[i]) { cells[i] = turn; scores.push(xoMinimax(cells, me, turn === 'X' ? 'O' : 'X')); cells[i] = null; }
  return turn === me ? Math.max(...scores) - .01 : Math.min(...scores) + .01;
 }
 function xoAI(cells, me, level = 'normal', rng = Math.random) {
  const free = cells.map((v, i) => v ? -1 : i).filter(i => i >= 0); if (!free.length) return -1;
  const other = me === 'X' ? 'O' : 'X';
  const winNow = free.find(i => { const t = cells.slice(); t[i] = me; return xoWinner(t)?.mark === me; });
  const block = free.find(i => { const t = cells.slice(); t[i] = other; return xoWinner(t)?.mark === other; });
  if (level === 'easy') {
   if (winNow !== undefined && rng() < .7) return winNow;
   if (block !== undefined && rng() < .45) return block;
   return free[Math.floor(rng() * free.length)];
  }
  // normal: perfect play, with a small chance of an ordinary (non-losing-at-once) slip on the opening moves
  if (winNow !== undefined) return winNow;
  if (block !== undefined) return block;
  if (free.length >= 7 && rng() < .3) return free[Math.floor(rng() * free.length)];
  let best = -Infinity, pick = [];
  for (const i of free) { const t = cells.slice(); t[i] = me; const s = xoMinimax(t, me, other); if (s > best + 1e-9) { best = s; pick = [i]; } else if (Math.abs(s - best) < 1e-9) pick.push(i); }
  return pick[Math.floor(rng() * pick.length)];
 }

 /* ------------------------------------------------------------------ dice ("Pig" to 50) */
 const DICE_GOAL = 50;
 function newDice(first = 0) { return { scores: [0, 0], turn: first, turnTotal: 0, last: null, winner: null, log: [] }; }
 function diceRoll(st, face) {   // face 1..6 (passed in so the UI animates the real value)
  if (st.winner !== null) return st;
  const s = { ...st, scores: st.scores.slice(), log: st.log.slice(-20) }; s.last = face;
  if (face === 1) { s.log.push({ p: s.turn, face, lost: s.turnTotal }); s.turnTotal = 0; s.turn = 1 - s.turn; }
  else { s.turnTotal += face; s.log.push({ p: s.turn, face }); if (s.scores[s.turn] + s.turnTotal >= DICE_GOAL) { s.scores[s.turn] += s.turnTotal; s.turnTotal = 0; s.winner = s.turn; } }
  return s;
 }
 function diceHold(st) {
  if (st.winner !== null || st.turnTotal === 0) return st;
  const s = { ...st, scores: st.scores.slice(), log: st.log.slice(-20) }; s.scores[s.turn] += s.turnTotal; s.log.push({ p: s.turn, hold: s.turnTotal }); s.turnTotal = 0;
  if (s.scores[s.turn] >= DICE_GOAL) s.winner = s.turn; else s.turn = 1 - s.turn; return s;
 }
 /* the pirate decides to roll (true) or hold (false) */
 function diceAI(st, me = 1) {
  const mine = st.scores[me], theirs = st.scores[1 - me], t = st.turnTotal;
  if (mine + t >= DICE_GOAL) return false;
  if (t === 0) return true;
  const target = theirs >= 40 ? 25 : theirs - mine > 15 ? 22 : mine - theirs > 15 ? 12 : 17;
  return t < target;
 }

 /* ------------------------------------------------------------------ knife throwing */
 const KNIFE = { MIN_GAP: 0.30 };   // radians around the rim (~17°)
 // stage n (1-based): knives to throw, knives already stuck, rotation profile
 function knifeStage(n) {
  const throws = Math.min(9, 4 + n), preset = Math.min(4, Math.floor((n - 1) / 1.5)),
   speed = 1.2 + n * .28, dir = n % 2 ? 1 : -1, wobble = n >= 3 ? Math.min(1.2, .35 + n * .12) : 0, reverse = n >= 4 ? Math.max(1.6, 4 - n * .25) : 0;
  return { n, throws, preset, speed, dir, wobble, reverse };
 }
 // angular velocity at time t for a stage profile (reverses direction every `reverse` seconds from stage 4)
 function knifeSpin(stage, t) {
  let d = stage.dir; if (stage.reverse) d *= Math.floor(t / stage.reverse) % 2 ? -1 : 1;
  return d * stage.speed * (1 + stage.wobble * Math.sin(t * 1.7) * .5);
 }
 const wrap = a => { a %= Math.PI * 2; return a < 0 ? a + Math.PI * 2 : a; };
 function angleGap(a, b) { const d = Math.abs(wrap(a) - wrap(b)); return Math.min(d, Math.PI * 2 - d); }
 /* a knife thrown at the bottom of a target that has rotated by `rot` lands at local angle (π/2 - rot) */
 function knifeHit(stuck, rot) { const local = wrap(Math.PI / 2 - rot); const clash = stuck.some(a => angleGap(a, local) < KNIFE.MIN_GAP); return { local, clash }; }
 function knifePreset(stage, rng = Math.random) { const out = []; let guard = 0; while (out.length < stage.preset && guard++ < 200) { const a = rng() * Math.PI * 2; if (out.every(b => angleGap(a, b) > KNIFE.MIN_GAP * 2.2)) out.push(a); } return out; }

 return {
  checkers: { W, B, initialBoard, newCheckers, legalMoves, applyMove, result, evaluate, ai: checkersAI, capturesFrom },
  xo: { LINES, winner: xoWinner, ai: xoAI },
  dice: { GOAL: DICE_GOAL, newDice, roll: diceRoll, hold: diceHold, ai: diceAI },
  knife: { KNIFE, stage: knifeStage, spin: knifeSpin, hit: knifeHit, preset: knifePreset, angleGap, wrap }
 };
});
