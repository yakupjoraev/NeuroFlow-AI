export function Backdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Vignette: darkens the frame edges so full-bleed media reads as a shot
          rather than a background image. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_35%,#12151b,#0a0b0d_70%)]" />
      <div className="film-grain absolute inset-0 opacity-[0.05] mix-blend-soft-light" />
    </div>
  );
}
