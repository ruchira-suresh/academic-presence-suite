import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Dr. A. S. Suresh" },
      {
        name: "description",
        content:
          "Research across consumer behaviour, retail management, digital marketing and sustainability. 45+ publications, 206+ citations, h-index 7.",
      },
      { property: "og:title", content: "Research — Dr. A. S. Suresh" },
      {
        property: "og:description",
        content:
          "45+ publications across consumer behaviour, retail, digital marketing and sustainability.",
      },
    ],
  }),
  component: ResearchPage,
});

type Pub = {
  authors: string;
  year: string;
  title: string;
  venue: string;
  tags: string[];
};

const themes: { heading: string; bg: "white" | "cream"; pubs: Pub[] }[] = [
  {
    heading: "Consumer Behaviour and Decision Science",
    bg: "white",
    pubs: [
      {
        authors: "Suresh and Biswas",
        year: "2020",
        title: "Internet addiction and compulsive buying behaviour",
        venue: "Global Business Review",
        tags: ["Scopus", "Web of Science", "ABDC-C"],
      },
      {
        authors: "Suresh and Balaji",
        year: "2021",
        title: "Instagram influencer likeability and buying intention toward cosmetic products",
        venue: "Indian Journal of Ecology",
        tags: ["Scopus"],
      },
      {
        authors: "Suresh and Sharma",
        year: "2021",
        title: "Luxury brand consumption and consumer purchase intentions",
        venue: "Indian Journal of Ecology",
        tags: ["Scopus"],
      },
      {
        authors: "Suresh and Ramanathan",
        year: "2021",
        title: "M-commerce and purchase intention during COVID-19",
        venue: "Indian Journal of Ecology",
        tags: ["Scopus"],
      },
    ],
  },
  {
    heading: "Retail Management and Marketing Strategy",
    bg: "cream",
    pubs: [
      {
        authors: "Suresh, Vasudevan and Vinod",
        year: "2021",
        title: "Factors influencing intermediaries in consumer healthcare supply chains",
        venue: "Journal of Distribution Science",
        tags: ["Scopus"],
      },
      {
        authors: "Suresh and Soni",
        year: "2025",
        title: "Consumer-centric innovation in smart retail AR, VR and Industry 4.0",
        venue: "IGI Global",
        tags: ["Scopus"],
      },
      {
        authors: "Suresh",
        year: "2019",
        title: "A Study on the Value Chain of Domestic Multi-Brand Retail",
        venue: "GRIN Verlag, Munich",
        tags: ["Book"],
      },
    ],
  },
  {
    heading: "Digital Marketing and AI",
    bg: "white",
    pubs: [
      {
        authors: "Kumar, Vihari, Yadav, Suresh et al.",
        year: "2024",
        title: "Mapping AI-driven marketing: review and future directions",
        venue: "Artificial Intelligence Journal",
        tags: ["Scopus"],
      },
      {
        authors: "Suresh, Vasa, Sharma and Mahajan",
        year: "2024",
        title: "Service adoption using the SERVQUAL paradigm in self-drive rental",
        venue: "Innovative Marketing",
        tags: ["Scopus"],
      },
      {
        authors: "Tiwari, Kumar, Suresh and Sharma",
        year: "2024",
        title: "Balancing work and life in academia",
        venue: "Emerald Insight Journal",
        tags: ["Scopus", "ABDC-B"],
      },
    ],
  },
  {
    heading: "Sustainability and Ethics",
    bg: "cream",
    pubs: [
      {
        authors: "Chakraborty, Suresh et al.",
        year: "2025",
        title: "Sustainability in hospitality: bibliometric synthesis",
        venue: "Advances in Consumer Research",
        tags: ["Scopus", "ABDC-B"],
      },
      {
        authors: "Balaji and Suresh",
        year: "2021",
        title: "Consumer perception and attitude toward organic food in India",
        venue: "Indian Journal of Ecology",
        tags: ["Scopus"],
      },
      {
        authors: "Chakraborty, Suresh et al.",
        year: "2025",
        title: "Brand trendiness, emotional identity and behavioural loyalty in Indian fashion",
        venue: "Journal of Asia Entrepreneurship and Sustainability",
        tags: ["ABDC-C"],
      },
    ],
  },
];

function PubCard({ pub }: { pub: Pub }) {
  return (
    <article
      className="p-6"
      style={{
        backgroundColor: "var(--white, #ffffff)",
        border: "0.5px solid var(--border-subtle)",
      }}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span
          className="text-[11px] font-semibold uppercase tracking-[0.14em]"
          style={{ color: "var(--navy)" }}
        >
          {pub.year}
        </span>
        {pub.tags.map((t) => (
          <span
            key={t}
            className="px-2 py-[3px] text-[10px] font-medium uppercase tracking-[0.12em]"
            style={{ color: "var(--navy)", border: "0.5px solid var(--navy)" }}
          >
            {t}
          </span>
        ))}
      </div>
      <h3 className="mt-4 text-[15px] leading-snug">{pub.title}</h3>
      <p className="mt-3 text-[12px]" style={{ color: "var(--charcoal, #555)" }}>
        {pub.authors}
      </p>
      <p className="mt-1 text-[12px] italic" style={{ color: "var(--muted-foreground)" }}>
        {pub.venue}
      </p>
    </article>
  );
}

function ResearchPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-narrow page-section">
          <p
            className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: "var(--navy)" }}
          >
            Research
          </p>
          <h1>Research and Publications</h1>
          <p className="mt-6 max-w-3xl text-[13px] leading-[1.7]">
            My research spans consumer behaviour, retail management, digital marketing, and
            sustainability. I have 45+ publications including 14 in Scopus and Web of Science
            indexed journals, 206+ citations, an h-index of 7, and an i10-index of 4.
          </p>
          <div className="mt-8">
            <a
              href="https://scholar.google.com/citations?user=2Ju3wFoAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-navy"
            >
              View Full Publication List
            </a>
          </div>
        </div>
      </section>

      {/* Themed sections */}
      {themes.map((theme) => (
        <section
          key={theme.heading}
          style={{
            backgroundColor: theme.bg === "cream" ? "var(--cream)" : "var(--white, #ffffff)",
          }}
          className={theme.bg === "white" ? "bg-white" : ""}
        >
          <div className="container-narrow page-section">
            <h2 className="section-title">{theme.heading}</h2>
            <div className="grid gap-5 md:grid-cols-2">
              {theme.pubs.map((p, i) => (
                <PubCard key={i} pub={p} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
