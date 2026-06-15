"use client";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 6, className = "" }) => {
  return (
    <span
      className={`relative inline-block text-primary ${className}`}
      style={{
        background: "linear-gradient(110deg, #0e7c8a 40%, #5eead4 50%, #0e7c8a 60%)",
        backgroundSize: "250% 100%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        animation: disabled ? "none" : `shiny-text ${speed}s linear infinite`,
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
