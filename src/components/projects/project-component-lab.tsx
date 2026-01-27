"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Check, RefreshCcw, Settings2 } from "lucide-react"

export const ProjectComponentLab = () => {
    const [variant, setVariant] = useState<"primary" | "secondary" | "ghost">("primary")
    const [state, setState] = useState<"idle" | "loading" | "success">("idle")
    const [size, setSize] = useState<"sm" | "md" | "lg">("md")

    return (
        <section className="w-full max-w-[1200px] mx-auto px-6 md:px-8 py-24">
            <div className="mb-12 text-center">
                <span className="font-mono text-xs text-primary font-bold uppercase tracking-widest">
                    Design System Internals
                </span>
                <h3 className="mt-4 font-display text-3xl md:text-4xl font-bold text-accent">
                    Interact with the Atoms
                </h3>
                <p className="mt-4 text-foreground/70 max-w-xl mx-auto">
                    We built a component API that is strictly typed. Try the interactive demo below.
                </p>
            </div>

            <div className="grid md:grid-cols-12 gap-8 bg-white/60 backdrop-blur-xl rounded-[2rem] border border-white/60 shadow-lg overflow-hidden">

                {/* Sidebar */}
                <div className="md:col-span-4 bg-white/50 p-8 border-r border-border flex flex-col gap-8">
                    <div className="flex items-center gap-2 text-foreground font-bold pb-4 border-b border-border">
                        <Settings2 size={18} />
                        <span>Knobs</span>
                    </div>

                    <div className="space-y-3">
                        <label className="text-xs font-mono uppercase text-foreground/50 font-bold">Variant</label>
                        <div className="flex gap-2">
                            {["primary", "secondary", "ghost"].map((v) => (
                                <button
                                    key={v}
                                    onClick={() => setVariant(v as any)}
                                    // CORRECCIÓN: Estados activos usan border-primary y text-primary
                                    className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-all capitalize
                                    ${variant === v ? "bg-white border-primary text-primary shadow-sm" : "bg-transparent border-border text-foreground/60 hover:border-foreground/20"}`}
                                >
                                    {v}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="text-xs font-mono uppercase text-foreground/50 font-bold">State</label>
                        <div className="flex gap-2">
                            {["idle", "loading", "success"].map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setState(s as any)}
                                    className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-all capitalize
                                    ${state === s ? "bg-white border-primary text-primary shadow-sm" : "bg-transparent border-border text-foreground/60 hover:border-foreground/20"}`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Preview Canvas */}
                <div className="md:col-span-8 bg-white/30 p-12 flex items-center justify-center relative min-h-[400px]">
                    {/* Fondo de patrón sutil */}
                    <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

                    <motion.button
                        layout
                        // CORRECCIÓN: Botones usan var(--primary)
                        className={`
                            relative overflow-hidden flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300
                            ${size === 'md' ? 'px-6 py-3 text-base' : 'px-4 py-2 text-sm'}
                            ${variant === 'primary' ? 'bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90' : ''}
                            ${variant === 'secondary' ? 'bg-white text-accent border border-border shadow-sm hover:border-primary/30' : ''}
                            ${variant === 'ghost' ? 'bg-transparent text-foreground/80 hover:bg-black/5' : ''}
                        `}
                    >
                        {state === "loading" && (
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            >
                                <RefreshCcw size={16} />
                            </motion.div>
                        )}
                        {state === "success" && <Check size={16} />}
                        <span>
                            {state === "loading" ? "Processing..." : state === "success" ? "Completed" : "Interactive Button"}
                        </span>
                    </motion.button>

                    <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur rounded-lg p-4 font-mono text-xs text-white/80">
                        <p>{`<Button`}</p>
                        <p className="pl-4 text-primary">variant="{variant}"</p>
                        <p className="pl-4 text-primary">state="{state}"</p>
                        <p>{`> Click me </Button>`}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}