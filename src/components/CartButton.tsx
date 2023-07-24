

import Image from "next/image";


import { useCartStore } from "@/app/(store)/cart";

export default function CartButton({ handleCartClick }: { handleCartClick: () => void }) {

  const { cart } = useCartStore();

  const totalQuantity = cart.reduce((acc, curr) => acc + curr.quantity!, 0);

  const quantitiyDotDimensionsMap = () => {
    if (totalQuantity < 10) return 7;
    if (totalQuantity < 100) return 8;
    if (totalQuantity < 1000) return 12;
  };

  return (
    <>
      <button className="relative" onClick={handleCartClick}>
        {cart.length > 0 && (
          <div
            className={`absolute flex items-center justify-center
          w-${quantitiyDotDimensionsMap()}
          h-${quantitiyDotDimensionsMap()}
          p-1 m-0 text-sm text-white rounded-full -right-1 -top-3 bg-emerald-600`}
          >
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
