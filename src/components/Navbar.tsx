"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

const links = ["About", "Projects", "Skills", "Contact"];

const menuVariants: Variants = {
  closed: { x: "100%" },
  open: { x: 0, transition: { stiffness: 20 } }
};

const itemVariants: Variants = {
  closed: { opacity: 0, x: 20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 * i }
  })
};

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
              onClick={() => setIsOpen((o) => !o)}
              className="text-gray-300 hover:text-white focus:outline-none z-30"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                  />
                ) : (
                  <motion.path
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

      {/* Mobile Menu Overlay + Sidebar */}
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        onClick={() => setIsOpen(false)}
      />

      <motion.aside
        className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-gray-800 p-6 z-30 shadow-lg"
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <nav className="flex flex-col space-y-4 mt-8">
          {links.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white text-lg font-medium"
              custom={i}
              variants={itemVariants}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </motion.a>
          ))}
        </nav>
      </motion.aside>
    </>
  );
};

export default Navbar;