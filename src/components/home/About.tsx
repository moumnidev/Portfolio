"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import {
  FaReact, FaNodeJs, FaJava,
  FaHtml5, FaCss3Alt, FaDocker, FaPython,
  FaInstagram, FaTwitter, FaLinkedin
} from "react-icons/fa";
import {
  SiTypescript, SiMysql, SiMongodb, SiExpress, SiTailwindcss,
  SiRedux, SiAmazon, SiNpm, SiYarn, SiWebpack,
  SiBabel, SiJest, SiCypress, SiBootstrap,
  SiSass, SiPostman, SiGithub, SiGo, SiRust, SiKubernetes, SiTerraform,
  SiJenkins, SiGitlab, SiIndeed, SiTelegram
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

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

const socialLinks = [
  { icon: FaInstagram,   url: "https://instagram.com/sofi_moumni",   label: "@sofi_moumni" },
  { icon: FaTwitter,     url: "https://twitter.com/sofi_moumni",     label: "@sofi_moumni" },
  { icon: FaLinkedin,    url: "https://linkedin.com/in/sofi_moumni", label: "@sofi_moumni" },
  { icon: SiIndeed,      url: "https://indeed.com/profile/sofi_moumni", label: "@sofi_moumni" },
  { icon: SiTelegram,    url: "https://t.me/sofi_moumni",           label: "@sofi_moumni" },
  { icon: HiOutlineMail, url: "mailto:contact@moumni.dev",          label: "contact@moumni.dev" },
];

const About: React.FC = () => {
  const [text] = useTypewriter({
    words: ["Full‑Stack Developer", "Creative Problem‑Solver", "Passionate Learner"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1200
  });

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
        <div className="absolute bottom-0 right-1/3 transform translate-x-1/2 w-[400px] h-[400px] bg-blue-500 opacity-15 blur-3xl rounded-full"></div>

        {/* Ajout de lumières supplémentaires */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-green-400 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] bg-pink-500 opacity-15 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[200px] h-[200px] bg-yellow-300 opacity-10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Image + Name + Social */}
          <motion.div
            className="md:w-1/3 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={800} glareEnable glareMaxOpacity={0.2}>
              <div className="relative rounded-full p-1 bg-gradient-to-tr from-purple-600 to-blue-400 shadow-lg">
                <img
                  src="/favicon.ico"
                  alt="Votre Profil"
                  className="rounded-full w-48 h-48 md:w-56 md:h-56 object-cover"
                />
              </div>
            </Tilt>

            {/* ► Ton nom en gros animé sous le logo */}
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold text-white mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Sofiane Moumni
            </motion.h1>

            {/* ► Social Links sous le nom */}
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              {socialLinks.map(({ icon: Icon, url, label }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-pink-400 transition"
                >
                  <Icon className="text-2xl" />
                  <span className="ml-2 text-sm">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Texte & CTA */}
          <motion.div
            className="md:w-2/3 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-xl">
              <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                Hello! I'm{" "}
                <span className="font-bold text-white">
                  {text}
                  <Cursor cursorStyle="|" />
                </span>
                , crafting modern, scalable web experiences with flair.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                My passion lies in solving complex problems, learning new
                technologies, and building projects that make an impact.
                Outside of code, you'll find me exploring software
                architecture or enjoying a good cup of coffee.
              </p>

              {/* Call to Action Buttons */}
              <div className="flex justify-center md:justify-start mb-8">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
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
                className="space-y-10 mt-8"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {techCategories.map(({ title, items }) => (
                  <motion.div key={title} variants={item}>
                    <h3 className="text-xl font-semibold text-white mb-4 relative inline-block">
                      {title}
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded animate-pulse" />
                    </h3>
                    <div className="flex flex-wrap gap-6">
                      {items.map(({ icon: Icon, name }, i) => (
                        <Tilt
                          key={i}
                          tiltMaxAngleX={15}
                          tiltMaxAngleY={15}
                          perspective={1000}
                          className="w-16 h-16"
                        >
                          <motion.div
                            className="group relative w-full h-full bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden cursor-pointer"
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 200 }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-white opacity-10"
                              initial={{ rotate: 0 }}
                              whileHover={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                            />
                            <Icon className="relative text-white text-2xl z-10" />
                            <span className="absolute bottom-1 w-full text-center text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                              {name}
                            </span>
                          </motion.div>
                        </Tilt>
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