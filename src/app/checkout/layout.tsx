import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Simple | Checkout",
  description: "All the simple items one could wish for",
};

export default function ItemsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="w-screen h-screen">{children}</main>
    </>
  );
}
