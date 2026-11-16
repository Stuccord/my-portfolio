import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { CheckIcon } from "@/components/ui/Icons";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function About() {
  const { about } = site;
  return (
    <section id="about" className="section bg-ink-2">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-line bg-ink-3">
            {about.photo ? (
              <Image src={about.photo} alt={about.photoAlt} fill sizes="(min-width: 1024px) 36vw, 90vw" className="object-cover" loading="lazy" />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={about.fallbackPhoto.src}
                srcSet={`${about.fallbackPhoto.small} 400w, ${about.fallbackPhoto.src} 720w`}
                sizes="(min-width: 1024px) 36vw, 90vw"
                alt={about.fallbackPhoto.alt}
                width={720}
                height={956}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            )}
            <span className="theme-dark absolute bottom-4 left-4 rounded-full !bg-ink/90 px-4 py-2 text-sm font-bold">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-wa" aria-hidden />
              {site.location.town}, {site.location.country}
            </span>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="h-section mt-5 max-w-[14ch]">{about.heading}</h2>
          <div className="mt-7 max-w-xl space-y-4 text-lg text-mute">
            {about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "text-bone" : ""}>
                {p}
              </p>
            ))}
          </div>
          <ul className="mt-8 space-y-3">
            {about.points.map((point) => (
              <li key={point} className="flex items-center gap-3 font-bold">
                <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-ember text-ink">
                  <CheckIcon width={14} height={14} />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <WhatsAppButton label="Say hello on WhatsApp" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
