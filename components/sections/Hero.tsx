import { site } from "@/content/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Magnetic } from "@/components/ui/Magnetic";
import { LiveBuild } from "./LiveBuild";

export function Hero() {
  const { hero } = site;
  return (
    <section id="top" className="grain relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="glow -right-40 -top-40 h-[42rem] w-[42rem]" aria-hidden />
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
        <div>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="mt-6 text-[clamp(2.35rem,8.6vw,5rem)]">
            {hero.headline} <span className="text-ember">{hero.highlight}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-mute md:text-xl">{hero.sub}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <WhatsAppButton label={hero.primaryCta} />
            <Magnetic>
              <a href="#work" className="btn btn-ghost">
                {hero.secondaryCta}
                <span aria-hidden>↓</span>
              </a>
            </Magnetic>
          </div>
        </div>
        <div className="mx-auto w-full max-w-xl pt-4 lg:max-w-none">
          <LiveBuild />
        </div>
      </div>
    </section>
  );
}
