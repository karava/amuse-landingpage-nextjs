import { fetchCategories } from "@/lib/services/api";
import BlogNav from "./BlogNav";

async function BlogNavigation() {
  const categories = await fetchCategories();

  return <nav className="mb-12">{<BlogNav data={categories} />}</nav>;
}

export default BlogNavigation;
