"use client";

import Image from "next/image";
import { useState } from "react";
import { useCartStore } from "@/app/(store)/cart";
import CartItem from "./CartItem";

import { useRouter } from "next/navigation";

export default function CartDrawer() {
  const { cart, clearCart, toggleDrawer, isDrawerOpen } = useCartStore();
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);
  const router = useRouter();

  const handleClearCart = () => {
    setIsWarningModalOpen(!isWarningModalOpen);
  };

  const handleDeleteConfirmation = () => {
    clearCart();
    setIsWarningModalOpen(!isWarningModalOpen);
    toggleDrawer();
  };

  const handleCheckout = () => {
    toggleDrawer();
    router.push("/checkout");
  };

  return (
    <>
      {/* //Warning modal */}
      {isWarningModalOpen && (
        <div className="fixed top-0 left-0 z-[999] w-screen h-screen bg-zinc-950 bg-opacity-50 transition-opacity ease-in-out flex justify-center items-center">
          <div className="flex flex-col items-center justify-center px-5 py-10 bg-opacity-100 rounded-lg shadow-xl bg-zinc-50">
            <h5 className="font-bold">Are you sure you want to delete all items?</h5>
            <p>This action cannot be undone</p>
            <div className="flex items-center justify-around w-2/3">
              <button className="px-2 py-1 mt-3 font-semibold transition duration-300 bg-transparent rounded outline outline-zinc-500 outline-offset-2 text-zinc-700 hover:bg-zinc-500 hover:text-white hover:border-transparent">
                abort
              </button>
              <button
                onClick={handleDeleteConfirmation}
                className="px-2 py-1 mt-3 font-semibold text-red-700 transition duration-300 bg-transparent rounded outline outline-red-500 outline-offset-2 hover:bg-red-500 hover:text-white hover:border-transparent"
              >
                clear
              </button>
            </div>
          </div>
        </div>
      )}

      <div
        onClick={() => toggleDrawer()}
        className={`fixed top-0 left-0 z-30 ${
          !isDrawerOpen ? "invisible" : null
        } w-screen h-screen bg-zinc-950 opacity-60 transition-opacity ease-in-out`}
      ></div>
      <div
        aria-label="cart-drawer-header"
        className={`max-w-[600px] fixed z-50 top-0 right-0 h-screen w-3/4 sm:w-2/4 w-lg:w-2/3 xl:w-2/5 bg-zinc-50 shadow-lg transform  ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform ease-in-out`}
      >
        <div className="flex justify-between p-6 shadow-lg border-zinc-400">
          <h2 className="text-lg font-bold">
            Simple<span className="text-zinc-600">cart</span>
          </h2>
          <button onClick={() => toggleDrawer()}>
            <Image
              width={25}
              height={25}
              src={"/x-symbol.svg"}
              alt={"X symbol to close cart drawer"}
            ></Image>
          </button>
        </div>

        <div
          aria-label="cart drawer items"
          className="flex flex-col items-start h-full overflow-y-auto bg-white"
        >
          {cart.length > 0 ? (
            <div className="flex flex-col items-center justify-center w-full mt-3">
              <div className="w-4/5 ">
                <div className="flex justify-around py-2 text-sm border-b-2 sm:text-base md:text-base lg:text-base border-zinc-800">
                  <div className="font-semibold">
                    Items: {cart.reduce((acc, curr) => acc + curr.quantity!, 0)}{" "}
                  </div>
                  <div className="font-semibold">
                    Total:
                    {cart.reduce((acc, curr) => acc + curr.quantity! * curr.price, 0).toFixed(2)} €
                  </div>
                </div>
                <div className="flex justify-around mt-3 ">
                  <button
                    onClick={handleClearCart}
                    className={`  font-semibold transition duration-300 bg-transparent rounded-md
                    bg-red-200 active:bg-red-200 text-sm md:text-base lg:text-base lg:w-28 md:w-26 sm:w-28  outline outline-red-200 outline-offset-2 text-zinc-950 hover:bg-red-500 hover:text-white`}
                  >
                    clear cart
                  </button>
                  <button
                    onClick={handleCheckout}
                    aria-label="go-to-checkout"
                    className={`py-2 px-1 text-sm md:text-base lg:text-base font-semibold transition duration-300 bg-transparent rounded-md
                    bg-emerald-200 lg:w-28 md:w-26 sm:w-28 outline outline-emerald-200 active:bg-emerald-200 outline-offset-2 text-zinc-950 hover:bg-emerald-500 hover:text-white`}
                  >
                    checkout
                  </button>
                </div>
              </div>
            </div>
          ) : null}
          {cart.length > 0 ? (
            cart.map((product) => <CartItem key={product.id} product={product} />)
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full -mt-10 font-medium ">
              <span>
                Wow so <span className="px-1 text-sm font-bold md:text-lg">Simple</span>
              </span>
              <span>there is nothing here yet</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
