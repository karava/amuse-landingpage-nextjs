import BlogNavigation from "@/components/blog/BlogNavigation";
import BlogPosts from "@/components/blog/BlogPosts";
import MainPost from "@/components/blog/MainPost";
import NoBlogs from "@/components/blog/NoBlogs";
import Cta from "@/components/home/Cta";

export const metadata = {
  title: "Blog",
};

export const revalidate = 86400;

async function page({ searchParams }) {
  console.log(searchParams);
  //Building the filter
  const category = searchParams.category ?? "view-all";
  let page = searchParams.page ?? 1;
  page = Number(page);

  const filter = {
    category,
    page,
  };

  return (
    <div className="">
      <MainPost />
      <BlogNavigation />
      <BlogPosts filter={filter} />
      <Cta />
    </div>
  );
}

export default page;
