'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Treatment Plans', href: '/treatments' },
    { name: 'Dispensary', href: '/dispensary' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="w-full sticky top-0 z-40 bg-white shadow-sm">
      {/* Top utility bar */}
      <div className="top-bar-gradient text-white text-xs md:text-sm py-2 px-4 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Contact details */}
          <div className="flex items-center space-x-6">
            <a
              href="tel:+94718051110"
              className="flex items-center space-x-2 hover:text-[#de968d] transition-colors"
            >
              <svg className="w-4 h-4 text-[#de968d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+94 71 805 1110</span>
            </a>

            <a
              href="mailto:suwaniayu@gmail.com"
              className="flex items-center space-x-2 hover:text-[#de968d] transition-colors hidden sm:flex"
            >
              <svg className="w-4 h-4 text-[#de968d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>suwaniayu@gmail.com</span>
            </a>
          </div>

          {/* Social & CTA */}
          <div className="flex items-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#de968d] transition-colors"
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
              className="hover:text-[#de968d] transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.14 4.162 4.283-1.121z"/>
              </svg>
            </a>

            <Link
              href="/contact#booking"
              className="bg-[#de968d] hover:bg-[#c57b72] text-white text-xs font-semibold px-4 py-1.5 rounded transition-all transform hover:scale-105"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand logo & text */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-full bg-[#de968d]/15 flex items-center justify-center border border-[#de968d]/30 text-[#de968d] group-hover:bg-[#de968d] group-hover:text-white transition-all duration-300">
            <span className="font-serif text-xl font-bold">M</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-[#27252a] group-hover:text-[#de968d] transition-colors">
              Nature Medics Ayurveda
            </span>
            <span className="text-xs text-amber-800 tracking-wider uppercase font-medium">
              Ayurvedic Medical Center
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#de968d] ${
                isActive(link.href)
                  ? 'text-[#de968d] font-semibold border-b-2 border-[#de968d] pb-1'
                  : 'text-[#27252a]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md text-[#27252a] hover:text-[#de968d] focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-zinc-100 py-4 px-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-2 border-b border-zinc-100 transition-colors ${
                  isActive(link.href)
                    ? 'text-[#de968d] font-semibold pl-2 border-l-4 border-l-[#de968d]'
                    : 'text-[#27252a]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-[#de968d] text-white py-3 rounded-md font-medium text-sm hover:bg-[#c57b72] transition-colors mt-2"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
