"use client";

interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  showPath?: boolean;
}

/**
 * MagicUI-inspired OrbitingCircles.
 * Wraps children in a div that orbits around the centre of its parent container.
 * The parent must be `relative` with an explicit size.
 */
export default function OrbitingCircles({
  className = "",
  children,
  reverse = false,
  duration = 20,
  delay = 0,
  radius = 160,
  showPath = true,
}: OrbitingCirclesProps) {
  return (
    <>
      {showPath && (
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            stroke="rgba(14,124,138,0.12)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
        </svg>
      )}
      <div
        style={{
          animationDuration: `${duration}s`,
          animationDelay: `${-delay}s`,
          animationDirection: reverse ? "reverse" : "normal",
          // Position the element at (50%, 50%) then move it out by radius
          // The orbit keyframe rotates the container and counter-rotates the child
          "--orbit-radius": `${radius}px`,
        } as React.CSSProperties}
        className={`absolute left-1/2 top-1/2 animate-orbit ${className}`}
      >
        {children}
      </div>
    </>
  );
}
