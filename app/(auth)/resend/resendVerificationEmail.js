'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export async function resendVerificationEmail(email) {
  const supabase = createClient();

  const { error } = await supabase.auth.resend({
    email,
  });

  if (error) {
    console.error('Resend email error:', error.message);
    return { success: false, message: error.message };
  }

  return { success: true };
}
