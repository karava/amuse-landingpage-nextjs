import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

import { urlFor } from "@/blog/lib/sanity-img";
import Image from "next/image";
import Link from "next/link";

export const TOTAL_POSTS_BLOG = 6;
export const URL = "https://amuse-ten.vercel.app";

export const AppPlatforms = [
  {
    name: "iOS",
    image: "/images/app-store.png",
    href: "#",
  },
  {
    name: "Android",
    image: "/images/google-play.png",
    href: "#",
  },
];

export const NavLinks = {
  links: [
    { title: "Why Amuse", href: "/#why-amuse" },
    { title: "Our Vision", href: "/#vision" },
    { title: "Blog", href: "/blog" },
  ],
  socials: [
    { icon: <FaFacebook size={22} />, href: "#" },
    { icon: <RiInstagramFill size={24} />, href: "#" },
    { icon: <FaLinkedin size={22} />, href: "#" },
    { icon: <FaXTwitter size={22} />, href: "#" },
  ],
};

//
export const myPortableTextComponents = {
  types: {
    // image: ({ value }) => <img src={value.imageUrl} />,
    image: ({ value }) => {
      return (
        <Image
          src={urlFor(value).url()}
          alt="Image"
          width={800}
          height={800}
          className="mb-8 h-96 rounded-xl object-cover object-center"
        />
      );
    },
    // callToAction: ({ value, isInline }) => <a href={value.url}>{value.text}</a>,
  },

  marks: {
    em: ({ children }) => (
      <em className="font-semibold text-primary-100">{children}</em>
    ),

    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          id=""
          className="text-neutral-800 underline underline-offset-2"
        >
          {children}
        </Link>
      );
    },
  },

  block: {
    // Ex. 1: customizing common block types
    h1: ({ children, node }) => (
      <h1
        id={node?._key}
        className="font-display mb-4 text-2xl font-medium text-primary-100"
      >
        {children}
      </h1>
    ),
    h2: ({ children, node }) => (
      <h2
        id={node?._key}
        className="font-display mb-4 text-2xl font-medium text-primary-100"
      >
        {children}
      </h2>
    ),
    h3: ({ children, node }) => (
      <h3
        id={node?._key}
        className="font-display mb-1 text-xl font-medium text-primary-100 lg:text-2xl"
      >
        {children}
      </h3>
    ),
    h4: ({ children, node }) => (
      <h4
        id={node?._key}
        className="font-display mb-1 text-lg font-medium text-primary-100 lg:text-xl"
      >
        {children}
      </h4>
    ),
    blockquote: ({ children }) => {
      return (
        <blockquote
          style={{
            backgroundColor: "#242535",
            borderLeft: "4px solid",
            borderLeftColor: "#E8E8EA",
            borderRadius: "12px",
            display: "inline-block",
            fontFamily: "'SourceSerifPro-Regular', serif",
            lineHeight: "32px",
            letterSpacing: "0.6px",
          }}
          className={`mb-8 p-8 text-xl text-white lg:text-2xl`}
        >
          <em>
            <span className="text-3xl">“</span>
            {children}
            <span className="text-3xl">”</span>
          </em>
        </blockquote>
      );
    },

    // Styling for normal text
    normal: ({ children, index, value, next }) => {
      return (
        <p className="mb-6 text-base leading-relaxed text-[#C1C1C1] lg:text-xl">
          {children}
        </p>
      );
    },
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <ul
        style={{ paddingLeft: "2.5rem" }}
        className="mb-6 flex list-disc flex-col gap-2"
      >
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol
        style={{ paddingLeft: "2.5rem" }}
        className="mb-6 flex list-decimal flex-col gap-2"
      >
        {children}
      </ol>
    ),
  },
};
