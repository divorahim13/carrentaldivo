'use client';

import React from 'react';
import { motion } from 'motion/react';

const LOGOS = [
  {
    name: 'TESLA',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-24 h-8">
        <path d="M12 2L2 4.5V6L12 4L22 6V4.5L12 2ZM12 7L2 9.5V11L12 9L22 11V9.5L12 7ZM12 12L2 14.5V16L12 14L22 16V14.5L12 12ZM12 17L2 19.5V21L12 19L22 21V19.5L12 17Z" />
      </svg>
    )
  },
  {
    name: 'BMW',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="7" />
        <path d="M12 5V19M5 12H19" />
        <path d="M7 7L17 17M17 7L7 17" />
      </svg>
    )
  },
  {
    name: 'PORSCHE',
    svg: (
      <span className="text-xl font-black tracking-[0.3em] font-display italic">PORSCHE</span>
    )
  },
  {
    name: 'CHEVROLET',
    svg: (
      <div className="flex flex-col items-center">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-8">
          <path d="M7 8H17V11H21V13H17V16H7V13H3V11H7V8Z" />
        </svg>
        <span className="text-[8px] font-bold tracking-widest mt-1">CHEVROLET</span>
      </div>
    )
  },
  {
    name: 'AUDI',
    svg: (
      <div className="flex -space-x-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-8 h-8 rounded-full border-2 border-current" />
        ))}
      </div>
    )
  }
];

export default function LogoSection() {
  const marqueeLogos = [...LOGOS, ...LOGOS, ...LOGOS]; // Triple the logos for seamless scroll

  return (
    <section className="w-full bg-white py-14 md:py-20 border-y border-slate-50 overflow-hidden relative z-10">
      <div className="relative flex">
        <motion.div
          className="flex items-center gap-24 md:gap-32 whitespace-nowrap"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {marqueeLogos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer text-slate-900"
            >
              <div className="h-8 flex items-center">
                {logo.svg}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
