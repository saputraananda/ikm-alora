import { Link } from 'react-router-dom';
import logoAlora from '@/assets/logo-new-landscape.png';
import type { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 px-6 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -mr-48 -mt-48" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center group cursor-pointer mb-8">
              <img 
                src={logoAlora} 
                alt="Waschen Alora Indonesia" 
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105 brightness-0 invert"
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs font-medium">
              Integrated commercial laundry and cleaning solutions for B2B and B2C sectors. Precision, hygiene, and trust in every service.
            </p>
          </div>
          
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] mb-10 text-white/20">Platform</h3>
            <ul className="space-y-4">
              <li><Link to="/#services" className="text-sm font-semibold text-white/60 hover:text-white transition-colors">Service Units</Link></li>
              <li><Link to="/#sustainability" className="text-sm font-semibold text-white/60 hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/contact" className="text-sm font-semibold text-white/60 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] mb-10 text-white/20">Solutions</h3>
            <ul className="space-y-4">
              <li><Link to="/#services" className="text-sm font-semibold text-white/60 hover:text-white transition-colors">Hospital Laundry</Link></li>
              <li><Link to="/#services" className="text-sm font-semibold text-white/60 hover:text-white transition-colors">Commercial Laundry</Link></li>
              <li><Link to="/#services" className="text-sm font-semibold text-white/60 hover:text-white transition-colors">Home Cleaning</Link></li>
              <li><Link to="/#services" className="text-sm font-semibold text-white/60 hover:text-white transition-colors">Office Cleaning</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] mb-10 text-white/20">Operational</h3>
            <p className="text-sm font-semibold text-white/60 leading-relaxed max-w-[200px]">
              Jakarta HQ<br />
              Centers across West & Central Java, Indonesia.
            </p>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20">
          <p>© 2025 Waschen Alora Indonesia. All rights reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
