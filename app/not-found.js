import Link from "next/link";

function NotFound() {
  return (
    <main className="mt-4 h-screen space-y-6 py-72 text-center text-white">
      <h1 className="text-3xl font-semibold">
        This page could not be found 😓
      </h1>
      <Link
        href="/"
        className="inline-block w-fit rounded-md bg-primary-500 px-6 py-3 text-lg text-white transition-all duration-300 hover:bg-primary-500/80"
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
