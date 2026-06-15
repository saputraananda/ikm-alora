"use client";

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * MagicUI-inspired AuroraText.
 * Renders text with an animated aurora (moving gradient) clipped to the text.
 */
export default function AuroraText({ children, className = "" }: AuroraTextProps) {
  return (
    <span
      className={`aurora-text ${className}`}
      aria-label={typeof children === "string" ? children : undefined}
    >
      {children}
    </span>
  );
}
