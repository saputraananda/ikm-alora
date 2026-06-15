"use client";

import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Full Service Solutions",
    description:
      "Solusi laundry lengkap mulai dari penjemputan, pencucian, hingga pengantaran kembali.",
    icon: "box",
  },
  {
    title: "Linen Rental",
    description:
      "Sewa linen berkualitas tinggi dengan pasokan terjamin setiap saat.",
    icon: "stack",
  },
  {
    title: "Laundry Services",
    description:
      "Proses pencucian higienis dengan mesin berteknologi tinggi dan deterjen ramah lingkungan.",
    icon: "drop",
  },
  {
    title: "Infection Prevention",
    description:
      "Protokol pencegahan infeksi ketat untuk melindungi pasien dan tenaga medis.",
    icon: "shield",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-in" duration={800}>
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Layanan Kami
          </h2>
        </ScrollReveal>
        
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, index) => (
            <ScrollReveal
              key={s.title}
              animation="scale-up"
              delay={index * 100}
              duration={600}
            >
              <article
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg h-full"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <ServiceIcon name={s.icon} />
                </span>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {s.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceIcon({ name }: { name: string }) {
  const common = {
    className: "h-6 w-6",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
  } as const;

  if (name === "box") {
    return (
      <svg {...common}>
        <path d="m21 16-9 5-9-5V8l9-5 9 5v8Z" strokeLinejoin="round" />
        <path d="m3 8 9 5 9-5" />
        <path d="M12 13v8" />
      </svg>
    );
  }
  if (name === "stack") {
    return (
      <svg {...common}>
        <path d="m12 2 10 6-10 6L2 8l10-6Z" />
        <path d="m2 14 10 6 10-6" />
      </svg>
    );
  }
  if (name === "drop") {
    return (
      <svg {...common}>
        <path d="M12 2s7 8 7 13a7 7 0 1 1-14 0c0-5 7-13 7-13Z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
