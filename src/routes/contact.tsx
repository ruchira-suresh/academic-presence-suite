import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dr. A. S. Suresh Iyer" },
      { name: "description", content: "Get in touch for collaboration, supervision enquiries or speaking invitations." },
      { property: "og:title", content: "Contact — Dr. A. S. Suresh Iyer" },
      { property: "og:description", content: "Get in touch for collaboration, supervision or speaking." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-narrow page-section">
          <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--navy)" }}>
            Contact
          </p>
          <h1>Get in touch</h1>
          <p className="mt-5 max-w-2xl text-[13px] leading-[1.7]">
            For collaboration, doctoral supervision enquiries, speaking invitations or general
            correspondence, please use the details below.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-narrow page-section">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="cream-card">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--navy)" }}>Email</p>
              <a
                href="mailto:sureshiyer1963@gmail.com"
                className="mt-3 inline-block text-[14px]"
                style={{ color: "var(--navy)" }}
              >
                sureshiyer1963@gmail.com
              </a>
            </div>
            <div className="cream-card">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--navy)" }}>Location</p>
              <p className="mt-3 text-[14px]" style={{ color: "var(--navy)" }}>Dehradun, India</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-narrow page-section">
          <h2 className="section-title">Profiles</h2>
          <ul className="space-y-3 max-w-3xl">
            {[
              { href: "https://scholar.google.com/citations?user=2Ju3wFoAAAAJ&hl=en", label: "Google Scholar" },
              { href: "https://www.linkedin.com/in/dr-a-s-suresh-iyer-5a522313", label: "LinkedIn" },
              { href: "https://orcid.org/0000-0002-1719-023X", label: "ORCID" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] underline-offset-4 hover:underline"
                  style={{ color: "var(--navy)" }}
                >
                  {l.label} →
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
