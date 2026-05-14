import { CircularGallery } from '@/components/animations/CircularGallery';
import { Modal, ModalBody, ModalContent, ModalTrigger } from '@/components/ui/animated-modal';
import { Camera } from 'lucide-react';
import type { FC } from 'react';

export const Gallery: FC = () => {
  const items = Array.from({ length: 8 }, (_, i) => `Item ${i + 1}`);

  return (
    <section id="institutions" className="pt-32 pb-16 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.5em] text-primary mb-8 opacity-40">Gallery</h2>
          <h3 className="text-4xl md:text-6xl font-semibold text-foreground mb-10 tracking-tight leading-none">Visualizing<br/>Excellence</h3>
          <p className="text-lg text-primary/70 leading-relaxed mb-12 max-w-lg font-medium">
            We are committed to environmentally responsible operations through energy efficiency, water-conscious processes, and safe chemical usage.
          </p>
          
          <Modal>
            <ModalTrigger className="bg-primary text-white flex items-center gap-3 px-8 h-16 rounded-full font-semibold shadow-lg shadow-primary/20 hover:scale-105 transition-all">
              <Camera className="h-5 w-5" />
              View Facility Gallery
            </ModalTrigger>
            <ModalBody>
              <ModalContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center text-xs font-semibold text-gray-300 italic">
                      Facility {i + 1}
                    </div>
                  ))}
                </div>
                <div className="mt-10 p-6 bg-primary/5 rounded-3xl border border-primary/10">
                   <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      Social Media Updates
                   </h4>
                   <p className="text-xs text-primary/60 font-semibold">Get real-time updates on our operations and community impact @waschenalora</p>
                </div>
              </ModalContent>
            </ModalBody>
          </Modal>
        </div>
        
        <div className="lg:w-2/3 w-full">
           <CircularGallery items={items} />
        </div>
      </div>
    </section>
  );
};
