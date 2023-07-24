"use client";

import { Product } from "@/types";
import { useState, useEffect } from "react";
import Loading from "./loading";
import Link from "next/link";
import { useCartStore } from "@/app/(store)/cart";

async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 30 },
  });
  return await res.json();
}

export default function ProductId({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { addToCart } = useCartStore();

  useEffect(() => {
    const fetchData = async () => {
      const productData = await getProduct(params.id);
      setProduct(productData);
      setSelectedImage(productData.thumbnail);
    };

    fetchData();
  }, [params.id]);

  const handleThumbnailClick = (imageURL: string) => setSelectedImage(imageURL);

  const handleAddToCart = () => addToCart(product!);

  if (!product) return <Loading />;

  return (
    <div className="relative flex flex-col items-center min-h-screen mt-10 ">
      <Link href={"/products"}>
      <button className="absolute top-4 left-4"><img className="w-10 h-10"src={"/backArrow.svg"}/></button>
      </Link>
      <div className="flex flex-col items-center justify-center max-w-2xl ">
        <div className="border rounded-md shadow-lg h-96 w-96 border-zinc-200">
          <img
            className="object-cover w-full h-full rounded-md "
            src={selectedImage!}
            alt={`${product.title} product image`}
          />
        </div>
        <div className="flex justify-around mt-8">
          {product.images
            .slice(1)
            .reverse()
            .map((image, i) => (


                <div  key={i + "_key"} className="w-32 h-32 m-5 ">
                <img

                  src={image}
                  alt="product image"
                  className={`object-cover w-full h-full rounded-md border-1 shadow-md border-zinc-200 ${
                    selectedImage === image ? "border-2 border-zinc-500" : ""
                  }`}
                  onClick={() => handleThumbnailClick(image)}
                  />
              </div>

            ))}
        </div>
      </div>

      <div className="flex flex-col items-center max-w-2xl border rounded-md mt-7 border-zinc-10 shadow-lg0">
        <div className="p-7">
          <h1 className="self-start text-3xl font-extrabold text-left">{product.title}</h1>
          <h3 className="self-start mt-1 text-2xl font-semibold text-left ">
            <span className="text-zinc-400">by</span> {product.brand}
          </h3>
          <p className="self-start mt-3">
            <span className="font-semibold">Description:</span> {product.description}
          </p>
          <p className="self-start mt-3">
            <span className="font-semibold">Category:</span> {product.category}
          </p>
          <p className="self-start mt-3">
            <span className="font-semibold">Available:</span> {product.stock}
          </p>
        </div>

        <div className="flex items-center justify-between ">
          <p>
            <span className="text-3xl font-bold text-slate-900">{product.price} € </span>
            <span className="text-sm line-through text-slate-900">
              {Math.floor(product.price / (1 - product.discountPercentage / 100)).toFixed(2)} €
            </span>
          </p>
          <div className="flex items-center">
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              {product.rating} ★
            </span>
          </div>
        </div>
        <button onClick={handleAddToCart} className="self-center w-5/6 px-4 py-2 mt-5 mb-5 text-white rounded-md mb-2font-semibold bg-slate-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
