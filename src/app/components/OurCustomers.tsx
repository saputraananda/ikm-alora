"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CountUp from "./ReactBits/CountUp";
import ShineBorder from "./ReactBits/ShineBorder";
import LogoLoop from "./ReactBits/LogoLoop";

/* ── All 14 hospital photos ── */
const hospitals = [
  { src: "/logo-client/foto-rs/bunda-margonda.png",    label: "RSU Bunda Margonda" },
  { src: "/logo-client/foto-rs/rsu-bunda-jakarta.png", label: "RSU Bunda Jakarta" },
  { src: "/logo-client/foto-rs/rsia-bunda-jakarta.png",label: "RSIA Bunda Jakarta" },
  { src: "/logo-client/foto-rs/rs-permata-cibubur.png",label: "RS Permata Cibubur" },
  { src: "/logo-client/foto-rs/eka-bsd.png",           label: "Eka Hospital BSD" },
  { src: "/logo-client/foto-rs/eka-bekasi.png",        label: "Eka Hospital Bekasi" },
  { src: "/logo-client/foto-rs/eka-cibubur.png",       label: "Eka Hospital Cibubur" },
  { src: "/logo-client/foto-rs/eka-cilegon.png",       label: "Eka Hospital Cilegon" },
  { src: "/logo-client/foto-rs/eka-depok.png",         label: "Eka Hospital Depok" },
  { src: "/logo-client/foto-rs/eka-family-fluit.png",  label: "Eka Family Fluit" },
  { src: "/logo-client/foto-rs/eka-haryono.png",       label: "Eka Hospital Haryono" },
  { src: "/logo-client/foto-rs/eka-hijau.png",         label: "Eka Hospital Hijau" },
  { src: "/logo-client/foto-rs/colombia-hospital.png", label: "RS Columbia Asia" },
  { src: "/logo-client/foto-rs/grand-family-pik.png",  label: "Grand Family PIK" },
];

/* Spread positions for the fan-out on hover — 4 columns × 4 rows grid (desktop) */
const spreadPositionsDesktop = [
  { x: -210, y: -140, r: -6  },
  { x:  -70, y: -150, r: -2  },
  { x:   70, y: -145, r:  3  },
  { x:  210, y: -140, r:  7  },
  { x: -210, y:  -30, r: -5  },
  { x:  -70, y:  -35, r: -1  },
  { x:   70, y:  -30, r:  2  },
  { x:  210, y:  -35, r:  6  },
  { x: -210, y:   80, r: -4  },
  { x:  -70, y:   80, r:  1  },
  { x:   70, y:   85, r: -1  },
  { x:  210, y:   80, r:  5  },
  { x: -140, y:  190, r: -3  },
  { x:  140, y:  190, r:  4  },
];

/* Spread positions for mobile — more compact */
const spreadPositionsMobile = [
  { x: -140, y: -100, r: -5  },
  { x:  -50, y: -105, r: -1  },
  { x:   50, y: -100, r:  2  },
  { x:  140, y: -95, r:  5  },
  { x: -140, y:  -20, r: -4  },
  { x:  -50, y:  -25, r: -1  },
  { x:   50, y:  -20, r:  1  },
  { x:  140, y:  -25, r:  4  },
  { x: -140, y:   55, r: -3  },
  { x:  -50, y:   55, r:  0  },
  { x:   50, y:   55, r:  0  },
  { x:  140, y:   55, r:  3  },
  { x:  -95, y:  130, r: -2  },
  { x:   95, y:  130, r:  2  },
];

/* ── Individual image card that fans out ── */
function HospitalCard({
  src,
  label,
  index,
  isOpen,
  isMobile,
}: {
  src: string;
  label: string;
  index: number;
  isOpen: boolean;
  isMobile: boolean;
}) {
  const positions = isMobile ? spreadPositionsMobile : spreadPositionsDesktop;
  const pos = positions[index] ?? { x: 0, y: 0, r: 0 };
  const cardWidth = isMobile ? 90 : 120;
  const cardHeight = isMobile ? 60 : 80;
  
  /* stacked state: slight random offset + rotation so they look like a real deck */
  const stackX = (index % 3) * 1.5 - 2;
  const stackY = index * 0.8;
  const stackR = ((index % 5) - 2) * 1.2;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 cursor-pointer overflow-hidden rounded-2xl border-[3px] border-white bg-white shadow-lg"
      style={{ 
        zIndex: isOpen ? index + 1 : hospitals.length - index,
        width: cardWidth,
      }}
      animate={
        isOpen
          ? {
              x: pos.x - (cardWidth / 2),   // half card width to center
              y: pos.y - (cardHeight / 2),  // half card height
              rotate: pos.r,
              scale: 1,
              opacity: 1,
            }
          : {
              x: stackX - (cardWidth / 2),
              y: stackY - (cardHeight / 2),
              rotate: stackR,
              scale: 1 - index * 0.008,
              opacity: index < 8 ? 1 : 0,
            }
      }
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 28,
        delay: isOpen ? index * 0.025 : (hospitals.length - index) * 0.02,
      }}
      whileHover={isOpen ? { scale: 1.08, zIndex: 50 } : {}}
    >
      <div className="relative w-full bg-slate-100" style={{ height: cardHeight }}>
        <Image
          src={src}
          alt={label}
          fill
          className="object-cover object-center"
          sizes={`${cardWidth}px`}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18, delay: 0.1 + index * 0.015 }}
            className="px-2.5 pb-2 pt-1.5"
          >
            <p className="truncate text-[10px] font-semibold leading-tight text-slate-700">
              {label}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── The folder / badge container ── */
function ImagesBadge() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile on mount and resize
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const containerWidth = isMobile ? 360 : 480;
  const containerHeight = isMobile ? 380 : 500;

  return (
    <div
      className="relative w-full flex justify-center"
    >
      <div
        className="relative"
        style={{ 
          width: containerWidth, 
          height: containerHeight,
          maxWidth: "100%"
        }}
      >
      {/* Hospital image cards */}
      {hospitals.map((h, i) => (
        <HospitalCard
          key={h.label}
          src={h.src}
          label={h.label}
          index={i}
          isOpen={open}
          isMobile={isMobile}
        />
      ))}

      {/* Folder / trigger card — sits on top of the stack */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Tutup galeri rumah sakit" : "Buka galeri rumah sakit"}
        className="absolute left-1/2 top-1/2 z-[60] -translate-x-1/2 -translate-y-1/2 focus:outline-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
      >
        <ShineBorder
          borderRadius={20}
          borderWidth={2}
          duration={8}
          color={["#0e7c8a", "#5eead4", "#38bdf8", "#0e7c8a"]}
          className="shadow-xl"
        >
          <div className="flex flex-col items-center px-7 py-5 text-center">
            {/* Folder icon */}
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
              {open ? (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
              ) : (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
                </svg>
              )}
            </div>

            {/* Stacked mini-avatars preview */}
            <div className="mb-3 flex -space-x-2.5">
              {hospitals.slice(0, 5).map((h) => (
                <div
                  key={h.label}
                  className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white shadow-sm"
                >
                  <Image src={h.src} alt={h.label} fill className="object-cover" sizes="32px" />
                </div>
              ))}
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-primary/10 text-[9px] font-bold text-primary shadow-sm">
                +9
              </div>
            </div>

            <p className="text-[11px] text-slate-400">Terpercaya oleh</p>
            <p className="mt-0.5 text-3xl font-bold leading-none text-primary">
              <CountUp to={14} from={0} duration={2} />+
            </p>
            <p className="mt-0.5 text-sm font-semibold text-slate-800">Rumah Sakit</p>
            <p className="mt-0.5 text-[10px] text-slate-400">di Seluruh Indonesia</p>

            {/* Stars */}
            <div className="mt-2.5 flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className="h-3 w-3 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* CTA hint */}
            <motion.p
              className="mt-3 text-[10px] font-medium text-primary/70"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {open ? "Klik untuk tutup" : "Klik untuk lihat semua"}
            </motion.p>
          </div>
        </ShineBorder>
      </motion.button>
      </div>
    </div>
  );
}



const logoClients = [
  { src: "/logos/eka-hospital.webp", alt: "Eka Hospital Cibubur" },
  { src: "/logos/bunda-logo.webp", alt: "RSU Bunda" },
  { src: "/logos/columbia-asia.webp", alt: "Columbia Asia" },
  { src: "/logos/grand-family.webp", alt: "RSIA Grand Family" },
  { src: "/logos/permata-cibubur.webp", alt: "RSIA Permata Cibubur" },
];

export default function OurCustomers() {
  return (
    <section id="our-customers" className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* subtle background dots */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(#0e7c8a 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* ── Left: copy ── */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38 }}
              className="mb-7"
            >
              <span className="inline-block rounded-full border border-primary/25 bg-primary-light px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-primary">
                Kemitraan Strategis
              </span>
            </motion.div>

            <motion.h2
              className="mb-1 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              Expert Laundry Solutions
            </motion.h2>
            <motion.h2
              className="mb-6 text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              From A Trusted National Partner
            </motion.h2>

            <motion.div
              className="mb-6 h-[3px] w-10 rounded-full bg-primary"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              style={{ transformOrigin: "left" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.28, ease: "easeOut" }}
              aria-hidden="true"
            />

            <motion.p
              className="max-w-lg text-base leading-relaxed text-slate-500 sm:text-lg"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Solusi layanan jasa laundry dan penyewaan linen rumah sakit yang
              mengutamakan kualitas patient-first.
            </motion.p>
          </div>

          {/* ── Right: Aceternity-style Images Badge ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center overflow-visible"
          >
            <ImagesBadge />
          </motion.div>

        </div>

        {/* Logo Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 sm:mt-20"
        >
          <LogoLoop logos={logoClients} duration={40} />
        </motion.div>
      </div>
    </section>
  );
}
