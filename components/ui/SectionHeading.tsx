import { Reveal } from "./Reveal";

export function SectionHeading({ eyebrow, heading, sub, className = "" }: { eyebrow: string; heading: string; sub?: string; className?: string }) {
  return (
    <Reveal className={className}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h-section mt-5 max-w-[18ch]">{heading}</h2>
      {sub ? <p className="mt-5 max-w-xl text-lg text-mute">{sub}</p> : null}
    </Reveal>
  );
}
