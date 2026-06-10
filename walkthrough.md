# Walkthrough: Precision Pass + Wall & Helix Modes (v2.92)

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
