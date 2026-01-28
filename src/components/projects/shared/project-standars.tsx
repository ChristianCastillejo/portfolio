"use client"
import { motion } from "framer-motion"
import { ShieldCheck, Zap, Eye, Keyboard, Smartphone, Layers } from "lucide-react"
import { cn } from "@/lib/utils"

const STANDARDS = [
    {
        title: "Accessibility (a11y)",
        icon: Eye,
        score: "AA+",
        description: "Semantic HTML5, ARIA labels for complex interactive components, and full keyboard navigation support via Radix UI primitives.",
        highlight: "WCAG 2.1 AA Compliant"
    },
    {
        title: "Performance",
        icon: Zap,
        score: "100",
        description: "Zero Layout Shift (CLS) on state changes. Static generation (SSG) for content pages and dynamic imports for heavy interactive islands.",
        highlight: "Lighthouse Score"
    },
    {
        title: "Responsive Physics",
        icon: Smartphone,
        score: "Fluid",
        description: "Touch-optimized gestures using Framer Motion. Layouts adapt using a mobile-first approach with fluid typography scales.",
        highlight: "60fps Animations"
    },
    {
        title: "Component Architecture",
        icon: Layers,
        score: "Atomic",
        description: "Built with Compound Component pattern for maximum flexibility. Strictly typed props extending native HTML attributes.",
        highlight: "Type-Safe"
    }
]

export const ProjectStandards = () => {
    return (
        <section className="w-full max-w-[1200px] mx-auto px-6 md:px-8 py-12 md:py-24 border-t border-border/40">
            <div className="grid md:grid-cols-12 gap-12">

                {/* Header Lateral */}
                <div className="md:col-span-4">
                    <span className="font-mono text-xs text-accent font-bold uppercase tracking-widest flex items-center gap-2 mb-4">
                        <ShieldCheck size={14} />
                        Engineering Standards
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Built for Production, <br />
                        <span className="text-foreground/40">Not just Demos.</span>
                    </h3>
                    <p className="text-foreground/70 leading-relaxed text-pretty">
                        A Senior Design Engineer ensures the system works for everyone, everywhere. These are the technical baselines for this project.
                    </p>
                </div>

                {/* Grid de Estandares */}
                <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
                    {STANDARDS.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group p-6 rounded-2xl bg-white/40 border border-border hover:border-accent/30 hover:bg-white/60 transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-background rounded-lg border border-border group-hover:border-accent/20 group-hover:text-accent transition-colors">
                                    <item.icon size={20} />
                                </div>
                                <div className="px-2 py-1 bg-green-500/10 text-green-700 text-[10px] font-mono font-bold uppercase tracking-wider rounded-full border border-green-500/20">
                                    {item.highlight}
                                </div>
                            </div>

                            <h4 className="font-bold text-lg text-foreground mb-2 flex items-center gap-2">
                                {item.title}
                            </h4>
                            <p className="text-sm text-foreground/60 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}