import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/teaching")({
  head: () => ({
    meta: [
      { title: "Teaching — Dr. A. S. Suresh" },
      {
        name: "description",
        content:
          "Teaching philosophy and approach: case-based learning, simulations, live industry projects and AI-enabled tools across MBA, PGDM and executive programs.",
      },
      { property: "og:title", content: "Teaching — Dr. A. S. Suresh" },
      {
        property: "og:description",
        content:
          "Learner-centred, application-driven teaching across marketing, retail, strategy and analytics.",
      },
    ],
  }),
  component: TeachingPage,
});

const subjects = [
  "Marketing Strategy",
  "Consumer Behaviour",
  "Retail Management",
  "Digital Marketing",
  "Strategic Management",
  "Business Analytics",
  "Sales and Distribution Management",
  "Services Marketing",
];

function TeachingPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-narrow page-section">
          <p
            className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: "var(--navy)" }}
          >
            Teaching
          </p>
          <h1>Teaching Philosophy</h1>
          <p className="mt-6 max-w-3xl text-[13px] leading-[1.7]">
            I approach teaching as a bridge between theoretical foundations and the realities of
            professional practice. Having spent over two decades in senior corporate roles before
            entering academia, I bring a perspective that most classrooms lack: not just knowledge
            of how business works in theory, but direct experience of how decisions are made under
            pressure, how markets behave, and how organisations succeed or fail. My teaching is
            learner-centred and application-driven. Rather than covering syllabus content for its
            own sake, I design learning experiences around real problems, live industry scenarios,
            and decisions that students will actually face in their careers.
          </p>
        </div>
      </section>

      {/* How I Teach */}
      <section className="bg-white">
        <div className="container-narrow page-section">
          <h2 className="section-title">How I Teach</h2>
          <p className="max-w-3xl">
            Case-based learning forms the backbone of my classroom, not as a passive exercise but as
            a space for genuine debate and analytical rigour. I supplement this with business
            simulations, live industry projects embedded into coursework, and AI-enabled tools that
            reflect the environments students will enter.
          </p>
        </div>
      </section>

      {/* What I Teach */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-narrow page-section">
          <h2 className="section-title">What I Teach</h2>
          <div className="max-w-3xl">
            <ul style={{ borderTop: "0.5px solid var(--border-subtle)" }}>
              {subjects.map((s) => (
                <li
                  key={s}
                  className="py-4 text-[13px]"
                  style={{ borderBottom: "0.5px solid var(--border-subtle)" }}
                >
                  {s}
                </li>
              ))}
            </ul>
            <p
              className="mt-5 text-[12px] italic"
              style={{ color: "var(--muted-foreground)" }}
            >
              Taught across MBA, PGDM, and executive programs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
