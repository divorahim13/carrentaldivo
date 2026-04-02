'use client';

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="faq" className="w-full bg-slate-900 text-white pt-20 pb-10 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black tracking-tighter font-display italic">RENTAL</h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Premium car rental service for the future of mobility. Experience the thrill of driving the cars you actually want.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              {['Home', 'Cars', 'Pricing', 'FAQ', 'About Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              {['Car Rental', 'Chauffeur Service', 'Corporate Rental', 'Wedding Cars', 'Airport Transfer'].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-white transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>123 Performance Way, Speed City</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>hello@rental.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/5 mb-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© 2026 RENTAL. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
