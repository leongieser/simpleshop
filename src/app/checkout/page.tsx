"use client";

import { useState, useEffect, ChangeEvent } from "react";

const Checkout = () => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
    }
  };

  useEffect(() => {
    validateEmail();
  }, [email]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <form className="flex items-center justify-center w-full">
          <div className="p-5">Email:</div>
          <input
            type="email"
            placeholder='Enter your email address'
            value={email}
            className="invalid:bg-red-200 invalid:text-red-800"
            onChange={handleEmailChange}
          ></input>
        </form>
        {error && <div className="p-4 font-bold text-white bg-red-800">{error}</div>}
      </div>
    </div>
  );
};

export default Checkout;
