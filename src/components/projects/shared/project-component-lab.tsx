"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Settings2, Zap } from "lucide-react"
import { Button } from "@/components/projects/demos/silvestra/button" // IMPORTAMOS TU BOTÓN REAL
import { cn } from "@/lib/utils"

export const ProjectComponentLab = () => {
    // 1. Sincronizamos estados con las variantes reales de tu button.tsx
    const [variant, setVariant] = useState<"primary" | "secondary" | "ghost">("primary")
    const [isLoading, setIsLoading] = useState(false)
    const [size, setSize] = useState<"default" | "sm" | "lg">("default")

    return (
        <section className="w-full max-w-[1200px] mx-auto px-6 md:px-8 py-24">
            <div className="mb-12 text-center">
                <span className="font-mono text-xs text-accent font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    Design System Internals
                </span>
                <h3 className="mt-4 font-display text-3xl md:text-4xl font-bold text-foreground">
                    Interact with the Atoms
                </h3>
                <p className="mt-4 text-foreground/70 max-w-xl mx-auto text-lg leading-relaxed">
                    Testing the production-ready <code className="text-accent font-bold bg-accent/5 px-1.5 py-0.5 rounded">Button</code> component.
                </p>
            </div>

            <div className="grid md:grid-cols-12 gap-8 bg-white/60 backdrop-blur-xl rounded-[2rem] border border-border shadow-sm overflow-hidden">

                {/* Sidebar - Knobs (Controles del Sistema) */}
                <div className="md:col-span-4 bg-white/50 p-8 border-r border-border flex flex-col gap-8">
                    <div className="flex items-center gap-2 text-foreground font-bold pb-4 border-b border-border">
                        <Settings2 size={18} className="text-accent" />
                        <span>Knobs</span>
                    </div>

                    {/* Variant Selector */}
                    <div className="space-y-3">
                        <label className="text-xs font-mono uppercase text-foreground/50 font-bold">Variant</label>
                        <div className="flex flex-wrap gap-2">
                            {["primary", "secondary", "ghost"].map((v) => (
                                <button
                                    key={v}
                                    onClick={() => setVariant(v as any)}
                                    className={cn(
                                        "px-3 py-1.5 text-xs font-medium rounded-md border transition-all capitalize",
                                        variant === v
                                            ? "bg-white border-accent text-accent shadow-sm"
                                            : "bg-transparent border-border text-foreground/60 hover:border-foreground/20"
                                    )}
                                >
                                    {v}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Loading State Toggle */}
                    <div className="space-y-3">
                        <label className="text-xs font-mono uppercase text-foreground/50 font-bold">State</label>
                        <div className="flex gap-2">
                            {/* Opción 1: Idle */}
                            <button
                                onClick={() => setIsLoading(false)}
                                className={cn(
                                    "px-3 py-1.5 text-xs font-medium rounded-md border transition-all capitalize",
                                    !isLoading
                                        ? "bg-white border-accent text-accent shadow-sm"
                                        : "bg-transparent border-border text-foreground/60 hover:border-foreground/20"
                                )}
                            >
                                Idle
                            </button>

                            {/* Opción 2: Loading */}
                            <button
                                onClick={() => setIsLoading(true)}
                                className={cn(
                                    "px-3 py-1.5 text-xs font-medium rounded-md border transition-all capitalize",
                                    isLoading
                                        ? "bg-white border-accent text-accent shadow-sm"
                                        : "bg-transparent border-border text-foreground/60 hover:border-foreground/20"
                                )}
                            >
                                Loading
                            </button>
                        </div>
                    </div>
                </div>

                {/* Preview Canvas - Con espaciado corregido */}
                <div className="md:col-span-8 bg-white/30 p-12 flex flex-col items-center justify-between relative min-h-[500px]">
                    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

                    <div className="flex-1 flex items-center justify-center w-full py-10">
                        <motion.div layout>
                            <Button
                                variant={variant}
                                size={size}
                                isLoading={isLoading}
                                fullWidth={false}
                                className="min-w-[180px]"
                            >
                                Click me
                            </Button>
                        </motion.div>
                    </div>

                    {/* Bloque de Código - Colores Dracula de alta legibilidad */}
                    <div className="w-full bg-[#0D0D0D] rounded-xl p-5 font-mono text-[13px] border border-white/10 shadow-2xl relative z-10">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                            </div>
                            <span className="text-white/20 text-[10px] uppercase tracking-widest">TSX Snippet</span>
                        </div>

                        <div className="flex flex-col gap-1">
                            <p className="text-gray-500">{'// Actual Implementation'}</p>
                            <p className="text-[#BD93F9]">
                                <span className="text-[#FF79C6]">&lt;</span>Button
                            </p>
                            <p className="pl-4 text-[#F1FA8C]">
                                variant<span className="text-white">=</span><span className="text-[#FFB86C]">"{variant}"</span>
                            </p>
                            <p className="pl-4 text-[#F1FA8C]">
                                isLoading<span className="text-white">=</span><span className="text-[#FFB86C]">{isLoading ? '{true}' : '{false}'}</span>
                            </p>
                            <p className="text-[#BD93F9]">
                                <span className="text-[#FF79C6]">&gt;</span>
                                <span className="text-white"> Click me </span>
                                <span className="text-[#FF79C6]">&lt;/</span>Button<span className="text-[#FF79C6]">&gt;</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}