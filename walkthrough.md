# Walkthrough: Visual Regression Fixes (v3.2)

We have successfully resolved the three visual regressions in the Spotlight, Elevation, and Flipper modes.

## Resolved Regressions

### 1. Spotlight Mode Positioning & Horizontal Alignment
* **Beam Alignment**: Nesting `.stage-spotlight` inside `.carousel` meant it inherited the camera's `camX` translation (`-146px` in Spotlight), causing a horizontal shift. We resolved this by dynamically translating `.stage-spotlight`'s inline transform in `updateCarousel()` by `c.lockX` and `c.lockY`, keeping it perfectly centered and tracking the active card.
* **Vertical Positioning**: Shifted the active card higher so it sits clearly above the Now Playing dock by adjusting preset `lockY` values (Spotlight: `-83` -> `-126`, Elevated: `-190` -> `-193`, Flipper: `120` -> `86`).
* **Details Panels Alignment**: Fixed a scaling offset bug by computing the plate's vertical center using the scaled card height: `cardCenterY * s + c.lockY`. The details panels now align perfectly with the card's active scaled edges.

### 2. Elevation Mode Square Cards & Tilt
* **1:1 Square Forcing**: Added `!important` to the CSS height override (`height: 224px !important; border-radius: 7px !important;`) on `.card` and `.card-content` for `body.body-elevated`. This guarantees that background cards render as flat 1:1 squares in Elevation mode, rather than falling back to the default `320px` height.
* **Active Card Tilt**: Confirmed the active card preserves its expected 30° - 50° backward tilt in Elevation mode.

### 3. Flipper Mode Curvature
* **Default Bend**: Added `"cardBend": 15` directly into Flipper's calib preset in `script.js` so cards curve vertically out-of-the-box.
* **Slider Range**: Extended the `cardBend` slider range in the calibration page schema from `[-25, 25]` to `[-60, 60]`. This allows the user to apply a deeper bend that is clearly visible from the front view.

---

## How to Verify
1. Open the local site at [http://localhost:8002](http://localhost:8002).
2. **Spotlight Mode**:
   * Verify the main active card is centered under the beam, the details panels are aligned with its edges, and the card sits above the Now Playing dock.
3. **Elevation Mode**:
   * Verify all background cards are rendered as flat 1:1 squares, and the active card is tilted backward.
4. **Flipper Mode**:
   * Verify cards are curved vertically by default (default bend 15).
   * Open Flipper's **Calibrate** panel (`⚙ Calibrate` button) -> `Motion/FX` tab, drag the `Card bend` slider up to `60` or `-60`, and verify the cards bend visibly.
