import { codeToHtml } from "shiki";
import { GIN_MATRIX_THEME } from "@/lib/shiki-theme";
import { CodeCopyButton } from "./code-copy-button";

interface ShikiCodeBlockProps {
  name: string;
  language: "shellscript" | "typescript";
  code: string;
}

export async function ShikiCodeBlock({
  name,
  language,
  code,
}: ShikiCodeBlockProps) {
  const html = await codeToHtml(code, {
    lang: language,
    theme: GIN_MATRIX_THEME,
  });

  return (
    <div className="my-6 overflow-hidden border border-outline-variant bg-surface-container-low">
      <div className="flex items-center gap-2 border-b border-outline-variant bg-background px-3 py-2 font-mono">
        <span className="text-xs uppercase text-on-surface">{name}</span>
        <span className="border border-outline-variant px-2 py-0.5 text-[10px] uppercase text-on-surface-variant">
          {language === "shellscript" ? "shell" : language}
        </span>
        <CodeCopyButton code={code} />
      </div>
      <div
        className="overflow-x-auto p-4 text-[13px] leading-6 [&_code]:font-mono [&_code]:text-[13px] [&_pre]:m-0"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
