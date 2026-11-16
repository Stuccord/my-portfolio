"use client";

import type { MouseEvent } from "react";
import { site } from "@/content/site";
import { demoCategories, type DemoCategoryId } from "@/content/demo";
import { Reveal } from "@/components/ui/Reveal";

/**
 * "Who I build for": a swipeable row of photo cards, one per business type.
 * Tapping a card opens the demo below with that business type already chosen.
 */
export function Industries() {
  const { industries } = site;

  function pick(e: MouseEvent<HTMLAnchorElement>, id: DemoCategoryId) {
    // Without JavaScript the plain link (?type=...#demo) still works.
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("demo:pick", { detail: id }));
  }

  return (
    <section id="industries" aria-labelledby="industries-heading" className="section overflow-hidden !pb-0">
      <div className="container-x">
        <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">{industries.eyebrow}</p>
            <h2 id="industries-heading" className="h-section mt-5 max-w-[16ch]">
              {industries.heading}
            </h2>
          </div>
          <p className="max-w-sm text-lg text-mute">{industries.sub}</p>
        </Reveal>
      </div>

      <Reveal delay={0.1} y={40}>
        <ul className="photo-row mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 md:mt-14 md:gap-5 md:px-10 xl:px-[max(2.5rem,calc((100vw-82rem)/2+2.5rem))]">
          {demoCategories.map((c, i) => (
            <li key={c.id} className={`w-[68vw] max-w-[19rem] flex-none snap-start sm:w-72 ${i % 2 === 1 ? "md:mt-10" : ""}`}>
              <a href={`?type=${c.id}#demo`} onClick={(e) => pick(e, c.id)} className="theme-dark group relative block aspect-[3/4] overflow-hidden rounded-3xl border border-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.photo}
                  srcSet={`${c.photoSmall} 400w, ${c.photo} 800w`}
                  sizes="(min-width: 640px) 288px, 68vw"
                  alt={c.photoAlt}
                  width={800}
                  height={603}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" aria-hidden />
                <span className="absolute inset-x-0 bottom-0 p-5">
                  <span className="block font-display text-2xl font-semibold tracking-tight">{c.label}</span>
                  <span className="mt-1 flex items-center gap-2 text-sm font-bold text-ember">
                    See a sample site
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
