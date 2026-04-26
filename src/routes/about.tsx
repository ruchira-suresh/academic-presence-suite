import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dr. A. S. Suresh Iyer" },
      { name: "description", content: "Biography, academic background, and professional positions of Dr. A. S. Suresh Iyer." },
      { property: "og:title", content: "About — Dr. A. S. Suresh Iyer" },
      { property: "og:description", content: "Biography, academic background, and professional positions." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-narrow page-section">
          <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--navy)" }}>
            About
          </p>
          <h1>Educator, mentor and researcher</h1>
          <p className="mt-5 max-w-2xl text-[13px] leading-[1.7]">
            A career spanning university teaching, postgraduate supervision and scholarly research,
            with a focus on rigorous methodology, ethical inquiry and student development.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-narrow page-section">
          <h2 className="section-title">Biography</h2>
          <div className="space-y-5 max-w-3xl">
            <p>
              Dr. A. S. Suresh Iyer is a senior academic with extensive experience across teaching,
              research and institutional leadership. His work bridges classroom instruction with
              applied research, helping students translate theory into practice.
            </p>
            <p>
              He has supervised doctoral and postgraduate scholars across diverse fields, contributed
              to peer-reviewed journals, and participated in national and international academic forums.
            </p>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-narrow page-section">
          <h2 className="section-title">Academic background</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { d: "Ph.D.", t: "Doctorate in Management / Social Sciences" },
              { d: "M.Phil.", t: "Master of Philosophy" },
              { d: "Postgraduate", t: "Master's degree, advanced specialisation" },
              { d: "Undergraduate", t: "Bachelor's degree with honours" },
            ].map((q) => (
              <div key={q.d} className="cream-card">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--navy)" }}>{q.d}</p>
                <p className="mt-2 text-[13px]">{q.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-narrow page-section">
          <h2 className="section-title">Areas of focus</h2>
          <ul className="grid gap-3 md:grid-cols-2 max-w-3xl">
            {[
              "Higher education pedagogy",
              "Doctoral research supervision",
              "Management and organisational studies",
              "Qualitative and mixed-methods research",
              "Academic writing and publication",
              "Curriculum design and review",
            ].map((i) => (
              <li key={i} className="text-[13px]" style={{ borderLeft: "2px solid var(--navy)", paddingLeft: "12px" }}>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
