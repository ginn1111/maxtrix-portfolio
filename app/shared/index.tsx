"use client";

import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { Footer } from "./footer";
import { usePathname } from "next/navigation";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background text-on-background relative overflow-hidden">
      <Header currentPath={pathname} />
      <Sidebar />
      <main className="md:ml-64 pt-24 pb-24 px-margin min-h-screen flex flex-col items-center justify-center relative">
        {children}
      </main>
      <Footer />
    </div>
  );
}

