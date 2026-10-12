import { education, experience } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container-page">
        <SectionHeading index={3} title="experience">
          Where I've <span className="gradient-text">shipped quality</span>.
        </SectionHeading>

        <ol className="relative ml-3 border-l border-line">
          {experience.map((job, i) => (
            <li key={job.role} className="relative pb-12 pl-8 last:pb-0">
              <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-gradient-to-br from-mint to-violet ring-4 ring-ink" />
              <Reveal delay={i * 0.1}>
                <div className="glass rounded-2xl p-6">
                  <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <span className="font-mono text-xs text-mint">{job.period}</span>
                  </div>
                  <p className="mb-4 text-muted">{job.company}</p>
                  <ul className="space-y-2 text-sm leading-relaxed text-text/80">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <h3 className="mb-6 mt-20 font-mono text-sm text-violet">Education</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.1}>
              <div className="glass h-full rounded-2xl p-6">
                <p className="font-mono text-xs text-mint">{e.period}</p>
                <h4 className="mt-2 text-lg font-semibold">{e.title}</h4>
                <p className="text-muted">{e.place}</p>
                {e.note && <p className="mt-3 text-sm text-muted">{e.note}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
