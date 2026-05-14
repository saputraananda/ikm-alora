import type { FC } from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export const ShinyText: FC<ShinyTextProps> = ({ text, disabled = false, speed = 5, className = "" }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`text-[#b5b5b514] bg-clip-text inline-block ${disabled ? '' : 'animate-shiny-text'} ${className}`}
      style={{
        backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration: animationDuration,
      }}
    >
      {text}
      <style>{`
        @keyframes shiny-text {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .animate-shiny-text {
          animation: shiny-text linear infinite;
        }
      `}</style>
    </div>
  );
};
