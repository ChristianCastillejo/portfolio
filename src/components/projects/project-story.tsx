"use client"
import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { StoryStep } from "@/types/project"
import { CodeWindow } from "@/components/projects/code-window"
import Image from "next/image"

export const ProjectStory = ({ steps }: { steps: StoryStep[] }) => {
    const [activeStep, setActiveStep] = useState(1)

    return (
        <section className="relative w-full max-w-[1200px] mx-auto px-6 md:px-8 py-24">
            <div className="flex flex-col md:flex-row gap-12 md:gap-24">

                {/* --- LEFT COLUMN (STICKY VISUALS) --- */}
                <div className="hidden md:block w-1/2 relative">
                    <div className="sticky top-24 h-[calc(100vh-12rem)] flex items-center justify-center">
                        <div className="w-full h-full relative">
                            {steps.map((step) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                    animate={{
                                        opacity: activeStep === step.id ? 1 : 0,
                                        y: activeStep === step.id ? 0 : 20,
                                        scale: activeStep === step.id ? 1 : 0.95,
                                        zIndex: activeStep === step.id ? 10 : 0
                                    }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    {step.visualType === 'code' ? (
                                        <CodeWindow
                                            code={step.codeSnippet!}
                                            lang={step.codeLanguage!}
                                            title={`step-${step.id}.${step.codeLanguage}`}
                                        />
                                    ) : (
                                        <div className="relative w-full aspect-square bg-white rounded-[2rem] border border-border shadow-sm overflow-hidden flex items-center justify-center">
                                            {step.visualContent ? (
                                                <Image
                                                    src={step.visualContent}
                                                    alt={step.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <div className="text-foreground/30 font-mono text-sm">
                                                    Visual: {step.title}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- RIGHT COLUMN (NARRATIVE) --- */}
                <div className="w-full md:w-1/2 flex flex-col gap-[50vh] pb-[20vh] pt-[10vh]">
                    {steps.map((step) => (
                        <StepContent key={step.id} step={step} onActivate={setActiveStep} />
                    ))}
                </div>

            </div>
        </section>
    )
}

const StepContent = ({ step, onActivate }: { step: StoryStep, onActivate: (id: number) => void }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" })

    useEffect(() => {
        if (isInView) onActivate(step.id)
    }, [isInView, step.id, onActivate])

    return (
        <div ref={ref} className="flex flex-col justify-center min-h-[50vh]">
            {/* 1. NÚMERO: Mantenemos el ACENTO VERDE para identidad, pero pequeño */}
            <span className="font-mono text-accent text-sm font-bold mb-4 tracking-widest flex items-center gap-2">
                <span className="w-8 h-[1px] bg-accent/40"></span> {/* Línea decorativa sutil */}
                0{step.id}
            </span>

            {/* 2. TÍTULO: CAMBIO A NEGRO (Foreground). Da seriedad y legibilidad. */}
            <h3 className="font-display text-3xl md:text-4xl font-bold !text-foreground mb-4 tracking-tight">
                {step.title}
            </h3>

            {/* 3. SUBTÍTULO: GRIS TÉCNICO (Foreground/60). Diferencia clara de jerarquía. */}
            <h4 className="font-sans text-lg font-medium !text-foreground/60 mb-6 font-mono uppercase tracking-wide">
                {step.subtitle}
            </h4>

            {/* 4. TEXTO: Cuerpo de texto estándar */}
            <p className="font-sans text-lg text-foreground/80 leading-relaxed text-pretty">
                {step.description}
            </p>

            <div className="md:hidden mt-8">
                {step.visualType === 'code' ? (
                    <CodeWindow code={step.codeSnippet!} lang={step.codeLanguage!} title="snippet" />
                ) : (
                    <div className="relative w-full aspect-square bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                        {step.visualContent && (
                            <Image
                                src={step.visualContent}
                                alt={step.title}
                                fill
                                className="object-cover"
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}