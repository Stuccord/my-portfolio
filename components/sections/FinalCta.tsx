import { site } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function FinalCta() {
  const { finalCta, contact } = site;
  // The last word of the heading is shown in the accent colour.
  const words = finalCta.heading.split(" ");
  const last = words.pop();
  return (
    <section id="contact" className="theme-dark grain relative overflow-hidden pb-16 pt-24 md:pb-24 md:pt-40">
      {/* Dimmed background photo. Decorative, so it has empty alt text. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={finalCta.photo.src}
        srcSet={`${finalCta.photo.small} 640w, ${finalCta.photo.src} 1280w`}
        sizes="100vw"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-[3] h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 -z-[3] bg-gradient-to-b from-ink via-ink/70 to-ink/40" aria-hidden />
      <div className="glow -bottom-72 left-1/2 h-[52rem] w-[52rem] -translate-x-1/2" aria-hidden />
      <div className="container-x">
        <Reveal>
          <h2 className="max-w-[11ch] text-[clamp(3rem,12.5vw,10.5rem)] leading-[0.9]">
            {words.join(" ")} <span className="text-ember">{last}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 grid gap-10 md:mt-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <p className="max-w-md text-xl text-mute">{finalCta.sub}</p>
            <div className="mt-8">
              <WhatsAppButton label={finalCta.button} className="!min-h-16 !px-8 text-lg" />
            </div>
          </div>
          <dl className="grid gap-6 sm:grid-cols-2 lg:col-span-6">
            <div className="border-t border-line pt-4">
              <dt className="text-sm text-mute">Call or WhatsApp</dt>
              <dd className="mt-1">
                <a href={contact.phoneHref} className="font-display text-2xl font-medium tracking-tight transition-colors hover:text-ember">
                  {contact.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="border-t border-line pt-4">
              <dt className="text-sm text-mute">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${contact.email}`} className="break-all font-display text-2xl font-medium tracking-tight transition-colors hover:text-ember">
                  {contact.email}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
