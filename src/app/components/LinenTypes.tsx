"use client";

import LinenComparisonSlider from "./LinenComparisonSlider";
import AnimatedContent from "./ReactBits/AnimatedContent";

export default function LinenTypes() {
  return (
    <section id="linen" className="py-20 sm:py-28 bg-slate-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <AnimatedContent direction="vertical" distance={24} duration={0.45}>
          <div className="text-center mb-14">
            <span className="mb-3 inline-block rounded-full border border-primary/25 bg-primary-light px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Penanganan Khusus
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
              Jenis Linen yang Kami Layani
            </h2>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Kami memproses linen dengan perlakuan khusus sesuai tingkat
              kontaminasi, Gunakan slider di bawah untuk melihat perbedaan
              penanganan kami
            </p>
          </div>
        </AnimatedContent>

        <AnimatedContent direction="vertical" distance={32} delay={0.1} duration={0.5}>
          <LinenComparisonSlider />
        </AnimatedContent>

      </div>
    </section>
  );
}
