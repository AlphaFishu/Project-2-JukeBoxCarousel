# Walkthrough: Cover Flow Dynamic Spotify-Style Background (v2.1)

We have added a dynamic, color-extracting Spotify-style gradient background to the **Cover Flow** layout mode. The background extracts the dominant vibrant color from the active album cover art dynamically, clamps its luminance to keep white text readable, and smoothly cross-fades gradients over `450ms`.

All other modes (Jukebox's solid background and Rolling Album's frosted cover blur backdrop) remain independent and completely unaffected.

---

## Key Refinements

### 1. Dynamic Canvas Color Extraction
* **Vibrant Palette Extraction**: Implemented an offscreen canvas sampling algorithm in [script.js](script.js) that reads pixel data from a 30x30 grid of the cover image.
* **Quantization & Clustering**: Converts pixel RGB channels to HSL to filter and cluster dominant vibrant hue groups (saturation > 35%, lightness 25%-70%). It falls back to muted swatches or the pre-extracted dominant color if the canvas is blocked by CORS or the image fails to load.
* **CORS Compatibility**: Configured `crossOrigin = "anonymous"` on image loaders to safely fetch album covers from mzstatic.com (iTunes API CDNs).

### 2. Double-Layer Gradient Cross-Fading (Spotify Easing)
* **Smooth Transitions**: Added a double-layer container (`#coverflowBgGradient`) with two absolute layers (`#gradLayer1` and `#gradLayer2`) in [index.html](index.html).
* **Cross-Fade Effect**: Switching tracks fades in the inactive layer with the new gradient over `0.45s` while fading out the active layer, providing a beautiful cross-fade animation.
* **Calculated Dark Base**: Computes a near-black dark base by multiplying the accent color's RGB channels by `0.12` and clamping it to a minimum of `rgb(18, 18, 18)` (equivalent to `#121212`).
* **Gradient Stops**: Built a `linear-gradient(to bottom, accent 0%, accent 30%, darkBase 100%)` so the accent dominates only the top ~30% and fades out into darkness in the bottom half of the viewport.

### 3. Contrast Guard / Luminance Clamping
* **Text Readability**: Calculates relative luminance using the formula `Y = 0.2126*R + 0.7152*G + 0.0722*B`.
* **Clamping**: If the accent color's luminance is too high (> 0.6), the RGB values are scaled down proportionally to ensure selector pills and white text overlays remain legible.

### 4. Card Cover Rendering & Stacking Fixes
* **Applied Fog Opacity**: Restored the missing `if (fog) fog.style.opacity = fogOpacity;` update in Cover Flow mode to ensure the active card's fog overlay has an opacity of `0`, making its album cover image fully visible.
* **Separation of Background Updates**: Isolated `updateAmbientBackground` to only execute in Jukebox (`cylinder`) and Rolling Album (`depth`) modes. This prevents it from continually overriding `--dynamic-bg` and setting the body background color to a flat olive green on every animation frame in Cover Flow mode.
* **Z-Index Refinements**: Adjusted `.coverflow-bg-gradient` and `.ambient-bg-blurred` to `z-index: -1` in [style.css](style.css) to prevent negative z-index stacking bugs where elements could render behind the body background color.

---

## How to Verify
1. Open the local Jukebox site (defaults to Cover Flow).
2. Verify that a vertical gradient background matches the active album (e.g. vibrant red to dark red for Thriller).
3. Scroll through the albums; verify the background transitions smoothly to new color palettes over `450ms` (e.g. purple to dark purple for Purple Rain, pink to dark pink for Like a Virgin).
4. Switch to **Jukebox** mode and verify the background becomes the solid ambient color and transitions correctly.
5. Switch to **Rolling Album** mode and verify the frosted blur cover background overlays correctly.
