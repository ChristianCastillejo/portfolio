export const CodeWindow = ({ code, lang, title }: { code: string, lang: string, title: string }) => (
    <div className="w-full rounded-2xl bg-foreground border border-white/10 shadow-xl overflow-hidden font-mono text-sm relative group">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
            <div className="flex gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>
            <span className="ml-2 mt-[3px] mb-[-2px] text-xs text-background/40 font-bold tracking-wider uppercase select-none leading-none">
                {title}
            </span>
        </div>

        <div className="p-6 overflow-x-auto">
            <pre className="text-background/80 leading-relaxed font-normal">
                <code>{code}</code>
            </pre>
        </div>
    </div>
)