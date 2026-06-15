"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    quote:
      "IKM Laundry selalu memberikan layanan terbaik. Linen bersih, wangi, dan tepat waktu setiap hari. Sangat membantu operasional kami.",
    name: "dr. Andi Wijaya",
    role: "Direktur Operasional",
    hospital: "Eka Hospital",
    initials: "AW",
    tag: "Ketepatan Waktu",
  },
  {
    quote:
      "Standar kebersihan IKM Laundry sangat tinggi dan sesuai regulasi. Kami merasa sangat terbantu dengan layanan antar jemputnya.",
    name: "Ns. Ratna Sari",
    role: "Kepala Keperawatan",
    hospital: "RSIA Permata",
    initials: "RS",
    tag: "Standar Higienis",
  },
  {
    quote:
      "Layanan profesional, respons cepat, dan kualitas konsisten. IKM Laundry adalah partner terpercaya kami.",
    name: "Budi Santoso",
    role: "Facility Manager",
    hospital: "Columbia Hospital",
    initials: "BS",
    tag: "Profesionalisme",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  return (
    <section id="testimonials" className="bg-white py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-3"
          >
            <span className="inline-block rounded-full border border-primary/25 bg-primary-light px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Testimoni
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.07 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 sm:leading-tight"
          >
            Apa Kata Mitra Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.13 }}
            className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base"
          >
            Lebih dari 15 rumah sakit terkemuka memercayakan kebutuhan linen mereka kepada kami.
          </motion.p>
        </div>

        {/* Main layout */}
        <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">

          {/* Left — large quote card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Decorative oversized quote mark */}
            <span
              className="pointer-events-none absolute -top-6 -left-4 select-none font-serif text-[9rem] leading-none text-primary/8 sm:-top-8 sm:text-[12rem]"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            {/* Tag pill */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`tag-${activeIndex}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1"
              >
                <svg className="h-3.5 w-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[11px] font-semibold text-primary">{active.tag}</span>
              </motion.div>
            </AnimatePresence>

            {/* Quote text */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`quote-${activeIndex}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.32 }}
                className="relative text-2xl font-medium leading-snug text-slate-800 sm:text-3xl lg:text-[2rem]"
              >
                {active.quote}
              </motion.p>
            </AnimatePresence>

            {/* Author row */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`author-${activeIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28, delay: 0.1 }}
                className="mt-8 flex items-center gap-4"
              >
                {/* Avatar */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-sm font-bold text-primary ring-2 ring-primary/15">
                  {active.initials}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">{active.name}</p>
                  <p className="text-sm text-slate-500">{active.role} · {active.hospital}</p>
                </div>
                {/* Stars */}
                <div className="hidden items-center gap-0.5 sm:flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="h-4 w-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress bar */}
            <div className="mt-8 flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Testimoni ${i + 1}`}
                  className="group h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100"
                >
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={false}
                    animate={{ width: i === activeIndex ? "100%" : "0%" }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right — numbered card list */}
          <div className="flex flex-col gap-3">
            {items.map((t, index) => (
              <motion.button
                key={t.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.38, delay: 0.08 + index * 0.08 }}
                className={`group relative w-full rounded-2xl border p-4 text-left transition-all duration-300 ${
                  activeIndex === index
                    ? "border-primary/25 bg-primary/4 shadow-sm"
                    : "border-slate-100 bg-slate-50 hover:border-primary/15 hover:bg-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  {/* Step number */}
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition-all ${
                      activeIndex === index
                        ? "bg-primary text-white"
                        : "bg-white text-slate-400 border border-slate-200 group-hover:border-primary/20 group-hover:text-primary"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className={`text-sm font-semibold leading-tight transition-colors ${
                      activeIndex === index ? "text-slate-900" : "text-slate-600"
                    }`}>
                      {t.name}
                    </p>
                    <p className="mt-0.5 truncate text-[11px] text-slate-400">{t.role} · {t.hospital}</p>
                  </div>
                  {/* Active indicator */}
                  <svg
                    className={`h-4 w-4 shrink-0 transition-all ${
                      activeIndex === index ? "text-primary" : "text-slate-200"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className={`mt-3 line-clamp-2 text-xs leading-relaxed transition-colors ${
                  activeIndex === index ? "text-slate-600" : "text-slate-400"
                }`}>
                  {t.quote}
                </p>
              </motion.button>
            ))}

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38, delay: 0.32 }}
              className="mt-1 flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4"
            >
              <div className="flex -space-x-2">
                {["AW", "RS", "BS"].map((ini) => (
                  <div
                    key={ini}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-primary/10 text-[10px] font-bold text-primary"
                  >
                    {ini}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-700">15+ rumah sakit terpercaya</p>
                <p className="text-[11px] text-slate-400">di seluruh Indonesia</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
