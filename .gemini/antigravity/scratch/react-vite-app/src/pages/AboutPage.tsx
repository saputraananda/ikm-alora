import type { FC } from 'react';
import { AnimatedContent } from '@/components/animations/AnimatedContent';
import { motion } from 'framer-motion';

export const AboutPage: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-[#49122E] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#49122E] to-[#2D0B1D] z-0" />
        <div className="container max-w-[1400px] mx-auto px-8 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#D6A84F] text-[12px] font-bold uppercase tracking-[0.4em] mb-6 block"
          >
            Our Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-8"
          >
            Redefining <span className="text-[#D6A84F]">Hygiene Excellence</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="container max-w-[1400px] mx-auto">
          <AnimatedContent distance={30} direction="vertical">
            <div className="max-w-4xl mx-auto text-primary/80 leading-relaxed font-medium space-y-8 text-lg">
              <p>
                Waschen Alora Indonesia is a premium holding company dedicated to providing integrated laundry and cleaning solutions. 
                With a focus on healthcare, hospitality, and residential sectors, we deliver hygiene excellence through our specialized business units.
              </p>
              <p>
                Our mission is to elevate hygiene standards across Indonesia by combining medical-grade precision with modern efficiency and empathy. Since 2013, we have been a trusted partner for leading medical institutions and businesses.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
                <div className="p-10 bg-gray-50 rounded-[2.5rem]">
                   <h3 className="text-xl font-bold text-primary mb-4">Our Vision</h3>
                   <p className="text-primary/60 text-base">To become the benchmark for professional hygiene and integrated cleaning services in Southeast Asia.</p>
                </div>
                <div className="p-10 bg-gray-50 rounded-[2.5rem]">
                   <h3 className="text-xl font-bold text-primary mb-4">Our Values</h3>
                   <p className="text-primary/60 text-base">Precision, Empathy, and Integrity drive every operational decision we make, every single day.</p>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>
    </div>
  );
};
