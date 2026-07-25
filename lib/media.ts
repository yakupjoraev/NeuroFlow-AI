/**
 * Every photographic frame on the site, in one place.
 *
 * `src` currently points at seeded placeholder photography. Generated frames
 * drop into public/images with the same file name as `id` and only `src` here
 * needs to change. `prompt` is the brief each frame was generated from, kept
 * next to the slot so a re-generation produces a consistent set.
 */
export interface Frame {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  prompt: string;
}

const placeholder = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

const LOOK =
  "cinematic still, cool graphite shadows, single warm signal-orange practical light source, 35mm, shallow depth of field, fine film grain, no text, no user interface, no screens showing charts";

export const frames = {
  hero: {
    id: "hero",
    src: placeholder("neuroflow-ops-floor", 2400, 1350),
    alt: "Night shift in an operations control room, lit by a single warm lamp.",
    width: 2400,
    height: 1350,
    prompt: `Wide shot of a near-empty operations control room at night, two people at a long desk far from camera, deep shadow in the foreground. ${LOOK}`,
  },
  agentBuilder: {
    id: "agent-builder",
    src: placeholder("neuroflow-canvas-desk", 1600, 1200),
    alt: "Hands arranging paper cards into a flow on a dark desk.",
    width: 1600,
    height: 1200,
    prompt: `Close overhead shot of hands arranging small blank paper cards into a branching flow on a dark desk. ${LOOK}`,
  },
  connectors: {
    id: "connectors",
    src: placeholder("neuroflow-patchbay", 1600, 1200),
    alt: "Patch cables routed across an audio patch bay.",
    width: 1600,
    height: 1200,
    prompt: `Macro shot of orange patch cables plugged into a dense metal patch bay, cables sweeping out of frame. ${LOOK}`,
  },
  sdk: {
    id: "sdk",
    src: placeholder("neuroflow-keyboard", 1600, 1200),
    alt: "A mechanical keyboard on a dark desk under a single lamp.",
    width: 1600,
    height: 1200,
    prompt: `Low side angle of a worn mechanical keyboard on a dark desk, one warm lamp raking across the keycaps. ${LOOK}`,
  },
  observability: {
    id: "observability",
    src: placeholder("neuroflow-longexposure", 1600, 1200),
    alt: "Long-exposure light trails tracing a path through a dark corridor.",
    width: 1600,
    height: 1200,
    prompt: `Long-exposure photograph of a single warm light trail tracing a path down a dark concrete corridor. ${LOOK}`,
  },
  governance: {
    id: "governance",
    src: placeholder("neuroflow-vault", 1600, 1200),
    alt: "A heavy steel door mechanism, partly in shadow.",
    width: 1600,
    height: 1200,
    prompt: `Tight shot of a heavy brushed-steel door mechanism, one warm highlight along the edge, rest in shadow. ${LOOK}`,
  },
  operations: {
    id: "operations",
    src: placeholder("neuroflow-warehouse", 1400, 1050),
    alt: "A logistics aisle at night, seen down its full length.",
    width: 1400,
    height: 1050,
    prompt: `Perspective shot down a tall logistics aisle at night, warm work light at the far end. ${LOOK}`,
  },
  support: {
    id: "support",
    src: placeholder("neuroflow-headset", 1400, 1050),
    alt: "A headset resting on a desk beside a cooling cup of coffee.",
    width: 1400,
    height: 1050,
    prompt: `Still life of a headset resting on a dark desk next to a cup of coffee, one warm lamp off frame left. ${LOOK}`,
  },
  cta: {
    id: "cta",
    src: placeholder("neuroflow-dawn-shift", 2400, 1200),
    alt: "An empty office at dawn with the lights still on.",
    width: 2400,
    height: 1200,
    prompt: `Wide shot of an empty open-plan office at dawn, overhead lights still on, blue window light against warm interior light. ${LOOK}`,
  },
} satisfies Record<string, Frame>;
