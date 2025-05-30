import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IMP Digital - Digital Excellence, End to End",
  description: "Full-stack development, infrastructure audits, and AI automation. Scandinavian precision meets enterprise power.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-ivory text-charcoal">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
