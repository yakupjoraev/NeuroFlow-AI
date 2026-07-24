"use client";

import { useMediaQuery } from "@/hooks/use-media-query";

export function useInteractiveMotion(): boolean {
  const finePointer = useMediaQuery("(pointer: fine)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  return finePointer && !reducedMotion;
}
