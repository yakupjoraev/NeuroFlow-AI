import { Aurora } from "@/components/backgrounds/aurora";

export function Backdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="bg-grid absolute inset-0 mask-radial opacity-70" />
      <Aurora className="mask-fade-y" />
      <div className="noise-overlay absolute inset-0 opacity-[0.035] mix-blend-overlay" />
    </div>
  );
}
