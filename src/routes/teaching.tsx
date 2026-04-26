import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/teaching")({
  head: () => ({
    meta: [
      { title: "Teaching — Dr. A. S. Suresh Iyer" },
      { name: "description", content: "Courses taught, teaching philosophy, and academic instruction by Dr. A. S. Suresh Iyer." },
      { property: "og:title", content: "Teaching — Dr. A. S. Suresh Iyer" },
      { property: "og:description", content: "Courses, teaching philosophy and academic instruction." },
    ],
  }),
  component: TeachingPage,
});

const courses = [
  { level: "Doctoral", title: "Research Methodology", desc: "Foundations of academic research, design, and ethics." },
  { level: "Postgraduate", title: "Strategic Management", desc: "Frameworks for analysing organisational strategy." },
  { level: "Postgraduate", title: "Organisational Behaviour", desc: "Individuals, groups, and structures in organisations." },
  { level: "Postgraduate", title: "Human Resource Management", desc: "People practices, policy and leadership." },
  { level: "Undergraduate", title: "Principles of Management", desc: "Core concepts and the manager's role." },
  { level: "Undergraduate", title: "Business Communication", desc: "Professional writing, presentation and discourse." },
];

function TeachingPage() {
  return (
    <>
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-narrow page-section">
          <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--navy)" }}>
            Teaching
          </p>
          <h1>Instruction across levels and disciplines</h1>
          <p className="mt-5 max-w-2xl text-[13px] leading-[1.7]">
            Decades of university-level teaching, with an emphasis on critical thinking, evidence-based
            inquiry and the practical application of theory.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-narrow page-section">
          <h2 className="section-title">Teaching philosophy</h2>
          <div className="space-y-4 max-w-3xl">
            <p>
              Teaching is most effective when it invites the learner into rigorous, structured inquiry.
              Each course is designed to build conceptual clarity, methodological discipline, and the
              confidence to question assumptions.
            </p>
            <p>
              Classroom sessions combine lectures, discussion, case analysis and writing exercises so
              that students develop both depth of knowledge and breadth of perspective.
            </p>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-narrow page-section">
          <h2 className="section-title">Selected courses</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {courses.map((c) => (
              <div key={c.title} className="cream-card">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--navy)" }}>
                  {c.level}
                </p>
                <p className="mt-2 text-[14px] font-medium" style={{ color: "var(--navy)" }}>{c.title}</p>
                <p className="mt-2 text-[13px]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
