import { NextResponse } from 'next/server';
import { createBooking } from '@/lib/supabase';
import { validateBookingForm } from '@/lib/validators';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = validateBookingForm(body);

    if (!validation.isValid) {
      return NextResponse.json({ success: false, errors: validation.errors }, { status: 400 });
    }

    const result = await createBooking(body);
    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: result.data });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
