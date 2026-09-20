import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Gallery | Nature Medics Ayurveda Medical Center',
  description: 'Explore photos of our serene Ayurvedic sanctuary, treatment suites, and natural surroundings at Nature Medics Ayurveda.',
};

const galleryImages = [
  {
    title: 'Ayurvedic Treatment Room',
    category: 'Sanctuary',
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Shirodhara Therapy Session',
    category: 'Therapies',
    url: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Herbal Oil Preparation',
    category: 'Dispensary',
    url: 'https://images.unsplash.com/photo-1608248597263-00079e96048a?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Authentic Abhyanga Massage',
    category: 'Therapies',
    url: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Herbal Steam & Poultice',
    category: 'Wellness',
    url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Pulse Diagnosis & Consultation',
    category: 'Sanctuary',
    url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
  },
];

export default function GalleryPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-16 bg-[#27252a] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#de968d] text-xs font-semibold uppercase tracking-widest block mb-2">
            Sanctuary Ambience
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Sanctuary & Treatment Gallery
          </h1>
          <p className="text-zinc-300 max-w-2xl mx-auto text-sm md:text-base font-sans">
            Take a visual tour of our tranquil medical center, healing rooms, and authentic herbal practices.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={img.url}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="bg-[#de968d] text-white text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full mb-2 inline-block">
                  {img.category}
                </span>
                <h3 className="font-serif text-xl font-bold">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
