import { useEffect, useState } from "react";

/** Types and erases each role in turn. Shows the first role statically if motion is reduced. */
export function TypedRole({ roles }) {
  const [text, setText] = useState(roles[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let roleIndex = 0;
    let length = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = roles[roleIndex];
      length += deleting ? -1 : 1;
      setText(word.slice(0, length));

      let delay = deleting ? 40 : 85;
      if (!deleting && length === word.length) {
        deleting = true;
        delay = 1600;
      } else if (deleting && length === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 1800);
    return () => clearTimeout(timer);
  }, [roles]);

  return (
    <span className="gradient-text" aria-label={roles.join(", ")}>
      <span aria-hidden="true">{text}</span>
      <span aria-hidden="true" className="animate-blink text-mint">|</span>
    </span>
  );
}
