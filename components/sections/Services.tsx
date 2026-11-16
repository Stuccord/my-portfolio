import { site } from "@/content/site";
import { waLink } from "@/lib/whatsapp";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckIcon, ArrowIcon } from "@/components/ui/Icons";

export function Services() {
  const { services } = site;
  return (
    <section id="services" className="section">
      <div className="container-x">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <SectionHeading eyebrow={services.eyebrow} heading={services.heading} sub={services.sub} className="lg:col-span-7" />
          <Reveal delay={0.1} className="relative lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-ink-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={services.photo.src}
                srcSet={`${services.photo.small} 400w, ${services.photo.src} 800w`}
                sizes="(min-width: 1024px) 34vw, 90vw"
                alt={services.photo.alt}
                width={800}
                height={603}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-bone px-4 py-3 text-ink shadow-[0_20px_50px_-15px_rgba(15,23,42,0.28)] md:-left-6">
              <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-wa text-wa-ink">
                <CheckIcon width={18} height={18} />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-bold">{services.photoNote.title}</span>
                <span className="block text-xs text-ink/70">{services.photoNote.text}</span>
              </span>
            </div>
          </Reveal>
        </div>

        <ul className="mt-14 border-b border-line md:mt-20">
          {services.packages.map((pkg, i) => (
            <Reveal as="li" key={pkg.name} delay={i * 0.05} className="group border-t border-line">
              <article className="grid gap-6 py-9 md:py-12 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-5">
                  <p className="font-display text-sm text-ember">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-[clamp(1.75rem,4vw,2.75rem)] transition-colors group-hover:text-ember">{pkg.name}</h3>
                  <p className="mt-3 text-sm text-mute">{pkg.bestFor}</p>
                </div>

                <div className="lg:col-span-4">
                  <p className="text-lg">{pkg.summary}</p>
                  <ul className="mt-5 space-y-2.5 text-mute">
                    {pkg.includes.map((line) => (
                      <li key={line} className="flex gap-3">
                        <CheckIcon className="mt-1 flex-none text-ember" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-row flex-wrap items-end justify-between gap-4 lg:col-span-3 lg:flex-col lg:items-end lg:text-right">
                  <div>
                    {pkg.price !== null ? (
                      <>
                        <p className="text-sm text-mute">Starting from</p>
                        <p className="font-display text-[clamp(1.9rem,4vw,2.6rem)] font-semibold leading-none tracking-tight">
                          <span className="mr-1 font-sans text-[0.62em] font-bold tracking-normal">{services.currency}</span>
                          {pkg.price.toLocaleString("en-GH")}
                          {pkg.per ? <span className="ml-1 font-sans text-base font-normal text-mute">{pkg.per}</span> : null}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-sm text-mute">Price</p>
                        <p className="font-display text-2xl font-semibold leading-tight tracking-tight">Ask for a quote</p>
                      </>
                    )}
                  </div>
                  <a
                    href={waLink(`Hi Stuccord Web! I'm interested in the ${pkg.name} package. Can we talk?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost !min-h-12 flex-none !px-5 text-sm"
                  >
                    Ask about this
                    <ArrowIcon />
                    <span className="sr-only"> ({pkg.name}, opens WhatsApp)</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
