"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        className="
          fixed top-8 inset-x-0 mx-auto
          w-[90%] max-w-lg px-4
          bg-gray-800/50 backdrop-blur-xs shadow-lg
          rounded-full z-20 overflow-x-hidden border border-gray-700
        "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-between items-center h-13">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a href="#" className="flex items-center">
              <img
                src="/favicon.ico"
                alt="MoumniDev Logo"
                className="h-8 w-8 mr-2"
              />
              <span className="text-lg font-bold text-white">MoumniDev</span>
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {["About", "Projects", "Skills", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition duration-300"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown (hors du <nav>) */}
      {isOpen && (
        <motion.div
          className="
            fixed
            top-[4rem]            /* juste sous la navbar */
            inset-x-0 mx-auto
            w-[90%] max-w-lg
            md:hidden
            bg-gray-800/70 backdrop-blur-md
            shadow-lg rounded-lg
            overflow-hidden
            z-20
          "
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default Navbar;