import { DigitalFlicker } from "@/components/ui/glitch-text";

type ArticleCalloutVariant = "note" | "warning";

type ArticleCalloutProps = {
  variant: ArticleCalloutVariant;
  children: React.ReactNode;
};

const CALLOUT_STYLES: Record<
  ArticleCalloutVariant,
  {
    label: string;
    borderLeftColor: string;
    titleClassName: string;
    glitchColor?: string;
  }
> = {
  note: {
    label: "NOTE",
    borderLeftColor: "var(--accent)",
    titleClassName: "text-primary-fixed-dim",
  },
  warning: {
    label: "WARNING",
    borderLeftColor: "var(--internal-fg)",
    titleClassName: "text-secondary",
    glitchColor: "var(--internal-fg)",
  },
};

export function ArticleCallout({ variant, children }: ArticleCalloutProps) {
  const styles = CALLOUT_STYLES[variant];

  return (
    <div
      className="my-6 border border-outline-variant border-l-4 bg-surface-container-low p-4"
      style={{ borderLeftColor: styles.borderLeftColor }}
    >
      <DigitalFlicker
        config={{ delay: 7000, xOffest: 2 }}
        glitchColor={styles.glitchColor}
        className={`mb-1 font-mono text-xs font-bold uppercase ${styles.titleClassName}`}
      >
        {styles.label}
      </DigitalFlicker>
      <p className="mb-0 text-sm">{children}</p>
    </div>
  );
}
