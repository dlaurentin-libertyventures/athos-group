"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "About", href: "/about-our-mission-and-principles" },
    { label: "Our People", href: "/about-our-people" },
    { label: "Mission", href: "/about-our-mission-and-principles" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1C2B3A] border-b border-[#F8F5EE]/10">
      <nav className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-[family-name:var(--font-playfair)] text-xl font-semibold tracking-widest uppercase text-[#F8F5EE] hover:opacity-80 transition-opacity duration-300"
        >
          The Athos Group
        </Link>

        <div className="hidden md:flex items-center gap-12">
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs font-medium tracking-[0.2em] uppercase text-[#F8F5EE]/50 hover:text-[#F8F5EE] transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-[#F8F5EE] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-px bg-[#F8F5EE] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#F8F5EE] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      <div className={`md:hidden transition-all duration-500 overflow-hidden ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"} bg-[#1C2B3A] border-t border-[#F8F5EE]/10`}>
        <div className="flex flex-col px-6 py-6 gap-6">
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-xs font-medium tracking-[0.2em] uppercase text-[#F8F5EE]/50 hover:text-[#F8F5EE] transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
