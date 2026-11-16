"use client";

import { m, useMotionValue, useSpring } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";

/** Wraps a button so it leans gently toward the mouse. Mouse only; touch is ignored. */
export function Magnetic({ children, strength = 0.3, className }: { children: ReactNode; strength?: number; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <m.div className={className} style={{ x: sx, y: sy, display: "inline-block" }} onPointerMove={onMove} onPointerLeave={reset}>
      {children}
    </m.div>
  );
}
