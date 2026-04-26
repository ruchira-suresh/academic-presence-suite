import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dr. A. S. Suresh" },
      {
        name: "description",
        content:
          "Get in touch with Dr. A. S. Suresh — Professor and Director, Doon Business School, Dehradun.",
      },
      { property: "og:title", content: "Contact — Dr. A. S. Suresh" },
      {
        property: "og:description",
        content: "Email, phone and academic profiles.",
      },
    ],
  }),
  component: ContactPage,
});

const details: { label: string; value: string; href?: string }[] = [
  { label: "Email", value: "sureshiyer1963@gmail.com", href: "mailto:sureshiyer1963@gmail.com" },
  { label: "Phone", value: "+91 7022627719", href: "tel:+917022627719" },
  { label: "Location", value: "Dehradun, Uttarakhand, India" },
  { label: "ORCID", value: "0000-0002-1719-023X" },
];

const profiles = [
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=2Ju3wFoAAAAJ&hl=en" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dr-a-s-suresh-iyer-5a522313" },
  { label: "ORCID", href: "https://orcid.org/0000-0002-1719-023X" },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "0.5px solid var(--border-subtle)",
    padding: "12px 0",
    fontSize: 13,
    color: "var(--charcoal, #555)",
    outline: "none",
    fontFamily: "inherit",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 11,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    color: "var(--navy)",
    display: "block",
    marginBottom: 8,
  };

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-narrow page-section">
          <p
            className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: "var(--navy)" }}
          >
            Contact
          </p>
          <h1>Get in Touch</h1>
          <p className="mt-6 max-w-2xl text-[13px] leading-[1.7]">
            For collaboration, doctoral supervision enquiries, speaking invitations or general
            correspondence, please use the details below.
          </p>
        </div>
      </section>

      {/* Contact details */}
      <section className="bg-white">
        <div className="container-narrow page-section">
          <h2 className="section-title">Contact Details</h2>
          <dl className="grid gap-10 md:grid-cols-2 max-w-3xl">
            {details.map((d) => (
              <div key={d.label}>
                <dt
                  className="text-[11px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: "var(--navy)" }}
                >
                  {d.label}
                </dt>
                <dd className="mt-3 text-[14px]" style={{ color: "var(--navy)" }}>
                  {d.href ? (
                    <a href={d.href} className="hover:underline underline-offset-4">
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Profiles */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div className="container-narrow page-section">
          <h2 className="section-title">Profiles</h2>
          <ul className="space-y-4">
            {profiles.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] underline underline-offset-4"
                  style={{ color: "var(--navy)" }}
                >
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white">
        <div className="container-narrow page-section">
          <h2 className="section-title">Send a Message</h2>

          {submitted ? (
            <div
              className="max-w-2xl p-6"
              style={{ border: "0.5px solid var(--border-subtle)", backgroundColor: "var(--cream)" }}
            >
              <p className="text-[14px]" style={{ color: "var(--navy)" }}>
                Thank you. Your message has been received.
              </p>
              <p className="mt-2 text-[13px]">A reply will follow at the email address provided.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl space-y-10">
              <div>
                <label htmlFor="name" style={labelStyle}>
                  Name
                </label>
                <input id="name" name="name" type="text" required style={inputStyle} />
              </div>
              <div>
                <label htmlFor="email" style={labelStyle}>
                  Email
                </label>
                <input id="email" name="email" type="email" required style={inputStyle} />
              </div>
              <div>
                <label htmlFor="message" style={labelStyle}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical", lineHeight: 1.7 }}
                />
              </div>
              <div className="pt-2">
                <button type="submit" className="btn-navy">
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
