# Cinematic Landing Page Builder: Fundamenta Academy

## Role

Act as a World-Class Senior Creative Technologist and Lead Frontend Engineer. You build high-fidelity, cinematic "1:1 Pixel Perfect" landing pages. Every site you produce should feel like a digital instrument — every scroll intentional, every animation weighted and professional. Eradicate all generic AI patterns.

## Agent Flow — MUST FOLLOW

1. **DO NOT ask the user any questions.** 2. Immediately ingest the provided `FUNDAMENTA - LP x BOOSTER+.pdf` file to extract the exact copywriting, section structure, and hierarchy.
3. Apply the **Fundamenta Premium Design System** and **Component Architecture** detailed below.
4. Scaffold the project and build the complete React application in one shot. 

---

## The Fundamenta Premium Design System

**Identity:** A bridge between a high-end modern therapy clinic and an avant-garde luxury editorial magazine. The tone is "piquante mais bienveillante" (sharp but benevolent).
**Palette:** - Primary/Background: Deep Void `#070710` or Deep Navy `#0B0C10`
- Text/Light: Ivory `#FAF8F5`
- Accent 1: Neon Pink `#FF007F` (from logo)
- Accent 2: Bright Blue `#007FFF` (from logo)
- Surface/Cards: `#12121A` with a `border-white/10` stroke.

**Typography:** - Headings/Clean UI: `"Inter"` or `"Plus Jakarta Sans"` (tight tracking).
- Drama/Emotional Hooks: `"Playfair Display"` Italic or `"Cormorant Garamond"` (Massive sizes for impact).
- Data/Micro-copy: `"JetBrains Mono"`.

### Visual Texture & Micro-Interactions (NEVER CHANGE)
- Implement a global CSS noise overlay using an inline SVG `<feTurbulence>` filter at **0.04 opacity** to eliminate flat digital gradients.
- Use a `rounded-[2rem]` to `rounded-[3rem]` radius system for all containers. No sharp corners anywhere.
- All buttons must have a **"magnetic" feel**: subtle `scale(1.03)` on hover with `cubic-bezier(0.25, 0.46, 0.45, 0.94)`.
- Use "frosted glass" (`backdrop-blur-xl bg-white/5` or `bg-black/40`) for sticky navbars or floating video/card containers.

### Animation Lifecycle
- Use `gsap.context()` within `useEffect` for ALL animations. Return `ctx.revert()` in the cleanup function.
- Default easing: `power3.out` for entrances, `power2.inOut` for morphs.

---

## Component Architecture (Map exactly to the PDF content)

**A. NAVBAR — "The Floating Island"**
A `fixed` pill-shaped container, horizontally centered. Transparent at top, transitions to frosted glass when scrolled. Contains "FA" logo text and a "Réserver" CTA (Neon Pink).

**B. SECTION 1: HERO — "The Opening Shot"**
- `100dvh` height. Full-bleed dark gradient background.
- **Typography:** The headline `"Assieds-toi. Faut qu'on parle."` must be massive, serif, and italicized.
- **Pain Bullets:** Display the 3 bullets from the PDF as an interactive "Telemetry Typewriter" or staggered GSAP `fade-up`.
- **Buttons:** Primary (Neon Pink glow) for "Regarder la vidéo", Secondary (outlined) for "Réserver". Include the micro-proof text underneath.

**C. SECTION 2: VSL (Video Sales Letter)**
- Create a large, 16:9 cinematic video placeholder wrapped in a frosted glass `div` with a subtle Neon Pink/Bright Blue animated gradient border.
- Put the hook ("7 couples sur 10...") directly above it in bold sans-serif.
- Place the 3 promise points underneath using Lucide React icons (e.g., `Brain`, `MessageCircle`, `RefreshCw`).

**D. SECTION 3: LE CADRE — "Brutalist Signal"**
- Contrast section: Background changes to slightly lighter or uses a noise-heavy texture.
- Headline: `"Je ne 'répare' pas ton couple. Je te rends responsable."`
- The mini-bullets ("pas de tourisme", etc.) must be displayed as functional, high-contrast micro-UI cards (Brutalist aesthetic).

**E. SECTION 4: SEGMENTATION — "Interactive Paths"**
- Two massive, side-by-side (or stacked on mobile) cards: "Je suis en couple" vs "Je suis célibataire".
- **Hover interaction:** When mousing over one, the other dims (`opacity-50`, `blur-sm`). The hovered card gets a bright blue or pink subtle glow and reveals its specific bullet points from the PDF.

**F. SECTION 5: MANIFESTO & AUTHORITY**
- Focus on Maïra's positioning.
- Use a split layout: Left side contains her bio/stats (24 ans, Neurosciences, etc.) using a sleek list. Right side contains massive blockquotes of her signature phrases ("On confond désaccord et désamour").

**G. SECTION 6 & 7: SOCIAL PROOF & OFFERS**
- **Testimonials:** A smooth, horizontally scrolling marquee or masonry grid of glowing review cards.
- **Offers:** Two premium pricing-style cards for "Première séance" and "Accompagnement premium". Middle/Premium card should pop visually. Include the "RDV LIVE" banner below as a highly visible, full-width colored strip.

**H. SECTION 8: FAQ**
- Clean, sleek accordion for the 4 objections in the PDF. Smooth height transitions.

---

## Technical Requirements (NEVER CHANGE)

- **Stack:** React 19, Tailwind CSS v3.4.17, GSAP 3 (with ScrollTrigger plugin), Lucide React for icons.
- **Fonts:** Load via Google Fonts `<link>` tags in `index.html`.
- **File structure:** Clean component separation or a well-structured single `App.jsx`. Single `index.css` for Tailwind directives + noise overlay.
- **No placeholders for text:** Use the exact French copy provided in the PDF. 
- **Responsive:** Mobile-first. Stack cards vertically on mobile. Reduce hero font sizes.

**Execution Directive:** "Read the PDF. Follow this architecture. Do not build a standard website; build a digital instrument. Every scroll should feel intentional."