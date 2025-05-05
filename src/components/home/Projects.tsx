"use client";
import React from "react";
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';

interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Intranet Dashboard",
        description: "An interactive internal dashboard with real‑time charts and analytics.",
        imageUrl: "https://www.appvizer.com/media/application/12271/screenshot/14045/37853.png",
        link: "https://google.com"
    },
    {
        id: 2,
        title: "E‑commerce Store",
        description: "A modern online shop with Stripe payments and micro‑interaction animations.",
        imageUrl: "https://www.appvizer.com/media/application/12271/screenshot/14045/37853.png",
        link: "https://google.com"
    },
    {
        id: 3,
        title: "Tech Blog",
        description: "A blogging platform with MDX support, light/dark themes, and instant search.",
        imageUrl: "https://www.appvizer.com/media/application/12271/screenshot/14045/37853.png",
        link: "https://google.com"
    },
    {
        id: 4,
        title: "Chat App",
        description: "Real‑time chat application using WebSocket and push notifications.",
        imageUrl: "https://www.appvizer.com/media/application/12271/screenshot/14045/37853.png",
        link: "https://google.com"
    }
];

const Projects: React.FC = () => (
    <section id="projects" className="relative py-16 bg-gray-900 overflow-visible perspective-1000 mt-32">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-purple-600 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-[400px] h-[400px] bg-blue-500 opacity-15 blur-3xl rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-pink-400 opacity-10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] bg-yellow-300 opacity-10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative container mx-auto px-4">
            <motion.h2
              className="text-3xl sm:text-5xl font-extrabold text-white text-center mb-12"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              My Projects
              <span className="block mt-2 h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-full animate-pulse"/>
            </motion.h2>

        {/* Animated grid */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {projects.map((proj) => (
            <Tilt
              key={proj.id}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={800}
              glareEnable={true}
              glareMaxOpacity={0.2}
              className="group rounded-xl overflow-hidden shadow-lg bg-gray-800 hover:shadow-2xl transition-shadow flex flex-col h-full"
            >
              <motion.a
                href={proj.link}
                target="_blank"
                className="flex flex-col flex-1"
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 20 },
                  show:  { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 120 } }
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    className="w-full h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  {/* overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-80 transition-opacity"></div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{proj.title}</h3>
                  <p className="text-gray-300 mb-4 flex-1">{proj.description}</p>
                  <span className="self-start inline-block mt-auto px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full text-sm font-medium transform transition duration-300 group-hover:scale-105">
                    View Project →
                  </span>
                </div>
              </motion.a>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </section>
);

export default Projects;