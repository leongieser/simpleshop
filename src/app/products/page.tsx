import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/types";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=0", { next: { revalidate: 10 } });

  const data = await res.json();
  const amendedData = data.products.map((product: Product) => {
    product.isStockLeft = product.stock > 0;
    return product;
  });
  return { products: amendedData };
}

export default async function Products() {
  const data = await getProducts();

  return (
    <>
      <section
        className="grid w-full gap-4 mt-2 sm:grid-cols-2 md:gap-4 lg:grid-cols-2 xl:grid-cols-4 xl:gap-8"
        aria-label="Items-Section"
      >
        {data.products.map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </section>
    </>
  );
}
