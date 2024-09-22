"use client";

export default function Error({ error, reset }) {
  return (
    <main className="flex h-screen flex-col items-center gap-6 text-white">
      <div className="mx-auto max-w-[1200px] py-72 text-center">
        <h1 className="mb-4 flex items-center gap-2 text-3xl font-semibold">
          <span className="text-6xl">404</span>
          <span>Something went wrong!</span>
        </h1>

        <button
          className="inline-block rounded-md bg-primary-500 px-6 py-3 text-lg text-white hover:bg-primary-500/80"
          onClick={reset}
        >
          Try again
        </button>
      </div>
    </main>
  );
}
