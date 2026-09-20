import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Our Services | Nature Medics Ayurveda Medical Center',
  description: 'Explore our complete range of authentic Ayurvedic services, therapies, and clinical treatments at Nature Medics Ayurveda.',
};

const servicesList = [
  {
    title: 'Panchakarma Full Body Purification',
    category: 'Detoxification',
    description: 'A 5-phase deep metabolic cleansing ritual tailored to purge cellular toxins (Ama), rejuvenate tissues, and balance Vata, Pitta, and Kapha.',
    icon: '🌿',
    highlights: ['Vamana & Virechana Detox', 'Basti & Nasya Therapies', 'Custom Herbal Dietary Plans'],
  },
  {
    title: 'Shirodhara Mind & Nervous System Therapy',
    category: 'Stress & Insomnia',
    description: 'Warm, continuous streaming of medicated herbal oils over the third eye. Promotes deep neurological relaxation and mental focus.',
    icon: '💧',
    highlights: ['Relieves Chronic Insomnia', 'Reduces Stress & Anxiety', 'Enhances Memory & Focus'],
  },
  {
    title: 'Abhyanga Therapeutic Body Massage',
    category: 'Rejuvenation',
    description: 'Full-body rhythmic massage using custom-blended herbal oils to improve lymphatic drainage, skin tone, and muscular vitality.',
    icon: '🌸',
    highlights: ['Improves Blood Circulation', 'Soothes Joint Stiffness', 'Nourishes Dry Skin'],
  },
  {
    title: 'Kizhi Herbal Poultice & Steam Therapy',
    category: 'Pain Relief',
    description: 'Warm herb-infused poultices applied to joints and muscles, followed by herbal steam bath to treat arthritis and muscular spasms.',
    icon: '🍃',
    highlights: ['Targeted Joint Pain Relief', 'Eases Muscular Tension', 'Improves Joint Flexibility'],
  },
  {
    title: 'Nadi Pariksha & Pulse Diagnosis',
    category: 'Clinical Consultation',
    description: 'Traditional pulse reading by certified Ayurvedic physicians to identify underlying dosha imbalance and formulate tailored remedies.',
    icon: '🩺',
    highlights: ['In-Depth Health Assessment', 'Root Cause Diagnosis', 'Personalized Prescriptions'],
  },
  {
    title: 'Mukha Lepanam Herbal Beauty Facial',
    category: 'Beauty & Skincare',
    description: 'Organic facial therapy using fresh herbal pastes, floral extracts, and sandalwood oils to restore natural skin glow.',
    icon: '✨',
    highlights: ['100% Chemical-Free Skincare', 'Deep Pore Cleansing', 'Natural Skin Radiance'],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#faf7f2] min-h-screen">
      {/* Header Banner */}
      <section className="py-16 bg-[#27252a] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#de968d] text-xs font-semibold uppercase tracking-widest block mb-2">
            Holistic Care
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Our Ayurvedic Services & Therapies
          </h1>
          <p className="text-zinc-300 max-w-2xl mx-auto text-sm md:text-base font-sans">
            Comprehensive healing solutions designed to address root health causes and restore lifelong balance.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-amber-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-4xl">{service.icon}</span>
                  <span className="bg-[#de968d]/15 text-[#de968d] text-xs font-semibold px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#27252a] mb-3">
                  {service.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed mb-6 font-sans">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-zinc-700 flex items-center space-x-2">
                      <span className="text-[#de968d] font-bold">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact#booking"
                className="block text-center w-full bg-[#27252a] hover:bg-[#de968d] text-white py-2.5 rounded-lg text-xs font-semibold transition-colors"
              >
                Book This Service
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
