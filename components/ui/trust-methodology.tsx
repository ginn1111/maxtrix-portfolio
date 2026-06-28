import { SITE_CONFIG } from "@/lib/site-config";

export function TrustMethodology({ className = "" }: { className?: string }) {
  return (
    <section className={`border border-outline-variant bg-surface-container-low p-4 ${className}`.trim()}>
      <div className="mb-3 font-mono text-sm text-primary-fixed-dim">[ TRUST_METHOD ]</div>
      <ul className="space-y-2 text-sm text-on-surface-variant">
        {SITE_CONFIG.methodology.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="font-mono text-primary-fixed-dim">&gt;</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
