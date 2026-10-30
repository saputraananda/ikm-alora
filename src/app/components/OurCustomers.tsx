"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export interface HospitalItem {
  src: string;
  name: string;
  group: string;
  city: string;
  badge: string;
}

/* ── All 15 hospital photos ── */
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
    name: "Eka Hospital Pluit",
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
    src: "/logo-client/foto-rs/eka-hijau.png",
    name: "Eka Hospital Juanda",
    group: "Eka Hospital",
    city: "Bogor",
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
}: {
  hospital: HospitalItem;
}) {
  return (
    <div
      className="group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-[2rem] bg-gradient-to-b from-white to-slate-50/90 p-2 shadow-md shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 border border-slate-100 hover:border-primary/30"
      style={{ width: "280px" }}
    >
      {/* Visual Image container with organic curve */}
      <div className="relative h-48 w-full overflow-hidden rounded-[1.6rem] bg-slate-100">
        <Image
          src={hospital.src}
          alt={hospital.name}
          fill
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="280px"
        />

        {/* Ambient top & bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/15 to-transparent" />

        {/* Top Hospital Logo Badge */}
        <div className="absolute left-3 top-3 z-10">
          <div className="inline-flex items-center justify-center h-8 px-2.5 rounded-full bg-white/95 backdrop-blur-md shadow-md shadow-slate-900/10 border border-white/90">
            {groupLogos[hospital.group] ? (
              <Image
                src={groupLogos[hospital.group]}
                alt={hospital.group}
                width={80}
                height={20}
                className="h-4.5 max-h-5 w-auto max-w-[85px] object-contain"
              />
            ) : (
              <span className="text-[11px] font-semibold text-slate-800">
                {hospital.group}
              </span>
            )}
          </div>
        </div>

        {/* Bottom text overlay on image */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
          <h4 className="text-sm font-bold leading-snug drop-shadow-sm group-hover:text-cyan-200 transition-colors">
            {hospital.name}
          </h4>
          <div className="mt-1 flex items-center gap-1 text-[11px] text-white/80">
            <svg
              className="h-3 w-3 text-primary-light shrink-0"
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
    </div>
  );
}

export default function OurCustomers() {
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
          <div className="relative overflow-hidden py-3">
            <motion.div
              className="flex gap-6 items-center"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 34,
                ease: "linear",
                repeat: Infinity,
              }}
              style={{ width: "fit-content" }}
            >
              {[...row1, ...row1].map((hospital, index) => (
                <HospitalStreamCard key={`row1-${hospital.name}-${index}`} hospital={hospital} />
              ))}
            </motion.div>
          </div>

          {/* Row 2: Flowing Right */}
          <div className="relative overflow-hidden py-3 mt-2">
            <motion.div
              className="flex gap-6 items-center"
              animate={{
                x: ["-50%", "0%"],
              }}
              transition={{
                duration: 36,
                ease: "linear",
                repeat: Infinity,
              }}
              style={{ width: "fit-content" }}
            >
              {[...row2, ...row2].map((hospital, index) => (
                <HospitalStreamCard key={`row2-${hospital.name}-${index}`} hospital={hospital} />
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}


