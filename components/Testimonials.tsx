'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Entrepreneur',
    content: "The best car rental experience I've ever had. The BMW M4 was in perfect condition and the process was seamless. Truly premium service.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=alex'
  },
  {
    id: 2,
    name: 'Sarah Williams',
    role: 'Travel Blogger',
    content: "Rental made our vacation so much better. We rented a Tesla Model 3 and it was a joy to drive. The booking process was incredibly fast!",
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Business Executive',
    content: "Professional service and a great selection of cars. The customer support was very helpful when I needed to extend my rental. 10/10.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=michael'
  }
];

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-24 px-8 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-12 h-[2px] bg-blue-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Testimonials</span>
            <div className="w-12 h-[2px] bg-blue-500" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 font-display"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1), duration: 0.6 }}
              className="bg-[#f8fafc] p-8 rounded-[2.5rem] relative group hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 border border-transparent hover:border-blue-50"
            >
              <div className="absolute top-8 right-8 text-blue-500/10 group-hover:text-blue-500/20 transition-colors">
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-600 leading-relaxed mb-8 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                  <p className="text-slate-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
