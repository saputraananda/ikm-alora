"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const reports = [
  "Laporan Perizinan Berusaha Berbasis Risiko",
  "Laporan Surat Izin Usaha Perdagangan",
  "Laporan Surat Pernyataan Kesanggupan Pengelolaan dan Pemantauan Lingkungan",
  "Laporan Persetujuan Teknik Pemenuhan Baku Mutu Air Limbah",
  "Laporan Rincian Teknis Penyimpanan Limbah Bahan Berbahaya dan Beracun",
  "Laporan Pengujian Air Limbah",
  "Laporan Pengujian Linen Anak",
  "Laporan Pengujian Linen Bayi",
  "Laporan Pengujian Linen OK",
  "Laporan Pengujian Linen Dewasa",
  "Laporan Pengujian Linen Stik Laken",
];

const isoCerts = [
  {
    id: "iso14001",
    image: "/dokumentasi/iso_14001_new.png",
    code: "ISO 14001:2015",
    name: "Sistem Manajemen Lingkungan",
    description:
      "Sertifikasi internasional yang menjamin sistem pengelolaan lingkungan kami memenuhi standar global, termasuk pengelolaan limbah dan efisiensi energi.",
    color: "#0e7c8a",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
  },
  {
    id: "iso9001",
    image: "/dokumentasi/iso_9001_new.png",
    code: "ISO 9001:2015",
    name: "Sistem Manajemen Mutu",
    description:
      "Sertifikasi internasional yang membuktikan komitmen kami terhadap kualitas layanan yang konsisten, kepuasan pelanggan, dan perbaikan berkelanjutan.",
    color: "#1e40af",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
];

export default function Certifications() {
  return (
    <section id="sertifikasi" className="py-20 sm:py-28 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal animation="fade-in" duration={800}>
          <div className="text-center mb-14">
            <span className="mb-3 inline-block rounded-full border border-primary/25 bg-primary-light px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Legalitas &amp; Sertifikasi
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
              Standar &amp; Kepatuhan Kami
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Seluruh operasional IKM Laundry dijalankan sesuai regulasi pemerintah dan telah tersertifikasi
              oleh lembaga internasional terkemuka.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left: Regulatory Reports List */}
          <ScrollReveal animation="slide-right" duration={800} delay={100}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                {/* Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light">
                  <svg
                    className="h-5 w-5 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 12h6M9 16h6M9 8h6M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Dokumen &amp; Perizinan</h3>
              </div>

              <ul className="space-y-3">
                {reports.map((report, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 transition-all duration-200 hover:border-primary/30 hover:bg-primary-light/40 hover:shadow-sm"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-slate-700 leading-snug">{report}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Right: ISO Certificate Cards */}
          <ScrollReveal animation="slide-left" duration={800} delay={200}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light">
                  <svg
                    className="h-5 w-5 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Sertifikasi ISO Internasional</h3>
              </div>

              <div className="flex flex-col gap-6">
                {isoCerts.map((cert, idx) => (
                  <ScrollReveal
                    key={cert.id}
                    animation="scale-up"
                    duration={600}
                    delay={idx * 150}
                  >
                    <div
                      className="group rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg"
                    >
                      {/* Certificate Image Preview */}
                      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                        <Image
                          src={cert.image}
                          alt={cert.code}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Badge */}
                        <span className={`absolute top-3 left-3 rounded-full border px-3 py-1 text-xs font-bold ${cert.badgeColor} backdrop-blur-sm`}>
                          {cert.code}
                        </span>
                      </div>

                      {/* Card Body */}
                      <div className="p-5">
                        <h4 className="text-base font-bold text-slate-900">
                          {cert.code}
                        </h4>
                        <p className="text-xs font-semibold text-primary mt-0.5">{cert.name}</p>
                        <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
