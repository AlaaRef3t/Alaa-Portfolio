"use client";

import * as React from "react";
import HomePage from "../home/HomePage";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { ChevronDown, Linkedin, Github, Mail, Briefcase, FolderGit2, Users } from "lucide-react";
import { motion } from "framer-motion";


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 }
  }
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const  
    }
  }
};
const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } }
};
const pop = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function MyInfoComp() {
  return (
    <main
      id="home"
      className="relative min-h-screen overflow-hidden">
 
      <div className="absolute inset-0 -z-10">
        <HomePage />
      </div>

      <section className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-10 pt-28 pb-16 lg:mt-5 sm:mt-5">
        <div className="grid items-center gap-10 md:grid-cols-2">
       
          <motion.div
            className="text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-sm font-medium text-[#0a1f44] ring-1 ring-[#0a1f44]/15 backdrop-blur"
            >
              <span className="text-[#00897b]">👨‍💻</span> Hello, I’m
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight"
            >
              <span className="bg-gradient-to-r from-[#0a1f44] to-[#00897b] bg-clip-text text-transparent">
                Alaa Refaat
              </span>
            </motion.h1>

            <motion.div variants={fadeUp} className="mt-3 flex items-baseline gap-1 text-2xl sm:text-3xl text-[#0a1f44]">
              <TypeAnimation
                sequence={["Front-End Developer", 2000, "Next.js Expert", 2000,"UI/UX Designer", 2000, ""]}
                speed={60}
                repeat={Infinity}
                wrapper="span"
                className="whitespace-pre-line"
              />
            </motion.div>

            <motion.p variants={fadeUp} className="mt-4 max-w-prose text-[#374151]">
              I build fast, accessible web experiences with React & Next.js.
            </motion.p>

            
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/Alaa-Refaat-resume.pdf"
                download
                className="group relative inline-flex items-center justify-center rounded-full bg-[#00897b] px-5 py-2.5 font-semibold text-white shadow-md transition-transform hover:scale-[1.02] hover:bg-[#00695c] focus:outline-none"
              >
                Download CV
              </a>

              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center rounded-full border border-[#0a1f44] px-5 py-2.5 font-semibold text-[#0a1f44] transition hover:bg-[#0a1f44] hover:text-white focus:outline-none"
              >
                Contact Me
              </a>
            </motion.div>

          
            <motion.div variants={fadeUp} className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/alaa-ref3t-x1/"
                target="_blank"
                className="inline-flex size-10 items-center justify-center rounded-full border border-[#0a1f44]/20 bg-white/70 text-[#0a1f44] backdrop-blur hover:bg-white hover:text-blue-600 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/AlaaRef3t"
                target="_blank"
                className="inline-flex size-10 items-center justify-center rounded-full border border-[#0a1f44]/20 bg-white/70 text-[#0a1f44] backdrop-blur hover:bg-white hover:text-[#00695c] transition"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:alaa.dev9@gmail.com"
                className="inline-flex size-10 items-center justify-center rounded-full border border-[#0a1f44]/20 bg-white/70 text-[#0a1f44] backdrop-blur hover:bg-white hover:text-red-600 transition"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>

           
            <motion.div variants={fadeUp} className="mt-8 grid grid-cols-3 max-w-sm gap-2">
              <motion.div variants={pop} className="flex flex-col items-center rounded-lg bg-white/60 px-2 py-3 text-center ring-1 ring-[#0a1f44]/10 shadow-sm">
                <Briefcase className="h-4 w-4 text-[#00897b] mb-1" />
                <div className="text-lg font-bold text-[#0a1f44]">0+</div>
                <div className="text-[11px] text-[#374151]">Years</div>
              </motion.div>
              <motion.div variants={pop} className="flex flex-col items-center rounded-lg bg-white/60 px-2 py-3 text-center ring-1 ring-[#0a1f44]/10 shadow-sm">
                <FolderGit2 className="h-4 w-4 text-[#00897b] mb-1" />
                <div className="text-lg font-bold text-[#0a1f44]">8+</div>
                <div className="text-[11px] text-[#374151]">Projects</div>
              </motion.div>
              <motion.div variants={pop} className="flex flex-col items-center rounded-lg bg-white/60 px-2 py-3 text-center ring-1 ring-[#0a1f44]/10 shadow-sm">
                <Users className="h-4 w-4 text-[#00897b] mb-1" />
                <div className="text-lg font-bold text-[#0a1f44]">2+</div>
                <div className="text-[11px] text-[#374151]">Clients</div>
              </motion.div>
            </motion.div>
          </motion.div>

          
          <motion.div
            className="mx-auto"
            initial="hidden"
            animate="show"
            variants={fade}
          >
            <div className="relative size-[260px] sm:size-[320px] lg:size-[360px]">
              <motion.div variants={pop}>
                <Image
                  src="/newAlaaPic.jpg"
                  alt="Alaa Refaat"
                  width={320}
                  height={320}
                  priority
                  className="rounded-full object-cover object-top size-full ring-4 ring-white shadow-lg transition-transform duration-500 hover:scale-[1.03] w-[320px] h-[260px] md:w-[320px] md:h-[260px] lg:w-[360px] lg:h-[360px]"
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-[#0a1f44]/10 to-[#00897b]/20 blur-2xl" />
            </div>
          </motion.div>
        </div>

      
        <motion.a
          href="#about"
          aria-label="Scroll to next section"
          className="group absolute left-1/2 bottom-4 -translate-x-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-[#0a1f44] shadow-md backdrop-blur hover:bg-white transition animate-bounce"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.a>

      </section>
    </main>
  );
}
