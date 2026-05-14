import { AnimatedContent } from '@/components/animations/AnimatedContent';
import { motion } from 'framer-motion';
import type { FC } from 'react';

export const BrandStatement: FC = () => {
  return (
    <section className="py-32 px-8 bg-white overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto text-center relative z-10">
        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.2em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.4em' }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase text-[#D6A84F] block mb-10 transition-all duration-1000"
          >
            Our Core Philosophy
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative inline-block"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary tracking-tighter leading-none mb-4">
              Total Care for <span className="text-[#D6A84F]">Happy Life</span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1 bg-[#D6A84F]/20 absolute bottom-0 left-0"
            />
          </motion.div>
        </div>

        <div className="h-1 w-24 bg-[#D6A84F]/20 mx-auto mb-16 rounded-full" />

        <AnimatedContent distance={20} delay={0.2}>
          <h3 className="text-2xl md:text-4xl font-semibold text-primary mb-12 leading-tight tracking-tight max-w-4xl mx-auto">
            "We Deliver Trust, Precision, and Empathy in Every Service."
          </h3>
        </AnimatedContent>

        <AnimatedContent distance={20} delay={0.4}>
          <p className="text-lg lg:text-xl text-primary/60 leading-relaxed max-w-2xl mx-auto font-medium">
            Integrated solutions through precise processes and reliable operations. We don't just clean; we care for the health and comfort of our clients.
          </p>
        </AnimatedContent>
      </div>

      {/* Subtle interactive background elements */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#D6A84F]/5 rounded-full blur-[100px] translate-x-1/2 -z-10"
      />
    </section>
  );
};
