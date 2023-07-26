"use client";

import Link from "next/link";

import { useState, useEffect } from "react";
import CartButton from "./CartButton";
import CartDrawer from "./CartDrawer";
import ScrollToTopButton from "./ScrollToTopBtn";

import { useCartStore } from "@/app/(store)/cart";

export default function Header() {
  const [bodyScrollPosition, setBodyScrollPosition] = useState(0);
  const { isDrawerOpen } = useCartStore();

  useEffect(() => {
    if (isDrawerOpen) {
      setBodyScrollPosition(window.scrollY);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      window.scrollTo(0, bodyScrollPosition);
    }
  }, [isDrawerOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 h-5 z-999">
        <nav className="flex items-center justify-between px-4 py-5 shadow-lg bg-zinc-50">
          <div className="text-3xl font-bold cursor-pointer ">
            <Link href={"/"}>
              Simple<span className="text-zinc-300">shop</span>
            </Link>
          </div>
          <CartButton />
        </nav>
      </header>
      <CartDrawer />
      <ScrollToTopButton />
    </>
  );
}
