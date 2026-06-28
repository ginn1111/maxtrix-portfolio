export interface CtaEventPayload {
  placement: string;
  targetSlug: string;
  disclosure: string;
}

export function trackCtaClick(payload: CtaEventPayload) {
  try {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new CustomEvent("gstack:cta_click", { detail: payload }));
  } catch {
    // ponytail: no external analytics vendor yet. Add adapter when vendor chosen.
  }
}

export function trackSubscribe(source: string) {
  try {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new CustomEvent("gstack:subscribe", { detail: { source } }));
  } catch {
    // ponytail: no external analytics vendor yet. Add adapter when vendor chosen.
  }
}
