"use client"
import { motion } from "framer-motion"
import { Database, ArrowRight, FileJson, Layers, ShieldCheck, Server } from "lucide-react"

const ARCHITECTURE_STEPS = [
    {
        title: "Shopify Storefront",
        role: "Headless Source",
        icon: Database,
        color: "text-green-500 bg-green-500/10 border-green-500/20",
        desc: "Raw product data & checkout logic via GraphQL API."
    },
    {
        title: "CodeGen Layer",
        role: "Type Safety Guard",
        icon: FileJson,
        color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
        desc: "Auto-generated TypeScript definitions from schema."
    },
    {
        title: "React Server Components",
        role: "Data Fetching",
        icon: Server,
        color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
        desc: "Secure, zero-bundle-size fetching on the edge."
    },
    {
        title: "Client Hydration",
        role: "Interactive UI",
        icon: Layers,
        color: "text-orange-500 bg-orange-500/10 border-orange-500/20",
        desc: "Interactive islands (Cart, Filters) hydrated on demand."
    }
]

const FLOW_STEPS = [
    {
        title: "Headless CMS",
        subtitle: "Shopify Storefront API",
        icon: Database,
        color: "text-green-500 bg-green-500/10 border-green-500/20",
        desc: "Raw product data & checkout logic via GraphQL API."
    },
    {
        title: "GraphQL Layer",
        subtitle: "Typed Queries & Mutations",
        icon: FileJson,
        color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
        desc: "Auto-generated TypeScript definitions from schema."
    },
    {
        title: "Type Generation",
        subtitle: "GraphQL Codegen",
        icon: ShieldCheck,
        color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
        desc: "Secure, zero-bundle-size fetching on the edge."
    },
    {
        title: "Server Components",
        subtitle: "Next.js 15 RSC",
        icon: Layers,
        color: "text-orange-500 bg-orange-500/10 border-orange-500/20",
        desc: "Interactive islands (Cart, Filters) hydrated on demand."
    }
]

export const ProjectArchitecture = () => {
    return (
        <section className="w-full max-w-[1200px] mx-auto px-6 md:px-8 py-24 border-t border-border/40">
            <div className="mb-16">
                <span className="font-mono text-xs text-accent font-bold uppercase tracking-widest flex items-center gap-2 mb-4">
                    <Layers size={14} />
                    System Architecture
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground max-w-2xl">
                    Type-Safe Data Flow
                </h3>
                <p className="mt-4 text-foreground/70 max-w-xl text-lg leading-relaxed">
                    Leveraging <code className="text-accent font-bold bg-accent/5 px-1.5 py-0.5 rounded">GraphQL Codegen</code> to ensure end-to-end type safety between the Shopify API and React Server Components.
                </p>
            </div>

            {/* Diagrama de Flujo */}
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Línea conectora (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-green-500/20 via-blue-500/20 to-foreground/20 -z-10" />

                {FLOW_STEPS.map((step, idx) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className="relative bg-white border border-border p-6 rounded-2xl shadow-sm hover:border-accent/40 transition-colors group"
                    >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 border ${step.color}`}>
                            <step.icon size={20} />
                        </div>


                        <h4 className="font-bold text-lg text-foreground mb-1">{step.title}</h4>
                        <span className="text-xs font-mono text-foreground/50 uppercase tracking-wider block mb-3">
                            {step.subtitle}
                        </span>
                        <p className="text-sm text-foreground/70 leading-relaxed">
                            {step.desc}
                        </p>

                        {/* Flecha conectora (Visual) */}
                        {idx !== FLOW_STEPS.length - 1 && (
                            <div className="hidden md:flex absolute -right-3 top-12 transform -translate-y-1/2 z-10 bg-white border border-border rounded-full p-1 text-foreground/30">
                                <ArrowRight size={14} />
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Snippet de Codegen (Prueba real de SDE) */}
            <div className="mt-12 bg-[#0D0D0D] rounded-xl border border-white/10 p-6 md:p-8 font-mono text-xs md:text-sm overflow-x-auto shadow-2xl">
                <div className="flex gap-2 mb-4 border-b border-white/10 pb-4">
                    <span className="text-white/40">codegen.ts</span>
                </div>
                <pre className="text-gray-400">
                    <span className="text-purple-400">import</span> type &#123; CodegenConfig &#125; <span className="text-purple-400">from</span> <span className="text-green-400">'@graphql-codegen/cli'</span>;<br /><br />
                    <span className="text-purple-400">const</span> config: CodegenConfig = &#123;<br />
                    &nbsp;&nbsp;schema: <span className="text-green-400">'https://shopify.dev/storefront-api'</span>,<br />
                    &nbsp;&nbsp;documents: [<span className="text-green-400">'src/lib/shopify/**/*.ts'</span>],<br />
                    &nbsp;&nbsp;generates: &#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">'./src/gql/'</span>: &#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;preset: <span className="text-green-400">'client'</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;plugins: []<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
                    &nbsp;&nbsp;&#125;<br />
                    &#125;;
                </pre>
            </div>
            {/* Visualización de la estructura de carpetas relevante */}
            <div className="hidden md:block bg-[#0D0D0D] rounded-xl border border-white/10 p-6 font-mono text-xs shadow-2xl">
                <div className="flex gap-2 mb-4 border-b border-white/10 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                    <span className="ml-2 text-white/40">src/lib/shopify/queries</span>
                </div>
                <div className="space-y-2">
                    <p className="text-pink-400">export const <span className="text-blue-400">getProductsQuery</span> = /* GraphQL */ `</p>
                    <p className="pl-4 text-green-400">query getProducts($first: Int!) &#123;</p>
                    <p className="pl-8 text-green-400">products(first: $first) &#123;</p>
                    <p className="pl-12 text-green-400">edges &#123; node &#123; handle title &#125; &#125;</p>
                    <p className="pl-8 text-green-400">&#125;</p>
                    <p className="pl-4 text-green-400">&#125;</p>
                    <p className="text-pink-400">`;</p>
                </div>
            </div>
        </section>
    )
}