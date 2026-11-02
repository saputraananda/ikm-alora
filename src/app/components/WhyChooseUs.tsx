"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { useState, useEffect, useRef } from "react";

const reasons = [
  {
    title: "Hygiene & Infection Control",
    description:
      "Memisahkan linen kotor dan bersih untuk menjaga kebersihan dan keamanan pasien.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Quality Assurance",
    description:
      "Pemeriksaan kualitas untuk hasil cucian konsisten, higienis, dan sesuai standar.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
        <path d="M12 3l2.5 5.5L20 9l-4 3.5L17 18l-5-3-5 3 1-5.5L4 9l5.5-.5L12 3z" />
      </svg>
    ),
  },
  {
    title: "Operational Efficiency",
    description:
      "Ketersediaan linen terjaga dan proses efisien untuk kelancaran operasional.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Compliance & Logistics",
    description:
      "Memenuhi standar kesehatan dengan layanan antar jemput fleksibel dan tepat waktu.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Start automatic rotation
  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reasons.length);
    }, 2000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  return (
    <section id="why-choose-us" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      {/* ── Vector Background: soft teal gradient, dot grid, glow blobs & layered waves ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        {/* Base gradient: white at top fading into light teal at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-primary-light" />

        {/* Subtle dot grid, masked so it fades out toward the top */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(rgba(14, 124, 138, 0.25) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 55%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 55%, transparent 100%)",
          }}
        />

        {/* Soft glow blobs */}
        <div
          className="absolute -left-32 bottom-10 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(45, 212, 191, 0.45) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -right-24 bottom-24 h-[360px] w-[360px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(14, 124, 138, 0.4) 0%, transparent 70%)" }}
        />

        {/* Layered waves along the bottom edge */}
        <svg
          className="absolute inset-x-0 bottom-0 h-48 w-full sm:h-64 lg:h-80"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wcu-wave-1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#5eead4" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0e7c8a" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="wcu-wave-2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0e7c8a" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="wcu-wave-3" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0e7c8a" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#0a5e6b" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <path
            fill="url(#wcu-wave-1)"
            d="M0,160 C240,96 480,96 720,144 C960,192 1200,208 1440,128 L1440,320 L0,320 Z"
          />
          <path
            fill="url(#wcu-wave-2)"
            d="M0,224 C200,176 420,160 680,208 C940,256 1180,248 1440,192 L1440,320 L0,320 Z"
          />
          <path
            fill="url(#wcu-wave-3)"
            d="M0,272 C260,240 520,248 760,272 C1000,296 1220,288 1440,256 L1440,320 L0,320 Z"
          />
          <path
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.6"
            strokeWidth="1.5"
            d="M0,224 C200,176 420,160 680,208 C940,256 1180,248 1440,192"
          />
        </svg>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full opacity-[0.045] z-0"
        style={{ background: "radial-gradient(circle, #0e7c8a 0%, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="tilt-up" duration={700}>
          <div className="mb-14 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="mb-3 inline-block rounded-full border border-primary/25 bg-primary-light px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-primary shadow-sm backdrop-blur-sm">
                Keunggulan Kami
              </span>
              <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Keunggulan
                <span className="text-primary"> Laundry Medis Kami</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-600 lg:text-right font-medium">
              Empat fokus utama yang membantu rumah sakit menjaga higienitas, kualitas, efisiensi, dan kepatuhan layanan.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((r, i) => {
            const isActive = i === activeIndex;
            return (
              <ScrollReveal key={r.title} animation="tilt-up" delay={i * 90} duration={650}>
                <motion.article
                  className={`group flex h-full flex-col rounded-[2rem] border p-6 shadow-sm backdrop-blur-md transition-all duration-300 ${
                    isActive
                      ? "bg-primary border-primary text-white shadow-xl shadow-primary/25"
                      : "bg-white/80 hover:bg-primary border-slate-200/80 hover:border-primary shadow-slate-200/50"
                  }`}
                  animate={isActive ? {
                    y: -4,
                    boxShadow: "0 20px 25px -5px rgba(14, 124, 138, 0.25), 0 8px 10px -6px rgba(14, 124, 138, 0.2)",
                  } : {}}
                  onMouseEnter={() => {
                    setIsPaused(true);
                    setActiveIndex(i);
                  }}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <motion.div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${isActive ? "bg-white/20 text-white" : "bg-primary/10 text-primary group-hover:bg-white/20 group-hover:text-white"}`}
                    animate={isActive ? {
                      rotate: 10,
                      scale: 1.1,
                    } : {}}
                  >
                    {r.icon}
                  </motion.div>
                  <h3 className={`mt-5 text-lg font-bold leading-tight transition-colors duration-300 ${isActive ? "text-white" : "text-slate-900 group-hover:text-white"}`}>{r.title}</h3>
                  <p className={`mt-4 text-sm leading-relaxed transition-colors duration-300 ${isActive ? "text-white/90" : "text-slate-600 group-hover:text-white/90"}`}>{r.description}</p>
                </motion.article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

