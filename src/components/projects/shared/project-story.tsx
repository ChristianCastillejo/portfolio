"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { ProjectCaseStudy, StoryStep } from "@/types/project"
import { CodeWindow } from "@/components/projects/shared/code-window"

// Subcomponente para manejar la lógica visual (Imagen vs Código)
const StoryVisual = ({ step }: { step: StoryStep }) => {
    if (step.visualType === "code" && step.codeSnippet) {
        return (
            // CAMBIO: Quitamos "border", "bg-card", "backdrop-blur" y "shadow". 
            // Dejamos que el CodeWindow sea el protagonista.
            // Solo mantenemos el div para espaciado si fuera necesario, o devolvemos directo.
            <div className="w-full">
                <CodeWindow
                    code={step.codeSnippet}
                    lang={step.codeLanguage || 'typescript'}
                    title={step.title.toLowerCase().replace(/\s/g, '-') + '.' + (step.codeLanguage === 'bash' ? 'sh' : 'ts')}
                />
            </div>
        )
    }

    if (step.visualType === "image" && step.visualContent) {
        return (
            // Contenedor orgánico estilo Apple para imágenes/video
            <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-card">
                {/* Si fuera video, aquí iría la etiqueta video como en el Hero */}
                {typeof step.visualContent === 'string' ? (
                    <Image
                        src={step.visualContent}
                        alt={step.title}
                        fill
                        className="object-cover"
                    />
                ) : null}

                {/* Overlay sutil para integración si la imagen es muy clara */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/5 to-transparent pointer-events-none" />
            </div>
        )
    }

    return null
}


export const ProjectStory = ({ project }: { project: ProjectCaseStudy }) => {
    if (!project.storySteps || project.storySteps.length === 0) return null;

    return (
        // Padding masivo (py-32 md:py-48) para que respire de verdad.
        <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-32 md:py-48 bg-background overflow-hidden">

            {/* Header de Sección - Centrado para anclar el flujo */}
            <div className="max-w-4xl mx-auto text-center mb-24 md:mb-40">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-mono text-xs text-accent font-bold uppercase tracking-widest mb-6 block"
                >
                    The Process
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    // Tipografía gigante estilo About/Hero
                    className="text-foreground font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.9]"
                >
                    Engineering narrative.
                </motion.h2>
            </div>


            {/* Loop de Pasos - Flujo Editorial Vertical */}
            <div className="flex flex-col gap-32 md:gap-48">
                {project.storySteps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        {/* 1. La Narrativa (Columna Central) */}
                        <div className="max-w-3xl mx-auto relative z-10 mb-16 md:mb-24">
                            {/* Numeración gigante y sutil */}
                            <span className="absolute -left-4 md:-left-20 -top-12 text-[6rem] md:text-[10rem] font-display font-bold text-foreground/[0.03] select-none leading-none z-0">
                                0{index + 1}
                            </span>

                            {/* Título y Subtítulo */}
                            <div className="relative z-10 mb-8">
                                <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight mb-3">
                                    {step.title}
                                </h3>
                                <p className="font-mono text-sm md:text-base text-accent uppercase tracking-wider font-bold">
                                    {step.subtitle}
                                </p>
                            </div>

                            {/* Cuerpo de texto - Grande y legible (estilo About) */}
                            <div className="prose prose-lg md:prose-xl prose-p:text-foreground/70 prose-p:leading-relaxed prose-p:font-medium prose-p:text-pretty max-w-none">
                                <p>{step.description}</p>
                            </div>
                        </div>

                        {/* 2. La Evidencia Visual (Rompiendo la retícula) */}
                        {/* Se expande más allá del texto (max-w-6xl) para impacto visual */}
                        <div className="relative z-20 max-w-6xl mx-auto md:pl-0">
                            {/* Línea conectora sutil (opcional, para flujo) */}
                            {index !== project.storySteps!.length - 1 && (
                                <div className="absolute left-[50%] -bottom-24 h-24 w-px bg-border/50 hidden md:block"></div>
                            )}
                            <StoryVisual step={step} />
                        </div>

                    </motion.div>
                ))}
            </div>
        </section>
    )
}