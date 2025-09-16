"use client";

import React from "react";
import { Braces, GraduationCap, Monitor, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

// نفس فكرة الأنيميشن فوق
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const pop = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function AboutComp() {
    return (
        <section
            id="about"
            className="container mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-10 mt-16 mb-16"
            aria-labelledby="about-title"
        >
            {/* Header */}
            <motion.header
                className="max-w-screen-xl mx-auto  text-center mb-10"
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
                viewport={{ once: true, amount: 0.2 }}
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
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        variants={container}
                    >
                        <motion.div
                            variants={pop}
                            className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg"
                        >
                            <div className="text-[#00897b] mb-4">
                                <Braces aria-hidden="true" className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Clean Code</h3>
                            <p className="text-gray-600">
                                Crafting readable, maintainable, and scalable code by following industry best practices.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={pop}
                            className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg"
                        >
                            <div className="text-[#00897b] mb-4">
                                <Monitor aria-hidden="true" className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Front-End Development</h3>
                            <p className="text-gray-600">
                                Creating responsive, user-friendly interfaces with modern frameworks and best practices.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={pop}
                            className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg"
                        >
                            <div className="text-[#00897b] mb-4">
                                <GraduationCap aria-hidden="true" className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Learning</h3>
                            <p className="text-gray-600">
                                Always improving skills and keeping up with the latest technologies.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={pop}
                            className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg"
                        >
                            <div className="text-[#00897b] mb-4">
                                <TrendingUp aria-hidden="true" className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Adaptability</h3>
                            <p className="text-gray-600">
                                Quickly adjusting to new challenges and working effectively in different environments.
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Stats strip */}
            <motion.div
                className="lg:mb-20 mb-12 shadow-xl flex flex-wrap justify-center items-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full px-4 sm:px-6 md:px-8 py-4 sm:py-6 max-w-full overflow-hidden"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                <motion.div variants={fadeUp} className="text-center mx-2 sm:mx-4">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00897b]">0+</div>
                    <div className="text-xs sm:text-sm md:text-base text-gray-600">Years Experience</div>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    className="hidden sm:block w-px h-6 sm:h-8 bg-gray-300 mx-2 sm:mx-4"
                    aria-hidden="true"
                />

                <motion.div variants={fadeUp} className="text-center mx-2 sm:mx-4">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00897b]">8+</div>
                    <div className="text-xs sm:text-sm md:text-base text-gray-600">Projects Completed</div>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    className="hidden sm:block w-px h-6 sm:h-8 bg-gray-300 mx-2 sm:mx-4"
                    aria-hidden="true"
                />

                <motion.div variants={fadeUp} className="text-center mx-2 sm:mx-4">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00897b]">99%</div>
                    <div className="text-xs sm:text-sm md:text-base text-gray-600">Client Satisfaction</div>
                </motion.div>
            </motion.div>
        </section>
    );
}
