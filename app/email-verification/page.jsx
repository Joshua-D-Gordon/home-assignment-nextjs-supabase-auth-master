'use client';
import React, { useState, useTransition } from 'react';
import { useSearchParams } from 'next/navigation';
import EmailImage from '../../public/email.png';
import Image from 'next/image';
import { resendVerificationEmail } from '../(auth)/resend/resendVerificationEmail'; // Update with the correct path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function EmailVerification() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const [message, setMessage] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleResend = () => {
    startTransition(async () => {
      const result = await resendVerificationEmail(email);
      if (result.success) {
        setMessage('Verification email resent. Please check your inbox.');
      } else {
        setMessage(`Error: ${result.message}`);
      }
    });
  };

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-200 p-4">
      {/* Progress Indicator */}
      <div className="w-full max-w-md mb-2">
        <div className="flex justify-between text-sm text-gray-600">
          <div className="text-orange-500 font-semibold">Sign Up</div>
          <div className="text-orange-500 font-semibold">Email Verification</div>
          <div className="text-gray-400 font-semibold">Welcome!</div>
        </div>
        <div className="relative pt-1">
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
            <div
              style={{ width: '66%' }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"
            ></div>
          </div>
        </div>
      </div>

      {/* Email Verification Card */}
      <div className="bg-white shadow-lg rounded-lg text-center p-4 mb-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Verify your email address 📧</h2>
        <Image src={EmailImage} height={250} className="rounded-lg mb-4" />

        <p className="text-gray-600 mb-6">
          Thanks for signing up! To start using SmartStorytime, please verify your email by clicking the link we sent.
          We've sent a link to {email}. You might need to
          <span className="font-semibold"> check your spam folder.</span>
        </p>
        <p className="text-gray-500 mb-6">
          Didn't get the email?{' '}
          <button
            onClick={handleResend}
            disabled={isPending}
            className="text-blue-500 hover:underline focus:outline-none"
          >
            Send it again
          </button>
        </p>

        {/* Time Expectation */}
        <p className="text-sm text-gray-600 mb-4">
          You should receive the email within a few minutes. Once your email is verified, you’ll be redirected to your
          personalized dashboard.
        </p>

        {/* Message Display */}
        {message && <p className="text-green-500 mt-4">{message}</p>}

        {/* FAQs Related to Email Verification - Accordion */}
        <div className="bg-gray-100 p-4 rounded-lg text-left text-gray-700 mb-4 w-full max-w-lg lg:max-w-md mx-auto">
          <h3 className="text-lg font-semibold mb-4">FAQs</h3>
          {/* Accordion Item 1 */}
          <div className="mb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(1)}
            >
              <p className="font-medium">What should I do if I don’t receive the email?</p>
              <FontAwesomeIcon icon={openIndex === 1 ? faChevronUp : faChevronDown} />
            </div>
            {openIndex === 1 && (
              <div className="mt-2">
                <p className="mb-2">
                  Check your spam folder and make sure you entered the correct email. You can also{' '}
                  <button
                    onClick={handleResend}
                    disabled={isPending}
                    className="text-blue-500 hover:underline focus:outline-none"
                  >
                    resend the email
                  </button>
                  .
                </p>
              </div>
            )}
          </div>
          {/* Accordion Item 2 */}
          <div className="mb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(2)}
            >
              <p className="font-medium">How long does it take to receive the email?</p>
              <FontAwesomeIcon icon={openIndex === 2 ? faChevronUp : faChevronDown} />
            </div>
            {openIndex === 2 && (
              <div className="mt-2">
                <p>
                  It should arrive within a few minutes. If not, please contact our support team for assistance.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="text-center">
        <p className="text-gray-600">
          Need help? <a href="#" className="text-blue-500 hover:underline">Contact our support team</a>.
        </p>
      </div>
    </div>
  );
}
