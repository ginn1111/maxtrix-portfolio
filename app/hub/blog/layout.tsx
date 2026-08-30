import Link from "next/link";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="reading-layout mx-auto grid w-full max-w-container-max grid-cols-1 gap-10 px-5 py-8 lg:grid-cols-[minmax(0,720px)_240px] lg:justify-center">
      <nav className="col-span-full mb-[-1.5rem] flex flex-wrap items-center font-mono text-xs uppercase tracking-[0.04em] text-on-surface-variant" aria-label="Blog navigation">
        <Link href="/hub" className="cursor-pointer text-on-surface-variant hover:text-primary-fixed-dim focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">← BACK_TO_HUB</Link>
      </nav>
      {children}
    </div>
  );
}
