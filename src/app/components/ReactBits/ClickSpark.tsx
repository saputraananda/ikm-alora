"use client";

import { useEffect, useRef } from "react";

export default function ClickSpark() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let sparks: any[] = [];
    const colors = ["#00B4D8", "#90E0EF", "#CAF0F8", "#48CAE1"];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    const createSpark = (x: number, y: number) => {
      for (let i = 0; i < 8; i++) {
        sparks.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 10,
          vy: (Math.random() - 0.5) * 10,
          size: Math.random() * 3 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      createSpark(e.clientX, e.clientY);
    };

    window.addEventListener("mousedown", handleClick);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      sparks = sparks.filter((s) => s.alpha > 0.05);
      
      sparks.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.alpha *= 0.92;
        s.size *= 0.95;
        
        ctx.globalAlpha = s.alpha;
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
    />
  );
}
