import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mentorship")({
  head: () => ({
    meta: [
      { title: "Mentorship — Dr. A. S. Suresh" },
      {
        name: "description",
        content:
          "Mentoring postgraduate and doctoral scholars in research design, publication and academic career development.",
      },
      { property: "og:title", content: "Mentorship — Dr. A. S. Suresh" },
      {
        property: "og:description",
        content:
          "Practical, grounded mentorship for students, doctoral scholars and faculty.",
      },
    ],
  }),
  component: MentorshipPage,
});

const helpAreas = [
  "Thesis and dissertation guidance at postgraduate level",
  "Research design, methodology, and data analysis",
  "Preparing work for publication in peer-reviewed journals",
  "Conference paper development and presentation preparation",
  "Faculty development in outcome-based education and academic writing",
  "Career guidance for students entering management roles",
];

const testimonials = [
  { quote: "Your testimonial here.", name: "Name", role: "MBA, Institution Name" },
  { quote: "Your testimonial here.", name: "Name", role: "PhD Scholar, Institution Name" },
  { quote: "Your testimonial here.", name: "Name", role: "Institution Name" },
];

function MentorshipPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-narrow page-section">
          <p
            className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: "var(--navy)" }}
          >
            Mentorship
          </p>
          <h1>Working with Students and Researchers</h1>
          <p className="mt-6 max-w-3xl text-[13px] leading-[1.7]">
            Over the course of my academic career I have mentored more than 100 Master's students
            through their thesis research, guided PhD scholars in research design and methodology,
            and delivered faculty development programs across multiple institutions. Mentorship is
            not something I treat as peripheral to my role: it is central to it. I believe good
            mentorship means meeting people where they are. Whether you are a postgraduate student
            navigating your first empirical study, a doctoral scholar trying to position your work
            for publication, or a faculty member looking to strengthen your research output, the
            support I offer is practical, honest, and grounded in real academic and industry
            experience.
          </p>
        </div>
      </section>

      {/* What I Can Help With */}
      <section className="bg-white">
        <div className="container-narrow page-section">
          <h2 className="section-title">What I Can Help With</h2>
          <div className="max-w-3xl">
            <ul style={{ borderTop: "0.5px solid var(--border-subtle)" }}>
              {helpAreas.map((a) => (
                <li
                  key={a}
                  className="py-4 text-[13px]"
                  style={{ borderBottom: "0.5px solid var(--border-subtle)" }}
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Book a Session */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-narrow page-section text-center">
          <h2 className="section-title">Book a Session</h2>
          <p className="mx-auto max-w-2xl">
            If you would like to discuss your research or academic goals, you are welcome to book a
            one-on-one session using the link below.
          </p>
          <div className="mt-10">
            <a
              href="#"
              aria-label="Book a session — Calendly link coming soon"
              className="btn-navy"
              style={{ padding: "16px 32px", fontSize: 13 }}
            >
              Book a Session
            </a>
            <p
              className="mt-4 text-[11px] italic"
              style={{ color: "var(--muted-foreground)" }}
            >
              Calendly link coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white">
        <div className="container-narrow page-section">
          <h2 className="section-title">What People Say</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure key={i} className="cream-card flex flex-col">
                <blockquote
                  className="text-[13px] italic leading-[1.7]"
                  style={{ color: "var(--charcoal, #555)" }}
                >
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="text-[14px] font-medium" style={{ color: "var(--navy)" }}>
                    {t.name}
                  </p>
                  <p
                    className="mt-1 text-[12px]"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {t.role}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
