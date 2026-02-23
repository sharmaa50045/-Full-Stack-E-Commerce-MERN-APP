import React, { useState } from "react";
import logo from "../assest/mainimage/logo.jpg";
import { CiSearch } from "react-icons/ci";
import { FaRegUser, FaShoppingCart } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);

  return (
    <>

      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="w-full px-6 lg:px-14 flex items-center justify-between h-20">
          <div className="flex items-center gap-5">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-3xl"
            >
              {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="h-14 md:h-16 object-contain cursor-pointer"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center w-full max-w-2xl bg-gray-100 rounded-full px-5 py-3 focus-within:ring-2 focus-within:ring-red-400 transition-all">
            <input
              type="text"
              placeholder="Search for products, brands and more..."
              className="w-full bg-transparent outline-none text-base"
            />
            <CiSearch className="text-3xl text-gray-700 cursor-pointer hover:text-red-600 transition" />
          </div>
          <div className="flex items-center gap-6 text-2xl">
            <CiSearch
              onClick={() => setMobileSearch(!mobileSearch)}
              className="md:hidden cursor-pointer"
            />
            <div className="relative group cursor-pointer hidden sm:block">
              <FaRegUser className="hover:text-red-600 transition text-2xl" />
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                Account
              </span>
            </div>
            <div className="relative cursor-pointer group">
              <FaShoppingCart className="hover:text-red-600 transition text-2xl" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[11px] w-5 h-5 flex items-center justify-center rounded-full font-semibold">
                2
              </span>
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                Cart
              </span>
            </div>
            <Link
              to="/login"
              className="px-5 py-2 rounded-full text-white bg-red-600 hover:bg-red-700 text-sm font-medium"
            >
              Login
            </Link>
          </div>
        </div>
        {mobileSearch && (
          <div className="md:hidden px-5 pb-4">
            <div className="flex items-center w-full bg-gray-100 rounded-full px-4 py-3">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-transparent outline-none text-base"
              />
              <CiSearch className="text-2xl text-gray-700" />
            </div>
          </div>
        )}
      </header>
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="p-5 border-b flex justify-between items-center">
          <h2 className="font-semibold text-xl">Menu</h2>
          <HiX
            className="text-3xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>
        <nav className="flex flex-col gap-5 p-6 text-lg text-gray-700">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <Link to="/shop" className="hover:text-red-600">Shop</Link>
          <Link to="/categories" className="hover:text-red-600">Categories</Link>
          <Link to="/orders" className="hover:text-red-600">Orders</Link>
          <Link to="/contact" className="hover:text-red-600">Contact</Link>
        </nav>
      </div>
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}
    </>
  );
};

export default Header;