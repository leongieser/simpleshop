"use client";

import { useState } from "react";
import CheckoutSuccessModal from "./CheckoutSuccessModal";
import { useCartStore } from "@/app/(store)/cart";

export default function CheckoutForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const { clearCart } = useCartStore();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    clearCart();
    setCheckoutSuccess(true);
  };

  return (
    <>
      <CheckoutSuccessModal checkoutSuccess={checkoutSuccess} />
      <div className="p-4">
        <h1 className="text-2xl font-semibold">Checkout</h1>
        <form onSubmit={handleSubmit} className="mt-4">
          <label className="block mb-2">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
          <label className="mt-4 mb-2 ">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
          <button
            type="submit"
            className={`
          px-1 py-2 w-full font-semibold transition duration-300 bg-transparent rounded-md mt-5
          bg-blue-200  outline outline-blue-200 hover:outline-blue-500 active:outline-blue-200 active:bg-blue-200
          outline-offset-2 text-zinc-950 hover:bg-blue-500 hover:text-white`}
          >
            Order now
          </button>
        </form>
      </div>
    </>
  );
}
