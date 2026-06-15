"use client";
import { motion } from "framer-motion";
import { useState, useRef, useCallback, type FC } from "react";
import AnimatedContent from "./ReactBits/AnimatedContent";

const steps = [
  {
    id: 1,
    name: "Tangki Anaerobik",
    desc: "Mengurai limbah tanpa oksigen untuk mengurangi beban pencemar.",
  },
  {
    id: 2,
    name: "Tangki Netralisasi",
    desc: "Menyeimbangkan kadar pH agar tidak terlalu asam atau basa.",
  },
  {
    id: 3,
    name: "Tangki Equalisasi",
    desc: "Menstabilkan kualitas dan kuantitas limbah agar aliran lebih konsisten.",
  },
  {
    id: 4,
    name: "Tangki Aerobik Biofilter",
    desc: "Mikroorganisme dengan bantuan oksigen mengurai bahan organik secara efektif.",
  },
  {
    id: 5,
    name: "Tangki Pengendapan",
    desc: "Padatan tersuspensi mengendap di dasar, air jernih berada di bagian atas.",
  },
  {
    id: 6,
    name: "Tangki Desinfeksi",
    desc: "Membunuh bakteri dan kuman agar air aman dibuang.",
  },
  {
    id: 7,
    name: "Tangki Efluen",
    desc: "Air hasil olahan dialirkan ke saluran umum secara aman dan memenuhi baku mutu lingkungan.",
  },
];

// Bubble component for water animation
const Bubble = ({ x, delay, size = 2 }: { x: number; delay: number; size?: number }) => (
  <motion.circle
    cx={x}
    cy={395}
    r={size}
    fill="rgba(255,255,255,0.7)"
    initial={{ cy: 395, opacity: 0 }}
    animate={{ cy: 245, opacity: [0, 0.8, 0] }}
    transition={{ duration: 3, delay, repeat: Infinity, ease: "easeOut" }}
  />
);

export const Sustainability: FC = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const rafPendingRef = useRef(false);
  const pendingPosRef = useRef({ x: 0, y: 0 });

  // Throttle mousemove updates to once per animation frame to prevent excessive re-renders
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    pendingPosRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    if (!rafPendingRef.current) {
      rafPendingRef.current = true;
      requestAnimationFrame(() => {
        setCursorPos({ ...pendingPosRef.current });
        rafPendingRef.current = false;
      });
    }
  }, []);

  return (
    <section id="sustainability" className="py-20 sm:py-28 px-4 sm:px-8 bg-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle, #0e7c8a 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <AnimatedContent distance={30} direction="vertical">
          <div className="text-center mb-14">
            <span className="mb-3 inline-block rounded-full border border-primary/25 bg-primary-light px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Sustainability
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 sm:mb-6">
              Pengolahan Limbah Medis yang Ramah Lingkungan
            </h2>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed font-medium">
              Kami menjaga kebersihan lingkungan dengan sistem pengolahan limbah yang terstandarisasi.
            </p>
          </div>
        </AnimatedContent>

        {/* Diagram - directly on bg, no frame */}
        <AnimatedContent delay={0.2} distance={30} direction="vertical">
          <div
            className="relative cursor-default"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setHoveredStep(null)}
          >
            {/* Custom cursor tooltip */}
            {hoveredStep !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute z-30 pointer-events-none bg-primary text-white px-4 py-3 rounded-xl shadow-xl max-w-[260px]"
                style={{ left: cursorPos.x + 16, top: cursorPos.y + 16 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                    <span className="text-[9px] font-bold text-primary">{steps[hoveredStep].id}</span>
                  </div>
                  <h4 className="text-xs font-bold">{steps[hoveredStep].name}</h4>
                </div>
                <p className="text-[10px] text-white/80 leading-relaxed">{steps[hoveredStep].desc}</p>
              </motion.div>
            )}

            <div className="overflow-x-auto">
              <svg viewBox="0 0 1280 540" className="w-full min-w-[920px] h-auto" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(14,124,138,0.18)" />
                    <stop offset="100%" stopColor="rgba(14,124,138,0.4)" />
                  </linearGradient>
                  <linearGradient id="waterHover" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(14,124,138,0.25)" />
                    <stop offset="100%" stopColor="rgba(14,124,138,0.55)" />
                  </linearGradient>
                  <pattern id="dotPat" patternUnits="userSpaceOnUse" width="6" height="6">
                    <circle cx="3" cy="3" r="1" fill="rgba(14,124,138,0.25)" />
                  </pattern>
                  <pattern id="dotPatHover" patternUnits="userSpaceOnUse" width="6" height="6">
                    <circle cx="3" cy="3" r="1" fill="rgba(14,124,138,0.4)" />
                  </pattern>
                  <pattern id="biofilterMesh" patternUnits="userSpaceOnUse" width="10" height="10">
                    <path d="M0,0 L10,10 M10,0 L0,10" stroke="rgba(14,124,138,0.35)" strokeWidth="1" />
                  </pattern>
                  <marker id="arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#0e7c8a" fillOpacity="0.6" />
                  </marker>
                  <marker id="arrPrimary" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#0e7c8a" />
                  </marker>
                </defs>

                {/* === INPUT FLOWS === */}
                {/* Air limbah dari proses laundry → Tangki Anaerobik */}
                <>
                  <text x="20" y="290" fill="#0e7c8a" fillOpacity="0.7" fontSize="11" fontWeight="700" fontFamily="system-ui">Air limbah</text>
                  <text x="20" y="306" fill="#0e7c8a" fillOpacity="0.7" fontSize="11" fontWeight="700" fontFamily="system-ui">dari proses</text>
                  <text x="20" y="322" fill="#0e7c8a" fillOpacity="0.7" fontSize="11" fontWeight="700" fontFamily="system-ui">laundry</text>
                </>
                <line x1="85" y1="305" x2="125" y2="305" stroke="#0e7c8a" strokeWidth="2.5" markerEnd="url(#arrPrimary)" />

                {/* EFLUEN SEPTIK TANK → Tangki Equalisasi (3) */}
                <text x="20" y="120" fill="#0e7c8a" fillOpacity="0.6" fontSize="10" fontWeight="700" fontFamily="system-ui">
                  EFLUEN TANGKI SEPTIK
                </text>
                <polyline points="20,128 485,128 485,180" fill="none" stroke="#0e7c8a" strokeOpacity="0.4" strokeWidth="1.5" markerEnd="url(#arr)" />

                {/* KM/WASHTAFEL → Tangki Netralisasi (2) */}
                <text x="20" y="155" fill="#0e7c8a" fillOpacity="0.6" fontSize="10" fontWeight="700" fontFamily="system-ui">
                  KM / WASTAFEL
                </text>
                <polyline points="20,163 335,163 335,180" fill="none" stroke="#0e7c8a" strokeOpacity="0.4" strokeWidth="1.5" markerEnd="url(#arr)" />

                {/* === BLOWERS (above tank 4) - more realistic shape === */}
                {/* Blower 1 */}
                <g>
                  {/* Cylindrical body */}
                  <ellipse cx="610" cy="80" rx="22" ry="6" fill="#0e7c8a" fillOpacity="0.15" stroke="#0e7c8a" strokeOpacity="0.5" strokeWidth="1.5" />
                  <rect x="588" y="80" width="44" height="22" fill="#0e7c8a" fillOpacity="0.1" stroke="#0e7c8a" strokeOpacity="0.5" strokeWidth="1.5" />
                  <ellipse cx="610" cy="102" rx="22" ry="6" fill="#0e7c8a" fillOpacity="0.2" stroke="#0e7c8a" strokeOpacity="0.5" strokeWidth="1.5" />
                  {/* Motor box on top */}
                  <rect x="600" y="62" width="20" height="18" rx="2" fill="white" stroke="#0e7c8a" strokeOpacity="0.5" strokeWidth="1.5" />
                  {/* Outlet pipe */}
                  <rect x="608" y="102" width="4" height="20" fill="#0e7c8a" fillOpacity="0.6" />
                  <text x="610" y="55" fill="#0e7c8a" fillOpacity="0.7" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui">Blower 1</text>
                </g>

                {/* Blower 2 */}
                <g>
                  <ellipse cx="680" cy="80" rx="22" ry="6" fill="#0e7c8a" fillOpacity="0.15" stroke="#0e7c8a" strokeOpacity="0.5" strokeWidth="1.5" />
                  <rect x="658" y="80" width="44" height="22" fill="#0e7c8a" fillOpacity="0.1" stroke="#0e7c8a" strokeOpacity="0.5" strokeWidth="1.5" />
                  <ellipse cx="680" cy="102" rx="22" ry="6" fill="#0e7c8a" fillOpacity="0.2" stroke="#0e7c8a" strokeOpacity="0.5" strokeWidth="1.5" />
                  <rect x="670" y="62" width="20" height="18" rx="2" fill="white" stroke="#0e7c8a" strokeOpacity="0.5" strokeWidth="1.5" />
                  <rect x="678" y="102" width="4" height="20" fill="#0e7c8a" fillOpacity="0.6" />
                  <text x="680" y="55" fill="#0e7c8a" fillOpacity="0.7" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui">Blower 2</text>
                </g>

                {/* Blower platform */}
                <rect x="580" y="122" width="120" height="6" fill="#0e7c8a" fillOpacity="0.6" />

                {/* Blower air pipes (dashed → tank 4 diffuser) */}
                <line x1="610" y1="128" x2="610" y2="180" stroke="#0e7c8a" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="4 3" />
                <line x1="680" y1="128" x2="680" y2="180" stroke="#0e7c8a" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="4 3" />

                {/* Lumpur Balik: Pengendapan (5) → Aerobik Biofilter (4) */}
                <text x="700" y="150" fill="#0e7c8a" fillOpacity="0.6" fontSize="10" fontWeight="700" fontFamily="system-ui">
                  Lumpur Balik
                </text>
                <polyline points="825,180 825,160 730,160 730,180" fill="none" stroke="#0e7c8a" strokeOpacity="0.4" strokeWidth="1.5" markerEnd="url(#arr)" />

                {/* === TANK 1 - Anaerobik === */}
                <g
                  className="cursor-pointer transition-all"
                  onMouseEnter={() => setHoveredStep(0)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <rect x="130" y="180" width="110" height="220" rx="2" fill="white" stroke={hoveredStep === 0 ? "#0e7c8a" : "#0e7c8a"} strokeOpacity={hoveredStep === 0 ? 1 : 0.7} strokeWidth={hoveredStep === 0 ? 2.5 : 2} />
                  {/* Water */}
                  <rect x="135" y="245" width="100" height="150" fill={hoveredStep === 0 ? "url(#waterHover)" : "url(#waterGrad)"} />
                  <rect x="135" y="245" width="100" height="150" fill={hoveredStep === 0 ? "url(#dotPatHover)" : "url(#dotPat)"} />
                  {/* Wave surface */}
                  <motion.path
                    d="M135,245 Q150,242 165,245 Q180,248 195,245 Q210,242 225,245 L235,245"
                    fill="none"
                    stroke={hoveredStep === 0 ? "#0e7c8a" : "#0e7c8a"}
                    strokeOpacity="0.5"
                    strokeWidth="1.5"
                    animate={{ d: ["M135,245 Q150,242 165,245 Q180,248 195,245 Q210,242 225,245 L235,245", "M135,245 Q150,248 165,245 Q180,242 195,245 Q210,248 225,245 L235,245", "M135,245 Q150,242 165,245 Q180,248 195,245 Q210,242 225,245 L235,245"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  {/* Bubbles */}
                  <Bubble x={155} delay={0} />
                  <Bubble x={180} delay={1} />
                  <Bubble x={210} delay={2} />
                </g>
                <text x="185" y="425" fill="#0e7c8a" fillOpacity="0.85" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui">
                  TANGKI
                </text>
                <text x="185" y="441" fill="#0e7c8a" fillOpacity="0.85" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui">
                  ANAEROBIK
                </text>

                {/* Pipe 1 → 2 */}
                <line x1="240" y1="290" x2="275" y2="290" stroke={(hoveredStep === 0 || hoveredStep === 1) ? "#0e7c8a" : "#0e7c8a"} strokeOpacity={(hoveredStep === 0 || hoveredStep === 1) ? 0.9 : 0.4} strokeWidth="2" markerEnd="url(#arr)" />

                {/* === TANK 2 - Netralisasi === */}
                <g className="cursor-pointer" onMouseEnter={() => setHoveredStep(1)} onMouseLeave={() => setHoveredStep(null)}>
                  <rect x="280" y="180" width="110" height="220" rx="2" fill="white" stroke={hoveredStep === 1 ? "#0e7c8a" : "#0e7c8a"} strokeOpacity={hoveredStep === 1 ? 1 : 0.7} strokeWidth={hoveredStep === 1 ? 2.5 : 2} />
                  <rect x="285" y="245" width="100" height="150" fill={hoveredStep === 1 ? "url(#waterHover)" : "url(#waterGrad)"} />
                  <rect x="285" y="245" width="100" height="150" fill={hoveredStep === 1 ? "url(#dotPatHover)" : "url(#dotPat)"} />
                  <motion.path
                    d="M285,245 Q300,242 315,245 Q330,248 345,245 Q360,242 375,245 L385,245"
                    fill="none" stroke={hoveredStep === 1 ? "#0e7c8a" : "#0e7c8a"} strokeOpacity="0.5" strokeWidth="1.5"
                    animate={{ d: ["M285,245 Q300,242 315,245 Q330,248 345,245 Q360,242 375,245 L385,245", "M285,245 Q300,248 315,245 Q330,242 345,245 Q360,248 375,245 L385,245", "M285,245 Q300,242 315,245 Q330,248 345,245 Q360,242 375,245 L385,245"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  />
                  <Bubble x={305} delay={0.5} />
                  <Bubble x={335} delay={1.5} />
                  <Bubble x={360} delay={2.5} />
                </g>
                <text x="335" y="425" fill="#0e7c8a" fillOpacity="0.85" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui">
                  TANGKI
                </text>
                <text x="335" y="441" fill="#0e7c8a" fillOpacity="0.85" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui">
                  NETRALISASI
                </text>

                <line x1="390" y1="290" x2="425" y2="290" stroke={(hoveredStep === 1 || hoveredStep === 2) ? "#0e7c8a" : "#0e7c8a"} strokeOpacity={(hoveredStep === 1 || hoveredStep === 2) ? 0.9 : 0.4} strokeWidth="2" markerEnd="url(#arr)" />

                {/* === TANK 3 - Equalisasi === */}
                <g className="cursor-pointer" onMouseEnter={() => setHoveredStep(2)} onMouseLeave={() => setHoveredStep(null)}>
                  <rect x="430" y="180" width="110" height="220" rx="2" fill="white" stroke={hoveredStep === 2 ? "#0e7c8a" : "#0e7c8a"} strokeOpacity={hoveredStep === 2 ? 1 : 0.7} strokeWidth={hoveredStep === 2 ? 2.5 : 2} />
                  <rect x="435" y="245" width="100" height="150" fill={hoveredStep === 2 ? "url(#waterHover)" : "url(#waterGrad)"} />
                  <rect x="435" y="245" width="100" height="150" fill={hoveredStep === 2 ? "url(#dotPatHover)" : "url(#dotPat)"} />
                  <motion.path
                    d="M435,245 Q450,242 465,245 Q480,248 495,245 Q510,242 525,245 L535,245"
                    fill="none" stroke={hoveredStep === 2 ? "#0e7c8a" : "#0e7c8a"} strokeOpacity="0.5" strokeWidth="1.5"
                    animate={{ d: ["M435,245 Q450,242 465,245 Q480,248 495,245 Q510,242 525,245 L535,245", "M435,245 Q450,248 465,245 Q480,242 495,245 Q510,248 525,245 L535,245", "M435,245 Q450,242 465,245 Q480,248 495,245 Q510,242 525,245 L535,245"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  />
                  {/* Pompa Pengatur — pump shape */}
                  <g transform="translate(465, 320)">
                    <circle cx="20" cy="15" r="14" fill="white" stroke="#0e7c8a" strokeOpacity="0.6" strokeWidth="1.5" />
                    <circle cx="20" cy="15" r="6" fill="#0e7c8a" fillOpacity="0.4" />
                    <rect x="14" y="29" width="12" height="8" fill="#0e7c8a" fillOpacity="0.4" />
                    <text x="20" y="55" fill="#0e7c8a" fillOpacity="0.7" fontSize="8" fontWeight="600" textAnchor="middle" fontFamily="system-ui">
                      Pompa
                    </text>
                    <text x="20" y="65" fill="#0e7c8a" fillOpacity="0.7" fontSize="8" fontWeight="600" textAnchor="middle" fontFamily="system-ui">
                      Pengatur
                    </text>
                  </g>
                  <Bubble x={455} delay={0.8} />
                  <Bubble x={485} delay={1.8} />
                  <Bubble x={515} delay={2.8} />
                </g>
                <text x="485" y="425" fill="#0e7c8a" fillOpacity="0.85" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui">
                  TANGKI
                </text>
                <text x="485" y="441" fill="#0e7c8a" fillOpacity="0.85" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui">
                  EQUALISASI
                </text>

                <line x1="540" y1="290" x2="575" y2="290" stroke={(hoveredStep === 2 || hoveredStep === 3) ? "#0e7c8a" : "#0e7c8a"} strokeOpacity={(hoveredStep === 2 || hoveredStep === 3) ? 0.9 : 0.4} strokeWidth="2" markerEnd="url(#arr)" />

                {/* === TANK 4 - Aerobik Biofilter === */}
                <g className="cursor-pointer" onMouseEnter={() => setHoveredStep(3)} onMouseLeave={() => setHoveredStep(null)}>
                  <rect x="580" y="180" width="150" height="220" rx="2" fill="white" stroke={hoveredStep === 3 ? "#0e7c8a" : "#0e7c8a"} strokeOpacity={hoveredStep === 3 ? 1 : 0.7} strokeWidth={hoveredStep === 3 ? 2.5 : 2} />
                  <rect x="585" y="245" width="140" height="150" fill={hoveredStep === 3 ? "url(#waterHover)" : "url(#waterGrad)"} />
                  {/* Biofilter mesh block */}
                  <rect x="595" y="260" width="120" height="65" fill="url(#biofilterMesh)" />
                  <rect x="595" y="260" width="120" height="65" fill="none" stroke="#0e7c8a" strokeOpacity="0.4" strokeWidth="1.5" />
                  <text x="655" y="297" fill="#0e7c8a" fillOpacity="0.85" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui">Biofilter</text>
                  {/* Diffuser - rounded with holes */}
                  <g transform="translate(625, 355)">
                    <ellipse cx="30" cy="6" rx="32" ry="6" fill="white" stroke="#0e7c8a" strokeOpacity="0.6" strokeWidth="1.5" />
                    <circle cx="15" cy="6" r="1.5" fill="#0e7c8a" fillOpacity="0.5" />
                    <circle cx="25" cy="6" r="1.5" fill="#0e7c8a" fillOpacity="0.5" />
                    <circle cx="35" cy="6" r="1.5" fill="#0e7c8a" fillOpacity="0.5" />
                    <circle cx="45" cy="6" r="1.5" fill="#0e7c8a" fillOpacity="0.5" />
                    <text x="30" y="22" fill="#0e7c8a" fillOpacity="0.7" fontSize="9" fontWeight="600" textAnchor="middle" fontFamily="system-ui">
                      Difuser
                    </text>
                  </g>
                  <motion.path
                    d="M585,245 Q605,242 625,245 Q645,248 665,245 Q685,242 705,245 L725,245"
                    fill="none" stroke={hoveredStep === 3 ? "#0e7c8a" : "#0e7c8a"} strokeOpacity="0.5" strokeWidth="1.5"
                    animate={{ d: ["M585,245 Q605,242 625,245 Q645,248 665,245 Q685,242 705,245 L725,245", "M585,245 Q605,248 625,245 Q645,242 665,245 Q685,248 705,245 L725,245", "M585,245 Q605,242 625,245 Q645,248 665,245 Q685,242 705,245 L725,245"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                  />
                  {/* More bubbles for aeration */}
                  <Bubble x={605} delay={0} size={2.5} />
                  <Bubble x={630} delay={0.6} size={2.5} />
                  <Bubble x={660} delay={1.2} size={2.5} />
                  <Bubble x={685} delay={1.8} size={2.5} />
                  <Bubble x={705} delay={2.4} size={2.5} />
                </g>
                <text x="655" y="425" fill="#0e7c8a" fillOpacity="0.85" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui">
                  TANGKI AEROBIK
                </text>
                <text x="655" y="441" fill="#0e7c8a" fillOpacity="0.85" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui">
                  BIOFILTER
                </text>

                <line x1="730" y1="290" x2="765" y2="290" stroke={(hoveredStep === 3 || hoveredStep === 4) ? "#0e7c8a" : "#0e7c8a"} strokeOpacity={(hoveredStep === 3 || hoveredStep === 4) ? 0.9 : 0.4} strokeWidth="2" markerEnd="url(#arr)" />

                {/* === TANK 5 - Pengendapan (V cone) === */}
                <g className="cursor-pointer" onMouseEnter={() => setHoveredStep(4)} onMouseLeave={() => setHoveredStep(null)}>
                  <rect x="770" y="180" width="110" height="150" rx="2" fill="white" stroke={hoveredStep === 4 ? "#0e7c8a" : "#0e7c8a"} strokeOpacity={hoveredStep === 4 ? 1 : 0.7} strokeWidth={hoveredStep === 4 ? 2.5 : 2} />
                  <rect x="775" y="245" width="100" height="85" fill={hoveredStep === 4 ? "url(#waterHover)" : "url(#waterGrad)"} />
                  <polygon points="770,330 825,398 880,330" fill="white" stroke={hoveredStep === 4 ? "#0e7c8a" : "#0e7c8a"} strokeOpacity={hoveredStep === 4 ? 1 : 0.7} strokeWidth={hoveredStep === 4 ? 2.5 : 2} />
                  <polygon points="775,330 825,392 875,330" fill={hoveredStep === 4 ? "url(#waterHover)" : "url(#waterGrad)"} />
                  <polygon points="775,330 825,392 875,330" fill={hoveredStep === 4 ? "url(#dotPatHover)" : "url(#dotPat)"} />
                  <motion.path
                    d="M775,245 Q795,242 815,245 Q835,248 855,245 L875,245"
                    fill="none" stroke={hoveredStep === 4 ? "#0e7c8a" : "#0e7c8a"} strokeOpacity="0.5" strokeWidth="1.5"
                    animate={{ d: ["M775,245 Q795,242 815,245 Q835,248 855,245 L875,245", "M775,245 Q795,248 815,245 Q835,242 855,245 L875,245", "M775,245 Q795,242 815,245 Q835,248 855,245 L875,245"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                  />
                  <Bubble x={800} delay={0.4} />
                  <Bubble x={840} delay={1.4} />
                </g>
                <text x="825" y="425" fill="#0e7c8a" fillOpacity="0.85" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui">
                  TANGKI
                </text>
                <text x="825" y="441" fill="#0e7c8a" fillOpacity="0.85" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui">
                  PENGENDAPAN
                </text>

                <line x1="880" y1="290" x2="915" y2="290" stroke={(hoveredStep === 4 || hoveredStep === 5) ? "#0e7c8a" : "#0e7c8a"} strokeOpacity={(hoveredStep === 4 || hoveredStep === 5) ? 0.9 : 0.4} strokeWidth="2" markerEnd="url(#arr)" />

                {/* === TANK 6 - Desinfeksi === */}
                <g className="cursor-pointer" onMouseEnter={() => setHoveredStep(5)} onMouseLeave={() => setHoveredStep(null)}>
                  <rect x="920" y="180" width="105" height="220" rx="2" fill="white" stroke={hoveredStep === 5 ? "#0e7c8a" : "#0e7c8a"} strokeOpacity={hoveredStep === 5 ? 1 : 0.7} strokeWidth={hoveredStep === 5 ? 2.5 : 2} />
                  <rect x="925" y="245" width="95" height="150" fill={hoveredStep === 5 ? "url(#waterHover)" : "url(#waterGrad)"} />
                  <rect x="925" y="245" width="95" height="150" fill={hoveredStep === 5 ? "url(#dotPatHover)" : "url(#dotPat)"} />
                  <motion.path
                    d="M925,245 Q940,242 955,245 Q970,248 985,245 Q1000,242 1015,245 L1020,245"
                    fill="none" stroke={hoveredStep === 5 ? "#0e7c8a" : "#0e7c8a"} strokeOpacity="0.5" strokeWidth="1.5"
                    animate={{ d: ["M925,245 Q940,242 955,245 Q970,248 985,245 Q1000,242 1015,245 L1020,245", "M925,245 Q940,248 955,245 Q970,242 985,245 Q1000,248 1015,245 L1020,245", "M925,245 Q940,242 955,245 Q970,248 985,245 Q1000,242 1015,245 L1020,245"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  />
                  <Bubble x={945} delay={0.7} />
                  <Bubble x={975} delay={1.7} />
                  <Bubble x={1000} delay={2.7} />
                </g>
                <text x="972" y="425" fill="#0e7c8a" fillOpacity="0.85" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui">
                  TANGKI
                </text>
                <text x="972" y="441" fill="#0e7c8a" fillOpacity="0.85" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui">
                  DESINFEKSI
                </text>

                <line x1="1025" y1="290" x2="1060" y2="290" stroke={(hoveredStep === 5 || hoveredStep === 6) ? "#0e7c8a" : "#0e7c8a"} strokeOpacity={(hoveredStep === 5 || hoveredStep === 6) ? 0.9 : 0.4} strokeWidth="2" markerEnd="url(#arr)" />

                {/* === TANK 7 - Efluen === */}
                <g className="cursor-pointer" onMouseEnter={() => setHoveredStep(6)} onMouseLeave={() => setHoveredStep(null)}>
                  <rect x="1065" y="180" width="90" height="220" rx="2" fill="white" stroke={hoveredStep === 6 ? "#0e7c8a" : "#0e7c8a"} strokeOpacity={hoveredStep === 6 ? 1 : 0.7} strokeWidth={hoveredStep === 6 ? 2.5 : 2} />
                  <rect x="1070" y="245" width="80" height="150" fill={hoveredStep === 6 ? "url(#waterHover)" : "url(#waterGrad)"} />
                  <motion.path
                    d="M1070,245 Q1085,242 1100,245 Q1115,248 1130,245 L1150,245"
                    fill="none" stroke={hoveredStep === 6 ? "#0e7c8a" : "#0e7c8a"} strokeOpacity="0.5" strokeWidth="1.5"
                    animate={{ d: ["M1070,245 Q1085,242 1100,245 Q1115,248 1130,245 L1150,245", "M1070,245 Q1085,248 1100,245 Q1115,242 1130,245 L1150,245", "M1070,245 Q1085,242 1100,245 Q1115,248 1130,245 L1150,245"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
                  />
                  <Bubble x={1090} delay={0.9} />
                  <Bubble x={1120} delay={1.9} />
                </g>
                <text x="1110" y="425" fill="#0e7c8a" fillOpacity="0.85" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui">
                  TANGKI
                </text>
                <text x="1110" y="441" fill="#0e7c8a" fillOpacity="0.85" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui">
                  EFLUEN
                </text>

                {/* Output → Saluran Umum */}
                <line x1="1155" y1="290" x2="1190" y2="290" stroke="#0e7c8a" strokeWidth="2.5" markerEnd="url(#arrPrimary)" />
                <>
                  <text x="1192" y="280" fill="#0e7c8a" fillOpacity="0.7" fontSize="11" fontWeight="700" fontFamily="system-ui">Saluran</text>
                  <text x="1192" y="294" fill="#0e7c8a" fillOpacity="0.7" fontSize="11" fontWeight="700" fontFamily="system-ui">Umum (Aman)</text>
                </>
              </svg>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};
