import type { BundledLanguage, ThemeRegistration } from "shiki";

export const GIN_MATRIX_THEME: ThemeRegistration = {
  name: "gin-matrix",
  type: "dark",
  colors: {
    "editor.background": "#112615",
    "editor.foreground": "#83f5c8",
    "editorLineNumber.foreground": "#6ea098",
    "editor.selectionBackground": "#1ad6b044",
    "editor.lineHighlightBackground": "#1ad6b00a",
  },
  tokenColors: [
    { scope: ["comment", "punctuation.definition.comment"], settings: { foreground: "#6ea098", fontStyle: "italic" } },
    { scope: ["keyword", "storage", "storage.type", "storage.modifier"], settings: { foreground: "#1ad6b0", fontStyle: "bold" } },
    { scope: ["string", "constant.character", "constant.other"], settings: { foreground: "#18e000" } },
    { scope: ["entity.name.function", "support.function", "meta.function-call"], settings: { foreground: "#83f5c8" } },
    { scope: ["variable", "variable.parameter", "entity.name.variable"], settings: { foreground: "#f0a02a" } },
    { scope: ["constant.numeric", "constant.language"], settings: { foreground: "#1ad6b0" } },
    { scope: ["entity.name.type", "support.type", "entity.name.class"], settings: { foreground: "#18e000", fontStyle: "bold" } },
  ],
};

export const ARTICLE_LANGUAGES: BundledLanguage[] = ["shellscript", "typescript"];
