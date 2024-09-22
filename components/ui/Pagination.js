"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect } from "react";

function Pagination({ count }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activePage = Number(searchParams.get("page")) || 1;

  // Scroll to top after pagination on mobile
  useEffect(() => {
    if (window.innerWidth <= 1024) {
      window.scrollTo(0, 0);
    }
  }, [activePage]);

  const pages = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-7">
      {activePage === 1 ? (
        <span className="cursor-not-allowed rounded-[4px] bg-white px-2 py-2 text-center font-bold text-[#999] opacity-50">
          <IoIosArrowBack size={22} />
        </span>
      ) : (
        <Link
          href={`${pathname}?page=${activePage - 1}`}
          scroll={false}
          className="rounded-[4px] bg-white px-2 py-2 text-center font-bold text-[#999] hover:bg-primary-500 hover:text-white"
        >
          <IoIosArrowBack size={22} />
        </Link>
      )}

      <div className="flex items-center justify-center gap-4">
        {pages.map((item, index) => (
          <Link
            key={index}
            href={`${pathname}?page=${index + 1}`}
            scroll={false}
            className={`cursor-pointer rounded-[4px] bg-white px-4 py-2 text-center font-bold text-primary-700 hover:bg-primary-100 ${activePage === index + 1 ? "!bg-primary-500 !text-white" : ""}`}
          >
            {`${index + 1 > 9 ? index + 1 : `${index + 1}`}`}
          </Link>
        ))}
      </div>

      {activePage === count ? (
        <span className="cursor-not-allowed rounded-[4px] bg-white px-2 py-2 text-center font-bold text-[#999] opacity-50">
          <IoIosArrowForward size={22} />
        </span>
      ) : (
        <Link
          href={`${pathname}?page=${activePage + 1}`}
          scroll={false}
          className="rounded-[4px] bg-white px-2 py-2 text-center font-bold text-[#999] hover:bg-primary-500 hover:text-white"
        >
          <IoIosArrowForward size={22} />
        </Link>
      )}
    </div>
  );
}

export default Pagination;
