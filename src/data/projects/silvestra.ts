import { ProjectCaseStudy } from "@/types/project"

export const SILVESTRA: ProjectCaseStudy = {
  slug: "silvestra",
  title: "Silvestra",
  subtitle: "E-commerce Ecosystem",
  description: "A headless Shopify architecture bridging high-end aesthetics with rigid engineering standards.",
  tagline: "Off-the-shelf templates would have compromised the brand's artisanal soul. I engineered a bespoke headless solution from scratch, ensuring the digital experience feels as premium as the physical product.",
  tags: ["Next.js 15", "Shopify Headless", "Design System", "Typescript", "Framer Motion"],

  video: "/videos/silvestra/hero.webm", // Extracción del Hardcode

  techStack: [
    { name: "Next.js 15", iconKey: "globe" },
    { name: "TypeScript", iconKey: "code" },
    { name: "Shopify API", iconKey: "database" },
    { name: "Tailwind v4", iconKey: "layers" },
    { name: "GitHub Packages", iconKey: "file-json" },
  ],

  links: {
    live: "https://silvestra.es",
    repo: "https://github.com/christiancastillejo/silvestra"
  },
  storySteps: [
    {
      id: 1,
      title: "The Visual System",
      subtitle: "Tokenizing the Brand",
      description: "Before writing code, I systematized Silvestra's identity in Figma. I defined a strict set of tokens for typography (Acorn & Geist), spacing, and an earthy color palette. This isn't just 'drawing'; it's defining the physics of the interface so development becomes purely execution.",
      visualType: "image",
      visualContent: "/images/projects/silvestra/figma-tokens.jpg",
    },
    {
      id: 2,
      title: "The Translation",
      subtitle: "Figma to CSS Variables",
      description: "I mapped the Figma tokens directly to CSS variables using Tailwind v4's new engine. Instead of magic numbers, I use semantic variables. This creates a single source of truth: if I update '--p-gold-500' in the root, the entire 'Accent' system updates automatically across the app.",
      visualType: "code",
      codeLanguage: "css",
      // Tu código real de global.css, resumido para impacto visual
      codeSnippet: `:root {
  /* Primitives */
  --p-gold-500:  #B68045;
  --p-sage-500:  #84968B;
  --p-black-800: #1D1D1F;
  --p-white-000: #FFFFFF;
}

@theme {
  /* Semantic Mapping */
  --font-display: var(--font-playfair);
  --font-sans: var(--font-md-sans);

  --color-primary: var(--p-gold-500); 
  --color-accent:  var(--p-sage-500);
  --color-foreground: var(--p-black-800);
  --color-background: var(--p-white-000);
  }`
    },
    {
      id: 3,
      title: "The Architecture",
      subtitle: "Decoupled UI Logic",
      description: "I didn't want the UI to be trapped inside the Shopify project. I built the design system in a separate repository using Radix UI and exported it as a private package. This separation of concerns ensures that the 'Atomic Interactions' are pure, testable, and reusable, unburdened by the complex business logic of the e-commerce store.",
      visualType: "code",
      codeLanguage: "typescript",
      codeSnippet: `// Imported from my external Design System
import { Button, Card } from "@christian/ui";

// The store logic simply consumes the UI
export function AddToCart({ product }) {
  return (
    <Card variant="glass">
      <Button 
        variant="primary" 
        onClick={() => add(product.id)}
      >
        Add to Cart
      </Button>
    </Card>
  );
}`
    }
  ],
  architecture: {
    eyebrow: "System Architecture",
    title: "Type-Safe",
    spanTitle: "Data Pipeline",
    description: "Bridging the gap between Shopify's flexible API and a rigid TypeScript frontend. I implemented GraphQL Codegen to ensure that if the API changes, the build fails before production, enforcing strict contract adherence across the stack.",
    diagramSteps: [
      {
        title: "Headless CMS",
        subtitle: "Shopify API",
        icon: "Database",
        desc: "Source of truth for product data & checkout logic via Storefront API."
      },
      {
        title: "GraphQL Layer",
        subtitle: "Typed Queries",
        icon: "FileJson",
        desc: "Precise data fetching preventing over-fetching and reducing payload size."
      },
      {
        title: "CodeGen Engine",
        subtitle: "Type Safety Guard",
        icon: "ShieldCheck",
        desc: "Auto-generated TypeScript definitions tailored to the schema."
      },
      {
        title: "Server Components",
        subtitle: "Next.js 15 RSC",
        icon: "Layers",
        desc: "Hydrated interactive islands served from the Edge."
      }
    ],
    codeSnippet: {
      fileName: "codegen.ts",
      language: "typescript",
      code: `import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // 1. Live Schema Introspection
  schema: {
    [\`https://\${process.env.SHOPIFY_STORE_URL}/api/2025-07/graphql.json\`]: {
      headers: {
        "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_TOKEN!,
        "Content-Type": "application/json",
      },
    },
  },
  // 2. Watch for queries in React components
  documents: ["src/**/*.{ts,tsx}"],
  
  // 3. Generate strictly typed outputs
  generates: {
    "src/gql/": { preset: "client" },
  },
};

export default config;`
    },
  },
  componentLab: {
    eyebrow: "Design System Lab",
    title: "Atomic",
    spanTitle: "Interactions.",
    description: "A living component playground to test usability, feedback states, and aesthetic consistency in isolation."
  },
  standardsHeader: {
    eyebrow: "Engineering Foundations",
    title: "The technical",
    subtitle: "pillars I build on.",
    description: "I’m naturally curious, but I’ve learned that innovation needs a solid floor. For Silvestra, I established these core principles not as constraints, but as the stable ground that allows the design to truly shine without breaking."
  },
  standards: [
    {
      title: "Real-world Accessibility",
      icon: "Eye",
      description: "For a real store, accessibility is just good business. I used Radix UI to ensure that anyone, regardless of how they navigate, can buy a terrarium without friction. It's about empathy through code.",
      highlight: "WCAG 2.1 Compliant"
    },
    {
      title: "The 100 Score Goal",
      icon: "Zap",
      description: "In e-commerce, speed is revenue. I obsessed over every millisecond, using Next.js 15's architecture to make sure the store feels instant, even on slow mobile connections.",
      highlight: "Lighthouse Performance"
    },
    {
      title: "Organic Physics",
      icon: "Wind",
      description: "Static feels cheap. I used Framer Motion to inject real physics—damping and stiffness—into the UI. This creates tactile, 'expensive' interactions that feel organic, strictly maintaining 60fps.",
      highlight: "Framer Motion Powered"
    },
    {
      title: "Type-Safe Commerce",
      icon: "ShieldCheck",
      description: "I don't like surprises in production. By integrating GraphQL Codegen, I made sure that every product price and description is strictly typed from the Shopify schema to the UI.",
      highlight: "Zero Runtime Errors"
    }
  ],
  nextProjectSlug: "kashmir-shaiva-institute",

  metrics: [
    { label: "Core Web Vitals", value: "Passed", description: "Real production data." },
    { label: "Lighthouse", value: "99", description: "Performance." }
  ],

  lessons: [
    {
      title: "CSS as an API",
      content: "I stopped writing styles and started consuming a system. Treating Tailwind not just as utility classes, but as a strict API for my design tokens, removed all guesswork. It turned the subjective task of 'making it look good' into an objective engineering process."
    },
    {
      title: "AI Orchestration",
      content: "I treat AI not as a replacement, but as a high-speed engine that needs a steering wheel. I use granular, highly supervised prompts to guide Cursor through micro-iterations. It allows me to skip the boilerplate and focus purely on architectural decisions, maintaining total control over the code quality."
    }
  ]
}