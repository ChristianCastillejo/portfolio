import { notFound } from "next/navigation"
import { ProjectHero } from "@/components/projects/project-hero"
import { ProjectStory } from "@/components/projects/project-story"
import { ProjectFooter } from "@/components/projects/project-footer"
import { getAllProjectSlugs, getProjectBySlug } from "./index"
import { ProjectComponentLab } from "@/components/projects/project-component-lab"
import { ProjectInsight } from "@/components/projects/project-insight"

export async function generateStaticParams() {
    return getAllProjectSlugs()
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = getProjectBySlug(slug)
    if (!project) return {}

    return {
        title: `${project.title} | Christian Castillejo`,
        description: project.tagline,
    }
}

export default async function ProjectCasePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    const project = getProjectBySlug(slug)

    if (!project) {
        notFound()
    }
    return (
        <main className="w-full min-h-screen bg-white text-slate-900 selection:bg-orange-100 selection:text-orange-900">
            <ProjectHero project={project} />
            <ProjectStory steps={project.storySteps} />
            <ProjectComponentLab />
            <ProjectInsight project={project} />
            <ProjectFooter nextProjectSlug={project.nextProjectSlug || ""} />
        </main>
    )
}