---
name: Executive Mobility Portfolio
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#d7c2b9'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#9f8d84'
  outline-variant: '#52443c'
  surface-tint: '#feb68e'
  primary: '#feb68e'
  on-primary: '#502407'
  primary-container: '#c2825d'
  on-primary-container: '#471e02'
  inverse-primary: '#875130'
  secondary: '#bcc7de'
  on-secondary: '#263143'
  secondary-container: '#3e495d'
  on-secondary-container: '#aeb9d0'
  tertiary: '#b9c7e0'
  on-tertiary: '#233144'
  tertiary-container: '#8392a9'
  on-tertiary-container: '#1c2a3d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbc9'
  primary-fixed-dim: '#feb68e'
  on-primary-fixed: '#331200'
  on-primary-fixed-variant: '#6b3a1b'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#d5e3fd'
  tertiary-fixed-dim: '#b9c7e0'
  on-tertiary-fixed: '#0d1c2f'
  on-tertiary-fixed-variant: '#3a485c'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 80px
---

## Brand & Style
The design system is engineered for a high-level PM persona—Prashant Mani—balancing technical depth with executive-ready business impact. It targets recruiters and stakeholders at top-tier tech firms by evoking a sense of strategic leadership and operational precision.

The aesthetic follows a **Corporate Modern** approach with **Minimalist** and **Glassmorphic** undertones, inspired by the high-utility clarity of tools like Linear and Vercel. The interface should feel like a premium command center: focused, high-trust, and devoid of visual noise. It communicates "execution at scale" through meticulous alignment, generous whitespace, and a sophisticated color palette that prioritizes readability and professional gravitas.

## Colors
The color strategy utilizes a deep, sophisticated dark mode to establish a "premium dashboard" feel. 

- **Primary (Warm Earthy Copper):** Reserved strictly for high-impact moments—key metrics, primary action buttons, and subtle structural accents (like a 2px top border on featured cards). It adds warmth and "humanity" to an otherwise technical layout.
- **Surface Tiers:** The background uses `#0f172a`. Floating elements, cards, and navigation utilize `#1e293b` to create depth.
- **Accents & Borders:** Use low-contrast greys for borders to maintain a seamless, "borderless" appearance common in high-end SaaS tools.

## Typography
The typography system pairs **Geist** for structural/data elements with **Inter** for long-form reading. 

- **Display & Headlines:** Use Geist with tight letter-spacing to mimic the look of modern developer tools. This projects technical competence and modern taste.
- **Body Text:** Inter provides maximum legibility for project descriptions and impact statements.
- **Labels:** Small caps with generous letter-spacing (0.05em) should be used for section overviews or metadata categories (e.g., "ROLE", "IMPACT", "TECH STACK") to provide a clear hierarchy without increasing font size.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to maintain a centered, editorial feel, transitioning to a fluid stack on mobile.

- **Grid:** 12-column system with a 24px gutter. Content should be grouped into cards that span 4, 6, or 12 columns.
- **Rhythm:** Use a strict 8px base unit. Section vertical spacing is aggressive (80px+) to allow the content to breathe and signify different areas of expertise (Mobility vs. SaaS).
- **Mobile:** Margins shrink to 16px. Multi-column card layouts reflow into a single-column stack.

## Elevation & Depth
Depth is achieved through **Tonal Layers** and **Subtle Outlines** rather than heavy shadows.

- **Surfaces:** Use a slight elevation hierarchy. Background is base, cards are one level up (#1e293b), and dropdowns/modals are two levels up (#334155).
- **Borders:** Every card and interactive element should have a 1px solid border using a slightly lighter shade of the surface color (e.g., `rgba(255,255,255,0.08)`). This provides definition against the dark background.
- **Reflections:** Top-level cards can use a very subtle linear gradient (top-to-bottom) from a lighter slate to the surface color to simulate a slight top-down light source.

## Shapes
The shape language is professional and refined. 

- **Standard Elements:** Use `rounded-lg` (12px) for cards, large containers, and input fields.
- **Small Elements:** Use `rounded` (8px) for buttons, chips, and small UI components.
- **Icons:** Use linear, 2px stroke icons with slightly rounded terminals to match the font weight of Inter/Geist.

## Components
- **Primary Button:** Solid `#b57753` background with white text. High-contrast, 8px corner radius. On hover, a subtle brightness increase.
- **Secondary Button:** Ghost style with a 1px border. Text and border in a light grey/white. No fill.
- **Metrics/Impact Cards:** High-contrast numbers in the Copper primary color. Use Geist for the numeric values to emphasize the "data" aspect. Include a tiny trend line or Sparkline in the background.
- **Experience Chips:** Small, low-saturation backgrounds (e.g., `rgba(181, 119, 83, 0.1)`) with primary-colored text for tags like "AI", "Logistics", or "Product Strategy".
- **Progress Bars:** Thin 4px tracks. The progress fill should be the primary copper color with a subtle glow (outer shadow) to highlight completion of goals or project phases.
- **Input Fields:** Dark background (#0f172a), 1px border, 8px radius. Active state uses a primary copper border.