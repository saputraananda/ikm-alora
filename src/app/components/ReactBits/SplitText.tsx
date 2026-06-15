"use client";

import { useSprings, animated, SpringConfig } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

interface SplitTextProps {
  text?: string;
  className?: string;
  delay?: number;
  animationFrom?: { opacity: number; transform: string };
  animationTo?: { opacity: number; transform: string };
  easing?: (t: number) => number;
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "right" | "center" | "justify" | "initial" | "inherit";
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text = "",
  className = "",
  delay = 100,
  animationFrom = { opacity: 0, transform: "translate3d(0,40px,0)" },
  animationTo = { opacity: 1, transform: "translate3d(0,0,0)" },
  easing = (t: number) => t,
  threshold = 0.1,
  rootMargin = "0px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const letters = text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const animatedCount = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: animationFrom,
      to: inView
        ? async (next: any) => {
            await next(animationTo);
            animatedCount.current += 1;
            if (animatedCount.current === letters.length && onLetterAnimationComplete) {
              onLetterAnimationComplete();
            }
          }
        : animationFrom,
      delay: i * delay,
      config: { easing } as SpringConfig,
    }))
  );

  return (
    <p
      ref={ref}
      className={`split-parent overflow-hidden inline-block ${className}`}
      style={{ textAlign, whiteSpace: "normal", wordBreak: "break-word" }}
    >
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={props}
          className="inline-block transform-gpu will-change-[transform,opacity]"
        >
          {letters[index] === " " ? "\u00A0" : letters[index]}
        </animated.span>
      ))}
    </p>
  );
};

export default SplitText;
