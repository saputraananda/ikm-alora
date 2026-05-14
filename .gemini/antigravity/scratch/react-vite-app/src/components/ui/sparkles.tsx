import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SparklesProps {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}

export const SparklesCore = (props: SparklesProps) => {
  const {
    background = "transparent",
    minSize = 0.6,
    maxSize = 1.4,
    particleDensity = 100,
    className,
    particleColor = "#FFFFFF",
  } = props;
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const count = particleDensity;
    const newParticles = [];
    for (let i = 0; i < count; i++) {
      newParticles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * (maxSize - minSize) + minSize,
        opacity: Math.random(),
        delay: Math.random() * 5,
      });
    }
    setParticles(newParticles);
  }, [maxSize, minSize, particleDensity]);

  return (
    <div
      className={cn("h-full w-full relative overflow-hidden", className)}
      style={{
        background: background,
      }}
    >
      <div className="absolute inset-0">
        {particles.map((particle, idx) => (
          <div
            key={`particle-${idx}`}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particleColor,
              opacity: particle.opacity,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
