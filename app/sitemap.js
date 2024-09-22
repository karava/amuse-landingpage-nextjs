import { client } from "@/blog/lib/client";
import { URL } from "@/lib/constants";

async function getData() {
  const query = `*[_type == "post"] {
    "currentSlug": slug.current,
      "updated": publishedAt
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function sitemap() {
  const data = await getData();
  const posts = data.map((post) => ({
    url: `${URL}/blog/${post.currentSlug}`,
    lastModified: post.lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [
    {
      url: `${URL}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${URL}/terms-of-use`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...posts,
  ];
}
