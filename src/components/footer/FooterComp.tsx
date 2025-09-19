"use client";
import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Github, Linkedin, MessageCircle, Send } from "lucide-react";



const EASE_SOFT: [number, number, number, number] = [0.4, 0, 0.2, 1];

export default function FooterComp() {
    const prefersReduced = useReducedMotion();

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: prefersReduced ? 0 : 0.1,
                delayChildren: prefersReduced ? 0 : 0.14,
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

    const blockSpring: Variants = {
        hidden: { opacity: 0, y: prefersReduced ? 0 : 8, scale: prefersReduced ? 1 : 0.99, filter: prefersReduced ? "none" : "blur(1px)" },
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

    const icon: Variants = {
        rest: { scale: 1, rotate: 0 },
        hover: { scale: 1.08, rotate: 0.0001, transition: { duration: 0.25, ease: EASE_SOFT } },
    };

    const buttonTap: Variants = {
        rest: { scale: 1 },
        tap: { scale: 0.98, transition: { duration: 0.15, ease: EASE_SOFT } },
    };

    const year = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden">
            {/* top hairline gradient */}
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#00897b] to-transparent" />

            <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
                {/* soft spotlight */}
                <div className="pointer-events-none absolute -z-10 inset-x-0 -top-20 mx-auto h-56 w-[80%] rounded-full bg-gradient-to-b from-[#c7f9f1]/40 to-transparent blur-3xl" />

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10"
                >
                    {/* Left block */}
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

                        <motion.div className="mt-5 flex items-center gap-3" variants={container}>
                            {[
                                { href: "https://github.com/AlaaRef3t", label: "GitHub", Icon: Github, hover: "group-hover:text-black" },
                                { href: "https://www.linkedin.com/in/alaa-ref3t-x1/", label: "LinkedIn", Icon: Linkedin, hover: "group-hover:text-blue-600" },
                                { href: "https://wa.me/201070608699", label: "WhatsApp", Icon: MessageCircle, hover: "group-hover:text-green-500" },
                            ].map(({ href, label, Icon, hover }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    aria-label={label}
                                    variants={blockSpring}
                                    className="group h-10 w-10 grid place-content-center rounded-lg ring-1 ring-gray-200 bg-white"
                                >
                                    <motion.span variants={icon} initial="rest" whileHover="hover">
                                        <Icon className={`h-5 w-5 text-[#5c6872] transition-colors duration-300 ${hover}`} />
                                    </motion.span>
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right block */}
                    <motion.div variants={fadeUp} className="lg:col-span-5">
                        <p className="text-sm font-semibold text-[#0a1f44]">Quick Links</p>
                        <ul className="mt-3 space-y-2 text-sm">
                            {["home", "about", "projects", "contact", "blog"].map((id) => (
                                <li key={id}>
                                    <a href={`#${id}`} className="text-[#5c6872] hover:text-[#00897b] transition-colors">
                                        {id.charAt(0).toUpperCase() + id.slice(1)}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <motion.div variants={blockSpring} className="mt-6 rounded-xl bg-[#eef2ff] p-4 text-[#0a1f44] shadow-sm">
                            <p className="text-sm font-medium">“Code is like humor. When you have to explain it, it&apos;s bad.”</p>
                            <p className="mt-2 text-xs text-[#5c6872]">– Cory House</p>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Subscribe */}
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
                        <motion.button
                            type="button"
                            variants={buttonTap}
                            initial="rest"
                            whileTap="tap"
                            className="inline-flex items-center gap-2 rounded-lg bg-[#00897b] hover:bg-[#00695c] text-white text-sm font-medium px-4 py-2.5 shadow-sm"
                        >
                            <Send className="h-4 w-4" />
                            Subscribe
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            <div className="border-t border-gray-100/80 bg-white/40 backdrop-blur">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs sm:text-sm text-[#5c6872]">© {year} Alaa Refaat. All rights reserved.</p>
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
