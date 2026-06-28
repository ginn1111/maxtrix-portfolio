import { SITE_CONFIG } from "@/lib/site-config";

export function DisclosureBanner({ className = "" }: { className?: string }) {
  return (
    <div className={`border border-amber-500/40 bg-amber-500/10 p-3 font-mono text-xs text-amber-200 ${className}`.trim()}>
      <span className="text-amber-300">[ DISCLOSURE ]</span> {SITE_CONFIG.affiliateDisclosure}
    </div>
  );
}
