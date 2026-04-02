'use client';

import React, { useRef, useEffect } from 'react';
import { MapPin, Calendar, Search, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Navbar from './Navbar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const CAR_CARDS = [
  {
    name: 'BMW M4',
    price: '$199/day',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Tesla Model 3',
    price: '$149/day',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Audi RS5',
    price: '$189/day',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Porsche 911',
    price: '$299/day',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Ford Mustang',
    price: '$129/day',
    image: 'https://images.unsplash.com/photo-1584345604481-03cd189813f7?q=80&w=800&auto=format&fit=crop',
  }
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleLinesRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Background Entrance
    const bg = bgRef.current;

    // Entrance Animation
    gsap.from(bg, {
      opacity: 0,
      scale: 1.3,
      duration: 2.5,
      ease: 'power2.out'
    });
    
    // Scroll Parallax
    gsap.to(bg, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    // 2. Title Reveal Animation
    const titleLines = gsap.utils.toArray('.title-line-inner');
    gsap.fromTo(titleLines, 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.2
      }
    );

    // 3. Cards Staggered Reveal
    const cards = gsap.utils.toArray('.car-card');
    gsap.fromTo(cards, 
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 90%',
          once: true
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen lg:h-screen w-full flex flex-col overflow-hidden bg-slate-950">
      <Navbar />
      
      {/* Background Image with Overlay */}
      <div ref={bgRef} className="absolute inset-0 z-0 h-[120%] scale-110">
        <Image 
          src="https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000&auto=format&fit=crop"
          alt="BMW M4 in Forest"
          fill
          className="object-cover opacity-90"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-between pt-12 md:pt-32 pb-4 md:pb-12 lg:overflow-hidden no-scrollbar">
        {/* Main Content Area */}
        <div className="flex-initial lg:flex-1 flex flex-col justify-center max-w-5xl px-6 md:px-20 pt-12 lg:pt-0">
          <div className="flex flex-col gap-2 md:gap-4 overflow-hidden">
            <h1 className="text-4xl md:text-7xl lg:text-[7.5rem] font-black text-white leading-[0.9] md:leading-[0.85] font-display tracking-tight md:tracking-tighter uppercase drop-shadow-2xl">
              <div className="overflow-hidden"><div className="title-line-inner">DRIVE THE CARS</div></div>
              <div className="overflow-hidden"><div className="title-line-inner">YOU ACTUALLY</div></div>
              <div className="overflow-hidden"><div className="title-line-inner">WANT</div></div>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-white/80 text-xs md:text-lg max-w-lg leading-relaxed mt-2 md:mt-4 drop-shadow-md font-medium"
            >
              Performance-focused rentals with transparent pricing and insurance included. Pick, pay, and drive in minutes.
            </motion.p>
          </div>
        </div>

        {/* Bottom Section: Booking Bar & Car Gallery */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-end justify-between gap-8 md:gap-10 w-full mb-4 lg:mb-0">
          {/* Car Gallery */}
          <div ref={cardsRef} className="order-1 lg:order-2 flex gap-4 md:gap-6 overflow-x-auto pb-4 no-scrollbar w-full lg:w-auto lg:max-w-2xl cursor-grab active:cursor-grabbing snap-x snap-mandatory pl-6 lg:pl-0 pr-0">
            {CAR_CARDS.map((car, i) => (
              <div 
                key={i}
                className="car-card relative w-56 md:w-80 h-36 md:h-52 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden flex-shrink-0 group border border-white/10 shadow-2xl snap-center"
              >
                <Image 
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                
                <div className="absolute top-4 md:top-6 left-4 md:left-6">
                  <h3 className="text-white font-bold text-sm md:text-lg tracking-tight">{car.name}</h3>
                </div>
                
                <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 md:px-5 py-1.5 md:py-2.5 rounded-full shadow-2xl">
                    <span className="text-white font-black text-[9px] md:text-xs uppercase tracking-widest">{car.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Booking Bar */}
          <div className="order-2 lg:order-1 px-6 lg:px-0 lg:pl-20 w-full lg:max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: 'circOut' }}
              className="bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-2.5 flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden"
            >
              <div className="flex-1 flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 border-b md:border-b-0 md:border-r border-white/10">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-white" />
                <div className="flex flex-col">
                  <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/60 font-black">Location</span>
                  <input suppressHydrationWarning type="text" placeholder="Select City" className="bg-transparent text-white text-xs md:text-sm focus:outline-none placeholder:text-white/40 w-full font-bold" />
                </div>
              </div>

              <div className="flex-1 flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 border-b md:border-b-0 md:border-r border-white/10 cursor-pointer hover:bg-white/5 transition-colors group">
                <Calendar className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform" />
                <div className="flex flex-col w-full">
                  <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/60 font-black">Dates</span>
                  <div className="flex items-center gap-2">
                    <span className="text-white text-xs md:text-sm font-bold">Pick a date</span>
                    <ChevronDown className="w-3 h-3 md:w-4 md:h-4 text-white/40 ml-auto group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>

              <div className="flex-1 flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4">
                <Search className="w-4 h-4 md:w-5 md:h-5 text-white" />
                <div className="flex flex-col">
                  <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/60 font-black">Model</span>
                  <input suppressHydrationWarning type="text" placeholder="BMW..." className="bg-transparent text-white text-xs md:text-sm focus:outline-none placeholder:text-white/40 w-full font-bold" />
                </div>
              </div>

              <button className="w-full md:w-auto bg-[#72d3e0] text-slate-950 px-6 md:px-10 py-4 md:py-5 rounded-[1.2rem] md:rounded-[1.8rem] font-black text-xs md:text-sm uppercase tracking-widest hover:bg-white transition-all whitespace-nowrap shadow-[0_5px_15px_rgba(114,211,224,0.3)] hover:shadow-[0_8px_25px_rgba(255,255,255,0.7)] group">
                Book Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
