import { motion } from 'framer-motion';
import type { FC } from 'react';

interface CircularGalleryProps {
  items: string[];
  className?: string;
}

export const CircularGallery: FC<CircularGalleryProps> = ({ items, className = "" }) => {
  const radius = 300;
  
  return (
    <div className={`relative h-[600px] w-full flex items-center justify-center overflow-hidden ${className}`}>
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {items.map((_, i) => {
          const angle = (i / items.length) * 2 * Math.PI;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <div
              key={i}
              className="absolute h-32 w-48 bg-gray-100 rounded-2xl flex items-center justify-center shadow-lg border border-white overflow-hidden"
              style={{
                left: `calc(50% + ${x}px - 96px)`,
                top: `calc(50% + ${y}px - 64px)`,
                transform: `rotate(${(angle * 180) / Math.PI + 90}deg)`,
              }}
            >
               <div className="text-[10px] font-semibold text-gray-400 italic">
                  Gallery Item {i + 1}
               </div>
            </div>
          );
        })}
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
         <div className="text-2xl font-semibold text-primary/10 uppercase tracking-[0.5em]">Gallery</div>
      </div>
    </div>
  );
};
