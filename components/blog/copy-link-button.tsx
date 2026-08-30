"use client";

export function CopyLinkButton() {
  async function copyLink() {
    await navigator.clipboard.writeText(window.location.href);
  }

  return (
    <button
      type="button"
      onClick={copyLink}
      className="cursor-pointer border border-outline-variant px-3 py-2 hover:border-primary hover:text-primary-fixed-dim focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      COPY_LINK
    </button>
  );
}
