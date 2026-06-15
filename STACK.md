# Jukebox Effects — Technical Stack (v3.1)

Single-page, dependency-free web app. Vanilla **HTML + CSS + JS**, no build step, no
framework, no `node_modules`. Deploys as static files (Vercel: import repo, no build
command). Chromium-first for the advanced effects; degrades gracefully elsewhere.

## Files
- `index.html` — markup + layer scaffolding (cache-busted asset query `?v=NN`).
- `style.css` — all styling/animation (cache-busted `?v=NN`; bump both on every change).
- `script.js` — data + the whole render/interaction engine.
- `vinyl-texture.webp` — 22 KB record texture (was a 1.9 MB PNG; downscaled + WebP).
- `walkthrough.md` — chronological release notes. `STACK.md` — this overview.

## Data
- `tracks[]` in `script.js`: **72 albums**, each `{ title, artist, color[r,g,b], cover, songs[5], lyrics }`.
- Covers + tracklists were fetched once from the **iTunes Search API** and baked in as
  static data (no runtime API calls). `color` is a hand-tuned fallback; the real palette
  is extracted from the cover at runtime via canvas.
- Lyrics are original placeholder verses (not copyrighted text).

## Color pipeline
- `extractVibrantColor(url, cb, fallback)` draws the cover to a 30×30 canvas, buckets
  vibrant pixels by hue, and returns the dominant color. A **second** dominant hue
  (≥60° away) is cached in `extractedSecondaryCache` for the marquee/accent — this is why
  Enemy reads red+purple, Purple Rain orange+purple, etc. (never an arbitrary rotation).
- `setAccentPalette(rgb, rgb2)` writes CSS vars: `--accent-rgb`, `--accent2-rgb`, and
  three `--aurora-c*` stage-light colors (hue companions, dimmed).

## Modes (the mode pills, left→right)
Body class `body-<mode>` drives mode-specific CSS. Switching is in the `modeButtons` click
handler; the render loop `updateCarousel()` (rAF) branches on `currentMode`.
1. **Jukebox** (`cylinder`) — 3D ring carousel.
2. **Vinyl** (`coverflow`) — cover-flow with sliding vinyl discs; perspective-aware 5%
   edge margins (lay out in apparent space, divide out the `P/(P−z)` shrink).
3. **Page** (`depth`) — "Rolling Album": large card + right-side details panel (tracklist
   + live lyrics) + frosted ambient background.
4. **Spotlight** (`dynamic`) — see below. Default landing mode.
5. **Elevation** (`elevated`) — square 1:1 card, top-anchored song list.
6. **Flipper** (`flipper`) — 3-lane film-reel with frozen center plate; see below.

Modes 4–6 share one engine: **`shuffle2Presets[]`** (index 0 Spotlight, 1 Elevation,
3 Flipper; 2 "Maison" retired). `CARD2_MODE_IDX` maps mode→preset; `isCard2(m)` /
`card2Idx()` are the helpers. Each preset = `{ name, square?, calib{…}, ui{…} }`.

## The card-mode render engine (`updateCarousel`, shuffle/card2 branch)
- Cards sit in a serpentine loop across N lanes; the **active card is captured and
  frozen** at a center "plate" (smoothstep blend `t`) while the reels roll past.
- `calib` fields: zoom, camX/Y, tiltX/Y/Z (scene), lanes, laneGap, mainPad, mainCardGap,
  subCardGap, mainScale, subScale, lockScale, lockX/Y (plate), subSpeed (phase-drift,
  not spacing), snap (scroll magnet), motionBlur(+Amt), laneBend, cardBend, vignette(+Sides+Reach).
- **Lane curve** (`laneBend`, 0–100): bends the lane *path* into a drum arc.
- **Card bend** (`cardBend`): genuine per-card surface curvature — `ensureCardCurve()`
  slices the cover into 12 horizontal strips placed on a cylinder to bend along the card's
  height (barrel stave style); the slice container has a local `perspective` (without it the
  strips collapse and look flat). Main card stays flat. Curves are cleared on mode switch.
  Curving is restricted to Flipper mode only.

## Spotlight (mode `dynamic`)
- `.stage-spotlight` (+`::before` source flare, `::after` landing pool): a single natural
  sun shaft (soft radial bloom, slight slant) — NOT conic stripes. `mix-blend-mode: screen`.
- **3D Depth Sorting**: Nested inside the 3D `.carousel` container with a `z-index: 30` and dynamic
  `--spot-z` variable, so it naturally sits behind the active card (z40) but in front of background
  sublanes (z<=25). Darkened wing vignette via `body.body-dynamic .vignette-overlay`.
- Fully **CSS-var driven** (`--spot-*`) so the calibration panel tunes it live.
- **Calibration panel** (`✦ Light`, Spotlight only): 15 sliders (generous ranges) + a
  "Spotlight on" master toggle + Reset + Print/Apply JSON; persisted to `localStorage`
  (`jukebox-spot-calib`). Defaults in `SPOT_DEFAULTS`.

## Flipper calibration
- `⚙ Calibrate` (Flipper only) opens the tabbed panel (`calibPages`: Camera / Layout /
  Motion-FX) bound to the Flipper preset's live `calib`. Print/Apply JSON. `calibTarget`
  points at whichever object the panel edits.

## Card 2 contextual panels (Spotlight/Elevation)
- Song list + lyrics live in **`.s2-rig`**, a screen-space mirror of the real 3D rig: same
  `perspective: 960px`, same camera transform, vanishing point synced per frame — so panels
  sit exactly on the card plane. Each panel is offset to an anchor corner (`right-top`,
  `left-bottom`, …) with optional `dx`/`dy` nudges.
- **Blur proxies** (`.s2-blur-proxy`): `backdrop-filter` is ignored inside a 3D context, so
  flat twins outside the rig track each panel's projected rect and do the frosting, with a
  feathered (edge-only) mask so there's no hard boundary. Fade out on fast scroll, in on settle.

## Liquid glass (selector + dock)
- Real **light refraction** via an SVG `feDisplacementMap` referenced from
  `backdrop-filter: url(#lens-…)` (generated in `script.js`, rebuilt on resize). A
  displacement map encodes X-shift in Red, Y-shift in Blue, neutral core = flat center,
  rim = lens. Three channels at slightly different scales → chromatic aberration.
  Chromium-only; Safari/Firefox get a frosted `blur()` fallback + specular rims.

## Other layers
- **Aurora** drifting blobs (album-tinted, `screen`), giant **kinetic marquee** (artist
  name, secondary-accent fill, drifts with scroll; left-anchored in Helix-style), **grain**
  overlay (tiled SVG turbulence), **vignette**, **watermark** (collision-aware), **Now
  Playing dock** (controls + 72-step trail that flashes ≤75% white and decays fast),
  **Data Source & Credits** modal, cursor parallax (`perspective-origin` follows mouse).

## Conventions
- Bump `?v=NN` on `style.css` AND `script.js` in `index.html` after any change.
- `node --check script.js` before committing.
- Versions are tagged `claude-vX.XXXX`; rollback with `git reset --hard <tag>`.
- Local dev server (sleep-proof): `nohup npx -y http-server . -p 8123 -c-1 -a 127.0.0.1 &`.
