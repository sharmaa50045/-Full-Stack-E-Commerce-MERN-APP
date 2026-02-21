import React, { useState } from "react";
import logo from "../assest/logo.jpg";
import { CiSearch } from "react-icons/ci";
import { FaRegUser, FaShoppingCart } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);

  return (
    <>

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-16">


          <div className="flex items-center gap-3">

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-2xl"
            >
              {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>

            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="h-9 md:h-11 object-contain cursor-pointer"
              />
            </Link>
          </div>


          <div className="hidden md:flex items-center w-full max-w-lg bg-gray-100 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-blue-400 transition-all">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-transparent outline-none text-sm"
            />
            <CiSearch className="text-2xl text-gray-600 cursor-pointer hover:text-blue-600 transition" />
          </div>


          <div className="flex items-center gap-5 md:gap-6 text-xl">


            <CiSearch
              onClick={() => setMobileSearch(!mobileSearch)}
              className="md:hidden cursor-pointer"
            />


            <div className="relative group cursor-pointer hidden sm:block">
              <FaRegUser className="hover:text-blue-600 transition" />
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                Account
              </span>
            </div>


            <div className="relative cursor-pointer group">
              <FaShoppingCart className="hover:text-blue-600 transition" />

              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                2
              </span>

              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                Cart
              </span>
            </div>


            <Link
              to="/login"
              className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700 text-sm"
            >
              Login
            </Link>

          </div>
        </div>


        {mobileSearch && (
          <div className="md:hidden px-4 pb-3">
            <div className="flex items-center w-full bg-gray-100 rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-transparent outline-none text-sm"
              />
              <CiSearch className="text-2xl text-gray-600" />
            </div>
          </div>
        )}
      </header>


      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="p-5 border-b flex justify-between items-center">
          <h2 className="font-semibold text-lg">Menu</h2>
          <HiX
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <nav className="flex flex-col gap-4 p-5 text-gray-700">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/shop" className="hover:text-blue-600">Shop</Link>
          <Link to="/categories" className="hover:text-blue-600">Categories</Link>
          <Link to="/orders" className="hover:text-blue-600">Orders</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
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