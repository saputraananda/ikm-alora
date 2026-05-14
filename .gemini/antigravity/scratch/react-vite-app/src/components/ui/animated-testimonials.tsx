"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 6000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="max-w-6xl mx-auto antialiased font-sans px-4 py-10 min-h-[350px] flex items-center justify-center">
      <div className="relative w-full text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{
              y: 40,
              opacity: 0,
              filter: "blur(10px)",
            }}
            animate={{
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
            }}
            exit={{
              y: -40,
              opacity: 0,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="flex flex-col items-center"
          >
            <p className="text-xl md:text-3xl font-medium text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-10 italic">
              "{testimonials[active].quote}"
            </p>
            
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-bold text-primary tracking-tight">
                {testimonials[active].name}
              </h3>
              <p className="text-sm font-semibold text-primary/40 uppercase tracking-widest mt-1">
                {testimonials[active].designation}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Progress dots */}
        <div className="flex justify-center gap-3 mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                i === active ? "w-8 bg-primary" : "w-1.5 bg-primary/10"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

