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
    "Laundry Linen Cibubur",
    "Laundry Healthcare",
    "Laundry linen Healthcare Jabodetabek",
    "Laundry Rumah Sakit",
    "Laundry Hospitality",
    "Sewa Linen Cibubur",
    "Tempat Penyewaan Linen",
    "Peminjaman Linen Cibubur",
    "Sewa Linen Jabodetabek",
    "jasa laundry rumah sakit",
    "hospital laundry Indonesia",
    "linen rental rumah sakit",
    "laundry linen infeksius",
    "laundry rumah sakit Depok",
    "IKM Laundry",
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
