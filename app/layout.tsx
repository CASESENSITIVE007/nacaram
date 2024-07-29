import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import PreNav from "@/components/nav/PreNav";
import Footer from "@/components/Footer";
import ColorSelector from "@/components/ColorSelector";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nacaram",
  description: "The most luxurious handbags shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <div className="fixed bottom-4 right-4 z-50 rounded-full bg-primary p-2 shadow-lg">
          <ColorSelector />
        </div>
        <main className="relative flex min-h-screen flex-col overflow-clip">
          <header>
            <PreNav />
            <Nav />
          </header>
          <div className="flex-1 flex-grow">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
