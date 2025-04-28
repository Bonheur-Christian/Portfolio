"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const NavBarLinks = [
    { link: "#works", name: "Works" },
    { link: "/about", name: "About" },
    { link: "/blog", name: "Blog" },
    { link: "#contact", name: "Contact" },
  ];

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-indigo-800/10">
      <nav className="w-[90%] mx-auto flex justify-between items-center py-12">
        <div>
          <Link href="/" className="text-4xl text-indigo-800 font-extrabold">
            B
          </Link>
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-12 text-lg font-medium">
            {NavBarLinks.map((item, index) => (
              <li key={index} className="underline-animation hover:text-indigo-800 hover:font-semibold duration-300">
                <Link href={item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-indigo-800 text-3xl focus:outline-none">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          <ul className="flex flex-col gap-6 text-lg font-medium">
            {NavBarLinks.map((item, index) => (
              <li key={index} className="hover:text-indigo-800 hover:font-semibold duration-300">
                <Link href={item.link} onClick={() => setMenuOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
