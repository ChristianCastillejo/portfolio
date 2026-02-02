export interface HomeProject {
    slug: string
    title: string
    subtitle: string
    description: string
    tags: string[]
    image: string
    video?: string
}

export const PROJECTS: HomeProject[] = [
    {
        slug: "silvestra",
        title: "Silvestra",
        subtitle: "E-commerce Ecosystem",
        description: "A headless Shopify architecture bridging high-end aesthetics with rigid engineering standards.",
        tags: ["Next.js 15", "Shopify Headless", "Design System", "Typescript", "Framer Motion"],
        image: "/images/silvestra-cover.webp",
        video: "/videos/silvestra/hero.webm",
    },
    {
        slug: "chronos",
        title: "Chronos",
        subtitle: "Internal Tooling",
        description: "Reducing operational friction by 40% through a custom React-based dashboard for data visualization.",
        tags: ["React", "D3.js", "TypeScript"],
        image: "/images/chronos-cover.webp",
    }
]