import { ProjectCaseStudy } from "@/types/project"
import { Figma, Code2, Layers, Globe } from "lucide-react"

export const SILVESTRA: ProjectCaseStudy = {
  slug: "silvestra",
  title: "Silvestra",
  tagline: "Reimagining data visualization with zero-runtime CSS and edge-first architecture.",
  techStack: [
    { name: "Next.js 15", iconKey: "globe" },
    { name: "TypeScript", iconKey: "code" },
    { name: "Tailwind v4", iconKey: "layers" },
    { name: "Figma", iconKey: "figma" },
  ],
  links: {
    live: "https://demo.vercel.app",
    repo: "https://github.com/christian/repo"
  },
  storySteps: [
    {
      id: 1,
      title: "The System",
      subtitle: "Design Tokens & Figma Variables",
      description: "Before writing a single line of code, we established a primitive color system in Figma using variables. This ensures that every hex code used in development maps directly to a design decision, eliminating 'magic numbers'.",
      visualType: "image",
      visualContent: "/images/projects/figma-tokens.webp",
      codeLanguage: "json",
      codeSnippet: `// figma.tokens.json
        {
          "color": {
            "primary": { "value": "#0070f3" },
            "surface": { "value": "#ffffff" },
            "text": { 
              "primary": { "value": "#171717" },
              "secondary": { "value": "#737373" }
            }
          }
        }`
    },
    {
      id: 2,
      title: "The Translation",
      subtitle: "Tailwind v4 Configuration",
      description: "We leveraged Tailwind's new CSS-variables-first approach. Instead of a messy JS config, we mapped the Figma tokens directly to CSS custom properties, allowing for instant theme switching and zero-runtime overhead.",
      visualType: "code",
      codeLanguage: "css",
      codeSnippet: `@theme {
        --color-primary: #0070f3;
        --color-surface: #ffffff;
        
        --text-display: "Geist", sans-serif;
        --text-body: "Inter", sans-serif;
        
        --ease-fluid: cubic-bezier(0.32, 0.72, 0, 1);
      }`
    },
    {
      id: 3,
      title: "The Logic",
      subtitle: "Zod Schema Validation",
      description: "Data integrity is paramount. We used Zod to strictly type the analytics payload at the edge. This guarantees that our frontend components never receive malformed data, preventing runtime crashes before they happen.",
      visualType: "code",
      codeLanguage: "typescript",
      codeSnippet: `const AnalyticsSchema = z.object({
          page_view: z.number().int().nonnegative(),
          visitor_id: z.string().uuid(),
          timestamp: z.date(),
          metadata: z.record(z.string()).optional()
        });

        export type AnalyticsEvent = z.infer<typeof AnalyticsSchema>;`
    }
  ],
  nextProjectSlug: "ecommerce-design-system", metrics: [
    { label: "Lighthouse Score", value: "100", description: "Performance, Accessibility, SEO" },
    { label: "Bundle Size", value: "<45kB", description: "Gzipped initial load" }
  ],
  lessons: [
    {
      title: "The Tailwind v4 Beta Risk",
      content: "Adopting Tailwind v4 in alpha stage meant dealing with unstable undocumented APIs. However, the trade-off paid off by reducing our CSS bundle size by 30% thanks to the new engine, validating the 'zero-runtime' hypothesis."
    },
    {
      title: "Strictness vs. Velocity",
      content: "Implementing Zod schemas for every single API response slowed down initial development. But this 'Schema-First' approach caught over 15 edge-case bugs during the integration phase that would have otherwise crashed the production UI."
    }
  ]
}