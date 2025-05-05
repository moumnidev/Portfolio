"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
    return (
        <section className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
            <motion.h1
                className="text-6xl sm:text-8xl font-extrabold text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                404
            </motion.h1>
            <motion.p
                className="mt-4 text-lg sm:text-2xl text-gray-300 text-center max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                Oops… The page you are looking for was not found.
            </motion.p>
            <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >
                <Link
                    href="/"
                    className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition"
                >
                    Back to Home
                </Link>
            </motion.div>
        </section>
    )
}
