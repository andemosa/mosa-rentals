import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mosa Rentals",
  description: "Car Rental Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-svh flex flex-col">
          <Navbar />
          <main className="flex-1 bg-home-background flex flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
