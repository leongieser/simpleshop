"use client";

import { useCartStore } from "../(store)/cart";

import Link from "next/link";
import Image from "next/image";

import CheckoutForm from "@/components/CheckoutForm";
import QuantitySelectionBtns from "@/components/QuantitySelectionBtns";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Simple checkout page",
};

export default function Checkout() {
  const { cart } = useCartStore();

  return (
    <>
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full font-medium ">
          <span>
            Wow so <span className="px-1 text-sm font-bold md:text-lg">Simple</span>
          </span>
          <span>there is nothing here yet</span>
          <Link href={"/products"}>
            <button className="absolute top-4 left-4">
              <img className="w-10 h-10" src={"/backArrow.svg"} />
            </button>
          </Link>
        </div>
      ) : (
        <section
          aria-label="checkout-page"
          className="relative flex flex-col items-center justify-start w-screen h-full bg-white mt-14"
        >
          <Link href={"/products"}>
            <button className=" sm:absolute position top-4 left-4">
              <img className="w-10 h-10" src={"/backArrow.svg"} />
            </button>
          </Link>
          <CheckoutForm />

          <section
            aria-lable="cart-items-overview"
            className="w-full sm:w-[650px] md:w-[750px] lg:w-[750px] xl:w-[750px] 2xl:w-[750px] 3xl:w-[750px] px-3 mt-5"
          >
            {cart.length > 0 ? (
              <div className="flex justify-around py-2 mb-5 border-b-2 border-zinc-800 ">
                <div className="font-semibold">
                  <span className="text-lg font-extrabold">Items:</span>{" "}
                  {cart.reduce((acc, curr) => acc + curr.quantity!, 0)}{" "}
                </div>
                <div className="font-semibold ">
                  <span className="text-lg font-extrabold">Total:</span>{" "}
                  {cart.reduce((acc, curr) => acc + curr.quantity! * curr.price, 0).toFixed(2)} €
                </div>
              </div>
            ) : null}

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex mt-5 bg-white border rounded-lg shadow-lg border-1 border-zinc-400"
              >
                <Image
                  className="object-cover w-40 h-40 rounded-tl-md rounded-bl-md"
                  src={item.thumbnail}
                  alt={"picture of " + item.title}
                  width={150}
                  height={150}
                />
                <div className="flex flex-col justify-between p-5 bg-white">
                  <p className="text-xl font-bold">{item.title}</p>
                  <p className="font-medium">{item.price} €</p>
                  <QuantitySelectionBtns product={item} />
                  <p className="mt-2">{(item.price * item.quantity!).toFixed(2)} €</p>
                </div>
              </div>
            ))}
          </section>
        </section>
      )}
    </>
  );
}
