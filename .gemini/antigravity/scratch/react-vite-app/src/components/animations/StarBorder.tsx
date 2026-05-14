import type { ElementType, FC, ReactNode } from 'react';

interface StarBorderProps {
  as?: ElementType;
  className?: string;
  color?: string;
  speed?: string;
  children?: ReactNode;
}

export const StarBorder: FC<StarBorderProps> = ({
  as: Component = 'div',
  className = '',
  color = '#49122E',
  speed = '6s',
  children,
  ...props
}) => {
  return (
    <Component
      className={`relative inline-block py-[1px] px-[1px] overflow-hidden ${className}`}
      {...props}
    >
      <div
        className="absolute w-[300%] h-[300%] opacity-70 bottom-[-110%] right-[-250%] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] animate-star-border"
        style={{
          background: `conic-gradient(from 0deg, transparent 0 340deg, ${color} 360deg)`,
          animationDuration: speed,
        }}
      />
      <div className="relative z-1 bg-white h-full w-full">
        {children}
      </div>
      
      <style>{`
        @keyframes star-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-star-border {
          animation: star-border linear infinite;
        }
      `}</style>
    </Component>
  );
};
