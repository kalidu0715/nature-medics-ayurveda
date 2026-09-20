import { createClient } from '@supabase/supabase-js';
import { Treatment, Product, Booking } from '@/types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Initial seed / fallback data matching Nature Medics Ayurveda
export const MOCK_TREATMENTS: Treatment[] = [
  {
    id: '1',
    name: 'Panchakarma Full Detoxification',
    slug: 'panchakarma-detox',
    category: 'Detoxification',
    description: 'A comprehensive 5-fold Ayurvedic detoxification procedure designed to purify body tissues, balance the three doshas (Vata, Pitta, Kapha), and eliminate deep-seated toxins.',
    duration_minutes: 120,
    price: 15000,
    currency: 'LKR',
    image_url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
    is_active: true,
  },
  {
    id: '2',
    name: 'Shirodhara Mind & Stress Relief Therapy',
    slug: 'shirodhara-therapy',
    category: 'Rejuvenation',
    description: 'A continuous, gentle stream of warm medicated herbal oil poured over the forehead (third eye). Relieves stress, insomnia, anxiety, and enhances mental clarity.',
    duration_minutes: 60,
    price: 8500,
    currency: 'LKR',
    image_url: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800',
    is_active: true,
  },
  {
    id: '3',
    name: 'Abhyanga Full Body Herbal Massage',
    slug: 'abhyanga-massage',
    category: 'Massage Therapy',
    description: 'Traditional full-body rhythmic massage using custom-selected herbal oils. Improves blood circulation, eases joint stiffness, and rejuvenates skin tone.',
    duration_minutes: 90,
    price: 9500,
    currency: 'LKR',
    image_url: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800',
    is_active: true,
  },
  {
    id: '4',
    name: 'Kizhi Herbal Steam & Bolus Therapy',
    slug: 'kizhi-herbal-therapy',
    category: 'Pain Management',
    description: 'Application of warm poultices filled with ground herbs and oils. Targeted treatment for arthritis, muscular aches, chronic back pain, and joint inflammation.',
    duration_minutes: 60,
    price: 7500,
    currency: 'LKR',
    image_url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800',
    is_active: true,
  },
  {
    id: '5',
    name: 'Ayurvedic Pulse Diagnosis & Doctor Consultation',
    slug: 'ayurvedic-consultation',
    category: 'Consultation',
    description: 'In-depth consultation with our certified Ayurvedic physician (Nadi Pariksha / Pulse Reading) to assess dosha constitution and provide custom herbal prescriptions.',
    duration_minutes: 45,
    price: 3500,
    currency: 'LKR',
    image_url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    is_active: true,
  },
  {
    id: '6',
    name: 'Mukha Lepanam Herbal Facial & Skin Care',
    slug: 'mukha-lepanam-facial',
    category: 'Beauty & Wellness',
    description: 'Natural facial treatment using organic herbal pastes, exotic flower extracts, and sandalwood oils to restore natural radiance and glow to skin.',
    duration_minutes: 60,
    price: 6500,
    currency: 'LKR',
    image_url: 'https://images.unsplash.com/photo-1512290900673-2067406a6b82?auto=format&fit=crop&q=80&w=800',
    is_active: true,
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Nature Medics Herbal Rejuvenation Oil',
    slug: 'rejuvenation-oil',
    category: 'Oils',
    description: 'Authentic Siddha medicated oil prepared with rare mountain herbs to nourish hair, scalp, and skin.',
    price: 2400,
    currency: 'LKR',
    stock_quantity: 50,
    image_url: 'https://images.unsplash.com/photo-1608248597263-00079e96048a?auto=format&fit=crop&q=80&w=800',
    is_available: true,
  },
  {
    id: '2',
    name: 'Pure Organic Triphala Powder (200g)',
    slug: 'triphala-powder',
    category: 'Herbal Powders',
    description: 'Traditional blend of Haritaki, Bibhitaki, and Amalaki for digestive wellness and body cleansing.',
    price: 1800,
    currency: 'LKR',
    stock_quantity: 100,
    image_url: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800',
    is_available: true,
  },
  {
    id: '3',
    name: 'Ayurvedic Immune Immunity Arishta',
    slug: 'immunity-arishta',
    category: 'Elixirs',
    description: 'Fermented herbal tonic formulated to enhance vital energy (Ojas) and natural immunity.',
    price: 3200,
    currency: 'LKR',
    stock_quantity: 35,
    image_url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
    is_available: true,
  }
];

// Helper functions with Supabase query + fallback
export async function getTreatments(): Promise<Treatment[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('treatments')
        .select('*')
        .eq('is_active', true)
        .order('name');
      if (!error && data && data.length > 0) {
        return data as Treatment[];
      }
    } catch (err) {
      console.warn('Supabase fetch treatments failed, fallback to mock data:', err);
    }
  }
  return MOCK_TREATMENTS;
}

export async function getProducts(): Promise<Product[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_available', true)
        .order('name');
      if (!error && data && data.length > 0) {
        return data as Product[];
      }
    } catch (err) {
      console.warn('Supabase fetch products failed, fallback to mock data:', err);
    }
  }
  return MOCK_PRODUCTS;
}

export async function createBooking(booking: Booking): Promise<{ success: boolean; data?: any; error?: string }> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('bookings')
        .insert([booking])
        .select();
      if (error) {
        return { success: false, error: error.message };
      }
      return { success: true, data };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Failed to connect to Supabase database.' };
    }
  }

  // Fallback local simulation
  console.log('[MOCK BOOKING CREATED]', booking);
  return { success: true, data: [{ ...booking, id: 'mock-booking-' + Date.now(), status: 'pending' }] };
}
