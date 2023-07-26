"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { useCartStore } from "@/app/(store)/cart";
import QuantitySelectionBtns from "./QuantitySelectionBtns";

export default function CartItem({ product }: { product: Product }) {
  const { addToCart, removeFromCart } = useCartStore();

  return (
    <div
      key={product.id}
      className="flex p-3 rounded-md shadow-md self-center items-center justify-between w-[95%] max-w-[500px] mt-3 bg-zinc-100"
    >
      <div className="flex items-center">
        <Link href={`/products/${product.id}`}>
          <Image
            className="object-cover rounded-md w-14 h-14"
            src={product.thumbnail}
            alt={"picture of " + product.title}
            width={50}
            height={50}
          />
        </Link>
        <div className="flex flex-col">
          <span className="ml-3 text-xs font-semibold md:text-base">{product.title}</span>
          <span className="ml-3">{(product.price * product.quantity!).toFixed(2)} €</span>
        </div>
      </div>

      <QuantitySelectionBtns product={product} />
    </div>
  );
}
