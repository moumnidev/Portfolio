"use client"
import React from 'react'
import { motion, Variants } from 'framer-motion'

const dotVariants: Variants = {
  hidden: { y: 0, opacity: 0.3 },
  show: (i: number) => ({
    y: [0, -10, 0],
    opacity: [0.3, 1, 0.3],
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  })
}

const InProgress: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative bg-gray-900 overflow-hidden py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center"
    >
      <motion.h2
        className="text-3xl sm:text-5xl font-extrabold text-white text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
        <span className="block mt-2 h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-full"/>
      </motion.h2>

      <motion.div
        className="flex space-x-3"
        initial="hidden"
        animate="show"
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="block h-4 w-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"
            custom={i}
            variants={dotVariants}
          />
        ))}
      </motion.div>

    <motion.p
      className="mt-6 text-lg sm:text-xl text-gray-300 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
    >
      Section under construction… Stay tuned!
    </motion.p>
    </section>
  )
}

export default InProgress