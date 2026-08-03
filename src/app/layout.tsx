import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { meta, site } from "@/content/site";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Spotlight } from "@/components/spotlight";
import { Analytics } from "@/components/analytics";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-schibsted",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drepkovsky.com"),
  title: { default: meta.title, template: `%s — ${site.name}` },
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: "https://drepkovsky.com",
    siteName: site.name,
    locale: "en",
    type: "website",
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#141414" },
    { media: "(prefers-color-scheme: light)", color: "#f8f8f8" },
  ],
};

/**
 * Runs before paint so a light-theme reader never sees a dark flash. Kept as a
 * string because Next will not inline a real function here.
 */
const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t==="light")document.documentElement.setAttribute("data-theme","light")}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${schibsted.variable} ${plexMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="overflow-x-hidden">
        <Spotlight />
        <SiteNav />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
