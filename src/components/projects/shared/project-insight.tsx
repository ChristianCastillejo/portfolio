import { ProjectCaseStudy } from "@/types/project"

export const ProjectInsight = ({ project }: { project: ProjectCaseStudy }) => {
    if (!project.lessons || project.lessons.length === 0) return null;

    return (
        <section className="w-full max-w-[800px] mx-auto px-6 py-24">
            <span className="font-mono text-xs text-primary font-bold uppercase tracking-widest block mb-8">
                Engineering Retrospective
            </span>
            <div className="prose prose-lg prose-slate max-w-none">
                <h3 className="font-display text-3xl font-bold text-accent mb-8">
                    Trade-offs & Lessons Learned
                </h3>
                <div className="grid gap-12">
                    {project.lessons.map((lesson, idx) => (
                        <div key={idx} className="relative pl-8 border-l-2 border-primary/30">
                            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                            <h4 className="text-xl font-bold text-foreground mb-3">{lesson.title}</h4>
                            <p className="text-foreground/70 leading-relaxed text-pretty">
                                {lesson.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}