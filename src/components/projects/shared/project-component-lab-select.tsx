"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Settings2,
    TestTube2,
    Box,
    Building2,
    MapPin,
    Languages,
    MousePointer2,
    Shield,
    Globe,
    BookOpen
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CodeWindow } from "@/components/projects/shared/code-window";
import { ProjectCaseStudy } from "@/types/project";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
    SelectGroup,
    SelectLabel,
    SelectSeparator,
} from "@/components/projects/demos/ksi/select";

type SelectScenario = "tenant" | "shipping" | "language";

export const ProjectComponentLabSelect = ({ project }: {
    project: ProjectCaseStudy;
}) => {
    if (!project.componentLab) return null;

    const { componentLab } = project;
    const [scenario, setScenario] = useState<SelectScenario>("tenant");
    const [isDisabled, setIsDisabled] = useState(false);
    const [value, setValue] = useState<string>("");

    const handleScenarioChange = (s: SelectScenario) => {
        setScenario(s);
        setValue("");
    };

    const disabledProp = isDisabled ? "\n  disabled" : "";
    let codeSnippet = "";

    if (scenario === "tenant") {
        codeSnippet = `<Select${disabledProp} defaultValue="srinagar" onValueChange={switchTenant}>
  <SelectTrigger>
    <SelectValue placeholder="Select..." />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Organization</SelectLabel>
      <SelectItem value="srinagar">Srinagar (Main)</SelectItem>
      <SelectItem value="delhi">New Delhi</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>International</SelectLabel>
      <SelectItem value="ksi">Kashmir Shaiva Institute</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`;
    } else if (scenario === "shipping") {
        codeSnippet = `<Select${disabledProp} onValueChange={validateShippingPolicy}>
  <SelectTrigger>
    <SelectValue placeholder="Destination..." />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Available Geographies</SelectLabel>
      <SelectItem value="domestic">National (Physical)</SelectItem>
      {/* Blocked by organizational copyright policy */}
      <SelectItem value="international" disabled>
        International (Partner Only)
      </SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`;
    } else {
        codeSnippet = `<Select${disabledProp} defaultValue="en" onValueChange={changeLocale}>
  <SelectTrigger>
    <SelectValue placeholder="Language..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="en">English</SelectItem>
    <SelectItem value="hi">हिंदी</SelectItem>
  </SelectContent>
</Select>`;
    }

    return (
        <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-48 border-t border-border/40 relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

                <div className="lg:col-span-4 flex flex-col gap-12">
                    <div>
                        <span className="font-mono text-xs text-accent font-bold uppercase tracking-widest flex items-center gap-2 mb-6">
                            <TestTube2 size={14} />
                            {componentLab.eyebrow}
                        </span>
                        <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                            {componentLab.title} <br /> <span className="text-foreground/40">{componentLab.spanTitle}</span>
                        </h3>
                        <p className="text-foreground/70 text-lg leading-relaxed text-pretty">
                            {componentLab.description}
                        </p>
                    </div>

                    <div className="bg-white/60 backdrop-blur-md border border-white/60 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-sm flex flex-col gap-6 md:gap-8">
                        <div className="flex items-center gap-3 pb-4 border-b border-border/60">
                            <Settings2 size={18} className="text-accent" />
                            <span className="font-display text-lg font-bold text-foreground">Properties</span>
                        </div>

                        <div className="space-y-5">
                            <label className="text-xs font-mono uppercase text-foreground/40 font-bold tracking-wider">Business Logic</label>
                            <div className="flex flex-wrap gap-3 !mt-1 md:!mt-2">
                                {([
                                    { id: "tenant", label: "Multi-Tenant", icon: Building2 },
                                    { id: "shipping", label: "Shipping Policy", icon: MapPin },
                                    { id: "language", label: "Localization", icon: Languages }
                                ] as const).map(({ id, label, icon: Icon }) => (
                                    <button
                                        key={id}
                                        onClick={() => handleScenarioChange(id)}
                                        className={cn(
                                            "px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 flex items-center gap-2 cursor-pointer",
                                            scenario === id
                                                ? "bg-foreground text-background border-foreground shadow-md transform"
                                                : "bg-transparent border-border text-foreground/60 hover:border-foreground/30 hover:bg-white/50"
                                        )}
                                    >
                                        <Icon size={14} className={scenario === id ? "text-background" : "text-foreground/50"} />
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-5">
                            <label className="text-xs font-mono uppercase text-foreground/40 font-bold tracking-wider">State</label>
                            <div className="flex items-center justify-between p-1 !mt-1 md:!mt-2 bg-white/40 rounded-full border border-border/60 relative w-full max-w-[240px]">
                                <button
                                    onClick={() => setIsDisabled(false)}
                                    className={cn(
                                        "w-1/2 py-2 text-sm font-bold rounded-full transition-all duration-300 z-10 flex items-center justify-center gap-2",
                                        !isDisabled ? "bg-foreground shadow-sm text-background" : "text-foreground/50 hover:text-foreground/80"
                                    )}
                                >
                                    <MousePointer2 size={12} />
                                    Active
                                </button>
                                <button
                                    onClick={() => setIsDisabled(true)}
                                    className={cn(
                                        "w-1/2 py-2 text-sm font-bold rounded-full transition-all duration-300 z-10 flex items-center justify-center gap-2",
                                        isDisabled ? "bg-foreground shadow-sm text-background" : "text-foreground/50 hover:text-foreground/80"
                                    )}
                                >
                                    <Shield size={12} />
                                    Disabled
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-8 flex flex-col gap-8 min-w-0">

                    <div
                        className="flex-1 min-h-[300px] md:min-h-[400px] rounded-[1.5rem] md:rounded-[2.5rem] shadow-inner relative overflow-visible flex items-center justify-center border border-[rgba(29,28,26,0.08)]"
                        style={{ backgroundColor: "#fbf9f6" }}
                    >
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-[1.5rem] md:rounded-[2.5rem]"
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}
                        />

                        <div className="relative z-10 w-full max-w-[280px]">
                            <motion.div
                                key={scenario}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {scenario === "tenant" && (
                                    <div className="space-y-3">
                                        <label className={cn("text-sm font-medium leading-none text-[#1d1c1a]", isDisabled && "opacity-50")}>
                                            Organization
                                        </label>
                                        <div style={{ color: "#1d1c1a" }}>
                                            <Select disabled={isDisabled} value={value} onValueChange={setValue}>
                                                <SelectTrigger className="w-full bg-white border-[rgba(29,28,26,0.15)] shadow-sm focus:ring-[#de6b48]">
                                                    <SelectValue placeholder="Select..." />
                                                </SelectTrigger>
                                                <SelectContent className="bg-white border-[rgba(29,28,26,0.15)] text-[#1d1c1a]">
                                                    <SelectGroup>
                                                        <SelectLabel className="text-[#5c5a56] font-sans text-xs uppercase tracking-wider">Domestic</SelectLabel>
                                                        <SelectItem value="srinagar">
                                                            <span className="font-sans">Srinagar</span>
                                                        </SelectItem>
                                                        <SelectItem value="delhi">
                                                            <span className="font-sans">New Delhi</span>
                                                        </SelectItem>
                                                    </SelectGroup>
                                                    <SelectSeparator className="bg-[rgba(29,28,26,0.08)]" />
                                                    <SelectGroup>
                                                        <SelectLabel className="text-[#5c5a56] font-sans text-xs uppercase tracking-wider">International</SelectLabel>
                                                        <SelectItem value="ksi">
                                                            <span className="font-sans">Kashmir Shaiva Institute</span>
                                                        </SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                )}

                                {scenario === "shipping" && (
                                    <div className="space-y-3">
                                        <label className={cn("text-sm font-medium leading-none text-[#1d1c1a]", isDisabled && "opacity-50")}>
                                            Fulfillment Destination
                                        </label>
                                        <div style={{ color: "#1d1c1a" }}>
                                            <Select disabled={isDisabled} value={value} onValueChange={setValue}>
                                                <SelectTrigger className="w-full bg-white border-[rgba(29,28,26,0.15)] shadow-sm focus:ring-[#de6b48]">
                                                    <SelectValue placeholder="Shipping region..." />
                                                </SelectTrigger>
                                                <SelectContent className="bg-white border-[rgba(29,28,26,0.15)] text-[#1d1c1a]">
                                                    <SelectGroup>
                                                        <SelectLabel className="text-[#5c5a56] font-sans text-xs uppercase tracking-wider">Available Geographies</SelectLabel>
                                                        <SelectItem value="domestic">
                                                            <div className="flex items-center gap-2">
                                                                <MapPin size={14} className="text-[#de6b48]" />
                                                                <span>National (Physical)</span>
                                                            </div>
                                                        </SelectItem>
                                                        <SelectItem value="international" disabled>
                                                            <div className="flex items-center gap-2 opacity-60">
                                                                <Globe size={14} className="text-[#5c5a56]" />
                                                                <span>International (Partner)</span>
                                                            </div>
                                                        </SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                )}

                                {scenario === "language" && (
                                    <div className="space-y-3">
                                        <label className={cn("text-sm font-medium leading-none text-[#1d1c1a]", isDisabled && "opacity-50")}>
                                            Content Localization
                                        </label>
                                        <div style={{ color: "#1d1c1a" }}>
                                            <Select disabled={isDisabled} value={value} onValueChange={setValue}>
                                                <SelectTrigger className="w-full bg-white border-[rgba(29,28,26,0.15)] shadow-sm focus:ring-[#de6b48]">
                                                    <div className="flex items-center gap-2">
                                                        <SelectValue placeholder="Select language..." />
                                                    </div>
                                                </SelectTrigger>
                                                <SelectContent className="bg-white border-[rgba(29,28,26,0.15)] text-[#1d1c1a]">
                                                    <SelectItem value="en">
                                                        <span className="flex items-center gap-2 font-sans">
                                                            <BookOpen size={14} className="text-[#3a7491]" /> English
                                                        </span>
                                                    </SelectItem>
                                                    <SelectItem value="hi">
                                                        <span className="flex items-center gap-2 font-sans">
                                                            <BookOpen size={14} className="text-[#3a7491]" /> हिंदी
                                                        </span>
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </div>

                        <div className="absolute bottom-6 right-8 flex items-center gap-2 opacity-40 text-[#1d1c1a]">
                            <Box size={14} />
                            <span className="font-mono text-[10px] uppercase tracking-widest font-bold">
                                Isolation Mode
                            </span>
                        </div>
                    </div>

                    <motion.div layout className="w-full">
                        <CodeWindow title="Select.usage.tsx" lang="tsx" code={codeSnippet} className="shadow-xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};