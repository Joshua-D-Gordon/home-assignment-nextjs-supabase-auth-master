'use client'
import React from 'react';
import { useSearchParams } from 'next/navigation';

export default function EmailVerification() {

    const searchParams = useSearchParams();
    const email = searchParams.get('email');

    return (
        <div className="flex items-center justify-center min-h-screen bg-purple-200">
            <div className="bg-white rounded-lg shadow-lg p-14 max-w-md text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Verify your email address
                </h2>
            <div className="bg-orange-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <span className='text-5xl'>📧</span>
            </div>
            
            <p className="text-gray-600 mb-6">
                We've sent a link to {email} Thanks for signing up! To start using SmartStorytime, please verify your email.
                Click it to confirm your address. You might need to<span className="font-semibold"> Check your spam folder.</span>
            </p>
            <button className="btn primary">
            Sure!
            </button>
            <button className="btn-outline">
                sure!
            </button>
            <p className="text-gray-500">
            Didn't get e-mail? <a href="#" className="text-blue-500">Send it again</a>
            </p>
        </div>
    </div>
     )
}