import { useEffect, useRef } from 'react';
import type { FC } from 'react';
import gsap from 'gsap';

interface LogoItem {
  name: string;
  logo: string;
}

interface LogoLoopProps {
  logos: LogoItem[];
  className?: string;
}

export const LogoLoop: FC<LogoLoopProps> = ({ logos, className = "" }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    animationRef.current = gsap.to(track, {
      xPercent: -50,
      ease: "none",
      duration: 30, // Slower for readability
      repeat: -1,
    });

    return () => {
      animationRef.current?.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    animationRef.current?.pause();
  };

  const handleMouseLeave = () => {
    animationRef.current?.play();
  };

  return (
    <div className={`overflow-hidden relative ${className}`}>
      <div 
        ref={trackRef} 
        className="flex whitespace-nowrap w-max"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {[...logos, ...logos].map((item, i) => (
          <div 
            key={i} 
            className="mx-8 flex flex-col items-center justify-center group cursor-default"
          >
             <div className="h-10 w-48 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                <img 
                  src={item.logo} 
                  alt={item.name} 
                  className="max-h-full max-w-full object-contain"
                />
             </div>
             <span className="mt-5 text-[11px] font-semibold text-foreground/70 uppercase tracking-[0.15em] group-hover:text-primary group-hover:opacity-100 transition-all duration-500 text-center max-w-[180px] whitespace-normal leading-tight">
                {item.name}
             </span>
          </div>
        ))}
      </div>
    </div>
  );
};
