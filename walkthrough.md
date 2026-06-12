# Walkthrough: Calibration UX + Main-Card Tilt + Motion Blur (v2.99)

1. **Clearer naming + grouping** — Layout tab is now split by `--- Main ---` / `--- Sub ---` dividers. "Highlight size" → **Main size**, "Plate X/Y" → **Main X / Main Y**. Camera tilts relabeled "Scene tilt X/Y/Z" to distinguish from the new main-card tilt.
2. **Main-card tilt (X/Y/Z)** — a dedicated `--- Main tilt ---` section rotates ONLY the frozen highlight card (faded by 1−t so reel cards stay flat), for a custom hero pose. Its own **Reset tilt** button zeroes just those three.
3. **Motion blur** — `--- Motion blur ---` section with a **Sub-lane blur** checkbox; when on, a **Blur strength** slider appears and sub-lane cards blur proportionally to scroll speed (main lane stays sharp). Off by default.
4. **Underline tabs** — calibration tabs are now text + underline, not pills.
5. **Separate resets** — **Reset camera** (Camera tab) restores the rig/scene-tilt; **Reset tilt** (Layout, main-tilt section) clears only the main-card pose. Fully independent.

---

# Previous: Calibration v3 — True Gaps, Isolated Plate, Real Lane Speed (v2.98)

1. **Equal card gaps, for real** — spacing is now defined as the visible EDGE gap: per-card step = scaled card height + gap. Previously equal center-spacing looked unequal because sub-lane cards are smaller.
2. **Main/Sub card gap isolated** — two sliders (`Main card gap`, `Sub card gap`), each can go negative for deliberate overlap-stack looks.
3. **Vignette sides reach** — new `Side reach %` slider (5–48%) lets the left/right shadows push as close to the middle as wanted; `Side strength` and `Vignette radial` control intensity (both to 2×).
4. **Plate X/Y isolated** — `lockY` no longer leaks into every lane's flow (that's why Plate Y moved the whole stack). The reels center on a fixed stack base; Plate X/Y move only the captured highlight card.
5. **Real sub-lane speed** — `Sub lane speed` is now a phase drift: the lane's whole content scrolls faster/slower (wrapping within the lane) while card spacing stays untouched — the "fake reel" approach. The middle lane stays locked to the true scroll because the frozen-plate capture depends on neighbors arriving in true positions (which is also why the separate "main speed" slider was removed — it's structurally impossible with a frozen plate). Wrap points fade out so cards never pop.
6. **Helix marquee** — scroll drift removed in Helix; text is pinned at the left edge (mouse-shift only), so the artist name reliably starts at the left.

---

# Previous: Calibration v2 — Camera Rig, Tabs, Lane Physics (v2.97)

1. **Camera position X/Y/Z** — the camera is now a full rig: `Camera X/Y` pan the framing for cropping compositions, `Camera Z` is the existing zoom. A **Reset camera** button restores the active preset's camera (position + tilt) without touching layout values.
2. **Solid utility panel** — calibration UI dropped the glass look: solid `#17171d` surface, solid light knobs (tools, not jewelry).
3. **Tabs** — 20 controls split into **Camera** (zoom, pan, tilts, reset), **Layout** (lanes, spacings, sizes, plate), **Motion/FX** (speeds, snap, vignettes).
4. **Vignette, two channels** — `Vignette radial` (now up to 2× strength) plus new `Vignette sides`: straight left/right edge shadows for letterbox-style crops. The radial stays transparent at center so the highlight card is never darkened.
5. **Lane speed parallax** — `Main lane speed` and `Sub lane speed` are separate multipliers. Card spacing is now **uniform by default** (the old per-lane speed pattern made gaps unequal — fixed); dialing speeds apart is an explicit parallax choice.
6. **Main lane pad** — pushes both side groups away from the main lane only, while sub-lane-to-sub-lane spacing stays at `Lane spacing`.
7. **Scroll snap** — magnetizes the scroll target to the nearest card and stiffens the follow speed; at 1.0 each flick lands crisply on the next album.
8. **Dock step trail** — steps brightened (0.16 → 0.30 floor) with a slow 0.9s decay after losing the highlight, so fast scrolling leaves a visible glowing trail instead of steps blinking out. Activation stays instant.
9. **Helix marquee** — anchored to the left edge in Helix mode, giving it a different editorial feel from the centered modes.

---

# Previous: 48-Album Library + Shuffle Calibration Tools (v2.96)

1. **Library: 28 → 48 albums.** Twenty classics/moderns added (Abbey Road, Rumours, Back in Black, Dark Side of the Moon, Random Access Memories, Divide, 21, thank u next, Take Care, Born to Die, AM, Currents, Planet Her, Map of the Soul: 7, The Eminem Show, Viva la Vida, Hybrid Theory, IGOR, Whenever You Need Somebody, Back to Black). Covers and real tracklists/durations/explicit flags fetched once from the free iTunes Search API and baked in as static data — no runtime API calls. New entries use original placeholder verse text instead of copyrighted lyrics.
2. **Card Shuffle calibration panel** (⚙ Calibrate in the angle row): 13 live sliders — zoom/distance, tilt X/Y/Z, lane count (3/5/7), lane spacing, card spacing, main/sub lane size, highlight size, plate X/Y, and vignette strength (vignette is darkest at edges so the centered highlight card stays clean). Values persist in localStorage.
3. **Print / Apply JSON** — "Print values" copies the current calibration as one JSON line (clipboard + textarea + console) so a favorite setup can be shared as a reference; "Apply JSON" loads a pasted setup. The 6 camera presets now load into the same calibration system as starting points.
4. **Renderer generalized** — lanes up to 7, flow directions/speeds derived from a per-lane-distance pattern, dock steps tightened for 48 segments.

---

# Previous: Card Shuffle Camera Presets (v2.95)

1. **Bigger, higher plate** — the frozen highlight card scales up to ~1.3 (was 1.08) and the plate moved up from −60 to −110, fixing "too small / too low".
2. **Parameterized renderer** — the Card Shuffle branch is now fully data-driven: each camera preset defines the plane tilt, lane x-slots (asymmetry allowed), per-lane scale + flow speed/direction, and plate position/size. Lane count comes from the array length.
3. **Six camera presets** in a glass dropdown that slides out under the mode selector (Card Shuffle only):
   - **Close-Up** — the user's drawing: 5 asymmetric lanes, near camera, dominant center, edge-to-edge density
   - **Reverse** — 3 lanes, tilted to the opposite side
   - **Overhead** — 40° look-down at a table of rolling reels
   - **Dutch** — hard −24° cinematic roll on a nearly flat plane
   - **Front** — straight-on slot machine, zero tilt
   - **Wide** — pulled-back 5-lane gallery overview

---

# Previous: Card Shuffle Rework + Artwork-True Accent Colors (v2.94)

1. **Accent algorithm corrected** — the secondary accent is no longer an arbitrary 150° hue rotation (the source of the theme-breaking teal). The canvas extractor now pulls the **second dominant hue from the cover art itself** (biggest hue bucket ≥60° away from the primary, ≥6 vibrant pixels). Verified: Enemy = red + `rgb(37,25,121)` purple-blue (the Arcane glow); Purple Rain = orange + `rgb(50,76,119)` blue-purple. Monochrome covers fall back to an analogous shade 50° away — never a complementary.
2. **Card Shuffle (renamed from Shuffle), film-reel mechanics**:
   - Tilt pushed past Netflix: `rotateX(18°) rotateZ(-14°) rotateY(-16°)`, close-up `translateZ(-30)`.
   - **Dominant middle lane** (Pinterest-style): middle cards at 0.98 scale, side lanes at 0.66 and pushed back in Z.
   - **Lanes roll in opposite directions at different speeds**: −250 / +340 / −285 px per album step.
   - **Frozen center plate**: the highlighted card is captured via smoothstep blend and held motionless at center while the reels roll past — and released back into its lane as the next card takes the plate. Only the middle position effectively snaps; the reels stay loose.
   - Density up (lane spacing ~0.19vw, near-touching cards in the middle lane) to read as a premium product close-up.
3. **Faster landing text** — marquee crossfade cut from 380ms+450ms to 160ms+220ms; album text now pops in almost immediately on landing.

---

# Previous: Shuffle Mode + Solid Marquee + Rounded-Square Chrome (v2.93)

1. **Vinyl Records marquee, solid** — in coverflow only, the backdrop text fills with the secondary accent at 72% opacity (stroke 85%) for strong, solid contrast against the album-accent background. Other modes keep the faint glassy fill. (Also fixed: a duplicate `accent2` declaration that briefly broke the script.)
2. **Rounded-square chrome** — the top selector switches from full pill (radius 32) to rounded square (radius 16); the slider stays concentric at 11, buttons at 11, and the bottom dock matches at 16. Liquid-glass lens maps regenerated for the new corner geometry.
3. **Shuffle mode (replaces Wall)** — Pinterest-waterfall × Netflix-tilt × slot machine: three vertical lanes on a plane tilted `rotateX(12°) rotateZ(-8°) rotateY(-14°)`. Cards ride one serpentine loop — lane 1 (left, background) → off-screen → lane 2 (middle) → the center highlight slot → lane 3 (right) → endlessly back to lane 1. The math: each card's loop coordinate `s = mod(activeFloat − index + N/2, N)` picks its lane (`s/laneLen`) and its vertical position within the lane; lane hand-offs happen off-screen so the loop reads as endless.
4. **Premium tri-color halo** — the active card's glow is now a conic gradient blending the album's dominant color with both accents around the rim. Static gradient + one 11px blur = composited once on the GPU; no per-frame cost, Vercel-safe.

---

# Previous: Precision Pass + Wall & Helix Modes (v2.92)

Seven user-curated refinements:

1. **Pill geometry fixed** — the slider is now vertically centered via `top: 50% / translateY(-50%)` and horizontally positioned by `offsetLeft` in the same reference frame (no magic `-5px`), with concentric corner radii (outer 32 − gap 5 = inner 27).
2. **Marquee contrast color** — the giant backdrop text uses a secondary accent (`--accent2-rgb`, album hue rotated 150°) so it stays visible against the album-accent background instead of dissolving into it.
3. **YouTube-Music-style looping titles** — overflowing text (card titles/artists, dock title) duplicates into two segments scrolling `translateX(-100%)` in a seamless conveyor with a 12% hold each cycle; speed is constant (~36px/s) regardless of length. Replaces the old back-and-forth marquee.
4. **Dock: segmented steps** — the X/X counter and progress bar are gone; a row of 28 rounded-rect steps (one per album) shows loop position. The highlight skips step-to-step while scrolling, and every step is clickable (shortest-path jump) with a hover state and tooltip.
5. **Track list alignment** — removed horizontal padding on `.track-item` so covers align flush with the section labels.
6. **Hugged selector** — labels are `white-space: nowrap` (one line always), wrapping only below 700px; outer shadow softened from 0.45 to 0.22 alpha.
7. **Two new modes**:
   - **Wall** — all 28 covers in a centered 7×4 grid; scrolling skips the spotlight cell-to-cell (active pops via pure scale + glow; translateZ is avoided since perspective would throw edge cells off-screen).
   - **Helix** — covers spiral up a 3D tower: each card is placed by `rotateY(θ) translateZ(R) rotateY(-θ)` (position on the circle, then billboarded back to face the viewer) and rises 52px per step; scrolling rides the camera along the spiral.

---

# Previous: "On Stage" Visual Redesign (v2.9)

> Note: kept on the 2.x line intentionally — the major version (v3) is reserved for a larger leap once the redesign direction is curated and locked in.

v2.9 reimagines the app as a concert stage where the active album is the performer. Rollback point: `git reset --hard claude-v2.8`.

## v2.9 Key Features
1. **Aurora stage lighting** — three huge blurred light blobs (`.aurora-blob`) drift slowly on 28–42s keyframe loops. Their colors are derived per album in `setAccentPalette()`: the album's dominant hue plus two companions rotated ±50° around the color wheel, kept dim (L≈24–30%) so they read as atmosphere. `mix-blend-mode: screen` makes them add light like real lamps.
2. **Giant kinetic marquee** — the artist's name in Bebas Neue at up to 15rem, projected at 6% opacity behind the stage. It drifts horizontally with scroll, shifts with the mouse, and crossfades on album change.
3. **Now Playing dock** — a liquid-glass console (same refraction lens as the selector): prev/next buttons that rotate the carousel by exactly one card, album title/artist, a `07/28` Bebas counter, and a collection-position progress bar glowing in the album's accent color.
4. **Cursor parallax** — the scene's `perspective-origin` eases toward the mouse each frame, so the entire 3D stage re-angles toward the viewer. Done via perspective-origin instead of transforms so it never fights the JS-owned card transforms.
5. **Cinematic vignette** — radial corner darkening (z-index under the grain) for depth.
6. **Typography overhaul** — Outfit replaces Inter app-wide; Bebas Neue for display moments (marquee, counter).
7. **Mode awareness** — dock and marquee fade out in Rolling Album mode, where the details panel owns the layout.

---

# Previous: Expanded Library + Real Liquid Glass Refraction, Film Grain & Album-Colored Aura (v2.8)

This release combines two streams of work: the **library expansion to 29 albums** (with "Enemy" as the landing track) and a **visual overhaul** that replaces the fake "frosted-only" glass with **true Apple-style Liquid Glass** — the background actually *refracts* (bends) through the rim of the mode selector like curved glass, with subtle chromatic aberration. It also adds a film-grain finish, a static studio-light reflection on the spinning vinyl, a self-dismissing glass scroll hint, and fixes a long-standing bug where the active card's "Apple aura" always glowed grey instead of the album's color.

---

## Key Refinements

### 1. Expanded Library & Interleaved/Shuffled Order
* **29 Total Albums**: Added modern entries (Kendrick Lamar, Charli xcx, SZA, Olivia Rodrigo, Taylor Swift, Miley Cyrus, Tate McRae, Hozier, Beyoncé, Lady Gaga & Bruno Mars, and more) to the existing classics.
* **Landing Track**: "Enemy" by Imagine Dragons & JID (from the Arcane series) is placed at index 0, ensuring it is the active, centered card on load.
* **Shuffled Interleaving**: New tracks (e.g. BRAT, Not Like Us, GUTS, Lover) are interleaved with the classics for a diverse scroll.
* **Premium Asset Retrieval**: All new covers use real high-resolution CORS-friendly `mzstatic.com` CDN images, allowing automatic, real-time background color extraction via Canvas.

### 2. True Liquid Glass Refraction (the big one)
Frosted glass is just `backdrop-filter: blur()`. Real liquid glass needs **light refraction**, which CSS alone cannot do — but Chromium supports referencing an **SVG filter** inside `backdrop-filter`:

```css
backdrop-filter: url(#lens-selector) blur(1.5px) saturate(1.7) brightness(1.06);
```

How the lens works (all generated dynamically in [script.js](script.js)):

1. **Displacement map** — a tiny SVG image sized exactly to the element: the **Red channel encodes horizontal shift** and the **Blue channel encodes vertical shift** (127 = neutral). It is built from a black base + red X-gradient + blue Y-gradient (screen-blended), with a **blurred neutral core** so only the rim band ("bezel") bends light — the profile of a convex lens.
2. **`<feDisplacementMap>`** uses that map to bend whatever is behind the element. Pixels near the rim sample *outside* the pill, compressing the surrounding scene into the edge — exactly what a real lens does.
3. **Chromatic aberration** — the displacement runs 3× at slightly different strengths for the R/G/B channels (`feColorMatrix` isolates each, `feBlend mode="screen"` recombines), producing the faint color fringing of Apple's material.
4. **Specular rim lighting** — layered inset `box-shadow`s fake a bright top-left light edge and a faint bottom-right bounce, plus a diagonal sheen gradient in `::before`.

The filter is rebuilt on resize/font-load so the map always matches the pill's measured size. **Safari/Firefox fall back automatically** to a quality frosted look (`blur(24px) saturate(1.7)` + the same specular rims) since only Chromium supports `url()` filters in `backdrop-filter`.

### 3. Album-Colored Active Card Aura (bug fix)
`.card::before` glowed using `rgba(var(--amb-r), ...)` — but those variables only existed on `:root` as `20,20,20`, so the "Apple aura" was always near-black. Now:
* `applyColorTheory()` sets `--amb-r/g/b` **on each card element**, so the aura glows in the album's dominant color.
* When the canvas-based vibrant color extraction resolves, it **upgrades** each card's `dataset.dom*` and CSS vars from the hand-tuned fallback to the real artwork color — so the Jukebox/Rolling Album ambient backgrounds match the actual covers too.

### 4. Film Grain Finish
A fixed full-screen overlay (`.grain-overlay`) tiles an inline SVG `feTurbulence` noise texture at `opacity: 0.05` with `mix-blend-mode: overlay` — an analog, anti-banding finish over the dynamic gradients (z-index 9998, under the selector).

### 5. Vinyl Studio-Light Reflection
`body.body-coverflow .vinyl-wrapper::after` adds a **static** radial + conic specular highlight over the record. Because the highlight stays fixed while the grooves spin underneath, it reads like real light on a rotating disc.

### 6. Self-Dismissing Glass Scroll Hint
"TRY SCROLLING ON TRACKPAD!" became a liquid-glass pill chip ("Scroll or swipe to explore") with the same lens filter. On the first wheel/touch scroll, `body.has-scrolled` fades it out — instructions should leave once they're obeyed.

### 7. Micro-Interactions
* Mode buttons get a press-down `scale(0.95)` and a text shadow for legibility over bright album backdrops.
* Cards show `cursor: pointer` and a gentle `brightness(1.08)` lift on hover (safe because JS owns `transform`/`filter` on `.card`, while the hover targets `.card-content`).

---

## How to Verify
1. Open the local site at [http://localhost:8000](http://localhost:8000) in **Chrome** (refraction) and Safari (frosted fallback). Hard-refresh (Cmd+Shift+R) to bust caches.
2. **Library**: Confirm "Enemy" is the landing card and the carousel contains all 29 albums.
3. **Refraction**: In Vinyl Records mode, scroll so colorful covers pass behind the top selector — the background should visibly *bend* through the pill's rim with a hint of color fringing, not just blur.
4. **Aura**: In Jukebox mode, land on Thriller (red glow), Purple Rain (purple glow), Toxic (green glow) — the halo behind the active card should match each album.
5. **Vinyl sheen**: Watch the spinning record — the bright highlight stays fixed at the upper-left while grooves rotate beneath it.
6. **Hint chip**: Reload, see the glass chip below the selector, scroll once, watch it fade away.
7. **Grain**: Look closely at the gradient background — a fine static grain texture replaces flat color banding.
