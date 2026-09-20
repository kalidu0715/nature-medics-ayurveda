import React from 'react';
import BookingForm from '@/components/forms/BookingForm';
import ContactForm from '@/components/forms/ContactForm';
import { getTreatments } from '@/lib/supabase';

export const metadata = {
  title: 'Contact Us & Location | Nature Medics Ayurveda',
  description: 'Book an appointment, contact our Ayurvedic medical center, or find location & opening hours for Nature Medics Ayurveda.',
};

export default async function ContactPage() {
  const treatments = await getTreatments();

  return (
    <div className="bg-[#faf7f2] min-h-screen">
      {/* Header */}
      <section className="py-16 bg-[#27252a] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#de968d] text-xs font-semibold uppercase tracking-widest block mb-2">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Contact & Location Details
          </h1>
          <p className="text-zinc-300 max-w-2xl mx-auto text-sm md:text-base font-sans">
            We look forward to welcoming you to Nature Medics Ayurveda Medical Center.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-amber-100/60 flex items-start space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#de968d]/20 text-[#de968d] flex items-center justify-center text-xl shrink-0">
              📞
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#27252a] mb-1">Phone & WhatsApp</h3>
              <p className="text-xs text-zinc-500 mb-3">Call or message us directly:</p>
              <a href="tel:+94718051110" className="block text-sm font-bold text-[#de968d] hover:underline">
                +94 71 805 1110
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-amber-100/60 flex items-start space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#de968d]/20 text-[#de968d] flex items-center justify-center text-xl shrink-0">
              ✉️
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#27252a] mb-1">Email Inquiries</h3>
              <p className="text-xs text-zinc-500 mb-3">Send us an email anytime:</p>
              <a href="mailto:suwaniayu@gmail.com" className="block text-sm font-bold text-[#de968d] hover:underline">
                suwaniayu@gmail.com
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-amber-100/60 flex items-start space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#de968d]/20 text-[#de968d] flex items-center justify-center text-xl shrink-0">
              📍
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#27252a] mb-1">Center Location</h3>
              <p className="text-xs text-zinc-500 mb-1">Nature Medics Ayurveda</p>
              <p className="text-xs text-zinc-600 font-medium">Sri Lanka</p>
            </div>
          </div>
        </div>

        {/* Forms Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Reservation Form */}
          <div className="lg:col-span-7">
            <BookingForm treatments={treatments} />
          </div>

          {/* Direct Contact Form & Hours */}
          <div className="lg:col-span-5 space-y-8">
            <ContactForm />

            <div className="bg-white p-8 rounded-2xl border border-amber-100 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#27252a] mb-4">
                Operating Hours
              </h3>
              <ul className="space-y-3 text-xs text-zinc-600">
                <li className="flex justify-between py-1 border-b border-zinc-100">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-[#27252a]">8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between py-1 border-b border-zinc-100">
                  <span>Saturday</span>
                  <span className="font-semibold text-[#27252a]">8:30 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between py-1">
                  <span>Sunday & Poya Days</span>
                  <span className="font-semibold text-[#27252a]">9:00 AM - 4:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-amber-100 h-96 w-full">
          <iframe
            title="Nature Medics Ayurveda Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58585987114!2d79.82118595000001!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13db7bc5a1a1b1a!2sSri%20Lanka!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
