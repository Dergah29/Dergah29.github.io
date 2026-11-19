# Level 5 — Cursed Island (chapter boss) — development plan

Status: **implemented** (see README “Level 5”) — the notes below are the original plan. Before this the playable Level 5 was the older prototype
(`v3/adventure/cursed-island.js` + `chapters/cursed-island.json`, flat SVG sprites, its own
mini engine, 540 px tall world). It works end to end (tests pass) but does not match the
painted look, hero (Mari), controls, HUD and music of Levels 2–4. Level 5 is rebuilt on
`PirateLevelEngine` as `level-05.js/.json`; the prototype stays wired to the map until the
new level passes its own playthrough test, then `registry.js` switches `5:{kind:'island'}`
to `5:{kind:'engine',id:5}`.

## Route (≈ 11 000 px, three zones, three checkpoints)
1. **Cursed Shore** (sunset → dusk): wreck of the smugglers' ship on the reef, voodoo
   fetish posts, sinking sand pits, skeleton pirates rising from the sand (reuse Level 3
   skeleton rig, re-tinted) and cursed gulls (new flyer, dives along a telegraphed line).
2. **Bone Jungle**: dense painted jungle with root bridges, swinging vines (new mechanic:
   grab with JUMP, release with JUMP), poison-dart totems (Level 3 dart trap re-skinned),
   a hidden cave with the first secret chest.
3. **Skull Mountain approach**: lava-lit cliffs, collapsing rope bridges, cursed fire
   geysers on a rhythm, ghost pirates that are only hittable while their lantern is lit.

## Boss arena — the Totem Shaman (main chapter boss)
* Sealed shrine plateau in front of a giant skull rock; three painted totems.
* **Phase 1** — shaman floats behind a spirit shield; each totem pulses and fires
  (skull orb / poison spray / summon skeleton). Destroying a totem drops part of the shield.
* **Phase 2** (all totems down) — shaman lands: staff combo, ground-rune circles
  (telegraphed, jump out), teleport behind Mari. Vulnerable after each combo.
* **Phase 3** (≤ 35 % HP) — totems re-ignite one at a time, the plateau edges crumble,
  faster orbs. Defeat → curse lifted cut-in, treasure, chapter complete, Level 6 unlocked.
* Boss health bar, name and phase pips in the HUD (`bossHud`), dedicated boss music
  (`music.js` already has a boss slot), checkpoint right before the arena.

## Art (painted pipeline, same as Levels 3–4)
* `tools/level05_art.py`: plates per zone (shore / jungle / mountain / shrine), rock +
  root textures, totem and shrine props, parallax mid layer.
* Boss: painted multi-part rig (body, staff, mask, cloak) at 3× like `painted.py`,
  separate rage tint; totems as painted props with glow passes.
* No square placeholders; scale checked against Mari (hero ≈ 125 px, skeleton ≈ 110 px,
  shaman ≈ 230 px).

## Tests to write
* `test-level-05-systems.cjs`: assets, each new enemy, vines, geysers, ghost lantern rule,
  totem → shield link, each boss phase, save/restore, frame budget.
* `test-level-05-playthrough.cjs`: input-only bot from start to boss defeat, map return.
* Existing `test-level-progression.cjs` (boss every 5th level) must keep passing.

## Order of work
1. Concept image (full landscape game screen) for approval of the look.
2. Layout JSON + level script with terrain and checkpoints (no boss) + route test.
3. New enemies and mechanics + systems tests.
4. Totem Shaman boss + arena + boss music.
5. Full playthrough test, Android-size screenshots, switch the registry.
