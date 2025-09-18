"use client";

import React from 'react'
import { motion } from 'framer-motion';

import type { Variants } from 'framer-motion';

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1
        }
    },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as const
        }
    },
};


const barsContainer: Variants = {
    hidden: {},
    show: {
        transition: {
            delayChildren: 0.3,    
            staggerChildren: 0.15,  
        },
    },
};

const bar: Variants = {
    hidden: { width: 0 },
    show: (custom: string) => ({
        width: custom, 
        transition: { duration: 1, ease: [0.50, 1, 0.36, 1] },
    }),
};


export default function SkillsComp() {
    return (
        <section id="skills" className="bg-[#f9fafb] ">
            <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
                
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
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 "
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Frontend Card */}
                    <motion.div className="bg-white rounded-xl shadow p-6 hover:scale-103 transition-all duration-300" variants={fadeUp}>
                        <h3 className="text-xl font-semibold text-[#0a1f44] mb-4">
                            Front-End
                        </h3>

                       
                        <motion.div
                            className="space-y-4"
                            variants={barsContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-[#0a1f44]">HTML & CSS</span>
                                    <span className="text-sm font-medium text-[#0a1f44]">95%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <motion.div
                                        className="h-2.5 rounded-full bg-[#00897b]"
                                        variants={bar}
                                        custom="95%"
                                    />
                                </div>
                            </div>

                            
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-[#0a1f44]">JavaScript</span>
                                    <span className="text-sm font-medium text-[#0a1f44]">83%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <motion.div
                                        className="h-2.5 rounded-full bg-[#00897b]"
                                        variants={bar}
                                        custom="83%"
                                    />
                                </div>
                            </div>

                            
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-[#0a1f44]">TypeScript</span>
                                    <span className="text-sm font-medium text-[#0a1f44]">75%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <motion.div
                                        className="h-2.5 rounded-full bg-[#00897b]"
                                        variants={bar}
                                        custom="75%"
                                    />
                                </div>
                            </div>

                           
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-[#0a1f44]">React</span>
                                    <span className="text-sm font-medium text-[#0a1f44]">80%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <motion.div
                                        className="h-2.5 rounded-full bg-[#00897b]"
                                        variants={bar}
                                        custom="80%"
                                    />
                                </div>
                            </div>

                            
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-[#0a1f44]">Next.js</span>
                                    <span className="text-sm font-medium text-[#0a1f44]">88%</span>
                                </div>
                                <div className="w-full bg-gray-2 00 rounded-full h-2.5">
                                    <motion.div
                                        className="h-2.5 rounded-full bg-[#00897b]"
                                        variants={bar}
                                        custom="88%"
                                    />
                                </div>
                            </div>

                           
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-[#0a1f44]">Tailwind CSS</span>
                                    <span className="text-sm font-medium text-[#0a1f44]">90%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <motion.div
                                        className="h-2.5 rounded-full bg-[#00897b]"
                                        variants={bar}
                                        custom="90%"
                                    />
                                </div>
                            </div>

                            
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-[#0a1f44]">Bootstrap</span>
                                    <span className="text-sm font-medium text-[#0a1f44]">90%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <motion.div
                                        className="h-2.5 rounded-full bg-[#00897b]"
                                        variants={bar}
                                        custom="90%"
                                    />
                                </div>
                            </div>
                        </motion.div>
                       
                    </motion.div>

                    {/* Tools & Technologies Card */}
                    <motion.div className="bg-white rounded-xl shadow p-6 hover:scale-103 transition-all duration-300" variants={fadeUp}>
                        <h3 className="text-xl font-semibold  text-[#0a1f44] mb-4">
                            Tools & Technologies
                        </h3>

                      
                        <motion.div
                            className="space-y-4"
                            variants={barsContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-[#0a1f44]">Git/GitHub</span>
                                    <span className="text-sm font-medium text-[#0a1f44]">85%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <motion.div
                                        className="h-2.5 rounded-full bg-[#00897b]"
                                        variants={bar}
                                        custom="85%"
                                    />
                                </div>
                            </div>

                          
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-[#0a1f44]">VS Code</span>
                                    <span className="text-sm font-medium text-[#0a1f44]">90%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <motion.div
                                        className="h-2.5 rounded-full bg-[#00897b]"
                                        variants={bar}
                                        custom="90%"
                                    />
                                </div>
                            </div>

                          
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-[#0a1f44]">Framer Motion</span>
                                    <span className="text-sm font-medium text-[#0a1f44]">85%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <motion.div
                                        className="h-2.5 rounded-full bg-[#00897b]"
                                        variants={bar}
                                        custom="85%"
                                    />
                                </div>
                            </div>

                           
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-[#0a1f44]">Postman</span>
                                    <span className="text-sm font-medium text-[#0a1f44]">80%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <motion.div
                                        className="h-2.5 rounded-full bg-[#00897b]"
                                        variants={bar}
                                        custom="80%"
                                    />
                                </div>
                            </div>

                        
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-[#0a1f44]">NPM</span>
                                    <span className="text-sm font-medium text-[#0a1f44]">90%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <motion.div
                                        className="h-2.5 rounded-full bg-[#00897b]"
                                        variants={bar}
                                        custom="90%"
                                    />
                                </div>
                            </div>

                            
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-[#0a1f44]">Vite</span>
                                    <span className="text-sm font-medium text-[#0a1f44]">90%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <motion.div
                                        className="h-2.5 rounded-full bg-[#00897b]"
                                        variants={bar}
                                        custom="90%"
                                    />
                                </div>
                            </div>

                           
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-[#0a1f44]">TanStack Query</span>
                                    <span className="text-sm font-medium text-[#0a1f44]">80%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <motion.div
                                        className="h-2.5 rounded-full bg-[#00897b]"
                                        variants={bar}
                                        custom="80%"
                                    />
                                </div>
                            </div>
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
                            variants={{
                                hidden: { opacity: 0, y: 12 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                            }}
                        >
                            Technologies I Work With
                        </motion.h2>

                       
                        <motion.div
                            className="flex flex-wrap justify-center gap-3"
                            variants={{
                                hidden: { opacity: 0 },
                                show: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.05, delayChildren: 0.08 }
                                }
                            }}
                        >

                          
                            <motion.span
                                variants={{ hidden: { opacity: 0, y: 8, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } } }}
                                className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#0a1f44] text-sm sm:text-base font-medium transition hover:bg-[#00897b] hover:text-white hover:border-[#00897b] focus:outline-none focus:ring-2 focus:ring-[#00897b]/40"
                            >
                                React Router
                            </motion.span>

                            <motion.span
                                variants={{ hidden: { opacity: 0, y: 8, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } } }}
                                className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#0a1f44] text-sm sm:text-base font-medium transition hover:bg-[#00897b] hover:text-white hover:border-[#00897b] focus:outline-none focus:ring-2 focus:ring-[#00897b]/40"
                            >
                                React Hooks
                            </motion.span>

                            <motion.span
                                variants={{ hidden: { opacity: 0, y: 8, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } } }}
                                className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#0a1f44] text-sm sm:text-base font-medium transition hover:bg-[#00897b] hover:text-white hover:border-[#00897b] focus:outline-none focus:ring-2 focus:ring-[#00897b]/40"
                            >
                                Context API
                            </motion.span>

                            <motion.span variants={{ hidden: { opacity: 0, y: 8, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } } }} className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#0a1f44] text-sm sm:text-base font-medium transition hover:bg-[#00897b] hover:text-white hover:border-[#00897b] focus:outline-none focus:ring-2 focus:ring-[#00897b]/40">SSR</motion.span>
                            <motion.span variants={{ hidden: { opacity: 0, y: 8, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } } }} className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#0a1f44] text-sm sm:text-base font-medium transition hover:bg-[#00897b] hover:text-white hover:border-[#00897b] focus:outline-none focus:ring-2 focus:ring-[#00897b]/40">SSG</motion.span>
                            <motion.span variants={{ hidden: { opacity: 0, y: 8, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } } }} className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#0a1f44] text-sm sm:text-base font-medium transition hover:bg-[#00897b] hover:text-white hover:border-[#00897b] focus:outline-none focus:ring-2 focus:ring-[#00897b]/40">ISR</motion.span>
                            <motion.span variants={{ hidden: { opacity: 0, y: 8, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } } }} className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#0a1f44] text-sm sm:text-base font-medium transition hover:bg-[#00897b] hover:text-white hover:border-[#00897b] focus:outline-none focus:ring-2 focus:ring-[#00897b]/40">Middleware</motion.span>

                            <motion.span variants={{ hidden: { opacity: 0, y: 8, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } } }} className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#0a1f44] text-sm sm:text-base font-medium transition hover:bg-[#00897b] hover:text-white hover:border-[#00897b] focus:outline-none focus:ring-2 focus:ring-[#00897b]/40">Responsive Design</motion.span>
                            <motion.span variants={{ hidden: { opacity: 0, y: 8, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } } }} className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#0a1f44] text-sm sm:text-base font-medium transition hover:bg-[#00897b] hover:text-white hover:border-[#00897b] focus:outline-none focus:ring-2 focus:ring-[#00897b]/40">Flexbox</motion.span>
                            <motion.span variants={{ hidden: { opacity: 0, y: 8, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } } }} className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#0a1f44] text-sm sm:text-base font-medium transition hover:bg-[#00897b] hover:text-white hover:border-[#00897b] focus:outline-none focus:ring-2 focus:ring-[#00897b]/40">Grid</motion.span>
                            <motion.span variants={{ hidden: { opacity: 0, y: 8, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } } }} className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#0a1f44] text-sm sm:text-base font-medium transition hover:bg-[#00897b] hover:text-white hover:border-[#00897b] focus:outline-none focus:ring-2 focus:ring-[#00897b]/40">Media Queries</motion.span>
                            <motion.span variants={{ hidden: { opacity: 0, y: 8, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } } }} className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#0a1f44] text-sm sm:text-base font-medium transition hover:bg-[#00897b] hover:text-white hover:border-[#00897b] focus:outline-none focus:ring-2 focus:ring-[#00897b]/40">CSS Animations</motion.span>
                            <motion.span variants={{ hidden: { opacity: 0, y: 8, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } } }} className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#0a1f44] text-sm sm:text-base font-medium transition hover:bg-[#00897b] hover:text-white hover:border-[#00897b] focus:outline-none focus:ring-2 focus:ring-[#00897b]/40">Component Architecture</motion.span>
                            <motion.span variants={{ hidden: { opacity: 0, y: 8, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } } }} className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#0a1f44] text-sm sm:text-base font-medium transition hover:bg-[#00897b] hover:text-white hover:border-[#00897b] focus:outline-none focus:ring-2 focus:ring-[#00897b]/40">Reusable Components</motion.span>

                            <motion.span variants={{ hidden: { opacity: 0, y: 8, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } } }} className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#0a1f44] text-sm sm:text-base font-medium transition hover:bg-[#00897b] hover:text-white hover:border-[#00897b] focus:outline-none focus:ring-2 focus:ring-[#00897b]/40">React Hook Form</motion.span>
                            <motion.span variants={{ hidden: { opacity: 0, y: 8, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } } }} className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#0a1f44] text-sm sm:text-base font-medium transition hover:bg-[#00897b] hover:text-white hover:border-[#00897b] focus:outline-none focus:ring-2 focus:ring-[#00897b]/40">Zod</motion.span>
                            <motion.span variants={{ hidden: { opacity: 0, y: 8, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } } }} className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#0a1f44] text-sm sm:text-base font-medium transition hover:bg-[#00897b] hover:text-white hover:border-[#00897b] focus:outline-none focus:ring-2 focus:ring-[#00897b]/40">Axios</motion.span>
                            <motion.span variants={{ hidden: { opacity: 0, y: 8, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } } }} className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#0a1f44] text-sm sm:text-base font-medium transition hover:bg-[#00897b] hover:text-white hover:border-[#00897b] focus:outline-none focus:ring-2 focus:ring-[#00897b]/40">Fetch</motion.span>
                            <motion.span variants={{ hidden: { opacity: 0, y: 8, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } } }} className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#0a1f44] text-sm sm:text-base font-medium transition hover:bg-[#00897b] hover:text-white hover:border-[#00897b] focus:outline-none focus:ring-2 focus:ring-[#00897b]/40">Dynamic Routing</motion.span>
                            <motion.span variants={{ hidden: { opacity: 0, y: 8, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } } }} className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#0a1f44] text-sm sm:text-base font-medium transition hover:bg-[#00897b] hover:text-white hover:border-[#00897b] focus:outline-none focus:ring-2 focus:ring-[#00897b]/40">Performance Optimization</motion.span>
                            <motion.span variants={{ hidden: { opacity: 0, y: 8, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } } }} className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-[#0a1f44] text-sm sm:text-base font-medium transition hover:bg-[#00897b] hover:text-white hover:border-[#00897b] focus:outline-none focus:ring-2 focus:ring-[#00897b]/40">SEO (Next.js)</motion.span>

                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
