"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const facilities = [
  {
    id: 1,
    image: "/dokumentasi/facilities/1-barierwasher-infesius.png",
    title: "Barrier Washer Extractor",
    subtitle: "Khusus Linen Infeksius",
    desc: "Mesin cuci khusus bertipe sekat (barrier) untuk memproses linen infeksius secara terpisah dan steril, mencegah kontaminasi silang antara area kotor dan bersih."
  },
  {
    id: 2,
    image: "/dokumentasi/facilities/2-durablelux-washerextractor-noninfeksius.png",
    title: "Durablelux Washer Extractor",
    subtitle: "Linen Non-Infeksius",
    desc: "Mesin cuci industri berkapasitas besar dan berkecepatan tinggi untuk linen non-infeksius, memastikan pencucian bersih, merata, dan higienis."
  },
  {
    id: 3,
    image: "/dokumentasi/facilities/3-tumbler-dryers.png",
    title: "Industrial Tumbler Dryer",
    subtitle: "Pengering Suhu Terkontrol",
    desc: "Mesin pengering berkapasitas industri dengan pengaturan suhu presisi untuk menjaga serat kain dan memastikan linen kering sempurna secara higienis."
  },
  {
    id: 4,
    image: "/dokumentasi/facilities/4-ironing-table.png",
    title: "Professional Ironing Table",
    subtitle: "Meja Setrika Vakum",
    desc: "Meja setrika uap profesional dengan sistem vakum hisap untuk merapikan linen dan menjaga kualitas kerapihan permukaan linen."
  },
  {
    id: 5,
    image: "/dokumentasi/facilities/5-flatwork-ironer.png",
    title: "Heavy-Duty Flatwork Ironer",
    subtitle: "Setrika Rol Silinder",
    desc: "Mesin setrika rol besar untuk menyetrika linen lembaran (seperti seprei/flat sheet) dalam kapasitas besar dengan cepat, rapi, dan licin."
  },
  {
    id: 6,
    image: "/dokumentasi/facilities/6-united-press.png",
    title: "United Press Machine",
    subtitle: "Mesin Press Linen",
    desc: "Mesin press uap industri untuk melicinkan pakaian kerja medis, jas dokter, dan linen bentuk khusus lainnya dengan tingkat presisi tinggi."
  },
  {
    id: 7,
    image: "/dokumentasi/facilities/7-packing.png",
    title: "Clean Packaging Area",
    subtitle: "Pengemasan Higienis",
    desc: "Area khusus untuk pengemasan linen bersih menggunakan plastik pembungkus kedap udara untuk mencegah debu dan kontaminasi selama transit."
  },
  {
    id: 8,
    image: "/dokumentasi/facilities/8-gudanglinen.png",
    title: "Sterile Linen Warehouse",
    subtitle: "Penyimpanan Linen Bersih",
    desc: "Gudang penyimpanan linen bersih dengan suhu dan kelembapan yang dikontrol secara ketat, bebas debu, serta tertata rapi sesuai jenis linen."
  },
  {
    id: 9,
    image: "/dokumentasi/facilities/9-delivery.png",
    title: "Delivery Vehicle Fleet",
    subtitle: "Armada Distribusi Khusus",
    desc: "Armada pengiriman tertutup dan bersih untuk menjaga higienitas linen sejak keluar dari pabrik hingga diserahterimakan di rumah sakit tujuan."
  }
];

export default function Documentation() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    const prevIndex = lightboxIndex === 0 ? facilities.length - 1 : lightboxIndex - 1;
    setLightboxIndex(prevIndex);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    const nextIndex = lightboxIndex === facilities.length - 1 ? 0 : lightboxIndex + 1;
    setLightboxIndex(nextIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setLightboxIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section id="dokumentasi" className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="mb-3 inline-block rounded-full border border-primary/25 bg-primary-light px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Fasilitas & Layanan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
            Fasilitas & Layanan Kami
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Didukung oleh peralatan laundry kelas industri modern dengan alur kerja steril yang sesuai standar Kementerian Kesehatan RI.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((fac, idx) => (
            <div
              key={fac.id}
              className="group relative"
            >
              <div
                onClick={() => setLightboxIndex(idx)}
                className="group cursor-pointer overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:shadow-xl h-full flex flex-col"
              >
                <div className="relative h-72 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={fac.image}
                    alt={fac.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-950/0 transition-all duration-500 group-hover:bg-slate-950/20" />
                  <span className="absolute top-6 left-6 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-primary shadow-xl">
                    {idx + 1}
                  </span>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-300">
                    {fac.title}
                  </h3>
                  <p className="mt-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
                    {fac.subtitle}
                  </p>
                  <p className="mt-4 text-slate-500 leading-relaxed text-sm sm:text-base">
                    {fac.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-4 sm:p-10">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-[110] rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-6 z-[110] rounded-full bg-white/10 p-4 text-white transition-colors hover:bg-white/20 hidden sm:block"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-6 z-[110] rounded-full bg-white/10 p-4 text-white transition-colors hover:bg-white/20 hidden sm:block"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="relative max-h-full max-w-5xl w-full overflow-hidden rounded-3xl shadow-2xl flex flex-col items-center">
            <div className="w-full flex items-center justify-center bg-slate-100">
              <Image
                src={facilities[lightboxIndex].image}
                alt={facilities[lightboxIndex].title}
                width={1200}
                height={800}
                className="max-h-[60vh] w-auto object-contain"
              />
            </div>
            <div className="bg-white p-8 w-full">
              <h3 className="text-2xl font-bold text-slate-900">{facilities[lightboxIndex].title}</h3>
              <p className="mt-2 text-slate-500 leading-relaxed">{facilities[lightboxIndex].desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
