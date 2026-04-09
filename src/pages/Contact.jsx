import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

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

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl w-full text-center"
      >
        {/* Heading */}
        <motion.div variants={fadeUp}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12 rounded-full"></div>
        </motion.div>

        {/* Cards */}
        <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-6">
          {/* Email */}
          <motion.a
            variants={fadeUp}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=aaquibshaikh64@gmail.com"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-5 bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 transition duration-300 hover:border-indigo-500 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-500/20">
              <FaEnvelope className="text-indigo-400 text-xl group-hover:text-white transition" />
            </div>

            <div className="flex flex-col justify-center">
              <h4 className="font-semibold text-lg text-indigo-400 group-hover:text-white leading-none mb-2">
                Email
              </h4>
              <p className="text-sm text-white/70 break-all">
                aaquibshaikh64@email.com
              </p>
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a
            variants={fadeUp}
            href="tel:+919028264605"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-5 bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 transition duration-300 hover:border-indigo-500 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-500/20">
              <FaPhoneAlt className="text-indigo-400 text-xl group-hover:text-white transition" />
            </div>

            <div className="flex flex-col justify-center">
              <h4 className="font-semibold text-lg text-indigo-400 group-hover:text-white leading-none mb-2">
                Phone
              </h4>
              <p className="text-sm text-white/70">+91 9028264605</p>
            </div>
          </motion.a>

          {/* Location */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-5 bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 transition sm:col-span-2 hover:border-indigo-500 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-500/20">
              <FaMapMarkerAlt className="text-indigo-400 text-xl" />
            </div>

            <div className="flex flex-col justify-center">
              <h4 className="font-semibold text-lg text-indigo-400 leading-none mb-2">
                Location
              </h4>
              <p className="text-sm text-white/70">
                Jalgaon, Maharashtra, India
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center gap-6 mt-12"
        >
          {[
            { icon: <FaLinkedin />, link: "www.linkedin.com/in/shaikh-aaquib" },
            { icon: <FaGithub />, link: "https://github.com/aaquib64" },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/the_structural.engineer",
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xl transition hover:bg-indigo-400 hover:text-black"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
