'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  bgImage: string;
}

const slides: Slide[] = [
  {
    title: "Harmony Through Ayurveda",
    subtitle: "Authentic Healing Traditions",
    description: "Step into a world of rejuvenation and balance. Our Ayurvedic sanctuary is dedicated to harmonizing your mind, body, and spirit.",
    bgImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1920",
  },
  {
    title: "Revitalize Your Life: Ayurvedic Radiance",
    subtitle: "Natural Rejuvenation",
    description: "Revitalize your essence with Ayurvedic radiance! Our wellness center is dedicated to rekindling your inner glow through time-tested practices.",
    bgImage: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=1920",
  },
  {
    title: "Holistic Healing: Balancing Body & Spirit",
    subtitle: "Mindful Wellness",
    description: "Unlock the secrets to radiant well-being through Ayurveda. Our sanctuary invites you to explore the transformative power of ancient traditions.",
    bgImage: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=1920",
  },
  {
    title: "Soulful Serenity: Ayurveda's Embrace",
    subtitle: "Peace & Vitality",
    description: "Nurture your well-being amidst tranquility. Unwind, rejuvenate, and rediscover complete harmony with custom herbal remedies.",
    bgImage: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1920",
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-[650px] md:h-[750px] overflow-hidden bg-zinc-900 text-white">
      {/* Background Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-10000 ease-out"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />
          
          {/* Slide Content */}
          <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start">
            <div className="max-w-2xl animate-fadeIn">
              <span className="inline-block bg-[#de968d] text-white text-xs md:text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wider mb-4">
                {slide.subtitle}
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-white text-shadow-md">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-zinc-200 mb-8 font-sans leading-relaxed">
                {slide.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact#booking"
                  className="bg-[#de968d] hover:bg-[#c57b72] text-white font-medium px-8 py-3.5 rounded shadow-lg transition-all transform hover:-translate-y-0.5 text-sm md:text-base"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/treatments"
                  className="border-2 border-white/80 hover:border-white hover:bg-white/10 text-white font-medium px-8 py-3.5 rounded transition-all text-sm md:text-base"
                >
                  Explore Treatments
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 hover:bg-[#de968d] text-white transition-all backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 hover:bg-[#de968d] text-white transition-all backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentSlide ? 'bg-[#de968d] w-8' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
