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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
