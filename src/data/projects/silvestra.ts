import { ProjectCaseStudy } from "@/types/project"
import silvestraStructureImage from "@/components/projects/demos/silvestra/silvestra-structure.webp"

export const SILVESTRA: ProjectCaseStudy = {
  slug: "silvestra",
  title: "Silvestra",
  // WWP: No vendemos "código", vendemos el resultado (velocidad y confianza).
  // Personalidad: Directo y entusiasta.
  tagline: "Making Shopify feel instant. My experiment with Next.js 15 and the Edge.",

  techStack: [
    { name: "Next.js 15", iconKey: "globe" },
    { name: "TypeScript", iconKey: "code" },
    { name: "Shopify API", iconKey: "database" },
    { name: "Tailwind v4", iconKey: "layers" },
    { name: "GraphQL Codegen", iconKey: "file-json" },
  ],

  links: {
    live: "https://silvestra.es",
    repo: "https://github.com/christiancastillejo/silvestra"
  },

  storySteps: [
    {
      id: 1,
      title: "The Backbone",
      subtitle: "Why Headless?",
      // Personalidad: Curioso y analítico. Explicas el POR QUÉ, no solo el QUÉ.
      description: "Honestly, the default Shopify themes felt a bit sluggish for what I wanted. I was curious to see how fast we could push the navigation if we decoupled the frontend. I chose Next.js 15 to fetch data directly from the Storefront API. It wasn't just about speed; it was about having total control over the rendering logic.",
      visualType: "code",
      codeLanguage: "typescript",
      // Mostramos el Codegen porque demuestra que te importa la seguridad, no solo que funcione.
      codeSnippet: `// codegen.ts
        const config: CodegenConfig = {
          schema: 'https://shopify.dev/storefront-api',
          documents: ['src/lib/shopify/**/*.ts'],
          generates: {
            './src/gql/': {
              preset: 'client',
              plugins: []
            }
          }
        };`
    },
    {
      id: 2,
      title: "The Tricky Part",
      subtitle: "Solving i18n & Caching",
      // Personalidad: Reflexivo. Admites que fue difícil (vulnerabilidad amable) y cómo lo solucionaste.
      description: "This was the real puzzle. How do you serve different languages without breaking the static cache? I spent some time analyzing middleware strategies. The solution I built ('src/middleware.ts') detects the locale and rewrites the URL under the hood. It keeps the product pages static and snappy, but the user feels right at home in their language.",
      visualType: "image",
      visualContent: silvestraStructureImage, codeLanguage: "typescript",
      codeSnippet: `// src/middleware.ts
        export default async function middleware(request: NextRequest) {
          // 1. Detect locale (en/es)
          const handleI18nRouting = createIntlMiddleware(routing);
          const response = handleI18nRouting(request);
          
          // 2. Keep the cache happy
          response.headers.set('x-middleware-cache', 'no-cache');
          return response;
        }`
    },
    {
      id: 3,
      title: "The Look & Feel",
      subtitle: "My own library on GitHub Packages",
      description: "I didn't want to just copy-paste components into the project folder. I wanted to treat the UI as a serious dependency. So, I built and published my own component library to GitHub Packages. Under the hood, it uses Radix UI primitives to handle the tricky accessibility details (like focus management and keyboard navigation), while I style everything with Tailwind v4. It keeps the main repo clean and feels incredibly professional to use.",
      visualType: "code",
      codeLanguage: "typescript",
      codeSnippet: `// Inside my package: @christiancastillejo/nectar-ui
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva(
  "rounded-full transition-all active:scale-[0.98]", 
  {
    variants: {
      variant: {
        primary: "bg-[#B68045] text-white hover:opacity-90",
        ghost: "text-black hover:bg-[#B68045] hover:text-white"
      }
    }
  }
);`
    }
  ],

  nextProjectSlug: "ecommerce-design-system",

  metrics: [
    { label: "Lighthouse", value: "100", description: "It just flies." },
    { label: "Type Safety", value: "100%", description: "No 'any', no surprises." }
  ],

  lessons: [
    {
      title: "Let the robots write the types",
      content: "I used to write TypeScript interfaces for API responses by hand. Huge mistake. Integrating GraphQL Codegen gave me peace of mind. Now, if Shopify changes the schema, my build breaks immediately. It’s strict, but it saves so much headache later."
    },
    {
      title: "Server Actions just make sense",
      content: "Instead of building a whole API layer just to add an item to the cart, I used Server Actions. It feels much more natural. The logic stays on the server, the client bundle stays small, and I don't have to worry about exposing sensitive logic."
    }
  ]
}