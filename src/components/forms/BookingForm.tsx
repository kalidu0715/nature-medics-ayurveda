'use client';

import React, { useState } from 'react';
import { Treatment } from '@/types';
import { validateBookingForm } from '@/lib/validators';
import { createBooking } from '@/lib/supabase';

interface BookingFormProps {
  treatments?: Treatment[];
}

export default function BookingForm({ treatments = [] }: BookingFormProps) {
  const [formData, setFormData] = useState({
    treatment_id: '',
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    preferred_date: '',
    preferred_time: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(null);
    setErrorMessage(null);

    const validation = validateBookingForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setSubmitting(true);
    try {
      const result = await createBooking(formData);
      if (result.success) {
        setSuccessMessage('Thank you! Your appointment request has been submitted successfully. Our team will contact you shortly to confirm your booking.');
        setFormData({
          treatment_id: '',
          customer_name: '',
          customer_email: '',
          customer_phone: '',
          preferred_date: '',
          preferred_time: '',
          notes: '',
        });
        setErrors({});
      } else {
        setErrorMessage(result.error || 'Failed to submit booking. Please try again or call us directly.');
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="booking" className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-amber-100">
      <div className="mb-8">
        <span className="text-[#de968d] text-xs font-semibold uppercase tracking-widest block mb-1">
          Reservation
        </span>
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#27252a]">
          Book Your Consultation & Treatment
        </h3>
        <p className="text-xs text-zinc-500 mt-2">
          Select your preferred treatment, date, and time. We will get in touch to confirm your appointment.
        </p>
      </div>

      {successMessage && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-sm">
          <p className="font-semibold">Booking Request Received!</p>
          <p className="mt-1 text-xs">{successMessage}</p>
        </div>
      )}

      {errorMessage && (
        <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-lg text-sm">
          <p className="font-semibold">Submission Error</p>
          <p className="mt-1 text-xs">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-xs font-semibold text-zinc-700 uppercase mb-2">
            Select Treatment Plan (Optional)
          </label>
          <select
            name="treatment_id"
            value={formData.treatment_id}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-[#de968d] focus:ring-1 focus:ring-[#de968d] outline-none text-sm transition-all bg-white"
          >
            <option value="">-- Doctor Consultation / General Inquiry --</option>
            {treatments.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name} ({t.duration_minutes} Mins - {t.price} {t.currency})
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-xs font-semibold text-zinc-700 uppercase mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="customer_name"
              value={formData.customer_name}
              onChange={handleChange}
              placeholder="e.g. Ruwan Silva"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.customer_name ? 'border-rose-500' : 'border-zinc-200'
              } focus:border-[#de968d] focus:ring-1 focus:ring-[#de968d] outline-none text-sm transition-all`}
            />
            {errors.customer_name && (
              <p className="text-xs text-rose-500 mt-1">{errors.customer_name}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-700 uppercase mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="customer_email"
              value={formData.customer_email}
              onChange={handleChange}
              placeholder="name@example.com"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.customer_email ? 'border-rose-500' : 'border-zinc-200'
              } focus:border-[#de968d] focus:ring-1 focus:ring-[#de968d] outline-none text-sm transition-all`}
            />
            {errors.customer_email && (
              <p className="text-xs text-rose-500 mt-1">{errors.customer_email}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-700 uppercase mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="customer_phone"
              value={formData.customer_phone}
              onChange={handleChange}
              placeholder="+94 7X XXX XXXX"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.customer_phone ? 'border-rose-500' : 'border-zinc-200'
              } focus:border-[#de968d] focus:ring-1 focus:ring-[#de968d] outline-none text-sm transition-all`}
            />
            {errors.customer_phone && (
              <p className="text-xs text-rose-500 mt-1">{errors.customer_phone}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold text-zinc-700 uppercase mb-2">
              Preferred Date *
            </label>
            <input
              type="date"
              name="preferred_date"
              min={new Date().toISOString().split('T')[0]}
              value={formData.preferred_date}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.preferred_date ? 'border-rose-500' : 'border-zinc-200'
              } focus:border-[#de968d] focus:ring-1 focus:ring-[#de968d] outline-none text-sm transition-all`}
            />
            {errors.preferred_date && (
              <p className="text-xs text-rose-500 mt-1">{errors.preferred_date}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-700 uppercase mb-2">
              Preferred Time *
            </label>
            <select
              name="preferred_time"
              value={formData.preferred_time}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.preferred_time ? 'border-rose-500' : 'border-zinc-200'
              } focus:border-[#de968d] focus:ring-1 focus:ring-[#de968d] outline-none text-sm transition-all bg-white`}
            >
              <option value="">Select Time Slot</option>
              <option value="09:00">09:00 AM</option>
              <option value="10:30">10:30 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="14:00">02:00 PM</option>
              <option value="15:30">03:30 PM</option>
              <option value="17:00">05:00 PM</option>
            </select>
            {errors.preferred_time && (
              <p className="text-xs text-rose-500 mt-1">{errors.preferred_time}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-zinc-700 uppercase mb-2">
            Health Notes & Additional Requests
          </label>
          <textarea
            name="notes"
            rows={3}
            value={formData.notes}
            onChange={handleChange}
            placeholder="Mention any specific health concerns, allergies, or questions for the doctor..."
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-[#de968d] focus:ring-1 focus:ring-[#de968d] outline-none text-sm transition-all"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-[#de968d] hover:bg-[#c57b72] text-white font-semibold py-4 rounded-lg shadow-md transition-all duration-300 text-sm md:text-base tracking-wide flex items-center justify-center space-x-2"
        >
          {submitting ? (
            <span>Submitting Request...</span>
          ) : (
            <>
              <span>Confirm Appointment Booking</span>
              <span>→</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
