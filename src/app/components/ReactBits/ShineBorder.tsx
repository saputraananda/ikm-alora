"use client";

import React from "react";

interface ShineBorderProps {
  children: React.ReactNode;
  className?: string;
  borderWidth?: number;
  duration?: number;
  color?: string | string[];
  borderRadius?: number;
}

/**
 * MagicUI-inspired ShineBorder.
 * Renders children inside a container with an animated conic-gradient border.
 */
export default function ShineBorder({
  children,
  className = "",
  borderWidth = 1.5,
  duration = 14,
  color = ["#0e7c8a", "#5eead4", "#0e7c8a"],
  borderRadius = 24,
}: ShineBorderProps) {
  const colorStr = Array.isArray(color) ? color.join(", ") : color;

  return (
    <div
      style={
        {
          "--shine-duration": `${duration}s`,
          "--border-width": `${borderWidth}px`,
          "--border-radius": `${borderRadius}px`,
          "--shine-color": colorStr,
          borderRadius: `${borderRadius}px`,
          padding: `${borderWidth}px`,
          background: `conic-gradient(from var(--shine-angle, 0deg), ${colorStr})`,
          animation: `shine-border var(--shine-duration) linear infinite`,
          display: "inline-flex",
        } as React.CSSProperties
      }
      className={`shine-border-wrapper ${className}`}
    >
      <div
        style={{ borderRadius: `calc(${borderRadius}px - ${borderWidth}px)` }}
        className="w-full bg-white"
      >
        {children}
      </div>
    </div>
  );
}
