import { useState, useEffect } from "react";
import type { FC } from 'react';

interface TextTypeProps {
  text: string;
  speed?: number;
  className?: string;
  cursor?: boolean;
}

export const TextType: FC<TextTypeProps> = ({ text, speed = 50, className = "", cursor = true }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(timer);
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayedText}
      {cursor && <span className="animate-pulse">|</span>}
    </span>
  );
};
