import { ProjectCaseStudy } from "@/types/project";

export const NECTAR_UI: ProjectCaseStudy = {
    slug: "nectar-ui",
    title: "Nectar UI",
    subtitle: "Design Engineering System", // Más potente que "Multi-tenant Design System"
    description: "A headless, semantic component architecture designed to bridge the gap between Figma tokens and React production code.",
    tagline: "I realized standard libraries assume too much styling. Nectar is my answer: a headless infrastructure powered by Tailwind v4 variables that allows logic to be shared while aesthetics remain fluid.",
    tags: ["Design Systems", "Tailwind v4", "Radix UI", "Architecture", "A11y"],

    homeVideo: "/videos/nectar-ui/nectar-ui-home.webm",
    caseVideo: "/videos/nectar-ui/nectar-ui-case.webm",

    links: {
        live: "https://ui.christiancastillejo.com",
        repo: "https://github.com/christiancastillejo/nectar-ui"
    },

    techStack: [
        { name: "Tailwind v4", iconKey: "code" },
        { name: "Radix UI", iconKey: "layers" },
        { name: "TypeScript", iconKey: "shield-check" },
        { name: "Framer Motion", iconKey: "wind" },
        { name: "Next.js 16", iconKey: "globe" },
    ],

    storySteps: [
        {
            id: 1,
            title: "The Token Dilemma",
            subtitle: "Systematizing Intuition",
            description: "Designers think in tokens (colors, spacing, radius), but developers often hardcode magic numbers. I wanted a system where the 'Theme' wasn't just a JavaScript object, but a native CSS API. Using Tailwind v4, I mapped semantic variables directly to the browser engine.",
            visualType: "code",
            codeLanguage: "css",
            codeSnippet: `:root {
  /* Primitives (Source of Truth) */
  --p-vermilion-500: #E35028;
  --p-green-500:     #025A4E;
  
  /* Physics */
  --ease-spring: cubic-bezier(0.16, 1, 0.3, 1);
}

@theme {
  /* Semantic Mapping */
  --color-primary: var(--p-vermilion-500);
  --color-accent:  var(--p-green-500);

  /* Radius Engine */
  --radius-interaction: var(--radius-full); /* Pills */
  --radius-surface:     var(--radius-2xl);  /* Cards */
  
  /* Typography */
  --font-display: "Acorn", serif;
}`
        },
        {
            id: 2,
            title: "Headless Primitives",
            subtitle: "Accessibility as Architecture",
            description: "Building accessible components like a 'ComboBox' or 'Dialog' from scratch is error-prone. Instead of reinventing the wheel, I built Nectar on top of Radix UI. This decouples the 'Behavior' (Focus traps, Keyboard nav, ARIA) from the 'Presentation'. My components are accessible by default, not as an afterthought.",
            visualType: "image",
            visualContent: "/images/projects/nectar-ui/step-2-accessibility.png",
        },
        {
            id: 3,
            title: "Docs as Product",
            subtitle: "The Developer Experience",
            description: "A system is only as good as its documentation. I built a dedicated documentation site that acts as a 'Laboratory'. It features interactive playgrounds, physics simulations for buttons, and a live token inspector. This shifts the mindset from 'reading docs' to 'exploring the system'.",
            visualType: "image",
            visualContent: "/images/projects/nectar-ui/step-3-component-lab.png",
        }
    ],

    architecture: {
        eyebrow: "System Architecture",
        title: "Atomic",
        spanTitle: "Composition.",
        description: "Nectar enforces a strict separation of concerns. Tokens define the physics, Primitives handle the logic, and Compounds allow for flexible composition without API bloat.",
        diagramSteps: [
            {
                title: "Design Tokens",
                subtitle: "CSS Variables",
                icon: "Database",
                desc: "The visual DNA (Colors, Typo, Radius) defined in CSS."
            },
            {
                title: "Headless Core",
                subtitle: "Radix UI",
                icon: "Layers",
                desc: "Unstyled primitives managing state and ARIA."
            },
            {
                title: "Nectar UI",
                subtitle: "The Glue",
                icon: "Code",
                desc: "Tailwind classes merging Tokens + Primitives."
            },
            {
                title: "Consumption",
                subtitle: "The Portfolio",
                icon: "Globe",
                desc: "Importing semantically typed components."
            }
        ],
        codeSnippet: {
            fileName: "tailwind.config.ts (v4)",
            language: "css",
            description: "By using the new CSS-first configuration, we expose the design system directly to the browser engine, enabling zero-runtime theme switching.",
            code: `@import "tailwindcss";

@theme {
  --font-display: "Acorn", serif;
  --font-sans: "Geist", sans-serif;
  
  --ease-spring: cubic-bezier(0.16, 1, 0.3, 1);
}`
        },
    },

    componentLab: {
        eyebrow: "Interactive Lab",
        title: "Tactile",
        spanTitle: "Physics.",
        activeComponent: "card",
        description: "Test the 'Button' component. It's not just a color change; it includes an internal loading state handler and specific spring physics for the click interaction."
    },

    standardsHeader: {
        eyebrow: "Strict Guidelines",
        title: "Engineering",
        subtitle: "Manifesto.",
        description: "Rules I imposed on myself to ensure this wasn't just another UI kit."
    },

    standards: [
        {
            title: "Colocation",
            icon: "Layers",
            description: "Documentation lives next to the code. If I update the component, I update the docs immediately.",
            highlight: "Maintainability"
        },
        {
            title: "No Magic Numbers",
            icon: "Zap",
            description: "Every padding, margin, or color must come from a Token. Hex codes are banned in component files.",
            highlight: "Consistency"
        },
        {
            title: "Polymorphism",
            icon: "Code",
            description: "Components support the 'asChild' prop (via Slot), allowing them to merge with other DOM elements seamlessly.",
            highlight: "Flexibility"
        },
        {
            title: "Zero CLS",
            icon: "Wind",
            description: "Components enforce explicit dimensions to prevent layout shifts during hydration or loading states.",
            highlight: "Performance"
        }
    ],

    nextProjectSlug: "silvestra",

    metrics: [
        { label: "Components", value: "15", description: "Fully accessible." },
        { label: "Bundle Size", value: "<5kb", description: "Tree-shakeable." }
    ],

    lessons: [
        {
            title: "The cost of 'Too Much Dry'",
            content: "I learned that early abstraction is the root of all evil. I had to duplicate some code initially to understand the common patterns before extracting them into the 'cn' utility and base variants."
        },
        {
            title: "Developer Experience is User Experience",
            content: "If the API is hard to use, the UI will be buggy. Spending time on strong TypeScript definitions saved me hours of debugging in the consuming apps."
        }
    ]
};