"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Kemitraan", href: "#our-customers" },
  { label: "Keunggulan", href: "#why-choose-us" },
  { label: "Flow", href: "#flow" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "Dokumentasi", href: "#dokumentasi" },
  { label: "Sertifikasi", href: "#sertifikasi" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const logo = "/logo/logo-ikm.png";

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#beranda" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="IKM Laundry"
            width={56}
            height={56}
            className="h-12 w-auto"
            priority
            unoptimized
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="mailto:support@ikmlaundry.com"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
          >
            Konsultasi Sekarang
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-primary-light hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="mailto:support@ikmlaundry.com"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white"
            >
              Konsultasi Sekarang
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
