import { APPS } from "@/lib/data";

type App = (typeof APPS)[number];

const byName = (n: string): App => APPS.find((a) => a[0] === n)!;

const LEFT: App[] = ["Slack", "Salesforce", "HubSpot", "Workday"].map(byName);
const RIGHT: App[] = ["Jira", "Microsoft 365", "Google", "Stripe"].map(byName);

function Node({ app, side, i }: { app: App; side: "left" | "right"; i: number }) {
  const [name, color, glyph, icon] = app;
  const tile = (
    <span className="ctile">
      {icon ? (
        <span className="glyph has-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={icon} alt={name} />
        </span>
      ) : (
        <span className="glyph" style={{ background: color }}>{glyph}</span>
      )}
    </span>
  );
  const line = <span className="cline" style={{ ["--d" as string]: `${i * 0.5}s` }} />;
  return (
    <div className={`cnode ${side}`} title={name}>
      {side === "left" ? (<>{line}{tile}</>) : (<>{tile}{line}</>)}
    </div>
  );
}

export default function ConnectTools() {
  return (
    <section className="connect dark">
      <div className="wrap">
        <div className="connect-frame">
          <span className="rail top" />
          <span className="rail bottom" />
          <div className="connect-grid">
            <div className="connect-side left">
              {LEFT.map((a, i) => <Node key={a[0]} app={a} side="left" i={i} />)}
            </div>
            <div className="connect-center">
              <h2>Connect with your favorite tools</h2>
              <p>Connect the tools you already run on with our growing library of 1,200+ integrations.</p>
            </div>
            <div className="connect-side right">
              {RIGHT.map((a, i) => <Node key={a[0]} app={a} side="right" i={i} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
