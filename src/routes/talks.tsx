import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/talks")({
  head: () => ({
    meta: [
      { title: "Talks & Recognition — Dr. A. S. Suresh Iyer" },
      { name: "description", content: "Invited lectures, keynote addresses, awards and honours." },
      { property: "og:title", content: "Talks & Recognition — Dr. A. S. Suresh Iyer" },
      { property: "og:description", content: "Invited lectures, keynotes, awards and honours." },
    ],
  }),
  component: TalksPage,
});

const talks = [
  { year: "2024", title: "Pedagogy in postgraduate management education", venue: "National conference, India" },
  { year: "2023", title: "Doctoral supervision: practice and reflection", venue: "Faculty development programme" },
  { year: "2022", title: "Organisational behaviour in changing workplaces", venue: "Invited lecture, university" },
  { year: "2021", title: "Research methodology for the social sciences", venue: "Workshop series" },
];

const recognition = [
  { title: "Distinguished service in higher education", body: "Recognised for sustained contribution to teaching and mentorship." },
  { title: "Best paper, peer-reviewed conference", body: "Awarded for contribution to management research." },
  { title: "Doctoral supervision recognition", body: "Acknowledged for mentoring scholars to successful completion." },
];

function TalksPage() {
  return (
    <>
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-narrow page-section">
          <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--navy)" }}>
            Talks & Recognition
          </p>
          <h1>Lectures, keynotes and honours</h1>
          <p className="mt-5 max-w-2xl text-[13px] leading-[1.7]">
            A selection of invited lectures, conference talks and recognitions received over the
            course of an academic career.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-narrow page-section">
          <h2 className="section-title">Selected talks</h2>
          <ul className="divide-y" style={{ borderTop: "0.5px solid var(--border-subtle)", borderBottom: "0.5px solid var(--border-subtle)" }}>
            {talks.map((t) => (
              <li key={t.title} className="grid grid-cols-[80px_1fr] gap-6 py-5">
                <span className="text-[12px] font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--navy)" }}>
                  {t.year}
                </span>
                <div>
                  <p className="text-[14px] font-medium" style={{ color: "var(--navy)" }}>{t.title}</p>
                  <p className="mt-1 text-[12px]">{t.venue}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-narrow page-section">
          <h2 className="section-title">Recognition</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {recognition.map((r) => (
              <div key={r.title} className="cream-card">
                <p className="text-[14px] font-medium" style={{ color: "var(--navy)" }}>{r.title}</p>
                <p className="mt-2 text-[13px]">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
