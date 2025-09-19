"use client";
import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Code2, ExternalLink, Eye, Github } from "lucide-react";
import Image from "next/image";



const EASE_SOFT: [number, number, number, number] = [0.4, 0, 0.2, 1];

export default function ProjectsComp() {
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
    hidden: { opacity: 0, y: prefersReduced ? 0 : 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReduced ? 0 : 0.6, ease: EASE_SOFT },
    },
  };

  const cardPop: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReduced ? 0 : 10,
      scale: prefersReduced ? 1 : 0.985,
      filter: prefersReduced ? "none" : "blur(1px)",
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: prefersReduced
        ? { duration: 0 }
        : { type: "spring", stiffness: 260, damping: 26, mass: 0.9 },
    },
  };

  const imageReveal: Variants = {
    hidden: { scale: prefersReduced ? 1 : 1.03, opacity: 0.0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: { duration: prefersReduced ? 0 : 0.7, ease: EASE_SOFT },
    },
  };

  const chip: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 8, scale: prefersReduced ? 1 : 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: prefersReduced ? 0 : 0.4, ease: EASE_SOFT } },
  };

  const Chip = ({ children }: { children: React.ReactNode }) => (
    <motion.span
      variants={chip}
      className="px-3 py-1 rounded-full bg-[#eef2ff] text-[#0a1f44] text-sm font-medium transition-colors duration-300 hover:bg-[#00897b] hover:text-white"
    >
      {children}
    </motion.span>
  );

  const ProjectCard = ({
    title,
    desc,
    img,
    tags,
    code,
    demo,
  }: {
    title: string;
    desc: string;
    img: string;
    tags: string[];
    code: string;
    demo: string;
  }) => (
    <motion.article
      variants={cardPop}
      className="bg-white rounded-2xl shadow ring-1 ring-gray-100 overflow-hidden transition-all duration-400 hover:-translate-y-[2px] hover:shadow-lg"
    >
      <div className="h-56 w-full overflow-hidden rounded-t-xl">
        <motion.div
          variants={imageReveal}
          className="relative h-full w-full overflow-hidden group"
        >
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.03] will-change-transform"
            loading="lazy"
          />
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold text-[#0a1f44]">{title}</h3>
        <p className="mt-2 text-[#5c6872]">{desc}</p>

        <motion.div className="mt-4 flex flex-wrap gap-2" variants={container}>
          {tags.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </motion.div>

        <div className="mt-5 flex items-center gap-6">
          <a
            target="_blank"
            href={code}
            className="inline-flex items-center gap-2 text-[#0a1f44] hover:text-[#00897b] font-medium"
            rel="noreferrer noopener"
          >
            <Code2 className="h-4 w-4" /> Code
          </a>
          <a
            target="_blank"
            href={demo}
            className="inline-flex items-center gap-2 text-[#0a1f44] hover:text-[#00897b] font-medium"
            rel="noreferrer noopener"
          >
            <ExternalLink className="h-4 w-4" /> Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );

  return (
    <section id="projects">
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
            Featured Projects
          </motion.h2>

          <motion.p
            className="mt-4 sm:mt-6 mb-6 sm:mb-8 text-base sm:text-lg lg:text-xl text-[#5c6872] max-w-3xl mx-auto leading-relaxed"
            variants={fadeUp}
          >
            A showcase of recent projects that demonstrate my technical skills and creative vision.
          </motion.p>
        </motion.div>

        {/* Main project cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ProjectCard
            title="GoBuy E-commerce Platform"
            desc="GoBuy A high-performance front-end e-commerce experience with real-time product updates, smart search & filtering, and smooth cart/checkout flows."
            img="/gobuy.png"
            tags={["Next.js", "Tailwind CSS", "Fetch API", "Context API", "AOS Animation"]}
            code="https://github.com/AlaaRef3t/e-commerce"
            demo="https://e-commerce-gobuy.vercel.app/"
          />

          <ProjectCard
            title="Netloop social Application"
            desc="A dynamic front-end social media platform featuring seamless post creation, updates, and deletion, with personalized profile management and image sharing for an engaging user experience."
            img="/netloop2.png"
            tags={["React.js", "Tailwind CSS", "Axios & TanStack", "Context", "React Router"]}
            code="https://github.com/AlaaRef3t/Netloop-App"
            demo="https://netloop-app.vercel.app/"
          />
        </motion.div>

        {/* Other Notable Projects */}
        <motion.div
          className="py-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-10">
            <motion.h2
              className="text-center text-2xl sm:text-3xl font-bold text-[#0a1f44] mb-10"
              variants={fadeUp}
            >
              Other Notable Projects
            </motion.h2>

            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={container}>
              {[
                {
                  title: "Daniels Portfolio",
                  desc: "A mobile-friendly Daniels Portfolio highlighting skills, projects, and interactive design.",
                  code: "https://github.com/AlaaRef3t/DanielsSite",
                  live: "https://alaaref3t.github.io/DanielsSite/",
                  tags: ["HTML", "CSS", "JavaScript"],
                },
                {
                  title: "Weather App",
                  desc: "A responsive weather application with location-based forecasts, interactive maps, and personalized weather alerts.",
                  code: "https://github.com/AlaaRef3t/Weather",
                  live: "https://alaaref3t.github.io/Weather/",
                  tags: ["HTML", "CSS", "JavaScript", "Weather API"],
                },
                {
                  title: "Game Reviews API",
                  desc: "A clean and user-friendly site where players can read, write, and discover game reviews.",
                  code: "https://github.com/AlaaRef3t/Game-Reviews",
                  live: "https://alaaref3t.github.io/Game-Reviews/",
                  tags: ["HTML", "CSS", "JavaScript", "Game API"],
                },
              ].map((p) => (
                <motion.div
                  key={p.title}
                  className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:border-[#00897b] transition-colors"
                  variants={cardPop}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-[#0a1f44]">{p.title}</h3>
                    <div className="flex gap-3 text-[#5c6872]">
                      <a
                        href={p.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform duration-300 hover:scale-110"
                      >
                        <Github className="w-5 h-5 hover:text-[#00897b] cursor-pointer" />
                      </a>
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform duration-300 hover:scale-110"
                      >
                        <Eye className="w-5 h-5 hover:text-[#00897b] cursor-pointer" />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-[#5c6872] mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2" >
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#f1f5f9] text-[#0a1f44] border border-gray-200 transition-colors duration-300 hover:bg-[#00897b] hover:text-white"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="mt-10 flex justify-center" variants={fadeUp}>
              <a
                href="https://github.com/AlaaRef3t"
                target="_blank"
                className="inline-flex items-center gap-2 bg-[#00897b] hover:bg-[#00695c] text-white font-medium px-6 py-3 rounded-lg shadow-md transition-colors"
              >
                <Github className="w-5 h-5" />
                View More on GitHub
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
