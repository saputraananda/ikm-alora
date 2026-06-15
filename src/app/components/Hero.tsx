"use client";

import { useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SplitText from "./ReactBits/SplitText";
import ShineBorder from "./ReactBits/ShineBorder";

export default function Hero() {
  const [submitting, setSubmitting] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const bgImages = [
    "/dokumentasi/dokum1.png",
    "/dokumentasi/dokum2.png",
    "/dokumentasi/dokum3.png",
    "/dokumentasi/dokum4.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData(e.currentTarget);
    const nama = String(form.get("nama") ?? "");
    const instansi = String(form.get("instansi") ?? "");

    const subject = encodeURIComponent("Permintaan Informasi Layanan Laundry");
    const body = encodeURIComponent(
      `Halo IKM Laundry,\n\nSaya ${nama} dari ${instansi}. Mohon info layanan hospital laundry.\n\nTerima kasih.`
    );
    window.open(`mailto:support@ikmlaundry.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitting(false);
  };

  return (
    <section
      id="beranda"
      className="relative overflow-hidden min-h-[500px] lg:min-h-[550px] flex items-center bg-white"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {bgImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`IKM Laundry Background ${index + 1}`}
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Responsive smooth gradient overlay */}
        <div className="absolute inset-0 hero-gradient-overlay" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-16 z-10 relative w-full">
        {/* Copy */}
        <div className="flex flex-col justify-center">
          <ScrollReveal animation="tilt-up" duration={800}>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              <SplitText 
                text="Laundry Rumah Sakit &" 
                className="inline-block" 
                textAlign="left" 
                delay={40} 
              />
              <br />
              <span className="text-primary">
                Linen Rental Profesional
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-slate-700 sm:text-lg font-medium">
              Precision Cleaning for Ultimate Hygiene!
              Expert Laundry Solutions from a Trusted National Partner, 
              Total Care for Happy Life
            </p>
          </ScrollReveal>

          <ScrollReveal animation="tilt-up" duration={800} delay={200}>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {[
                { label: "Clean", icon: <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg> },
                { label: "Safe", icon: <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
                { label: "Comfortable", icon: <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
              ].map((item, index) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-sm backdrop-blur-sm"
                >
                  <motion.span 
                    className="text-primary"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "easeInOut"
                    }}
                  >
                    {item.icon}
                  </motion.span>
                  {item.label}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Form Card */}
        <div className="flex items-center justify-center lg:justify-end">
          <ScrollReveal animation="slide-left" duration={1000} delay={400}>
            <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl border border-slate-100 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Solusi Linen Rumah Sakit?
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Isi formulir berikut untuk mendapatkan informasi dan penawaran harga yang sesuai dengan kebutuhan.
              </p>

              <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                <div>
                  <label
                    htmlFor="nama"
                    className="block text-xs font-bold uppercase tracking-wide text-slate-500"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    required
                    className="mt-1 block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm transition-all focus:border-primary focus:bg-white focus:ring-primary/20"
                    placeholder="Contoh: Budi Susanto"
                  />
                </div>
                <div>
                  <label
                    htmlFor="instansi"
                    className="block text-xs font-bold uppercase tracking-wide text-slate-500"
                  >
                    Instansi / Rumah Sakit
                  </label>
                  <input
                    type="text"
                    id="instansi"
                    name="instansi"
                    required
                    className="mt-1 block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm transition-all focus:border-primary focus:bg-white focus:ring-primary/20"
                    placeholder="Contoh: RS Eka Hospital"
                  />
                </div>
                <ShineBorder borderRadius={12} duration={6} className="w-full">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex w-full items-center justify-center rounded-xl bg-primary px-6 py-4 text-sm font-bold text-white shadow-lg transition-all hover:bg-primary-dark active:scale-95 disabled:opacity-70"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Mengirim...
                      </span>
                    ) : (
                      "Konsultasi Sekarang"
                    )}
                  </button>
                </ShineBorder>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
