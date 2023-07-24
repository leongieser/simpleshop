import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Simple | Items",
  description: "All the simple items one could wish for",
};

export default function ItemsLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Header />
      <main className="h-full py-6 mx-auto mt-5 sm:py-8 lg:py-12 no-scrollbar">
        <div className="px-4 mx-auto max-w-screen-2xl oversflow-auto md:px-8">{children}</div>
      </main>
      <Footer />
    </>
  );
}
