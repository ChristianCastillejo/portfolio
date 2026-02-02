import { ProjectCaseStudy } from "@/types/project"

export const SILVESTRA: ProjectCaseStudy = {
  slug: "silvestra",
  title: "Silvestra",
  tagline: "Standard Shopify themes were limiting the brand's potential. I stepped in to build a headless experience that actually feels like a high-end artisanal brand.",

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
      title: "The Backbone",
      subtitle: "Moving away from Liquid",
      description: "Silvestra sells premium terrariums, but their old site felt generic. I spent some time analyzing why: Shopify's Liquid themes are great, but they hit a performance ceiling quickly. I decided to go Headless with Next.js 15. It wasn't just for the 'hype'; it was about having the surgical precision needed to make a store feel instant.",
      visualType: "code",
      codeLanguage: "typescript",
      codeSnippet: `// Our type-safe engine
const config: CodegenConfig = {
  schema: 'https://shopify.dev/storefront-api',
  documents: ['src/lib/shopify/**/*.ts'],
  generates: {
    './src/gql/': { preset: 'client' }
  }
};`
    },
    {
      id: 2,
      title: "The Tricky Part",
      subtitle: "Global without the lag",
      description: "i18n is one of those things that looks easy until you try to keep it fast. Since Silvestra has international customers, I couldn't settle for a slow client-side translation. I built a middleware strategy that handles locales at the edge. It was a bit of a puzzle to keep the SEO scores perfect, but the result is a site that feels local in every language.",

      visualType: "code",
      codeLanguage: "bash",
      codeSnippet: `├── codegen.ts            # Pipeline Config
├── src
│   ├── app
│   │   ├── [locale]      # 👈 Dynamic Routing
│   │   │   ├── cart
│   │   └── api
│   ├── components
│   │   └── cart
│   │       └── actions.ts # Server Actions
│   ├── gql                # Generated Types
│   ├── i18n               # 👈 The Logic
│   │   ├── request.ts
│   │   └── routing.ts
│   ├── lib
│   │   └── shopify
│   └── middleware.ts      # 👈 Edge Matcher`
    },
    {
      id: 3,
      title: "The Look & Feel",
      subtitle: "Ownership through Packages",
      description: "I’m a bit obsessive about consistency, so I built a component library from scratch using Radix UI and Tailwind v4, and published it to my own GitHub Packages. It keeps the UI solid, accessible, and completely separate from the business logic. It’s how I make sure the brand looks perfect on every screen.",
      visualType: "code",
      codeLanguage: "typescript",
      codeSnippet: `// Published to @christian/ui
const buttonVariants = cva(
  "rounded-full transition-all active:scale-[0.98]", 
  {
    variants: {
      variant: {
        primary: "bg-[#B68045] text-white hover:opacity-90",
        ghost: "text-black border-border hover:bg-[#B68045]"
      }
    }
  }
);`
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
      fileName: "codegen.config.ts",
      language: "typescript",
      code: `import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://shopify.dev/storefront-api',
  documents: ['src/lib/shopify/**/*.ts'],
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: []
    }
  }
};

export default config;`
    }
  },
  componentLab: {
    eyebrow: "Design System Lab",
    title: "Atomic",
    spanTitle: "Interactions.",
    description: "A living component playground to test usability, feedback states, and aesthetic consistency in isolation."
  },
  standardsHeader: {
    eyebrow: "The Ground Rules",
    title: "My technical",
    subtitle: "non-negotiables.",
    description: "I’m naturally curious and love trying new tools, but I’ve learned that innovation without stability is just noise. For Silvestra, I drew a line in the sand: the code had to be as high-quality as the design. These are the baselines I refused to compromise on."
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
      icon: "Smartphone",
      description: "Artisanal products need a beautiful presentation. I built custom animations that feel organic and high-end, maintaining 60fps to match the brand's premium feel.",
      highlight: "Touch-Optimized"
    },
    {
      title: "Type-Safe Commerce",
      icon: "ShieldCheck",
      description: "I don't like surprises in production. By integrating GraphQL Codegen, I made sure that every product price and description is strictly typed from the Shopify schema to the UI.",
      highlight: "Zero Runtime Errors"
    }
  ],
  nextProjectSlug: "ecommerce-design-system",

  metrics: [
    { label: "Core Web Vitals", value: "Passed", description: "Real production data." },
    { label: "Lighthouse", value: "100", description: "SEO & Performance." }
  ],

  lessons: [
    {
      title: "Trusting the robots",
      content: "I've learned that if a task is repetitive, I should probably automate it. Using GraphQL Codegen changed how I work; it's like having a permanent assistant checking that my data and my UI are always in sync. It gives me a peace of mind that manual typing never could."
    },
    {
      title: "The power of Server Actions",
      content: "For a real store, security isn't optional. Moving the cart logic to Server Actions made the code much more 'clean' and kept the heavy lifting on the server. It’s one of those modern React features that actually solves a real-world business problem."
    }
  ]
}