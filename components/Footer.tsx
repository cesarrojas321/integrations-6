import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="brand">
              <Image src="/yisuka-logo2.png" alt="Yisuka" width={30} height={30} />
              <span>Yisuka</span>
            </div>
            <p className="footer-about">Enterprise automation services and education, built on Workato. We connect your systems so your team can focus on the work that matters.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <a href="#catalog">Automation catalog</a>
            <a href="#request">Custom builds</a>
            <a href="#integrations">Integrations</a>
            <a href="#contact">Enterprise program</a>
          </div>
          <div className="footer-col">
            <h4>Automation School</h4>
            <a href="#school">Live workshops</a>
            <a href="#school">Team enablement</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="made">© 2026 Yisuka, Inc. · Workato Certified Partner</span>
          <span className="made">info@yisuka-pro.com</span>
        </div>
      </div>
    </footer>
  );
}
