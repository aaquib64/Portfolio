import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Web App",
      desc: "A full-stack MERN eCommerce platform with product filtering, cart system, authentication, and secure checkout.",
      live: "https://shoptrendify.netlify.app",
      github: "https://github.com/aaquib64/TrendiFy_Client",
    },
    {
      title: "Inventory Management System",
      desc: "A MERN-based inventory management solution with CRUD operations and real-time updates.",
      live: "https://inventosystem.netlify.app/",
      github: "https://github.com/aaquib64/IMS-Client",
    },
    {
      title: "Expense Tracker",
      desc: "PocketPilot – Track income, expenses, and analyze spending with interactive dashboards.",
      live: "https://pocketpilot-app.netlify.app/",
      github: "https://github.com/aaquib64/PocketPilot_Client",
    },
    {
      title: "EasyPans Recipe App",
      desc: "Users can upload, search, and save recipes with a clean UI and fast performance.",
      live: "https://www.easypans.com/",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            A showcase of my work, skills, and real-world applications built
            using modern technologies.
          </p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          variants={stagger}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-indigo-500 transition duration-300 shadow-lg flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-400">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6">{project.desc}</p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 text-center px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-sm font-medium transition"
                >
                  Live Demo
                </motion.a>

                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 text-center px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 text-sm font-medium transition"
                  >
                    GitHub
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
