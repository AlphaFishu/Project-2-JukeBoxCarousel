# Walkthrough: Rolling Album Lyrics Refinements & Layout Defaults (v2.0)

We have refined the **Rolling Album** (`depth`) mode lyrics presentation to start with less blank space, align the active line higher on screen (exactly at the 2nd line position), prevent visual truncation, cycle faster, and add a professional, animated Spotify-like equalizer icon. Additionally, we configured the app to load in **Cover Flow** mode by default and implemented custom, hardware-accelerated **ease-in-out scroll smoothing** for lyric transitions.

---

## Key Refinements

### 1. 2nd-Line Scroll Snapping
* **Dynamic Offset Alignment**: Changed the scroll target calculation in [script.js](script.js) to dynamically query the offset of the 2nd lyric line (index 1) and scroll the container to align the active line to this exact position:
  ```javascript
  const secondLineEl = lyricsContainer.querySelector('.lyric-line[data-line-index="1"]');
  const scrollOffset = secondLineEl ? secondLineEl.offsetTop : 45;
  const elemTop = activeLineEl.offsetTop;
  const scrollTarget = elemTop - scrollOffset;
  ```
* **No Middle Scrolling**: The active line no longer scrolls all the way to the center of the container (which created excessive blank space). Instead, it stays locked to the 2nd line position from the top once scrolling begins (from line 2 onwards). For lines 0 and 1, the container remains at `scrollTop = 0`. This keeps exactly one past line visible above the active line.

### 2. Space Optimization & Spacing Reductions
* **15% Gap & Spacing Reduction**: Reduced the gap between lines from `18px` to `15px` and the text `line-height` from `1.2` to `1.05` in [style.css](style.css), creating a more compact look.
* **Reduced Blank Space**: Lowered the scroll container's `padding-top` from `60px` to `30px`, ensuring lyrics start higher up with minimal dead space.

### 3. Fixed-Pixel Mask Fades (No Truncation)
* **Maximum Height**: Replaced percentage-based masks (`15%` top/bottom fade) with precise pixel boundaries:
  `mask-image: linear-gradient(to bottom, transparent, black 30px, black calc(100% - 35px), transparent 100%)`
* **Result**: On small screen heights, the lyrics container is no longer cut off by oversized percentage-based masks. The active line is kept 100% opaque, and the bottom space is maximized so more lines are visible ahead, resolving the "cutted out" appearance.

### 4. Professional Spotify-like Animated Equalizer Icon
* **Animated Equalizer SVG**: Updated the highlighted lyric prefix in `style.css` to use a professional 3-bar animated equalizer SVG.
* **Inline SMIL Animation**: Instead of custom rotation/sway keyframes, the equalizer SVG uses high-efficiency browser-native SMIL animations (`<animate>`) to raise and lower the bars dynamically, matching the Spotify-like playing indicator.

### 5. Accelerated Cycling Rate
* **Faster Simulation**: Decreased the autoplay transition interval in `script.js` from `4000`ms to `2500`ms, making the lyric cycle simulation feel active, dynamic, and faster-paced.

### 6. Custom Ease-In-Out Scroll Smoothing
* **Cubic Easing**: Implemented a custom `smoothScrollTo` animation helper in `script.js` that applies a cubic ease-in-out (`easeInOutCubic`) transition curve over a duration of `800ms`.
* **Glitch Prevention**: When a new lyric line highlights, any ongoing scroll animation frame is cancelled instantly via `cancelAnimationFrame(lyricsScrollAnimFrame)`. This smoothens rapid transitions and avoids default browser snapping behaviors.

### 7. Cover Flow Default Mode
* **Selected on Load**: Updated `index.html` and `script.js` to initialize the app in **Cover Flow** mode by default (instead of Jukebox).

### 8. Album Card Selection Consistency
* **Preserved Scroll Coordinates**: Preserved the scroll coordinate variables (`targetRotation` and `currentRotation`) when switching layouts in `script.js`. This keeps the active album card selected consistently across Jukebox, Cover Flow, and Rolling Album layouts.

### 9. Subtitle Update & Clean Positioning
* **Cleaned Header Elements**: Removed the `<h1>Jukebox</h1>` title from `index.html` to eliminate overlaps with the selector pill.
* **Repositioned Subtitle**: Positioned `.title-overlay` at `top: 108px` in `style.css` so the description sits cleanly and spacious under the pill with a comfortable 16px+ visual gap.
* **Modernized Call to Action**: Updated the subtitle text to "TRY SCROLLING ON TRACKPAD!" to engage trackpad scroll navigation.

---

## How to Verify
1. Open the local Jukebox site.
2. Verify that **Cover Flow** is active and selected by default on load, with the slider pill aligned perfectly.
3. Verify the subtitle text says "TRY SCROLLING ON TRACKPAD!" and sits cleanly and spacious below the mode selector pill (`top: 108px`) with no overlapping main header title.
4. Scroll to an album (e.g., Toxic or Purple Rain).
5. Switch to **Jukebox** mode, then **Rolling Album** mode. Verify the carousel is centered on the exact same album (Toxic/Purple Rain) in all three modes without resetting back to the first album.
6. Under **Rolling Album** mode, observe:
   - The lyrics start higher up with minimal blank space above the first line.
   - When the first line is highlighted, it is at the 1st line position.
   - When the second line is highlighted, it is at the 2nd line position.
   - When subsequent lines are highlighted, they scroll smoothly to the 2nd line position, leaving exactly one faded past line visible above.
   - The scroll animation curves gracefully using the custom ease-in-out easing function, with no sharp or jarring snaps.
   - The spacing between lines is tighter and more compact (reduced by 15%).
   - More lines are visible below the active line, and they fade out only at the very bottom `35px` boundary.
   - The active line displays a professional, animated 3-bar equalizer icon.
   - The lyrics cycle quickly every 2.5 seconds.
7. Confirm Jukebox (Cylinder) and Cover Flow layouts display correctly and remain functional.
