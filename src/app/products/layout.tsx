import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Simple | Items",
  description: "All the simple items one could wish for",
};

export default function ItemsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="h-full py-6 mx-auto sm:py-8 lg:py-12 no-scrollbar">
        <div className="px-4 mx-auto overflow-auto mt-7 max-w-screen-2xl md:px-8">{children}</div>
      </main>
    </>
  );
}
