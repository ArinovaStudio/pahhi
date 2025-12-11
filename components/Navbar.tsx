"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent text-white py-5 px-9 flex justify-between items-center">
      {/* Logo */}
      <div className="font-semibold text-xl">PAAHI</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-5">
        <li>
          <Link
            className="uppercase outline-none text-sm hover:font-semibold duration-200"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="uppercase outline-none text-sm hover:font-semibold duration-200"
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="uppercase outline-none text-sm hover:font-semibold duration-200"
            href="/ecommerce"
          >
            Ecommerce
          </Link>
        </li>
        <li>
          <Link
            className="uppercase outline-none text-sm hover:font-semibold duration-200"
            href="/fashion"
          >
            Fashion
          </Link>
        </li>
        <li>
          <Link
            className="uppercase outline-none text-sm hover:font-semibold duration-200"
            href="/jewellery"
          >
            Jewellery
          </Link>
        </li>

        <li>
          <Link
            onClick={() => setOpen(false)}
            className="uppercase outline-none text-sm"
            href="/brand-campaigns"
          >
            Brand Campaigns
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setOpen(false)}
            className="uppercase outline-none text-sm"
            href="/food-and-drink"
          >
            Food & Drink
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setOpen(false)}
            className="uppercase outline-none text-sm"
            href="/hamburger"
          >
            Hamburger
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setOpen(false)}
            className="uppercase outline-none text-sm"
            href="/ai-enabled-services"
          >
            AI-Enabled Services
          </Link>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`w-6 h-[2px] bg-white transition ${
            open ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-[2px] bg-white transition ${
            open ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-[2px] bg-white transition ${
            open ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute z-50! top-[70px] left-0 w-full bg-black/80 backdrop-blur-md md:hidden transition-all duration-300 ${
          open ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col items-center gap-5 py-5">
        <li>
          <Link
            className="uppercase text-sm hover:font-semibold duration-200"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="uppercase text-sm hover:font-semibold duration-200"
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="uppercase text-sm hover:font-semibold duration-200"
            href="/ecommerce"
          >
            Ecommerce
          </Link>
        </li>
        <li>
          <Link
            className="uppercase text-sm hover:font-semibold duration-200"
            href="/fashion"
          >
            Fashion
          </Link>
        </li>
        <li>
          <Link
            className="uppercase text-sm hover:font-semibold duration-200"
            href="/jewellery"
          >
            Jewellery
          </Link>
        </li>

        <li>
          <Link
            onClick={() => setOpen(false)}
            className="uppercase text-sm"
            href="/brand-campaigns"
          >
            Brand Campaigns
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setOpen(false)}
            className="uppercase text-sm"
            href="/food-and-drink"
          >
            Food & Drink
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setOpen(false)}
            className="uppercase text-sm"
            href="/hamburger"
          >
            Hamburger
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setOpen(false)}
            className="uppercase text-sm"
            href="/ai-enabled-services"
          >
            AI-Enabled Services
          </Link>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
