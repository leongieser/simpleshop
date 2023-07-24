"use client";

export default function Loading() {

  return (
    <div className="flex flex-col items-center min-h-screen mt-10 animate-pulse">
      <div className="flex flex-col items-center justify-center max-w-2xl ">
        <div className="border rounded-md shadow-lg h-96 w-96 border-zinc-200">
          <div className="object-cover w-full h-full rounded-md bg-zinc-200"> </div>
        </div>
        <div className="flex justify-around mt-8">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="w-32 h-32 m-5 rounded-md bg-zinc-200">
                <div className="object-cover w-full h-full rounded-md shadow-md border-1 border-zinc-200 "></div>
              </div>
            ))}
        </div>
      </div>

      <div className="flex flex-col items-center max-w-2xl min-w-[400px] border rounded-md shadow-lg mt-7 border-zinc-10">
        <div className="p-4">
          <h1 className="self-start text-3xl font-bold text-left rounded-md bg-zinc-200 text-zinc-200">################</h1>
          <h3 className="self-start mt-1 text-2xl font-semibold text-left ">
            <span className="text-zinc-400">by <span className='rounded-md text-zinc-200 bg-zinc-200'>############</span></span>
          </h3>
          <p className="self-start mt-3">
            <span className="font-semibold">Description: <span className='rounded-md text-zinc-200 bg-zinc-200'>############</span></span>
          </p>
          <p className="self-start mt-3">
            <span className="font-semibold">Category: <span className='rounded-md text-zinc-200 bg-zinc-200'>############</span></span>
          </p>
          <p className="self-start mt-3">
            <span className="font-semibold">Available: <span className='rounded-md text-zinc-200 bg-zinc-200'>###</span></span>
          </p>
        </div>

        <div className="flex items-center justify-between ">
          <p>
            <span className="text-3xl font-bold text-slate-900"><span className='rounded-md text-zinc-200 bg-zinc-200'>###</span> € </span>
            <span className="text-sm line-through text-slate-900">

            </span>
          </p>
          <div className="flex items-center">
          <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              <span className="text-yellow-200">##</span> ★
            </span>
          </div>
        </div>
        <button className="self-center w-5/6 px-4 py-2 mt-5 mb-5 text-white rounded-md mb-2font-semibold bg-slate-800">
          <span className="rounded-md text-slate-800">###########</span>
        </button>
      </div>
    </div>
  );
}
