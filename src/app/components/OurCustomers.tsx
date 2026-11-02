"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export interface HospitalItem {
  src: string;
  name: string;
  group: string;
  city: string;
  badge: string;
}

/* ── All 14 hospital photos ── */
const hospitals: HospitalItem[] = [
  {
    src: "/logo-client/foto-rs/bunda-margonda.png",
    name: "RSU Bunda Margonda",
    group: "Bunda Group",
    city: "Depok",
    badge: "Mitra Strategis",
  },
  {
    src: "/logo-client/foto-rs/rsu-bunda-jakarta.png",
    name: "RSU Bunda Jakarta",
    group: "Bunda Group",
    city: "Menteng, Jakarta",
    badge: "Linen Steril & OK",
  },
  {
    src: "/logo-client/foto-rs/rsia-bunda-jakarta.png",
    name: "RSIA Bunda Jakarta",
    group: "Bunda Group",
    city: "Menteng, Jakarta",
    badge: "Ibu & Anak",
  },
  {
    src: "/logo-client/foto-rs/eka-bsd.png",
    name: "Eka Hospital BSD",
    group: "Eka Hospital",
    city: "Tangerang Selatan",
    badge: "Mitra Terpercaya",
  },
  {
    src: "/logo-client/foto-rs/eka-bekasi.png",
    name: "Eka Hospital Bekasi",
    group: "Eka Hospital",
    city: "Bekasi",
    badge: "Mitra Terpercaya",
  },
  {
    src: "/logo-client/foto-rs/colombia-hospital.png",
    name: "RS Columbia Asia",
    group: "Columbia Asia",
    city: "Pulomas, Jakarta",
    badge: "Standar Internasional",
  },
  {
    src: "/logo-client/foto-rs/grand-family-pik.png",
    name: "RSIA Grand Family",
    group: "Grand Family",
    city: "PIK, Jakarta Utara",
    badge: "Maternity & Care",
  },
  {
    src: "/logo-client/foto-rs/rs-permata-cibubur.png",
    name: "RS Permata Cibubur",
    group: "Permata Group",
    city: "Cibubur",
    badge: "Mitra Operasional",
  },
  {
    src: "/logo-client/foto-rs/eka-cibubur.png",
    name: "Eka Hospital Cibubur",
    group: "Eka Hospital",
    city: "Cibubur",
    badge: "Mitra Terpercaya",
  },
  {
    src: "/logo-client/foto-rs/eka-cilegon.png",
    name: "Eka Hospital Cilegon",
    group: "Eka Hospital",
    city: "Cilegon, Banten",
    badge: "Mitra Terpercaya",
  },
  {
    src: "/logo-client/foto-rs/eka-depok.png",
    name: "Eka Hospital Depok",
    group: "Eka Hospital",
    city: "Depok",
    badge: "Mitra Terpercaya",
  },
  {
    src: "/logo-client/foto-rs/eka-family-fluit.png",
    name: "Eka Hospital Family Pluit",
    group: "Eka Hospital",
    city: "Pluit, Jakarta Utara",
    badge: "Mitra Terpercaya",
  },
  {
    src: "/logo-client/foto-rs/eka-haryono.png",
    name: "Eka Hospital MT Haryono",
    group: "Eka Hospital",
    city: "Jakarta Timur",
    badge: "Mitra Terpercaya",
  },
  {
    src: "/logo-client/foto-rs/rs-tugu-ibu.png",
    name: "RSU Tugu Ibu",
    group: "Tugu Ibu",
    city: "Depok",
    badge: "Mitra Strategis",
  },
];

// Split into 2 rows for dual opposing marquee streams
const row1 = hospitals.slice(0, 8);
const row2 = hospitals.slice(8);

// Map each hospital group to its official logo
const groupLogos: Record<string, string> = {
  "Bunda Group": "/logos/bunda-logo.webp",
  "Eka Hospital": "/logos/eka-hospital.webp",
  "Columbia Asia": "/logos/columbia-asia.webp",
  "Grand Family": "/logos/grand-family.webp",
  "Permata Group": "/logos/permata-cibubur.webp",
  "Tugu Ibu": "/logos/tugu-ibu.webp",
};

/* ── Organic Curved Hospital Card Component ── */
function HospitalStreamCard({
  hospital,
  onSelect,
}: {
  hospital: HospitalItem;
  onSelect: (hospital: HospitalItem) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(hospital)}
      aria-label={`Lihat detail ${hospital.name}`}
      className="group relative block text-left w-[180px] sm:w-[210px] flex-shrink-0 cursor-pointer overflow-hidden rounded-[1.4rem] bg-gradient-to-b from-white to-slate-50/90 p-1.5 shadow-md shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/20 border border-slate-100 hover:border-primary/30"
    >
      {/* Visual Image container — 5:3 matches the source photos (~350×210) so nothing gets cropped/upscaled */}
      <div className="relative aspect-[5/3] w-full overflow-hidden rounded-[1.1rem] bg-slate-100">
        {/* Source photos are small; serve originals (no lossy re-encode) for maximum sharpness */}
        <Image
          src={hospital.src}
          alt={hospital.name}
          fill
          unoptimized
          draggable={false}
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Ambient top & bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent" />

        {/* Top Hospital Logo Badge */}
        <div className="absolute left-2 top-2 z-10">
          <div className="inline-flex items-center justify-center h-6 px-2 rounded-full bg-white/95 backdrop-blur-md shadow-sm shadow-slate-900/10 border border-white/90">
            {groupLogos[hospital.group] ? (
              <Image
                src={groupLogos[hospital.group]}
                alt={hospital.group}
                width={160}
                height={40}
                quality={100}
                draggable={false}
                className="h-3.5 w-auto max-w-[70px] object-contain"
              />
            ) : (
              <span className="text-[10px] font-semibold text-slate-800">
                {hospital.group}
              </span>
            )}
          </div>
        </div>

        {/* Bottom text overlay on image */}
        <div className="absolute bottom-2 left-2.5 right-2.5 text-white">
          <h4 className="truncate text-xs sm:text-[13px] font-bold leading-snug drop-shadow-sm group-hover:text-cyan-200 transition-colors">
            {hospital.name}
          </h4>
          <div className="mt-0.5 flex items-center gap-1 text-[10px] sm:text-[11px] text-white/80">
            <svg
              className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-primary-light shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="truncate">{hospital.city}</span>
          </div>
        </div>
      </div>
    </button>
  );
}

/* ── Auto-scrolling row that can also be swiped / dragged / trackpad-scrolled manually ── */
const AUTO_SPEED = 18; // px per second — slow, calm drift
const RESUME_DELAY = 2500; // ms of idle time before auto-scroll resumes
const DRAG_THRESHOLD = 6; // px moved before a press counts as a drag, not a click

function MarqueeRow({
  items,
  direction,
  onSelect,
}: {
  items: HospitalItem[];
  direction: "left" | "right";
  onSelect: (hospital: HospitalItem) => void;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pos = useRef(0);
  const hovering = useRef(false);
  const touching = useRef(false);
  const pausedUntil = useRef(0);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  // Three copies: we always stay inside the middle one, so the user can scroll either way seamlessly
  const loopItems = [...items, ...items, ...items];

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const setWidth = () => el.scrollWidth / 3;

    pos.current = setWidth();
    el.scrollLeft = pos.current;

    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      const w = setWidth();
      const userControlled =
        reduceMotion || hovering.current || touching.current || drag.current.active || now < pausedUntil.current;

      if (userControlled) {
        // Follow whatever the user (or native momentum) is doing
        pos.current = el.scrollLeft;
      } else {
        pos.current += (direction === "left" ? 1 : -1) * AUTO_SPEED * dt;
      }

      // Seamless wrap: keep position within the middle copy
      let wrapped = false;
      if (pos.current < w * 0.5) {
        pos.current += w;
        wrapped = true;
      } else if (pos.current > w * 1.5) {
        pos.current -= w;
        wrapped = true;
      }

      if (!userControlled || wrapped) el.scrollLeft = pos.current;
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [direction]);

  const pause = () => {
    pausedUntil.current = performance.now() + RESUME_DELAY;
  };

  /* Mouse drag (touch uses native scrolling) */
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    const el = scrollerRef.current!;
    drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > DRAG_THRESHOLD) drag.current.moved = true;
    if (drag.current.moved) scrollerRef.current!.scrollLeft = drag.current.startScroll - dx;
  };
  const endDrag = () => {
    if (!drag.current.active) return;
    drag.current.active = false;
    pause();
  };

  return (
    <div
      ref={scrollerRef}
      className="relative overflow-x-auto overflow-y-hidden py-2.5 cursor-grab active:cursor-grabbing select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") hovering.current = true;
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") hovering.current = false;
        endDrag();
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onTouchStart={() => {
        touching.current = true;
      }}
      onTouchEnd={() => {
        touching.current = false;
        pause(); // let native momentum finish before auto-scroll resumes
      }}
      onWheel={pause}
      // Swallow the click that ends a mouse drag so it doesn't open the modal
      onClickCapture={(e) => {
        if (drag.current.moved) {
          e.stopPropagation();
          e.preventDefault();
          drag.current.moved = false;
        }
      }}
    >
      <div className="flex w-max gap-4 sm:gap-5 items-center px-1">
        {loopItems.map((hospital, index) => (
          <HospitalStreamCard
            key={`${direction}-${hospital.name}-${index}`}
            hospital={hospital}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Detail modal ── */
function HospitalModal({
  hospital,
  onClose,
}: {
  hospital: HospitalItem | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!hospital) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [hospital, onClose]);

  return (
    <AnimatePresence>
      {hospital && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={hospital.name}
        >
          <motion.div
            className="relative w-full max-w-md overflow-hidden rounded-[1.6rem] bg-white shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[5/3] w-full bg-slate-100">
              <Image src={hospital.src} alt={hospital.name} fill unoptimized className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup"
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition hover:bg-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-5 sm:p-6">
              {groupLogos[hospital.group] && (
                <Image
                  src={groupLogos[hospital.group]}
                  alt={hospital.group}
                  width={240}
                  height={60}
                  quality={100}
                  className="mb-3 h-6 w-auto object-contain"
                />
              )}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">{hospital.name}</h3>
              <div className="mt-1.5 flex items-center gap-1.5 text-sm text-slate-500">
                <svg className="h-4 w-4 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {hospital.city}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {hospital.badge}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  {hospital.group}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function OurCustomers() {
  const [selected, setSelected] = useState<HospitalItem | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <section
      id="our-customers"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50/60 via-white to-slate-50/80 py-12 sm:py-16"
    >
      {/* Subtle organic decorative background elements */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-20 h-80 w-80 rounded-full bg-teal-200/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 -left-20 h-80 w-80 rounded-full bg-cyan-200/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Dual Continuous Flowing Hospital Cards Stream ── */}
        <div className="relative">
          {/* Left & Right Smooth Edge Fade Masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent" />

          {/* Row 1: Flowing Left */}
          <MarqueeRow items={row1} direction="left" onSelect={setSelected} />

          {/* Row 2: Flowing Right */}
          <MarqueeRow items={row2} direction="right" onSelect={setSelected} />
        </div>

      </div>

      <HospitalModal hospital={selected} onClose={closeModal} />
    </section>
  );
}


