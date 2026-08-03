import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — Backend & TypeScript`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Card for links shared on LinkedIn, X and Slack. Deliberately uses the
 * system font stack rather than fetching Schibsted Grotesk at build time —
 * a network call here would make the build fail offline for one image.
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
          justifyContent: "space-between",
          background: "#141414",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 11,
              background: "#1f1f1f",
              border: "1px solid #3a3a3a",
              display: "flex",
              alignItems: "flex-end",
              padding: 14,
            }}
          >
            <div
              style={{
                width: 11,
                height: 11,
                borderRadius: 999,
                background: "#EFD200",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              color: "#9e9e9e",
              fontSize: 22,
              letterSpacing: 3,
              paddingBottom: 6,
            }}
          >
            {site.name.toUpperCase()}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 26,
            maxWidth: 900,
          }}
        >
          {/* Satori needs an explicit display on any node with more than one
              child, so the two-tone headline is a flex row that wraps. */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              color: "#f6f6f6",
              fontSize: 62,
              lineHeight: 1.08,
              letterSpacing: -2,
            }}
          >
            <span>Most of a backend is plumbing.</span>
            <span style={{ color: "#EFD200" }}>I generate that part.</span>
          </div>
          <div style={{ color: "#9e9e9e", fontSize: 26, letterSpacing: 1 }}>
            {`Contract backends in TypeScript · ${site.location}`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
