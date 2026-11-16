"use client";

import { useEffect, useId, useRef, useState } from "react";
import { site } from "@/content/site";
import { defaultCategory, demoCategories, getCategory, type DemoCategoryId } from "@/content/demo";
import { waLink } from "@/lib/whatsapp";
import { MockSite } from "@/components/demo/MockSite";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/Icons";

const MAX_NAME = 40;
type View = "computer" | "phone";

/** "Linda Dor" → "lindador" for the pretend web address. */
function toDomain(name: string): string {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "");
  return `${slug || "yourbusiness"}.com`;
}

export function BusinessDemo() {
  const { demo } = site;
  const inputId = useId();
  const [name, setName] = useState("");
  const [type, setType] = useState<DemoCategoryId>(defaultCategory);
  const [view, setView] = useState<View>("computer");
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  // On first load: read ?name=...&type=... so a shared link opens with that business already showing.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sharedName = params.get("name");
    const sharedType = params.get("type");
    if (sharedName) setName(sharedName.slice(0, MAX_NAME));
    if (sharedType) setType(getCategory(sharedType).id);
    if (window.innerWidth < 1024) setView("phone");
    if (sharedName || sharedType) {
      // Jump straight to the preview, so the business owner sees their site first.
      requestAnimationFrame(() => previewRef.current?.scrollIntoView({ behavior: "instant", block: "start" }));
    }
    setReady(true);
  }, []);

  // The "Who I build for" photos above can pick a business type and jump here.
  useEffect(() => {
    const onPick = (e: Event) => {
      setType(getCategory((e as CustomEvent<string>).detail).id);
      previewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.addEventListener("demo:pick", onPick);
    return () => window.removeEventListener("demo:pick", onPick);
  }, []);

  // Keep the address bar in step with the form, so the page link is always shareable.
  useEffect(() => {
    if (!ready) return;
    const trimmed = name.trim();
    const params = new URLSearchParams();
    if (trimmed) params.set("name", trimmed);
    if (trimmed || type !== defaultCategory) params.set("type", type);
    const query = params.toString();
    window.history.replaceState(null, "", `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`);
  }, [name, type, ready]);

  const category = getCategory(type);
  const trimmed = name.trim();
  const shownName = trimmed || "Your Business";

  const message = trimmed
    ? `Hi Stuccord Web! I just saw the website preview for my ${category.noun}, "${trimmed}". I'd like to get this for real. Can we talk?`
    : `Hi Stuccord Web! I just tried your website preview for a ${category.noun}. I'd like a website for my business. Can we talk?`;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href.split("#")[0] + "#demo");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* Clipboard blocked: the link is still in the address bar. */
    }
  }

  return (
    <section id="demo" className="section grain relative overflow-hidden bg-ink-2">
      <div className="glow -left-60 top-10 h-[40rem] w-[40rem] opacity-70" aria-hidden />
      <div className="container-x">
        <SectionHeading eyebrow={demo.eyebrow} heading={demo.heading} sub={demo.sub} />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Controls */}
          <Reveal className="lg:col-span-4">
            <label htmlFor={inputId} className="block text-sm font-bold">
              {demo.nameLabel}
            </label>
            <input
              id={inputId}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value.slice(0, MAX_NAME))}
              placeholder={demo.namePlaceholder}
              maxLength={MAX_NAME}
              autoComplete="organization"
              enterKeyHint="done"
              className="mt-2 w-full border-0 border-b-2 border-line bg-transparent pb-3 pt-2 font-display text-3xl font-semibold tracking-tight outline-none transition-colors placeholder:text-mute/50 focus:border-ember"
            />

            <fieldset className="mt-8">
              <legend className="text-sm font-bold">{demo.categoryLabel}</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {demoCategories.map((c) => {
                  const selected = c.id === type;
                  return (
                    <label
                      key={c.id}
                      className={`cursor-pointer rounded-full border px-4 py-2.5 text-sm font-bold transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ember ${
                        selected ? "border-ember bg-ember text-ink" : "border-line text-bone hover:border-bone"
                      }`}
                    >
                      <input type="radio" name="demo-type" value={c.id} checked={selected} onChange={() => setType(c.id)} className="sr-only" />
                      {c.label}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-10 hidden lg:block">
              <DemoCta label={demo.cta} href={waLink(message)} note={demo.note} onCopy={copyLink} copied={copied} />
            </div>
          </Reveal>

          {/* Preview */}
          <Reveal className="lg:col-span-8" delay={0.1}>
            <div ref={previewRef} className="mb-4 flex items-center justify-between gap-4">
              <p className="text-sm text-mute" aria-live="polite">
                Preview for <span className="font-bold text-bone">{shownName}</span>
              </p>
              <div role="group" aria-label="Preview size" className="flex rounded-full border border-line p-1 text-sm">
                {(["phone", "computer"] as View[]).map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setView(v)}
                    aria-pressed={view === v}
                    className={`rounded-full px-4 py-1.5 font-bold capitalize transition-colors ${view === v ? "bg-bone text-ink" : "text-mute hover:text-bone"}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Fixed height, so switching business type or frame never moves the page. */}
            <div className="flex h-[38rem] items-center justify-center">
              {view === "computer" ? (
                <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line bg-ink-3 shadow-[0_50px_100px_-50px_rgba(15,23,42,0.28)]">
                  <div className="flex flex-none items-center gap-3 px-4 py-3">
                    <div className="flex gap-1.5" aria-hidden>
                      <i className="h-2.5 w-2.5 rounded-full bg-[#34405a]" />
                      <i className="h-2.5 w-2.5 rounded-full bg-[#34405a]" />
                      <i className="h-2.5 w-2.5 rounded-full bg-[#34405a]" />
                    </div>
                    <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full bg-ink px-4 py-1.5 text-xs text-mute">
                      <span className="h-2 w-2 flex-none rounded-full bg-wa" aria-hidden />
                      <span className="truncate">{toDomain(trimmed)}</span>
                    </div>
                  </div>
                  <div className="min-h-0 flex-1" tabIndex={0} role="region" aria-label={`Website preview for ${shownName}`}>
                    <MockSite category={category} name={shownName} />
                  </div>
                </div>
              ) : (
                <div className="h-full w-[19.5rem] max-w-full rounded-[2.6rem] border border-line bg-ink-3 p-2.5 shadow-[0_50px_100px_-40px_rgba(15,23,42,0.28)]">
                  <div className="flex h-full flex-col overflow-hidden rounded-[2rem]" style={{ background: category.theme.surface }}>
                    <div className="flex h-6 flex-none items-center justify-center" aria-hidden>
                      <span className="h-1.5 w-16 rounded-full bg-black/20" />
                    </div>
                    <div className="min-h-0 flex-1" tabIndex={0} role="region" aria-label={`Website preview for ${shownName}`}>
                      <MockSite category={category} name={shownName} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 lg:hidden">
              <DemoCta label={demo.cta} href={waLink(message)} note={demo.note} onCopy={copyLink} copied={copied} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DemoCta({ label, href, note, onCopy, copied }: { label: string; href: string; note: string; onCopy: () => void; copied: boolean }) {
  return (
    <div>
      <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-wa w-full !whitespace-normal text-center sm:w-auto">
        <WhatsAppIcon className="flex-none" />
        {label} <span aria-hidden>→</span>
      </a>
      <p className="mt-4 max-w-sm text-sm text-mute">{note}</p>
      <button type="button" onClick={onCopy} className="mt-4 border-b border-line pb-0.5 text-sm font-bold text-bone transition-colors hover:border-ember hover:text-ember">
        <span aria-live="polite">{copied ? "Link copied ✓" : "Copy a link to this preview"}</span>
      </button>
    </div>
  );
}
