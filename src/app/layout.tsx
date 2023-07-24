import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simpleshop",
  description: "A simple shop",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="">
      <body className={`${inter.className} min-w-[300px] min-h-screen no-scrollbar`}>
        {children}
      </body>
    </html>
  );
}
