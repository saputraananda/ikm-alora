import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <div className="flex w-full flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-20 px-6 bg-white">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <span className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              404 Error
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
            Halaman tidak ditemukan
          </h1>
          <p className="text-lg text-slate-600 mb-10">
            Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan. Silakan kembali ke halaman utama.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-md hover:shadow-lg hover:bg-primary-dark transition-all"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Kembali ke Halaman Utama
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
