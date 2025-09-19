"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";



const EASE_SOFT: [number, number, number, number] = [0.4, 0, 0.2, 1];

export default function SkillsComp() {
  const prefersReduced = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.1,
        delayChildren: prefersReduced ? 0 : 0.18,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReduced ? 0 : 0.6, ease: EASE_SOFT },
    },
  };

  const barsContainer: Variants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: prefersReduced ? 0 : 0.24,
        staggerChildren: prefersReduced ? 0 : 0.12,
      },
    },
  };

  // GPU-friendly bar using scaleX (with origin-left) instead of animating width
  const barScale: Variants = {
    hidden: { scaleX: prefersReduced ? 1 : 0, opacity: prefersReduced ? 1 : 0.9 },
    show: (amount: number) => ({
      scaleX: prefersReduced ? 1 : amount,
      opacity: 1,
      transition: prefersReduced
        ? { duration: 0 }
        : { duration: 0.9, ease: EASE_SOFT },
    }),
  };

  // Chip animation
  const chip: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 8, scale: prefersReduced ? 1 : 0.98, filter: prefersReduced ? "none" : "blur(1px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: prefersReduced ? 0 : 0.4, ease: EASE_SOFT },
    },
  };

  const SkillBar = ({ label, value }: { label: string; value: number }) => (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-[#0a1f44]">{label}</span>
        <span className="text-sm font-medium text-[#0a1f44]">{Math.round(value * 100)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className="h-2.5 rounded-full bg-[#00897b] origin-left will-change-transform"
          variants={barScale}
          custom={value}
        />
      </div>
    </div>
  );

  const chips = [
    "React Router",
    "React Hooks",
    "Context API",
    "SSR",
    "SSG",
    "ISR",
    "Middleware",
    "Responsive Design",
    "Flexbox",
    "Grid",
    "Media Queries",
    "CSS Animations",
    "Component Architecture",
    "Reusable Components",
    "React Hook Form",
    "Zod",
    "Axios",
    "Fetch",
    "Dynamic Routing",
    "Performance Optimization",
    "SEO (Next.js)",
  ];

  return (
    <section id="skills" className="bg-[#f9fafb]">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <motion.div
          className="text-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="lg:text-4xl text-3xl font-bold text-[#0a1f44]" variants={fadeUp}>
            Skills & Technologies
          </motion.h2>

          <motion.p
            className="mt-4 sm:mt-6 mb-6 sm:mb-8 text-base sm:text-lg lg:text-xl text-[#5c6872] max-w-3xl mx-auto leading-relaxed"
            variants={fadeUp}
          >
            A comprehensive overview of my technical expertise and core front-end skills, reflecting my ability to craft scalable, performant, and user-focused applications.
          </motion.p>
        </motion.div>

        {/* Skills Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Frontend Card */}
          <motion.div
            className="bg-white rounded-xl shadow p-6 transition-all duration-400 hover:-translate-y-[2px] hover:shadow-lg"
            variants={fadeUp}
          >
            <h3 className="text-xl font-semibold text-[#0a1f44] mb-4">Front-End</h3>

            <motion.div
              className="space-y-4"
              variants={barsContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <SkillBar label="HTML & CSS" value={0.95} />
              <SkillBar label="JavaScript" value={0.83} />
              <SkillBar label="TypeScript" value={0.75} />
              <SkillBar label="React" value={0.8} />
              <SkillBar label="Next.js" value={0.88} />
              <SkillBar label="Tailwind CSS" value={0.9} />
              <SkillBar label="Bootstrap" value={0.9} />
            </motion.div>
          </motion.div>

          {/* Tools & Technologies Card */}
          <motion.div
            className="bg-white rounded-xl shadow p-6 transition-all duration-400 hover:-translate-y-[2px] hover:shadow-lg"
            variants={fadeUp}
          >
            <h3 className="text-xl font-semibold text-[#0a1f44] mb-4">Tools & Technologies</h3>

            <motion.div
              className="space-y-4"
              variants={barsContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <SkillBar label="Git/GitHub" value={0.85} />
              <SkillBar label="VS Code" value={0.9} />
              <SkillBar label="Framer Motion" value={0.85} />
              <SkillBar label="Postman" value={0.8} />
              <SkillBar label="NPM" value={0.9} />
              <SkillBar label="Vite" value={0.9} />
              <SkillBar label="TanStack Query" value={0.8} />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Technologies I Work With */}
        <motion.div
          className="bg-[#f9fafb] py-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-10">
            <motion.h2
              className="text-center text-2xl sm:text-3xl font-bold text-[#0a1f44] mb-6"
              variants={fadeUp}
            >
              Technologies I Work With
            </motion.h2>

            <motion.div
              className="flex flex-wrap justify-center gap-3"
              variants={container}
            >
              {chips.map((c) => (
                <motion.span
                  key={c}
                  variants={chip}
                  className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#0a1f44] text-sm sm:text-base font-medium transition-colors duration-300 hover:bg-[#00897b] hover:text-white hover:border-[#00897b] focus:outline-none focus:ring-2 focus:ring-[#00897b]/40"
                >
                  {c}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
