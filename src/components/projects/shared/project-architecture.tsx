"use client";
import { motion } from "framer-motion";
import { Database, ArrowRight, FileJson, Layers, ShieldCheck, LucideIcon } from "lucide-react";
import { CodeWindow } from "@/components/projects/shared/code-window";
import { ProjectCaseStudy } from "@/types/project";
const ARCHITECTURE_ICONS: Record<string, LucideIcon> = {
    Database, FileJson, Layers, ShieldCheck
};
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
];
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

export default config;`;
export const ProjectArchitecture = ({ project }: {
    project: ProjectCaseStudy;
}) => {
    if (!project.architecture)
        return null;
    const { architecture } = project;
    return (<section className="w-full border-t border-border/40 relative overflow-hidden py-24 md:py-48">

            <div className="absolute inset-0 bg-foreground/[0.02] -z-10"/>

            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    <div className="min-w-0">
                        <div className="mb-16">
                            <span className="font-mono text-xs text-accent font-bold uppercase tracking-widest flex items-center gap-2 mb-6">
                                <Layers size={14}/>
                                {architecture.eyebrow}
                            </span>
                            <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                                {architecture.title} <br /> <span className="text-foreground/40">{architecture.spanTitle}</span>
                            </h3>
                            <p className="text-foreground/70 text-lg leading-relaxed text-pretty max-w-xl">
                                {architecture.description}
                            </p>
                        </div>

                        <div className="relative flex flex-col gap-6">

                            <div className="absolute left-8 top-8 bottom-8 w-px bg-border md:left-8"/>

                            {architecture.diagramSteps.map((step, idx) => {
            const Icon = ARCHITECTURE_ICONS[step.icon] || Layers;
            return (<motion.div key={step.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15 }} className="relative bg-white/60 backdrop-blur-md border border-white/60 p-5 md:p-6 rounded-[2rem] shadow-sm hover:shadow-md hover:scale-[1.02] transition-colors transition-transform transition-shadow duration-300 flex items-start gap-4 md:gap-6 group z-10">

                                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white border border-border flex items-center justify-center shrink-0 group-hover:border-accent/30 transition-colors shadow-inner">
                                            <Icon size={24} className="text-foreground/80 group-hover:text-accent transition-colors"/>
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-lg text-foreground mb-1">{step.title}</h4>
                                            <span className="text-xs font-mono text-accent uppercase tracking-wider block mb-2 font-bold opacity-80">
                                                {step.subtitle}
                                            </span>
                                            <p className="text-sm text-foreground/70 leading-relaxed font-medium">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </motion.div>);
        })}
                        </div>
                    </div>

                    <div className="relative lg:h-full flex items-center min-w-0">

                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent rounded-[3rem] blur-3xl -z-10"/>

                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }} className="w-full min-w-0">

                            <div className="mb-6 flex items-center justify-between px-2">
                                <span className="font-mono text-xs text-foreground/40 uppercase tracking-widest">
                                    Configuration
                                </span>
                                <span className="font-mono text-xs text-foreground/40 lowercase">
                                    codegen.ts
                                </span>
                            </div>

                            <div className="shadow-2xl shadow-accent/5 rounded-2xl md:rounded-[1.5rem]">
                                <CodeWindow code={architecture.codeSnippet.code} lang={architecture.codeSnippet.language} title={architecture.codeSnippet.fileName}/>
                            </div>

                            <div className="mt-6 flex items-start gap-3 opacity-60 px-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 animate-pulse"/>
                                <p className="text-xs font-mono text-foreground leading-relaxed">
                                    This config automatically scans <span className="text-accent">src/lib/shopify</span> for GraphQL queries and generates TypeScript interfaces in real-time.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>);
};
