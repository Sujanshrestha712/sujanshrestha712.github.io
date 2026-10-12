import { skills } from "@/data/portfolio";
import { accentStyles } from "@/lib/accent";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const marqueeItems = skills.flatMap((s) => s.items);

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container-page">
        <SectionHeading index={2} title="skills">
          The toolkit I use to <span className="gradient-text">break things</span> properly.
        </SectionHeading>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => {
            const a = accentStyles[group.accent];
            return (
              <Reveal key={group.title} delay={(i % 3) * 0.08}>
                <article className={`glass h-full rounded-2xl p-6 transition-colors ${a.border}`}>
                  <h3 className={`mb-4 flex items-center gap-2 font-mono text-sm ${a.text}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
                    {group.title}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className={`rounded-lg border px-2.5 py-1 text-sm ${a.chip}`}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Decorative infinite ticker of every skill. */}
      <div aria-hidden="true" className="relative mt-16 overflow-hidden border-y border-line py-4 [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
        <div className="flex w-max animate-marquee gap-10 font-mono text-sm text-muted">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap">
              {item}
              <span className="text-mint">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
