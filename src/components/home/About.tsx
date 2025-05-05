"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import {
  FaReact, FaNodeJs, FaJava,
  FaHtml5, FaCss3Alt, FaDocker, FaPython,
  FaInstagram, FaLinkedin, FaGithub,
} from "react-icons/fa";
import {
  SiTypescript, SiMysql, SiMongodb, SiExpress, SiTailwindcss,
  SiRedux, SiAmazon, SiNpm, SiYarn, SiWebpack,
  SiBabel, SiJest, SiCypress, SiBootstrap,
  SiSass, SiPostman, SiGithub, SiGo, SiRust, SiKubernetes, SiTerraform,
  SiJenkins, SiGitlab
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { BsTwitterX } from "react-icons/bs";

const container = {
  hidden: { },
  show: {
    transition: { staggerChildren: 0.1 }
  }
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show:  { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const socialContainer = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const socialItem = {
  hidden: { opacity: 0, y: 10 },
  show:   { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } }
};

const socialLinks = [
  { icon: FaInstagram,   url: "https://instagram.com/moumnidev",   label: "Instagram" },
  { icon: BsTwitterX,     url: "https://x.com/moumnidev",     label: "Twitter" },
  { icon: FaLinkedin,    url: "https://linkedin.com/in/moumnidev", label: "LinkedIn" },
  { icon: FaGithub,    url: "https://github.com/moumnidev",           label: "GitHub" },
  { icon: HiOutlineMail, url: "mailto:contact@moumni.dev",          label: "Email" },
];

export const AboutSocials: React.FC = () => (
  <motion.div
    className="mt-6 flex justify-center md:justify-start space-x-4"
    initial="hidden"
    animate="show"
    variants={socialContainer}
  >
    {socialLinks.map(({ icon: Icon, url, label }) => (
      <motion.a
        key={label}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={label}
        className="group"
        variants={socialItem}
        whileHover={{ scale: 1.15 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="
          flex items-center justify-center
          w-10 h-10 sm:w-12 sm:h-12
          bg-gray-700/50
          group-hover:bg-gradient-to-tr group-hover:from-purple-500 group-hover:to-pink-500
          rounded-full
          transition-colors duration-300
        ">
          <Icon className="text-white text-lg sm:text-xl" />
        </div>
      </motion.a>
    ))}
  </motion.div>
);

const About: React.FC = () => {
  const words = [
    "Full‑Stack Developer",
    "Creative Problem‑Solver",
    "Passionate Learner"
  ];
  const [text] = useTypewriter({
    words,
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1200
  });

// Determine the longest string to reserve space
  const longest = words.reduce((a, b) => (a.length > b.length ? a : b), "");

  const techCategories = [
    {
      title: "Frontend",
      items: [
        { icon: FaHtml5, name: "HTML5" },
        { icon: FaCss3Alt, name: "CSS3" },
        { icon: SiTailwindcss, name: "Tailwind" },
        { icon: SiBootstrap, name: "Bootstrap" },
        { icon: SiSass, name: "Sass" },
      ],
    },
    {
      title: "Frameworks & State",
      items: [
        { icon: FaReact, name: "React" },
        { icon: RiNextjsFill, name: "Next.js" },
        { icon: SiRedux, name: "Redux" },
      ],
    },
    {
      title: "Backend",
      items: [
        { icon: FaNodeJs, name: "Node.js" },
        { icon: SiExpress, name: "Express" },
        { icon: FaPython, name: "Python" },
      ],
    },
    {
      title: "Databases",
      items: [
        { icon: SiMysql, name: "MySQL" },
        { icon: SiMongodb, name: "MongoDB" },
      ],
    },
    {
      title: "DevOps & Tooling",
      items: [
        { icon: FaDocker, name: "Docker" },
        { icon: SiNpm, name: "NPM" },
        { icon: SiYarn, name: "Yarn" },
        { icon: SiWebpack, name: "Webpack" },
        { icon: SiBabel, name: "Babel" },
        { icon: SiGithub, name: "GitHub" },
        { icon: SiAmazon, name: "AWS" },
      ],
    },
    {
      title: "Testing & QA",
      items: [
        { icon: SiJest, name: "Jest" },
        { icon: SiCypress, name: "Cypress" },
        { icon: SiPostman, name: "Postman" },
      ],
    },
    {
      title: "Languages",
      items: [
        { icon: SiTypescript, name: "TypeScript" },
        { icon: FaJava, name: "Java" },
        { icon: SiGo, name: "Go" },
        { icon: SiRust, name: "Rust" },
        { icon: FaPython, name: "Python" },
      ],
    },
    {
      title: "CI/CD & Infra",
      items: [
        { icon: SiJenkins, name: "Jenkins" },
        { icon: SiKubernetes, name: "Kubernetes" },
        { icon: SiTerraform, name: "Terraform" },
        { icon: SiGitlab, name: "GitLab" },
        { icon: BiLogoVisualStudio, name: "VSCode" },
        { icon: FaDocker, name: "Docker" },
        { icon: SiAmazon, name: "AWS" },
      ],
    },
  ];

  return (
    <section id="about" className="relative py-16 overflow-visible perspective-1000">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-green-400 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] bg-pink-500 opacity-15 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[200px] h-[200px] bg-yellow-300 opacity-10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          className="text-5xl font-extrabold text-white text-center mb-4"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
          <div className="mt-2 h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 animate-pulse rounded-full" />
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Image + Name + Social */}
          <motion.div
            className="w-full sm:w-2/3 md:w-1/3 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={800}>
              <div className="relative rounded-full p-1 bg-gradient-to-tr from-purple-600 to-blue-400 shadow-lg">
                <img
                  src="/favicon.ico"
                  alt="Votre Profil"
                  className="rounded-full w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover"
                />
              </div>
            </Tilt>

            {/* Animated name below the logo */}
            <motion.h1
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Sofiane Moumni
            </motion.h1>

            {/* Social Links below the name */}
            <AboutSocials />
          </motion.div>

          {/* Text & Call to Action */}
          <motion.div
            className="w-full md:w-2/3 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-xl">
              <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                Hello! I&rsquo;m{' '}
                <span className="relative inline-block">
                  {/* Invisible placeholder to reserve space */}
                  <span className="invisible font-bold whitespace-nowrap">
                    {longest}
                  </span>
                  {/* Animated text, absolutely positioned */}
                  <span className="absolute inset-0 font-bold text-white whitespace-nowrap overflow-visible">
                    {text}
                    <Cursor cursorStyle="|" />
                  </span>
                </span>
                , crafting modern, scalable web experiences with flair.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                My passion lies in solving complex problems, learning new
                technologies, and building projects that make an impact.
                Outside of code, you&rsquo;ll find me exploring software
                architecture or enjoying a good cup of coffee.
              </p>

              {/* Call to Action Buttons */}
              <div className="flex justify-center md:justify-start mb-6">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <HiOutlineMail className="mr-2 text-lg" />
                  Contact Me
                </motion.a>
              </div>

              {/* Tech Stack */}
              <motion.div
                className="space-y-8"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {techCategories.map(({ title, items }) => (
                  <motion.div key={title} variants={item}>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 inline-block relative">
                      {title}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded animate-pulse" />
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                      {items.map(({ icon: Icon, name }, i) => (
                        <div
                          key={i}
                          className="
                            group
                            aspect-square                /* force la carte à un carré */
                            bg-gradient-to-tr from-indigo-500 to-pink-500
                            rounded-2xl shadow-lg
                            cursor-pointer
                            overflow-visible             /* pour laisser le texte apparaître */
                          "
                        >
                          <div className="flex flex-col items-center justify-between h-full p-4">
                            {/* Smaller icon */}
                            <motion.div
                              className="text-white text-4xl sm:text-5xl"
                              whileHover={{ scale: 0.85, y: -10 }}
                              transition={{ type: 'spring', stiffness: 200 }}
                            >
                              <Icon />
                            </motion.div>
                            {/* Text always visible on mobile, visible on hover on desktop */}
                            <span
                              className="
                                mt-2 text-xs sm:text-sm text-white
                                opacity-100 sm:opacity-0 sm:group-hover:opacity-100
                                transition-opacity duration-200
                              "
                            >
                              {name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;