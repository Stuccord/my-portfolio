import { site } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const { testimonials } = site;
  if (!testimonials.show) return null;
  return (
    <section id="testimonials" className="section">
      <div className="container-x">
        <SectionHeading eyebrow={testimonials.eyebrow} heading={testimonials.heading} />

        <ul className="mt-14 grid gap-6 md:mt-20 lg:grid-cols-3">
          {testimonials.items.map((item, i) => (
            <Reveal as="li" key={i} delay={i * 0.08} className={i === 1 ? "lg:mt-10" : ""}>
              <figure className="relative flex h-full flex-col justify-between rounded-3xl border border-line bg-ink-2 p-7 md:p-9">
                {item.placeholder ? (
                  <span className="absolute right-5 top-5 rounded-full border border-ember px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-ember">Sample</span>
                ) : null}
                <div>
                  <span aria-hidden className="font-display text-6xl leading-none text-ember">
                    &ldquo;
                  </span>
                  <blockquote className="text-xl leading-snug">{item.quote}</blockquote>
                </div>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-line pt-5">
                  <span aria-hidden className="grid h-11 w-11 flex-none place-items-center rounded-full bg-ink-3 font-display font-semibold">
                    {item.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-bold">{item.name}</span>
                    <span className="block text-sm text-mute">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
