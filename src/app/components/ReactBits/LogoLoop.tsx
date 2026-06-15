"use client";

import { motion } from "framer-motion";

interface LogoLoopProps {
  logos: { src: string; alt: string }[];
  duration?: number;
  className?: string;
}

export default function LogoLoop({ logos, duration = 30, className = "" }: LogoLoopProps) {
  return (
    <div className={`overflow-hidden py-10 ${className}`}>
      <motion.div
        className="flex gap-16 items-center"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ width: "fit-content" }}
      >
        {/* Render logos twice for seamless loop */}
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0 transition-all duration-300">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-10 sm:h-12 w-auto object-contain opacity-90 hover:opacity-100"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
