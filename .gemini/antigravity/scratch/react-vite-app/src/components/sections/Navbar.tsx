import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoAlora from '@/assets/logo-new-landscape.png';
import { Button } from '@/components/ui/button';
import { Menu, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { FC } from 'react';

export const Navbar: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('/#', '').replace('#', '');
    
    if (location.pathname !== '/') {
      navigate('/#' + targetId);
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', href: '/', type: 'link' },
    { name: 'Services', href: '/#services', type: 'anchor' },
    { name: 'Careers', href: '/careers', type: 'link' },
    { name: 'Contact Us', href: '/contact', type: 'link' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-8 ${
      isScrolled 
        ? "py-4 bg-white shadow-md border-b border-gray-100" 
        : "py-6 bg-transparent"
    }`}>
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center group cursor-pointer">
            <img 
              src={logoAlora} 
              alt="Waschen Alora Indonesia" 
              className={`h-9 w-auto object-contain transition-all duration-500 group-hover:scale-105 ${
                !isScrolled ? "brightness-0 invert" : ""
              }`}
            />
          </Link>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden md:flex flex-nowrap items-center gap-2 lg:gap-6">
          {navLinks.map((link) => (
            link.type === 'link' ? (
              <Link
                key={link.name}
                to={link.href}
                className={`text-[15px] font-medium tracking-wide transition-all duration-300 px-3 py-2 rounded-md whitespace-nowrap ${
                  isScrolled 
                    ? "text-[#374151] hover:text-primary hover:bg-black/5" 
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            ) : (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[15px] font-medium tracking-wide transition-all duration-300 px-3 py-2 rounded-md whitespace-nowrap ${
                  isScrolled 
                    ? "text-[#374151] hover:text-primary hover:bg-black/5" 
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </a>
            )
          ))}
        </div>
        
        {/* Right: CTA / Mobile Menu */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <Button 
            variant="default" 
            className={`hidden md:flex rounded-full px-6 h-10 text-[13px] font-semibold transition-all group overflow-hidden relative ${
              isScrolled 
                ? "bg-primary text-white hover:bg-primary/90" 
                : "bg-white text-primary hover:bg-white/90"
            }`}
          >
            <span className="relative z-10">Open to Partnership</span>
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1],
                filter: ["drop-shadow(0 0 0px #FFFFFF)", "drop-shadow(0 0 8px #FFFFFF)", "drop-shadow(0 0 0px #FFFFFF)"]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="ml-2 relative z-10"
            >
              <Sparkles className={`h-4 w-4 ${isScrolled ? "fill-white" : "fill-primary"}`} />
            </motion.div>
          </Button>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className={`rounded-full ${isScrolled ? "hover:bg-black/5 text-gray-700" : "hover:bg-white/10 text-white"}`}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
