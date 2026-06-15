"use client";

import { motion } from "framer-motion";

interface AnimatedContentProps {
  children: React.ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  duration?: number;
  delay?: number;
  className?: string;
}

export default function AnimatedContent({
  children,
  distance = 50,
  direction = "vertical",
  reverse = false,
  duration = 0.8,
  delay = 0,
  className = "",
}: AnimatedContentProps) {
  const x = direction === "horizontal" ? (reverse ? -distance : distance) : 0;
  const y = direction === "vertical" ? (reverse ? -distance : distance) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
