import { APPS } from "@/lib/data";

const SET = APPS.slice(0, 10);
const DOUBLED = [...SET, ...SET];

export default function LogoMarquee() {
  return (
    <section className="logos">
      <div className="wrap">
        <div className="logos-lab">Yisuka connects the systems you already run on</div>
        <div className="marquee">
          <div className="marquee-track">
            {DOUBLED.map(([name, color, glyph, icon], i) => (
              <div className="logo-chip" key={i}>
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
          </div>
        </div>
      </div>
    </section>
  );
}
