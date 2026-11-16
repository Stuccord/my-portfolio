"use client";

import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, type CSSProperties, type ReactNode } from "react";
import { site, type Project, type Shot } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowIcon } from "@/components/ui/Icons";

/** Moves its children slightly as the page scrolls, for depth. Switched off when the visitor prefers reduced motion. */
function Parallax({ children, distance, className }: { children: ReactNode; distance: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [distance, -distance]);
  return (
    <m.div ref={ref} style={{ y }} className={className}>
      {children}
    </m.div>
  );
}

/** How long the screenshot takes to scroll, based on how much taller it is than its screen. */
function scrollSeconds(shot: Shot, frameRatio: number): number {
  const screens = shot.h / shot.w / frameRatio;
  return Math.min(12, Math.max(1.5, (screens - 1) * 3));
}

function Screen({ shot, alt, frameRatio, on, sizes, missingFile }: { shot?: Shot; alt: string; frameRatio: number; on: boolean; sizes: string; missingFile: string }) {
  if (!shot) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-[repeating-linear-gradient(45deg,#182236,#182236_12px,#1f2a42_12px,#1f2a42_24px)] p-3 text-center text-[0.7rem] leading-snug text-mute">
        Screenshot placeholder
        <br />
        add {missingFile}
      </div>
    );
  }
  return (
    <div className="screen h-full w-full" data-on={on} style={{ "--scroll-dur": `${scrollSeconds(shot, frameRatio)}s` } as CSSProperties}>
      {/* Plain <img> with two pre-compressed WebP sizes: the browser picks the smallest one that looks sharp. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={shot.src}
        srcSet={shot.small ? `${shot.small} ${Math.round(shot.w / 2)}w, ${shot.src} ${shot.w}w` : undefined}
        sizes={shot.small ? sizes : undefined}
        alt={alt}
        width={shot.w}
        height={shot.h}
        loading="lazy"
        decoding="async"
        className="screen-shot"
      />
    </div>
  );
}

function Devices({ project }: { project: Project }) {
  const [on, setOn] = useState(false);
  const slug = project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return (
    <button
      type="button"
      onClick={() => setOn((v) => !v)}
      aria-pressed={on}
      aria-label={`Scroll through the ${project.name} website preview`}
      className="device-group relative block w-full cursor-pointer pb-[9%] pr-[5%] text-left"
    >
      {/* Laptop */}
      <Parallax distance={18}>
        <div className="rounded-t-[1.1rem] md:rounded-t-[1.5rem] border border-line bg-ink-3 p-[2.4%] pb-[2%] shadow-[0_40px_90px_-40px_rgba(15,23,42,0.28)]">
          <div className="aspect-[16/10] overflow-hidden rounded-md">
            <Screen shot={project.desktop} alt={`${project.name} website on a laptop`} frameRatio={10 / 16} on={on} sizes="(min-width: 1024px) 46vw, 82vw" missingFile={`/public/projects/${slug}-desktop.webp`} />
          </div>
        </div>
        <div className="mx-[-5%] h-[0.7rem] rounded-b-[1rem] bg-gradient-to-b from-[#d5dae2] to-[#b9c0cc] md:h-[0.9rem]" />
      </Parallax>

      {/* Phone */}
      <Parallax distance={-34} className="absolute bottom-0 right-0 w-[24%]">
        <div className="rounded-[14%/6.5%] border border-line bg-ink-3 p-[5%] shadow-[0_30px_60px_-20px_rgba(15,23,42,0.28)]">
          <div className="aspect-[9/19] overflow-hidden rounded-[11%/5%]">
            <Screen shot={project.mobile} alt={`${project.name} website on a phone`} frameRatio={19 / 9} on={on} sizes="(min-width: 1024px) 12vw, 20vw" missingFile={`/public/projects/${slug}-mobile.webp`} />
          </div>
        </div>
      </Parallax>

      <span className="pointer-events-none absolute bottom-[2%] left-0 text-xs text-mute md:hidden">{on ? "Tap to scroll back" : "Tap to scroll the site"}</span>
    </button>
  );
}

export function Work() {
  const { work } = site;
  const total = String(work.projects.length).padStart(2, "0");
  return (
    <section id="work" className="section">
      <div className="container-x">
        <SectionHeading eyebrow={work.eyebrow} heading={work.heading} sub={work.sub} />

        <div className="mt-16 space-y-24 md:mt-24 md:space-y-36">
          {work.projects.map((project, i) => (
            <article key={project.name} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <Reveal className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`} y={48}>
                <Devices project={project} />
              </Reveal>

              <Reveal className="lg:col-span-5" delay={0.1}>
                <p className="flex items-center gap-3 text-sm text-mute">
                  <span className="font-display text-ember">
                    {String(i + 1).padStart(2, "0")} / {total}
                  </span>
                  <span className="h-px w-8 bg-line" />
                  {project.kind}
                </p>
                <h3 className="mt-4 text-[clamp(2rem,5vw,3.5rem)]">{project.name}</h3>

                <dl className="mt-7 space-y-4 border-l border-line pl-5">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.14em] text-mute">The problem</dt>
                    <dd className="mt-1 text-mute">{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.14em] text-ember">The result</dt>
                    <dd className="mt-1 text-lg">{project.result}</dd>
                  </div>
                </dl>

                <ul className="mt-7 flex flex-wrap gap-2" aria-label="What I built">
                  {project.built.map((b) => (
                    <li key={b} className="rounded-full border border-line px-3 py-1.5 text-sm text-mute">
                      {b}
                    </li>
                  ))}
                </ul>

                <a href={project.url} target="_blank" rel="noopener noreferrer" className="group mt-8 inline-flex items-center gap-2 border-b border-bone pb-1 font-bold transition-colors hover:border-ember hover:text-ember">
                  Visit live site
                  <ArrowIcon className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  <span className="sr-only"> ({project.name}, opens in a new tab)</span>
                </a>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
