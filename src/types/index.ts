export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export interface Treatment {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  duration_minutes: number;
  price: number;
  currency: string;
  image_url: string;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  price: number;
  currency: string;
  stock_quantity: number;
  image_url: string;
  is_available: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Booking {
  id?: string;
  treatment_id?: string | null;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  preferred_date: string;
  preferred_time: string;
  notes?: string;
  status?: BookingStatus;
  created_at?: string;
  updated_at?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  slug: string;
}
