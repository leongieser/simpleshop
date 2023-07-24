import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen m-0 lg:flex-col lg:flex">
      <div className="flex flex-col items-center lg:flex-row">
        <div>
          <h1 className="p-4 text-5xl font-bold md:text-md lg:xl:2xl:text-9xl">
            Simple<span className="text-zinc-300">shop</span>
          </h1>
          <h4 className="text-2xl font-light text-right text-zinc-600">wow so minimalistic</h4>
        </div>
        <Image
          src="/simple_logo.png"
          className="w-[250px] md:w-[350px] mt-2 xl:mt-0 2xl:mt-0 xl:ml-4 xl:w-[300px] 2xl:w-[500px]"
          width={500}
          height={500}
          alt="Simpleshop logo"
          priority={true}
        />
      </div>
      <Link href={"/products"}>
        <button className="px-4 py-2 font-semibold transition duration-300 bg-transparent rounded mt-7 outline outline-zinc-500 outline-offset-2 text-zinc-700 hover:bg-zinc-500 hover:text-white hover:border-transparent">
          Explore Now
        </button>
      </Link>
    </main>
  );
}
