import React from 'react';
import { login } from './actions';
import AuthForm from '@/app/components/AuthForm';

export default function Login() {
  return (
    <AuthForm
      title="Login to your account"
      onSubmit={login}
      alternateText="Don't have an account yet?"
      alternateLink="Sign up"
      alternateHref="/signup"
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
