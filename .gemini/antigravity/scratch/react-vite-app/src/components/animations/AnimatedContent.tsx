import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import type { FC, ReactNode } from 'react';

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: 'vertical' | 'horizontal';
  reverse?: boolean;
  duration?: number;
  delay?: number;
  className?: string;
}

export const AnimatedContent: FC<AnimatedContentProps> = ({
  children,
  distance = 30,
  direction = 'vertical',
  reverse = false,
  duration = 0.8,
  delay = 0,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const initialX = direction === 'horizontal' ? (reverse ? -distance : distance) : 0;
  const initialY = direction === 'vertical' ? (reverse ? -distance : distance) : 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: initialX, y: initialY }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: initialX, y: initialY }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] as any }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
