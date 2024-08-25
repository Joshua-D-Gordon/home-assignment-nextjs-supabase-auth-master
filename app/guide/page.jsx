'use client';
import React from 'react';
import Image from 'next/image';
import guideHero from '../../public/guideheroimg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faGraduationCap, faUser, faEnvelope, faWandMagicSparkles, faBookBookmark } from '@fortawesome/free-solid-svg-icons';

export default function Guide() {
  return (
    <div className="font-sans text-gray-800">
      
      {/* Hero Section */}
      <section className="bg-orange-600 text-white py-10">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Helping Children Overcome Challenges through Storytelling
              </h1>
              <p className="text-lg mb-2">
                SmartStorytime is designed to support parents in guiding their children through life’s challenges. Create personalized stories where characters face and overcome obstacles similar to those your child is experiencing.
              </p>
            </div>
            <div className="lg:w-1/2 mt-4 lg:mt-0">
              <Image
                src={guideHero}
                alt="Parent and Child"
                className="w-full h-auto rounded-xl ml-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Steps to Get Started */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl font-bold mb-12">Getting Started</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <div className="mb-4 text-orange-500">
                <FontAwesomeIcon icon={faEnvelope} className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Sign Up & Verify Email</h3>
              <p>
                Create an account and verify your email address to get started with SmartStorytime.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <div className="mb-4 text-purple-500">
                <FontAwesomeIcon icon={faWandMagicSparkles} className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Create a Story</h3>
              <p>
                Use our platform to create a personalized story that mirrors the challenges your child is facing.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <div className="mb-4 text-orange-500">
                <FontAwesomeIcon icon={faBookBookmark} className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Save to Your Library</h3>
              <p>
                Save your story to your library for easy access and share it with your child at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices for Writing Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center mb-12">Best Practices for Writing Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Understand Your Child's Challenges</h3>
              <p className="text-gray-700">
                Identify the specific challenges your child is facing and focus the story around these. Whether it’s about sharing, overcoming fear, or building confidence, make the story relatable.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Use Positive Reinforcement</h3>
              <p className="text-gray-700">
                Ensure the story provides positive reinforcement, showing the character overcoming the challenge and the benefits of doing so.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Keep It Simple</h3>
              <p className="text-gray-700">
                Use simple language that your child can understand. The goal is to make the story engaging and easy to follow.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Include Interactive Elements</h3>
              <p className="text-gray-700">
                Add interactive elements where your child can make choices in the story, making them feel involved in the narrative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="bg-white shadow-lg rounded-lg p-6 text-left text-gray-700">
            <div className="mb-4">
              <div className="flex justify-between items-center cursor-pointer">
                <p className="font-medium">What is SmartStorytime?</p>
                
              </div>
              <p className="mt-2">
                SmartStorytime is a personalized storytelling platform that helps children overcome challenges through engaging narratives.
              </p>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center cursor-pointer">
                <p className="font-medium">How does the AI generate stories?</p>
                
              </div>
              <p className="mt-2">
                Our AI analyzes the challenges you’ve specified and crafts a story tailored to your child’s needs, ensuring a positive and educational experience.
              </p>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center cursor-pointer">
                <p className="font-medium">Is SmartStorytime safe for children?</p>
                
              </div>
              <p className="mt-2">
                Absolutely! We prioritize your child's safety with secure content and a completely ad-free experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl font-bold mb-12">Key Features & Benefits</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <div className="mb-4 text-orange-500">
                <FontAwesomeIcon icon={faUser} className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Personalized Stories</h3>
              <p className="text-gray-700">
                Each story is customized to address your child’s specific challenges, ensuring a relevant and impactful experience.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <div className="mb-4 text-purple-500">
                <FontAwesomeIcon icon={faGraduationCap} className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Interactive Learning</h3>
              <p className="text-gray-700">
                Interactive elements make the stories more engaging, allowing your child to make decisions and be part of the story.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <div className="mb-4 text-orange-500">
                <FontAwesomeIcon icon={faUserShield} className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Safe & Ad-Free</h3>
              <p className="text-gray-700">
                SmartStorytime is a secure and ad-free platform, providing a safe environment for your child to enjoy their stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open to Suggestions Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl font-bold mb-12">We Value Your Feedback</h2>
          <p className="text-lg text-gray-700 mb-8">
            We're constantly improving SmartStorytime and we'd love to hear from you! If you have suggestions, ideas, or feedback, please let us know.
          </p>
          <div className="text-center">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
              Share Your Thoughts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
