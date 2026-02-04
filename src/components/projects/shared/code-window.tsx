import { cn } from "@/lib/utils";
export const CodeWindow = ({ code, lang, title, className }: {
    code: string;
    lang: string;
    title: string;
    className?: string;
}) => (<div className={cn("relative w-full max-w-full rounded-2xl md:rounded-[1.5rem] bg-foreground text-background shadow-2xl overflow-hidden font-mono text-xs md:text-sm group", "border border-white/10", className)}>

        <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 bg-white/5 backdrop-blur-lg border-b border-white/5 select-none">

            <div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-inner"/>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-inner"/>
                <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-inner"/>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
                <span className="text-xs font-medium tracking-widest text-white/30 uppercase font-sans group-hover:text-white/50 transition-colors">
                    {title}
                </span>
            </div>

            <div className="w-12"/>
        </div>

        <div className="p-6 md:p-8 overflow-x-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">

            <pre className="text-background/90 leading-loose font-normal tracking-tight tab-4">
                <code>{code}</code>
            </pre>
        </div>

        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[50px] pointer-events-none rounded-full -translate-y-1/2 translate-x-1/2"/>
    </div>);
