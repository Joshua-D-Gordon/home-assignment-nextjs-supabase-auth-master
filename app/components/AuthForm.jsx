import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../components/logo.svg';
import GoogleButton from './GoogleButton';

export default function AuthForm({ title, onSubmit, children, alternateText, alternateLink, alternateHref }) {
    
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
            <GoogleButton />
          </div>
        </div>
      </div>
    </main>
  );
}
