'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../components/logo.svg';
import { createClient } from '@/utils/supabase/client'

export default function AuthForm({ title, onSubmit, children, alternateText, alternateLink, alternateHref }) {
    
    const handleGoogleSignIn = async () => {
        const supabase = createClient()
        const {error} = await supabase.auth.signInWithOAuth({
            provider: 'google',
        });

        if(error){
            console.error('Error signing in with Google:', error.message);
        }
    };
  return (
    <main>
      <div className="card narrow">
        <div className="flex flex-col items-center pb-6">
          <div className="navbar-logo">
            <Image src={Logo} alt="Smart Storytime" width={230} quality={100} />
          </div>
          <h2>{title}</h2>
        </div>
        <form>
          {children}
          <button formAction={onSubmit} className="btn primary wide mb-4">
            Submit
          </button>
        </form>
        <div className="flex flex-col justify-center items-center text-sm">
          <p>{alternateText} <Link href={alternateHref} className="btn-link">{alternateLink}</Link></p>
          <div className="flex flex-row w-full items-center gap-2 pt-6 pb-4 text-sm text-slate-600">
            <div className="h-px w-1/4 bg-slate-200"></div>
            <p className="w-2/4 text-center">Or continue with</p>
            <div className="h-px w-1/4 bg-slate-200"></div>
          </div>
          <div className="w-full flex items-center justify-center">
            <button 
            className="btn-outline wide flex justify-center gap-2"
            onClick={handleGoogleSignIn}
            type='button'>
              <Image width="20" height="20" className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="Google logo" />
              <span className="font-semibold">Google</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
