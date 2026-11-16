"use client";

import { m, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Four steps on a line that draws itself as you scroll: vertical on phones, horizontal on large screens. */
export function Process() {
  const { process } = site;
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <section id="process" className="section bg-ink-2">
      <div className="container-x">
        <SectionHeading eyebrow={process.eyebrow} heading={process.heading} />

        <ol ref={ref} className="relative mt-14 grid gap-10 md:mt-20 lg:grid-cols-4 lg:gap-8">
          {/* Track and animated fill (phone: vertical) */}
          <span aria-hidden className="absolute bottom-2 left-[1.1rem] top-2 w-px bg-line lg:hidden" />
          <m.span aria-hidden style={{ scaleY: progress }} className="absolute bottom-2 left-[1.1rem] top-2 w-px origin-top bg-ember lg:hidden" />
          {/* Track and animated fill (desktop: horizontal) */}
          <span aria-hidden className="absolute left-0 right-0 top-[1.1rem] hidden h-px bg-line lg:block" />
          <m.span aria-hidden style={{ scaleX: progress }} className="absolute left-0 right-0 top-[1.1rem] hidden h-px origin-left bg-ember lg:block" />

          {process.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.08} className="relative pl-14 lg:pl-0 lg:pt-16">
              <span className="absolute left-0 top-0 grid h-9 w-9 place-items-center rounded-full border border-ember bg-ink-2 font-display text-sm font-semibold text-ember">
                {i + 1}
              </span>
              <h3 className="text-[clamp(1.5rem,3vw,2rem)]">{step.title}</h3>
              <p className="mt-3 max-w-xs text-mute">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
