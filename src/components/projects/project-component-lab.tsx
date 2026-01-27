"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Check, RefreshCcw, Settings2 } from "lucide-react"

export const ProjectComponentLab = () => {
    // Simulación de estado de un Design System
    const [variant, setVariant] = useState<"primary" | "secondary" | "ghost">("primary")
    const [state, setState] = useState<"idle" | "loading" | "success">("idle")
    const [size, setSize] = useState<"sm" | "md" | "lg">("md")

    return (
        <section className="w-full max-w-[1200px] mx-auto px-6 md:px-8 py-24">
            <div className="mb-12 text-center">
                <span className="font-mono text-xs text-orange-500 font-bold uppercase tracking-widest">
                    Design System Internals
                </span>
                <h3 className="mt-4 font-display text-3xl md:text-4xl font-bold text-slate-900">
                    Interact with the Atoms
                </h3>
                <p className="mt-4 text-slate-500 max-w-xl mx-auto">
                    We built a component API that is strictly typed and safeguards against inconsistent UI states. Try the interactive demo below.
                </p>
            </div>

            <div className="grid md:grid-cols-12 gap-8 bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">

                {/* 1. CONTROLS (Sidebar) */}
                <div className="md:col-span-4 bg-slate-50 p-8 border-r border-slate-200 flex flex-col gap-8">
                    <div className="flex items-center gap-2 text-slate-900 font-bold pb-4 border-b border-slate-200">
                        <Settings2 size={18} />
                        <span>Knobs</span>
                    </div>

                    {/* Variant Control */}
                    <div className="space-y-3">
                        <label className="text-xs font-mono uppercase text-slate-400 font-bold">Variant</label>
                        <div className="flex gap-2">
                            {["primary", "secondary", "ghost"].map((v) => (
                                <button
                                    key={v}
                                    onClick={() => setVariant(v as any)}
                                    className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-all capitalize
                                    ${variant === v ? "bg-white border-orange-500 text-orange-600 shadow-sm" : "bg-transparent border-slate-200 text-slate-500 hover:border-slate-300"}`}
                                >
                                    {v}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* State Control */}
                    <div className="space-y-3">
                        <label className="text-xs font-mono uppercase text-slate-400 font-bold">State</label>
                        <div className="flex gap-2">
                            {["idle", "loading", "success"].map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setState(s as any)}
                                    className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-all capitalize
                                    ${state === s ? "bg-white border-orange-500 text-orange-600 shadow-sm" : "bg-transparent border-slate-200 text-slate-500 hover:border-slate-300"}`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 2. PREVIEW (Canvas) */}
                <div className="md:col-span-8 bg-[url('/grid-pattern.svg')] bg-center p-12 flex items-center justify-center relative min-h-[400px]">
                    <div className="absolute inset-0 bg-slate-50/50 pointer-events-none" />

                    {/* El Componente Simulado */}
                    <motion.button
                        layout
                        className={`
                            relative overflow-hidden flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300
                            ${size === 'md' ? 'px-6 py-3 text-base' : 'px-4 py-2 text-sm'}
                            ${variant === 'primary' ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800' : ''}
                            ${variant === 'secondary' ? 'bg-white text-slate-900 border border-slate-200 shadow-sm hover:border-slate-300' : ''}
                            ${variant === 'ghost' ? 'bg-transparent text-slate-600 hover:bg-slate-100' : ''}
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

                    {/* Code Preview Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur rounded-lg p-4 font-mono text-xs text-slate-300">
                        <p>{`<Button`}</p>
                        <p className="pl-4 text-orange-300">variant="{variant}"</p>
                        <p className="pl-4 text-orange-300">state="{state}"</p>
                        <p>{`> Click me </Button>`}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}