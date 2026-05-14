import { Leaf, Droplets, Zap } from 'lucide-react';
import { AnimatedContent } from '@/components/animations/AnimatedContent';
import type { FC } from 'react';

export const Sustainability: FC = () => {
  return (
    <section id="sustainability" className="py-24 px-8 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <AnimatedContent distance={40} direction="horizontal" reverse={true}>
          <div className="flex items-center gap-3 mb-8">
             <div className="h-10 w-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                <Leaf className="h-5 w-5" />
             </div>
             <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-primary opacity-50">Sustaining the Future</h2>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-semibold text-primary mb-10 tracking-tight leading-tight">Environmental Responsibility</h3>
          
          <p className="text-lg text-primary/70 leading-relaxed mb-12 max-w-lg font-medium">
            We are committed to environmentally responsible operations through energy efficiency, water-conscious processes, and safe chemical usage.
          </p>
          
          <div className="grid grid-cols-1 gap-6">
            <AnimatedContent delay={0.2} distance={20}>
              <div className="group flex items-start gap-6 p-8 bg-gray-50 rounded-[2.5rem] transition-all hover:bg-white hover:shadow-xl hover:shadow-black/5">
                 <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                    <Zap className="h-6 w-6" />
                 </div>
                 <div>
                    <h4 className="font-semibold text-primary mb-1">Energy Efficiency</h4>
                    <p className="text-sm text-primary/50 font-medium">High-performance machinery with low energy consumption.</p>
                 </div>
              </div>
            </AnimatedContent>
            
            <AnimatedContent delay={0.3} distance={20}>
              <div className="group flex items-start gap-6 p-8 bg-gray-50 rounded-[2.5rem] transition-all hover:bg-white hover:shadow-xl hover:shadow-black/5">
                 <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                    <Droplets className="h-6 w-6" />
                 </div>
                 <div>
                    <h4 className="font-semibold text-primary mb-1">Water Conscious</h4>
                    <p className="text-sm text-primary/50 font-medium">Water recycling systems and optimized processing cycles.</p>
                 </div>
              </div>
            </AnimatedContent>
          </div>
        </AnimatedContent>
        
        <AnimatedContent distance={40} direction="horizontal">
          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-[4rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
               <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-semibold italic">
                  Sustainability Image
               </div>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-green-500/5 rounded-full blur-3xl -z-10" />
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};
