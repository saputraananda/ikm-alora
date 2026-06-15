"use client";

import { motion } from "framer-motion";

interface FadeContentProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}

export default function FadeContent({
  children,
  duration = 0.8,
  delay = 0,
  className = "",
}: FadeContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
