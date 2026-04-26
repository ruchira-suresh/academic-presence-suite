const externalLinks = [
  { href: "https://scholar.google.com/citations?user=2Ju3wFoAAAAJ&hl=en", label: "Google Scholar" },
  { href: "https://www.linkedin.com/in/dr-a-s-suresh-iyer-5a522313", label: "LinkedIn" },
  { href: "https://orcid.org/0000-0002-1719-023X", label: "ORCID" },
];

export function SiteFooter() {
  return (
    <footer style={{ backgroundColor: "var(--navy)", color: "#ffffff" }}>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
              Profiles
            </p>
            <ul className="space-y-2">
              {externalLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-white transition-opacity hover:opacity-70"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
              Email
            </p>
            <a
              href="mailto:sureshiyer1963@gmail.com"
              className="text-[13px] text-white transition-opacity hover:opacity-70"
            >
              sureshiyer1963@gmail.com
            </a>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
              Location
            </p>
            <p className="text-[13px] text-white">Dehradun, India</p>
          </div>
        </div>

        <div className="mt-14 border-t border-white/15 pt-6">
          <p className="text-[12px] text-white/60">
            © {new Date().getFullYear()} Dr. A. S. Suresh Iyer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
