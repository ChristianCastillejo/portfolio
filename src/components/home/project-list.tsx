"use client";
import { PROJECTS } from "@/app/projects/[slug]/index";
import { ProjectCard } from "./project-card";
import { ProjectCaseStudy } from "@/types/project";
export const ProjectList = () => {
    return (<section id="work" className="relative z-10 px-6 md:px-12 pb-32 md:pb-48 max-w-[1400px] mx-auto">
            <div className="flex flex-col gap-16 md:gap-24">
                {PROJECTS.map((project: ProjectCaseStudy, index: number) => (<ProjectCard key={project.slug} project={project} index={index}/>))}
            </div>
        </section>);
};
