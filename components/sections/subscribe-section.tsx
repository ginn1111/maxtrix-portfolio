"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TerminalButton } from "@/components/terminal/terminal-button";
import { Input } from "@/components/ui/input";
import { DisclosureBanner } from "@/components/ui/disclosure-banner";
import { TrustMethodology } from "@/components/ui/trust-methodology";
import { trackSubscribe } from "@/lib/analytics";
import { subscribeSchema, type SubscribeInput } from "@/lib/subscribe";

export function SubscribeSection() {
  const [status, setStatus] = useState<string>("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SubscribeInput>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: { email: "", source: "home" },
  });

  const onSubmit = async (data: SubscribeInput) => {
    setStatus("");
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.status === 429) {
      const body = (await res.json()) as { remainingSeconds?: number };
      setStatus(`RATE_LIMITED_${body.remainingSeconds ?? 60}s`);
      return;
    }

    if (!res.ok) {
      setStatus("SUBSCRIBE_FAILED");
      return;
    }

    reset();
    setStatus("SUBSCRIBE_CONFIRMED");
    void trackSubscribe({ source: data.source });
  };

  return (
    <section className="mt-8 space-y-4 border border-outline-variant bg-surface-container-low p-6">
      <div className="space-y-2">
        <div className="font-mono text-xs text-primary-fixed-dim">[ SUBSCRIBE_NODE ]</div>
        <h2 className="font-heading text-2xl text-primary-fixed-dim uppercase">Subscribe for AI tooling updates</h2>
        <p className="text-sm text-on-surface-variant">
          Get sharp notes on AI tools, workflows, and experiments. No spam. Low volume.
        </p>
      </div>

      <DisclosureBanner />

      <form className="flex flex-col gap-3 md:flex-row" onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" {...register("source")} />
        <div className="flex-1">
          <Input
            type="email"
            placeholder="operator@domain.com"
            aria-label="Email address"
            {...register("email")}
          />
          {errors.email ? <p className="mt-1 text-xs text-red-400">{errors.email.message}</p> : null}
        </div>
        <TerminalButton type="submit" disabled={isSubmitting} className="h-8 px-4 py-1">
          {isSubmitting ? "SENDING" : "SUBSCRIBE"}
        </TerminalButton>
      </form>

      {status ? <p className="font-mono text-xs text-primary-fixed-dim">{status}</p> : null}

      <TrustMethodology />
    </section>
  );
}
