"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Settings2, TestTube2, Sparkles, Box } from "lucide-react"
import { Button } from "@/components/projects/demos/silvestra/button" // Asumo que este path es correcto
import { cn } from "@/lib/utils"
import { CodeWindow } from "@/components/projects/shared/code-window"

export const ProjectComponentLab = () => {
    // Estado del Playground
    const [variant, setVariant] = useState<"primary" | "secondary" | "ghost">("primary")
    const [isLoading, setIsLoading] = useState(false)
    const [size, setSize] = useState<"default" | "sm" | "lg">("default")

    // Generamos el string de código dinámicamente para el CodeWindow real
    const codeSnippet = `<Button
  variant="${variant}"
  size="${size}"
  isLoading={${isLoading}}
  onClick={() => handleClick()}
>
  Add to Cart
</Button>`

    return (
        <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-48 border-t border-border/40 relative overflow-hidden">

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

                {/* 1. HEADER & CONTROLS (Columna Izquierda - Estrecha) */}
                <div className="lg:col-span-4 flex flex-col gap-12">

                    {/* Editorial Header */}
                    <div>
                        <span className="font-mono text-xs text-accent font-bold uppercase tracking-widest flex items-center gap-2 mb-6">
                            <TestTube2 size={14} />
                            Design System Lab
                        </span>
                        <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                            Atomic <br /> <span className="text-foreground/40">Interactions.</span>
                        </h3>
                        <p className="text-foreground/70 text-lg leading-relaxed text-pretty">
                            A living component playground to test usability, feedback states, and aesthetic consistency in isolation.
                        </p>
                    </div>

                    {/* Control Panel (The Knobs) */}
                    <div className="bg-white/60 backdrop-blur-md border border-white/60 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-sm flex flex-col gap-6 md:gap-8">
                        <div className="flex items-center gap-3 pb-4 border-b border-border/60">
                            <Settings2 size={18} className="text-accent" />
                            <span className="font-display text-lg font-bold text-foreground">Properties</span>
                        </div>

                        {/* Control: Variant */}
                        <div className="space-y-5">
                            <label className="text-xs font-mono uppercase text-foreground/40 font-bold tracking-wider">Variant</label>
                            <div className="flex flex-wrap gap-3 !mt-1 md:!mt-2">
                                {["primary", "secondary", "ghost"].map((v) => (
                                    <button
                                        key={v}
                                        onClick={() => setVariant(v as any)}
                                        className={cn(
                                            "px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 capitalize",
                                            variant === v
                                                ? "bg-foreground text-background border-foreground shadow-md transform scale-105"
                                                : "bg-transparent border-border text-foreground/60 hover:border-foreground/30 hover:bg-white/50"
                                        )}
                                    >
                                        {v}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Control: Size */}
                        <div className="space-y-5">
                            <label className="text-xs font-mono uppercase text-foreground/40 font-bold tracking-wider">Size</label>
                            <div className="flex flex-wrap gap-3 !mt-1 md:!mt-2">
                                {["sm", "default", "lg"].map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => setSize(s as any)}
                                        className={cn(
                                            "px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 capitalize",
                                            size === s
                                                ? "bg-foreground text-background border-foreground shadow-md transform scale-105"
                                                : "bg-transparent border-border text-foreground/60 hover:border-foreground/30 hover:bg-white/50"
                                        )}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Control: State */}
                        <div className="space-y-5">
                            <label className="text-xs font-mono uppercase text-foreground/40 font-bold tracking-wider">State</label>
                            <div className="flex items-center justify-between p-1 !mt-1 md:!mt-2 bg-white/40 rounded-full border border-border/60 relative w-full max-w-[240px]">
                                {/* Fondo deslizante (Opcional, simplificado por ahora con lógica directa) */}
                                <button
                                    onClick={() => setIsLoading(false)}
                                    className={cn(
                                        "w-1/2 py-2 text-sm font-bold rounded-full transition-all duration-300 z-10",
                                        !isLoading ? "bg-foreground shadow-sm text-background" : "text-foreground/50 hover:text-foreground/80"
                                    )}
                                >
                                    Idle
                                </button>
                                <button
                                    onClick={() => setIsLoading(true)}
                                    className={cn(
                                        "w-1/2 py-2 text-sm font-bold rounded-full transition-all duration-300 z-10 flex items-center justify-center gap-2",
                                        isLoading ? "bg-foreground shadow-sm text-background" : "text-foreground/50 hover:text-foreground/80"
                                    )}
                                >
                                    <Sparkles size={12} />
                                    Loading
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. THE STAGE (Columna Derecha - Ancha) */}
                <div className="lg:col-span-8 flex flex-col gap-8 min-w-0">

                    {/* Preview Canvas */}
                    <div className="flex-1 min-h-[300px] md:min-h-[400px] bg-white border border-white/60 rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm relative overflow-hidden flex items-center justify-center">
                        {/* Grid Background */}
                        <div className="absolute inset-0 opacity-[0.4]"
                            style={{
                                backgroundImage: `radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)`,
                                backgroundSize: '24px 24px'
                            }}
                        />

                        {/* El Componente Real: ZOOM FIJO 1.5x (Sin Hover) */}
                        <div className="relative z-10 transform scale-100 md:scale-[1.2]">
                            <div className="p-8">
                                <Button
                                    variant={variant}
                                    size={size}
                                    isLoading={isLoading}
                                    className="shadow-2xl shadow-accent/20"
                                >
                                    Add to Cart
                                </Button>
                            </div>
                        </div>

                        {/* Etiqueta flotante */}
                        <div className="absolute bottom-6 right-8 flex items-center gap-2 opacity-30">
                            <Box size={14} />
                            <span className="font-mono text-[10px] uppercase tracking-widest font-bold">
                                Inspection Mode
                            </span>
                        </div>
                    </div>
                    {/* Live Code Reflection */}
                    <motion.div
                        layout
                        className="w-full"
                    >
                        <CodeWindow
                            title="Button.usage.tsx"
                            lang="tsx"
                            code={codeSnippet}
                            // Usamos el className prop que añadimos antes para ajustes finales si hace falta
                            className="shadow-xl"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    )
}