import { about, stats } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container-page">
        <SectionHeading index={1} title="about">
          Quality is a <span className="gradient-text">mindset</span>, not a phase.
        </SectionHeading>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="glass divide-y divide-line rounded-2xl">
              {about.facts.map((f) => (
                <div key={f.label} className="flex justify-between gap-4 px-5 py-4 text-sm">
                  <dt className="font-mono text-muted">{f.label}</dt>
                  <dd className="text-right">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 text-center">
                <p className="gradient-text text-4xl font-bold sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
