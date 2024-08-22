'use client'; // This makes the component a client component

import React from 'react';
import Image from 'next/image';
import { createClient } from '@/utils/supabase/client';

export default function GoogleButton() {
  const handleGoogleSignIn = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });

    if (error) {
      console.error('Error signing in with Google:', error.message);
    }
  };

  return (
    <button
      className="btn-outline wide flex justify-center gap-2"
      onClick={handleGoogleSignIn}
      type="button"
    >
      <Image
        width="20"
        height="20"
        className="w-6 h-6"
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        loading="lazy"
        alt="Google logo"
      />
      <span className="font-semibold">Google</span>
    </button>
  );
}
