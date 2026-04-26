import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Dr. A. S. Suresh Iyer" },
      { name: "description", content: "Research interests, publications, book chapters and conference contributions." },
      { property: "og:title", content: "Research — Dr. A. S. Suresh Iyer" },
      { property: "og:description", content: "Publications, book chapters and conference contributions." },
    ],
  }),
  component: ResearchPage,
});

const interests = [
  "Strategic management and organisational change",
  "Leadership and organisational behaviour",
  "Higher education and pedagogy",
  "Qualitative and mixed-methods research",
];

const publications = [
  { type: "Journal Article", title: "Reflections on management pedagogy in Indian higher education", venue: "Peer-reviewed journal" },
  { type: "Journal Article", title: "Organisational behaviour in cross-cultural settings", venue: "Peer-reviewed journal" },
  { type: "Book Chapter", title: "Leadership development frameworks: a critical review", venue: "Edited volume" },
  { type: "Conference Paper", title: "Doctoral supervision practices: lessons from a decade of mentoring", venue: "International conference" },
  { type: "Working Paper", title: "Pedagogy, practice and policy in management education", venue: "Working paper series" },
];

function ResearchPage() {
  return (
    <>
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-narrow page-section">
          <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--navy)" }}>
            Research
          </p>
          <h1>Inquiry across management and the social sciences</h1>
          <p className="mt-5 max-w-2xl text-[13px] leading-[1.7]">
            Peer-reviewed publications, book chapters and conference contributions exploring
            organisational behaviour, leadership, pedagogy and research methodology.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-narrow page-section">
          <h2 className="section-title">Research interests</h2>
          <ul className="grid gap-3 md:grid-cols-2 max-w-3xl">
            {interests.map((i) => (
              <li key={i} className="text-[13px]" style={{ borderLeft: "2px solid var(--navy)", paddingLeft: "12px" }}>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-narrow page-section">
          <h2 className="section-title">Selected publications</h2>
          <ul className="space-y-4">
            {publications.map((p) => (
              <li key={p.title} className="cream-card">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--navy)" }}>
                  {p.type}
                </p>
                <p className="mt-2 text-[14px] font-medium" style={{ color: "var(--navy)" }}>{p.title}</p>
                <p className="mt-1 text-[12px]">{p.venue}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-narrow page-section">
          <h2 className="section-title">Profiles</h2>
          <ul className="space-y-2 max-w-3xl">
            <li>
              <a href="https://scholar.google.com/citations?user=2Ju3wFoAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-[13px] underline-offset-4 hover:underline">
                Google Scholar →
              </a>
            </li>
            <li>
              <a href="https://orcid.org/0000-0002-1719-023X" target="_blank" rel="noopener noreferrer" className="text-[13px] underline-offset-4 hover:underline">
                ORCID →
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
