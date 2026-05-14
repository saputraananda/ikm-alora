import type { FC, ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export const GradientText: FC<GradientTextProps> = ({
  children,
  className = "",
  colors = ["#49122E", "#ff4b2b", "#49122E", "#ff4b2b", "#49122E"],
  animationSpeed = 8,
  showBorder = false,
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium transition-shadow duration-500 overflow-hidden ${className}`}>
      {showBorder && (
        <div
          className="absolute inset-0 bg-cover animate-gradient-text"
          style={{
            ...gradientStyle,
            backgroundSize: "300% 100%",
          }}
        >
          <div className="absolute inset-[2px] rounded-[1.25rem] bg-white" />
        </div>
      )}
      <div
        className="relative z-10 bg-cover bg-clip-text text-transparent animate-gradient-text"
        style={{
          ...gradientStyle,
          backgroundSize: "300% 100%",
          WebkitBackgroundClip: "text",
        }}
      >
        {children}
      </div>
      <style>{`
        @keyframes gradient-text {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-text {
          animation: gradient-text linear infinite;
        }
      `}</style>
    </div>
  );
};
