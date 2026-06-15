"use client";

import LogoLoop from "./ReactBits/LogoLoop";

export const ClientLogos = () => {
  const clients = [
    { src: "/logos/eka-hospital.webp", alt: "RS Eka Hospital" },
    { src: "/logos/bunda-logo.webp", alt: "RSU Bunda" },
    { src: "/logos/columbia-asia.webp", alt: "Columbia Asia" },
    { src: "/logos/grand-family.webp", alt: "RSIA Grand Family" },
    { src: "/logos/tugu-ibu.webp", alt: "RS Tugu Ibu" },
    { src: "/logos/permata-cibubur.webp", alt: "RSIA Permata Cibubur" },
    { src: "/logos/logo-alora-new.webp", alt: "Alora" },
  ];

  return (
    <section id="institutions" className="pt-20 sm:pt-32 pb-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12 text-center">
        <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-primary/10 bg-primary/5 mb-6 sm:mb-8 group cursor-default">
           <span className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-widest text-primary">Kemitraan Strategis</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-slate-900">
          Terpercaya oleh <span className="text-primary">Rumah Sakit Terkemuka</span>
        </h2>
      </div>
      <LogoLoop logos={clients} duration={40} />
    </section>
  );
};
