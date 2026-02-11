import { StaticImageData } from "next/image";
export type TechItem = {
    name: string;
    iconKey: string;
};
export type StoryStep = {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    visualType: "image" | "code";
    visualContent?: string | StaticImageData;
    codeLanguage?: string;
    codeSnippet?: string;
    image?: string | StaticImageData;
};
export type Standard = {
    title: string;
    icon: string;
    description: string;
    highlight: string;
};
export type ProjectCaseStudy = {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    homeVideo: string;
    caseVideo: string;
    tagline: string;
    techStack: TechItem[];
    links: {
        live: string;
        repo: string;
    };
    storySteps: StoryStep[];
    architecture: {
        eyebrow: string;
        title: string;
        spanTitle: string;
        description: string;
        diagramSteps: {
            title: string;
            subtitle: string;
            icon: string;
            desc: string;
        }[];
        codeSnippet: {
            fileName: string;
            language: string;
            code: string;
            description: string;
        };
    };
    componentLab: {
        eyebrow: string;
        title: string;
        spanTitle: string;
        description: string;
    };
    standardsHeader: {
        eyebrow: string;
        title: string;
        subtitle: string;
        description: string;
    };
    standards: Standard[];
    nextProjectSlug?: string;
    metrics?: {
        label: string;
        value: string;
        description: string;
    }[];
    lessons?: {
        title: string;
        content: string;
    }[];
};
