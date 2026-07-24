import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
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
          background:
            "radial-gradient(1000px circle at 20% 0%, #1a1030, #08080a 60%)",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #6366F1, #22D3EE)",
            }}
          />
          <div style={{ color: "#ededf0", fontSize: 34, fontWeight: 600 }}>
            {siteConfig.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#9a9aa5",
              fontSize: 26,
              textTransform: "uppercase",
              letterSpacing: 4,
            }}
          >
            AI Workflow Automation
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: 76,
              fontWeight: 600,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Automate the work that runs your business.
          </div>
        </div>

        <div style={{ color: "#9a9aa5", fontSize: 26 }}>neuroflow.ai</div>
      </div>
    ),
    { ...size },
  );
}
