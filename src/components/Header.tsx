"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import CartButton from "./CartButton";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartClick = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <header className="sticky top-0 z-50 h-5 z-999">
        <nav className="flex items-center justify-between px-4 py-5 shadow-lg bg-zinc-50">
          <div className="text-3xl font-bold cursor-pointer ">
            <Link href={"/"}>
              Simple<span className="text-zinc-300">shop</span>
            </Link>
          </div>
          <CartButton handleCartClick={handleCartClick} />
        </nav>
      </header>

      <div
        className={`fixed z-50 top-0 right-0 h-full w-3/4 sm:w-2/4 w-lg:w-2/3 xl:w-1/5 bg-white shadow-lg transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform ease-in-out`}
      >
        <div className="flex justify-between p-7">
          <h2 className="text-lg font-bold">Simple<span className='text-zinc-600'>cart</span></h2>
          <button onClick={handleCartClick}>
            <Image className="h-auto"
              width={25}
              height={50}
              src={"/x-symbol.svg"}
              alt={"X symbol to close cart drawer"}
            ></Image>
          </button>
          {/* TODO Cart */}
        </div>
      </div>
    </>
  );
}
