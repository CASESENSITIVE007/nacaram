import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Nav from "@/components/Nav";
import PreNav from "@/components/PreNav";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <main className="relative flex flex-col min-h-screen overflow-hidden">
          <header>
            <PreNav />
            <Nav />
          </header>
          <div className="flex-grow flex-1">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
