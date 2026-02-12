"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Settings2, TestTube2, Layout, Box, Settings,
    CreditCard, Lock, BellRing, ShieldCheck, Scan
} from "lucide-react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    CardBadge
} from "@/components/projects/demos/nectar-ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CodeWindow } from "@/components/projects/shared/code-window";
import { ProjectCaseStudy } from "@/types/project";

type CardScenario = "billing" | "auth" | "notification";

export const ProjectComponentLabCard = ({ project }: { project: ProjectCaseStudy }) => {
    const [variant, setVariant] = useState<"default" | "stable">("default");
    const [scenario, setScenario] = useState<CardScenario>("billing");
    const [showBadge, setShowBadge] = useState(true);

    const getCodeSnippet = () => {
        const badgeCode = showBadge ? `\n  <CardBadge variant="secondary">Active</CardBadge>` : "";

        const scenarios = {
            billing: `<Card variant="${variant}">${badgeCode}
  <CardHeader>
    <CardTitle>Payment Method</CardTitle>
    <CardDescription>Visa ending in 4242</CardDescription>
  </CardHeader>
  <CardFooter>
    <Button size="sm">Update</Button>
  </CardFooter>
</Card>`,
            auth: `<Card variant="${variant}">${badgeCode}
  <CardHeader className="text-center">
    <CardTitle>Access Portal</CardTitle>
  </CardHeader>
  <CardContent>
    <Input placeholder="Email" />
  </CardContent>
</Card>`,
            notification: `<Card variant="${variant}">${badgeCode}
  <CardHeader>
    <CardTitle>Capacity Warning</CardTitle>
  </CardHeader>
  <CardContent>
    <p>US-East-1 reaching 90% load.</p>
  </CardContent>
</Card>`
        };
        return scenarios[scenario];
    };

    return (
        <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-48 border-t border-border/40 relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

                <div className="lg:col-span-4 flex flex-col gap-12">
                    <div>
                        <span className="font-mono text-xs text-accent font-bold uppercase tracking-widest flex items-center gap-2 mb-6">
                            <TestTube2 size={14} />
                            Component Lab
                        </span>
                        <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                            Surface <br /> <span className="text-foreground/40">Composition.</span>
                        </h3>
                        <p className="text-foreground/70 text-lg leading-relaxed text-pretty">
                            La Card utiliza un <span className="text-foreground font-medium">Compound Component Pattern</span> para evitar el prop-drilling y permitir layouts flexibles.
                        </p>
                    </div>

                    <div className="bg-white/40 backdrop-blur-md border border-white/60 p-6 md:p-8 rounded-[2rem] shadow-sm flex flex-col gap-8">
                        <div className="flex items-center gap-3 pb-4 border-b border-border/60">
                            <Settings2 size={18} className="text-accent" />
                            <span className="font-display text-lg font-bold text-foreground">Props Inspector</span>
                        </div>

                        <div className="space-y-4">
                            <label className="text-xs font-mono uppercase text-foreground/40 font-bold tracking-wider">Scenario</label>
                            <div className="flex flex-col gap-2">
                                {(["billing", "auth", "notification"] as const).map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => setScenario(s)}
                                        className={cn(
                                            "flex items-center gap-3 px-4 py-2 text-xs font-bold rounded-full border transition-all",
                                            scenario === s ? "bg-foreground text-background border-foreground" : "bg-white/50 border-border text-foreground/50 hover:border-foreground/30"
                                        )}
                                    >
                                        {s === "billing" && <CreditCard size={14} />}
                                        {s === "auth" && <Lock size={14} />}
                                        {s === "notification" && <BellRing size={14} />}
                                        {s.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-border/40">
                            <label className="text-xs font-mono uppercase text-foreground/40 font-bold tracking-wider">Elevation</label>
                            <div className="flex gap-2">
                                {["default", "stable"].map((v) => (
                                    <button
                                        key={v}
                                        onClick={() => setVariant(v as any)}
                                        className={cn(
                                            "flex-1 py-2 text-xs font-bold rounded-full border transition-all",
                                            variant === v ? "bg-black text-white border-black shadow-md" : "border-border text-foreground/50"
                                        )}
                                    >
                                        {v === "default" ? <Scan size={12} className="inline mr-2" /> : <Settings size={12} className="inline mr-2" />}
                                        {v.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-8 flex flex-col gap-8 min-w-0">
                    <div className="flex-1 min-h-[500px] bg-slate-50/50 border border-white/60 rounded-[2.5rem] shadow-sm relative overflow-hidden flex items-center justify-center p-12">
                        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)`, backgroundSize: '32px 32px' }} />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={scenario}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full max-w-[380px] relative z-10"
                            >
                                {scenario === "billing" && (
                                    <Card variant={variant} className="bg-white shadow-xl rounded-4xl">
                                        {showBadge && <CardBadge variant="secondary">Active</CardBadge>}
                                        <CardHeader>
                                            <CardTitle>Payment Method</CardTitle>
                                            <CardDescription>Manage your billing details.</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center gap-4 rounded-xl border p-4 bg-slate-50">
                                                <CreditCard className="h-6 w-6 text-accent" />
                                                <div className="flex-1">
                                                    <p className="text-sm font-bold">Visa ending in 4242</p>
                                                    <p className="text-xs text-foreground/40">Expires 12/24</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter className="justify-end gap-2 border-t border-border/40 pt-6">
                                            <Button variant="secondary" className="py-2"  >Cancel</Button>
                                            <Button variant="primary" className="py-2">Update</Button>
                                        </CardFooter>
                                    </Card>
                                )}

                                {scenario === "auth" && (
                                    <Card variant={variant} className="bg-white shadow-xl overflow-hidden rounded-4xl">
                                        <CardHeader className="text-center pt-10">
                                            <div className="mx-auto w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-4">
                                                <Lock size={20} />
                                            </div>
                                            <CardTitle>Access Portal</CardTitle>
                                            <CardDescription>Enter credentials to continue.</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-3 pb-10">
                                            <div className="h-10 rounded-lg border bg-slate-50 px-4 flex items-center text-sm text-foreground/40">admin@company.com</div>
                                            <div className="h-10 rounded-lg border bg-slate-50 px-4 flex items-center text-sm text-foreground/40">•••••••••••••</div>
                                            <Button className="w-full mt-4 py-2">Authenticate</Button>
                                        </CardContent>
                                    </Card>
                                )}

                                {scenario === "notification" && (
                                    <Card variant={variant} className="bg-white shadow-xl border-l-4 border-l-destructive rounded-4xl">
                                        <CardHeader>
                                            <div className="flex items-center gap-2 text-destructive">
                                                <BellRing size={18} />
                                                <CardTitle className="text-base">Capacity Warning</CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-foreground/60 leading-relaxed">
                                                Server cluster <b>US-East-1</b> is reaching 90% load capacity. Auto-scaling triggered.
                                            </p>
                                        </CardContent>
                                        <CardFooter className="bg-slate-50/80 p-4 border-t flex justify-between items-center">
                                            <span className="text-[10px] font-mono font-bold text-foreground/30">JUST NOW</span>
                                            <Button variant="secondary" className="py-2 ">View Logs</Button>
                                        </CardFooter>
                                    </Card>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        <div className="absolute bottom-6 left-8 flex items-center gap-2 opacity-30">
                            <Box size={14} />
                            <span className="font-mono text-[10px] uppercase tracking-widest font-bold">
                                {scenario.toUpperCase()} SCENARIO
                            </span>
                        </div>
                    </div>

                    <motion.div layout className="w-full">
                        <CodeWindow title="Card.usage.tsx" lang="tsx" code={getCodeSnippet()} className="shadow-xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};