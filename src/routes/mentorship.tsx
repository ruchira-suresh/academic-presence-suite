import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mentorship")({
  head: () => ({
    meta: [
      { title: "Mentorship — Dr. A. S. Suresh Iyer" },
      { name: "description", content: "Doctoral and postgraduate supervision, guiding scholars through rigorous research." },
      { property: "og:title", content: "Mentorship — Dr. A. S. Suresh Iyer" },
      { property: "og:description", content: "Doctoral and postgraduate supervision." },
    ],
  }),
  component: MentorshipPage,
});

function MentorshipPage() {
  return (
    <>
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-narrow page-section">
          <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--navy)" }}>
            Mentorship
          </p>
          <h1>Guiding scholars through rigorous inquiry</h1>
          <p className="mt-5 max-w-2xl text-[13px] leading-[1.7]">
            Supervision of doctoral and postgraduate students across management, organisational studies
            and the social sciences — from research design through to defence and publication.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-narrow page-section">
          <h2 className="section-title">Supervision approach</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { t: "Framing", d: "Helping scholars sharpen the research question and locate it within the literature." },
              { t: "Method", d: "Selecting and applying methods that genuinely answer the question being asked." },
              { t: "Voice", d: "Developing the scholar's own academic voice and writing discipline." },
            ].map((s) => (
              <div key={s.t}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--navy)" }}>{s.t}</p>
                <p className="mt-2 text-[13px]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-narrow page-section">
          <h2 className="section-title">Areas of supervision</h2>
          <div className="grid gap-3 md:grid-cols-2 max-w-3xl">
            {[
              "Strategic and general management",
              "Organisational behaviour and leadership",
              "Human resource management",
              "Marketing and consumer studies",
              "Higher education and pedagogy",
              "Qualitative and mixed-methods research",
            ].map((a) => (
              <div key={a} className="cream-card">
                <p className="text-[13px]">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-narrow page-section">
          <h2 className="section-title">For prospective scholars</h2>
          <p className="max-w-3xl">
            Prospective doctoral candidates are encouraged to send a brief note describing their
            research interests, prior work and motivation. Initial conversations focus on the fit
            between the candidate's questions and the supervisor's areas of expertise.
          </p>
        </div>
      </section>
    </>
  );
}
