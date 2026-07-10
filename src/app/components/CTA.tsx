"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* Animated border ring that draws itself */
function DrawCircle({ size, delay }: { size: number; delay: number }) {
  return (
    <motion.circle
      cx={size / 2}
      cy={size / 2}
      r={size / 2 - 2}
      fill="none"
      stroke="#0e7c8a"
      strokeWidth="1"
      strokeLinecap="round"
      pathLength={1}
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.18 }}
      viewport={{ once: true }}
      transition={{ duration: 1.6, delay, ease: "easeInOut" }}
    />
  );
}

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* Subtle parallax on the heading */
  const headingY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* ── Thin top hairline ── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* ── Decorative SVG circles — top-right ── */}
      <div className="pointer-events-none absolute -top-20 -right-20 w-[440px] h-[440px]" aria-hidden="true">
        <svg width="440" height="440" viewBox="0 0 440 440">
          <DrawCircle size={440} delay={0.1} />
          <DrawCircle size={320} delay={0.35} />
          <DrawCircle size={200} delay={0.6} />
        </svg>
      </div>

      {/* ── Decorative SVG circles — bottom-left ── */}
      <div className="pointer-events-none absolute -bottom-16 -left-16 w-[280px] h-[280px]" aria-hidden="true">
        <svg width="280" height="280" viewBox="0 0 280 280">
          <DrawCircle size={280} delay={0.5} />
          <DrawCircle size={180} delay={0.75} />
        </svg>
      </div>

      {/* ── Animated vertical line accent ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px overflow-hidden h-full" aria-hidden="true">
        <motion.div
          className="w-full bg-gradient-to-b from-transparent via-primary/12 to-transparent"
          initial={{ height: 0, y: "-100%" }}
          whileInView={{ height: "100%", y: "0%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>

      {/* ── Main layout ── */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-24">

          {/* Left ── big number / visual anchor */}
          <motion.div
            className="hidden lg:block flex-shrink-0 select-none"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Large decorative "+" mark */}
            <div className="relative w-64 h-64 flex items-center justify-center">
              {/* Animated ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-primary/15"
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              />
              <motion.div
                className="absolute inset-6 rounded-full border border-primary/10"
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.35 }}
              />

              {/* Slow spin ring */}
              <motion.div
                className="absolute inset-8 rounded-full border border-dashed border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 22, ease: "linear", repeat: Infinity }}
              />

              {/* Center content */}
              <div className="text-center z-10">
                <div className="text-5xl font-bold text-slate-900 leading-none tabular-nums">15<span className="text-primary">+</span></div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mt-1.5">Mitra RS</div>
              </div>

              {/* Dot accents */}
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <motion.div
                  key={deg}
                  className="absolute w-1.5 h-1.5 rounded-full bg-primary/30"
                  style={{
                    top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 112}px - 3px)`,
                    left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 112}px - 3px)`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + deg / 600 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right ── copy + CTA */}
          <div className="flex-1">

            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <motion.span
                className="block h-px bg-primary/40"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              />
              <span className="text-[11px] font-bold uppercase tracking-[0.26em] text-primary/60">
                Mulai Sekarang
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              id="cta-heading"
              style={{ y: headingY }}
              className="text-2xl sm:text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight mb-6"
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 }}
              >
                Linen Higienis,
              </motion.span>
              <motion.span
                className="block text-primary"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.17 }}
              >
                Setiap Hari
              </motion.span>
            </motion.h2>

            {/* Body */}
            <motion.p
              className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-lg mb-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.25 }}
            >
              Dari pengambilan hingga pengiriman, kami menangani setiap tahap
              dengan presisi agar rumah sakit Anda fokus pada yang paling penting.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.33 }}
            >
              {/* Primary */}
              <motion.a
                href="mailto:support@ikmlaundry.com"
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-primary/20"
                whileHover={{ scale: 1.04, boxShadow: "0 8px 30px 0 rgba(14,124,138,0.35)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 380, damping: 18 }}
              >
                <span
                  className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-18deg] bg-white/15 transition-transform duration-500 group-hover:translate-x-full"
                  aria-hidden="true"
                />
                <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Konsultasi Sekarang
              </motion.a>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Bottom hairline ── */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
}
