"use client"
import { motion } from "framer-motion"
import { Database, ArrowRight, FileJson, Layers, ShieldCheck, Server } from "lucide-react"
import { CodeWindow } from "@/components/projects/shared/code-window"

// Datos limpios y semánticos. Eliminamos los colores hardcodeados.
const FLOW_STEPS = [
    {
        title: "Headless CMS",
        subtitle: "Shopify API",
        icon: Database,
        desc: "Raw product data & checkout logic via Storefront API."
    },
    {
        title: "GraphQL Layer",
        subtitle: "Typed Queries",
        icon: FileJson,
        desc: "Precise fetching preventing over-fetching."
    },
    {
        title: "CodeGen Engine",
        subtitle: "Type Safety Guard",
        icon: ShieldCheck,
        desc: "Auto-generated TypeScript definitions from schema."
    },
    {
        title: "Server Components",
        subtitle: "Next.js 15 RSC",
        icon: Layers,
        desc: "Hydrated interactive islands on the Edge."
    }
]

// Snippet real para mostrar autoridad técnica
const CODEGEN_SNIPPET = `import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://shopify.dev/storefront-api',
  documents: ['src/lib/shopify/**/*.ts'],
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: []
    }
  }
};

export default config;`

export const ProjectArchitecture = () => {
    return (
        <section className="w-full border-t border-border/40 relative overflow-hidden py-32 md:py-48">

            {/* FONDO FULL-WIDTH: Ahora "inset-0" cubre todo el ancho de la pantalla */}
            <div className="absolute inset-0 bg-foreground/[0.02] -z-10" />

            {/* 2. CONTENEDOR INTERNO: Aquí aplicamos la restricción de ancho para el contenido */}
            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* COLUMNA IZQUIERDA: Contexto y Diagrama */}
                    <div>
                        <div className="mb-16">
                            <span className="font-mono text-xs text-accent font-bold uppercase tracking-widest flex items-center gap-2 mb-6">
                                <Layers size={14} />
                                System Architecture
                            </span>
                            <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                                Type-Safe <br /> <span className="text-foreground/40">Data Pipeline.</span>
                            </h3>
                            <p className="text-foreground/70 text-lg leading-relaxed text-pretty max-w-xl">
                                Bridging the gap between Shopify's flexible API and a rigid TypeScript frontend. I implemented <strong className="text-foreground font-medium">GraphQL Codegen</strong> to ensure that if the API changes, the build fails before production.
                            </p>
                        </div>

                        {/* El Diagrama de Flujo (Vertical y Orgánico) */}
                        <div className="relative flex flex-col gap-6">
                            {/* Línea conectora sutil (Vertical) */}
                            <div className="absolute left-8 top-8 bottom-8 w-px bg-border md:left-8" />

                            {FLOW_STEPS.map((step, idx) => (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15 }}
                                    // Tarjeta estilo "About": Cristal esmerilado, bordes suaves, sombra difusa
                                    className="relative bg-white/60 backdrop-blur-md border border-white/60 p-6 rounded-[2rem] shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 flex items-start gap-6 group z-10"
                                >
                                    {/* Icono */}
                                    <div className="w-16 h-16 rounded-2xl bg-white border border-border flex items-center justify-center shrink-0 group-hover:border-accent/30 transition-colors shadow-inner">
                                        <step.icon size={24} className="text-foreground/80 group-hover:text-accent transition-colors" />
                                    </div>

                                    {/* Texto */}
                                    <div>
                                        <h4 className="font-bold text-lg text-foreground mb-1">{step.title}</h4>
                                        <span className="text-xs font-mono text-accent uppercase tracking-wider block mb-2 font-bold opacity-80">
                                            {step.subtitle}
                                        </span>
                                        <p className="text-sm text-foreground/70 leading-relaxed font-medium">
                                            {step.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>


                    {/* COLUMNA DERECHA: La Evidencia (CodeWindow Gigante) */}
                    <div className="relative lg:h-full flex items-center">
                        {/* Elemento decorativo detrás del código */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent rounded-[3rem] blur-3xl -z-10" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="w-full"
                        >
                            {/* Header flotante sobre el código */}
                            <div className="mb-6 flex items-center justify-between px-2">
                                <span className="font-mono text-xs text-foreground/40 uppercase tracking-widest">
                                    Configuration
                                </span>
                                <span className="font-mono text-xs text-foreground/40 lowercase">
                                    codegen.ts
                                </span>
                            </div>

                            {/* Tu componente CodeWindow real, limpio y sin hacks */}
                            <div className="shadow-2xl shadow-accent/5 rounded-[1.5rem]">
                                <CodeWindow
                                    code={CODEGEN_SNIPPET}
                                    lang="typescript"
                                    title="codegen.config.ts"
                                />
                            </div>

                            {/* Nota al pie técnica */}
                            <div className="mt-6 flex items-start gap-3 opacity-60 px-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 animate-pulse" />
                                <p className="text-xs font-mono text-foreground leading-relaxed">
                                    This config automatically scans <span className="text-accent">src/lib/shopify</span> for GraphQL queries and generates TypeScript interfaces in real-time.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}