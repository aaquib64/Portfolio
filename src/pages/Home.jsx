import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import resume from "../assets/resume.pdf";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

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

export default function Home() {
  const techStack = [
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "Express", icon: SiExpress, color: "text-gray-300" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
  ];

  const experience = [
    {
      role: "Software Developer Intern",
      company: "EasyPans, Mumbai",
      duration: "Dec 2025 – Mar 2026",
      points: [
        "Developed responsive UI using React & Tailwind",
        "Built REST APIs using Node.js & Express",
        "Integrated MongoDB for data management",
      ],
    },
    {
      role: "Web Developer Intern",
      company: "Kothari Tech, Mumbai",
      duration: "Jun 2024 – Nov 2024",
      points: [
        "Developed responsive websites using HTML, CSS, JavaScript",
        "Implemented SEO best practices to improve website ranking",
        "Designed and customized UI for better user experience",
      ],
    },
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 px-6">
        {/* Background Glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -right-40 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl"></div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.span
            variants={fadeUp}
            className="inline-block mb-6 px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-gray-300 backdrop-blur pt-20"
          >
            Full Stack Web Developer
          </motion.span>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white"
          >
            Building{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              modern web experiences
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Hi, I’m{" "}
            <span className="text-white font-semibold">Shaikh Aaquib</span>. A
            MERN Stack Developer focused on crafting scalable, high-performance
            applications with clean UI and robust backend systems.
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap justify-center gap-6"
          >
            {techStack.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="flex flex-col items-center px-5 py-4 rounded-xl"
                >
                  <Icon className={`text-3xl mb-2 ${tech.color}`} />
                  <span className="text-sm text-gray-300">{tech.name}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/projects"
              className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 text-white hover:border-indigo-500 transition duration-300"
            >
              Contact Me
            </Link>

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="px-8 py-4 rounded-xl bg-white text-black hover:bg-gray-200 "
            >
              Download Resume
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={stagger}
            className="mt-16 mb-6 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: "Projects Built", value: "8+" },
              { label: "Tech Stack", value: "MERN" },
              { label: "UI Focus", value: "Responsive" },
              { label: "Experience", value: "Hands-on" },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:border-indigo-500 transition duration-300 "
              >
                <h3 className="text-2xl font-bold text-white">{item.value}</h3>
                <p className="text-sm text-gray-400">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ================= EXPERIENCE SECTION ================= */}
      <section className="bg-slate-950 text-white py-10 px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Heading */}
          <motion.div variants={fadeUp} className="text-center mb-10">
            <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-4">
              Experience
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400">
              My professional journey and hands-on experience
            </motion.p>
          </motion.div>

          {/* Cards */}
          <motion.div variants={stagger} className="grid md:grid-cols-2 gap-8">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:border-indigo-500 transition duration-300"
              >
                <h3 className="text-xl font-semibold text-indigo-400">
                  {exp.role}
                </h3>
                <p className="text-gray-300">{exp.company}</p>
                <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>

                <ul className="text-sm text-gray-300 space-y-2">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>• {point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
