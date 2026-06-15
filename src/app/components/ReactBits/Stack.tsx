"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface StackProps {
  items: { id: number; img: string }[];
  className?: string;
}

export default function Stack({ items, className = "" }: StackProps) {
  const [activeId, setActiveId] = useState(items[0].id);

  return (
    <div className={`relative h-[450px] w-full flex items-center justify-center ${className}`}>
      {items.map((item, index) => {
        const isActive = item.id === activeId;
        const offset = index - items.findIndex(i => i.id === activeId);
        
        return (
          <motion.div
            key={item.id}
            className="absolute h-[380px] w-[300px] rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl cursor-pointer"
            initial={false}
            animate={{
              x: offset * 50,
              y: offset * 15,
              scale: 1 - Math.abs(offset) * 0.1,
              zIndex: items.length - Math.abs(offset),
              opacity: 1 - Math.abs(offset) * 0.2,
              rotate: offset * 8,
            }}
            onClick={() => setActiveId(item.id)}
            whileHover={{ 
              y: offset * 15 - 20, 
              scale: (1 - Math.abs(offset) * 0.1) + 0.05,
              transition: { duration: 0.3 } 
            }}
          >
            <Image
              src={item.img}
              alt={`Stack item ${item.id}`}
              fill
              className="object-cover"
            />
            {/* Overlay to make non-active ones darker */}
            {!isActive && (
              <div className="absolute inset-0 bg-slate-900/20 transition-opacity duration-300" />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
