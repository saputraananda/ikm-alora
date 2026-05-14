import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import type { FC } from 'react';

const testimonials = [
  // Session 1
  {
    quote: "The level of hygiene and infection control in their hospital laundry service is exceptional. They truly understand the critical nature of healthcare operations.",
    name: "Dr. Sarah Mitchell",
    designation: "Operations Director, RS Bunda Group",
  },
  {
    quote: "Waschen Alora has been our trusted partner for years. Their commercial laundry service is efficient, reliable, and consistent in quality.",
    name: "Robert Henderson",
    designation: "General Manager, Harris Hotel",
  },
  {
    quote: "The deep cleaning service from Cleanox transformed our office space. Professional team and environmentally safe processes made a huge difference.",
    name: "Amanda Widjaja",
    designation: "Facility Manager, Corporate HQ",
  },
  // Session 2
  {
    quote: "Professional, punctual, and very thorough. The team at Cleanox exceeded our expectations for our residential deep cleaning.",
    name: "Michael Chen",
    designation: "Residential Client",
  },
  {
    quote: "Their linen management system has saved us hours of manual work every week. Highly recommended for any large-scale institution.",
    name: "Siti Aminah",
    designation: "Logistics Head, RS Eka Hospital",
  },
  {
    quote: "Excellent service with a personal touch. They handle our delicate linens with such care and precision.",
    name: "David Kurniawan",
    designation: "Owner, Boutique Villa",
  },
  // Session 3
  {
    quote: "Cleanox provides the most thorough cleaning we've ever had. Their hydro-cleaner technology is truly a game changer for allergies.",
    name: "Kartika Sari",
    designation: "Mother & Homemaker",
  },
  {
    quote: "Integrated solutions that actually work. Waschen Alora understands the synergy between laundry and hygiene better than anyone.",
    name: "Hendra Wijaya",
    designation: "COO, Hospitality Group",
  },
  {
    quote: "The response time for any issues is incredibly fast. Their 24/7 support is not just a marketing claim.",
    name: "Rina Pratama",
    designation: "Operations Manager",
  },
  // Session 4
  {
    quote: "Consistency is key in our business, and Waschen Alora delivers it every single day without fail.",
    name: "Jonathan Steele",
    designation: "Hotel Manager",
  },
  {
    quote: "Medical grade means peace of mind. We trust them with our most sensitive equipment and linens.",
    name: "Dr. Anton Subagyo",
    designation: "Medical Director",
  },
  {
    quote: "Sustainability and quality go hand in hand here. We love their environmentally friendly approach to cleaning.",
    name: "Elena Rodriguez",
    designation: "Eco-Resort Manager",
  }
];

export const TestimonialsSection: FC = () => {
  const [session, setSession] = useState(0);
  const totalSessions = 4;
  const cardsPerSession = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setSession((prev) => (prev + 1) % totalSessions);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonials = testimonials.slice(
    session * cardsPerSession,
    (session + 1) * cardsPerSession
  );

  return (
    <section className="py-32 px-8 bg-white overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Star className="h-3 w-3 fill-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Voices of Trust</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-semibold text-primary tracking-tight leading-[1.1]">
              What Our Partners <br/><span className="text-primary/40">Say About Us.</span>
            </h3>
          </div>
          <div className="flex gap-3 mb-4">
            {[...Array(totalSessions)].map((_, i) => (
              <button
                key={i}
                onClick={() => setSession(i)}
                className={`h-2 transition-all duration-500 rounded-full ${
                  i === session ? "w-12 bg-primary" : "w-3 bg-primary/10 hover:bg-primary/20"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={session}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {currentTestimonials.map((t, i) => (
                <div key={i} className="group relative h-full">
                  <div className="bg-gray-50/50 p-10 rounded-[3rem] shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 hover:bg-white">
                    <div className="mb-6 flex gap-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star key={starIndex} className="h-5 w-5 fill-[#D6A84F] text-[#D6A84F]" />
                      ))}
                    </div>
                    
                    <p className="text-lg font-medium text-primary/80 leading-relaxed mb-10 flex-1 italic">
                      "{t.quote}"
                    </p>
                    
                    <div className="pt-8 border-t border-gray-100 mt-auto">
                      <h4 className="font-semibold text-primary text-lg">{t.name}</h4>
                      <p className="text-xs font-semibold text-primary/60 uppercase tracking-widest mt-1">{t.designation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
