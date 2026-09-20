'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface TreatmentCard {
  title: string;
  category: string;
  duration: string;
  price: string;
  description: string;
  image: string;
  href: string;
}

const featuredTreatments: TreatmentCard[] = [
  {
    title: "Panchakarma Full Detoxification",
    category: "Detoxification",
    duration: "120 Mins",
    price: "15,000 LKR",
    description: "Deep 5-fold cleansing procedure designed to purge cellular toxins, balance doshas, and reset metabolic equilibrium.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600",
    href: "/treatments",
  },
  {
    title: "Shirodhara Mind & Stress Therapy",
    category: "Rejuvenation",
    duration: "60 Mins",
    price: "8,500 LKR",
    description: "Warm, continuous herbal oil stream over the third eye area. Relieves insomnia, mental fatigue, and anxiety.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=600",
    href: "/treatments",
  },
  {
    title: "Abhyanga Full Body Herbal Massage",
    category: "Therapeutic Massage",
    duration: "90 Mins",
    price: "9,500 LKR",
    description: "Rhythmic full-body massage using warm medicated oils to improve circulation and ease muscle tightness.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=600",
    href: "/treatments",
  },
  {
    title: "Kizhi Herbal Steam & Bolus Therapy",
    category: "Pain Management",
    duration: "60 Mins",
    price: "7,500 LKR",
    description: "Warm herbal poultice massage targeting joint stiffness, arthritis, and chronic back pain.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600",
    href: "/treatments",
  },
];

export default function QuichLinks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#de968d] text-sm font-semibold tracking-widest uppercase mb-3 block">
            Our Specialties
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#27252a] mb-6">
            Featured Treatment Plans
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg font-sans">
            Explore our curated Ayurvedic therapies designed to restore vitality, soothe chronic pain, and nurture your body.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredTreatments.map((treatment, idx) => (
            <div
              key={idx}
              className="group bg-[#faf7f2] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-amber-100/60"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#27252a] text-xs font-semibold px-3 py-1 rounded-full">
                  {treatment.category}
                </span>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#27252a] group-hover:text-[#de968d] transition-colors mb-2">
                    {treatment.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed font-sans mb-4">
                    {treatment.description}
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center pt-4 border-t border-amber-200/50 mb-4 text-xs font-medium">
                    <span className="text-zinc-500">⏱ {treatment.duration}</span>
                    <span className="text-[#de968d] font-bold text-sm">{treatment.price}</span>
                  </div>

                  <Link
                    href="/contact#booking"
                    className="block w-full text-center bg-[#27252a] group-hover:bg-[#de968d] text-white py-2.5 rounded text-xs font-semibold transition-colors"
                  >
                    Book This Treatment
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/treatments"
            className="inline-flex items-center space-x-2 border-2 border-[#de968d] text-[#de968d] hover:bg-[#de968d] hover:text-white font-medium px-8 py-3 rounded-full transition-all text-sm"
          >
            <span>View All Treatments & Therapies</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
