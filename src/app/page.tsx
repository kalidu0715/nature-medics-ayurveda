import Hero from '@/components/home/Hero';
import Overview from '@/components/home/Overview';
import QuichLinks from '@/components/home/QuichLinks';
import BookingForm from '@/components/forms/BookingForm';
import { getTreatments } from '@/lib/supabase';

export default async function Home() {
  const treatments = await getTreatments();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Carousel */}
      <Hero />

      {/* Sanctuary Overview & Philosophy */}
      <Overview />

      {/* Featured Treatment Packages */}
      <QuichLinks />

      {/* Reservation & Booking Section */}
      <section className="py-20 bg-[#faf7f2] border-t border-amber-100">
        <div className="max-w-4xl mx-auto px-6">
          <BookingForm treatments={treatments} />
        </div>
      </section>
    </div>
  );
}
