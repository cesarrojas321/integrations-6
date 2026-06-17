"use client";

import { useEffect, useRef } from "react";

type AnimMode = "streams" | "pipeline" | "constellation";

interface HeroCanvasProps {
  mode?: AnimMode;
}

export default function HeroCanvas({ mode = "constellation" }: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modeRef = useRef<AnimMode>(mode);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const cv = canvasRef.current;
    const ctxRaw = cv.getContext("2d");
    if (!ctxRaw) return;
    const ctx = ctxRaw;

    const ORANGE: [number, number, number] = [23, 138, 140];
    const HOT: [number, number, number] = [120, 214, 214];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rgba = (c: [number, number, number], a: number) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;
    const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    let W = 0, H = 0, DPR = 1, raf = 0, t0 = performance.now();

    type Stream = { y0: number; amp: number; k: number; speed: number; phase: number; alpha: number; packets: { t: number; sp: number }[] };
    type Node = { x: number; y: number };
    type Part = { x: number; y: number; vx: number; vy: number; r: number; ph: number };

    let streams: Stream[] = [];
    let nodes: Node[] = [];
    let links: [number, number][] = [];
    let parts: Part[] = [];

    function buildStreams() {
      streams = [];
      const rows = 5;
      for (let i = 0; i < rows; i++) {
        const y0 = 0.18 + (i / (rows - 1)) * 0.64;
        streams.push({ y0, amp: 0.018 + Math.random() * 0.03, k: 2 + Math.random() * 1.6, speed: 0.12 + Math.random() * 0.12, phase: Math.random() * Math.PI * 2, alpha: 0.06 + Math.random() * 0.05, packets: Array.from({ length: 2 }, () => ({ t: Math.random(), sp: 0.04 + Math.random() * 0.05 })) });
      }
    }
    function buildPipeline() {
      const n = 6;
      nodes = Array.from({ length: n }, (_, i) => ({ x: 0.08 + (i / (n - 1)) * 0.84, y: 0.5 + Math.sin(i * 1.1 + 0.6) * 0.16 }));
      links = Array.from({ length: nodes.length - 1 }, (_, i): [number, number] => [i, i + 1]);
    }
    function buildConstellation() {
      parts = Array.from({ length: 30 }, () => ({ x: Math.random(), y: Math.random(), vx: (Math.random() - 0.5) * 0.012, vy: (Math.random() - 0.5) * 0.012, r: 0.6 + Math.random() * 1.3, ph: Math.random() * Math.PI * 2 }));
    }
    function initMode() {
      const m = modeRef.current;
      if (m === "streams") buildStreams();
      else if (m === "pipeline") buildPipeline();
      else buildConstellation();
    }

    function resize() {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      const r = cv.parentElement!.getBoundingClientRect();
      W = r.width; H = r.height;
      cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR);
      cv.style.width = W + "px"; cv.style.height = H + "px";
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    function glow(x: number, y: number, r: number, a: number, col: [number, number, number]) {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, rgba(col, a)); g.addColorStop(1, rgba(col, 0));
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    }

    function drawStreams(time: number, still: boolean) {
      ctx.globalCompositeOperation = "lighter";
      for (const s of streams) {
        const steps = 48, pts: [number, number][] = [];
        for (let i = 0; i <= steps; i++) {
          const x = (i / steps) * W;
          const env = Math.sin(Math.PI * (i / steps));
          const y = s.y0 * H + env * s.amp * H * Math.sin(s.k * Math.PI * 2 * (i / steps) + s.phase + (still ? 0 : time * s.speed));
          pts.push([x, y]);
        }
        for (const [w, m] of [[5, 0.4], [2.2, 0.7], [1, 1]] as [number, number][]) {
          ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]);
          for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
          ctx.strokeStyle = rgba(ORANGE, s.alpha * m); ctx.lineWidth = w; ctx.lineCap = "round"; ctx.stroke();
        }
        for (const pk of s.packets) {
          if (!still) { pk.t += pk.sp * 0.016; if (pk.t > 1) pk.t -= 1; }
          const ii = pk.t * steps, i0 = Math.floor(ii), f = ii - i0;
          const a = pts[Math.min(i0, steps)], b = pts[Math.min(i0 + 1, steps)];
          const x = lerp(a[0], b[0], f), y = lerp(a[1], b[1], f);
          glow(x, y, 14, 0.5, HOT);
          ctx.beginPath(); ctx.arc(x, y, 1.6, 0, Math.PI * 2); ctx.fillStyle = rgba(HOT, 0.9); ctx.fill();
        }
      }
      ctx.globalCompositeOperation = "source-over";
    }

    function drawPipeline(time: number, still: boolean) {
      const P = nodes.map((n) => [n.x * W, n.y * H] as [number, number]);
      const segLen: number[] = [], control: [number, number][] = [];
      let total = 0;
      for (const [i, j] of links) {
        const dx = P[j][0] - P[i][0], dy = P[j][1] - P[i][1];
        const len = Math.hypot(dx, dy); segLen.push(len); total += len;
        control.push([(P[i][0] + P[j][0]) / 2, (P[i][1] + P[j][1]) / 2 - 26]);
      }
      ctx.globalCompositeOperation = "lighter";
      for (let s = 0; s < links.length; s++) {
        const [i, j] = links[s];
        ctx.beginPath(); ctx.moveTo(P[i][0], P[i][1]);
        ctx.quadraticCurveTo(control[s][0], control[s][1], P[j][0], P[j][1]);
        ctx.strokeStyle = rgba(ORANGE, 0.16); ctx.lineWidth = 1.4; ctx.stroke();
      }
      const period = 5.2;
      const u = still ? 0.5 : ((time % period) / period);
      let dist = u * total, seg = 0;
      while (seg < segLen.length - 1 && dist > segLen[seg]) { dist -= segLen[seg]; seg++; }
      const lt = clamp(dist / (segLen[seg] || 1), 0, 1);
      const [ii, j] = links[seg];
      const it = 1 - lt;
      const bx = it * it * P[ii][0] + 2 * it * lt * control[seg][0] + lt * lt * P[j][0];
      const by = it * it * P[ii][1] + 2 * it * lt * control[seg][1] + lt * lt * P[j][1];
      const passed = u * total;
      let acc = 0;
      for (let n = 0; n < P.length; n++) {
        if (n > 0) acc += segLen[n - 1];
        const near = Math.exp(-Math.pow((passed - acc) / 60, 2));
        glow(P[n][0], P[n][1], 10 + near * 16, 0.18 + near * 0.5, near > 0.3 ? HOT : ORANGE);
        ctx.beginPath(); ctx.arc(P[n][0], P[n][1], 2.4 + near * 1.6, 0, Math.PI * 2);
        ctx.fillStyle = rgba(near > 0.3 ? [190, 240, 240] : [90, 200, 200] as [number, number, number], 0.9); ctx.fill();
      }
      glow(bx, by, 22, 0.6, HOT);
      glow(bx, by, 9, 0.95, [255, 255, 255]);
      ctx.globalCompositeOperation = "source-over";
    }

    function drawConstellation(time: number, still: boolean) {
      if (!still) {
        for (const p of parts) {
          p.x += p.vx * 0.016; p.y += p.vy * 0.016;
          if (p.x < 0) p.x += 1; if (p.x > 1) p.x -= 1;
          if (p.y < 0) p.y += 1; if (p.y > 1) p.y -= 1;
        }
      }
      const R = 0.16;
      ctx.globalCompositeOperation = "lighter";
      for (let a = 0; a < parts.length; a++) {
        for (let b = a + 1; b < parts.length; b++) {
          const dx = parts[a].x - parts[b].x, dy = parts[a].y - parts[b].y;
          const d = Math.hypot(dx, dy);
          if (d < R) {
            ctx.beginPath();
            ctx.moveTo(parts[a].x * W, parts[a].y * H);
            ctx.lineTo(parts[b].x * W, parts[b].y * H);
            ctx.strokeStyle = rgba(ORANGE, (1 - d / R) * 0.12); ctx.lineWidth = 1; ctx.stroke();
          }
        }
      }
      for (const p of parts) {
        const tw = 0.6 + 0.4 * Math.sin((still ? 0 : time * 1.6) + p.ph);
        glow(p.x * W, p.y * H, 7, 0.22 * tw, ORANGE);
        ctx.beginPath(); ctx.arc(p.x * W, p.y * H, p.r, 0, Math.PI * 2);
        ctx.fillStyle = rgba(HOT, 0.7 * tw); ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
    }

    function draw(now: number, still = false) {
      const time = (now - t0) / 1000;
      ctx.clearRect(0, 0, W, H);
      const m = modeRef.current;
      if (m === "streams") drawStreams(time, still);
      else if (m === "pipeline") drawPipeline(time, still);
      else drawConstellation(time, still);
      if (!still) raf = requestAnimationFrame(draw);
    }

    function start() { if (!reduce) { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); } }

    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) start(); else cancelAnimationFrame(raf);
    }), { threshold: 0 });
    io.observe(cv);

    window.addEventListener("resize", resize);
    initMode();
    resize();
    start();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      io.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-flow" />;
}
