"use client";

import { Footer } from "./footer";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-on-background relative overflow-hidden">
      <Sidebar />
      <Header />
      <main className="md:ml-[60px] lg:ml-64  md:pt-8 py-14 px-margin min-h-screen flex flex-col items-center relative @container">
        {children}
      </main>
      <Footer />
    </div>
  );
}
