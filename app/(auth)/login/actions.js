'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

export async function login(formData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.error('Login Error', error.message)
    return { error: error.message };
  }

  revalidatePath('/', 'layout')
  redirect('/')
  return { success: true };
}
