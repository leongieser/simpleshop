import { Product } from "@/types";
import Image from "next/image";
import Link from 'next/link';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col overflow-hidden bg-white border rounded-lg shadow-lg border-zinc-200">
    <Link
      className="relative block h-48 overflow-hidden bg-zinc-400 group md:h-64"
      href={`/product/${product.id}`}
    >
      <Image
        width={500}
        height={500}
        src={product.thumbnail}
        alt="product image"
        className="absolute object-cover object-center w-full h-full transition duration-150 group-hover:scale-125 inset0"
      ></Image>
    </Link>
    <div className="flex flex-col p-4 felx-1 sm:p-6">
      <h2 className="mb-2 text-lg font-semibold text-zinc-800">
        <Link
          className="transition duration-100 hover:text-emerald-600"
          href={`/product/${product.id}`}
        >
          {product.title}
        </Link>
      </h2>
      <div className="flex items-center justify-between mt-2 mb-5">
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
    </div>
    <button className="self-center w-5/6 px-4 py-2 mt-auto mb-5 font-semibold text-white rounded-md bg-slate-800">
      Add to Cart
    </button>
  </div>
  );
};

export default ProductCard;