import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Users, Building2, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CountUp } from '@/components/animations/CountUp';
import gsap from 'gsap';

// Import existing video assets
import videoIkm from '@/assets/video/slider-ikm.mp4';
import videoCleanox from '@/assets/video/slider-cleanox.mp4';
import videoWaschen from '@/assets/video/slider-waschen.mp4';

export const Hero = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    { id: 1, name: 'cleanox', src: videoCleanox },
    { id: 2, name: 'waschen', src: videoWaschen },
    { id: 3, name: 'ikm', src: videoIkm },
  ];

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(contentRef.current?.children || [],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.8 }
    );

    gsap.fromTo(statsRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 1.2 }
    );
  }, []);

  const handleNext = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  return (
    <section id="home" className="relative min-h-[800px] lg:h-[850px] flex items-center bg-[#49122E] overflow-hidden font-poppins">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#49122E] via-[#3D0F27] to-[#2D0B1D] z-0" />

      {/* Video Area - Improved Transition */}
      <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentVideo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <video
              src={videos[currentVideo].src}
              autoPlay
              muted
              playsInline
              onEnded={handleNext}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Smoother, non-boxy gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#49122E] via-[#49122E]/60 to-transparent" />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container max-w-[1400px] mx-auto px-8 relative z-10">
        <div className="w-full lg:w-[55%] flex flex-col items-start pt-32 pb-48" ref={contentRef}>
          {/* Eyebrow */}
          <div className="mb-8">
             <span className="text-[#D6A84F] text-[13px] font-semibold uppercase tracking-[0.25em]">
               Integrated Hygiene Excellence
             </span>
          </div>
          
          {/* Headline */}
          <h1 className="text-white text-4xl md:text-5xl lg:text-[52px] font-semibold leading-[1.15] tracking-tight mb-10 max-w-[900px]">
            Premium Laundry and Cleaning Solutions <br />
            for Businesses and Homes
          </h1>

          {/* Description */}
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-[800px] mb-14">
            Kami menghadirkan standar kebersihan terintegrasi yang lebih tinggi, <br />
            untuk lingkungan yang lebih sehat dan hidup yang lebih berkualitas.
          </p>

          {/* Primary Button */}
          <Button 
            className="bg-[#D6A84F] text-[#49122E] hover:bg-[#D6A84F]/90 font-semibold px-10 py-7 rounded-xl text-base shadow-xl group transition-all duration-300"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discover Our Services
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Concave Curve at Bottom with Gold Accent Line Inside */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto translate-y-[3px]"
        >
          <path 
            d="M0,120 L1440,120 L1440,40 C1100,120 340,120 0,40 Z" 
            fill="white"
          />
          {/* Gold Accent Line - Slightly higher than white fill edge */}
          <path 
            d="M0,30 C340,110 1100,110 1440,30" 
            stroke="#D6A84F" 
            strokeWidth="3"
            strokeOpacity="0.8"
          />
        </svg>
      </div>

      {/* Floating Stats Card - Refined sizing and position */}
      <div 
        ref={statsRef}
        className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-40 w-full max-w-[1400px] mx-auto px-8 pointer-events-none flex justify-end"
      >
        <div className="bg-white rounded-[2rem] p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-8 items-center relative overflow-hidden pointer-events-auto max-w-[850px] mr-[-10px]">
          <div className="flex flex-col items-center text-center">
            <Calendar className="h-5 w-5 text-[#D6A84F] mb-3" />
            <span className="text-2xl lg:text-3xl font-semibold text-primary tracking-tighter">
              <CountUp to={2013} from={1990} duration={1.5} />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D6A84F] mt-2">Established</span>
          </div>
          
          <div className="flex flex-col items-center text-center md:border-l md:border-gray-100">
            <Users className="h-5 w-5 text-[#D6A84F] mb-3" />
            <span className="text-2xl lg:text-3xl font-semibold text-primary tracking-tighter">
              <CountUp to={2932} from={2900} suffix="+" duration={15} ease="none" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D6A84F] mt-2">Satisfied Clients</span>
          </div>
          
          <div className="flex flex-col items-center text-center md:border-l md:border-gray-100">
            <Building2 className="h-5 w-5 text-[#D6A84F] mb-3" />
            <span className="text-2xl lg:text-3xl font-semibold text-primary tracking-tighter">
              <CountUp to={15} suffix="+" duration={1} />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D6A84F] mt-2">Years of Experience</span>
          </div>
          
          <div className="flex flex-col items-center text-center md:border-l md:border-gray-100">
            <ShieldCheck className="h-5 w-5 text-[#D6A84F] mb-3" />
            <span className="text-2xl lg:text-3xl font-semibold text-primary tracking-tighter">Trusted</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D6A84F] mt-2">By Leaders</span>
          </div>
        </div>
      </div>
    </section>
  );
};
