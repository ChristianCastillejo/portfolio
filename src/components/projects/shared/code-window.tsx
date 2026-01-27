export const CodeWindow = ({ code, lang, title }: { code: string, lang: string, title: string }) => (
    <div className="w-full rounded-xl bg-[#1e1e1e] border border-white/10 shadow-2xl overflow-hidden font-mono text-sm">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#252526]">
            <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="ml-2 text-xs text-white/40">{title}</span>
        </div>
        <div className="p-6 overflow-x-auto">
            <pre className="text-gray-300 leading-relaxed">
                <code>{code}</code>
            </pre>
        </div>
    </div>
)