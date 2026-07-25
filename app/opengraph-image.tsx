import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name}, ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0b0d",
          borderTop: "10px solid #f0561d",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 44,
              height: 44,
              border: "2px solid #f0561d",
              transform: "rotate(45deg)",
            }}
          />
          <div style={{ color: "#edeff3", fontSize: 34, fontWeight: 700 }}>
            {siteConfig.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              color: "#f0561d",
              fontSize: 24,
              textTransform: "uppercase",
              letterSpacing: 6,
            }}
          >
            AI Workflow Automation
          </div>
          <div
            style={{
              color: "#edeff3",
              fontSize: 80,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -3,
              maxWidth: 940,
            }}
          >
            Automate the work that runs your business.
          </div>
        </div>

        <div style={{ color: "#949aa7", fontSize: 24 }}>neuroflow.ai</div>
      </div>
    ),
    { ...size },
  );
}
