'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-[#faf7f2] p-8 rounded-2xl border border-amber-100/60 shadow-sm">
      <h3 className="font-serif text-2xl font-bold text-[#27252a] mb-2">
        Send Us a Direct Message
      </h3>
      <p className="text-xs text-zinc-500 mb-6 font-sans">
        Have questions about our treatments or dispensary? Drop us a message below.
      </p>

      {submitted ? (
        <div className="p-4 bg-emerald-50 text-emerald-800 rounded-lg text-sm mb-4">
          Message sent successfully! We will reply to your email shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-700 uppercase mb-1">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-md border border-zinc-200 focus:border-[#de968d] outline-none text-sm bg-white"
              placeholder="Full Name"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-700 uppercase mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-md border border-zinc-200 focus:border-[#de968d] outline-none text-sm bg-white"
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-700 uppercase mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-md border border-zinc-200 focus:border-[#de968d] outline-none text-sm bg-white"
                placeholder="+94 7X XXX XXXX"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-700 uppercase mb-1">
              Message *
            </label>
            <textarea
              rows={4}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-md border border-zinc-200 focus:border-[#de968d] outline-none text-sm bg-white"
              placeholder="Write your inquiry or message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#27252a] hover:bg-[#de968d] text-white font-medium py-3 rounded-md transition-colors text-sm"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
