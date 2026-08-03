import Script from "next/script";

/**
 * Self-hosted Umami. No cookies and no personal data, so the site needs no
 * consent banner — which is the reason to run it rather than the alternatives.
 *
 * The website id is public by design: it ships in the HTML of every page.
 * It is still read from the environment so a fork does not report into these
 * stats without someone choosing to.
 */
const SRC =
  process.env.NEXT_PUBLIC_UMAMI_SRC ??
  "https://umami.eu-infra.questpie.com/script.js";

const WEBSITE_ID =
  process.env.NEXT_PUBLIC_UMAMI_ID ?? "e6f5bd74-5208-4fdf-b3d6-a809718dc454";

export function Analytics() {
  // Dev pageviews would otherwise land in the same numbers as real traffic.
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <Script
      defer
      src={SRC}
      data-website-id={WEBSITE_ID}
      // Belt and braces: Umami itself drops anything not from this host, so
      // preview deploys stay out of the numbers even without the guard above.
      data-domains="drepkovsky.com"
      strategy="afterInteractive"
    />
  );
}
