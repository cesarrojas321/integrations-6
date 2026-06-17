"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function Nav() {
  const { items, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="brand">
          <Image src="/yisuka-logo2.png" alt="Yisuka" width={40} height={40} />
          <span style={{ fontFamily: "var(--font-brand)" }}>yisuka</span>
        </a>

        <nav className="nav-links" style={mobileOpen ? { display: "flex", position: "absolute", top: 58, left: 0, right: 0, flexDirection: "column", background: "var(--navy)", borderBottom: "1px solid var(--line-dark)", padding: "12px 20px", gap: 2 } : undefined}>
          <a href="#services">Services</a>
          <a href="#how">How it works</a>
          <a href="#catalog">Automations</a>
          <a href="#integrations">Integrations</a>
          <a href="#school">Automation School</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-right">
          <button className="cart-btn" onClick={openCart} aria-label="Cart">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="9" cy="20" r="1.4" /><circle cx="18" cy="20" r="1.4" />
              <path d="M2 3h3l2.4 12.2a1.5 1.5 0 0 0 1.5 1.2h8.2a1.5 1.5 0 0 0 1.5-1.2L21 7H6" />
            </svg>
            <span className={`cart-count${items.length > 0 ? " show" : ""}`}>{items.length}</span>
          </button>
          <a href="#contact" className="btn btn-primary btn-sm">Book a call</a>
          <button className="cart-btn nav-toggle" aria-label="Menu" onClick={() => setMobileOpen((v) => !v)}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
