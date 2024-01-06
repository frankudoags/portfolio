
import { SmoothScroll } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frank Udoags",
  description: "Frontend Engineer, Rustacean, and Open Source Enthusiast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}
