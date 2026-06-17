"use client";

import React, { useEffect, useRef, ReactNode, ElementType } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  style?: React.CSSProperties;
}

export default function UseReveal({ children, className = "", as: Tag = "div", style }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          io.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const TagEl = Tag as React.ElementType;
  return (
    <TagEl ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </TagEl>
  );
}
