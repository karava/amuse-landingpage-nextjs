import { sanityFetch } from "@/blog/lib/client";

export async function fetchBlogs(filter, pageSize = 6) {
  try {
    const query = `
      {
        "posts": *[_type == "post" ${
          filter.category !== "view-all"
            ? `&& "${filter.category}" in categories[]->slug.current`
            : ""
        }] | order(publishedAt desc) [${
          (filter.page - 1) * pageSize + 1
        }...${filter.page * pageSize + 1}] {
          title,
          slug,
          publishedAt,
          author -> {name, image {
            asset -> {
              _id,
              url
            },
          }},
          categories[]->{
            title,
            slug
          },
          mainImage {
            asset -> {
              _id,
              url
            },
            alt
          }
        },
        "count": count(*[_type == "post" ${
          filter?.category !== "view-all"
            ? `&& "${filter?.category}" in categories[]->slug.current`
            : ""
        }])
      }
    `;

    const data = await sanityFetch({ query, tags: ["post"] });

    return data; // data.posts will contain the posts, and data.count will contain the count
  } catch (err) {
    console.error("Error fetching blogs:", err.message);
    return { posts: [], count: 0 };
  }
}

export async function fetchCategories() {
  try {
    const query = `*[_type == "category"]   {
        title,
        slug,
    }
      `;

    const data = await sanityFetch({ query, tags: ["category"] });

    return data;
  } catch (err) {
    return console.log(err.message);
  }
}

export async function fetchLatestPost() {
  try {
    const query = `*[_type == "post"] | order(publishedAt desc) [0] {
        title,
        slug,
        publishedAt,
        author -> {
          name,
          image {
            asset -> {
              _id,
              url
            }
          }
        },
        categories[]->{
          title,
          slug
        },
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`;

    const data = await sanityFetch({ query, tags: ["post"] });

    return data;
  } catch (err) {
    console.log(err.message);
    return null;
  }
}

export async function fetchPost(slug, params) {
  try {
    const query = `
      *[_type == "post" && slug.current == "${slug}"] {
        title,
        slug,
        publishedAt,
        author -> {
          name,
          image {
            asset -> {
              _id,
              url
            }
          }
        },
        categories[]->{
          title,
          slug
        },
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        },
        body
      }
    `;

    const data = await sanityFetch({
      query,
      qParams: { slug: params.slug },
      tags: ["post"],
    });

    return data.length > 0 ? data[0] : null; // Return the post or null if not found
  } catch (err) {
    console.log(err.message);
    return null;
  }
}

export async function getAllSlugs() {
  try {
    const query = `*[_type == "post"] {
        "slug": slug.current
      }`;

    const data = await sanityFetch({ query, tags: ["post"] });

    return data;
  } catch (err) {
    console.log(err.message);
    return [];
  }
}
