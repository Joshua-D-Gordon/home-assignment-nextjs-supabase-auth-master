import React from 'react';
import {signup } from './actions'
import AuthForm from '@/app/components/AuthForm';

export default function Signup() {
  return (
    <AuthForm
      title="Signup to an account"
      onSubmit={signup}
      alternateText="Have an account?"
      alternateLink="Login"
      alternateHref="/login"
    >
      <label htmlFor="email">Email address</label>
      <input
        id="email"
        name="email"
        type="email"
        required
        placeholder="Email address"
        className="w-full p-2 mb-4 bg-slate-50 border border-gray-200 text-gray-700 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        required
        placeholder="Password"
        className="w-full p-2 mb-4 bg-slate-50 border border-gray-200 text-gray-700 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </AuthForm>
);
}
