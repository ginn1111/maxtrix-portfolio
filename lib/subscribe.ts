import { z } from "zod";

export const subscribeSchema = z.object({
  email: z.string().trim().min(1, "Email is required").email("Invalid email format"),
  source: z.string().trim().min(1).max(80).default("unknown"),
});

export type SubscribeInput = z.infer<typeof subscribeSchema>;

const rateLimitMap = new Map<string, number>();
export const SUBSCRIBE_RATE_LIMIT_MS = 5 * 60 * 1000;

export function getRateLimitKey(email: string) {
  return email.trim().toLowerCase();
}

export function getSubscribeRateLimit(email: string): {
  limited: boolean;
  remainingSeconds: number;
} {
  const key = getRateLimitKey(email);
  const last = rateLimitMap.get(key);
  if (!last) return { limited: false, remainingSeconds: 0 };

  const elapsed = Date.now() - last;
  if (elapsed >= SUBSCRIBE_RATE_LIMIT_MS) {
    rateLimitMap.delete(key);
    return { limited: false, remainingSeconds: 0 };
  }

  return {
    limited: true,
    remainingSeconds: Math.ceil((SUBSCRIBE_RATE_LIMIT_MS - elapsed) / 1000),
  };
}

export function markSubscribeAttempt(email: string) {
  rateLimitMap.set(getRateLimitKey(email), Date.now());
}

export function clearSubscribeAttempt(email: string) {
  rateLimitMap.delete(getRateLimitKey(email));
}

export function cleanupSubscribeRateLimit(now = Date.now()) {
  for (const [key, value] of rateLimitMap.entries()) {
    if (now - value >= SUBSCRIBE_RATE_LIMIT_MS) rateLimitMap.delete(key);
  }
}
