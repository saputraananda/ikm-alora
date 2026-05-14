import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { FC, ReactNode } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  scrollSpeed?: number;
  className?: string;
}

export const ScrollFloat: FC<ScrollFloatProps> = ({ children, scrollSpeed = 0.1, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Floating effect removed
  }, []);

  return (
    <div ref={containerRef} className={`relative transition-transform ${className}`}>
      {children}
    </div>
  );
};
