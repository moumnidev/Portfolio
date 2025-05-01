"use client"
import React from "react"
import { motion } from "framer-motion"

const skills = [
  { label: "Design a Web Application", level: 90 },
  { label: "Develop Database-Driven Apps", level: 85 },
  { label: "Web Application Security", level: 70 },
  { label: "JavaScript Frameworks (React)", level: 80 },
  { label: "Responsive Design", level: 95 },
  { label: "Version Control (Git)", level: 90 },
  { label: "RESTful API Development", level: 85 },
  { label: "CI/CD Pipelines", level: 65 },
  { label: "UI/UX Design Principles", level: 65 },
  { label: "Performance Optimization", level: 75 },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, when: "beforeChildren" },
  },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
}

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="
        bg-gray-900
        px-4 sm:px-6 lg:px-8
        py-16
      "
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
        <span className="block mt-2 h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-full animate-pulse"/>
      </motion.h2>

      <motion.div
        className="max-w-3xl mx-auto space-y-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {skills.map((skill, i) => (
          <motion.div key={skill.label} variants={item}>
            <div className="flex justify-between mb-1">
              <span className="text-sm sm:text-base font-medium text-white">
                {skill.label}
              </span>
              <span className="text-sm sm:text-base font-medium text-white">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3 sm:h-4 overflow-hidden">
              <motion.div
                className="h-3 sm:h-4 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, delay: i * 0.2, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills