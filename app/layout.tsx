import { AppLayout } from "@/app/shared";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "matrGINx — operator layer for ginn1111",
  description:
    "matrGINx — the matrix-themed operator interface layer built by GIN on the ginn1111 command substrate. Node fleet, command dispatch, system logs, ready for input.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-theme="dark">
      <body className="antialiased">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
