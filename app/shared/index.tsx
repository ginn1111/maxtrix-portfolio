"use client";

import { Footer } from "./footer";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-on-background relative overflow-x-clip">
      <Sidebar />
      <Header />
      <main className="md:ml-[60px] lg:ml-[var(--rail)] md:pt-8 py-14 px-margin min-h-screen flex flex-col items-center relative @container">
        <div className="w-full max-w-[var(--maxw)] flex flex-col items-center">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
