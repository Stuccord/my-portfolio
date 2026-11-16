import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { site } from "@/content/site";
import { MotionProvider } from "@/components/ui/MotionProvider";
import "./globals.css";

/**
 * Same pairing Higgsfield uses: Space Grotesk for headings, Inter for body text.
 * Both are free, open-source Google fonts. Next.js downloads them at build time
 * and serves them from this site, so visitors never contact Google.
 */
const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.seo.title,
  description: site.seo.description,
  keywords: site.seo.keywords,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.description,
    locale: "en_GH",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: `${site.name} — websites that bring your business customers` }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f5f6f8",
  width: "device-width",
  initialScale: 1,
};

/** Tells Google this is a local business in Koforidua serving Ghana. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  image: `${site.url}/og.jpg`,
  description: site.seo.description,
  telephone: `+${site.contact.whatsappNumber}`,
  email: site.contact.email,
  address: { "@type": "PostalAddress", addressLocality: site.location.town, addressRegion: "Eastern Region", addressCountry: "GH" },
  areaServed: ["Koforidua", "Accra", "Kumasi", "Ghana"],
  priceRange: "GH₵",
  knowsAbout: ["Website design", "E-commerce websites", "Booking websites", "Web applications"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-bone focus:px-4 focus:py-2 focus:text-ink">
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
