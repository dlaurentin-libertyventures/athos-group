"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MOUNTAIN_ICON } from "@/lib/brand";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "About", href: "/about-our-mission-and-principles" },
    { label: "Our People", href: "/about-our-people" },
    { label: "Our Services", href: "/our-services" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1C2B3A] border-b border-[#F8F5EE]/10">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-16">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[#F8F5EE] transition-opacity duration-300 hover:opacity-80"
        >
          <Image
            src={MOUNTAIN_ICON}
            alt=""
            width={96}
            height={54}
            className="h-7 w-auto object-contain brightness-0 invert"
            aria-hidden
            priority
          />
          <span className="font-[family-name:var(--font-playfair)] text-xl font-semibold tracking-widest uppercase">
            The Athos Group
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:gap-12 md:flex">
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.2em] text-[#F8F5EE]/50 transition-colors duration-300 hover:text-[#F8F5EE]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-[#F8F5EE] transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-[#F8F5EE] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-[#F8F5EE] transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-[#F8F5EE]/10 bg-[#1C2B3A] transition-all duration-500 md:hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col gap-6 px-6 py-6">
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-xs font-medium uppercase tracking-[0.2em] text-[#F8F5EE]/50 transition-colors duration-300 hover:text-[#F8F5EE]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
