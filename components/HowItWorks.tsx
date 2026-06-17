import UseReveal from "@/components/UseReveal";

const STEPS = [
  { n: "01", title: "Map the process", desc: "We sit with your team, document the current flow, and pinpoint exactly where time and accuracy leak.", tag: "Discovery · 2 days" },
  { n: "02", title: "Design the recipe", desc: "We architect the integration in Workato — triggers, actions, field mapping, and error handling.", tag: "Blueprint · 3 days" },
  { n: "03", title: "Build & test", desc: "We build in a sandbox, run real data through it, and validate every edge case before go-live.", tag: "Build · 1–2 weeks", accent: true },
  { n: "04", title: "Launch & monitor", desc: "We ship to production and keep watch — alerts, dashboards, and ongoing optimization.", tag: "Live + support" },
];

export default function HowItWorks() {
  return (
    <section className="section alt" id="how">
      <div className="wrap">
        <UseReveal className="section-head">
          <span className="kicker">How it works</span>
          <h2>From bottleneck to live recipe in four steps.</h2>
          <p>A clear, fixed-scope engagement. You always know what you&apos;re getting and when.</p>
        </UseReveal>
        <div className="steps">
          {STEPS.map((s) => (
            <UseReveal key={s.n} className={`step${s.accent ? " is-accent" : ""}`}>
              <div className="n">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="tag">{s.tag}</span>
            </UseReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
