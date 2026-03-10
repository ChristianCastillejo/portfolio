import { KSI } from "@/data/projects/ksi";
import { SILVESTRA } from "@/data/projects/silvestra";
import { NECTAR_UI } from "@/data/projects/nectar-ui";

export const PROJECTS = [KSI, SILVESTRA, NECTAR_UI];
export function getProjectBySlug(slug: string) {
    return PROJECTS.find((p) => p.slug === slug);
}
export function getAllProjectSlugs() {
    return PROJECTS.map((p) => ({ slug: p.slug }));
}
