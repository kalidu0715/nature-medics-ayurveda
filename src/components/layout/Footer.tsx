'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1f1d22] text-zinc-300 pt-16 pb-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand info */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#de968d] flex items-center justify-center text-white font-serif text-xl font-bold">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-white tracking-tight">
                Nature Medics Ayurveda
              </span>
              <span className="text-xs text-[#de968d] uppercase tracking-wider font-semibold">
                Ayurvedic Medical Center
              </span>
            </div>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed mb-6">
            Step into a world of rejuvenation and balance. Our Ayurvedic sanctuary is dedicated to harmonizing your mind, body, and spirit with authentic ancient Sri Lankan healing traditions.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-[#de968d] hover:text-white transition-all"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=94718051110"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-[#25D366] hover:text-white transition-all"
              aria-label="WhatsApp"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.14 4.162 4.283-1.121z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-serif text-lg font-bold text-white mb-6 pb-2 border-b border-zinc-800">
            Navigation
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-[#de968d] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#de968d] transition-colors">
                About Sanctuary
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#de968d] transition-colors">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/treatments" className="hover:text-[#de968d] transition-colors">
                Treatment Packages
              </Link>
            </li>
            <li>
              <Link href="/dispensary" className="hover:text-[#de968d] transition-colors">
                Ayurvedic Dispensary
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-[#de968d] transition-colors">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#de968d] transition-colors">
                Contact & Location
              </Link>
            </li>
          </ul>
        </div>

        {/* Operating Hours */}
        <div>
          <h3 className="font-serif text-lg font-bold text-white mb-6 pb-2 border-b border-zinc-800">
            Center Hours
          </h3>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li className="flex justify-between">
              <span>Monday - Friday</span>
              <span className="text-white font-medium">8:00 AM - 6:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span>
              <span className="text-white font-medium">8:30 AM - 5:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday & Poya</span>
              <span className="text-white font-medium">9:00 AM - 4:00 PM</span>
            </li>
            <li className="pt-2 text-xs text-[#de968d]">
              * Doctor consultations by prior appointment.
            </li>
          </ul>
        </div>

        {/* Contact details */}
        <div>
          <h3 className="font-serif text-lg font-bold text-white mb-6 pb-2 border-b border-zinc-800">
            Get in Touch
          </h3>
          <ul className="space-y-4 text-sm text-zinc-400">
            <li className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-[#de968d] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Nature Medics Ayurveda Medical Center, Sri Lanka</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-[#de968d] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+94718051110" className="hover:text-white transition-colors">
                +94 71 805 1110
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-[#de968d] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:suwaniayu@gmail.com" className="hover:text-white transition-colors">
                suwaniayu@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-zinc-800 text-center text-xs text-zinc-500 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Nature Medics Ayurveda. All Rights Reserved.</p>
        <p className="text-zinc-500">Traditional Healing & Pure Ayurvedic Radiance</p>
      </div>
    </footer>
  );
}
