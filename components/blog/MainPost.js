import { urlFor } from "@/blog/lib/sanity-img";
import { fetchLatestPost } from "@/lib/services/api";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

async function MainPost() {
  const post = await fetchLatestPost();

  console.log(post.slug.current);

  return (
    <section className="mx-auto max-w-[1200px] px-5">
      <Link
        href={`/blog/${post.slug.current}`}
        className="relative mb-12 hidden overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat p-10 pt-44 text-white lg:block"
        style={{
          backgroundImage: `url(${urlFor(post.mainImage).url()})`,
        }}
      >
        <div className="absolute inset-0 bg-[#14162466]"></div>

        {/* Content */}
        <div className="relative">
          <div className="mb-4 flex max-w-xl flex-wrap items-center gap-3 text-sm font-medium">
            {post.categories.map((category, index) => (
              <span
                key={index}
                className="w-fit rounded-md bg-[#4B6BFB] px-3 py-1"
              >
                {category.title}
              </span>
            ))}
          </div>
          <h3 className="mb-6 max-w-4xl text-[40px] font-bold leading-normal">
            {post.title}
          </h3>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <Image
                src={urlFor(post.author.image).url()}
                alt={`Image of ${post.author.name}`}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover object-center"
              />
              <p>{post.author.name}</p>
            </div>
            <p className="">
              {format(new Date(post.publishedAt), "dd MMM, yyyy")}
            </p>
          </div>
        </div>
      </Link>

      {/* Mobile screens */}
      <Link
        href={`/blog/${post.slug.current}`}
        className="relative mb-12 overflow-hidden rounded-xl p-10 pt-20 text-white lg:hidden"
      >
        <div className="relative">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={`Image of ${post.author.name}`}
            width={1200}
            height={1200}
            className="mb-6 h-64 w-full rounded-xl object-cover object-center"
          />
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm font-medium">
            {post.categories.map((category, index) => (
              <span
                key={index}
                className="w-fit rounded-md bg-[#4B6BFB] px-3 py-1"
              >
                {category.title}
              </span>
            ))}
          </div>

          <h3 className="mb-6 text-2xl font-bold leading-normal">
            {post.title}
          </h3>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <Image
                src={urlFor(post.author.image).url()}
                alt={`Image of ${post.author.name}`}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover object-center"
              />
              <p>{post.author.name}</p>
            </div>
            <p className="">
              {format(new Date(post.publishedAt), "dd MMM, yyyy")}
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default MainPost;
