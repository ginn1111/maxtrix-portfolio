type AnalyticsPayload = Record<string, unknown>;

declare global {
  interface Window {
    va?: {
      track?: (event: string, payload?: AnalyticsPayload) => void | Promise<void>;
    };
    plausible?: (event: string, options?: { props?: AnalyticsPayload }) => void;
  }
}

async function postAnalytics(event: string, payload: AnalyticsPayload) {
  const endpoint = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT;
  if (!endpoint) return;

  await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event, ...payload }),
    keepalive: true,
  });
}

export async function trackEvent(event: string, payload: AnalyticsPayload = {}) {
  try {
    if (typeof window !== "undefined") {
      if (typeof window.va?.track === "function") {
        await window.va.track(event, payload);
        return;
      }
      if (typeof window.plausible === "function") {
        window.plausible(event, { props: payload });
        return;
      }
    }

    await postAnalytics(event, payload);
  } catch (error) {
    console.warn("analytics failed", { event, error });
  }
}

export function trackAffiliateClick(payload: AnalyticsPayload = {}) {
  return trackEvent("affiliate_cta_click", payload);
}

export function trackSubscribe(payload: AnalyticsPayload = {}) {
  return trackEvent("subscribe_submit", payload);
}
