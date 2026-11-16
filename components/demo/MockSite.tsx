import type { CSSProperties } from "react";
import type { DemoCategory } from "@/content/demo";
import { DemoArt } from "./DemoArt";

/**
 * The generated homepage shown inside the demo's browser / phone frame.
 * It uses container queries (the @xl: classes), so it lays itself out for
 * the frame it sits in: phone layout in the phone frame, desktop layout in the browser frame.
 * Buttons inside are for show only.
 */
export function MockSite({ category, name }: { category: DemoCategory; name: string }) {
  const { theme } = category;
  const headingFont = theme.heading === "serif" ? 'Georgia, "Times New Roman", serif' : "system-ui, -apple-system, 'Segoe UI', sans-serif";
  const art = `linear-gradient(140deg, ${theme.art[0]}, ${theme.art[1]})`;
  const initial = name.trim().charAt(0).toUpperCase() || "Y";
  const vars = { background: theme.bg, color: theme.text, fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif" } as CSSProperties;
  const h = { fontFamily: headingFont, letterSpacing: "-0.015em", lineHeight: 1.05, fontWeight: 700 } as CSSProperties;
  const btn = { background: theme.accent, color: theme.accentText } as CSSProperties;
  const cover = category.hero === "cover";

  return (
    <div className="@container h-full overflow-y-auto overscroll-contain text-[13px] leading-snug" style={vars}>
      {/* Top bar */}
      <div className="flex items-center justify-between gap-3 px-4 py-3 @xl:px-8" style={{ background: theme.surface }}>
        <div className="flex min-w-0 items-center gap-2">
          <span className="grid h-7 w-7 flex-none place-items-center rounded-full text-xs font-bold" style={btn}>
            {initial}
          </span>
          <span className="truncate text-[15px] font-bold" style={{ fontFamily: headingFont }}>
            {name}
          </span>
        </div>
        <div className="hidden items-center gap-5 text-xs @xl:flex" style={{ color: theme.muted }}>
          {category.nav.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>
        <span className="hidden flex-none rounded-full px-3 py-1.5 text-[11px] font-bold @xl:inline-block" style={btn}>
          {category.cta}
        </span>
        <span className="flex flex-none flex-col gap-1 @xl:hidden" aria-hidden>
          <i className="block h-0.5 w-5 rounded-full" style={{ background: theme.text }} />
          <i className="block h-0.5 w-5 rounded-full" style={{ background: theme.text }} />
          <i className="block h-0.5 w-5 rounded-full" style={{ background: theme.text }} />
        </span>
      </div>

      {/* Hero */}
      {cover ? (
        <div className="relative overflow-hidden px-4 py-10 text-white @xl:px-8 @xl:py-16" style={{ background: theme.art[0] }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={category.photo} srcSet={`${category.photoSmall} 400w, ${category.photo} 800w`} sizes="(min-width: 1024px) 800px, 320px" alt={category.photoAlt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.1) 100%)" }} />
          <div className="relative max-w-md">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] opacity-90">Welcome to {name}</p>
            <p className="mt-3 text-[26px] @xl:text-[40px]" style={h}>
              {category.headline}
            </p>
            <p className="mt-3 opacity-90 @xl:text-[15px]">{category.sub}</p>
            <span className="mt-5 inline-block rounded-full bg-white px-4 py-2.5 text-xs font-bold" style={{ color: theme.text }}>
              {category.cta}
            </span>
          </div>
        </div>
      ) : (
        <div className="grid items-center gap-5 px-4 py-7 @xl:grid-cols-[1.1fr_0.9fr] @xl:gap-8 @xl:px-8 @xl:py-12">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: theme.accent }}>
              Welcome to {name}
            </p>
            <p className="mt-3 text-[26px] @xl:text-[38px]" style={h}>
              {category.headline}
            </p>
            <p className="mt-3 @xl:text-[15px]" style={{ color: theme.muted }}>
              {category.sub}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="rounded-full px-4 py-2.5 text-xs font-bold" style={btn}>
                {category.cta}
              </span>
              <span className="rounded-full border px-4 py-2.5 text-xs font-bold" style={{ borderColor: theme.text }}>
                WhatsApp us
              </span>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl" style={{ background: art }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={category.photo} srcSet={`${category.photoSmall} 400w, ${category.photo} 800w`} sizes="(min-width: 1024px) 380px, 280px" alt={category.photoAlt} width={800} height={603} loading="lazy" decoding="async" className="h-full w-full object-cover" />
          </div>
        </div>
      )}

      {/* Quick facts */}
      <div className="grid gap-px px-4 @xl:grid-cols-3 @xl:px-8" style={{ marginTop: cover ? 16 : 0 }}>
        {category.highlights.map((item) => (
          <div key={item} className="flex items-center gap-2 py-2 text-xs font-bold @xl:py-3">
            <span className="grid h-5 w-5 flex-none place-items-center rounded-full text-[10px]" style={btn}>
              ✓
            </span>
            {item}
          </div>
        ))}
      </div>

      {/* Menu / rooms / services / products */}
      <div className="px-4 pb-8 pt-6 @xl:px-8 @xl:pt-8">
        <div className="flex items-end justify-between">
          <p className="text-[20px] @xl:text-[26px]" style={h}>
            {category.itemsTitle}
          </p>
          <span className="text-[11px] font-bold underline" style={{ color: theme.accent }}>
            See all
          </span>
        </div>

        {category.itemsLayout === "list" ? (
          <div className="mt-4 overflow-hidden rounded-2xl" style={{ background: theme.surface }}>
            {category.items.map((item, i) => (
              <div key={item.title} className="flex items-center gap-3 px-4 py-3" style={{ borderTop: i ? `1px solid ${theme.bg}` : undefined }}>
                <span className="grid h-10 w-10 flex-none place-items-center rounded-xl" style={{ background: `linear-gradient(${100 + i * 50}deg, ${theme.art[0]}, ${theme.art[1]})` }}>
                  <DemoArt id={category.id} className="h-6 w-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-bold">{item.title}</p>
                  <p className="truncate text-[11px]" style={{ color: theme.muted }}>
                    {item.meta}
                  </p>
                </div>
                {item.price ? (
                  <span className="flex-none text-xs font-bold" style={{ color: theme.accent }}>
                    {item.price}
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-4 grid gap-3 @xl:grid-cols-3">
            {category.items.map((item, i) => (
              <div key={item.title} className="overflow-hidden rounded-2xl" style={{ background: theme.surface }}>
                <div className="grid h-24 place-items-center @xl:h-28" style={{ background: `linear-gradient(${100 + i * 60}deg, ${theme.art[0]}, ${theme.art[1]})` }}>
                  <DemoArt id={category.id} className="h-14 w-14 opacity-90" />
                </div>
                <div className="p-3">
                  <p className="font-bold">{item.title}</p>
                  <p className="text-[11px]" style={{ color: theme.muted }}>
                    {item.meta}
                  </p>
                  {item.price ? (
                    <p className="mt-2 text-xs font-bold" style={{ color: theme.accent }}>
                      {item.price}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Contact band */}
      <div className="px-4 py-7 text-center @xl:px-8 @xl:py-9" style={btn}>
        <p className="text-[20px] @xl:text-[24px]" style={h}>
          Talk to {name} today
        </p>
        <p className="mt-1 text-xs opacity-85">Open today · Your town, Ghana</p>
        <span className="mt-4 inline-block rounded-full bg-white px-4 py-2.5 text-xs font-bold text-black">Chat on WhatsApp</span>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-4 text-[11px] @xl:px-8" style={{ color: theme.muted }}>
        <span>
          © {new Date().getFullYear()} {name}
        </span>
        <span>Call · WhatsApp · Find us on the map</span>
      </div>
    </div>
  );
}
