
import React from "react";
import { motion } from "framer-motion";
import resume from "../assets/Aaquib-Shaikh-Resume.pdf";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
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

export default function About() {
  const highlights = [
    {
      number: "01",
      title: "Frontend Development",
      desc: "Building responsive and user-friendly interfaces with React, JavaScript, and Tailwind CSS.",
    },
    {
      number: "02",
      title: "Backend Development",
      desc: "Developing REST APIs and server-side functionality with Node.js and Express.",
    },
    {
      number: "03",
      title: "Problem Solving",
      desc: "Debugging issues, improving application workflows, and writing maintainable code.",
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
            Get to Know Me
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About <span className="text-indigo-400">Me</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            I'm a web developer passionate about building practical
            applications, creating responsive user interfaces, and continuously
            improving my development skills.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
          {/* Introduction */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-start"
          >
            <motion.p
              variants={fadeUp}
              className="text-base leading-8 text-gray-300"
            >
              Hi, I'm Shaikh Aaquib, a developer focused on the MERN stack.
              I've worked on projects including TrendiFy, an e-commerce
              application, an inventory management system, PocketPilot, and
              EasyPans.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-sm leading-7 text-gray-400 sm:text-base"
            >
              My experience also includes technical support, troubleshooting
              application issues, validating fixes, and helping users with
              software workflows. I enjoy combining problem-solving with
              development to build useful, easy-to-use web applications.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-sm leading-7 text-gray-400 sm:text-base"
            >
              I'm looking for opportunities where I can contribute my
              JavaScript and web development skills, learn from experienced
              developers, and grow as a software professional.
            </motion.p>

            {/* Resume Button */}
            <motion.a
              variants={fadeUp}
              href={resume}
              download="Aaquib-Shaikh-Resume.pdf"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5"
          >
            {highlights.map((item) => (
              <motion.article
                key={item.number}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-indigo-400/40 hover:bg-white/[0.05] sm:p-7"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-white">
                    {item.title}
                  </h2>

                  <span className="text-sm font-medium tracking-widest text-indigo-400">
                    {item.number}
                  </span>
                </div>

                <p className="text-sm leading-7 text-gray-400">
                  {item.desc}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
