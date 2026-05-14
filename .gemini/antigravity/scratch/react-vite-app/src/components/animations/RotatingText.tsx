import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import type { FC } from 'react';

interface RotatingTextProps {
  texts: string[];
  className?: string;
  interval?: number;
}

export const RotatingText: FC<RotatingTextProps> = ({ texts, className = "", interval = 3000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts, interval]);

  return (
    <div className={`inline-block h-[1.2em] overflow-hidden relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 block"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
