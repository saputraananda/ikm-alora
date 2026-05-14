import { useEffect, useRef, useState } from 'react';
import type { FC } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  className?: string;
  suffix?: string;
  ease?: string;
}

export const CountUp: FC<CountUpProps> = ({ to, from = 0, duration = 2, className = "", suffix = "", ease = "power2.out" }) => {
  const [count, setCount] = useState(from);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obj = { value: from };
    const animation = gsap.to(obj, {
      value: to,
      duration: duration,
      ease: ease,
      scrollTrigger: {
        trigger: countRef.current,
        start: 'top 90%',
      },
      onUpdate: () => {
        setCount(Math.floor(obj.value));
      }
    });

    return () => {
      animation.kill();
    };
  }, [to, from, duration, ease]);

  return <span ref={countRef} className={className}>{count}{suffix}</span>;
};
