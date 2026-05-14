import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Trust } from './components/sections/Trust';
import { ClientLogos } from './components/sections/ClientLogos';
import { BrandStatement } from './components/sections/BrandStatement';
import { Services } from './components/sections/Services';
import { Workflow } from './components/sections/Workflow';
import { Gallery } from './components/sections/Gallery';
import { TestimonialsSection } from './components/sections/Testimonials';
import { Sustainability } from './components/sections/Sustainability';
import { ContactSection } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { AnimatedContent } from './components/animations/AnimatedContent';
import { LocationSearch } from './components/ui/LocationSearch';

import { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  useEffect(() => {
    // Smooth scroll removed
  }, []);

  return (
    <main className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Trust />
            <AnimatedContent><ClientLogos /></AnimatedContent>
            <AnimatedContent><BrandStatement /></AnimatedContent>
            <AnimatedContent><Services /></AnimatedContent>
            <AnimatedContent><Workflow /></AnimatedContent>
            <AnimatedContent><Gallery /></AnimatedContent>
            <AnimatedContent><TestimonialsSection /></AnimatedContent>
            <AnimatedContent><Sustainability /></AnimatedContent>
            <AnimatedContent><ContactSection /></AnimatedContent>
          </>
        } />

        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <LocationSearch />
    </main>
  );
}

export default App;
