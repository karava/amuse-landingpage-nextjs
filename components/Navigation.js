"use client";

import { NavLinks } from "@/lib/constants";
import Logo from "./ui/Logo";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiDownload2Line } from "react-icons/ri";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <header className="mx-auto mb-10 grid max-w-[996px] grid-cols-[40fr_70fr] items-center border border-primary-600 p-3 py-5 lg:mt-5 lg:rounded-xl lg:py-3">
        <Logo />
        <nav className="flex items-center justify-between justify-self-end text-primary-100 lg:justify-self-auto">
          <ul className="hidden items-center gap-7 font-medium lg:flex">
            {NavLinks.links.map((link, index) => (
              <li
                key={index}
                className="transition-all duration-300 hover:text-primary-500"
              >
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <ul className="hidden items-center gap-3 lg:flex">
              {NavLinks.socials.map((social, index) => (
                <li
                  key={index}
                  className="transition-all duration-300 hover:text-primary-500"
                >
                  <Link href={social.href}>{social.icon}</Link>
                </li>
              ))}
            </ul>
            <Link
              href="https://amuse.app.link/landing_page"
              target="_blank"
              className="flex items-center gap-2 rounded-[4px] bg-primary-200 px-5 py-2 text-center text-sm font-bold capitalize text-primary-500"
            >
              <span>
                <RiDownload2Line size={20} />
              </span>
              <span>Get App</span>
            </Link>

            {/* Toggle Button for Mobile */}
            <button
              onClick={() => setIsOpen((state) => !state)}
              className="z-[100] flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-full border border-[#FFFFFF0D] bg-[#FFFFFF1A] text-white lg:hidden"
            >
              <span
                className={`block h-[3px] w-full scale-[0.6] bg-white transition-transform duration-300 ${
                  isOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              ></span>
              <span
                className={`block h-[3px] w-full scale-[0.6] bg-white transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-[3px] w-full scale-[0.6] bg-white transition-transform duration-300 ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              ></span>
            </button>
          </div>
        </nav>

        {/* MOBILE NAV */}
        <aside
          className={`fixed left-0 top-0 z-50 w-full rounded-b-[32px] border-b border-primary-600 bg-primary-750 pb-10 pt-20 opacity-100 transition-all duration-300 lg:hidden ${
            isOpen ? "translate-y-0" : "-translate-y-[150%]"
          }`}
        >
          {/* Nav Links */}
          <ul className="mb-10 flex flex-col items-center justify-start gap-4">
            {NavLinks.links.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-accent-700 mb-3 block text-xl font-bold text-[#F3F4F6] transition-all duration-300 hover:text-primary-500"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex items-center justify-center gap-6 text-white">
            {NavLinks.socials.map((social, index) => (
              <li
                key={index}
                className="transition-all duration-300 hover:text-primary-500"
              >
                <Link href={social.href}>{social.icon}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </header>
    </>
  );
}

export default Navigation;
