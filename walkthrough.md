# Walkthrough: Cover Flow Spacing, Dynamic Desaturation & Modern Albums (v2.7)

We have updated the jukebox library from 16 to 28 albums by adding 12 modern tracks (including Kendrick Lamar, Charli xcx, SZA, Olivia Rodrigo, Taylor Swift, Miley Cyrus, Tate McRae, Hozier, Beyoncé, and Lady Gaga & Bruno Mars). The single "Enemy" by Imagine Dragons & JID (from the Arcane series) has been placed as the first item in the list (index 0) so that it serves as the landing song when the website is opened. The remaining albums are shuffled and interleaved throughout the list. All existing 16 tracks remain preserved in the Jukebox.

---

## Key Refinements

### 1. Expanded Library & Interleaved/Shuffled Order (v2.7)
* **28 Total Albums**: Added 12 modern entries to the existing 16 albums, increasing the scrolling range.
* **Landing Track**: "Enemy" by Imagine Dragons & JID is placed at index 0, ensuring it is the active, centered card on load.
* **Shuffled Interleaving**: The rest of the new tracks (e.g. BRAT, Not Like Us, GUTS, Lover, Too Sweet) are shuffled and interleaved with the classics to provide a diverse selection.
* **Premium Asset Retrieval**: All new covers use real high-resolution CORS-friendly `mzstatic.com` CDN images, allowing automatic, real-time background color extraction via Canvas.

### 2. Expanded Responsive Spacing (0% Edge Margin)
* **Divisor Adjustment**: Spacing step divisor is set to `3.2` in [script.js](script.js).
* **Margin Optimization**: Outer cards align near the **0%** screen width margin, reducing side whitespace to look clean and expansive.

### 3. Saturated Rest State & Less Grey Fast Scroll
* **Vibrant Resting Color**: Capped static saturation (`maxSat`) at `0.92`, bringing back rich, vibrant colors.
* **Less Grey Fast Scroll**: Increased the high-speed saturation floor from `0.12` to `0.18` so the background keeps a subtle, colorful tint rather than fading into a flat gray.
* **4% Contrast Darkening**: Multiplied the final Cover Flow background color by `0.96` to scale it down by 4% at rest.
* **High-Speed Darkening**: Clamp brightness scaling down to `0.86` under rapid scrolling to keep the background dim and low-contrast.

### 4. Premium Inline Line SVGs & Renaming
* **Renamed Mode**: "Cover Flow" has been renamed to **Vinyl Records** in [index.html](index.html).
* **Emojis to SVGs**: Pill selector buttons are now styled with beautiful, minimal line SVGs (Turntable, Vinyl Disc, and 3D Layers) styled via `.btn-icon-svg` in [style.css](style.css).

---

## How to Verify
1. Open the local site at [http://localhost:8000](http://localhost:8000).
2. **Landing Album**: Verify that "Enemy" (from Arcane) by Imagine Dragons & JID is the active, centered landing card when the page is loaded.
3. **Library Scale**: Scroll left/right and verify that there are 28 unique albums in the rotation.
4. **Layout Calculations**: Verify that in Jukebox (Cylinder) mode, the cylinder diameter auto-scales (larger `zTranslate` of ~1206px) to place all 28 cards along the boundary without overlapping.
5. **Vibrant Ambient Colors**: Stop on any of the new modern albums (like the neon-green *BRAT* cover). Verify that the ambient background updates instantly to the correct dominant hue.
6. **Live Lyrics**: Choose a track and check that the song listings and live lyrics display properly.
