import UseReveal from "@/components/UseReveal";
import { TEAM } from "@/lib/data";

export default function Team() {
  return (
    <section className="section" id="team">
      <div className="wrap">
        <UseReveal className="section-head">
          <span className="kicker">The team</span>
          <h2>Certified automation engineers.</h2>
          <p>Workato-certified builders who&apos;ve shipped integrations across finance, revenue, and operations.</p>
        </UseReveal>
        <div className="team-grid">
          {TEAM.map((m) => (
            <UseReveal key={m.name} className="member">
              <div className="member-photo">
                <div className="ph-grid" />
                <span className="ph-lab">[ portrait ]</span>
              </div>
              <h3>{m.name}</h3>
              <div className="role">{m.role}</div>
              <div className="certs">{m.certs}</div>
            </UseReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
