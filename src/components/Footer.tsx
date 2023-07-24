import ScrollToTopButton from "./ScrollToTopBtn";

export default function Footer() {
  return (
    <footer className="relative flex items-center justify-center h-5 pb-2 font-semibold mb-7">
      Simple<span className="text-zinc-300">shop</span> © 2023
      <ScrollToTopButton />
    </footer>
  );
}
