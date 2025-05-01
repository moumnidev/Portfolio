"use client"
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};
const item = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const Title: React.FC = () => {
  const title = "Sofiane Moumni";
  const subtitle = "Full‑Stack Developer & Creative Problem‑Solver";

  return (
    <section
      className="
        relative h-screen w-full
        px-4 sm:px-6 md:px-8     /* padding adaptatif */
        flex flex-col justify-center items-center
      "
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            top-16 sm:top-20
            left-1/2 sm:left-1/4
            transform -translate-x-1/2 sm:translate-x-0
            w-60 h-60 sm:w-80 sm:h-80
            bg-purple-500 opacity-20 blur-3xl rounded-full
          "
        ></div>
        <div
          className="
            absolute
            bottom-16 sm:bottom-20
            right-1/2 sm:right-1/4
            transform translate-x-1/2 sm:translate-x-0
            w-56 h-56 sm:w-72 sm:h-72
            bg-pink-500 opacity-15 blur-3xl rounded-full
          "
        ></div>
      </div>

      <motion.div
        className="z-10 text-center"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.h1
          variants={item}
          className="
            text-4xl sm:text-5xl md:text-7xl lg:text-8xl
            font-extrabold
            bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500
            bg-clip-text text-transparent
          "
        >
          {title}
        </motion.h1>

        <motion.p
          variants={item}
          className="
            mt-4
            text-sm sm:text-lg md:text-2xl
            text-white/80
            max-w-xs sm:max-w-md md:max-w-xl
            mx-auto
          "
        >
          {subtitle}
        </motion.p>

        {/* animated underline */}
        <motion.div
          variants={item}
          className="
            mt-6
            h-1
            w-16 sm:w-24
            mx-auto
            bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500
            rounded-full
          "
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* scroll down indicator */}
        <div className="mt-12 flex flex-col items-center text-white/70">
          <motion.div
            className="
              w-6 h-12 sm:w-8 sm:h-14
              border-2 border-white
              rounded-full
              flex justify-center items-start
              p-1 mb-2
            "
          >
            <motion.span
              className="block w-2 h-2 bg-white rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.span
            className="text-xs sm:text-sm uppercase tracking-widest"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            scroll down
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
};

export default Title;