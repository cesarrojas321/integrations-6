import UseReveal from "@/components/UseReveal";

export default function FinalCta() {
  return (
    <section className="section dark final">
      <div className="hero-glow" />
      <div className="wrap">
        <UseReveal as="span" className="kicker" style={{ justifyContent: "center", display: "flex" }}>Ready when you are</UseReveal>
        <UseReveal as="h2">Stop doing what software should.</UseReveal>
        <UseReveal as="p">Book a free 30-minute discovery call and we&apos;ll map your first automation — no commitment.</UseReveal>
        <UseReveal className="hero-cta">
          <a href="#contact" className="btn btn-light">
            Book a discovery call
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
          <a href="#school" className="btn btn-ghost">Explore Automation School</a>
        </UseReveal>
      </div>
    </section>
  );
}
