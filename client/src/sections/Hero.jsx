import { motion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import { TestTerminal } from "@/components/hero/TestTerminal";
import { TypedRole } from "@/components/hero/TypedRole";
import { GithubIcon } from "@/components/ui/icons";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center pb-16 pt-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="min-w-0">
          <motion.p {...fadeUp(0.1)} className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-3.5 py-1.5 font-mono text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            Open to QA opportunities
          </motion.p>

          <motion.h1 {...fadeUp(0.2)} className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="gradient-text">Sujan</span>.
            <br />
            <span className="text-text/90">
              <TypedRole roles={profile.roles} />
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.35)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.tagline}
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-mint to-violet px-6 py-3 font-semibold text-ink transition hover:shadow-[0_0_30px_-4px] hover:shadow-mint/60"
            >
              Get in touch
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel/60 px-6 py-3 font-medium transition hover:border-mint/50"
            >
              <Download size={16} /> Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-xl border border-line bg-panel/60 p-3 text-muted transition hover:border-violet/60 hover:text-violet"
            >
              <GithubIcon />
            </a>
          </motion.div>
        </div>

        <TestTerminal />
      </div>
    </section>
  );
}
