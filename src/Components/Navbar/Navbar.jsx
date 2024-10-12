import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex flex-wrap justify-between items-center text-white px-6 py-4 md:px-10 md:py-6 bg-black bg-opacity-80 z-50">
      {/* Brand Name */}
      <span className="text-xl font-bold tracking-wide">Parvej Vahora</span>

      {/* Menu Links */}
      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex gap-6 my-auto font-semibold bg-black bg-opacity-30 md:bg-transparent rounded-xl md:rounded-none text-center md:static absolute top-16 left-0 right-0 md:top-0 md:mt-0 transition-all duration-300`}
      >
        <a href="#About">
          <li className="text-md hover:text-gray-400 transition-all duration-300 p-2 md:p-0">
            About
          </li>
        </a>
        <a href="#Experience">
          <li className="text-md hover:text-gray-400 transition-all duration-300 p-2 md:p-0">
            Experience
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md hover:text-gray-400 transition-all duration-300 p-2 md:p-0">
            Projects
          </li>
        </a>
        <a href="#Contact">
          <li className="text-md hover:text-gray-400 transition-all duration-300 p-2 md:p-0">
            Contact
          </li>
        </a>
      </ul>

      {/* Responsive Menu Toggle */}
      <div className="md:hidden absolute top-4 right-4 cursor-pointer">
        {menuOpen ? (
          <RiCloseLine
            size={30}
            className="transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="transition-all duration-300"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;