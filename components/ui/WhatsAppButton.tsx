import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";
import { Magnetic } from "./Magnetic";

type Props = { label: string; message?: string; className?: string; magnetic?: boolean };

/** The main call-to-action used across the site. Opens a WhatsApp chat in a new tab. */
export function WhatsAppButton({ label, message, className = "", magnetic = true }: Props) {
  const link = (
    <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className={`btn btn-wa ${className}`}>
      <WhatsAppIcon />
      {label}
    </a>
  );
  return magnetic ? <Magnetic>{link}</Magnetic> : link;
}
