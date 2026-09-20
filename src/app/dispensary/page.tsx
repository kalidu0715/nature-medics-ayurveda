import React from 'react';
import Image from 'next/image';
import { getProducts } from '@/lib/supabase';

export const metadata = {
  title: 'Ayurvedic Dispensary | Nature Medics Ayurveda',
  description: 'Browse our collection of authentic Siddha & Ayurvedic oils, herbal powders, and elixirs prepared at Nature Medics Ayurveda.',
};

export default async function DispensaryPage() {
  const products = await getProducts();

  return (
    <div className="bg-[#faf7f2] min-h-screen">
      {/* Page Header */}
      <section className="py-16 bg-[#27252a] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#de968d] text-xs font-semibold uppercase tracking-widest block mb-2">
            Pure Herbal Remedies
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Ayurvedic Dispensary & Medicine
          </h1>
          <p className="text-zinc-300 max-w-2xl mx-auto text-sm md:text-base font-sans">
            Handcrafted medicated oils, organic herbal powders, and traditional elixirs for your daily wellness.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 w-full bg-zinc-100">
                  <Image
                    src={product.image_url || 'https://images.unsplash.com/photo-1608248597263-00079e96048a?auto=format&fit=crop&q=80&w=800'}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-[#27252a] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-[#27252a] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-4 font-sans">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="flex justify-between items-center py-3 border-t border-amber-100 mb-4 text-xs">
                  <span className="text-emerald-700 font-semibold">
                    ✓ In Stock ({product.stock_quantity} units)
                  </span>
                  <span className="text-[#de968d] font-bold text-lg">
                    {product.price.toLocaleString()} {product.currency}
                  </span>
                </div>

                <a
                  href={`https://api.whatsapp.com/send?phone=94718051110&text=Hello,%20I%20would%20like%20to%20order/inquire%20about%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Inquire / Order via WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
