import Image from "next/image";

import { useCartStore } from "@/app/(store)/cart";

export default function CartButton({ handleCartClick }: { handleCartClick: () => void }) {
  const { cart } = useCartStore();

  const totalQuantity = cart.reduce((acc, curr) => acc + curr.quantity!, 0);

  const quantityDotWidth = totalQuantity > 100 ? "w-8" : totalQuantity > 10 ? "w-7" : "w-5";
  const quantityDotHeight = totalQuantity > 100 ? "h-8" : totalQuantity > 10 ? "h-7" : "h-5";

  return (
    <>
      <button className="relative bg-red-300" onClick={handleCartClick}>
        {cart.length > 0 && (
          <div className={`absolute flex items-center justify-center flex-grow ${quantityDotWidth} ${quantityDotHeight}  text-white rounded-full -right-1 -top-3 bg-emerald-600`}>
            {totalQuantity}
          </div>
        )}
        <Image
          src={"/cart.svg"}
          alt="shopping cart icon"
          width={32}
          height={32}
          className={`h-auto mr-2`}
        ></Image>
      </button>
    </>
  );
}
