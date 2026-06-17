import HeroCanvas from "./HeroCanvas";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <HeroCanvas mode="constellation" />
      <div className="hero-glow" />
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <div className="hero-tag">
            <span className="dot" />
            Built on <b>Workato</b> &nbsp;·&nbsp; Enterprise-grade iPaaS
          </div>
          <h1>Put your busywork on <em>autopilot.</em></h1>
          <p className="hero-sub">Yisuka designs, builds, and maintains the integrations that connect your tools and eliminate manual work — so your team ships outcomes, not spreadsheets.</p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-light">
              Book a discovery call
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <a href="#catalog" className="btn btn-ghost" style={{ color: "#fff" }}>Browse automations</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><div className="num"><em>1,200+</em></div><div className="lbl">hours saved / mo</div></div>
            <div className="hero-stat"><div className="num">98%</div><div className="lbl">fewer manual errors</div></div>
            <div className="hero-stat"><div className="num">3&nbsp;wks</div><div className="lbl">avg. time to launch</div></div>
          </div>
        </div>

        <div className="hero-recipe-wrap">
          <div className="recipe live-run">
            <div className="recipe-bar">
              <div className="dots"><i /><i /><i /></div>
              <span className="name">order-to-cash.recipe</span>
              <span className="live">RUNNING</span>
            </div>
            <div className="node" style={{ ["--seq" as string]: 0 }}>
              <span className="ic" style={{ background: "#3F1F4D" }}>S</span>
              <div><div className="t">New Shopify order</div><div className="s">trigger · real-time</div></div>
              <span className="badge">142 today</span>
            </div>
            <div className="connector" style={{ ["--seq" as string]: 0 }} />
            <div className="node" style={{ ["--seq" as string]: 1 }}>
              <span className="ic" style={{ background: "#1A6CB5" }}>N</span>
              <div><div className="t">Create NetSuite invoice</div><div className="s">action · mapped fields</div></div>
            </div>
            <div className="connector" style={{ ["--seq" as string]: 1 }} />
            <div className="node" style={{ ["--seq" as string]: 2 }}>
              <span className="ic" style={{ background: "#5A2DD0" }}>SF</span>
              <div><div className="t">Update Salesforce deal</div><div className="s">action · upsert</div></div>
            </div>
            <div className="connector" style={{ ["--seq" as string]: 2 }} />
            <div className="node" style={{ ["--seq" as string]: 3 }}>
              <span className="ic" style={{ background: "#2A8C4A" }}>#</span>
              <div><div className="t">Post to Slack #revenue</div><div className="s">action · formatted</div></div>
              <span className="badge">0 errors</span>
            </div>
            <div className="recipe-foot">
              <div className="recipe-metrics">
                <span className="rm-live"><b>48</b> events/min</span>
                <span>p95 <b>1.2s</b></span>
                <span><b>0</b> errors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
