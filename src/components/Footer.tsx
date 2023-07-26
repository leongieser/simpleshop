import ScrollToTopButton from "./ScrollToTopBtn";

export default function Footer() {
  return (
    <footer className="relative flex items-center justify-center h-10 mb-auto font-semibold bg-red-300 ">
      Simple<span className="text-zinc-300">shop</span> © 2023
      <ScrollToTopButton />
    </footer>
  );
}
