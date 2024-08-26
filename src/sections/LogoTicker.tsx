"use client";
import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import quantumLogo from "@/assets/logo-quantum.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";

import { motion } from "framer-motion";

const logos = [
  // First set
  { src: acmeLogo.src, alt: "Acme Logo" },
  { src: apexLogo.src, alt: "Apex Logo" },
  { src: celestialLogo.src, alt: "Celestial Logo" },
  { src: quantumLogo.src, alt: "Quantum Logo" },
  { src: pulseLogo.src, alt: "Pulse Logo" },
  { src: echoLogo.src, alt: "Echo Logo" },
  // Second set
  { src: acmeLogo.src, alt: "Acme Logo" },
  { src: apexLogo.src, alt: "Apex Logo" },
  { src: celestialLogo.src, alt: "Celestial Logo" },
  { src: quantumLogo.src, alt: "Quantum Logo" },
  { src: pulseLogo.src, alt: "Pulse Logo" },
  { src: echoLogo.src, alt: "Echo Logo" }
];

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2 className="">Trusted by top innovative teams</h2>
          </div>
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear"
              }}
              className="flex flex-none gap-14 pr-14"
            >
              {logos.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 w-auto"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
