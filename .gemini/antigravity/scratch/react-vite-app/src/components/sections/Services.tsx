import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { HeartHandshake, ArrowRight } from 'lucide-react';
import { GradientText } from '@/components/animations/GradientText';
import { AnimatedContent } from '@/components/animations/AnimatedContent';
import { motion } from 'framer-motion';
import cleanoxImg from '@/assets/services/services-cleanox.png';
import ikmImg from '@/assets/services/services-ikm.png';
import waschenImg from '@/assets/services/services-waschen.png';
import cleanoxLogo from '@/assets/logo/cleanox.png';
import ikmLogo from '@/assets/logo/ikm.png';
import waschenLogo from '@/assets/logo/waschen.png';
import type { FC } from 'react';

export const Services: FC = () => {
  const items = [
    {
      title: "Hospital Laundry",
      subtitle: "PT Intersolusi Karya Mandiri",
      description: "Medical-grade laundry with infection control standards, linen management system, and SLA-based operations",
      image: ikmImg,
      logo: ikmLogo,
      tag: "PT IKM"
    },
    {
      title: "Commercial Laundry",
      subtitle: "Waschen Laundry",
      description: "Large-scale laundry with hygienic processes, real-time tracking system, pickup and delivery, and operational guarantees",
      image: waschenImg,
      logo: waschenLogo,
      tag: "Waschen Laundry"
    },
    {
      title: "Home and Office Cleaning",
      subtitle: "Cleanox",
      description: "Deep cleaning using antibacterial and mite-removing hydro cleaner vacuums, safe for residential and work environments",
      image: cleanoxImg,
      logo: cleanoxLogo,
      tag: "Cleanox"
    },
  ];

  return (
    <section id="services" className="py-32 px-8 bg-white overflow-hidden relative">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/10 bg-primary/5 mb-8 group cursor-default"
          >
             <HeartHandshake className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
             <span className="text-[12px] font-semibold uppercase tracking-[0.4em] text-primary">Service Excellence</span>
          </motion.div>
          
          <div className="max-w-4xl">
            <AnimatedContent distance={20}>
              <GradientText colors={["#49122E", "#D6A84F", "#49122E"]} animationSpeed={8}>
                <h3 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-8 leading-tight">
                  Integrated Solutions For Every Need
                </h3>
              </GradientText>
            </AnimatedContent>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1.5 bg-[#D6A84F] rounded-full mx-auto" 
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <AnimatedContent key={i} delay={i * 0.15} distance={30}>
              <CardContainer className="inter-var">
                <CardBody className="bg-white relative group/card hover:shadow-2xl hover:shadow-primary/[0.08] border border-gray-100 w-full md:max-w-[420px] h-auto rounded-[2.5rem] p-0 overflow-hidden transition-all duration-500">
                  <CardItem
                    translateZ="50"
                    className="w-full relative h-72"
                  >
                    <img
                      src={item.image}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                      alt={item.title}
                    />
                    {/* Floating Logo Box */}
                    <div className="absolute -bottom-10 left-8 h-20 w-20 bg-white rounded-2xl shadow-xl flex items-center justify-center p-4 border border-gray-100 group-hover/card:translate-y-[-5px] transition-transform duration-500">
                      <img src={item.logo} alt={item.tag} className="w-full h-full object-contain" />
                    </div>
                  </CardItem>

                  <div className="p-10 pt-16">
                    <CardItem
                      translateZ="60"
                      className="text-2xl font-semibold text-primary mb-2 tracking-tight"
                    >
                      {item.title}
                    </CardItem>
                    
                    <CardItem
                      translateZ="70"
                      className="text-[14px] font-semibold text-[#D6A84F] mb-6"
                    >
                      {item.subtitle}
                    </CardItem>

                    <CardItem
                      as="p"
                      translateZ="80"
                      className="text-primary/70 text-base leading-relaxed mb-10 font-medium"
                    >
                      {item.description}
                    </CardItem>

                    <CardItem
                      translateZ="100"
                    >
                      <button className="flex items-center gap-2 text-[14px] font-semibold text-[#49122E] group/btn hover:translate-x-2 transition-all duration-300">
                        Discover Service
                        <ArrowRight className="h-4 w-4" />
                        <div className="h-px w-0 bg-[#49122E] group-hover/btn:w-full transition-all duration-300" />
                      </button>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};
