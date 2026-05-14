import { Button } from '@/components/ui/button';
import { StarBorder } from '@/components/animations/StarBorder';
import { MagicRing } from '@/components/animations/MagicRing';
import { MessageSquare, Mail, Phone, Send } from 'lucide-react';
import type { FC } from 'react';

export const ContactSection: FC = () => {
  return (
    <section id="contact" className="py-24 px-8 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-primary mb-6 opacity-50">Connect</h2>
          <h3 className="text-3xl md:text-5xl font-semibold text-primary mb-8 tracking-tight leading-tight">Partner with the<br/>Hygiene Experts</h3>
          <p className="text-lg text-primary/70 leading-relaxed mb-12 max-w-lg font-medium">
            Looking for a reliable laundry or cleaning partner? Our team is ready to provide a tailored solution for your business.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-center gap-5 p-2 transition-transform hover:translate-x-2 cursor-default">
               <div className="h-14 w-14 bg-primary/5 flex items-center justify-center text-primary rounded-[1.25rem]">
                  <Phone className="h-6 w-6" />
               </div>
               <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#D6A84F] mb-1">WhatsApp</p>
                  <p className="text-base font-semibold text-primary">+62 851-2233-3371</p>
               </div>
            </div>
            <div className="flex items-center gap-5 p-2 transition-transform hover:translate-x-2 cursor-default">
               <div className="h-14 w-14 bg-primary/5 flex items-center justify-center text-primary rounded-[1.25rem]">
                  <Mail className="h-6 w-6" />
               </div>
               <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#D6A84F] mb-1">Email</p>
                  <p className="text-base font-semibold text-primary">support@waschen.com</p>
               </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-primary/5 rounded-[3rem] rotate-3 -z-10" />
          <div className="bg-white border border-gray-100 p-10 md:p-14 rounded-[3rem] shadow-2xl relative">
            <div className="flex items-center gap-4 mb-10">
               <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <Send className="h-5 w-5" />
               </div>
               <h4 className="text-2xl font-semibold text-primary">Service Request</h4>
            </div>
            
            <div className="space-y-6">
               <Button className="w-full h-16 bg-primary hover:bg-primary/90 text-white text-base font-semibold rounded-full flex gap-3 items-center justify-center shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95 group">
                  Send Inquiry
               </Button>
               
               <Button variant="ghost" className="w-full h-16 text-primary hover:bg-primary/5 text-base font-semibold rounded-full transition-all">
                  Request Detailed Proposal
               </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gray-50/50 -z-20 rounded-tl-[10rem]" />
    </section>
  );
};
