import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";

/** The floating WhatsApp button that stays on screen on every part of the page. */
export function WhatsAppFab() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 flex h-14 items-center gap-2 rounded-full bg-wa px-4 font-bold text-wa-ink shadow-[0_12px_40px_-8px_rgba(37,211,102,0.65)] transition-transform hover:scale-105 md:right-6 md:px-5"
    >
      <WhatsAppIcon width={26} height={26} />
      <span className="hidden sm:inline">Chat</span>
    </a>
  );
}
