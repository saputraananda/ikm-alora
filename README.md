# IKM Laundry

Website resmi **IKM Laundry**, unit usaha laundry rumah sakit dan linen rental dari Alora Group.
Domain: https://ikmlaundry.com

## Tentang

IKM Laundry melayani kebutuhan linen sektor kesehatan dan perhotelan (B2B) di wilayah Cibubur
dan Jabodetabek: laundry rumah sakit, linen rental, serta pengelolaan linen infeksius dan
non-infeksius. Website ini menampilkan layanan, standar mutu, dan referensi pelanggan untuk
calon klien institusi.

Halaman utama (single page) memuat: hero, layanan, jenis linen, perbandingan kondisi linen
(slider before/after), alur proses, sertifikasi, dokumentasi, keberlanjutan, pelanggan,
testimoni, dan CTA.

## Teknologi

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4
- Framer Motion, React Spring, Lucide React

## Menjalankan

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # build produksi (webpack)
npm run build:turbo  # build produksi (Turbopack)
npm run start
npm run lint
```

## Struktur

```
src/app/
  page.tsx, layout.tsx   halaman utama dan metadata
  components/            seksi halaman (Hero, Services, Flow, Certifications, dll.)
  components/ReactBits/  komponen animasi
  services/, logo/       gambar layanan dan logo
  robots.ts, sitemap.ts  SEO
public/                  aset statis
```

## SEO

Metadata, `robots`, dan `sitemap` diatur di `src/app`. Ubah domain di `metadataBase` pada
`src/app/layout.tsx` bila domain berubah.
