"use client";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * MagicUI-inspired AnimatedGradientText.
 * Renders a pill/badge with animated gradient background + shimmer text.
 */
export default function AnimatedGradientText({
  children,
  className = "",
}: AnimatedGradientTextProps) {
  return (
    <span className={`animated-gradient-text-wrapper ${className}`}>
      <span className="animated-gradient-text-inner">{children}</span>
    </span>
  );
}
