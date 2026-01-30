# Portfolio v4 — Christian Castillejo

> **Status:** 🟢 Open for Select Projects.

![Portfolio Cover](/public/images/readme-hero.webp)

## 🧭 The Philosophy
**I bridge the gap between pure design and production code.**
This repository isn't just a gallery; it's a live proof of concept for **Design Engineering**. I built this to dogfood **Next.js 15** and **Tailwind v4**, proving that high-performance sites (Lighthouse 100) can still have organic, complex motion.

## 🛠 The Stack
Built for developer experience and type safety.

-   **Core:** Next.js 16 (App Router, RSC), TypeScript.
-   **Style:** Tailwind CSS v4 (Bleeding edge).
-   **Motion:** Framer Motion (Orchestration & Layout).
-   **Assets:** Lucide React, Geist Font.

## 🧩 Engineering Highlights
*For the technical recruiter reviewing the code:*

### 1. Live Component Lab
`src/components/projects/demos/component-lab.tsx`
> **The Challenge:** Static docs lie.
> **The Solution:** A bidirectional playground where props (`variant`, `size`) update both the UI and the live code snippet in real-time.

### 2. Liquid Physics Header
`src/components/layout/header.tsx`
> **The Challenge:** Sticky headers feel mechanical.
> **The Solution:** A reactive glass effect that adjusts blur and shadow depth based on scroll velocity and state.

### 3. Smart Video Playback
`src/app/page.tsx`
> **The Challenge:** Heavy media kills performance.
> **The Solution:** A `useInView` hook with "center-stage" logic. Videos only play when focused, ramping playback from `0.6x` to `1.0x` for a cinematic feel without CPU waste.

## 🚀 Run Locally

```bash
git clone [https://github.com/christiancastillejo/portfolio.git](https://github.com/christiancastillejo/portfolio.git)
npm install
npm run dev
```

📬 Contact

I am open for select projects that value engineering craftsmanship.

    [christiancastillejo@proton.me](mailto:christiancastillejo@proton.me)

    [https://www.linkedin.com/in/christiancastillejo](https://www.linkedin.com/in/christiancastillejo)

Designed & Engineered by Christian Castillejo.