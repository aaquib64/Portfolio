import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function Projects() {
  const projects = [
    {
      number: "01",
      category: "E-Commerce",
      title: "TrendiFy",
      desc: "A fashion shopping web application featuring product browsing, category-based filtering, product details, and cart functionality.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      live: "https://shoptrendify.netlify.app",
      github: "https://github.com/aaquib64/TrendiFy_Client",
    },
    {
      number: "02",
      category: "Recipe Application",
      title: "EasyPans",
      desc: "A recipe application with a responsive interface, designed to make exploring and managing recipes simple and convenient.",
      tech: ["React", "Tailwind CSS", "REST APIs"],
      live: "https://easypans.netlify.app/",
      github: "https://github.com/aaquib64/EasyPans",
    },
    {
      number: "03",
      category: "Management System",
      title: "Inventory Management",
      desc: "An inventory management application focused on organizing inventory data and managing records through CRUD operations.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      live: "https://inventosystem.netlify.app/",
      github: "https://github.com/aaquib64/IMS-Client",
    },
    {
      number: "04",
      category: "Finance Dashboard",
      title: "PocketPilot",
      desc: "An expense-tracking application designed to help users record income and expenses and review their spending.",
      tech: ["React", "JavaScript", "CSS"],
      live: "https://pocketpilot-app.netlify.app/",
      github: "https://github.com/aaquib64/PocketPilot_Client",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-950 to-black px-5 py-20 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 text-center sm:mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
            What I've Built
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            My <span className="text-indigo-400">Projects</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            A selection of web applications showcasing my experience with
            frontend development, APIs, and full-stack technologies.
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-7"
        >
          {projects.map((project) => (
            <motion.article
              key={project.number}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-indigo-400/40 hover:bg-white/[0.06] sm:p-7"
            >
              {/* Project Header */}
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-semibold tracking-widest text-indigo-400">
                  PROJECT / {project.number}
                </span>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
                  {project.category}
                </span>
              </div>

              {/* Project Details */}
              <h2 className="text-xl font-semibold transition-colors group-hover:text-indigo-300 sm:text-2xl">
                {project.title}
              </h2>

              <p className="mt-3 flex-1 text-sm leading-7 text-gray-400">
                {project.desc}
              </p>

              {/* Technology Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-indigo-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="mt-7 flex gap-3 border-t border-white/10 pt-5">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-gray-200 transition hover:border-white/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
