import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/portfolio";

function useActiveSection(ids) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

const ids = navLinks.map((l) => l.id);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="container-page mt-4" aria-label="Primary">
        <div className="glass flex items-center justify-between rounded-2xl px-4 py-3">
          <a href="#top" className="font-mono text-sm font-bold" aria-label="Back to top">
            <span className="gradient-text">{"<SS />"}</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`relative rounded-lg px-3 py-1.5 text-sm transition-colors ${
                    active === l.id ? "text-text" : "text-muted hover:text-text"
                  }`}
                >
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-lg bg-white/5"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={profile.resume}
            download
            className="hidden rounded-lg border border-mint/40 px-3.5 py-1.5 text-sm text-mint transition hover:bg-mint/10 md:block"
          >
            Resume
          </a>

          <button
            type="button"
            className="rounded-lg p-1.5 text-muted md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="glass mt-2 flex flex-col rounded-2xl p-2 md:hidden"
            >
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-muted hover:bg-white/5 hover:text-text"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={profile.resume} download className="block rounded-lg px-4 py-3 text-mint">
                  Download resume
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
