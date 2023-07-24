import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=0", { next: { revalidate: 10 } });
  return await res.json();
}

export default async function Products() {
  const data = await getProducts();
  console.log(data);
  return (
    <section
      className="grid w-full gap-4 mt-9 sm:grid-cols-2 md:gap-4 lg:grid-cols-2 xl:grid-cols-4 xl:gap-8"
      aria-label="Items Section"
    >
      {data.products.map((product: any) => (
      < ProductCard product={product} key={product.id}/>
      ))}
    </section>
  );
}
