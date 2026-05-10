"use client";

import { Footer } from "./footer";
import { Sidebar } from "./sidebar";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-on-background relative overflow-hidden">
      <Sidebar />
      <main className="md:ml-64 pt-8 pb-8 px-margin min-h-screen flex flex-col items-center justify-center relative">
        {children}
      </main>
      <Footer />
    </div>
  );
}
