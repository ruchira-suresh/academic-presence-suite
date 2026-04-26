import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. A. S. Suresh — Professor & Director, Doon Business School" },
      {
        name: "description",
        content:
          "36 years spanning corporate leadership and academic transformation. Researcher in consumer behaviour, retail strategy and AI-driven marketing.",
      },
      { property: "og:title", content: "Dr. A. S. Suresh — Professor & Director" },
      {
        property: "og:description",
        content:
          "36 years across corporate leadership and academic transformation. Consumer behaviour, retail strategy, AI-driven marketing.",
      },
    ],
  }),
  component: HomePage,
});

const stats = [
  { n: "45+", l: "Publications" },
  { n: "100+", l: "Conference Papers" },
  { n: "206+", l: "Citations" },
  { n: "2", l: "Patents" },
];

const research = [
  {
    year: "2025",
    tags: ["Scopus", "ABDC-B"],
    title: "Sustainability in hospitality: bibliometric synthesis",
    venue: "Advances in Consumer Research",
  },
  {
    year: "2024",
    tags: ["Scopus"],
    title: "Mapping AI-driven marketing",
    venue: "Artificial Intelligence Journal",
  },
  {
    year: "2025",
    tags: ["Scopus"],
    title: "Smart retail: AR, VR and Industry 4.0",
    venue: "IGI Global",
  },
  {
    year: "2024",
    tags: ["Scopus"],
    title: "Service adoption and SERVQUAL in self-drive rental",
    venue: "Innovative Marketing",
  },
];

const career = [
  {
    period: "2025 — Present",
    role: "Professor and Director",
    org: "Doon Business School, DBS Global University, Dehradun",
  },
  {
    period: "2024 — 2025",
    role: "Director",
    org: "Aditya School of Business Management, Mumbai",
  },
  {
    period: "2011 — 2023",
    role: "Professor and Area Chair",
    org: "Christ University, Bangalore",
  },
  {
    period: "24+ years",
    role: "Corporate leadership",
    org: "Whirlpool of India, Havells India, Jain Irrigation Systems, Subhiksha and others",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-narrow page-section">
          <div className="grid items-center gap-12 md:grid-cols-[280px_1fr] md:gap-16">
            {/* Portrait */}
            <div className="flex justify-center md:justify-start">
              <div
                className="overflow-hidden rounded-full"
                style={{
                  width: 240,
                  height: 240,
                  border: "2px solid var(--navy)",
                }}
              >
                <img
                  src={portrait}
                  alt="Dr. A. S. Suresh"
                  width={480}
                  height={480}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Intro */}
            <div>
              <p
                className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: "var(--navy)" }}
              >
                Professor and Director, Doon Business School
              </p>
              <h1>Dr. A. S. Suresh</h1>
              <p className="mt-5 max-w-2xl text-[13px] leading-[1.7]">
                36 years spanning corporate leadership and academic transformation. Researcher in
                consumer behaviour, retail strategy, and AI-driven marketing.
              </p>
              <div className="mt-8">
                <Link to="/mentorship" className="btn-navy">
                  Book a Mentorship Session
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white" style={{ borderTop: "0.5px solid var(--border-subtle)", borderBottom: "0.5px solid var(--border-subtle)" }}>
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.l}
                className="px-6 py-10 text-center"
                style={{
                  borderLeft: i === 0 ? "none" : "0.5px solid var(--border-subtle)",
                }}
              >
                <p className="text-[22px] font-medium leading-none" style={{ color: "var(--navy)" }}>
                  {s.n}
                </p>
                <p
                  className="mt-3 text-[11px] font-medium uppercase tracking-[0.14em]"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Research */}
      <section className="bg-white">
        <div className="container-narrow page-section">
          <h2 className="section-title">Recent Research</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {research.map((r) => (
              <article key={r.title} className="cream-card">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="text-[11px] font-semibold uppercase tracking-[0.14em]"
                    style={{ color: "var(--navy)" }}
                  >
                    {r.year}
                  </span>
                  {r.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium uppercase tracking-[0.12em] px-2 py-[3px]"
                      style={{
                        color: "var(--navy)",
                        border: "0.5px solid var(--navy)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 text-[15px] leading-snug">{r.title}</h3>
                <p className="mt-2 text-[12px] italic" style={{ color: "var(--muted-foreground)" }}>
                  {r.venue}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="bg-white" style={{ borderTop: "0.5px solid var(--border-subtle)" }}>
        <div className="container-narrow page-section">
          <h2 className="section-title">Career Highlights</h2>
          <ul>
            {career.map((c, i) => (
              <li
                key={c.period}
                className="grid grid-cols-1 gap-3 py-6 md:grid-cols-[200px_1fr] md:gap-10"
                style={{
                  borderTop: i === 0 ? "0.5px solid var(--border-subtle)" : "none",
                  borderBottom: "0.5px solid var(--border-subtle)",
                }}
              >
                <span
                  className="text-[12px] font-medium uppercase tracking-[0.12em]"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {c.period}
                </span>
                <div>
                  <p className="text-[14px] font-medium" style={{ color: "var(--navy)" }}>
                    {c.role}
                  </p>
                  <p className="mt-1 text-[13px]">{c.org}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
