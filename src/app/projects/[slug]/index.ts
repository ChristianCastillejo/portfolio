import { SILVESTRA } from "@/data/projects/silvestra";
export const PROJECTS = [SILVESTRA];
export function getProjectBySlug(slug: string) {
    return PROJECTS.find((p) => p.slug === slug);
}
export function getAllProjectSlugs() {
    return PROJECTS.map((p) => ({ slug: p.slug }));
}
