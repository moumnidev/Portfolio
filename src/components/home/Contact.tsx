"use client"
import React, { useState, FormEvent } from "react"
import { motion } from "framer-motion"
import { HiOutlineMail, HiPhone, HiLocationMarker, HiPaperAirplane } from "react-icons/hi"

const container = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, when: "beforeChildren" } }
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } }
}

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState({ loading: false, success: false, error: null as string | null })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: null })
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error(`Error ${res.status}`)
      setStatus({ loading: false, success: true, error: null })
      setForm({ name: "", email: "", message: "" })
    } catch (err: any) {
      setStatus({ loading: false, success: false, error: err.message || "Failed to send" })
    }
  }

  return (
    <section id="contact" className="relative bg-gray-900 overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Me
            <span className="block mt-2 h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-full animate-pulse"/>
          </motion.h2>

      <motion.div
        className="relative max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 backdrop-blur-sm bg-gray-800/60 rounded-2xl p-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Contact info */}
        <motion.div variants={item} className="space-y-6">
          <h3 className="text-2xl font-bold text-white">Let's build something together</h3>
          <p className="text-gray-300">
            I'm available for freelance projects or full‑time roles. Reach out and let's chat!
          </p>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-200">
              <HiOutlineMail className="text-2xl text-purple-400 mr-3" />
              <a href="mailto:contact@moumni.dev" className="hover:underline">contact@moumni.dev</a>
            </li>
            <li className="flex items-center text-gray-200">
              <HiPhone className="text-2xl text-purple-400 mr-3" />
              <a href="tel:+33668568768" className="hover:underline">+33 6 68 56 87 68</a>
            </li>
            <li className="flex items-center text-gray-200">
              <HiLocationMarker className="text-2xl text-purple-400 mr-3" />
              Remote / Based in Tours, FR
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            {/* Add your social links here */}
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.form onSubmit={handleSubmit} variants={item} className="space-y-6">
          {["name", "email"].map((field) => (
            <div key={field} className="relative">
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                id={field}
                required
                value={(form as any)[field]}
                onChange={handleChange}
                placeholder=" "
                className="
                  peer w-full bg-transparent border-b-2 border-gray-600
                  pt-3 pb-1 px-1                  /* ↑ plus de padding top pour baisser le texte */
                  text-white placeholder-transparent
                  focus:border-purple-500 outline-none
                  leading-tight                   /* hauteur de ligne réduite */
                  transition-colors
                "
              />
              <label
                htmlFor={field}
                className="
                  absolute left-1 -top-1 text-gray-400 text-sm
                  peer-placeholder-shown:top-2 peer-placeholder-shown:text-base
                  peer-placeholder-shown:text-gray-500
                  peer-focus:-top-1 peer-focus:text-sm peer-focus:text-purple-400
                  transition-all
                "
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
            </div>
          ))}

          {/* Textarea */}
          <div className="relative">
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              placeholder=" "
              className="
                peer w-full bg-transparent border-b-2 border-gray-600
                pt-3 pb-1 px-1                  /* mêmes ajustements que pour les inputs */
                text-white placeholder-transparent resize-none
                focus:border-purple-500 outline-none
                leading-tight
                transition-colors
              "
            />
            <label
              htmlFor="message"
              className="
                absolute left-1 -top-1 text-gray-400 text-sm
                peer-placeholder-shown:top-2 peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-500
                peer-focus:-top-1 peer-focus:text-sm peer-focus:text-purple-400
                transition-all
              "
            >
              Message
            </label>
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className="
              w-full flex justify-center items-center space-x-2
              py-3 bg-gradient-to-tr from-purple-600 to-pink-500
              hover:from-purple-700 hover:to-pink-600
              text-white font-semibold rounded-full
              focus:outline-none focus:ring-2 focus:ring-purple-400
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all
            "
          >
            <HiPaperAirplane className="animate-bounce text-xl" />
            <span>{status.loading ? "Sending..." : "Send Message"}</span>
          </button>

          {status.error && <p className="text-red-400 text-center mt-2">{status.error}</p>}
          {status.success && <p className="text-green-400 text-center mt-2">Message sent!</p>}
        </motion.form>
      </motion.div>
    </section>
  )
}

export default Contact