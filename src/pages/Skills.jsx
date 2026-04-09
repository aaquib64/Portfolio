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

export default function Skills() {
  const skills = [
    {
      title: "Frontend",
      items: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Responsive Design",
        "Bootstrap",
      ],
    },
    {
      title: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
        "MVC Architecture",
      ],
    },
    {
      title: "Database",
      items: [
        "MongoDB",
        "Mongoose",
        "Data Modeling",
        "MySQL",
        "Oracle",
        "Windows",
      ],
    },
    {
      title: "Tools & Technologies",
      items: ["Git", "GitHub", "Postman", "VS Code", "Chart.js", "DataTables"],
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6 min-h-screen">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Heading */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">My Skills</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            A combination of modern technologies and tools I use to build
            scalable, high-performance web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={stagger}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((section, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-indigo-500 transition duration-300 shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-4 text-indigo-400">
                {section.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {section.items.map((item, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 text-sm bg-black/40 border border-white/10 rounded-full hover:bg-indigo-600 transition"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Extra Section - What I Do */}
        <motion.div variants={fadeUp} className="mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-400">
            What I Do
          </h2>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              "Build Full Stack MERN Web Apps",
              "Develop Admin Dashboards",
              "Create REST APIs",
              "Responsive UI Design",
            ].map((item, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
