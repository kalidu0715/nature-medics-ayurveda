import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getTreatments } from '@/lib/supabase';
import BookingForm from '@/components/forms/BookingForm';

export const metadata = {
  title: 'Treatment Plans | Nature Medics Ayurveda Medical Center',
  description: 'View pricing, durations, and details for all Ayurvedic treatment packages at Nature Medics Ayurveda.',
};

export default async function TreatmentsPage() {
  const treatments = await getTreatments();

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="py-16 bg-[#27252a] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#de968d] text-xs font-semibold uppercase tracking-widest block mb-2">
            Therapeutic Packages
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Ayurvedic Treatment Plans & Pricing
          </h1>
          <p className="text-zinc-300 max-w-2xl mx-auto text-sm md:text-base font-sans">
            Choose from our specialized therapy sessions or schedule a doctor consultation for a customized care plan.
          </p>
        </div>
      </section>

      {/* Treatments List */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {treatments.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-[#faf7f2] rounded-2xl overflow-hidden border border-amber-100/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full">
                  <Image
                    src={treatment.image_url || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800'}
                    alt={treatment.name}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-white/95 text-[#27252a] text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    {treatment.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-[#27252a] mb-2">
                    {treatment.name}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed mb-6 font-sans">
                    {treatment.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="flex justify-between items-center py-3 border-t border-amber-200/50 mb-4 text-xs font-medium">
                  <span className="text-zinc-500">⏱ {treatment.duration_minutes} Minutes</span>
                  <span className="text-[#de968d] font-bold text-base">
                    {treatment.price.toLocaleString()} {treatment.currency}
                  </span>
                </div>

                <Link
                  href={`/contact#booking`}
                  className="block text-center w-full bg-[#27252a] hover:bg-[#de968d] text-white py-3 rounded-lg text-xs font-semibold transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Form Integration */}
        <div className="max-w-4xl mx-auto">
          <BookingForm treatments={treatments} />
        </div>
      </section>
    </div>
  );
}
