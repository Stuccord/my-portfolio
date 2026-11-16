import { site } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Uses the browser's built-in <details>, so it works with keyboard and screen readers and needs no JavaScript. */
export function Faq() {
  const { faq } = site;
  return (
    <section id="faq" className="section">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <SectionHeading eyebrow={faq.eyebrow} heading={faq.heading} className="lg:col-span-5" />

        <Reveal className="lg:col-span-7" delay={0.1}>
          <div className="border-b border-line">
            {faq.items.map((item) => (
              <details key={item.q} className="faq-item border-t border-line">
                <summary className="flex items-center justify-between gap-6 py-6 font-display text-xl font-medium tracking-tight transition-colors hover:text-ember md:text-2xl">
                  {item.q}
                  <span aria-hidden className="faq-plus grid h-9 w-9 flex-none place-items-center rounded-full border border-line text-xl leading-none">
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-7 text-lg text-mute">{item.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
