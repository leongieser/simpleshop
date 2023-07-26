import { Product } from "@/types";
import Image from "next/image";

import { useCartStore } from "@/app/(store)/cart";

export default function QuantitySelectionBtns({ product }: { product: Product }) {
  const { addToCart, removeFromCart } = useCartStore();

  return (
    <div className="flex items-center">
      {product.quantity === 1 ? (
        <button
          onClick={() => removeFromCart(product)}
          className="flex items-center justify-center font-semibold text-white bg-red-800 rounded-md w-7 h-7"
        >
          <Image
            className="w-4 h-4"
            src={"/trashbin.svg"}
            alt="trash bin icon"
            width={25}
            height={25}
          ></Image>
        </button>
      ) : (
        <button
          onClick={() => removeFromCart(product)}
          className="font-semibold text-center text-white rounded-md w-7 h-7 bg-zinc-800"
        >
          -
        </button>
      )}

      <div className="flex items-center justify-center w-3 h-3 p-4 mx-2 font-semibold bg-white rounded-md">
        {product.quantity}
      </div>
      <button
        disabled={product.quantity! >= product.stock}
        onClick={() => addToCart(product)}
        className={`font-semibold text-center text-white rounded-md w-7 h-7 ${
          product.quantity === product.stock ? "bg-zinc-300" : "bg-zinc-800"
        }`}
      >
        +
      </button>
    </div>
  );
}
