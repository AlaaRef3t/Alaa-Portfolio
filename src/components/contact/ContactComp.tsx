"use client"
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Send } from "lucide-react";

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};
const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};
const pop = {
    hidden: { opacity: 0, scale: 0.98, y: 8 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function ContactComp() {
    return (
        <section id="contact" className="relative bg-[#f9fafb]">
            <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
                {/* Title */}
                <motion.div
                    className="text-center"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-[#0a1f44]" variants={fadeUp}>
                        Get In Touch
                    </motion.h2>
                    <motion.p
                        className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#5c6872] max-w-3xl mx-auto"
                        variants={fadeUp}
                    >
                        Have a project in mind or want to collaborate? I`d love to hear from you. Let`s create something amazing together!
                    </motion.p>
                </motion.div>

                {/* Layout */}
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left column */}
                    <motion.div
                        className="space-y-4"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {/* Email card */}
                        <motion.div
                            variants={pop}
                            className="group flex items-center gap-4 rounded-xl bg-white ring-1 ring-gray-100 shadow-sm p-4 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]"
                        >
                            <div className="shrink-0 grid place-content-center h-11 w-11 rounded-lg bg-[#eef2ff] text-[#0a1f44]">
                                <Mail className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                            </div>
                            <div>
                                <p className="text-sm text-[#5c6872]">Email</p>
                                <a
                                    href="mailto:alaa.dev9@gmail.com"
                                    className="font-medium text-[#0a1f44] break-all hover:text-[#00897b] transition-colors"
                                >
                                    alaa.dev9@gmail.com
                                </a>
                            </div>

                        </motion.div>

                        {/* Phone card */}
                        <motion.div
                            variants={pop}
                            className="group flex items-center gap-4 rounded-xl bg-white ring-1 ring-gray-100 shadow-sm p-4 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]"
                        >
                            <div className="shrink-0 grid place-content-center h-11 w-11 rounded-lg bg-[#eef2ff] text-[#0a1f44]">
                                <Phone className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                            </div>
                            <div>
                                <p className="text-sm text-[#5c6872]">Phone</p>
                                <a
                                    href="tel:+201070608699"
                                    className="font-medium text-[#0a1f44] hover:text-[#00897b] transition-colors"
                                >
                                    +20 10 7060 8699
                                </a>
                            </div>

                        </motion.div>

                        {/* Location card */}
                        <motion.div
                            variants={pop}
                            className="group flex items-center gap-4 rounded-xl bg-white ring-1 ring-gray-100 shadow-sm p-4 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]"
                        >
                            <div className="shrink-0 grid place-content-center h-11 w-11 rounded-lg bg-[#eef2ff] text-[#0a1f44]">
                                <MapPin className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                            </div>
                            <div>
                                <p className="text-sm text-[#5c6872]">Location</p>
                                <a
                                    href="https://www.google.com/maps/place/%D9%85%D8%AD%D8%B7%D8%A9+%D8%A3%D8%A8%D9%88+%D8%AD%D9%85%D8%B5%E2%80%AD/@31.0917943,30.3378982,14z/data=!4m15!1m8!3m7!1s0x14f5df170cf16483:0x57d476469e3f3ce5!2z2YXYrdin2YHYuNipINin2YTYqNit2YrYsdip!3b1!8m2!3d30.8480986!4d30.3435506!16zL20vMDJkNW55!3m5!1s0x14f67351486db7a1:0xbe87ca7181ca958!8m2!3d31.0849053!4d30.3098234!16s%2Fg%2F11h4y1lnj_?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-[#0a1f44] hover:text-[#00897b] transition-colors"
                                >
                                    Behira, Egypt
                                </a>
                            </div>

                        </motion.div>

                        {/* Follow Me */}
                        <motion.div variants={fadeUp} className="pt-1">
                            <p className="text-[#0a1f44] font-semibold">Follow Me</p>
                            <div className="mt-3 flex items-center gap-3">
                                <a
                                    target="_blank"
                                    aria-label="WhatsApp"
                                    href="https://www.facebook.com/3laa.ref3t/"
                                    className="group h-10 w-10 grid place-content-center rounded-lg ring-1 ring-gray-200 bg-white transition"
                                >
                                    <Facebook className="h-5 w-5 text-[#5c6872] transition-all duration-200 group-hover:scale-110 group-hover:text-blue-500" />
                                </a>
                                <a
                                    target="_blank"
                                    aria-label="LinkedIn"
                                    href="https://www.linkedin.com/in/alaa-ref3t-x1/"
                                    className="group h-10 w-10 grid place-content-center rounded-lg ring-1 ring-gray-200 bg-white transition"
                                >
                                    <Linkedin className="h-5 w-5 text-[#5c6872] transition-all duration-200 group-hover:scale-110 group-hover:text-blue-600" />
                                </a>
                                <a
                                    target="_blank"
                                    aria-label="GitHub"
                                    href="https://github.com/AlaaRef3t"
                                    className="group h-10 w-10 grid place-content-center rounded-lg ring-1 ring-gray-200 bg-white transition"
                                >
                                    <Github className="h-5 w-5 text-[#5c6872] transition-all duration-200 group-hover:scale-110 group-hover:text-black" />
                                </a>
                            </div>
                        </motion.div>

                        {/* Availability */}
                        <motion.div
                            variants={pop}
                            className="rounded-2xl bg-white ring-1 ring-gray-100 shadow-sm p-5 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]"
                        >
                            <p className="text-[#0a1f44] font-semibold">Currently Available</p>
                            <p className="mt-2 text-sm text-[#5c6872] leading-relaxed">
                                Iam currently open to new opportunities and exciting projects. Whether it is a full-time position, freelance work, or collaboration, Iam always interested in discussing innovative ideas.
                            </p>
                            <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#0a1f44]">
                                <span className="animate-pulse h-2.5 w-2.5 rounded-full bg-emerald-500 inline-block shadow-[0_0_0_3px_rgba(16,185,129,0.2)]" />
                                Available for work
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right column: Form */}
                    <motion.div
                        variants={pop}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="rounded-2xl bg-white ring-1 ring-gray-100 shadow-sm p-6 sm:p-7 lg:p-8"
                    >
                        <h3 className="text-lg font-semibold text-[#0a1f44]">Send Message</h3>

                        {/* Row 1 */}
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-[#0a1f44]">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Your full name"
                                    className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-[#0a1f44] outline-none focus:ring-2 focus:ring-[#00897b]/60 focus:border-[#00897b]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#0a1f44]">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="your.email@example.com"
                                    className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-[#0a1f44] outline-none focus:ring-2 focus:ring-[#00897b]/60 focus:border-[#00897b]"
                                />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="mt-4">
                            <label className="block text-sm font-medium text-[#0a1f44]">Subject</label>
                            <input
                                type="text"
                                placeholder="What's this about?"
                                className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-[#0a1f44] outline-none focus:ring-2 focus:ring-[#00897b]/60 focus:border-[#00897b]"
                            />
                        </div>

                        {/* Row 3 */}
                        <div className="mt-4">
                            <label className="block text-sm font-medium text-[#0a1f44]">Message</label>
                            <textarea
                                rows={6}
                                placeholder="Tell me about your project or idea..."
                                className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3.5 py-3 text-sm text-[#0a1f44] outline-none focus:ring-2 focus:ring-[#00897b]/60 focus:border-[#00897b] resize-none"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="button"
                            className="cursor-pointer mt-6 inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-lg bg-[#00897b] hover:bg-[#00897b]/80 text-white font-medium px-6 py-3 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00897b]"
                        >
                            <Send className="h-4 w-4" />
                            Send Message
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* subtle gradient accents */}
            <div className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-40 w-[80%] bg-gradient-to-b from-[#c7f9f1]/40 to-transparent blur-2xl" />
            <div className="pointer-events-none absolute right-0 bottom-10 h-32 w-32 bg-[#c7f9f1]/40 rounded-full blur-3xl" />
        </section>
    );
}