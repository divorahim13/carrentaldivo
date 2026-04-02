'use client';

import Hero from '@/components/Hero';
import LogoSection from '@/components/LogoSection';
import AboutSection from '@/components/AboutSection';
import VehicleCatalog from '@/components/VehicleCatalog';
import WhyChoosingUs from '@/components/WhyChoosingUs';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col">
      <Hero />
      <LogoSection />
      <AboutSection />
      <VehicleCatalog />
      <WhyChoosingUs />
      <Testimonials />
      <Footer />
    </main>
  );
}
