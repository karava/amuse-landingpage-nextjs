import { TOTAL_POSTS_BLOG } from "@/lib/constants";
import Pagination from "../ui/Pagination";
import BlogItem from "./BlogItem";
import NoBlogs from "./NoBlogs";
import { fetchBlogs } from "@/lib/services/api";

async function BlogPosts({ filter }) {
  const data = await fetchBlogs(filter, TOTAL_POSTS_BLOG);

  const Posts = data.posts;

  const count = data.count;
  const totalPages = Math.ceil(count / TOTAL_POSTS_BLOG);

  if (Posts.length < 1) return <NoBlogs />;

  return (
    <section className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center px-5">
      <h2 className="mb-8 bg-secondary-heading-gradient bg-clip-text text-center text-4xl font-bold text-transparent lg:text-[52px]">
        Latest Posts
      </h2>

      <div className="mb-8 grid grid-cols-1 gap-x-5 gap-y-8 lg:mb-16 lg:grid-cols-3">
        {Posts.map((post, index) => (
          <BlogItem key={index} post={post} />
        ))}
      </div>

      <Pagination count={totalPages} />
    </section>
  );
}

export default BlogPosts;
