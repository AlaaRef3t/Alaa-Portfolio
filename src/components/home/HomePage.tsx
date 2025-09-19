"use client";

import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; // خفيف



export default function HomePage() {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // إعدادات Responsive + Reduced Motion
  const opts = useMemo(() => {
    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 640px)").matches;
    const prefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

   
    if (prefersReduced) {
      return {
        background: { color: { value: "#e3f0fa" } },
        fullScreen: { enable: false },
        fpsLimit: 45,
        detectRetina: false,
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        particles: {
          number: { value: 6, density: { enable: true, area: 900 } },
          color: { value: "#0a1f44" },
          links: { enable: false },
          move: { enable: true, speed: 0.2, direction: "none", outModes: { default: "out" } },
          opacity: { value: 0.35 },
          size: { value: { min: 1, max: 2 } },
        },
        interactivity: { events: { onHover: { enable: false }, onClick: { enable: false } } },
      } as const;
    }

   
    return {
      background: { color: { value: "#e3f0fa" } },
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: false,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      particles: {
        number: { value: isMobile ? 8 : 12, density: { enable: true, area: 800 } },
        color: { value: "#0a1f44" },
       
        links: { enable: false },
        move: {
          enable: true,
          speed: isMobile ? 0.4 : 0.6,
          direction: "none",
          outModes: { default: "out" },
        },
        opacity: { value: 0.4 },
        size: { value: { min: 1, max: 2.2 } },
      },
      interactivity: {
        events: {
          onHover: { enable: !isMobile, mode: "grab" },
          onClick: { enable: false }, 
        },
        modes: { grab: { distance: 90 } },
      },
    } as const;
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={opts as any}
      style={{ position: "absolute", inset: 0, zIndex: 0 }}
    />
  );
}
