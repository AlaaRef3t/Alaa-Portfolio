"use client"
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle, Send } from "lucide-react";

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.06 } },
};
const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function FooterComp() {
    return (
        <footer className="relative overflow-hidden">
           
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#00897b] to-transparent" />

            <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
               
                <div className="pointer-events-none absolute -z-10 inset-x-0 -top-20 mx-auto h-56 w-[80%] rounded-full bg-gradient-to-b from-[#c7f9f1]/40 to-transparent blur-3xl" />

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10"
                >
                    
                    <motion.div variants={fadeUp} className="lg:col-span-7">
                        <div className="inline-flex items-center gap-3">
                            <div className="h-9 w-9 rounded-xl bg-[#00897b]/10 grid place-content-center ring-1 ring-[#00897b]/20">
                                <span className="animate-pulse h-2.5 w-2.5 rounded-full bg-[#00897b]" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0a1f44]">Alaa Refaat</h3>
                        </div>
                        <p className="mt-4 max-w-md text-[#5c6872] text-sm sm:text-base leading-relaxed">
                            Front‑End developer crafting fast, accessible UIs with Next.js, React, and Tailwind. I turn ideas into elegant, production‑ready experiences.
                        </p>

                       
                        <div className="mt-5 flex items-center gap-3">
                            <a aria-label="GitHub" href="https://github.com/AlaaRef3t" target="_blank" className="group h-10 w-10 grid place-content-center rounded-lg ring-1 ring-gray-200 bg-white transition">
                                <Github className="h-5 w-5 text-[#5c6872] transition-all duration-200 group-hover:scale-110 group-hover:text-black" />
                            </a>
                            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/alaa-ref3t-x1/" className="group h-10 w-10 grid place-content-center rounded-lg ring-1 ring-gray-200 bg-white transition">
                                <Linkedin className="h-5 w-5 text-[#5c6872] transition-all duration-200 group-hover:scale-110 group-hover:text-blue-600" />
                            </a>
                            <a aria-label="WhatsApp" href="https://wa.me/201070608699" className="group h-10 w-10 grid place-content-center rounded-lg ring-1 ring-gray-200 bg-white transition">
                                <MessageCircle className="h-5 w-5 text-[#5c6872] transition-all duration-200 group-hover:scale-110 group-hover:text-green-500" />
                            </a>
                        </div>
                    </motion.div>

                   
                    <motion.div variants={fadeUp} className="lg:col-span-5">
                        <p className="text-sm font-semibold text-[#0a1f44]">Quick Links</p>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li><a href="#home" className="text-[#5c6872] hover:text-[#00897b] transition-colors">Home</a></li>
                            <li><a href="#about" className="text-[#5c6872] hover:text-[#00897b] transition-colors">About</a></li>
                            <li><a href="#projects" className="text-[#5c6872] hover:text-[#00897b] transition-colors">Projects</a></li>
                            <li><a href="#contact" className="text-[#5c6872] hover:text-[#00897b] transition-colors">Contact</a></li>
                            <li><a href="#blog" className="text-[#5c6872] hover:text-[#00897b] transition-colors">Blog</a></li>
                        </ul>

                        <div className="mt-6 rounded-xl bg-[#eef2ff] p-4 text-[#0a1f44] shadow-sm">
                            <p className="text-sm font-medium">“Code is like humor. When you have to explain it, it`s bad.”</p>
                            <p className="mt-2 text-xs text-[#5c6872]">– Cory House</p>
                        </div>
                    </motion.div>
                </motion.div>

                
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="mt-10 rounded-2xl bg-white/70 backdrop-blur-md ring-1 ring-gray-100 p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4"
                >
                    <div className="flex-1">
                        <p className="text-sm font-semibold text-[#0a1f44]">Stay in the loop</p>
                        <p className="text-sm text-[#5c6872]">Get occasional updates about new projects and articles.</p>
                    </div>
                    <div className="w-full sm:w-auto flex items-center gap-3">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full sm:w-72 rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-[#0a1f44] outline-none focus:ring-2 focus:ring-[#00897b]/60 focus:border-[#00897b]"
                        />
                        <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded-lg bg-[#00897b] hover:bg-[#00897b]/85 text-white text-sm font-medium px-4 py-2.5 shadow-sm"
                        >
                            <Send className="h-4 w-4" />
                            Subscribe
                        </button>
                    </div>
                </motion.div>
            </div>


            <div className="border-t border-gray-100/80 bg-white/40 backdrop-blur">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs sm:text-sm text-[#5c6872]">© {new Date().getFullYear()} Alaa Refaat. All rights reserved.</p>
                    <div className="text-xs sm:text-sm text-[#5c6872]">
                        <a href="#privacy" className="hover:text-[#00897b] transition-colors">Privacy</a>
                        <span className="mx-2">•</span>
                        <a href="#terms" className="hover:text-[#00897b] transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
