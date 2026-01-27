export type TechItem = {
    name: string
    iconKey: string
}

export type StoryStep = {
    id: number
    title: string
    subtitle: string
    description: string
    visualType: "image" | "code"
    visualContent?: string
    codeLanguage?: string
    codeSnippet?: string
}

export type ProjectCaseStudy = {
    slug: string
    title: string
    tagline: string
    techStack: TechItem[]
    links: {
        live: string
        repo: string
    }
    storySteps: StoryStep[]
    nextProjectSlug?: string, metrics?: {
        label: string
        value: string
        description: string
    }[]

    lessons?: {
        title: string
        content: string
    }[]
}
