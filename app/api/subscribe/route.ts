import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  cleanupSubscribeRateLimit,
  clearSubscribeAttempt,
  getSubscribeRateLimit,
  markSubscribeAttempt,
  subscribeSchema,
} from "@/lib/subscribe";
import { SITE_CONFIG } from "@/lib/site-config";

export async function POST(req: NextRequest) {
  const json = await req.json().catch(() => null);
  const parsed = subscribeSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { errors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const { email, source } = parsed.data;
  const rateLimit = getSubscribeRateLimit(email);
  if (rateLimit.limited) {
    return NextResponse.json(rateLimit, { status: 429 });
  }

  const { RESEND_API_KEY } = process.env;
  if (!RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 },
    );
  }

  const resend = new Resend(RESEND_API_KEY);
  markSubscribeAttempt(email);

  try {
    await resend.emails.send({
      from: SITE_CONFIG.subscribe.from,
      to: SITE_CONFIG.subscribe.recipient,
      subject: `${SITE_CONFIG.subscribe.subjectPrefix} ${email}`,
      text: `New subscriber\n\nEmail: ${email}\nSource: ${source}`,
    });
  } catch (error) {
    clearSubscribeAttempt(email);
    console.error("subscribe resend error", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }

  cleanupSubscribeRateLimit();
  return NextResponse.json({ success: true }, { status: 200 });
}
