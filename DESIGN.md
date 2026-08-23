---
name: The System Architecture
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#b9ccb2'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#84967e'
  outline-variant: '#3b4b37'
  surface-tint: '#00e639'
  primary: '#ebffe2'
  on-primary: '#003907'
  primary-container: '#00ff41'
  on-primary-container: '#007117'
  inverse-primary: '#006e16'
  secondary: '#ffd393'
  on-secondary: '#432c00'
  secondary-container: '#fdaf00'
  on-secondary-container: '#694600'
  tertiary: '#fcf8f8'
  on-tertiary: '#313030'
  tertiary-container: '#dfdcdb'
  on-tertiary-container: '#626060'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#72ff70'
  primary-fixed-dim: '#00e639'
  on-primary-fixed: '#002203'
  on-primary-fixed-variant: '#00530e'
  secondary-fixed: '#ffddaf'
  secondary-fixed-dim: '#ffba43'
  on-secondary-fixed: '#281800'
  on-secondary-fixed-variant: '#614000'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c9c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  headline-xl:
    fontFamily: JetBrains Mono
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.05em
  headline-lg:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: 0em
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-sm:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
  code-sm:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0em
spacing:
  unit: 4px
  gutter: 16px
  margin: 24px
  container-max: 1440px
---

## Brand & Style

This design system is built on the aesthetic of a high-security subterranean mainframe. It evokes a sense of technical mastery, raw data access, and digital subversion. The brand personality is clinical yet energetic, stripping away modern "user-friendly" fluff in favor of a powerful, retro-futuristic terminal interface.

The visual direction combines **Digital Brutalism** with **Retro-Futuristic** cinematic cues. It prioritizes information density and functional clarity, using light and color as the primary means of hierarchy against a void-like background. The goal is to make the user feel like an operator navigating the core of a complex simulation.

## Colors

The palette is strictly limited to maintain the high-contrast terminal aesthetic.

- **Primary (#00FF41):** Digital Green. Used for all active data, primary text, and success states. It represents the "pulse" of the system.
- **Secondary (#FFB000):** Warning Amber. Reserved for alerts, system overrides, and secondary highlights.
- **Background (#000000):** Total Black. The foundation of the UI, creating an infinite void that allows glowing elements to pop.
- **Surface (#0D0D0D):** A subtle variation used only for rare structural separation where borders are insufficient.

All colors should be applied with a "luminescent" mindset. Text and borders are not just colored; they are sources of light on the screen.

## Typography

The typography system relies exclusively on monospaced fonts to reinforce the command-line origin of the interface.

**JetBrains Mono** is the workhorse for primary data and headlines, chosen for its exceptional legibility and technical precision. **Space Mono** is utilized for metadata, labels, and small UI annotations to provide a slightly more geometric, "sci-fi" texture.

All typography should implement a subtle `text-shadow` using the primary color to simulate CRT phosphor bloom. For critical headers, an "all-caps" approach is preferred to signal authority.

## Layout & Spacing

This design system employs a **Fixed Grid** model based on a 4px baseline unit.

- **Grid:** A 12-column layout on desktop, 6-column on tablet, and 2-column on mobile.
- **Gutters:** Standardized at 16px to ensure a tight, dense information flow characteristic of developer tools.
- **Structural Lines:** Use 1px green lines instead of whitespace to define regions. The layout should look like a blueprint or a schematic.

The interface should feel "locked" to the screen edges. Avoid excessive margins; the content should feel like it is filling the terminal window.

## Elevation & Depth

Depth is not achieved through shadows or Z-axis stacking, but through **luminosity and scanline density.**

- **Z-Index 0:** Pure black background with a fixed, semi-transparent CRT scanline overlay (horizontal 1px lines).
- **Z-Index 1:** The main grid and structural borders. These have a faint glow.
- **Z-Index 2:** Active data and primary text. High-intensity glow.
- **Z-Index 3:** Modals and pop-overs. These should not "float" with shadows; instead, they should "cut into" the background with a solid 1px glowing border and a solid black fill that obscures the content beneath.

To simulate CRT flicker, a very subtle 0.05s opacity jitter can be applied to high-priority elements.

## Shapes

The shape language is strictly **Sharp (0px).**

Curves represent organic softness which has no place in this system. Every container, button, and input field must feature 90-degree corners. This reinforces the grid-based, mathematical nature of the interface. Borders should always be 1px in width—never thicker—to maintain a precise, "wireframe" aesthetic.

## Components

### Buttons

Buttons are treated as command prompts.

- **Idle State:** 1px green border, green text, no fill.
- **Hover/Focus State:** Solid green background, black text. A cursor character `_` should appear at the end of the button label.
- **Interaction:** On click, the button should "flash" or invert colors briefly to simulate a mechanical terminal response.

### Input Fields

Inputs are preceded by a `>` prompt character.

- **Visuals:** A bottom border only, or a full thin border.
- **Focus:** The border glows intensely. The text cursor is a solid green block that blinks.

### Chips & Tags

Small, all-caps labels enclosed in brackets, e.g., `[ STATUS: ACTIVE ]`. These do not have backgrounds, only text and brackets.

### Cards & Containers

Containers are simple 1px boxes. To add "high-tech" detail, corners can feature "crosshair" extensions (lines that extend 4px past the corner intersection).

### Data Lists

Standardized as key-value pairs separated by dots: `USER_ID........29384-X`. This maintains the horizontal rhythm of a terminal readout.

### Feedback Elements

Warnings must use the Amber (#FFB000) color for both text and borders. Errors should trigger a "System Failure" style visual, utilizing high-frequency blinking of the Amber elements.