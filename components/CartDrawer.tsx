"use client";

import { useEffect } from "react";
import { useCart } from "@/context/CartContext";

function money(n: number) {
  return n === 0 ? "Free" : "$" + n.toLocaleString("en-US");
}

export default function CartDrawer() {
  const { items, isOpen, removeItem, closeCart } = useCart();
  const subtotal = items.reduce((s, c) => s + c.price, 0);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeCart();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeCart]);

  return (
    <>
      <div className={`cart-overlay${isOpen ? " open" : ""}`} onClick={closeCart} />
      <aside className={`cart-drawer${isOpen ? " open" : ""}`} aria-label="Shopping cart">
        <div className="cart-h">
          <h3>Your cart</h3>
          <button className="cart-close" onClick={closeCart} aria-label="Close">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <div className="cart-empty">Your cart is empty.<br />Explore Automation School to get started.</div>
          ) : (
            items.map((c, i) => (
              <div className="citem" key={i}>
                <div className="citem-thumb">[ art ]</div>
                <div className="citem-info">
                  <h4>{c.title}</h4>
                  <div className="ct">{c.type}</div>
                </div>
                <div className="citem-r">
                  <span className="p">{money(c.price)}</span>
                  <button className="citem-rm" onClick={() => removeItem(i)}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-foot">
            <div className="cart-row"><span>Subtotal</span><span>{money(subtotal)}</span></div>
            <div className="cart-row"><span>Lifetime access &amp; updates</span><span>Included</span></div>
            <div className="cart-row total"><span>Total</span><span>{money(subtotal)}</span></div>
            <button className="btn btn-primary btn-block">Checkout securely</button>
            <div className="cart-secure">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </svg>
              256-bit encrypted · powered by Stripe
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
