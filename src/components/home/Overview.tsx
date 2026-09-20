'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Overview() {
  const highlights = [
    {
      title: "Ancient Wisdom & Heritage",
      description: "Rooted in centuries of traditional Sri Lankan Siddha and Ayurvedic medicine.",
      icon: "🌿",
    },
    {
      title: "Personalized Dosha Balance",
      description: "Customized diagnostic pulse reading and tailored herbal formulations.",
      icon: "✨",
    },
    {
      title: "Certified Ayurvedic Physicians",
      description: "Headed by dedicated practitioners experienced in holistic healing.",
      icon: "🩺",
    },
    {
      title: "Pure Herbal Remedies",
      description: "Formulated using handpicked organic herbs and medicinal extracts.",
      icon: "🌸",
    },
  ];

  return (
    <section className="py-20 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image composition */}
          <div className="relative">
            <div className="relative h-[420px] sm:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200"
                alt="Ayurvedic Treatment & Spa"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-amber-100 hidden sm:block max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#de968d]/20 text-[#de968d] flex items-center justify-center text-2xl font-bold">
                  ★
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#27252a] text-lg">100% Authentic</h4>
                  <p className="text-xs text-zinc-500">Pure Ayurvedic Healing & Wellness</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div>
            <span className="text-[#de968d] text-sm font-semibold tracking-widest uppercase mb-3 block">
              Welcome to Nature Medics Ayurveda
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#27252a] leading-tight mb-6">
              Harmony Through Timeless Ayurveda
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-6 font-sans">
              Step into a sanctuary dedicated to restoring your body’s natural intelligence. At Nature Medics Ayurveda, we blend traditional Sri Lankan Siddha and Ayurvedic medicine to treat the root cause of ailments rather than superficial symptoms.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-8 font-sans">
              Whether you seek complete body detoxification through Panchakarma, stress relief through Shirodhara, or therapeutic joint treatments, our experienced doctors curate individual healing journeys for lasting health.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="bg-[#27252a] hover:bg-[#de968d] text-white font-medium px-7 py-3 rounded transition-colors text-sm"
              >
                Learn More About Us
              </Link>
              <Link
                href="/contact#booking"
                className="bg-[#de968d] hover:bg-[#c57b72] text-white font-medium px-7 py-3 rounded transition-colors text-sm"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-amber-100">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-amber-50/50"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-serif text-xl font-bold text-[#27252a] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
