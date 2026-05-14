import { useEffect, useRef } from 'react';
import type { FC } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const BlurText: FC<BlurTextProps> = ({ text, className = "", delay = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const words = containerRef.current?.querySelectorAll('.word');
    if (!words || words.length === 0) return;

    const animation = gsap.fromTo(words, 
      { 
        filter: 'blur(20px)', 
        opacity: 0, 
        y: 40,
        scale: 0.9
      },
      {
        filter: 'blur(0px)',
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.08,
        delay: delay,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    return () => {
      animation.kill();
    };
  }, [delay]);

  return (
    <div ref={containerRef} className={`flex flex-wrap ${className}`}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="word inline-block mr-[0.2em]">
          {word}
        </span>
      ))}
    </div>
  );
};
