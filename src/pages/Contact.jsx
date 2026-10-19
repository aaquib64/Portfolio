
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

export default function Contact() {
  const contacts = [
    {
      title: "Email",
      value: "aaquibshaikh64@gmail.com",
      icon: FaEnvelope,
      href: "mailto:aaquibshaikh64@gmail.com",
      action: "Send an email",
    },
    {
      title: "Phone",
      value: "+91 9028264605",
      icon: FaPhoneAlt,
      href: "tel:+919028264605",
      action: "Call me",
    },
  ];

  const socials = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/shaikh-aaquib",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      link: "https://github.com/aaquib64",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/the_structural.engineer",
    },
  ];

  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-900 via-slate-950 to-black px-5 py-20 text-white sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-5xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Heading */}
          <motion.div variants={fadeUp} className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
              Let's Connect
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Get In <span className="text-indigo-400">Touch</span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              Looking for a developer for your next project or an opportunity
              to work together? Feel free to reach out.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            variants={stagger}
            className="grid gap-5 sm:grid-cols-2"
          >
            {contacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <motion.a
                  key={contact.title}
                  variants={fadeUp}
                  href={contact.href}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.99 }}
                  className="group flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-indigo-400/40 hover:bg-white/[0.05] sm:p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/10">
                    <Icon className="text-xl text-indigo-400 transition-colors group-hover:text-indigo-300" />
                  </div>

                  <div className="min-w-0">
                    <h2 className="mb-1 font-semibold text-white">
                      {contact.title}
                    </h2>

                    <p className="break-all text-sm text-gray-400">
                      {contact.value}
                    </p>

                    <span className="mt-2 inline-block text-xs font-medium text-indigo-400">
                      {contact.action}
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Location */}
          <motion.div
            variants={fadeUp}
            className="mt-5 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/10">
              <FaMapMarkerAlt className="text-xl text-indigo-400" />
            </div>

            <div>
              <h2 className="font-semibold text-white">Location</h2>
              <p className="mt-1 text-sm text-gray-400">
                Jalgaon, Maharashtra, India
              </p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeUp} className="mt-12 text-center">
            <h2 className="mb-5 text-sm font-medium text-gray-400">
              Find me online
            </h2>

            <div className="flex justify-center gap-4">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-xl text-gray-300 transition-colors hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>

            <p className="mt-8 text-xs text-gray-600">
              Open to web development and software engineering opportunities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
