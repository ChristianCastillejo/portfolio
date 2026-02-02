"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Github, Globe, ExternalLink } from "lucide-react"
import { ProjectCaseStudy } from "@/types/project"
import { Button } from "@/components/ui/button1" // Asumo que tienes este botón disponible del Hero

export const ProjectFooter = ({ project }: { project: ProjectCaseStudy }) => {
    // Formatear el slug para que se vea bonito (ej: "ecommerce-design-system" -> "Ecommerce Design System")
    const nextProjectName = project.nextProjectSlug
        ?.split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

    return (
        <footer className="w-full border-t border-border/40 relative overflow-hidden py-24 md:py-48">

            {/* Fondo de ruido consistente con el resto de la página */}
            <div className="absolute inset-0 bg-foreground/[0.02] -z-10" />

            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-end">

                    {/* COLUMNA IZQUIERDA: Cierre y Recursos (Warm & Helpful) */}
                    <div className="flex flex-col gap-8">
                        <div className="space-y-4">
                            <span className="font-mono text-xs text-accent font-bold uppercase tracking-widest flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-accent" />
                                Project Resources
                            </span>
                            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                                Ready to dive deeper?
                            </h3>
                            <p className="text-foreground/70 text-lg leading-relaxed max-w-md text-pretty">
                                Since you’ve made it this far, you might want to inspect the actual code or see the live performance metrics yourself.
                            </p>
                        </div>

                        {/* Botones de acción (Recuperados de Silvestra.ts) */}
                        <div className="flex flex-wrap gap-4">
                            <Button href={project.links.live} icon={Globe} variant="primary">
                                Visit Live Site
                            </Button>
                            <Button href={project.links.repo} icon={Github} variant="secondary">
                                Check the Repo
                            </Button>
                        </div>
                    </div>


                    {/* COLUMNA DERECHA: The Wormhole (Next Project) */}
                    <div className="flex flex-col gap-6 md:items-end md:text-right">
                        <span className="font-mono text-xs text-foreground/40 font-bold uppercase tracking-widest">
                            Up Next
                        </span>

                        {project.nextProjectSlug && (
                            <Link
                                href={`/projects/${project.nextProjectSlug}`}
                                className="group relative inline-flex flex-col gap-4 md:items-end"
                            >
                                <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-foreground group-hover:text-accent transition-colors duration-500 leading-[0.9] tracking-tight">
                                    {nextProjectName}
                                </h2>

                                <div className="flex items-center gap-3 text-lg font-medium text-foreground/60 group-hover:text-foreground transition-colors">
                                    <span className="border-b border-transparent group-hover:border-foreground transition-all">
                                        Read Case Study
                                    </span>
                                    <ArrowRight
                                        size={24}
                                        className="transform group-hover:translate-x-2 transition-transform duration-500 ease-spring"
                                    />
                                </div>
                            </Link>
                        )}
                    </div>

                </div>

            </div>
        </footer>
    )
}