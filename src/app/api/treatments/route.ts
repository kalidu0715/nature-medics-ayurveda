import { NextResponse } from 'next/server';
import { getTreatments } from '@/lib/supabase';

export async function GET() {
  try {
    const treatments = await getTreatments();
    return NextResponse.json({ success: true, data: treatments });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message || 'Failed to fetch treatments' }, { status: 500 });
  }
}
