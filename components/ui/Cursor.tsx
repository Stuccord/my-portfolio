"use client";

import { m, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/** A soft ring that trails the mouse on desktop. Hidden on touch devices and when motion is reduced (see globals.css). */
export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: PointerEvent) => {
      const t = e.target as Element | null;
      setActive(!!t?.closest?.("a, button, summary, input, [data-cursor]"));
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <m.div aria-hidden className="cursor-ring pointer-events-none fixed left-0 top-0 z-[100]" style={{ x: sx, y: sy }}>
      <m.div
        className="-ml-4 -mt-4 h-8 w-8 rounded-full border border-ember"
        animate={{ scale: active ? 1.9 : 1, backgroundColor: active ? "rgba(255,90,31,0.14)" : "rgba(255,90,31,0)" }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      />
    </m.div>
  );
}
