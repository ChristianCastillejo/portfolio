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
    // CORRECCIÓN: Usamos bg-background (beige) y texto foreground, más la textura de ruido
    return (
        <main className="w-full min-h-screen bg-background text-foreground selection:bg-primary/20 relative">
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-noise mix-blend-overlay z-0" />

            <div className="relative z-10">
                <ProjectHero project={project} />
                <ProjectStory steps={project.storySteps} />
                <ProjectComponentLab />
                <ProjectInsight project={project} />
                <ProjectFooter nextProjectSlug={project.nextProjectSlug || ""} />
            </div>
        </main>
    )
}