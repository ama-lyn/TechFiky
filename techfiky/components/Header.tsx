"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Rowdies } from "next/font/google";

const rowdies = Rowdies({
    subsets: ["latin"],
    weight: ["400", "700"], 
  });

interface NavItem {
  label: string;
  page: string;
}

const Header = () => {
  const NavItems: Array<NavItem> = [
    { label: "Products", page: "/products" },
    { label: "App", page: "/app" },
    { label: "Blogs", page: "/projects" },
    { label: "Pricing", page: "/pricing" },
  ];

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="bg-opacity-70 bg-clip-padding blur-backdrop-filter">
      <div className="flex flex-wrap justify-between items-center py-6">
        <Link href="/" className="text-3xl text-[#16b776]">
          <p className={rowdies.className} >TechFiky</p>
        </Link>
        <div className="hidden md:flex gap-16 text-lg">
          {NavItems.map((item: NavItem) => (
            <Link
              key={item.page}
              href={item.page}
              className={" hover:text-[#16b776]"}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* MOBILE... */}
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center p-2 border-[1.5px] rounded-full "
            >
              <Menu className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center p-2 border-[1.5px] rounded-full"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {navbarOpen ? (
        <div className="flex flex-col py-20 items-center h-screen md:hidden">
          {NavItems.map((item: NavItem) => (
            <Link
              key={item.page}
              href={item.page}
              className={"pb-2 hover:text-[#16b776]"}
              onClick={() => setNavbarOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </nav>
  );
};

export default Header;