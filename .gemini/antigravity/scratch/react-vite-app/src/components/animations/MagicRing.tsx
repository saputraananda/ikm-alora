import type { FC, ReactNode } from 'react';

interface MagicRingProps {
  children: ReactNode;
  className?: string;
  color?: string;
}

export const MagicRing: FC<MagicRingProps> = ({ children, className = "", color = "#49122E" }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <div className="absolute inset-0 pointer-events-none -m-4">
        <div 
          className="absolute inset-0 animate-magic-ring"
          style={{
            border: `2px solid ${color}`,
            borderRadius: "50%",
            opacity: 0.2,
          }}
        />
        <div 
          className="absolute inset-0 animate-magic-ring delay-700"
          style={{
            border: `2px solid ${color}`,
            borderRadius: "50%",
            opacity: 0.1,
          }}
        />
      </div>
      <div className="relative z-10">
        {children}
      </div>
      <style>{`
        @keyframes magic-ring {
          0% { transform: scale(0.8); opacity: 0; }
          50% { opacity: 0.2; }
          100% { transform: scale(1.2); opacity: 0; }
        }
        .animate-magic-ring {
          animation: magic-ring 2s ease-out infinite;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </div>
  );
};
