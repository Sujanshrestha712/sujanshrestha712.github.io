import { Reveal } from "./Reveal";

export function SectionHeading({ index, title, children }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-sm text-mint">
        <span className="text-muted">{String(index).padStart(2, "0")} /</span> {title}
      </p>
      <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{children}</h2>
    </Reveal>
  );
}
