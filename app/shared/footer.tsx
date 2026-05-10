"use client";

export function Footer() {
  return (
    <footer className="fixed bottom-0 w-full z-50  px-margin py-2 text-[10px] border-t border-outline-variant bg-background">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="font-mono text-label-sm font-bold text-primary-fixed-dim uppercase">
            © 2023-{new Date().getFullYear()} SUBTERRANEAN_GIN_OS.
            ALL_RIGHTS_RESERVED.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-primary-fixed-dim rounded-full animate-pulse" />
          <span className="font-mono text-label-sm text-primary-fixed-dim">
            SERVER_STABLE
          </span>
        </div>
      </div>
    </footer>
  );
}

