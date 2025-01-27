'use client'

import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import Vector from "../../public/Vector.png";
import NikeLogo from "../../public/NIKE.png";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Top Header */}
      <header className="text-gray-600 body-font bg-gray-200 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8">
          <h1 className="sm:text-2xl text-xl mt-2 font-bold text-gray-900 mb-4 md:mb-0">
            <Image src={Vector} alt="Logo" width={25} height={25} />
          </h1>
          <div className="flex items-center justify-end gap-4 text-[#0c0303]">
            <nav className="text-sm md:text-base">
              <Link href="/store">Find a Store | </Link>
              <Link href="/help">Help | </Link>
              <Link href="/join">Join Us | </Link>
              <Link href="/login">Sign In</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Header */}
      <header className="sticky top-0 z-50 text-black text-sm body-font bg-white shadow-md">
        <div className="container mx-auto flex p-3 justify-between items-center px-4 sm:px-6 md:px-8">
          <h1 className="sm:text-2xl text-xl mt-2 font-bold text-gray-900 mb-4 md:mb-0">
            <Image src={NikeLogo} alt="Nike Logo" width={50} height={20} />
          </h1>

          {/* Desktop Navigation */}
          <nav className="md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center space-x-6 hidden md:flex font-bold">
            <Link href="/" className="hover:text-gray-900">New & Featured</Link>
            <Link href="/cart" className="hover:text-gray-900">Men</Link>
            <Link href="/about" className="hover:text-gray-900">Women</Link>
            <Link href="/kids" className="hover:text-gray-900">Kids</Link>
            <Link href="/sale" className="hover:text-gray-900">Sale</Link>
            <Link href="/productdetail" className="hover:text-gray-900">SNKRS</Link>
          </nav>

          {/* Icons and Hamburger */}
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-100 rounded-lg px-4 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <AiOutlineSearch
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                size={20}
                aria-label="Search"
              />
            </div>
            <Link href="/wishlist">
              <AiOutlineHeart className="text-gray-600 hover:text-gray-900 cursor-pointer" size={24} />
            </Link>
            <Link href="/cart">
              <AiOutlineShoppingCart className="text-gray-600 hover:text-gray-900 cursor-pointer" size={24} />
            </Link>
            <button
              aria-label="Toggle navigation menu"
              className="text-gray-600 md:hidden flex items-center"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col items-center bg-gray-50 p-4 space-y-4">
            <Link href="/" className="hover:text-gray-900">New & Featured</Link>
            <Link href="/cart" className="hover:text-gray-900">Men</Link>
            <Link href="/about" className="hover:text-gray-900">Women</Link>
            <Link href="/kids" className="hover:text-gray-900">Kids</Link>
            <Link href="/sale" className="hover:text-gray-900">Sale</Link>
            <Link href="/productdetail" className="hover:text-gray-900">SNKRS</Link>
            <button className="mt-4 text-gray-600" onClick={() => setMenuOpen(false)}>Close Menu</button>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Header;
