import React from 'react';

export default function Guide() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">How to Use SmartStorytime</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">1. Sign Up & Verify Your Email</h2>
        <p className="text-lg text-gray-700 mb-6">
          Start by creating an account. Click on the "Sign Up" button on the homepage, fill in your details, and submit the form. Once done, you'll receive a verification email. Make sure to check your inbox (or spam folder) and click on the verification link to activate your account.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">2. Create Your First Story</h2>
        <p className="text-lg text-gray-700 mb-6">
          Once your account is verified, log in to your dashboard and click on the "Create New Story" button. You'll be guided through a simple process to add a title, choose a theme, and start writing your story. You can save your progress at any time and come back to it later.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">3. Customize Your Story</h2>
        <p className="text-lg text-gray-700 mb-6">
          Make your story unique by adding illustrations, choosing fonts, and personalizing it with your child's name and preferences. The platform provides a range of tools to help you create a beautiful, engaging story.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">4. Save & Share Your Story</h2>
        <p className="text-lg text-gray-700 mb-6">
          After customizing your story, save it to your library. You can read it anytime or share it with friends and family via a link. Stories can also be printed if you prefer a physical copy.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">5. Explore & Read</h2>
        <p className="text-lg text-gray-700 mb-6">
          Browse through your library to read your saved stories. You can also discover new stories created by others, perfect for reading during bedtime or any storytelling moment.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">6. Need Help?</h2>
        <p className="text-lg text-gray-700 mb-6">
          If you encounter any issues or have questions, our support team is here to help. Click on the "Contact Support" button in your dashboard or visit our FAQ page for more information.
        </p>
      </section>

      <div className="text-center">
        <a href="/dashboard" className="bg-purple-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-purple-700 transition duration-300">
          Go to Dashboard
        </a>
      </div>
    </div>
  );
}
