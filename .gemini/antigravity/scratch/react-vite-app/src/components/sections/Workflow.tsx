import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import servicesAll from '@/assets/services-all.png';
import type { FC } from 'react';

export const Workflow: FC = () => {
  return (
    <section className="bg-white overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.5em] text-primary opacity-40">Our Operations</h2>
            <h3 className="text-4xl md:text-7xl font-semibold text-primary leading-none tracking-tighter">
              Precision Process <br />
              <span className="text-primary/20">Scalable Quality</span>
            </h3>
          </div>
        }
      >
        <div className="h-full w-full bg-gray-50 flex items-center justify-center relative group overflow-hidden">
           <img 
             src={servicesAll} 
             alt="Services Overview" 
             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
           <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
           
           <div className="absolute bottom-10 left-10 p-8 bg-white/80 backdrop-blur-md rounded-3xl border border-white shadow-2xl max-w-md">
              <h4 className="font-semibold text-primary mb-2 uppercase tracking-widest text-xs">Our Unit Services</h4>
              <p className="text-sm text-primary/70 leading-relaxed font-medium">More than just service, we deliver consistency, care, and precision in every piece</p>
           </div>
        </div>
      </ContainerScroll>
    </section>
  );
};
