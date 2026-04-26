import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/about", label: "About" },
  { to: "/teaching", label: "Teaching" },
  { to: "/mentorship", label: "Mentorship" },
  { to: "/research", label: "Research" },
  { to: "/talks", label: "Talks & Recognition" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white" style={{ borderBottom: "0.5px solid var(--border-subtle)" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-end px-6 py-5">
        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="nav-link"
              activeProps={{ className: "nav-link active" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          style={{ color: "var(--navy)" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 px-6 pb-6 md:hidden" style={{ borderTop: "0.5px solid var(--border-subtle)" }}>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="nav-link"
              activeProps={{ className: "nav-link active" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
