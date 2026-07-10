import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClickSpark from "./components/ReactBits/ClickSpark";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jasa Laundry Rumah Sakit & Linen Rental Profesional | IKM Laundry",
  description:
    "IKM Laundry menyediakan jasa laundry rumah sakit, linen rental, pengelolaan linen infeksius dan non-infeksius untuk wilayah Cibubur, Jabodetabek. Laundry Healthcare & Hospitality terpercaya.",
  keywords: [
    "laundry rumah sakit Cibubur",
    "laundry rumah sakit Jakarta",
    "laundry rumah sakit Bekasi",
    "laundry rumah sakit Bogor",
    "laundry rumah sakit Depok",
    "laundry rumah sakit Tangerang",
    "laundry rumah sakit Jabodetabek",
    "laundry medis Jakarta",
    "laundry medis Cibubur",
    "linen rental Jakarta",
    "jasa laundry rumah sakit",
    "laundry medis",
    "laundry linen rumah sakit",
    "linen rental",
    "sewa linen rumah sakit",
    "laundry industrial",
    "laundry komersial",
    "laundry fasilitas kesehatan",
    "laundry klinik",
    "laundry puskesmas",
    "vendor laundry rumah sakit",
    "penyedia laundry rumah sakit",
    "perusahaan laundry medis",
    "supplier linen rumah sakit",
    "penyedia linen rumah sakit",
    "mitra laundry rumah sakit",
    "outsourcing laundry rumah sakit",
    "laundry rumah sakit terpercaya",
    "laundry medis terpercaya",
    "vendor laundry terpercaya",
    "laundry profesional",
    "perusahaan laundry profesional",
    "laundry bersertifikat",
    "laundry standar rumah sakit",
    "laundry sesuai SOP",
    "laundry kapasitas besar",
    "industrial laundry kapasitas besar",
    "laundry volume besar",
    "laundry skala industri",
    "laundry linen massal",
    "laundry linen harian",
    "laundry untuk rumah sakit besar",
    "laundry rumah sakit",
    "laundry klinik",
    "laundry puskesmas",
    "laundry laboratorium",
    "laundry fasilitas kesehatan",
    "laundry healthcare",
    "laundry hotel",
    "laundry apartemen",
    "laundry perusahaan",
    "bagaimana proses laundry rumah sakit",
    "standar laundry rumah sakit",
    "pengelolaan linen rumah sakit",
    "apa itu laundry medis",
    "cara memilih vendor laundry rumah sakit",
    "SOP laundry rumah sakit",
    "linen infeksius",
    "linen non infeksius",
    "sterilisasi linen rumah sakit",
    "IKM Laundry",
    "IKM Laundry rumah sakit",
    "IKM Laundry Indonesia",
    "IKM Laundry Cibubur",
    "IKM Laundry linen rental",
    "Laundry Linen Cibubur",
    "Laundry Healthcare",
    "Laundry linen Healthcare Jabodetabek",
    "Laundry Rumah Sakit",
    "Laundry Hospitality",
    "Sewa Linen Cibubur",
    "Tempat Penyewaan Linen",
    "Peminjaman Linen Cibubur",
    "Sewa Linen Jabodetabek",
    "hospital laundry Indonesia",
    "linen rental rumah sakit",
    "laundry linen infeksius",
    "laundry rumah sakit Depok"
  ],
  metadataBase: new URL("https://ikmlaundry.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jasa Laundry Rumah Sakit & Linen Rental Profesional | IKM Laundry",
    description:
      "IKM Laundry menyediakan jasa laundry rumah sakit, linen rental, pengelolaan linen infeksius dan non-infeksius untuk wilayah Cibubur, Jabodetabek. Laundry Healthcare & Hospitality terpercaya.",
    url: "https://ikmlaundry.com",
    siteName: "IKM Laundry",
    images: [
      {
        url: "/logo/logo-ikm.png",
        width: 1200,
        height: 630,
        alt: "IKM Laundry - Jasa Laundry Rumah Sakit & Linen Rental Profesional",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Laundry Rumah Sakit & Linen Rental Profesional | IKM Laundry",
    description:
      "IKM Laundry menyediakan jasa laundry rumah sakit, linen rental, pengelolaan linen infeksius dan non-infeksius untuk wilayah Cibubur, Jabodetabek.",
    images: ["/logo/logo-ikm.png"],
    creator: "@IKMLaundry",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0e7c8a" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 overflow-x-hidden">
        <ClickSpark />
        {children}
      </body>
    </html>
  );
}
