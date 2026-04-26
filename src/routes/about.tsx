import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dr. A. S. Suresh" },
      {
        name: "description",
        content:
          "Academic leader and corporate strategist with 36+ years across senior industry roles and higher education. Biography, education, certifications and languages.",
      },
      { property: "og:title", content: "About — Dr. A. S. Suresh" },
      {
        property: "og:description",
        content:
          "Academic leader and corporate strategist with 36+ years across industry and higher education.",
      },
    ],
  }),
  component: AboutPage,
});

const education = [
  "PhD in Retail Management, SCSVM University, 2023",
  "MPhil in Retail Management, Christ University, 2012",
  "Master of Commerce, Bachelor of Commerce, Bachelor of Laws",
  "Honorary Doctorate, D.Litt, 2024",
];

const certifications = [
  "Strategic Management (Global Executive Programs)",
  "Negotiation and Leadership, University of Michigan",
  "Digital Marketing and Business Analytics",
];

const languages = [
  "Tamil (native)",
  "English and Hindi (fluent)",
  "Kannada, Marathi, Punjabi, Telugu (conversational)",
];

function CleanList({ items }: { items: string[] }) {
  return (
    <ul style={{ borderTop: "0.5px solid var(--border-subtle)" }}>
      {items.map((item) => (
        <li
          key={item}
          className="py-4 text-[13px]"
          style={{ borderBottom: "0.5px solid var(--border-subtle)", color: "var(--charcoal, #555)" }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-narrow page-section">
          <p
            className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: "var(--navy)" }}
          >
            About
          </p>
          <h1>Who I Am</h1>
          <p className="mt-6 max-w-3xl text-[13px] leading-[1.7]">
            I am an academic leader and corporate strategist with over 36 years of experience
            spanning senior industry roles and higher education administration. My career sits at
            the intersection of business practice and academic rigour, and that combination is what
            drives everything I do, from how I lead institutions to how I design curricula and
            mentor students.
          </p>
        </div>
      </section>

      {/* Corporate Years */}
      <section className="bg-white">
        <div className="container-narrow page-section">
          <h2 className="section-title">My Corporate Years</h2>
          <p className="max-w-3xl">
            I spent over two decades in leadership positions across some of India's most recognised
            organisations: Whirlpool of India, Havells India, Jain Irrigation Systems, Subhiksha
            Trading Services, BPL, TCL India, Dunlop India, Saregama (HMV), PHI Seeds (DuPont
            India), and Gestetner (Ricoh Group). Across these roles I worked in strategic planning,
            financial management, supply chain optimisation, and business transformation, operating
            at a senior level across consumer durables, retail, manufacturing, agri-business, and
            services. That experience gave me something I could not have learned in a classroom: a
            ground-level understanding of how organisations actually function, how markets shift,
            and how leadership decisions play out in practice.
          </p>
        </div>
      </section>

      {/* Moving into Academia */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-narrow page-section">
          <h2 className="section-title">Moving into Academia</h2>
          <p className="max-w-3xl">
            I transitioned into academia carrying that industry perspective with me. Since 2011 I
            have held leadership roles at Christ University Bangalore, SGT University, Symbiosis
            University of Applied Sciences, Aditya School of Business Management Mumbai, and
            currently Doon Business School in Dehradun, where I serve as Professor and Director. My
            focus across all these institutions has been the same: building research cultures,
            integrating industry into the classroom, and preparing students for a world that moves
            faster than any textbook can keep up with.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="bg-white">
        <div className="container-narrow page-section">
          <h2 className="section-title">Education</h2>
          <div className="max-w-3xl">
            <CleanList items={education} />
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-narrow page-section">
          <h2 className="section-title">Certifications</h2>
          <div className="max-w-3xl">
            <CleanList items={certifications} />
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="bg-white">
        <div className="container-narrow page-section">
          <h2 className="section-title">Languages</h2>
          <div className="max-w-3xl">
            <CleanList items={languages} />
          </div>
        </div>
      </section>
    </>
  );
}
