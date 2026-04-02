import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Cars', href: '#cars' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-6 transition-all duration-500 ease-in-out w-full border-b backdrop-blur-xl ${
          scrolled || mobileMenuOpen
            ? 'bg-white/60 border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.05)]' 
            : 'bg-transparent border-transparent shadow-none'
        }`}
      >
        <Link href="#home" className="flex items-center group relative z-50" onClick={() => setMobileMenuOpen(false)}>
          <span className={`text-2xl font-bold tracking-tight font-display transition-colors duration-500 ease-in-out ${
            scrolled || mobileMenuOpen ? 'text-slate-900' : 'text-white group-hover:text-[#72d3e0]'
          }`}>
            Rental
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center backdrop-blur-xl border transition-colors duration-500 ease-in-out rounded-full p-1 shadow-xl ${
          scrolled ? 'bg-white/40 border-white/60' : 'bg-white/10 border-white/20'
        }`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`px-6 py-2.5 text-sm font-medium transition-colors duration-500 ease-in-out rounded-full ${
                scrolled 
                  ? 'text-slate-700 hover:text-slate-900 hover:bg-white/50' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Spacer */}
        <div className="w-[100px] hidden md:block" />

        {/* Mobile Menu Toggle button */}
        <button 
          className="md:hidden relative z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={`w-6 h-6 transition-colors duration-500 ${scrolled || mobileMenuOpen ? 'text-slate-900' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 transition-colors duration-500 ${scrolled ? 'text-slate-900' : 'text-white'}`} />
          )}
        </button>
      </nav>

      {/* Mobile Full-Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-10 transition-transform duration-500 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full opacity-0'
        }`}
      >
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-4xl font-display font-black text-slate-900 hover:text-[#72d3e0] transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
}
