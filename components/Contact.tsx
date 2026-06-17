"use client";

import { useState } from "react";

const AREAS = ["Finance", "Sales / CRM", "People / HR", "Operations", "Other"];

export default function Contact() {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section dark" id="contact">
      <a id="request" />
      <div className="wrap">
        <div className="section-head center reveal in" style={{ marginLeft: "auto", marginRight: "auto" }}>
          <span className="kicker">Work with us</span>
          <h2>Tell us what&apos;s slowing your team down.</h2>
          <p>Request a custom build, or talk to us about an enterprise automation program.</p>
        </div>

        <div className="split">
          <div className="split-left">
            <h3>Request an automation</h3>
            <p className="lead">Describe the process. We&apos;ll scope it and reply within one business day.</p>
            <form onSubmit={handleSubmit} noValidate>
              <div className="field-row">
                <div className="field">
                  <label>Full name</label>
                  <input type="text" placeholder="Jordan Reyes" required />
                </div>
                <div className="field">
                  <label>Work email</label>
                  <input type="email" placeholder="jordan@company.com" required />
                </div>
              </div>
              <div className="field">
                <label>Which area?</label>
                <div className="pillset">
                  {AREAS.map((a) => (
                    <span
                      key={a}
                      className={`opt${selected === a ? " sel" : ""}`}
                      onClick={() => setSelected(a)}
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
              <div className="field">
                <label>What should it do?</label>
                <textarea placeholder="e.g. When a deal is marked Won in Salesforce, create the customer in NetSuite and kick off onboarding in Asana…" />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block"
                style={{ marginTop: 6, ...(submitted ? { background: "oklch(0.55 0.13 155)" } : {}) }}
                disabled={submitted}
              >
                {submitted ? "✓ Request sent — we'll reply within 1 business day" : (
                  <>Send request <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></>
                )}
              </button>
            </form>
          </div>

          <div className="split-right">
            <h3>Enterprise program</h3>
            <p className="lead">For teams automating across multiple departments and systems.</p>
            <ul className="enterprise-list">
              {[
                "Dedicated automation architect & roadmap",
                "Managed Workato workspace & governance",
                "SLA-backed monitoring & on-call support",
                "Team enablement via Automation School",
              ].map((item) => (
                <li key={item}>
                  <span className="tick">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#" className="btn btn-light btn-block">Talk to sales</a>
            <div className="contact-aside">
              <a href="mailto:info@yisuka-pro.com">
                <span className="ci">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                info@yisuka-pro.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
