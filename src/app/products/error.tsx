"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-9xl">Oops!</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 mt-7 sm:text-4xl">
          Something went wrong
        </p>

        <button
          type="button"
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white rounded bg-zinc-600 hover:bg-zinc-700 "
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
