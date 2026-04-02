'use client';

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Wallet, TrendingUp, ArrowUpRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Text Reveal
    gsap.fromTo('.reveal-text', 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          once: true
        }
      }
    );

    // Features Stagger
    gsap.fromTo('.feature-card', 
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 85%',
          once: true
        }
      }
    );

    // Image Reveal
    gsap.fromTo(imageRef.current, 
      { 
        x: 100, 
        opacity: 0,
        scale: 0.8
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          once: true
        }
      }
    );

    // Image Parallax
    gsap.to('.parallax-img', {
      y: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="about" className="relative w-full bg-slate-950 py-24 md:py-36 px-6 md:px-20 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#72d3e0]/10 rounded-full blur-[120px] -mr-48 -mt-48 opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -ml-48 -mb-48 opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-10 md:gap-14">
          <div ref={textRef} className="space-y-6 md:space-y-8">
            <div className="flex items-center gap-4 reveal-text">
              <div className="w-12 h-[2px] bg-[#72d3e0]" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#72d3e0]">The Philosophy</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] md:leading-[1.05] font-display uppercase tracking-tight reveal-text">
              WE PROVIDE THE <br className="hidden md:block" /> BEST CAR RENTAL <br className="hidden md:block" /> EXPERIENCE
            </h2>

            <p className="text-white/50 text-base md:text-xl max-w-xl leading-relaxed font-medium reveal-text">
              Rental is dedicated to providing premium car rental services with a focus on performance, transparency, and customer satisfaction. We believe that everyone deserves to drive the car of their dreams.
            </p>
          </div>

          <div ref={featuresRef} className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="feature-card group space-y-6 p-8 rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-[#72d3e0]/30 transition-all duration-500 shadow-2xl">
              <div className="w-14 h-14 bg-[#72d3e0] rounded-2xl flex items-center justify-center text-slate-950 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-[0_0_20px_rgba(114,211,224,0.3)]">
                <Wallet className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-black text-white uppercase tracking-wider">Premium Selection</h3>
                <p className="text-white/40 text-sm leading-relaxed font-medium">
                  We offer a curated fleet of high-performance and luxury vehicles to suit every style and occasion.
                </p>
              </div>
              <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#72d3e0] hover:text-white transition-colors group/btn">
                Discover <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>

            {/* Feature 2 */}
            <div className="feature-card group space-y-6 p-8 rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-[#72d3e0]/30 transition-all duration-500 shadow-2xl">
              <div className="w-14 h-14 bg-[#72d3e0] rounded-2xl flex items-center justify-center text-slate-950 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-[0_0_20px_rgba(114,211,224,0.3)]">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-black text-white uppercase tracking-wider">Unmatched Support</h3>
                <p className="text-white/40 text-sm leading-relaxed font-medium">
                  Our dedicated team is available 24/7 to ensure your journey is safe and unforgettable.
                </p>
              </div>
              <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#72d3e0] hover:text-white transition-colors group/btn">
                Meet Us <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            className="reveal-text flex items-center gap-6 bg-white text-slate-950 px-10 py-5 rounded-full font-black tracking-[0.2em] uppercase text-xs group mt-4 w-fit shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_15px_40px_rgba(114,211,224,0.2)] transition-all"
          >
            Join Our Team
            <div className="w-10 h-10 bg-[#72d3e0] rounded-full flex items-center justify-center text-slate-950 transition-transform group-hover:rotate-45">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </motion.button>
        </div>

        {/* Right Image Container */}
        <div ref={imageRef} className="relative">
          {/* Decorative Elements */}
          <div className="absolute -inset-4 border border-white/10 rounded-[4rem] z-0" />
          <div className="absolute -inset-8 border border-white/5 rounded-[5rem] z-0" />
          
          <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] z-10 border border-white/10">
            <div className="parallax-img absolute inset-0 w-full h-[120%] -top-[10%]">
              <Image
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1200&auto=format&fit=crop"
                alt="Luxury Performance Car Detail"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Visual Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#72d3e0]/20 via-transparent to-transparent opacity-40 mix-blend-overlay" />
          </div>

          {/* Floating Stat Pill */}
          <div className="absolute -bottom-6 -left-6 bg-[#72d3e0] p-6 rounded-[2rem] shadow-2xl z-20 hidden md:block">
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-black text-slate-950">500+</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-950/60">Premium Fleet</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
