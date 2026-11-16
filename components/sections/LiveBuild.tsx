import type { CSSProperties, ReactNode } from "react";
import "./live-build.css";

/** Shorthand for the CSS variables each block uses: --d = when the wireframe appears, --o = when real content replaces it. */
function t(d: number, o: number, extra: Record<string, string | number> = {}): CSSProperties {
  return { "--d": `${d}s`, "--o": `${o}s`, ...extra } as CSSProperties;
}

/** One block: wireframe first, real content later. Width/height are fixed so nothing ever moves. */
function Block({ w, h, d, o, r, className = "", children }: { w?: string; h: string; d: number; o: number; r?: string; className?: string; children?: ReactNode }) {
  return (
    <div className="lb-w" style={{ ...t(d, o, r ? { "--r": r } : {}), width: w, height: h }}>
      <div className={`lb-c ${className}`}>{children}</div>
    </div>
  );
}

const dishes = [
  { name: "Jollof", price: "₵55", crop: "85% 55%" },
  { name: "Chicken", price: "₵80", crop: "8% 45%" },
  { name: "Kelewele", price: "₵25", crop: "30% 80%" },
];

/**
 * The hero's animated browser window. Decorative, so it is hidden from
 * screen readers; the headline beside it carries the message.
 */
export function LiveBuild() {
  return (
    <div className="lb" aria-hidden="true">
      <div className="lb-live">
        <i />
        Live ✓
      </div>

      <div className="lb-frame">
        <div className="lb-chrome">
          <div className="lb-dots">
            <i />
            <i />
            <i />
          </div>
          <div className="lb-url">
            <span className="lb-lock" />
            mamaefuaskitchen.com
          </div>
          <div className="lb-progress" />
        </div>

        <div className="lb-site">
          <div className="lb-nav">
            <Block w="21cqw" h="4cqw" d={0.2} o={1.3} className="lb-logo">
              <span className="lb-type" style={{ "--n": 11, "--t": "0.4s", "--o": "1.3s" } as CSSProperties}>
                Mama Efua&rsquo;s
              </span>
            </Block>
            <div className="lb-links">
              <Block w="7cqw" h="2.6cqw" d={0.3} o={1.5} className="lb-link">Menu</Block>
              <Block w="9cqw" h="2.6cqw" d={0.35} o={1.55} className="lb-link">Reserve</Block>
              <Block w="9cqw" h="2.6cqw" d={0.4} o={1.6} className="lb-link">Find us</Block>
            </div>
            <Block w="15cqw" h="5cqw" d={0.45} o={2.3} r="99px" className="lb-btn">Order now</Block>
          </div>

          <div className="lb-hero">
            <div className="lb-copy">
              <Block w="30cqw" h="2.4cqw" d={0.55} o={1.4} className="lb-eyebrow">Open daily · Koforidua</Block>
              <Block w="100%" h="6.4cqw" d={0.65} o={1.6} className="lb-h">
                <span className="lb-type" style={{ "--n": 12, "--t": "0.5s", "--o": "1.6s" } as CSSProperties}>
                  Real jollof.
                </span>
              </Block>
              <Block w="100%" h="6.4cqw" d={0.72} o={2.1} className="lb-h">
                <span className="lb-type" style={{ "--n": 14, "--t": "0.5s", "--o": "2.1s" } as CSSProperties}>
                  Delivered hot.
                </span>
              </Block>
              <Block w="92%" h="2.8cqw" d={0.8} o={2.35} className="lb-p">Order online, pay with MoMo.</Block>
              <Block w="19cqw" h="5.4cqw" d={0.9} o={2.45} r="99px" className="lb-btn">Order now</Block>
            </div>
            <div className="lb-w lb-img" style={t(0.6, 2.7, { "--r": "2.4cqw" })}>
              <div className="lb-c">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/restaurant-sm.webp" alt="" width={400} height={301} decoding="async" />
              </div>
            </div>
          </div>

          <div className="lb-cards">
            {dishes.map((dish, i) => (
              <div className="lb-card" key={dish.name}>
                <div className="lb-w lb-thumb" style={t(1 + i * 0.08, 2.9 + i * 0.15, { "--r": "1.6cqw" })}>
                  <div className="lb-c" style={{ backgroundImage: "url(/images/restaurant-sm.webp)", backgroundSize: "260%", backgroundPosition: dish.crop }} />
                </div>
                <Block w="100%" h="2.6cqw" d={1.05 + i * 0.08} o={2.5} className="lb-card-t">
                  {dish.name} <b>{dish.price}</b>
                </Block>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ol className="lb-steps">
        <li style={{ "--d": "0.2s" } as CSSProperties}>Layout</li>
        <li style={{ "--d": "1.3s" } as CSSProperties}>Words</li>
        <li style={{ "--d": "2.7s" } as CSSProperties}>Pictures</li>
        <li style={{ "--d": "3.6s" } as CSSProperties}>Colours</li>
        <li style={{ "--d": "4.7s" } as CSSProperties}>Live</li>
      </ol>
    </div>
  );
}
