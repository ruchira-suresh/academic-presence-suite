import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/talks")({
  head: () => ({
    meta: [
      { title: "Talks & Recognition — Dr. A. S. Suresh" },
      {
        name: "description",
        content:
          "Awards, honours, patents and selected international conference presentations across consumer behaviour, retail, AI-driven marketing and sustainability.",
      },
      { property: "og:title", content: "Talks & Recognition — Dr. A. S. Suresh" },
      {
        property: "og:description",
        content: "Awards, patents and selected conference presentations.",
      },
    ],
  }),
  component: TalksPage,
});

const awards = [
  "Best Paper Awards at multiple national and international conferences",
  "Honorary Doctorate, D.Litt, 2024",
];

const patents = [
  { title: "AI-Based Helpdesk Analytics System", office: "UK Patent" },
  { title: "Agile Project Management Interactive System", office: "India Patent" },
];

const conferences = [
  {
    year: "2025",
    title: "ICICFT 2025, CMR University, Bangalore",
    detail:
      "November 2025. 12 papers presented covering sustainable retail, consumer psyche, fast fashion strategy, and behavioural investment dynamics.",
  },
  {
    year: "2025",
    title: "DREAMS 2025",
    detail:
      "International Conference on Digital Resilience, Ecological Advancement, Management and Sustainability.",
  },
  {
    year: "2024",
    title: "International Conference, University of Engineering and Management, Kolkata",
    detail: "Topics covering AI-driven marketing, mindful consumption, and digital transformation in B2B.",
  },
  {
    year: "2023",
    title: "IEEE International Conference, Amity University, India",
    detail: "Topic: co-creation and consumer brand engagement.",
  },
  {
    year: "2022",
    title: "43rd World Congress",
    detail: "Topic: profiling consumers using LDA, random forest and ANN models.",
  },
  {
    year: "2021",
    title: "International Conferences, Christ University Ghaziabad",
    detail: "Topics covering sustainability, luxury brand consumption, organic food, and Instagram influencers.",
  },
  {
    year: "2018",
    title: "International Conference, Skyline University College, Dubai, UAE",
    detail: "",
  },
];

function TalksPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-narrow page-section">
          <p
            className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: "var(--navy)" }}
          >
            Talks & Recognition
          </p>
          <h1>Awards, Patents and Conference Presentations</h1>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-white">
        <div className="container-narrow page-section">
          <h2 className="section-title">Awards and Honours</h2>
          <div className="max-w-3xl">
            <ul style={{ borderTop: "0.5px solid var(--border-subtle)" }}>
              {awards.map((a) => (
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

      {/* Patents */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-narrow page-section">
          <h2 className="section-title">Patents</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {patents.map((p) => (
              <div
                key={p.title}
                className="p-7"
                style={{
                  backgroundColor: "var(--white, #ffffff)",
                  border: "0.5px solid var(--border-subtle)",
                }}
              >
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: "var(--navy)" }}
                >
                  {p.office}
                </p>
                <h3 className="mt-3 text-[15px] leading-snug">{p.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conference Presentations */}
      <section className="bg-white">
        <div className="container-narrow page-section">
          <h2 className="section-title">Selected Conference Presentations</h2>
          <ul>
            {conferences.map((c, i) => (
              <li
                key={i}
                className="grid grid-cols-1 gap-3 py-6 md:grid-cols-[120px_1fr] md:gap-10"
                style={{
                  borderTop: i === 0 ? "0.5px solid var(--border-subtle)" : "none",
                  borderBottom: "0.5px solid var(--border-subtle)",
                }}
              >
                <span
                  className="text-[12px] font-medium uppercase tracking-[0.12em]"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {c.year}
                </span>
                <div>
                  <p className="text-[14px] font-medium" style={{ color: "var(--navy)" }}>
                    {c.title}
                  </p>
                  {c.detail && <p className="mt-2 text-[13px]">{c.detail}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
