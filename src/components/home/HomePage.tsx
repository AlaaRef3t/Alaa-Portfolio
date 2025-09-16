"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; // أخف بيلد

export default function HomePage() {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        background: { color: { value: "#e3f0fa" } }, // لون الخلفية
        fullScreen: { enable: false }, // هنحطها داخل كونتينر
        fpsLimit: 120,
        detectRetina: true,
        particles: {
          number: { value: 40, density: { enable: true, area: 800 } },
          color: { value: "#0a1f44" },
          links: {
            enable: true,
            color: "#0a1f44",
            distance: 130, // مسافة الربط
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            outModes: { default: "bounce" },
          },
          opacity: { value: 0.6 },
          size: { value: { min: 1, max: 3 } },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "bubble" }, // يمسك الخط لما تعدّي بالماوس
            onClick: { enable: true, mode: "push" }, // يضيف نقط عند الكليك
          },
          modes: { grab: { distance: 140 }, push: { quantity: 2 } },
        },
      }}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
    />
  );
}
