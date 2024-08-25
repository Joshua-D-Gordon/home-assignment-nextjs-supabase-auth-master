'use client'; // Add this line to make the component a client component

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../components/logo.svg';
import GoogleButton from './GoogleButton';

export default function AuthForm({ title, onSubmit, children, alternateText, alternateLink, alternateHref }) {
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = await onSubmit(formData);

    if (result?.error) {
      setError(result.error); // Set the error message to be displayed
    } else {
      // If login is successful, you can handle redirection here if necessary
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
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          {children}
          <button type="submit" className="btn primary wide mb-4">
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
