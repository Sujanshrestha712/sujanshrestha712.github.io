import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="container-page flex flex-col items-center justify-between gap-2 text-sm text-muted sm:flex-row">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="font-mono text-xs">Built with React, Express &amp; MongoDB</p>
      </div>
    </footer>
  );
}
