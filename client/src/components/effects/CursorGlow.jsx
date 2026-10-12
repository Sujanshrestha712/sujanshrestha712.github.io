import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

/** Soft spotlight that trails the cursor. Skipped on touch devices. */
export function CursorGlow() {
  const x = useSpring(useMotionValue(-400), { stiffness: 120, damping: 20 });
  const y = useSpring(useMotionValue(-400), { stiffness: 120, damping: 20 });

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const onMove = (e) => {
      x.set(e.clientX - 250);
      y.set(e.clientY - 250);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y }}
      className="pointer-events-none fixed left-0 top-0 -z-10 hidden h-[500px] w-[500px] rounded-full opacity-[0.16] blur-3xl [background:radial-gradient(circle,var(--color-mint),var(--color-violet)_55%,transparent_70%)] md:block"
    />
  );
}
