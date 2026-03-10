
import { ProjectComponentLabSelect } from "@/components/projects/shared/project-component-lab-select";
import { ProjectComponentLabButton } from "@/components/projects/shared/project-component-lab-button";
import { ProjectComponentLabCard } from "@/components/projects/shared/project-component-lab-card";
import { ProjectCaseStudy } from "@/types/project";

export const ProjectComponentLab = ({ project }: {
    project: ProjectCaseStudy;
}) => {
    if (project.slug === "silvestra") {
        return <ProjectComponentLabButton project={project} />;
    }

    if (project.slug === "nectar-ui") {
        return <ProjectComponentLabCard project={project} />;
    }

    return <ProjectComponentLabSelect project={project} />;
};
