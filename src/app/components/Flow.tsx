"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    n: 1,
    label: "Penerimaan Linen Kotor",
    desc: "Linen kotor dari bangsal rumah sakit diterima dan didata di area penerimaan fasilitas laundry.",
    color: "#e91e8c",
    pos: { x: 79, y: 18 },
  },
  {
    n: 2,
    label: "Penyimpanan Linen Kotor Masuk",
    desc: "Linen kotor disimpan sementara sebelum proses sortir dimulai, dikelompokkan sesuai asal bangsal.",
    color: "#e91e8c",
    pos: { x: 92, y: 47 },
  },
  {
    n: 3,
    label: "Sorting & Pemilahan",
    desc: "Linen dipilah berdasarkan jenis, warna, dan tingkat kontaminasi untuk pengelompokan pencucian.",
    color: "#e91e8c",
    pos: { x: 80, y: 75 },
  },
  {
    n: 4,
    label: "Penanganan Linen Infeksius",
    desc: "Linen berpotensi infeksius ditangani secara terpisah di ruang khusus berstandar biohazard.",
    color: "#e91e8c",
    pos: { x: 66, y: 90 },
  },
  {
    n: 5,
    label: "Pencucian & Pengeringan",
    desc: "Pencucian menggunakan barrier washing machine pada suhu tinggi, dilanjutkan pengeringan steril.",
    color: "#0e7c8a",
    pos: { x: 39, y: 70 },
  },
  {
    n: 6,
    label: "Finishing & Pressing",
    desc: "Linen disetrika dan dipressing sesuai standar kerapian layanan medis profesional.",
    color: "#0e7c8a",
    pos: { x: 18, y: 80 },
  },
  {
    n: 7,
    label: "Inspeksi Kualitas",
    desc: "Setiap item diperiksa menyeluruh untuk memastikan kualitas, kebersihan, dan kerapian maksimal.",
    color: "#0e7c8a",
    pos: { x: 22, y: 65 },
  },
  {
    n: 8,
    label: "Penyimpanan Linen Bersih",
    desc: "Linen bersih disimpan di area steril terpisah, dikemas rapi, siap dikirim kembali ke rumah sakit.",
    color: "#0e7c8a",
    pos: { x: 28, y: 53 },
  },
  {
    n: 9,
    label: "Linen Bersih Keluar",
    desc: "Linen bersih dikirim tepat waktu kembali ke rumah sakit sesuai jadwal yang telah disepakati.",
    color: "#0e7c8a",
    pos: { x: 27, y: 18 },
  },
];

export default function Flow() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Ensure video plays on mount (autoplay policy)
  useEffect(() => {
    videoRef.current?.play().catch(() => { });
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const hoveredStep = hovered !== null ? steps[hovered - 1] : null;

  return (
    <section id="flow" className="bg-slate-50 py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <ScrollReveal animation="tilt-up" duration={700}>
          <div className="mb-14 text-center">
            <span className="mb-3 inline-block rounded-full border border-primary/25 bg-primary-light px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Alur Proses
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
              Bagaimana Kami Bekerja?
            </h2>

            <p className="mt-4 text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Proses dibagi menjadi dua zona terpisah untuk menjaga kebersihan dan mencegah kontaminasi silang. <strong>Dirty Zone</strong> untuk penerimaan dan penanganan linen kotor, sementara <strong>Clean Zone</strong> untuk pencucian, pengeringan, hingga pengiriman linen bersih dan steril.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-in" duration={900} delay={150}>
          {/* Video + hotspot overlay container */}
          <div
            ref={containerRef}
            className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white select-none"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Looping video — brightness/contrast boost to remove washed-out look */}
            <video
              ref={videoRef}
              src="/flowikm.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto block"
              style={{
                filter: "brightness(1.08) contrast(1.18) saturate(1.25)",
              }}
            />

            {/* Hotspot badges overlaid on video using % positioning */}
            {steps.map((step) => {
              const isHov = hovered === step.n;
              return (
                <button
                  key={step.n}
                  onMouseEnter={() => setHovered(step.n)}
                  onMouseLeave={() => setHovered(null)}
                  className="absolute flex items-center justify-center focus:outline-none"
                  style={{
                    left: `${step.pos.x}%`,
                    top: `${step.pos.y}%`,
                    transform: "translate(-50%, -50%)",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: isHov ? step.color : "rgba(255,255,255,0.96)",
                    color: isHov ? "white" : step.color,
                    border: `2.5px solid ${step.color}`,
                    fontSize: 15,
                    fontWeight: 900,
                    letterSpacing: "-0.5px",
                    boxShadow: isHov
                      ? `0 0 0 7px ${step.color}30, 0 6px 20px ${step.color}55`
                      : `0 2px 12px rgba(0,0,0,0.28), 0 0 0 3px ${step.color}18`,
                    transition: "all 0.18s ease",
                    zIndex: 10,
                  }}
                  aria-label={step.label}
                >
                  {step.n}
                  {/* Subtle pulse ring */}
                  {!isHov && (
                    <span
                      className="absolute animate-ping"
                      style={{
                        inset: -4,
                        borderRadius: "50%",
                        border: `1.5px solid ${step.color}`,
                        opacity: 0.35,
                        animationDuration: `${2 + step.n * 0.18}s`,
                      }}
                    />
                  )}
                </button>
              );
            })}

            {/* Tooltip */}
            {hoveredStep && (
              <div
                className="pointer-events-none absolute z-50 w-64 rounded-xl border bg-white/95 backdrop-blur-sm p-4 shadow-2xl"
                style={{
                  left: Math.min(
                    tooltipPos.x + 16,
                    (containerRef.current?.offsetWidth ?? 800) - 272
                  ),
                  top: Math.max(tooltipPos.y - 100, 8),
                  borderColor: `${hoveredStep.color}35`,
                  boxShadow: `0 8px 32px rgba(0,0,0,0.16), 0 0 0 1px ${hoveredStep.color}28`,
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-black text-white"
                    style={{ background: hoveredStep.color }}
                  >
                    {hoveredStep.n}
                  </span>
                  <p className="text-sm font-bold text-slate-900 leading-tight">
                    {hoveredStep.label}
                  </p>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {hoveredStep.desc}
                </p>
              </div>
            )}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
