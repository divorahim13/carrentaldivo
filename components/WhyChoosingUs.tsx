'use client';

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Zap, ShieldCheck, Star, Sparkles, Plus } from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    title: 'Instant Booking',
    description: 'Secure your premier vehicle in seconds with our seamless digital checkout.',
    icon: <Zap className="w-8 h-8 text-[#72d3e0]" />,
  },
  {
    title: 'Elite Fleet',
    description: 'Access to the world\'s most prestigious automotive engineering and luxury.',
    icon: <Sparkles className="w-8 h-8 text-[#72d3e0]" />,
  },
  {
    title: 'Pristine Quality',
    description: 'Every engine is hand-inspected to exceed meticulous Sovereign standards.',
    icon: <ShieldCheck className="w-8 h-8 text-[#72d3e0]" />,
  },
  {
    title: 'VIP Comfort',
    description: 'Experience unparalleled executive service tailored to your personal journey.',
    icon: <Star className="w-8 h-8 text-[#72d3e0]" />,
  },
];

export default function WhyChoosingUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const borderOuterRef = useRef<HTMLDivElement>(null);
  const borderInnerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Background Blobs Parallax
    gsap.to(blob1Ref.current, {
      y: 100,
      x: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

    gsap.to(blob2Ref.current, {
      y: -80,
      x: -40,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5
      }
    });

    // Decorative Borders Parallax
    gsap.to(borderOuterRef.current, {
      y: -30,
      scale: 1.05,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5
      }
    });

    gsap.to(borderInnerRef.current, {
      y: -15,
      scale: 1.02,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.8
      }
    });

    // Staggered reveal for right column content
    gsap.fromTo('.reveal-item', 
      { x: 30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.reveal-item-trigger',
          start: 'top 85%',
          once: true
        }
      }
    );

    // Reveal for left column image
    gsap.fromTo(imageWrapperRef.current,
      { x: -40, opacity: 0, scale: 0.95 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageWrapperRef.current,
          start: 'top 85%',
          once: true
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="why-us" className="relative w-full bg-slate-950 py-24 md:py-48 px-6 md:px-20 overflow-hidden">
      {/* Background Accent Gradients */}
      <div ref={blob1Ref} className="absolute top-0 left-0 w-96 h-96 bg-[#72d3e0]/10 rounded-full blur-[120px] -ml-48 -mt-48 opacity-50" />
      <div ref={blob2Ref} className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -mr-48 -mb-48 opacity-30" />

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Left Column - Concentric Geometry Image Arrangement */}
        <div className="relative flex justify-center lg:justify-start">
          {/* TIGHT WRAPPER: Ensures borders are relative to the image size */}
          <div ref={imageWrapperRef} className="relative w-full max-w-[550px] opacity-0">
            {/* Outer Border */}
            <div 
              ref={borderOuterRef}
              className="absolute -inset-8 md:-inset-12 border border-white/5 z-0"
              style={{ 
                borderTopLeftRadius: 'calc(var(--base-r) + 48px)', 
                borderBottomRightRadius: 'calc(var(--base-r) + 48px)',
                borderTopRightRadius: '0px',
                borderBottomLeftRadius: '0px',
                ['--base-r' as any]: '180px' 
              }} 
            />
            
            {/* Inner Border */}
            <div 
              ref={borderInnerRef}
              className="absolute -inset-4 md:-inset-6 border border-[#72d3e0]/10 z-0 shadow-[0_0_40px_rgba(114,211,224,0.05)]"
              style={{ 
                borderTopLeftRadius: 'calc(var(--base-r) + 24px)', 
                borderBottomRightRadius: 'calc(var(--base-r) + 24px)',
                borderTopRightRadius: '0px',
                borderBottomLeftRadius: '0px',
                ['--base-r' as any]: '180px' 
              }} 
            />
            
            {/* Main Leaf Image Container */}
            <div 
              className="relative aspect-[4/5] md:aspect-[5/6] w-full overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] group z-10 border border-white/10"
              style={{ 
                borderTopLeftRadius: '180px', 
                borderBottomRightRadius: '180px' 
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200&auto=format&fit=crop"
                alt="Luxury Sports Car"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              {/* Visual Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#72d3e0]/20 via-transparent to-transparent opacity-40 mix-blend-overlay" />
            </div>
          </div>
        </div>

        {/* Right Column - Boutique Content */}
        <div className="space-y-12 md:pl-10 reveal-item-trigger">
          <div className="space-y-6">
            <div className="flex items-center gap-3 reveal-item">
              <div className="w-2.5 h-2.5 bg-[#72d3e0] rounded-sm" />
              <span className="text-xs font-black uppercase tracking-[0.4em] text-[#72d3e0]">The Distinction</span>
            </div>
            
            <h2 className="reveal-item text-4xl md:text-7xl font-black text-white leading-[1.05] tracking-tighter uppercase font-display">
              WHEN YOU <span className="inline-block bg-[#72d3e0] text-slate-950 px-6 py-2 rounded-2xl md:rounded-3xl shadow-[0_10px_30px_rgba(114,211,224,0.3)]">NEED</span> IT MOST <br /> 
              URGENT <span className="inline-block bg-[#72d3e0] text-slate-950 px-6 py-2 rounded-2xl md:rounded-3xl shadow-[0_10px_30px_rgba(114,211,224,0.3)]">RENTAL</span>
            </h2>

            <p className="reveal-item text-white/50 text-lg md:text-xl font-medium leading-relaxed max-w-xl italic">
              "We provide the intersection of performance and luxury finesse for the world's most discerning car enthusiasts."
            </p>
          </div>

          {/* Boutique Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
            {FEATURES.map((feature, i) => (
              <div key={i} className="reveal-item flex items-start gap-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center rounded-2xl group-hover:border-[#72d3e0]/30 group-hover:bg-[#72d3e0]/10 transition-all duration-500 shadow-xl backdrop-blur-md">
                  {feature.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-white uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
