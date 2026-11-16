import { site } from "@/content/site";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/Icons";

export function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#top" className="font-display text-xl font-semibold tracking-tight" aria-label={`${site.name} — back to top`}>
          Stuccord<span className="text-ember">.</span>
        </a>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8 text-[0.95rem] text-mute">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-bone">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !min-h-11 !px-4 !py-2 text-sm">
          <WhatsAppIcon width={18} height={18} className="text-wa" />
          Let&rsquo;s talk
        </a>
      </div>
    </header>
  );
}
