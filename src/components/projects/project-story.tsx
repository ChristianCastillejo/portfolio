"use client"
import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { StoryStep } from "@/types/project"
import { CodeWindow } from "@/components/projects/code-window"

export const ProjectStory = ({ steps }: { steps: StoryStep[] }) => {
    const [activeStep, setActiveStep] = useState(1)

    return (
        <section className="relative w-full max-w-[1200px] mx-auto px-6 md:px-8 py-24">
            <div className="flex flex-col md:flex-row gap-12 md:gap-24">

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
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    {step.visualType === 'code' ? (
                                        <CodeWindow code={step.codeSnippet!} lang={step.codeLanguage!} title={`step-${step.id}.${step.codeLanguage}`} />
                                    ) : (
                                        <div className="relative w-full aspect-square bg-white rounded-2xl border border-white/60 shadow-lg overflow-hidden">
                                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-mono">
                                                Image: {step.title}
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

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
            {/* CORRECCIÓN: text-primary para el número */}
            <span className="font-mono text-primary text-sm font-bold mb-4 tracking-widest">
                0{step.id}
            </span>
            {/* CORRECCIÓN: text-accent para el título (Typography System) */}
            <h3 className="font-display text-3xl md:text-4xl font-bold text-accent mb-6 tracking-tight">
                {step.title}
            </h3>
            <h4 className="font-sans text-xl font-medium text-foreground/80 mb-6">
                {step.subtitle}
            </h4>
            <p className="font-sans text-lg text-foreground/70 leading-relaxed text-pretty">
                {step.description}
            </p>

            <div className="md:hidden mt-8">
                {step.visualType === 'code' ? (
                    <CodeWindow code={step.codeSnippet!} lang={step.codeLanguage!} title="snippet" />
                ) : (
                    <div className="w-full aspect-video bg-white rounded-xl border border-gray-200" />
                )}
            </div>
        </div>
    )
}