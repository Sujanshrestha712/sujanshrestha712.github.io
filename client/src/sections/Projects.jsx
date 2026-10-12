import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { accentStyles } from "@/lib/accent";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container-page">
        <SectionHeading index={4} title="projects">
          Case studies from <span className="gradient-text">real products</span>.
        </SectionHeading>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((p, i) => {
            const a = accentStyles[p.accent];
            return (
              <Reveal key={p.title} delay={i * 0.1} className="h-full">
                <SpotlightCard className={`glass h-full rounded-2xl p-6 transition-colors ${a.border}`}>
                  <div className="flex h-full flex-col">
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <span className={`rounded-md border px-2 py-0.5 font-mono text-xs ${a.chip}`}>{p.kind}</span>
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${p.title} source code`}
                          className="text-muted transition hover:text-mint"
                        >
                          <ArrowUpRight size={20} />
                        </a>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{p.summary}</p>
                    <ul className="mt-5 space-y-2 text-sm text-text/80">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-3">
                          <span className={`mt-2 h-1 w-1 shrink-0 rounded-full ${a.dot}`} />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                      {p.tools.map((t) => (
                        <li key={t} className="rounded-md bg-white/5 px-2 py-1 font-mono text-xs text-muted">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
