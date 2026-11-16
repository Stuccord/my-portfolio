"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Distance in px the element travels up as it fades in. */
  y?: number;
  as?: "div" | "li" | "section" | "article";
};

/** Fades and slides content in the first time it scrolls into view. Transform + opacity only, so no layout shift. */
export function Reveal({ children, className, delay = 0, y = 28, as = "div" }: Props) {
  const Tag = m[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}
