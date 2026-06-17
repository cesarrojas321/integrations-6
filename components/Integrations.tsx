import UseReveal from "@/components/UseReveal";
import { APPS } from "@/lib/data";

export default function Integrations() {
  const tiles = APPS.slice(0, 11);

  return (
    <section className="section dark" id="integrations">
      <div className="wrap int-inner">
        <UseReveal className="int-copy">
          <span className="kicker">Integrations</span>
          <h2 style={{ fontSize: "clamp(30px,3.6vw,46px)", marginTop: 18 }}>If it has an API, we can connect it.</h2>
          <p style={{ color: "var(--on-dark-soft)", fontSize: 17, marginTop: 18, maxWidth: 420 }}>Yisuka builds on Workato&apos;s library of 1,200+ connectors — plus custom HTTP connectors for the in-house tools that make you, you.</p>
          <div className="powered">
            <span className="wk">W</span>Powered by <b>Workato</b> Enterprise iPaaS
          </div>
        </UseReveal>

        <UseReveal className="int-grid">
          {tiles.map(([name, color, glyph, icon]) => (
            <div className="itile" key={name}>
              {icon ? (
                <span className="glyph has-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={icon} alt={name} />
                </span>
              ) : (
                <span className="glyph" style={{ background: color }}>{glyph}</span>
              )}
              <span>{name}</span>
            </div>
          ))}
          <div className="int-more">
            <span className="big">1,200+</span>
            <span>connectors</span>
          </div>
        </UseReveal>
      </div>
    </section>
  );
}
