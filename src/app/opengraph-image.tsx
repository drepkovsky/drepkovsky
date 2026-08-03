import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

/**
 * Schibsted Grotesk, committed rather than fetched.
 *
 * Satori needs a real font: with the system fallback it segments text oddly
 * and drops extra whitespace into the middle of a line. Fetching it from
 * Google at build time would work too, but then the build needs the network
 * to produce one image.
 */
const loadFont = (file: string) =>
  readFileSync(join(process.cwd(), "src/assets", file));

// Static instances cut from the variable TTF with fontTools: Satori's parser
// cannot read a variable font and dies on the wght axis.
const regular = loadFont("SchibstedGrotesk-Regular.ttf");
const semibold = loadFont("SchibstedGrotesk-SemiBold.ttf");

export const alt = `${site.name} — Backend & TypeScript`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Card for links shared on LinkedIn, X and Slack.
 *
 * Satori rules this layout obeys, learned the hard way:
 *  - every node with more than one child needs an explicit `display`
 *  - no `gap` on a flex container holding prose; it lands between words
 *  - give it a real font, or lines come out with holes in them
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#141414",
          padding: "72px 80px",
          fontFamily: "Schibsted Grotesk",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "auto",
          }}
        >
          {/* The d. mark, drawn rather than typed so it matches the favicon. */}
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 12,
              background: "#1f1f1f",
              border: "1px solid #3a3a3a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: -2,
              color: "#f6f6f6",
            }}
          >
            <span>d</span>
            <span style={{ color: "#EFD200" }}>.</span>
          </div>
          <div
            style={{
              marginLeft: 22,
              color: "#9e9e9e",
              fontSize: 23,
              letterSpacing: 3,
            }}
          >
            {site.name.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#f6f6f6",
              fontSize: 64,
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: -2,
            }}
          >
            Most of a backend is plumbing.
          </div>
          <div
            style={{
              color: "#EFD200",
              fontSize: 64,
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: -2,
            }}
          >
            I generate that part.
          </div>
          <div
            style={{
              marginTop: 30,
              color: "#9e9e9e",
              fontSize: 26,
              letterSpacing: 1,
            }}
          >
            {`Contract backends in TypeScript · ${site.location}`}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Schibsted Grotesk",
          data: regular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Schibsted Grotesk",
          data: semibold,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
}
