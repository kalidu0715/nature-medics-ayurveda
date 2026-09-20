import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Nature Medics Ayurveda Medical Center',
  description: 'Learn about our history, traditional Sri Lankan Ayurvedic heritage, certified doctors, and sanctuary philosophy at Nature Medics Ayurveda.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative py-20 bg-[#27252a] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#de968d] text-xs font-semibold uppercase tracking-widest block mb-2">
            Heritage & Healing
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            About Nature Medics Ayurveda
          </h1>
          <p className="text-zinc-300 max-w-2xl mx-auto text-sm md:text-base font-sans">
            Dedicated to preserving traditional Sri Lankan Siddha and Ayurvedic medicine, providing holistic healing for mind, body, and spirit.
          </p>
        </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-[#de968d] text-sm font-semibold tracking-wider uppercase block mb-3">
              Ancient Roots
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#27252a] mb-6">
              Restoring Health Through Nature’s Intelligence
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Nature Medics Ayurveda was established with a singular vision: to bring authentic, uncompromised Ayurvedic and Siddha healing traditions to individuals seeking natural well-being and freedom from chronic disease.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-6">
              In Ayurveda, true health is not merely the absence of illness, but a harmonious balance between the body's three vital bio-energies (Doshas: Vata, Pitta, and Kapha), a clear mind, and pure spiritual radiance.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-amber-100">
              <div>
                <span className="block font-serif text-3xl font-bold text-[#de968d]">100%</span>
                <span className="text-xs text-zinc-500">Natural Organic Formulations</span>
              </div>
              <div>
                <span className="block font-serif text-3xl font-bold text-[#de968d]">Certified</span>
                <span className="text-xs text-zinc-500">Ayurvedic Physicians</span>
              </div>
            </div>
          </div>

          <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000"
              alt="Ayurvedic sanctuary herbal preparation"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* The 3 Doshas Section */}
        <div className="bg-[#faf7f2] p-10 md:p-14 rounded-2xl border border-amber-100/60 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-serif text-3xl font-bold text-[#27252a] mb-3">
              The Three Pillars of Ayurvedic Balance
            </h3>
            <p className="text-xs text-zinc-500">
              Every individual is born with a unique constitutional blend of the three doshas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-50">
              <div className="w-12 h-12 rounded-full bg-[#de968d]/20 text-[#de968d] flex items-center justify-center font-bold text-lg mb-4">
                💨
              </div>
              <h4 className="font-serif font-bold text-[#27252a] text-xl mb-2">Vata (Air & Ether)</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Controls all movement in the body, nerve impulses, and circulation. Balanced Vata promotes creativity and energy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-50">
              <div className="w-12 h-12 rounded-full bg-[#de968d]/20 text-[#de968d] flex items-center justify-center font-bold text-lg mb-4">
                🔥
              </div>
              <h4 className="font-serif font-bold text-[#27252a] text-xl mb-2">Pitta (Fire & Water)</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Governs digestion, body temperature, and metabolism. Balanced Pitta brings sharp intelligence and radiant skin.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-50">
              <div className="w-12 h-12 rounded-full bg-[#de968d]/20 text-[#de968d] flex items-center justify-center font-bold text-lg mb-4">
                🌊
              </div>
              <h4 className="font-serif font-bold text-[#27252a] text-xl mb-2">Kapha (Earth & Water)</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Maintains body structure, joint lubrication, and immune strength. Balanced Kapha fosters calmness and stamina.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#27252a] text-white p-10 rounded-2xl">
          <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
            Begin Your Wellness Journey Today
          </h3>
          <p className="text-sm text-zinc-300 max-w-xl mx-auto mb-6">
            Schedule a pulse consultation with our physician to receive personalized dietary, lifestyle, and treatment advice.
          </p>
          <Link
            href="/contact#booking"
            className="inline-block bg-[#de968d] hover:bg-[#c57b72] text-white font-semibold px-8 py-3.5 rounded shadow-lg transition-all text-sm"
          >
            Book Appointment Now
          </Link>
        </div>
      </section>
    </div>
  );
}
