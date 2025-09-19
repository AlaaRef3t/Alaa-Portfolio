"use client";

import React from "react";
import { Braces, GraduationCap, Monitor, TrendingUp } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";



export default function AboutComp() {
    const prefersReduced = useReducedMotion();

    const EASE_SOFT: [number, number, number, number] = [0.4, 0, 0.2, 1];
    const DUR_SHORT = prefersReduced ? 0 : 0.45;
    const DUR_MED = prefersReduced ? 0 : 0.65;

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: prefersReduced ? 0 : 0.1, delayChildren: prefersReduced ? 0 : 0.18 }
        },
    };

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: prefersReduced ? 0 : 14 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: DUR_MED, ease: EASE_SOFT }
        },
    };

    const popCard: Variants = {
        hidden: { opacity: 0, scale: prefersReduced ? 1 : 0.985, y: prefersReduced ? 0 : 6, filter: prefersReduced ? "none" : "blur(2px)" },
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            transition: prefersReduced
                ? { duration: 0 }
                : { type: "spring", stiffness: 260, damping: 26, mass: 0.9 }
        },
    };

    const stripItem: Variants = {
        hidden: { opacity: 0, y: prefersReduced ? 0 : 10 },
        show: { opacity: 1, y: 0, transition: { duration: DUR_SHORT, ease: EASE_SOFT } },
    };

    return (
        <section
            id="about"
            className="container mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-10 mt-16 mb-16"
            aria-labelledby="about-title"
        >
            {/* Header */}
            <motion.header
                className="max-w-screen-xl mx-auto text-center mb-10"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h2
                    id="about-title"
                    className="text-4xl font-bold text-[#0a1f44]"
                    variants={fadeUp}
                >
                    About Me
                </motion.h2>
                <motion.p
                    className="mt-4 sm:mt-6 mb-6 sm:mb-8 text-base sm:text-lg lg:text-xl text-[#5c6872] max-w-3xl mx-auto leading-relaxed"
                    variants={fadeUp}
                >
                    I&apos;m a passionate front-end engineer crafting fast, accessible, and delightful user interfaces.
                </motion.p>
            </motion.header>

            {/* Content */}
            <motion.div
                className="flex flex-col md:flex-row gap-4 lg:mb-20 mb-12"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                {/* Left text column */}
                <motion.div className="w-full md:w-1/2 text-[#5c6872]" variants={fadeUp}>
                    <p className="text-lg mb-6">
                        I&apos;m Alaa Refaat, a Front-End Developer from Beheira, Egypt.
                        As a Computer Science graduate, I&apos;m passionate about creating modern, responsive, and user-friendly web applications.
                        I enjoy writing clean code, exploring new technologies, and continuously improving my skills to deliver impactful digital experiences.
                    </p>
                    <p className="text-base sm:text-lg mb-6">
                        Outside of programming, I&apos;m deeply passionate about exploring new and emerging technologies,
                        keeping up with industry trends, and experimenting with innovative ideas.
                        I actively contribute to open-source projects,
                        which helps me sharpen my skills while giving back to the community that has greatly influenced my growth.
                        I also enjoy sharing knowledge with fellow developers, whether through discussions, collaborations,
                        or community contributions. I&apos;m always excited to take on new challenges, push my boundaries,
                        and work on projects that create meaningful impact.
                    </p>
                </motion.div>

                {/* Right cards */}
                <motion.div className="w-full md:w-1/2" variants={fadeUp}>
                    <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" variants={container}>
                        {[
                            {
                                icon: <Braces aria-hidden="true" className="w-6 h-6" />,
                                title: "Clean Code",
                                text: "Crafting readable, maintainable, and scalable code by following industry best practices.",
                            },
                            {
                                icon: <Monitor aria-hidden="true" className="w-6 h-6" />,
                                title: "Front-End Development",
                                text: "Creating responsive, user-friendly interfaces with modern frameworks and best practices.",
                            },
                            {
                                icon: <GraduationCap aria-hidden="true" className="w-6 h-6" />,
                                title: "Continuous Learning",
                                text: "Always improving skills and keeping up with the latest technologies.",
                            },
                            {
                                icon: <TrendingUp aria-hidden="true" className="w-6 h-6" />,
                                title: "Adaptability",
                                text: "Quickly adjusting to new challenges and working effectively in different environments.",
                            },
                        ].map((c) => (
                            <motion.div
                                key={c.title}
                                variants={popCard}
                                className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg"
                            >
                                <div className="text-[#00897b] mb-4">{c.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{c.title}</h3>
                                <p className="text-gray-600">{c.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
            {/* Stats strip */}
            <motion.div
                className="lg:mb-20 mb-12 shadow-xl flex flex-nowrap justify-center items-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full px-3 sm:px-6 md:px-8 py-3 sm:py-6 max-w-full overflow-x-auto"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                {/* Years Experience */}
                <motion.div variants={stripItem} className="text-center mx-2 sm:mx-4">
                    <div className="text-sm sm:text-xl md:text-2xl font-bold text-[#00897b]">0+</div>
                    <div className="text-[10px] sm:text-sm md:text-base text-gray-600">Years Experience</div>
                </motion.div>

                {/* Divider */}
                <motion.div
                    variants={stripItem}
                    className="hidden sm:block w-px h-5 sm:h-6 md:h-8 bg-gray-300 mx-2 sm:mx-4"
                    aria-hidden="true"
                />

                {/* Projects Completed */}
                <motion.div variants={stripItem} className="text-center mx-2 sm:mx-4">
                    <div className="text-sm sm:text-xl md:text-2xl font-bold text-[#00897b]">8+</div>
                    <div className="text-[10px] sm:text-sm md:text-base text-gray-600">Projects Completed</div>
                </motion.div>

                {/* Divider */}
                <motion.div
                    variants={stripItem}
                    className="hidden sm:block w-px h-5 sm:h-6 md:h-8 bg-gray-300 mx-2 sm:mx-4"
                    aria-hidden="true"
                />

                {/* Client Satisfaction */}
                <motion.div variants={stripItem} className="text-center mx-2 sm:mx-4">
                    <div className="text-sm sm:text-xl md:text-2xl font-bold text-[#00897b]">99%</div>
                    <div className="text-[10px] sm:text-sm md:text-base text-gray-600">Client Satisfaction</div>
                </motion.div>
            </motion.div>

        </section>
    );
}
