import Cta from "../home/Cta";

function NoBlogs() {
  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <p className="relative z-10 px-5 pt-40 text-center text-2xl text-white lg:text-3xl">
        No posts available at the moment 😓
      </p>
      <Cta />
    </div>
  );
}

export default NoBlogs;
