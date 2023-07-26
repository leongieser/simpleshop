"use client";
import Image from "next/image";

import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      aria-label="scroll-to-top-button"
      onClick={scrollToTop}
      className={`${
        isVisible ? "visible" : "invisible"
      } fixed bottom-8 right-8 z-30 p-2 h-auto bg-zinc-950 text-white rounded-full shadow-md`}
    >
      <Image src={"/arrow-top.svg"} width={25} height={25} alt="arrow pointing to the top" />
    </button>
  );
};

export default ScrollToTopButton;
