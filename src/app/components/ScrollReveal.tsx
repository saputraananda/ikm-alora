"use client";

import React, { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?:
    | "tilt-up"
    | "scale-up"
    | "slide-right"
    | "slide-left"
    | "fade-in";
  duration?: number; // in ms
  delay?: number; // in ms
  threshold?: number; // 0 to 1
  className?: string;
  as?: any;
}

export default function ScrollReveal({
  children,
  animation = "tilt-up",
  duration = 800,
  delay = 0,
  threshold = 0.05,
  className = "",
  as: Component = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      if (ref.current) {
        ref.current.classList.add("is-visible");
      }
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animationClasses = {
    "tilt-up": "reveal-tilt-up",
    "scale-up": "reveal-scale-up",
    "slide-right": "reveal-slide-right",
    "slide-left": "reveal-slide-left",
    "fade-in": "reveal-fade-in",
  }[animation];

  const style: React.CSSProperties = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <Component
      ref={ref}
      className={`reveal ${animationClasses} ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
}
