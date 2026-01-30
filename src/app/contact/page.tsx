"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Copy, Check, ArrowUpRight, MapPin, Clock, Globe } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
const ContactCard = ({ title, value, icon: Icon, action, onClick, href }: {
    title: string;
    value: string;
    icon: any;
    action: React.ReactNode;
    onClick?: () => void;
    href?: string;
}) => {
    const content = (<div className="flex flex-col justify-between h-full">
            <div className="flex justify-between items-start mb-6">

                <div className="p-3 bg-background rounded-2xl border border-border group-hover:border-primary/20 group-hover:text-primary transition-colors duration-300">
                    <Icon size={24}/>
                </div>

                <div className="text-foreground/20 group-hover:text-primary transition-colors duration-300">
                    {action}
                </div>
            </div>

            <div>

                <span className="font-mono text-xs text-primary/60 uppercase tracking-widest font-bold mb-2 block">
                    {title}
                </span>

                <h3 className="font-display text-lg md:text-xl lg:text-3xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300 break-all lg:truncate w-full text-left">
                    {value}
                </h3>
            </div>
        </div>);
    const containerClasses = "group relative w-full p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:bg-white/60 transition-all duration-500 ease-out cursor-pointer overflow-hidden min-h-[180px] md:min-h-[240px] flex flex-col";
    if (href) {
        return (<Link href={href} target="_blank" className={containerClasses}>
                {content}
            </Link>);
    }
    return (<button onClick={onClick} className={cn(containerClasses, "text-left")}>
            {content}
        </button>);
};
export default function ContactPage() {
    const [copied, setCopied] = useState(false);
    const email = "christiancastillejo@proton.me";
    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (<main className="w-full min-h-screen bg-background text-foreground selection:bg-primary/20 relative overflow-x-hidden">

            <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-noise mix-blend-overlay z-0"/>

            <section className="relative z-10 pt-40 md:pt-48 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                        <span className="font-mono text-xs text-accent font-bold uppercase tracking-widest mb-6 block">
                            Status: <span className="text-accent text-md animate-pulse">●</span> Available for select projects
                        </span>
                        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-8 leading-[0.9] tracking-tight">
                            Let’s start a <br /> conversation.
                        </h1>
                        <p className="font-sans text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto text-pretty">
                            I partner with teams that value <span className="text-foreground font-medium">engineering craftsmanship and design integrity</span>. If that sounds like your approach, let’s see if we are a fit.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="relative z-10 px-6 max-w-[1200px] mx-auto mb-32">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">

                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                        <ContactCard title="Direct Email" value={email} icon={Mail} onClick={handleCopy} action={<div className="relative">
                                    <AnimatePresence mode='wait'>
                                        {copied ? (<motion.div key="check" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} className="flex items-center gap-2 text-accent font-mono text-xs font-bold bg-accent/10 px-3 py-1 rounded-full">
                                                <Check size={14}/> Copied
                                            </motion.div>) : (<motion.div key="copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-2 bg-white rounded-full shadow-sm border border-border">
                                                <Copy size={18}/>
                                            </motion.div>)}
                                    </AnimatePresence>
                                </div>}/>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                        <ContactCard title="Professional Profile" value="linkedin.com/in/christiancastillejo" icon={Linkedin} href="https://www.linkedin.com/in/christiancastillejo" action={<div className="p-2 bg-white rounded-full shadow-sm border border-border group-hover:rotate-45 transition-transform duration-300">
                                    <ArrowUpRight size={18}/>
                                </div>}/>
                    </motion.div>
                </div>
            </section>

            <section className="relative z-10 px-6 pb-32">
                <div className="w-full max-w-[1200px] mx-auto border-t border-border/60 pt-20">
                    <div className="grid md:grid-cols-12 gap-16">

                        <div className="md:col-span-4 space-y-8">
                            <h3 className="font-display text-3xl font-bold text-foreground">
                                Global Context
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-white/50 rounded-lg border border-border shrink-0">
                                        <MapPin size={20} className="text-accent"/>
                                    </div>
                                    <div>

                                        <h4 className="font-bold text-foreground text-sm uppercase tracking-wide mb-1">Base</h4>
                                        <p className="text-foreground/70 font-sans">Fully Remote</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-white/50 rounded-lg border border-border shrink-0">
                                        <Clock size={20} className="text-accent"/>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground text-sm uppercase tracking-wide mb-1">Time Zone</h4>
                                        <p className="text-foreground/70 font-sans">CET (Central European Time)</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-white/50 rounded-lg border border-border shrink-0">
                                        <Globe size={20} className="text-accent"/>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground text-sm uppercase tracking-wide mb-1">Languages</h4>
                                        <p className="text-foreground/70 font-sans">English and Spanish</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-8 bg-white/40 backdrop-blur-md rounded-[2rem] md:rounded-[2.5rem] border border-white/60 p-6 md:p-12">
                            <span className="font-mono text-xs text-accent font-bold uppercase tracking-widest mb-8 block">
                                Are we a match?
                            </span>

                            <div className="grid md:grid-cols-2 gap-12">

                                <div>
                                    <h4 className="font-display text-xl font-bold text-foreground mb-4 flex items-center">
                                        <span className="text-accent">Yes</span>, if you need:
                                    </h4>
                                    <ul className="space-y-3 font-sans text-foreground/70 leading-relaxed">
                                        <li className="flex gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"/>
                                            <span>A bridge between design systems and production code.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"/>
                                            <span>Pixel-perfect implementation with performant, accessible React.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"/>
                                            <span>An autonomous engineer who questions the "why" before the "how".</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-display text-xl font-bold text-foreground mb-4 flex items-center">

                                        <span className="text-foreground/60">No</span>, if you are looking for:
                                    </h4>
                                    <ul className="space-y-3 font-sans text-foreground/70 leading-relaxed">
                                        <li className="flex gap-3">

                                            <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 mt-2.5 shrink-0"/>
                                            <span>Just someone to clear a Jira backlog without thinking.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 mt-2.5 shrink-0"/>
                                            <span>Synchronous-heavy environments that prioritize presence over deep work.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 mt-2.5 shrink-0"/>
                                            <span>A strict hierarchy where engineers don't speak to designers.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>);
}
