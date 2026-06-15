"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent } from "react";

interface GlareHoverProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlareHover({ children, className = "" }: GlareHoverProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;

    mouseX.set(x);
    mouseY.set(y);

    const rX = (y / height - 0.5) * -15;
    const rY = (x / width - 0.5) * 15;

    rotateX.set(rX);
    rotateY.set(rY);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  const background = useMotionTemplate`
    radial-gradient(
      400px circle at ${mouseX}px ${mouseY}px,
      rgba(255, 255, 255, 0.15),
      transparent 80%
    )
  `;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative h-full w-full rounded-3xl ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      <div className="h-full w-full" style={{ transform: "translateZ(50px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
