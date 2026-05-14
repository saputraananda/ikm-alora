import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import type { FC } from 'react';

interface TrueFocusProps {
  sentence?: string;
  mainColor?: string;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
}

export const TrueFocus: FC<TrueFocusProps> = ({
  sentence = "Total Care for Happy Life",
  mainColor = "#49122E",
  blurAmount = 5,
  borderColor = "#49122E",
  glowColor = "rgba(73, 18, 46, 0.2)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
}) => {
  const words = sentence.split(" ");
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [rect, setRect] = useState({ width: 0, height: 0, left: 0 });
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFocusedIndex((prev) => (prev + 1) % words.length);
    }, (animationDuration + pauseBetweenAnimations) * 1000);

    return () => clearInterval(interval);
  }, [words.length, animationDuration, pauseBetweenAnimations]);

  useEffect(() => {
    if (wordRefs.current[focusedIndex]) {
      const { offsetWidth, offsetHeight, offsetLeft } = wordRefs.current[focusedIndex]!;
      setRect({ width: offsetWidth, height: offsetHeight, left: offsetLeft });
    }
  }, [focusedIndex]);

  return (
    <div className="relative flex gap-4 justify-center items-center flex-wrap">
      {words.map((word, index) => (
        <span
          key={index}
          ref={(el) => { if (el) wordRefs.current[index] = el; }}
          className="relative text-5xl md:text-7xl font-semibold transition-all duration-500"
          style={{
            filter: focusedIndex === index ? "none" : `blur(${blurAmount}px)`,
            color: focusedIndex === index ? mainColor : "rgba(0,0,0,0.2)",
          }}
        >
          {word}
        </span>
      ))}

      <motion.div
        className="absolute top-0 left-0 border-2 pointer-events-none"
        animate={{
          width: rect.width + 20,
          height: rect.height + 10,
          x: rect.left - 10,
          y: -5,
        }}
        transition={{ duration: animationDuration, ease: "easeInOut" }}
        style={{
          borderColor: borderColor,
          boxShadow: `0 0 20px ${glowColor}`,
          borderRadius: "12px",
        }}
      >
        <div className="absolute -top-[4px] -left-[4px] w-2 h-2 bg-white border-t-2 border-l-2" style={{ borderColor: borderColor }} />
        <div className="absolute -top-[4px] -right-[4px] w-2 h-2 bg-white border-t-2 border-r-2" style={{ borderColor: borderColor }} />
        <div className="absolute -bottom-[4px] -left-[4px] w-2 h-2 bg-white border-b-2 border-l-2" style={{ borderColor: borderColor }} />
        <div className="absolute -bottom-[4px] -right-[4px] w-2 h-2 bg-white border-b-2 border-r-2" style={{ borderColor: borderColor }} />
      </motion.div>
    </div>
  );
};
