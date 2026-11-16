import { site } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

export function TrustStrip() {
  return (
    <section aria-label="Why work with me" className="border-y border-line">
      <ul className="container-x grid grid-cols-2 lg:grid-cols-4">
        {site.trust.map((item, i) => (
          <Reveal
            as="li"
            key={item.label}
            delay={i * 0.07}
            y={16}
            className={`py-7 md:py-10 ${i % 2 === 1 ? "border-l border-line pl-5 md:pl-8" : "pr-4"} ${i >= 2 ? "border-t border-line lg:border-t-0" : ""} ${i === 2 ? "lg:border-l lg:pl-8" : ""}`}
          >
            <p className="font-display text-[clamp(1.6rem,4.6vw,2.75rem)] font-semibold leading-none tracking-tight">{item.big}</p>
            <p className="mt-3 font-bold">{item.label}</p>
            <p className="text-sm text-mute">{item.note}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
