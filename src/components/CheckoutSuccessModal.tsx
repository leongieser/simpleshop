"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CheckoutSuccessModal({ checkoutSuccess }: { checkoutSuccess: boolean }) {
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();

  useEffect(() => {
    if (checkoutSuccess) {
      const timer = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [checkoutSuccess]);

  useEffect(() => {
    if (checkoutSuccess && countdown === 0) {
      router.push("/products");
    }
  }, [countdown, checkoutSuccess]);

  return (
    <>
      {checkoutSuccess ? (
        <div className="fixed z-50 flex items-center justify-center w-screen h-screen transition-opacity ease-in-out bg-opacity-50 bg-zinc-950">
          <div className="p-8 bg-white rounded shadow-md modal-content">
            <h2 className="mb-4 text-2xl font-bold">Checkout Successful!</h2>
            <p>You will be redirected to the home page in {countdown} seconds.</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
