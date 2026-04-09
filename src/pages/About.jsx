import React from "react";
import { motion } from "framer-motion";
import resume from "../assets/resume.pdf";

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
      staggerChildren: 0.2,
    },
  },
};

export default function About() {
  const highlights = [
    {
      title: "Clean Code",
      desc: "Writing maintainable, readable, and scalable code following best practices.",
    },
    {
      title: "Scalable APIs",
      desc: "Building secure and efficient REST APIs using Node.js & Express.",
    },
    {
      title: "Responsive UI",
      desc: "Creating modern, mobile-first interfaces using React & Tailwind CSS.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Heading */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A passionate MERN Stack Developer focused on building real-world
            applications, solving complex problems, and delivering smooth user
            experiences.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div variants={fadeUp}>
            <p className="text-gray-300 leading-relaxed mb-6">
              I’m a Full Stack Developer specializing in MongoDB, Express.js,
              React, and Node.js. I have built applications like TrendiFy
              E-Commerce Web App, Invento Inventory Management System, Expense
              Tracker, EasyPans Recipe App.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I enjoy turning ideas into real-world products with clean UI,
              optimized backend, and scalable architecture. Currently looking
              for opportunities to grow and contribute.
            </p>

            {/* CTA */}
            <motion.a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition"
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Right Side - Highlights */}
          <motion.div variants={stagger} className="grid gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:border-indigo-500 transition duration-300"
              >
                <h3 className="text-lg font-semibold mb-2 text-indigo-400">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
