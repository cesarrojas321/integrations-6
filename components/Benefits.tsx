import UseReveal from "@/components/UseReveal";

const BENEFITS = [
  {
    metric: "40h",
    title: "Reclaimed weekly",
    desc: "Teams recover entire workdays once repetitive data entry and copy-paste flows run on their own.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
  },
  {
    metric: "98%",
    title: "Error reduction",
    desc: "Validated field mapping and built-in error handling mean clean data flowing between systems, every time.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 6 9 17l-5-5" /></svg>,
  },
  {
    metric: "10×",
    title: "Faster cycles",
    desc: "Processes that took days now complete in seconds — orders, approvals, onboarding, and reporting.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M13 2 3 14h7l-1 8 10-12h-7z" /></svg>,
  },
  {
    metric: "SOC 2",
    title: "Governed & secure",
    desc: "Enterprise iPaaS foundations: role-based access, audit logs, and encrypted connections by default.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  },
];

export default function Benefits() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <UseReveal className="section-head">
          <span className="kicker">Why automate</span>
          <h2>Less manual work. Fewer mistakes. More throughput.</h2>
          <p>Every handoff between two tools is an opportunity for delay and human error. We remove the handoff entirely.</p>
        </UseReveal>
        <div className="bgrid">
          {BENEFITS.map((b) => (
            <UseReveal key={b.title} className="benefit">
              <div className="ic">{b.icon}</div>
              <div className="metric">{b.metric}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </UseReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
