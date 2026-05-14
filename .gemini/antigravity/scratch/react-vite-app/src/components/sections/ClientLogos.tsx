import { LogoLoop } from '@/components/animations/LogoLoop';
import ekaHospital from '@/assets/eka-hospital.png';
import bundaLogo from '@/assets/bunda-logo.png';
import columbiaHospital from '@/assets/columbia-asia.png';
import grandFamily from '@/assets/grand-family.png';
import tuguIbu from '@/assets/tugu-ibu.png';
import permataCibubur from '@/assets/permata-cibubur.png';

export const ClientLogos = () => {
  const clients = [
    { name: 'RS Eka Hospital Depok', logo: ekaHospital },
    { name: 'RS Eka Hospital Cibubur', logo: ekaHospital },
    { name: 'RS Eka Hospital BSD', logo: ekaHospital },
    { name: 'RS Eka Hospital Bekasi', logo: ekaHospital },
    { name: 'RS Eka Hospital MT Haryono', logo: ekaHospital },
    { name: 'RS Eka Hospital Permata Hijau', logo: ekaHospital },
    { name: 'RSU Bunda Margonda', logo: bundaLogo },
    { name: 'RSU Bunda Jakarta', logo: bundaLogo },
    { name: 'RSIA Bunda Jakarta', logo: bundaLogo },
    { name: 'RSIA Family Pluit', logo: ekaHospital },
    { name: 'Columbia Hospital', logo: columbiaHospital },
    { name: 'RSIA Grand Family PIK', logo: grandFamily },
    { name: 'RS Tugu Ibu', logo: tuguIbu },
    { name: 'RSIA Permata Cibubur', logo: permataCibubur },
  ];

  return (
    <section id="institutions" className="pt-32 pb-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary mb-4">
           <span className="text-[10px] font-semibold uppercase tracking-widest">Our Network</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold text-primary tracking-tight">
          Trusted by <span className="text-[#D6A84F]">Leading Institutions</span>
        </h3>
      </div>
      <LogoLoop logos={clients} />
    </section>
  );
};
