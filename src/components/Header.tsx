import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 h-5">
      <nav className="flex items-center justify-between px-4 py-4 shadow-lg bg-zinc-50">
        <div className="text-3xl font-bold cursor-pointer ">
          <Link href={"/"}>
            Simple<span className="text-zinc-300">shop</span>
          </Link>
        </div>

        <Image
          src={"/cart.svg"}
          alt="shopping cart icon"
          width={33}
          height={33}
          className="h-5"
        ></Image>
      </nav>
    </header>
  );
}
