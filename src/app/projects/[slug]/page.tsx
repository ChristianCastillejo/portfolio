import { notFound } from "next/navigation";
import { ProjectHero } from "@/components/projects/shared/project-hero";
import { ProjectStory } from "@/components/projects/shared/project-story";
import { ProjectFooter } from "@/components/projects/shared/project-footer";
import { getAllProjectSlugs, getProjectBySlug } from "./index";
import { ProjectComponentLabButton } from "@/components/projects/shared/project-component-lab-button";
import { ProjectComponentLabCard } from "@/components/projects/shared/project-component-lab-card";
import { ProjectInsight } from "@/components/projects/shared/project-insight";
import { ProjectStandards } from "@/components/projects/shared/project-standars";
import { ProjectArchitecture } from "@/components/projects/shared/project-architecture";
export async function generateStaticParams() {
    return getAllProjectSlugs();
}
export async function generateMetadata({ params }: {
    params: Promise<{
        slug: string;
    }>;
}) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project)
        return {};
    return {
        title: `${project.title} | Christian Castillejo`,
        description: project.tagline,
    };
}
export default async function ProjectCasePage({ params }: {
    params: Promise<{
        slug: string;
    }>;
}) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) {
        notFound();
    }
    return (<main className="w-full min-h-screen bg-background text-foreground selection:bg-primary/20 relative">
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-noise mix-blend-overlay z-0" />

        <div className="relative z-10">
            <ProjectHero project={project} />
            <ProjectStory project={project} />
            <ProjectArchitecture project={project} />
            {project.slug === "silvestra" && <ProjectComponentLabButton project={project} />}
            {project.slug === "nectar-ui" && <ProjectComponentLabCard project={project} />}
            <ProjectStandards project={project} />
            <ProjectInsight project={project} />
            <ProjectFooter project={project} />
        </div>
    </main>);
}
