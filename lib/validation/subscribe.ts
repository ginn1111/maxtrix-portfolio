import { z } from "zod";
import { siteConfig } from "@/data/site";

export const subscribeSchema = z.object({
  email: z.string().trim().email("Valid email required"),
  source: z.enum(siteConfig.newsletterSources),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Consent required" }),
  }),
  company: z.string().trim().max(0).optional(),
});

export type SubscribeRequest = z.infer<typeof subscribeSchema>;
