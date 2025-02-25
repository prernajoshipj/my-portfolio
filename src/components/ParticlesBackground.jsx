import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed top-0 left-0 w-full h-full -z-10"
      options={{
        fullScreen: { enable: true }, // ✅ Ensures particles cover entire page
        background: { color: "#00000000" }, // ✅ Transparent background
        particles: {
          number: { value: 120 }, // ✅ Adjust particle density
          color: { value: "#ffffff" }, // ✅ White particles for visibility
          shape: { type: "circle" },
          opacity: { value: 0.6, random: true },
          size: { value: 5, random: true },
          move: { enable: true, speed: 0.6, direction: "none", random: true },
        },
      }}
    />
  );
}
