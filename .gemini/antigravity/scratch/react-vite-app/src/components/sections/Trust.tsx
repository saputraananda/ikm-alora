import { AnimatedContent } from '@/components/animations/AnimatedContent';
import { ArrowRight, Shield, Zap, Leaf, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import type { FC } from 'react';

export const Trust: FC = () => {
  const highlights = [
    { title: "Premium Quality Service", icon: Shield, color: "text-amber-600", bg: "bg-amber-50", delay: 0.1 },
    { title: "Advanced Hygiene Standards", icon: Award, color: "text-amber-600", bg: "bg-amber-50", delay: 0.2 },
    { title: "Scalable & Reliable Operations", icon: Zap, color: "text-amber-600", bg: "bg-amber-50", delay: 0.3 },
    { title: "Eco-friendly & Responsible", icon: Leaf, color: "text-amber-600", bg: "bg-amber-50", delay: 0.4 }
  ];

  return (
    <section className="pt-48 pb-32 px-8 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Left Column: Content */}
          <div className="lg:w-1/2">
            <AnimatedContent distance={30} direction="vertical">
              <div className="flex flex-col items-start">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-[#D6A84F] text-[11px] font-semibold uppercase tracking-[0.3em] mb-6"
                >
                  About Us
                </motion.span>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-8 leading-tight tracking-tight"
                >
                  Integrated Hygiene <br />
                  Excellence since <span className="text-[#D6A84F]">2013.</span>
                </motion.h3>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="h-1 bg-[#D6A84F] mb-8 rounded-full" 
                />
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-primary/70 text-base lg:text-lg leading-relaxed mb-10 max-w-lg"
                >
                  Waschen Alora provides reliable, hygienic, and integrated laundry and cleaning solutions specifically tailored to your needs. We are committed to improving quality of life through higher hygiene standards.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <Button variant="outline" className="rounded-full px-8 py-6 border-primary text-primary hover:bg-primary hover:text-white transition-all group shadow-sm hover:shadow-md">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </div>
            </AnimatedContent>
          </div>

          {/* Right Column: Key Benefits Card */}
          <div className="lg:w-1/2 w-full">
            <AnimatedContent delay={0.2} distance={30} direction="vertical">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-10 lg:p-12 rounded-[2.5rem] shadow-[0_30px_70px_rgba(0,0,0,0.06)] border border-gray-100 relative overflow-hidden group"
              >
                {/* Background decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D6A84F]/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#D6A84F]/10 transition-colors" />
                
                <span className="text-[#D6A84F] text-[10px] font-semibold uppercase tracking-[0.3em] block mb-10">Our Core Values</span>
                
                <div className="space-y-8">
                  {highlights.map((item, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: item.delay }}
                      className="flex items-center gap-6 group/item"
                    >
                      <div className={`h-12 w-12 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-500 shadow-sm`}>
                        <item.icon className="h-6 w-6" />
                      </div>
                      <span className="text-base font-semibold text-primary/80 group-hover/item:text-primary transition-colors">{item.title}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  );
};
