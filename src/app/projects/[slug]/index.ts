import { SILVESTRA } from "@/data/projects/silvestra"

const PROJECTS = [SILVESTRA /*, ECOMMERCE_DS */]

export function getProjectBySlug(slug: string) {
    return PROJECTS.find((p) => p.slug === slug)
}

export function getAllProjectSlugs() {
    return PROJECTS.map((p) => ({ slug: p.slug }))
}