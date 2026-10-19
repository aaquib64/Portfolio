
import React from "react";
import { motion } from "framer-motion";

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

export default function Skills() {
  const skills = [
    {
      number: "01",
      title: "Frontend Development",
      items: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Design",
      ],
    },
    {
      number: "02",
      title: "Backend Development",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
        "MVC Architecture",
      ],
    },
    {
      number: "03",
      title: "Databases",
      items: [
        "MongoDB",
        "Mongoose",
        "Data Modeling",
        "MySQL",
        "Oracle",
      ],
    },
    {
      number: "04",
      title: "Tools & Libraries",
      items: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Chart.js",
        "DataTables",
        "Windows",
      ],
    },
  ];

  const services = [
    "Full-Stack Web Development",
    "Responsive UI Development",
    "REST API Integration",
    "Admin Dashboard Development",
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-950 to-black px-5 py-20 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 text-center sm:mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
            My Technical Toolkit
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Skills & <span className="text-indigo-400">Technologies</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Technologies and tools I use to develop responsive interfaces,
            build backend services, and work with application data.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-7"
        >
          {skills.map((section) => (
            <motion.article
              key={section.number}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-indigo-400/40 hover:bg-white/[0.05] sm:p-7"
            >
              <div className="mb-6 flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold text-white sm:text-xl">
                  {section.title}
                </h2>

                <span className="text-sm font-medium tracking-widest text-indigo-400">
                  {section.number}
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {section.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-gray-300 transition-colors duration-200 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-indigo-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* What I Do */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20"
        >
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
              My Focus
            </p>

            <h2 className="text-2xl font-bold sm:text-3xl">
              What I <span className="text-indigo-400">Do</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center text-sm font-medium text-gray-300 transition-colors hover:border-indigo-400/40 hover:text-white"
              >
                {service}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
