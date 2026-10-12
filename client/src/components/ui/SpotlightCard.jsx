import { useRef } from "react";

/** Card with a radial highlight that follows the pointer. */
export function SpotlightCard({ children, className = "" }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div ref={ref} onPointerMove={onMove} className={`group relative overflow-hidden ${className}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(360px circle at var(--mx, 50%) var(--my, 50%), rgb(94 234 212 / 0.1), transparent 70%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
