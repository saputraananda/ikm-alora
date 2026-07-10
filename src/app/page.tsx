import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurCustomers from "./components/OurCustomers";
import WhyChooseUs from "./components/WhyChooseUs";
import Flow from "./components/Flow";
import Testimonials from "./components/Testimonials";
import { Sustainability } from "./components/Sustainability";
import Documentation from "./components/Documentation";
import Certifications from "./components/Certifications";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://ikmlaundry.com/#organization",
        name: "IKM Laundry",
        url: "https://ikmlaundry.com",
        logo: "https://ikmlaundry.com/logo/logo-ikm.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+628118871101",
          contactType: "customer service",
          availableLanguage: ["Indonesian", "English"],
          email: "support@ikmlaundry.com"
        },
        sameAs: [
          "https://www.facebook.com/ikmlaundry",
          "https://www.instagram.com/ikmlaundry"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://ikmlaundry.com/#localbusiness",
        name: "IKM Laundry",
        image: "https://ikmlaundry.com/logo/logo-ikm.png",
        url: "https://ikmlaundry.com",
        telephone: "+628118871101",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Cibubur",
          addressLocality: "Depok",
          addressRegion: "Banten",
          postalCode: "16934",
          addressCountry: "ID"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -6.3333,
          longitude: 106.8
        },
        areaServed: [
          {
            "@type": "City",
            name: "Cibubur"
          },
          {
            "@type": "City",
            name: "Jakarta"
          },
          {
            "@type": "City",
            name: "Bekasi"
          },
          {
            "@type": "City",
            name: "Bogor"
          },
          {
            "@type": "City",
            name: "Depok"
          },
          {
            "@type": "City",
            name: "Tangerang"
          },
          {
            "@type": "State",
            name: "Jabodetabek"
          }
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            opens: "00:00",
            closes: "23:59"
          }
        ],
        serviceType: [
          "Laundry Rumah Sakit",
          "Laundry Healthcare",
          "Laundry Hospitality",
          "Linen Rental",
          "Sewa Linen",
          "Laundry Medis",
          "Laundry Industrial",
          "Laundry Komersial",
          "Laundry Klinik",
          "Laundry Puskesmas",
          "Laundry Laboratorium",
          "Outsourcing Laundry Rumah Sakit",
          "Pengelolaan Linen Rumah Sakit",
          "Sterilisasi Linen Rumah Sakit",
          "Laundry Linen Infeksius",
          "Laundry Linen Non Infeksius",
          "Laundry Hotel",
          "Laundry Apartemen",
          "Laundry Perusahaan"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://ikmlaundry.com/#website",
        url: "https://ikmlaundry.com",
        name: "IKM Laundry",
        publisher: { "@id": "https://ikmlaundry.com/#organization" },
        inLanguage: "id-ID"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="flex w-full flex-col">
        <TopBar />
        <Navbar />
        <main className="flex-1">
          <Hero />
          <OurCustomers />
          <WhyChooseUs />
          <Flow />
          <Sustainability />
          <Testimonials />
          <Documentation />
          <Certifications />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
