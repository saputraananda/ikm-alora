import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, HelpCircle, Clock, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AnimatedContent } from '@/components/animations/AnimatedContent';
import type { FC } from 'react';

const faqItems = [
  { q: "How long does it take to get a partnership proposal?", a: "Typically, we respond to initial inquiries within 24 hours. A detailed proposal usually follows within 2-3 business days after our initial consultation." },
  { q: "Do you provide on-site surveys for cleaning services?", a: "Yes, for specialized cleaning and institutional partnerships, our experts will conduct a thorough on-site survey to understand your specific hygiene requirements." },
  { q: "What is your typical turnaround for laundry services?", a: "For hospital and hotel linens, we operate on a 24-48 hour cycle, but we can customize this based on your operational needs." }
];

export const ContactPage: FC = () => {
  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Minimalist Elegant Hero Section */}
      <section className="pt-40 pb-16 bg-[#49122E] relative overflow-hidden">
        {/* Soft Ambient Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#5A1639,transparent)]" />
        </div>

        <div className="container max-w-[1400px] mx-auto px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#D6A84F] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block opacity-60">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6 leading-tight">
              Let’s Connect. <br /> 
              <span className="text-[#D6A84F]">Partnerships or Support.</span>
            </h1>
            <p className="text-white/40 text-base md:text-lg max-w-xl mx-auto font-medium leading-relaxed">
              Have an inquiry or looking for a long-term partnership? <br className="hidden md:block" /> Our team is ready to provide a tailored hygiene solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-32 px-8">
        <div className="container max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Contact Info Column */}
            <div className="lg:col-span-5 space-y-12">
              <div className="relative">
                <div className="absolute -left-8 top-0 w-1 h-12 bg-[#D6A84F]" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Contact Information</h2>
                <p className="text-primary/40 mt-4 font-medium max-w-sm">Reach out to our specialized teams for institutional or residential inquiries.</p>
              </div>

              <div className="space-y-6">
                {[
                  { 
                    label: "Phone & WhatsApp", 
                    value: "+62 851-2233-3371", 
                    sub: "Monday - Saturday, 08:00 - 17:00",
                    icon: <Phone className="h-6 w-6" />,
                    accent: "bg-[#D6A84F]/5 text-[#D6A84F]"
                  },
                  { 
                    label: "Email Inquiry", 
                    value: "support@waschen.com", 
                    sub: "Corporate & General Partnerships",
                    icon: <Mail className="h-6 w-6" />,
                    accent: "bg-primary/5 text-primary"
                  },
                  { 
                    label: "Head Office", 
                    value: "Cibubur, Kec. Ciracas,", 
                    sub: "Kota Jakarta Timur, Indonesia",
                    icon: <MapPin className="h-6 w-6" />,
                    accent: "bg-[#49122E]/5 text-[#49122E]"
                  }
                ].map((item, i) => (
                  <AnimatedContent key={i} delay={i * 0.1}>
                    <div className="p-8 bg-gray-50/50 rounded-[2.5rem] border border-gray-100/50 hover:bg-white hover:shadow-xl hover:border-white transition-all duration-500 group">
                      <div className="flex items-center gap-6">
                        <div className={`h-14 w-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${item.accent}`}>
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/30 mb-2">{item.label}</h4>
                          <p className="text-xl md:text-2xl font-bold text-primary leading-none tracking-tight">{item.value}</p>
                          <p className="text-sm font-medium text-primary/40 mt-3">{item.sub}</p>
                        </div>
                      </div>
                    </div>
                  </AnimatedContent>
                ))}
              </div>


            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white p-12 lg:p-20 rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.06)] border border-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-2 bg-[#D6A84F]" />
                <div className="mb-14">
                  <h3 className="text-3xl font-semibold text-primary mb-4 tracking-tight">Request a Quote</h3>
                  <p className="text-primary/40 font-medium leading-relaxed">Fill out the form below and our specialists will reach out to you.</p>
                </div>

                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-primary/40 ml-2">Full Name</label>
                      <Input placeholder="E.g. John Doe" className="h-16 md:h-18 rounded-[1.25rem] bg-gray-50 border-none focus-visible:ring-primary/10 text-base font-medium px-6" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-primary/40 ml-2">Email Address</label>
                      <Input placeholder="name@company.com" className="h-16 md:h-18 rounded-[1.25rem] bg-gray-50 border-none focus-visible:ring-primary/10 text-base font-medium px-6" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-primary/40 ml-2">Service Interest</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {["Hospital Laundry", "Commercial Laundry", "Deep Cleaning", "B2B Partnership"].map(service => (
                        <button key={service} type="button" className="h-14 px-6 rounded-xl bg-gray-50 text-sm font-semibold text-primary/60 border-2 border-transparent hover:border-primary/10 hover:bg-white transition-all text-left">
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-primary/40 ml-2">Message Details</label>
                    <Textarea 
                      placeholder="Tell us about your organization and requirements..." 
                      className="min-h-[200px] rounded-[1.5rem] bg-gray-50 border-none focus-visible:ring-primary/10 p-6 text-base font-medium" 
                    />
                  </div>

                  <Button className="w-full h-20 bg-primary hover:bg-primary/90 text-white rounded-[1.5rem] shadow-2xl shadow-primary/30 text-lg font-bold group transition-all duration-500 hover:scale-[1.02] active:scale-95">
                    Submit Request
                    <Send className="ml-3 h-5 w-5 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-500" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - New & Engaging */}
      <section className="py-32 px-8 bg-gray-50/50">
        <div className="container max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-[#D6A84F] mb-6">Common Inquiries</h2>
            <h3 className="text-4xl md:text-5xl font-semibold text-primary tracking-tight">Frequently Asked Questions</h3>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {faqItems.map((item, i) => (
              <AnimatedContent key={i} delay={i * 0.1}>
                <div className="p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm group hover:shadow-xl transition-all duration-500">
                  <HelpCircle className="h-6 w-6 text-[#D6A84F] mb-6 group-hover:rotate-12 transition-transform" />
                  <h4 className="text-lg font-bold text-primary mb-4 leading-tight">{item.q}</h4>
                  <p className="text-primary/40 text-sm font-medium leading-relaxed">{item.a}</p>
                </div>
              </AnimatedContent>
            ))}
            
            {/* Quick Support Card */}
            <div className="p-10 bg-primary rounded-[2.5rem] text-white flex flex-col justify-center items-center text-center">
              <Building2 className="h-10 w-10 text-[#D6A84F] mb-6" />
              <h4 className="text-xl font-bold mb-4">Direct Consultation</h4>
              <p className="text-white/40 text-sm font-medium mb-8 leading-relaxed">Prefer a face-to-face meeting? Visit our head office to discuss large-scale partnerships in detail.</p>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-primary rounded-xl px-10 font-bold">
                Schedule a Visit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
