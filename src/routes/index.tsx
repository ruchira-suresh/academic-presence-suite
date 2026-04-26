import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. A. S. Suresh Iyer — Academic Profile" },
      {
        name: "description",
        content:
          "Educator, mentor and researcher based in Dehradun, India. Decades of work in teaching, mentorship and academic research.",
      },
      { property: "og:title", content: "Dr. A. S. Suresh Iyer — Academic Profile" },
      {
        property: "og:description",
        content: "Educator, mentor and researcher based in Dehradun, India.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-narrow page-section">
          <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--navy)" }}>
            Academic Profile
          </p>
          <h1 className="max-w-2xl">
            Dr. A. S. Suresh Iyer
          </h1>
          <p className="mt-5 max-w-2xl text-[13px] leading-[1.7]">
            Educator, mentor and researcher with a long-standing commitment to teaching, doctoral
            supervision and scholarly inquiry. Based in Dehradun, India.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/about" className="btn-navy">
              About
            </Link>
            <Link to="/research" className="btn-outline-navy">
              Research
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-white">
        <div className="container-narrow page-section">
          <h2 className="section-title">At a glance</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { k: "Teaching", v: "Decades of university-level instruction across management and the social sciences." },
              { k: "Mentorship", v: "Doctoral and postgraduate supervision spanning a wide range of disciplines." },
              { k: "Research", v: "Peer-reviewed publications, book chapters and conference contributions." },
            ].map((c) => (
              <div key={c.k} className="cream-card">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--navy)" }}>
                  {c.k}
                </p>
                <p className="mt-3 text-[13px] leading-[1.7]">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-narrow page-section">
          <h2 className="section-title">Explore</h2>
          <ul className="divide-y" style={{ borderTop: "0.5px solid var(--border-subtle)", borderBottom: "0.5px solid var(--border-subtle)" }}>
            {[
              { to: "/teaching", label: "Teaching", desc: "Courses and academic instruction." },
              { to: "/mentorship", label: "Mentorship", desc: "Doctoral and postgraduate supervision." },
              { to: "/talks", label: "Talks & Recognition", desc: "Invited lectures, awards and honours." },
              { to: "/contact", label: "Contact", desc: "Get in touch for collaboration or speaking." },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="flex items-center justify-between py-5 transition-opacity hover:opacity-70">
                  <div>
                    <p className="text-[14px] font-medium" style={{ color: "var(--navy)" }}>{l.label}</p>
                    <p className="mt-1 text-[12px]">{l.desc}</p>
                  </div>
                  <span style={{ color: "var(--navy)" }}>→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
