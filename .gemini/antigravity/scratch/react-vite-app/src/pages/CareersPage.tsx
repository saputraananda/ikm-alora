import { useState, useMemo } from 'react';
import { AnimatedContent } from '@/components/animations/AnimatedContent';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Clock, ArrowRight, Search, Layout, TrendingUp, Cpu, 
  Wallet, WashingMachine, Sparkles, Filter, Heart, Zap, Globe, Shield 
} from 'lucide-react';
import type { FC } from 'react';

const jobOpenings = [
  {
    id: 1,
    title: "Operations Manager (Laundry Unit)",
    type: "Full-time",
    location: "Raffles Hills",
    category: "Operations",
    icon: <WashingMachine className="h-5 w-5" />,
    description: "Oversee laundry operations at our Raffles Hills branch ensuring strict adherence to hygiene standards."
  },
  {
    id: 2,
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Office",
    category: "Creative",
    icon: <Layout className="h-5 w-5" />,
    description: "Design the digital experience for our internal hygiene monitoring platform and client portals."
  },
  {
    id: 3,
    title: "Business Growth Lead",
    type: "Full-time",
    location: "Office",
    category: "Business",
    icon: <TrendingUp className="h-5 w-5" />,
    description: "Drive strategic partnerships with hospitality chains and healthcare providers nationwide."
  },
  {
    id: 4,
    title: "Laundry Quality Intern",
    type: "Internship",
    location: "Citra Grand",
    category: "Operations",
    icon: <WashingMachine className="h-5 w-5" />,
    description: "Learn and assist in implementing infection control protocols and quality assurance at Citra Grand."
  },
  {
    id: 5,
    title: "Digital Marketing Intern",
    type: "Internship",
    location: "Office",
    category: "Creative",
    icon: <Sparkles className="h-5 w-5" />,
    description: "Support our social media presence and digital campaigns for premium cleaning services."
  },
  {
    id: 6,
    title: "Branch Supervisor",
    type: "Full-time",
    location: "Canadian",
    category: "Operations",
    icon: <WashingMachine className="h-5 w-5" />,
    description: "Lead on-site teams and manage daily operations at our Canadian branch in Kota Wisata."
  },
  {
    id: 7,
    title: "Cleaning Operations Specialist",
    type: "Full-time",
    location: "Cleanox",
    category: "Cleaning",
    icon: <Sparkles className="h-5 w-5" />,
    description: "Expert in deep cleaning and specialized hygiene services for residential and commercial projects."
  },
  {
    id: 8,
    title: "Finance & Accounting Executive",
    type: "Full-time",
    location: "Office",
    category: "Finance",
    icon: <Wallet className="h-5 w-5" />,
    description: "Manage financial reporting, budgeting, and commercial auditing for our business units."
  },
  {
    id: 9,
    title: "IT Support & Infrastructure",
    type: "Full-time",
    location: "Office",
    category: "Technology",
    icon: <Cpu className="h-5 w-5" />,
    description: "Maintain our hybrid infrastructure and support our digital-first operational ecosystem."
  }
];

const categories = ["All", "Operations", "Creative", "Business", "Finance", "Technology", "Cleaning"];
const types = ["All", "Full-time", "Internship"];
const locations = ["All", "Office", "Raffles Hills", "Citra Grand", "Canadian", "Cleanox", "Sentral Eropa", "IKM", "Legenda Wisata"];

export const CareersPage: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const filteredJobs = useMemo(() => {
    return jobOpenings.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
      const matchesType = selectedType === 'All' || job.type === selectedType;
      const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
      
      return matchesSearch && matchesCategory && matchesType && matchesLocation;
    });
  }, [searchQuery, selectedCategory, selectedType, selectedLocation]);

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Minimalist Elegant Hero Section */}
      <section className="pt-40 pb-12 bg-[#49122E] relative overflow-hidden">
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
            <span className="text-[#D6A84F] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block opacity-60">Careers</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6 leading-tight">
              Step Into Excellence. <br />
              <span className="text-[#D6A84F]">Join Waschen Alora.</span>
            </h1>
          </motion.div>
          
          {/* Search Box - Minimalist */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-xl mx-auto relative mt-4"
          >
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
              <Input 
                placeholder="Search position or branch..." 
                className="h-14 pl-14 pr-6 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl text-base font-medium focus-visible:ring-[#D6A84F]/20 focus-visible:bg-white/10 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tighter Filter & Job List */}
      <section className="py-12 px-8">
        <div className="container max-w-[1400px] mx-auto">
          {/* Formal Corporate Filters - Tighter */}
          <div className="mb-12 pb-8 border-b border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Category Filter */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40 block ml-1">Category</label>
                <select 
                  className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 text-sm font-semibold text-primary outline-none focus:ring-2 focus:ring-primary/10 transition-all appearance-none cursor-pointer"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(c => <option key={c} value={c}>{c === 'All' ? 'All Categories' : c}</option>)}
                </select>
              </div>

              {/* Job Type Filter */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40 block ml-1">Job Type</label>
                <select 
                  className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 text-sm font-semibold text-primary outline-none focus:ring-2 focus:ring-primary/10 transition-all appearance-none cursor-pointer"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  {types.map(t => <option key={t} value={t}>{t === 'All' ? 'All Types' : t}</option>)}
                </select>
              </div>

              {/* Location Filter */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40 block ml-1">Location</label>
                <select 
                  className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 text-sm font-semibold text-primary outline-none focus:ring-2 focus:ring-primary/10 transition-all appearance-none cursor-pointer"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  {locations.map(l => <option key={l} value={l}>{l === 'All' ? 'All Locations' : l}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Job List */}
          <div className="grid grid-cols-1 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredJobs.map((job) => (
                <motion.div 
                  key={job.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="group bg-white p-10 md:p-12 rounded-[3rem] border border-gray-100 hover:border-primary/5 hover:shadow-[0_40px_80px_rgba(0,0,0,0.04)] transition-all duration-700 flex flex-col md:flex-row md:items-center justify-between gap-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-primary/5 group-hover:bg-primary transition-all duration-700" />
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-6 mb-6">
                        <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D6A84F] bg-[#D6A84F]/5 px-4 py-1.5 rounded-full">
                          <Clock className="h-3 w-3" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary/20">•</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40">{job.category}</span>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-10 w-10 bg-primary/5 rounded-xl flex items-center justify-center text-[#D6A84F] group-hover:bg-[#D6A84F] group-hover:text-white transition-all duration-500">
                          {job.icon}
                        </div>
                        <h3 className="text-3xl font-semibold text-primary group-hover:translate-x-2 transition-transform duration-500">{job.title}</h3>
                      </div>
                      
                      <p className="text-primary/60 font-medium max-w-3xl leading-relaxed text-lg">
                        {job.description}
                      </p>
                    </div>
                    
                    <Button className="bg-primary hover:bg-primary/90 text-white rounded-[1.5rem] h-20 px-12 text-base font-bold shadow-2xl shadow-primary/20 group/btn transition-all duration-500 hover:scale-105 active:scale-95">
                      Apply Now
                      <ArrowRight className="ml-3 h-5 w-5 group-hover/btn:translate-x-2 transition-transform duration-500" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredJobs.length === 0 && (
              <div className="text-center py-32 bg-gray-50/50 rounded-[4rem] border-2 border-dashed border-gray-100">
                <div className="h-24 w-24 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-8">
                  <Search className="h-8 w-8 text-gray-200" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">No matching opportunities</h3>
                <p className="text-primary/30 font-medium max-w-md mx-auto">We couldn't find any roles matching your current filters. Try resetting or searching for something else.</p>
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setSelectedType('All');
                    setSelectedLocation('All');
                  }}
                  className="mt-8 text-primary font-bold hover:bg-primary/5 rounded-xl px-8"
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>


        </div>
      </section>
    </div>
  );
};
