# Styleguide: Connected Health

## Table of Contents
1. **Brand & Content Guidelines** 
	- 1.1 Voice & Tone
	- 1.2 Audience Snapshot
	- 1.3 Messaging Pillars
	- 1.4 Copy Mechanics
	- 1.5 Imagery Guidelines
	- 1.6 Legal & Compliance
	- 1.7 Accessibility & Inclusivity Checklist
	- 1.8 Quick‑Reference Cheat Sheet
2. **Visual Identity** 
	- 2.1 Color Palette 
	- 2.2 Typography 
	- 2.3 Spacing & Layout
3. Visual Elements 
	- 3.1 Logo Assets 
	- 3.2 Image Styling 
	- 3.3 Icon Usage 
	- 3.4 Background Elements 
	- 3.5 Animation & Transitions
4. Component Patterns 
	- 4.1 Buttons 
	- 4.2 Form Elements 
	- 4.3 Cards & Containers 
	- 4.4 Navigation Elements 
	- 4.5 Call‑to‑Action Sections
5. Content Patterns 
	- 5.1 Heading Hierarchy 
	- 5.2 List Styling 
	- 5.3 Text Block Formatting 
	- 5.4 Special Content Elements
6. Implementation Guide 
	- 6.1 Tailwind Configuration (link to repo) 
	- 6.2 Reusable Utility Classes (link to repo) 
	- 6.3 JavaScript Utilities (link to repo) 
	- 6.4 Directory Structure 
	- 6.5 Code Repository Call‑outs
7. Integrations
8. Changelog

---

## 1. Brand & Content Guidelines
> _This section defines the strategic foundations—voice, messaging, audience—before any visual details._

### 1.1 Voice & Tone
| Attribute           | Description                                           | Do                                                              | Don’t                           |
| ------------------- | ----------------------------------------------------- | --------------------------------------------------------------- | ------------------------------- |
| **Brand archetype** | Mentor / Guide – empathetic, solution‑oriented        | –                                                               | –                               |
| **Personality**     | Friendly coach, science‑backed, celebrates small wins | “You’ll learn one simple habit this week to calm inflammation.” | “Miracle cure!”                 |
| **Formality**       | Professional‑conversational (8th‑grade readability)   | Use contractions, active verbs                                  | Use jargon or academic language |
| **Empowerment**     | Emphasise self‑healing & next steps                   | “Here’s what you can try today →”                               | Lecture the reader              |
| **Trust**           | Evidence‑based, cite sources                          | Mention Dr Hartman’s credentials                                | Make unverified health claims   |
_Brand archetype:_ **Mentor / Guide** — empathetic, solution‑oriented.  
_Personality:_ Friendly coach, rooted in science, upbeat about small wins.  
_Formality:_ Professional‑conversational (8th‑grade readability).  
_Empowerment:_ Emphasise self‑healing and next steps.  
_Trust:_ Evidence‑based, cite sources.

_On‑brand sample paragraph:_  
“Feeling drained? Let’s start by balancing your gut. In just seven days, you’ll swap one breakfast habit and notice steadier energy.”

### 1.2 Audience Snapshot
Primary avatar **“Julie”**—adult 30‑60 navigating chronic fatigue or autoimmune issues, overwhelmed by conflicting advice. External struggles: fragmented care, misinformation, cost. Internal struggles: confusion, hopelessness. Aspirations: clear plan, vibrant life.

### 1.3 Messaging Pillars
1. **Core promise** – Restore your health & hope with science‑backed solutions.
2. **Triangle of Health** – Gut → Stress → Sleep sequence unlocks self‑repair.
3. **Guided Modules** – Six‑week, bite‑size actions with community + digital coach.
4. **Personalised Labs** – 116 biomarkers + optional quarterly deep‑dives.
5. **Cost‑Value Balance** – $67–$127 / month vs. $300+ typical consults.

### 1.4 Copy Mechanics
- **CTA formula** – _Person → Action → Benefit_: “Start your Cleanse — boost energy in 7 days”.
- **Story frame** – Problem (broken healthcare) → Agitate → Solve (Connected Health plan).
- **Transformation** – “unsupported & confused” → “clear & thriving”.
- **Approved Vocabulary** – health, hope, vibrant, science‑backed, clear, roadmap, empower, thrive  
- **Phrases –** “You were made for health”, “clear roadmap to health”, “whole‑person health”.
- **CTA Swipe‑File –**  Restore Your Health & Hope, Together • Feel Healthy and Hopeful Again • You Were Made for Health • Experience Whole‑Body Health • Harness Your Body’s Power to Heal • Create a Clear Roadmap to Whole‑Body Health
- **SEO keywords** – _gut health plan, functional nutrition program, chronic fatigue course._

### 1.5 Imagery Guidelines
| Rule                                                | Rationale                   |
| --------------------------------------------------- | --------------------------- |
| Bright, natural‑light photography of real people    | Builds trust                |
| Hopeful, active scenes; never clinical shock images | Avoids fear‑based marketing |
| Overlay tint: `bg-ch-blue/10` or `bg-warm-100/50`   | Brand harmony               |
| Rule of thirds, negative space for copy             | Flexible layouts            |
| Diverse representation                              | Inclusivity                 |
| Tech spec: 1600 px JPG/WebP ≤ 150 KB; SVG for icons | Performance                 |
### 1.6 Legal & Compliance
> **Disclaimer (footer):** “Connected Health provides educational wellness information and is not a substitute for professional medical advice. Always consult your physician.”

- Use “may support” / “can help” – never promise cures.
- Testimonials: add “Results vary; typical users improve one health metric after the first module.”

### 1.7 Accessibility & Inclusivity Checklist
- Text contrast ≥ 4.5 : 1
- Alt text describes action + context
- Descriptive link text
- ARIA labels on interactive components
- Logical heading order (H1 → H2 → H3)

### 1.8 Quick‑Reference Cheat Sheet
_Voice mantra:_ Friendly coach, science‑backed, step‑by‑step.  
_Image mantra:_ Everyday vitality in natural light.


***
## 2. Visual Identity

Connected Health’s visual language balances calm professionalism with energising wellness cues. Use the tokens below to keep every asset on‑brand.

### 2.1 Color Palette

#### Primary Colors

|Color|Hex|RGB|HSL|Tailwind Token|
|---|---|---|---|---|
|Primary Blue|#2B8FBB|43 , 143 , 187|198° 63 % 47 %|`ch-blue`|
|Green|#64AC00|100 , 172 , 0|83° 100 % 34 %|`ch-green`|
|Brown|#827272|130 , 114 , 114|0° 7 % 51 %|`warm-400`|
|Dark Gray|#353B36|53 , 59 , 54|125° 5 % 23 %|`dark-gray`|

#### Warm Scale

|Token|Hex|
|---|---|
|warm‑50|#F7F6F6|
|warm‑100|#E0DCDC|
|warm‑200|#C1B9B9|
|warm‑300|#A39696|
|warm‑400|#827272|
|warm‑500|#6B5E5E|
|warm‑600|#534A4A|
|warm‑700|#3B3435|

#### Alpha Variations

|Token|Example Usage|
|---|---|
|`bg-ch-blue/10`|10 % blue tint for info boxes|
|`bg-warm-100/50`|50 % warm‑100 tint for soft dividers|

### 2.2 Typography

|Usage|Family|Tailwind Token|
|---|---|---|
|Headings|Caecilia, Roboto Slab, serif|`font-serif`|
|Body|Roboto, system sans|`font-sans`|

Font sizes follow Tailwind scale (`text-xs` → `text-5xl`) with responsive overrides (`md:` `lg:`) as shown in component snippets.

### 2.3 Spacing & Layout

|Context|Mobile|Desktop|Tailwind|
|---|---|---|---|
|Section top/bottom|3.5 rem|5 rem|`py-14 md:py-20`|
|Section left/right|1 rem|2 rem|`px-4 md:px-8`|

---

## 3. Visual Elements

### 3.1 Logo Assets

_File naming: `ch-logo-[variant].[format]` (`@2x` for high‑dpi PNGs)._

|Variant|Usage Context|SVG|PNG|PNG @2×|
|---|---|---|---|---|
|Primary|Light or neutral backgrounds (site header)|[SVG](https://raw.githubusercontent.com/get-connected-health/connected-health-design-system/main/assets/logo/ch-logo-primary.svg)|[PNG](https://raw.githubusercontent.com/get-connected-health/connected-health-design-system/main/assets/logo/ch-logo-primary.png)|[2×](https://raw.githubusercontent.com/get-connected-health/connected-health-design-system/main/assets/logo/ch-logo-primary@2x.png)|
|White|Dark backgrounds / hero sections|[SVG](https://raw.githubusercontent.com/get-connected-health/connected-health-design-system/main/assets/logo/ch-logo-white.svg)|[PNG](https://raw.githubusercontent.com/get-connected-health/connected-health-design-system/main/assets/logo/ch-logo-white.png)|[2×](https://raw.githubusercontent.com/get-connected-health/connected-health-design-system/main/assets/logo/ch-logo-white@2x.png)|
|Pill|On photos or busy backgrounds|[SVG](https://raw.githubusercontent.com/get-connected-health/connected-health-design-system/main/assets/logo/ch-logo-pill.svg)|[PNG](https://raw.githubusercontent.com/get-connected-health/connected-health-design-system/main/assets/logo/ch-logo-pill.png)|[2×](https://raw.githubusercontent.com/get-connected-health/connected-health-design-system/main/assets/logo/ch-logo-pill@2x.png)|
|Primary‑shadow|Small sizes where contrast is an issue|[SVG](https://raw.githubusercontent.com/get-connected-health/connected-health-design-system/main/assets/logo/ch-logo-primary-shadow.svg)|[PNG](https://raw.githubusercontent.com/get-connected-health/connected-health-design-system/main/assets/logo/ch-logo-primary-shadow.png)|[2×](https://raw.githubusercontent.com/get-connected-health/connected-health-design-system/main/assets/logo/ch-logo-primary-shadow@2x.png)|
|White‑shadow|Dark photo overlays|[SVG](https://raw.githubusercontent.com/get-connected-health/connected-health-design-system/main/assets/logo/ch-logo-white-shadow.svg)|[PNG](https://raw.githubusercontent.com/get-connected-health/connected-health-design-system/main/assets/logo/ch-logo-white-shadow.png)|[2×](https://raw.githubusercontent.com/get-connected-health/connected-health-design-system/main/assets/logo/ch-logo-white-shadow@2x.png)|
|Pill‑shadow|Over gradients or patterned images|[SVG](https://raw.githubusercontent.com/get-connected-health/connected-health-design-system/main/assets/logo/ch-logo-pill-shadow.svg)|[PNG](https://raw.githubusercontent.com/get-connected-health/connected-health-design-system/main/assets/logo/ch-logo-pill-shadow.png)|[2×](https://raw.githubusercontent.com/get-connected-health/connected-health-design-system/main/assets/logo/ch-logo-pill-shadow@2x.png)|

> **Format guidance:** Prefer SVG for web for infinite scaling and small payloads. Use PNG (or PNG @2×) only where SVG isn’t accepted (certain email clients, legacy CMS, etc.).

### 3.2 Image Styling
- **Hero images** – bright, natural‑light photos; `rounded-md shadow-md max-w-md w-full`.
- **Feature images** – `w-32 h-32 object-contain` inside flex wrapper.
- **Profile images** – circular, 96 px (`h-24 w-24`) with 4 px white border & shadow.

### 3.3 Icon Usage
Lucide icons at `h-7 w-7` for features, `h-4 w-4` in lists. Use brand blue (`text-ch-blue`) or contextual colours (`text-green-600`, `text-red-500`).

### 3.4 Background Elements
- `bg-gradient-warm` for section backgrounds (defined in Tailwind).
- `bg-warm-100/50 h-px w-full` for subtle dividers.
- Step number pill: `inline-block bg-ch-blue text-white rounded-full px-4 py-1 text-sm font-bold`.


### 3.5 Animation & Transitions
- `.reveal` utility (scroll‑triggered fade‑in‑up).
- Stagger classes `.stagger-1` … `.stagger-6` (100 ms increments).
- Button hover: scale 1.05 & colour swap to `dark-gray`.

---

## 4. Component Patterns

### 4.1 Buttons
- **Primary** – `bg-ch-blue text-white hover:bg-dark-gray`.
- **Secondary** – `bg-ch-green text-white hover:bg-dark-gray`.
- **Text link** – `text-ch-blue hover:text-dark-gray border-b-2 border-dotted`.
- Button component reference: [`Button.js`](https://github.com/get-connected-health/connected-health-design-system/blob/main/components/Button.js).

### 4.2 Form Elements
Input, checkbox, radio examples as per original spec using brand colors (`focus:ring-ch-blue`, `border-warm-200`).
### 4.3 Cards & Containers
#### Feature Card

```html
<div class="rounded-lg border bg-white text-gray-900 shadow-sm max-w-xl mx-auto p-6">
  <h4 class="text-xl font-semibold flex items-center gap-3 mb-2">
    <svg class="h-7 w-7 text-ch-blue" xmlns="http://www.w3.org/2000/svg" fill="none"
         viewBox="0 0 24 24" stroke="currentColor">
      <!-- icon path -->
    </svg>
    Feature Title
  </h4>
  <p class="text-lg">
    Short benefit‑driven description that explains why this feature matters to the user.
  </p>
</div>
```

### 4.4 Navigation Elements
Header & footer gradient warm backgrounds; centered typography hierarchy.

### 4.5 Call‑to‑Action Sections
Simple CTA and two‑column CTA patterns with `.btn-primary` links.

---

## 5. Content Patterns

### 5.1 Heading Hierarchy
`<h2 class="section-heading …">`, `<h3 class="text-ch-blue …">`, `<h4 class="text-xl font-semibold …">`.

### 5.2 List Styling
Standard `list-disc`, ordered `list-decimal`, feature lists with checkmarks.
### 5.3 Text Block Formatting
Standard paragraph (`text-lg mb-4`), important paragraph (`font-medium`), subtle text (`text-sm text-warm-500 italic`).

### 5.4 Special Content Elements
FAQ accordion pattern (ARIA‑friendly) and comparison grid (positive/negative items with icons).

---

## 6. Implementation Guide

### 6.1 Tailwind Configuration
The complete Tailwind config lives in the repo – see [`tailwind.config.js`](https://github.com/get-connected-health/connected-health-design-system/blob/main/tailwind/tailwind.config.js). Import it in your build to gain access to the custom tokens above.
### 6.2 Reusable Component Classes
Global utility classes (`.btn-primary`, `.info-box`, `.testimonial`, etc.) are defined in [`globals.css`](https://github.com/get-connected-health/connected-health-design-system/blob/main/css/globals.css).

### 6.3 JavaScript Utilities
Scroll reveal (`scroll-reveal.js`) and accordion (`accordion.js`) live in [`/js`](https://github.com/get-connected-health/connected-health-design-system/tree/main/js). Import and call `initScrollReveal()` / `initAccordion()` on page load.

### 6.4 Project Structure
```
src/
├── components/
│   ├── common/ (Button.js, Card.js …)
│   ├── layout/  (Header.js, Footer.js …)
│   ├── sections/ (Hero.js, Features.js …)
│   └── special/  (PricingCard.js …)
├── styles/ (globals.css, animations.css)
├── utils/  (animations.js)
└── pages/  (index.js, about.js …)
```


---
## 7. Integrations
**Lovable:** [Lovable](lovable.md)


---

## 8. Changelog
- **2025‑04‑11** – Initial full style guide consolidated into GitHub‑linked document.
