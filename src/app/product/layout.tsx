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
      <main className="h-[calc(100%-1.25rem)] py-6 mx-auto mt-2 sm:py-8 lg:py-12">
        <div className="px-4 mx-auto max-w-screen-2xl md:px-8">{children}</div>
      </main>
    </>
  );
}
