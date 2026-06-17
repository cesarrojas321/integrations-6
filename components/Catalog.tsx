"use client";

import { useState } from "react";
import { CATALOG, GLYPH_COLOR } from "@/lib/data";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "finance", label: "Finance" },
  { key: "sales", label: "Sales & CRM" },
  { key: "hr", label: "People & HR" },
  { key: "ops", label: "Operations" },
];

export default function Catalog() {
  const [active, setActive] = useState("all");
  const items = CATALOG.filter((c) => active === "all" || c.filter === active);

  return (
    <section className="section" id="catalog">
      <div className="wrap">
        <div className="cat-head reveal in">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <span className="kicker">Automation catalog</span>
            <h2>Proven automations, ready to adapt.</h2>
            <p>Start from a battle-tested recipe and we&apos;ll tailor it to your stack — or commission something entirely custom.</p>
          </div>
          <div className="filters">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className={`chip${active === f.key ? " active" : ""}`}
                onClick={() => setActive(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="cards">
          {items.map((c) => (
            <article key={c.title} className="acard">
              <div className="acard-top">
                <span className="dept">{c.dept}</span>
                <span className="flowmini">
                  <i style={{ background: GLYPH_COLOR[c.flow[0]] || "#475569" }}>{c.flow[0]}</i>
                  <span className="ar">→</span>
                  <i style={{ background: GLYPH_COLOR[c.flow[1]] || "#475569" }}>{c.flow[1]}</i>
                </span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <div className="acard-foot">
                <span className="saves">Saves <b>{c.saves}</b></span>
                <a href="#request" className="link-arrow">Deploy this →</a>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 44 }}>
          <a href="#request" className="btn btn-ghost">
            Need something custom? Request a build
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
