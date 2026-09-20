import { Booking } from '@/types';

export function validateBookingForm(data: Partial<Booking>): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.customer_name || data.customer_name.trim().length < 2) {
    errors.customer_name = 'Please enter your full name.';
  }

  if (!data.customer_email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.customer_email)) {
    errors.customer_email = 'Please enter a valid email address.';
  }

  if (!data.customer_phone || data.customer_phone.trim().length < 7) {
    errors.customer_phone = 'Please enter a valid phone number.';
  }

  if (!data.preferred_date) {
    errors.preferred_date = 'Please select a preferred date.';
  }

  if (!data.preferred_time) {
    errors.preferred_time = 'Please select a preferred time.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
