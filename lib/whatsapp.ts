import { site } from "@/content/site";

/** Builds a wa.me link that opens a chat with a pre-filled message. */
export function waLink(message: string = site.contact.whatsappDefaultMessage): string {
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
