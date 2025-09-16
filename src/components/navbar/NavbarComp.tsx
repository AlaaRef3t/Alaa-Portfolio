"use client";

import React, { useState } from "react";
import { Moon } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const navContainer: Variants = {
  hidden: { opacity: 0, y: -16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const linksStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};

const linkItem: Variants = {
  hidden: { opacity: 0, y: -6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const mobileMenuAnim: Variants = {
  hidden: { opacity: 0, y: -8, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, y: -6, scale: 0.98, transition: { duration: 0.18 } },
};

export default function NavbarComp() {
  const [open, setOpen] = useState(false);



  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <motion.div
        variants={navContainer}
        initial="hidden"
        animate="show"
        className="mx-auto w-[90%] rounded-4xl bg-[#00897b] text-white shadow-lg ring-1 ring-white/10"
      >
        <nav className="navbar px-4 lg:px-6">
          <div className="navbar-start relative">

            <button
              onClick={() => setOpen((v) => !v)}
              className="btn btn-ghost btn-circle text-white hover:bg-white/15 lg:hidden"
              aria-label="open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>

            <a
              href="#home"
              className="font-extrabold tracking-wide text-white hover:text-emerald-100 px-2 hidden sm:inline-block"
            >
              AR
            </a>

            {/* Mob menu*/}
            <AnimatePresence>
              {open && (
                <motion.ul
                  id="mobile-menu"
                  key="mobile-menu"
                  variants={mobileMenuAnim}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="absolute left-0 top-12 z-[1] w-56 rounded-xl bg-[#00695c] p-2 text-white/95 shadow lg:hidden"
                >
                  <li>
                    <a href="#home" className="block rounded-lg px-3 py-2 hover:bg-white/10 transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="block rounded-lg px-3 py-2 hover:bg-white/10 transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="block rounded-lg px-3 py-2 hover:bg-white/10 transition-colors">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="block rounded-lg px-3 py-2 hover:bg-white/10 transition-colors">
                      Projects
                    </a>
                  </li>
                  {/* <li>
                    <a href="#education"  className="block rounded-lg px-3 py-2 hover:bg-white/10 transition-colors">
                      Education
                    </a>
                  </li> */}
                  <li>
                    <a href="#contact" className="block rounded-lg px-3 py-2 hover:bg-white/10 transition-colors">
                      Contact
                    </a>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Desk menu */}
          <motion.div className="navbar-center hidden lg:flex" variants={linksStagger} initial="hidden" animate="show">
            <ul className="menu menu-horizontal gap-1">
              <motion.li variants={linkItem}>
                <a href="#home" className="group relative px-3 py-2 text-white/95 hover:text-white transition-colors duration-200">
                  Home
                  <span className="pointer-events-none absolute left-3 right-3 -bottom-[2px] h-[2px] scale-x-0 origin-left bg-white/90 transition-transform duration-200 group-hover:scale-x-100" />
                </a>
              </motion.li>
              <motion.li variants={linkItem}>
                <a href="#about" className="group relative px-3 py-2 text-white/95 hover:text-white transition-colors duration-200">
                  About
                  <span className="pointer-events-none absolute left-3 right-3 -bottom-[2px] h-[2px] scale-x-0 origin-left bg-white/90 transition-transform duration-200 group-hover:scale-x-100" />
                </a>
              </motion.li>
              <motion.li variants={linkItem}>
                <a href="#skills" className="group relative px-3 py-2 text-white/95 hover:text-white transition-colors duration-200">
                  Skills
                  <span className="pointer-events-none absolute left-3 right-3 -bottom-[2px] h-[2px] scale-x-0 origin-left bg-white/90 transition-transform duration-200 group-hover:scale-x-100" />
                </a>
              </motion.li>
              <motion.li variants={linkItem}>
                <a href="#projects" className="group relative px-3 py-2 text-white/95 hover:text-white transition-colors duration-200">
                  Projects
                  <span className="pointer-events-none absolute left-3 right-3 -bottom-[2px] h-[2px] scale-x-0 origin-left bg-white/90 transition-transform duration-200 group-hover:scale-x-100" />
                </a>
              </motion.li>
              {/* <motion.li variants={linkItem}>
                <a href="#education" className="group relative px-3 py-2 text-white/95 hover:text-white transition-colors duration-200">
                  Education
                  <span className="pointer-events-none absolute left-3 right-3 -bottom-[2px] h-[2px] scale-x-0 origin-left bg-white/90 transition-transform duration-200 group-hover:scale-x-100" />
                </a>
              </motion.li> */}
              <motion.li variants={linkItem}>
                <a href="#contact" className="group relative px-3 py-2 text-white/95 hover:text-white transition-colors duration-200">
                  Contact
                  <span className="pointer-events-none absolute left-3 right-3 -bottom-[2px] h-[2px] scale-x-0 origin-left bg-white/90 transition-transform duration-200 group-hover:scale-x-100" />
                </a>
              </motion.li>
            </ul>
          </motion.div>


          <motion.div
            className="navbar-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.35 }}
          >
            <button className="btn btn-ghost btn-circle text-white hover:bg-white/15" aria-label="toggle theme" type="button">
              <Moon className="h-5 w-5" />
            </button>
          </motion.div>
        </nav>
      </motion.div>
    </header>
  );
}
