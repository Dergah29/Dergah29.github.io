/* Pirate Strike mobile HUD skin: original SVG artwork for the existing touch controls.
 * Presentation only. The native joystick, touch ownership, button handlers, cooldowns, ammunition rules, ARIA labels,
 * sizes and customised positions stay exactly as each scene builds them; this file only paints on top.
 * Ammunition: a weapon button shows its three golden segments only when its scene reports real ammunition through
 * data-ammo (Arena: native SwordsCanThrow; numbered levels: p.ammo via setAmmo). A weapon with no ammunition rule
 * (the Level 1 voyage pistol) keeps a plain rim.
 */
(function () {
  'use strict';
  if (window.PirateTouchTheme) return;
  const controls = '#fighter-ui .combat button[data-key], #pirate-adventure .av-combat button[data-action], #pirate-level .pl-pad button[data-k]';
  const sticks = '#fighter-ui .joystick, #pirate-adventure .av-stick, #pirate-level .pl-stick';
  const keyKinds = Object.freeze({j: 'attack', k: 'jump', l: 'block', LShift: 'dash', i: 'throw'});
  const NS = 'http://www.w3.org/2000/svg';

  /* ---------------------------------------------------------------- icons (64x64, filled white with a dark edge) */
  const ICONS = Object.freeze({
    attack: '<path d="M33 4l5 15 13-9-6 15 15 2-13 8 10 12-15-4-1 15-8-12-9 12-1-15-15 4 10-12-13-8 15-2-6-15 13 9z"/>' +
            '<path d="M50 6l4-3M58 18l4-1M6 50l-4 3M10 10l-4-4" stroke="#fff" stroke-width="3.5" stroke-linecap="round" fill="none"/>',
    block: '<path d="M32 5l22 8v16c0 15-10 25-22 30C20 54 10 44 10 29V13z"/>' +
           '<path d="M32 14l13 5v10c0 9-6 15-13 19-7-4-13-10-13-19V19z" fill="none" stroke="#a3132a" stroke-width="3.5"/>',
    dash: '<path d="M10 20h22l-6-8h10l12 20-12 20H26l6-8H10z"/><path d="M4 28h12M2 36h10" stroke="#fff" stroke-width="4" stroke-linecap="round"/>',
    jump: '<path d="M32 6l20 22H40v14H24V28H12z"/><path d="M14 52h36" stroke="#fff" stroke-width="5" stroke-linecap="round"/>',
    throw: '<path d="M58 4l2 2-4 14-22 22-10-10L46 10z"/><path d="M14 30l20 20-5 5-20-20z"/><path d="M20 42l4 4-11 11-4-4z"/><circle cx="9" cy="57" r="5"/>',
    pistol: '<path d="M4 20h42l4-4h8v10H32l-2 6h-6l-4 10c-1 3-3 4-6 4H8l7-16H4z"/><circle cx="22" cy="31" r="3" fill="#17141f"/>'
  });
  /* ---------------------------------------------------------------- shared geometry */
  const pt = (r, a) => {const n = (a - 90) * Math.PI / 180; return [(50 + Math.cos(n) * r).toFixed(2), (50 + Math.sin(n) * r).toFixed(2)];};
  const arc = (r, a, b) => {const p = pt(r, a), q = pt(r, b); return `M${p[0]} ${p[1]}A${r} ${r} 0 ${b - a > 180 ? 1 : 0} 1 ${q[0]} ${q[1]}`;};
  // three ammunition segments: upper-left, right, lower-left (degrees clockwise from 12 o'clock), equal gaps
  const SEG = [[-110, -14], [10, 106], [130, 226]];
  let uid = 0;

  function face(kind, id) {
    // per kind: centre highlight, centre, edge
    const P = {attack: ['#5b4ac9', '#2c2178', '#140d3c'], block: ['#ef4a5c', '#b8162d', '#640814'],
      dash: ['#3f6fd0', '#18398a', '#0a1a45'], jump: ['#3a9aa3', '#145a64', '#08272d'],
      weapon: ['#3a3446', '#17141f', '#08070c']}[kind];
    return `<defs><radialGradient id="f${id}" cx="40%" cy="30%" r="75%"><stop offset="0" stop-color="${P[0]}"/><stop offset=".55" stop-color="${P[1]}"/><stop offset="1" stop-color="${P[2]}"/></radialGradient>` +
      `<linearGradient id="r${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9fb3ff"/><stop offset=".5" stop-color="#6f6cff"/><stop offset="1" stop-color="#b685ff"/></linearGradient>` +
      `<filter id="g${id}" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="2.4"/></filter></defs>` +
      `<circle cx="50" cy="53" r="46" fill="#000" opacity=".38" filter="url(#g${id})"/>` +
      `<circle cx="50" cy="50" r="45" fill="url(#f${id})"/>` +
      `<path d="${arc(42, -70, 70)}" stroke="#fff" stroke-opacity=".16" stroke-width="2.4" fill="none" stroke-linecap="round"/>` +
      `<circle cx="50" cy="50" r="45.6" fill="none" stroke="#05030a" stroke-opacity=".7" stroke-width="1.6"/>`;
  }
  function ring(kind, id) {
    if (kind === 'attack') {
      const ticks = [45, 135, 225, 315].map(a => `<path d="${arc(58, a - 9, a + 9)}"/>`).join('');
      return `<circle cx="50" cy="50" r="49" fill="none" stroke="#7d86ff" stroke-width="9" opacity=".55" filter="url(#g${id})"/>` +
        `<circle cx="50" cy="50" r="49" fill="none" stroke="url(#r${id})" stroke-width="6.5"/>` +
        `<circle cx="50" cy="50" r="52.6" fill="none" stroke="#0a0620" stroke-opacity=".75" stroke-width="1.2"/>` +
        `<g fill="none" stroke="#a7b3ff" stroke-width="2.6" stroke-linecap="round" opacity=".85">${ticks}</g>`;
    }
    if (kind === 'block' || kind === 'weapon') {
      const track = SEG.map(([a, b]) => `<path d="${arc(54, a, b)}"/>`).join('');
      const gold = SEG.map(([a, b], i) => `<path class="ps-seg ps-seg-${i + 1}" d="${arc(54, a, b)}"/>`).join('');
      return `<circle class="ps-rim" cx="50" cy="50" r="48" fill="none" stroke="#8d8a9a" stroke-width="2.4" opacity=".85"/>` +
        `<g class="ps-track" fill="none" stroke="#141019" stroke-opacity=".82" stroke-width="8.5" stroke-linecap="round">${track}</g>` +
        `<g class="ps-gold-glow" fill="none" stroke="#ffb53a" stroke-width="8" stroke-linecap="round" opacity=".45" filter="url(#g${id})">${gold}</g>` +
        `<g class="ps-gold" fill="none" stroke="#f7c25a" stroke-width="5.6" stroke-linecap="round">${gold}</g>` +
        `<g class="ps-gold-hi" fill="none" stroke="#fff1c4" stroke-width="1.4" stroke-linecap="round" opacity=".75">${SEG.map(([a, b], i) => `<path class="ps-seg ps-seg-${i + 1}" d="${arc(55.6, a + 4, b - 4)}"/>`).join('')}</g>`;
    }
    const col = {dash: '#8fb4ff', jump: '#8fe6ea'}[kind] || '#8d8a9a';
    return `<circle cx="50" cy="50" r="48" fill="none" stroke="${col}" stroke-width="2.6" opacity=".9"/>` +
      `<circle cx="50" cy="50" r="50" fill="none" stroke="${col}" stroke-width="4" opacity=".25" filter="url(#g${id})"/>`;
  }
  function buttonArt(kind, icon) {
    const id = 'psb' + (++uid);
    return `<svg class="ps-art" xmlns="${NS}" viewBox="0 0 100 100" aria-hidden="true" focusable="false">` +
      face(kind, id) + ring(kind, id) +
      `<g class="ps-icon" transform="translate(${50 - 26} ${50 - 26}) scale(${52 / 64})" fill="#fff" stroke="#0b0716" stroke-opacity=".5" stroke-width="2.4" stroke-linejoin="round">${ICONS[icon]}</g></svg>`;
  }
  function stickArt() {
    const dashes = [];
    for (let i = 0; i < 8; i++) {const a = i * 45 + 22.5; dashes.push(`<path d="${arc(46, a + 4, a + 41)}"/>`);}   // eight long segments
    const chevrons = [45, 135, 225, 315].map(a => {
      const [x, y] = pt(36, a);
      return `<path transform="translate(${x} ${y}) rotate(${a})" d="M-4.2 2.6L0 -3.4L4.2 2.6Z"/>`;
    }).join('');
    const [ex, ey] = pt(46, 52);
    return `<svg class="ps-stick-art" xmlns="${NS}" viewBox="0 0 100 100" aria-hidden="true" focusable="false">` +
      `<defs><radialGradient id="psStickBg" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#0b0a14" stop-opacity=".05"/><stop offset=".75" stop-color="#0b0a14" stop-opacity=".2"/><stop offset="1" stop-color="#0b0a14" stop-opacity=".34"/></radialGradient>` +
      `<filter id="psStickGlow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="1.6"/></filter></defs>` +
      `<circle cx="50" cy="50" r="48" fill="url(#psStickBg)"/>` +
      `<g fill="none" stroke="#d6d4e2" stroke-opacity=".5" stroke-width="1.5" stroke-linecap="round">${dashes.join('')}</g>` +
      `<circle cx="50" cy="50" r="28" fill="none" stroke="#d6d4e2" stroke-opacity=".14" stroke-width="1"/>` +
      `<g fill="#cfcddc" fill-opacity=".55">${chevrons}</g>` +
      `<g class="ps-stick-light" visibility="hidden">` +
      `<path d="${arc(46, 6, 52)}" fill="none" stroke="#ffcf6a" stroke-width="5" stroke-linecap="round" opacity=".55" filter="url(#psStickGlow)"/>` +
      `<path d="${arc(46, 6, 52)}" fill="none" stroke="#ffd779" stroke-width="2.6" stroke-linecap="round"/>` +
      // the small bracket at the end of the gold arc
      `<path transform="translate(${ex} ${ey}) rotate(52)" d="M-4 -3.2H3.2V4" fill="none" stroke="#ffd779" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>`;
  }

  /* ---------------------------------------------------------------- decoration */
  function kindOf(button) {
    const raw = button.dataset.k || button.dataset.action || keyKinds[button.dataset.key];
    if (raw === 'throw' || raw === 'shoot') return 'weapon';
    return ['attack', 'block', 'dash', 'jump'].includes(raw) ? raw : null;
  }
  function iconOf(button, kind) {
    if (kind !== 'weapon') return kind;
    // numbered levels label the ranged button PISTOL or THROW; the voyage pistol is data-action="shoot"
    return button.dataset.action === 'shoot' || /pistol/i.test(button.textContent || '') ? 'pistol' : 'throw';
  }
  function decorateButton(button) {
    const kind = kindOf(button);if (!kind) return;
    const icon = iconOf(button, kind);
    if (button.dataset.psKind === kind && button.dataset.psIcon === icon && button.querySelector(':scope > .ps-art')) return;
    button.querySelector(':scope > .ps-art')?.remove();
    button.dataset.psKind = kind;button.dataset.psIcon = icon;
    button.classList.add('ps-control');
    button.insertAdjacentHTML('beforeend', buttonArt(kind, icon));
  }
  const stickWatches = new WeakMap();
  const knobSelector = '.stick-knob, .av-knob, .pl-knob';
  function syncStick(stick, knob) {
    const light = stick.querySelector('.ps-stick-light');
    if (!light) return;
    // Read the existing thumb's local translation, not pointer events or the character's facing direction.
    // This follows the native pointer owner, cancellation, pause and resets without changing any input.
    let x = 0, y = 0;
    try { const m = new DOMMatrixReadOnly(knob.style.transform || undefined); x = m.m41; y = m.m42; } catch {}
    const arena = knob.matches('.stick-knob');
    const dead = arena ? .08 : knob.matches('.av-knob') ? .0448 : .054;
    const width = arena ? stick.clientWidth : stick.getBoundingClientRect().width;
    const active = Math.max(Math.abs(x), Math.abs(y)) > width * dead;
    light.setAttribute('visibility', active ? 'visible' : 'hidden');
    if (active) {
      // The original arc is centred 29 degrees clockwise from the top.
      const angle = Math.atan2(y, x) * 180 / Math.PI + 90 - 29;
      light.setAttribute('transform', `rotate(${angle} 50 50)`);
    }
  }
  function decorateStick(stick) {
    stick.classList.add('ps-stick');
    // Append after the native knob; some scenes use firstElementChild as that knob.
    if (!stick.querySelector(':scope > .ps-stick-art')) stick.insertAdjacentHTML('beforeend', stickArt());
    const knob = stick.querySelector(knobSelector), previous = stickWatches.get(stick);
    if (!knob) return;
    if (!previous || previous.knob !== knob) {
      previous?.observer.disconnect();
      const observer = new MutationObserver(() => syncStick(stick, knob));
      observer.observe(knob, {attributes: true, attributeFilter: ['style']});
      stickWatches.set(stick, {knob, observer});
    }
    syncStick(stick, knob);
  }
  function forgetSticks(node) {
    const forget = stick => {
      if (stick.isConnected) return;
      stickWatches.get(stick)?.observer.disconnect();
      stickWatches.delete(stick);
    };
    // Use the decorated class: a removed pad no longer has its scene ancestor to match `sticks`.
    if (node.matches?.('.ps-stick')) forget(node);
    node.querySelectorAll?.('.ps-stick').forEach(forget);
  }
  function decorate(node) {
    if (!node || (node.nodeType !== 1 && node !== document)) return;
    if (typeof node.matches === 'function') {
      if (node.matches(controls)) decorateButton(node);
      if (node.matches(sticks)) decorateStick(node);
      if (node.matches(knobSelector) && node.parentElement?.matches(sticks)) decorateStick(node.parentElement);
    }
    if (typeof node.querySelectorAll === 'function') {
      node.querySelectorAll(controls).forEach(decorateButton);
      node.querySelectorAll(sticks).forEach(decorateStick);
    }
  }
  new MutationObserver(records => {for (const r of records) {
    for (const n of r.removedNodes) if (n.nodeType === 1) forgetSticks(n);
    for (const n of r.addedNodes) if (n.nodeType === 1) decorate(n);
  }})
    .observe(document.documentElement, {childList: true, subtree: true});
  decorate(document);

  /* A scene reports its real ammunition here (numbered levels: p.ammo of COMBAT.ammo). Arena sets data-ammo itself. */
  function setAmmo(button, amount, capacity = 3) {
    if (!button || !Number.isFinite(amount) || !Number.isFinite(capacity) || capacity < 1) return;
    decorateButton(button);
    const n = Math.min(3, Math.max(0, Math.floor(amount)));
    if (button.dataset.ammo === String(n)) return;
    button.dataset.ammo = String(n);
    const base = button.dataset.psAmmoLabel || (button.getAttribute('aria-label') || 'Weapon').replace(/: [0-9]+\/[0-9]+$/, '');
    button.dataset.psAmmoLabel = base;
    button.setAttribute('aria-label', base + ': ' + n + '/' + Math.floor(capacity));
  }
  window.PirateTouchTheme = Object.freeze({version: '2.1-directional-svg', refresh: () => decorate(document), setAmmo});
})();
