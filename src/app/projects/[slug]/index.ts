import { SILVESTRA } from "@/data/projects/silvestra";
import { NECTAR_UI } from "@/data/projects/nectar-ui";

export const PROJECTS = [SILVESTRA, NECTAR_UI];
export function getProjectBySlug(slug: string) {
    return PROJECTS.find((p) => p.slug === slug);
}
export function getAllProjectSlugs() {
    return PROJECTS.map((p) => ({ slug: p.slug }));
}
