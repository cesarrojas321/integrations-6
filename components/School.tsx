"use client";

import { useState } from "react";
import { PRODUCTS } from "@/lib/data";
import { useCart } from "@/context/CartContext";

export default function School() {
  const [added, setAdded] = useState<Record<string, boolean>>({});
  const { addItem, openCart } = useCart();

  function handleAdd(id: string, title: string, type: string, price: number) {
    addItem({ id, title, type, price });
    setAdded((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => setAdded((prev) => ({ ...prev, [id]: false })), 1300);
    if (price > 0) openCart();
  }

  return (
    <section className="section" id="school">
      <div className="wrap">
        <div className="school-head reveal in">
          <div className="section-head" style={{ marginBottom: 0, maxWidth: 720 }}>
            <span className="kicker">Automation School</span>
            <h2>Learn to build it yourself.</h2>
            <p>Live, hands-on workshops from the team that ships automations for a living — go from zero to shipping real recipes.</p>
          </div>
        </div>

        <div className="tabs">
          <button className="tab active">
            Workato from zero <span className="tcount">04</span>
          </button>
        </div>

        <div className="products">
          {PRODUCTS.workshops.map((p, i) => {
            const id = `w${i}`;
            const isAdded = added[id];
            return (
              <article className="prod" key={p.title}>
                <div className="prod-thumb">
                  <div className="ph-grid" />
                  {p.ribbon && <span className="ribbon">{p.ribbon}</span>}
                  <span className="type-badge">{p.type.split("·")[0].trim()}</span>
                  <span className="ph-lab">[ cover artwork ]</span>
                </div>
                <div className="prod-body">
                  <div className="prod-meta">
                    <span className="star">★</span> {p.rating} · {p.sold} sold
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="prod-foot">
                    <div className="price">
                      <span className="now">${p.price.toLocaleString("en-US")}</span>
                      {p.was && <span className="was">${p.was}</span>}
                    </div>
                    <button
                      className={`add-btn${isAdded ? " added" : ""}`}
                      onClick={() => handleAdd(id, p.title, p.type, p.price)}
                    >
                      {isAdded ? "✓ Added" : "Add to cart"}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
