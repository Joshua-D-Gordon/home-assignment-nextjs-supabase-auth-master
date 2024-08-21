import React from 'react';
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export default async function CreateBook() {
  const supabase = createClient()
  const {data, error} = await supabase.auth.getUser()

  // If user not logged in, redirect to the home page 
  if(error || !data?.user){
    console.error('user not logged in')
    return redirect('/login')
  }else{
    console.error('user logged in')
  }

  return (
  <main>
    CreateBook (Secure) - only logged in user can access
  </main>
  );
}
