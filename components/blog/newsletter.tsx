"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("ERROR: ENTER_A_VALID_EMAIL.");
      return;
    }
    setStatus("OK: CHECK_YOUR_INBOX_TO_CONFIRM.");
    setEmail("");
  }

  return (
    <section className="relative mt-12 overflow-visible border border-outline-variant bg-surface-container-low p-6" aria-label="Newsletter signup">
      <span className="crosshair crosshair-tl" aria-hidden="true" />
      <span className="crosshair crosshair-br" aria-hidden="true" />
      <h2 className="font-heading text-headline-md uppercase text-primary-fixed-dim">SUBSCRIBE_FEED</h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-on-surface-variant">One practical lesson about engineering, media processing, or frontend architecture every two weeks.</p>
      <form className="mt-4 flex flex-wrap gap-2" onSubmit={submit}>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="YOU@EXAMPLE.COM" aria-label="Email address" data-od-id="input" className="min-h-11 min-w-0 flex-1 border border-outline-variant bg-background px-3 font-mono text-xs uppercase text-on-surface placeholder:text-on-surface-variant focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" />
        <button type="submit" data-od-id="button" className="cursor-pointer border border-primary-container bg-primary-container px-4 font-mono text-xs font-bold uppercase text-on-primary-container hover:bg-primary-dim">SUBSCRIBE</button>
      </form>
      <p className="mt-2 min-h-4 font-mono text-[11px] uppercase text-primary-fixed-dim" role="status" aria-live="polite">{status}</p>
    </section>
  );
}
