"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
export default function LinenComparisonSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeInfo, setActiveInfo] = useState<"infeksius" | "non-infeksius" | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current || isDragging === false && activeInfo !== null) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, [isDragging, activeInfo]);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.info-button')) return;
    setIsDragging(true);
    handleMove(e.clientX);
  }, [handleMove]);

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  }, [isDragging, handleMove]);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (isDragging) {
      handleMove(e.touches[0].clientX);
    }
  }, [isDragging, handleMove]);

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-12 group">
      <div 
        ref={containerRef}
        className="relative aspect-[4/5] md:aspect-[21/8] overflow-hidden rounded-[2rem] cursor-ew-resize select-none border-8 border-white shadow-2xl bg-slate-200"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
        onTouchStart={(e) => {
          if (!(e.target as HTMLElement).closest('.info-button')) {
            setIsDragging(true);
          }
        }}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* Background Image (Non-Infeksius - Right Side) */}
            <div className="absolute inset-0">
              <Image
                src="/dokumentasi/non-infecsius.png"
                alt="Linen Non-Infeksius"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            
            {/* Foreground Image (Infeksius - Left Side) */}
            <div 
              className="absolute inset-0 z-10"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src="/dokumentasi/infecsius.png"
                alt="Linen Infeksius"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

        {/* Slider Line */}
        <div 
          className="absolute top-0 bottom-0 w-1.5 bg-white z-30 shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-opacity duration-300"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-primary/20 z-40 group-hover:scale-110 transition-transform duration-200">
            <div className="flex gap-1 items-center">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Labels & Info Buttons */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {/* Non-Infeksius Label & Button (Left Side) */}
          <div 
            className="absolute top-6 left-6 flex items-center gap-3 pointer-events-auto transition-all duration-500"
            style={{ 
              opacity: sliderPosition > 15 ? 1 : 0,
              transform: `translateX(${sliderPosition < 20 ? -20 : 0}px)`
            }}
          >
            <div className="flex flex-col items-start gap-2">
              <span className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm sm:text-base font-bold shadow-xl flex items-center gap-2 border border-white/20">
                <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
                Linen Non-Infeksius
              </span>
              <button 
                onClick={() => setActiveInfo(activeInfo === "non-infeksius" ? null : "non-infeksius")}
                className="info-button group/btn flex items-center gap-2 bg-white/90 backdrop-blur-sm hover:bg-white text-emerald-600 px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold shadow-lg transition-all active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Detail Info</span>
              </button>
            </div>
          </div>

          {/* Infeksius Label & Button (Right Side) */}
          <div 
            className="absolute top-6 right-6 flex items-center gap-3 pointer-events-auto transition-all duration-500 text-right justify-end"
            style={{ 
              opacity: sliderPosition < 85 ? 1 : 0,
              transform: `translateX(${sliderPosition > 80 ? 20 : 0}px)`
            }}
          >
            <div className="flex flex-col items-end gap-2">
              <span className="bg-rose-600 text-white px-5 py-2 rounded-full text-sm sm:text-base font-bold shadow-xl flex items-center gap-2 border border-white/20">
                Linen Infeksius
                <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
              </span>
              <button 
                onClick={() => setActiveInfo(activeInfo === "infeksius" ? null : "infeksius")}
                className="info-button group/btn flex items-center gap-2 bg-white/90 backdrop-blur-sm hover:bg-white text-rose-600 px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold shadow-lg transition-all active:scale-95"
              >
                <span>Detail Info</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Info Overlays */}
        <div 
          className={`absolute inset-0 z-50 flex items-center justify-center p-6 transition-all duration-500 backdrop-blur-sm ${
            activeInfo ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
          onClick={() => setActiveInfo(null)}
        >
          <div 
            className={`max-w-md w-full bg-white rounded-[2.5rem] p-8 shadow-2xl transform transition-all duration-500 border-t-8 ${
              activeInfo === "infeksius" ? "border-rose-500" : "border-emerald-500"
            } ${activeInfo ? "scale-100 translate-y-0" : "scale-90 translate-y-10"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-2xl ${
                activeInfo === "infeksius" ? "bg-rose-50 text-rose-600" : "bg-emerald-50 text-emerald-600"
              }`}>
                {activeInfo === "infeksius" ? (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </div>
              <button 
                onClick={() => setActiveInfo(null)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <h4 className={`text-2xl font-bold mb-3 ${
              activeInfo === "infeksius" ? "text-rose-900" : "text-emerald-900"
            }`}>
              {activeInfo === "infeksius" ? "Linen Infeksius" : "Linen Non-Infeksius"}
            </h4>
            
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {activeInfo === "infeksius" 
                ? "Linen yang terkontaminasi cairan tubuh atau darah diproses melalui alur khusus dengan mesin cuci sekat (barrier washing machine) untuk mencegah kontaminasi silang."
                : "Linen dari ruang perawatan umum dan area non-medis diproses dengan mesin cuci industri, deterjen ramah lingkungan, dan suhu terkontrol untuk kebersihan optimal."
              }
            </p>
          </div>
        </div>

        {/* Labels Overlay (Gradient Bottom) */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-10 pointer-events-none" />
      </div>
      
      {/* Hint Text */}
      <div className="mt-6 flex flex-col items-center gap-2">
        <p className="text-center text-xs sm:text-sm text-slate-500 font-medium flex items-center gap-2">
          <svg className="w-4 h-4 animate-bounce-x" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Geser garis putih untuk membandingkan
          <svg className="w-4 h-4 animate-bounce-x-reverse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </p>
      </div>
    </div>
  );
}
