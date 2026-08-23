"use client";

export function CopyLinkButton() {
  async function copyLink() {
    await navigator.clipboard.writeText(window.location.href);
  }

  return (
    <button
      type="button"
      onClick={copyLink}
      className="cursor-pointer border border-outline-variant px-3 py-2 hover:border-primary hover:text-primary-fixed-dim"
    >
      COPY_LINK
    </button>
  );
}
