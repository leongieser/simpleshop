"use client";

import Image from "next/image";
import Link from "next/link";

import { useCartStore } from "@/app/(store)/cart";
import { Product } from "@/types";

export const ProductCard = ({ product }: { product: Product }) => {
  const { cart, addToCart } = useCartStore();

  const handleAddToCart = () => {
    if (product.isStockLeft) addToCart(product);
  };

  return (
    <section
      aria-label="product-card"
      className="flex flex-col overflow-hidden bg-white border rounded-lg shadow-lg border-zinc-200"
    >
      <Link
        className="relative block h-48 overflow-hidden bg-zinc-400 group md:h-64"
        href={`/products/${product.id}`}
      >
        <Image
          width={500}
          height={500}
          src={product.thumbnail}
          alt="product image"
          className="absolute object-cover object-center w-full h-full transition duration-150 group-hover:scale-125 inset0"
        ></Image>
      </Link>
      <section aria-label="product-details" className="flex flex-col p-4 felx-1 sm:p-6">
        <h2 className="mb-2 text-lg font-bold text-zinc-800">
          <Link
            className="transition duration-100 hover:text-emerald-600"
            href={`/products/${product.id}`}
          >
            {product.title}
          </Link>
        </h2>
        <p className="cursor-pointer line-clamp-2">
          <Link
            className="transition duration-100 hover:text-emerald-600"
            href={`/products/${product.id}`}
          >
            {product.description}
          </Link>
        </p>
        <div className="flex items-center justify-between mt-2 mb-3">
          <p>
            <span className="text-3xl font-bold text-slate-900">{product.price} € </span>
            <span className="text-sm line-through text-slate-900">
              {Math.floor(product.price / (1 - product.discountPercentage / 100)).toFixed(0)} €
            </span>
          </p>

          <div className="flex items-center">
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              {product.rating} ★
            </span>
          </div>
        </div>
        <div>In stock: {product.stock}</div>
      </section>
      <button
        disabled={product.quantity! >= product.stock}
        onClick={handleAddToCart}
        className={`self-center w-3/4 px-4 py-2 mt-auto mb-4 font-semibold text-white rounded-md "
        ${
          product.isStockLeft
            ? "bg-zinc-800 hover:bg-emerald-500 active:bg-emerald-200"
            : "bg-zinc-300 hover:none"
        }`}
      >
        {product.isStockLeft ? "Add to Cart" : "No stock left"}
      </button>
    </section>
  );
};
