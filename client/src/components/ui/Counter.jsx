import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

/** Counts up from 0 to `value` when it scrolls into view. */
export function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, { duration: 1.4, ease: "easeOut", onUpdate: (v) => setShown(Math.round(v)) });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {shown}
      {suffix}
    </span>
  );
}
