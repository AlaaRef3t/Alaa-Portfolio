"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Code2, ExternalLink, Eye, Github } from 'lucide-react'
import Image from "next/image";

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}
const pop = {
    hidden: { opacity: 0, scale: 0.98, y: 8 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45 } },
}

export default function ProjectsComp() {
    return (
        <section id='projects'>
            <div className='container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20'>
                
                <motion.div
                    className="text-center"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h2
                        className="lg:text-4xl text-3xl font-bold text-[#0a1f44]"
                        variants={fadeUp}
                    >
                        Featured Projects
                    </motion.h2>

                    <motion.p
                        className="mt-4 sm:mt-6 mb-6 sm:mb-8 text-base sm:text-lg lg:text-xl text-[#5c6872] max-w-3xl mx-auto leading-relaxed"
                        variants={fadeUp}
                    >
                        A showcase of recent projects that demonstrate my technical skills and creative vision.
                    </motion.p>
                </motion.div>

                {/*  Cards  */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Card 1 */}
                    <motion.article
                        variants={pop}
                        className="bg-white rounded-2xl shadow ring-1 ring-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
                    >

                        <div className="h-56 w-full overflow-hidden rounded-t-xl">
                            <div className="relative h-full w-full overflow-hidden group">
                                <Image
                                    src="/gobuy.png"
                                    alt="goBuy E-commerce Front-End"
                                    fill
                                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-[#0a1f44]">
                                GoBuy E-commerce Platform
                            </h3>
                            <p className="mt-2 text-[#5c6872]">
                                GoBuy A high-performance front-end e-commerce experience with real-time product updates, smart search & filtering, and smooth cart/checkout flows.
                            </p>

                           
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="px-3 py-1 rounded-full bg-[#eef2ff] text-[#0a1f44] text-sm font-medium hover:bg-[#00897b] hover:text-white transition-all duration-300" >Next.js</span>
                                <span className="px-3 py-1 rounded-full bg-[#eef2ff] text-[#0a1f44] text-sm font-medium hover:bg-[#00897b] hover:text-white transition-all duration-300">Tailwind CSS</span>
                                <span className="px-3 py-1 rounded-full bg-[#eef2ff] text-[#0a1f44] text-sm font-medium hover:bg-[#00897b] hover:text-white transition-all duration-300">Fetch API</span>
                                <span className="px-3 py-1 rounded-full bg-[#eef2ff] text-[#0a1f44] text-sm font-medium hover:bg-[#00897b] hover:text-white transition-all duration-300">Context API</span>
                                <span className="px-3 py-1 rounded-full bg-[#eef2ff] text-[#0a1f44] text-sm font-medium hover:bg-[#00897b] hover:text-white transition-all duration-300">AOS Animation</span>
                            </div>

                           
                            <div className="mt-5 flex items-center gap-6">
                                <a
                                    target="_blank"

                                    href="https://github.com/AlaaRef3t/e-commerce"
                                    className="inline-flex items-center gap-2 text-[#0a1f44] hover:text-[#00897b] font-medium"
                                >
                                    <Code2 className="h-4 w-4" /> Code
                                </a>
                                <a
                                    target="_blank"
                                    href="https://e-commerce-gobuy.vercel.app/"
                                    className="inline-flex items-center gap-2 text-[#0a1f44] hover:text-[#00897b] font-medium"
                                >
                                    <ExternalLink className="h-4 w-4" /> Live Demo
                                </a>
                            </div>
                        </div>
                    </motion.article>

                    {/* Card 2 */}
                    <motion.article
                        variants={pop}
                        className="bg-white rounded-2xl shadow ring-1 ring-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
                    >

                        <div className="h-56 w-full overflow-hidden rounded-t-xl">
                            <div className="relative h-full w-full overflow-hidden group">
                                <Image
                                    src="/netloop2.png"
                                    alt="Netloop socialApp Front-End"
                                    fill
                                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-[#0a1f44]">
                                Netloop social Application
                            </h3>
                            <p className="mt-2 text-[#5c6872]">
                                A dynamic front-end social media platform featuring seamless post creation, updates, and deletion, with personalized profile management and image sharing for an engaging user experience.
                            </p>

                            
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="px-3 py-1 rounded-full bg-[#eef2ff] text-[#0a1f44] text-sm font-medium hover:bg-[#00897b] hover:text-white transition-all duration-300" >React.js</span>
                                <span className="px-3 py-1 rounded-full bg-[#eef2ff] text-[#0a1f44] text-sm font-medium hover:bg-[#00897b] hover:text-white transition-all duration-300">Tailwind CSS</span>
                                <span className="px-3 py-1 rounded-full bg-[#eef2ff] text-[#0a1f44] text-sm font-medium hover:bg-[#00897b] hover:text-white transition-all duration-300">Axios&TanStack API</span>
                                <span className="px-3 py-1 rounded-full bg-[#eef2ff] text-[#0a1f44] text-sm font-medium hover:bg-[#00897b] hover:text-white transition-all duration-300">Context</span>
                                <span className="px-3 py-1 rounded-full bg-[#eef2ff] text-[#0a1f44] text-sm font-medium hover:bg-[#00897b] hover:text-white transition-all duration-300">React Router</span>
                            </div>

                            
                            <div className="mt-5 flex items-center gap-6">
                                <a
                                    target="_blank"

                                    href="https://github.com/AlaaRef3t/Netloop-App"
                                    className="inline-flex items-center gap-2 text-[#0a1f44] hover:text-[#00897b] font-medium"
                                >
                                    <Code2 className="h-4 w-4" /> Code
                                </a>
                                <a
                                    target="_blank"

                                    href="https://netloop-app.vercel.app/"
                                    className="inline-flex items-center gap-2 text-[#0a1f44] hover:text-[#00897b] font-medium"
                                >
                                    <ExternalLink className="h-4 w-4" /> Live Demo
                                </a>
                            </div>
                        </div>
                    </motion.article>
                </motion.div>

                {/*  Other Notable Projects*/}
                <motion.div
                    className=" py-16"
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

                        {/* Projects grid */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-6"
                            variants={container}
                        >
                            {/* Card 1 */}
                            <motion.div
                                className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:border-[#00897b] transition"
                                variants={pop}
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-semibold text-[#0a1f44]">
                                        Daniels Portfolio
                                    </h3>
                                    <div className="flex gap-3 text-[#5c6872]">
                                       
                                        <a
                                            href="https://github.com/AlaaRef3t/DanielsSite"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="transition transform hover:scale-110"
                                        >
                                            <Github className="w-5 h-5 hover:text-[#00897b] cursor-pointer" />
                                        </a>

                                        
                                        <a
                                            href="https://alaaref3t.github.io/DanielsSite/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="transition transform hover:scale-110"
                                        >
                                            <Eye className="w-5 h-5 hover:text-[#00897b] cursor-pointer" />
                                        </a>
                                    </div>
                                </div>
                                <p className="text-sm text-[#5c6872] mb-4">
                                    A mobile-friendly Daniels Portfolio highlighting skills, projects, and interactive design.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#f1f5f9] text-[#0a1f44] border border-gray-200 hover:bg-[#00897b] hover:text-white transition">
                                        HTML
                                    </span>
                                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#f1f5f9] text-[#0a1f44] border border-gray-200 hover:bg-[#00897b] hover:text-white transition">
                                        CSS
                                    </span>
                                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#f1f5f9] text-[#0a1f44] border border-gray-200 hover:bg-[#00897b] hover:text-white transition">
                                        JavaScript
                                    </span>
                                </div>
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div
                                className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:border-[#00897b] transition"
                                variants={pop}
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-semibold text-[#0a1f44]">
                                        Weather App
                                    </h3>
                                    <div className="flex gap-3 text-[#5c6872]">
                                       
                                        <a
                                            href="https://github.com/AlaaRef3t/Weather"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="transition transform hover:scale-110"
                                        >
                                            <Github className="w-5 h-5 hover:text-[#00897b] cursor-pointer" />
                                        </a>

                                        
                                        <a
                                            href="https://alaaref3t.github.io/Weather/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="transition transform hover:scale-110"
                                        >
                                            <Eye className="w-5 h-5 hover:text-[#00897b] cursor-pointer" />
                                        </a>
                                    </div>
                                </div>
                                <p className="text-sm text-[#5c6872] mb-4">
                                    A responsive weather application with location-based forecasts, interactive maps, and personalized weather alerts.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#f1f5f9] text-[#0a1f44] border border-gray-200 hover:bg-[#00897b] hover:text-white transition">
                                        HTML
                                    </span>
                                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#f1f5f9] text-[#0a1f44] border border-gray-200 hover:bg-[#00897b] hover:text-white transition">
                                        CSS
                                    </span>
                                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#f1f5f9] text-[#0a1f44] border border-gray-200 hover:bg-[#00897b] hover:text-white transition">
                                        JavaScript
                                    </span>
                                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#f1f5f9] text-[#0a1f44] border border-gray-200 hover:bg-[#00897b] hover:text-white transition">
                                        Weather API
                                    </span>
                                </div>
                            </motion.div>

                            {/* Card 3 */}
                            <motion.div
                                className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:border-[#00897b] transition"
                                variants={pop}
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-semibold text-[#0a1f44]">
                                        Game Reviews API
                                    </h3>
                                    <div className="flex gap-3 text-[#5c6872]">
                                       
                                        <a
                                            href="https://github.com/AlaaRef3t/Game-Reviews"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="transition transform hover:scale-110"
                                        >
                                            <Github className="w-5 h-5 hover:text-[#00897b] cursor-pointer" />
                                        </a>

                                        
                                        <a
                                            href="https://alaaref3t.github.io/Game-Reviews/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="transition transform hover:scale-110"
                                        >
                                            <Eye className="w-5 h-5 hover:text-[#00897b] cursor-pointer" />
                                        </a>
                                    </div>
                                </div>
                                <p className="text-sm text-[#5c6872] mb-4">
                                    A clean and user-friendly site where players can read, write, and discover game reviews.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#f1f5f9] text-[#0a1f44] border border-gray-200 hover:bg-[#00897b] hover:text-white transition">
                                        HTML
                                    </span>
                                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#f1f5f9] text-[#0a1f44] border border-gray-200 hover:bg-[#00897b] hover:text-white transition">
                                        CSS
                                    </span>
                                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#f1f5f9] text-[#0a1f44] border border-gray-200 hover:bg-[#00897b] hover:text-white transition">
                                        JavaScript
                                    </span>
                                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#f1f5f9] text-[#0a1f44] border border-gray-200 hover:bg-[#00897b] hover:text-white transition">
                                        Game API
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>

                       
                        <motion.div
                            className="mt-10 flex justify-center"
                            variants={fadeUp}
                        >
                            <a
                                href="https://github.com/AlaaRef3t"
                                target="_blank"
                                className="inline-flex items-center gap-2 bg-[#00897b] hover:bg-[#00695c] text-white font-medium px-6 py-3 rounded-lg shadow-md transition"
                            >
                                <Github className="w-5 h-5" />
                                View More on GitHub
                            </a>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
