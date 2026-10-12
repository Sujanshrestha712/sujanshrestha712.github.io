import { motion } from "motion/react";
import { Check } from "lucide-react";
import { testRun } from "@/data/portfolio";

const STEP = 0.55; // seconds between lines

function Line({ line, index }) {
  const delay = 0.9 + index * STEP;
  const base = {
    initial: { opacity: 0, x: -8 },
    animate: { opacity: 1, x: 0 },
    transition: { delay, duration: 0.3 },
  };

  if (line.kind === "pass") {
    return (
      <motion.li {...base} className="flex items-center gap-2">
        <Check size={14} className="shrink-0 text-mint" aria-label="passed" />
        <span className="text-text/90">{line.text}</span>
        <span className="ml-auto text-muted">{line.time}</span>
      </motion.li>
    );
  }
  if (line.kind === "summary") {
    return (
      <motion.li {...base} className="mt-3 border-t border-line pt-3 font-bold text-mint">
        {line.text}
      </motion.li>
    );
  }
  return (
    <motion.li {...base} className={line.kind === "cmd" ? "text-violet" : "text-muted"}>
      {line.text}
    </motion.li>
  );
}

/** Decorative terminal that "runs" a Playwright suite on load. */
export function TestTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
      style={{ perspective: 1000 }}
    >
      <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-mint/20 to-violet/20 blur-2xl" />
      <div className="glass animate-float overflow-hidden rounded-2xl shadow-2xl shadow-black/50">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-violet/70" />
          <span className="h-3 w-3 rounded-full bg-mint/70" />
          <span className="h-3 w-3 rounded-full bg-white/20" />
          <span className="ml-3 font-mono text-xs text-muted">goodwill.spec.js</span>
        </div>
        <ul className="space-y-2 p-5 font-mono text-[13px] leading-relaxed" aria-label="Sample automated test run">
          {testRun.map((line, i) => (
            <Line key={line.text} line={line} index={i} />
          ))}
          <li aria-hidden="true" className="pt-1 text-mint">
            <span className="animate-blink">&#9610;</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
