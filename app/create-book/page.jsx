import React from 'react';
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export default async function CreateBook() {
  const supabase = createClient()
  const {data, error} = await supabase.auth.getUser()

  // If user not logged in, redirect to the home page 
  if(error || !data?.user){
    console.error('user not logged in')
    return redirect('/login')
  }else{
    console.error('user logged in')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="w-full max-w-2xl mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Create Your Story</h1>
        <p className="text-lg text-gray-600">Let your imagination run wild and create a unique story that will captivate readers.</p>
      </div>

      {/* Form */}
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <form>
          {/* Book Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
              Book Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter your book title"
              className="w-full p-3 bg-gray-50 border border-gray-300 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Author */}
          <div className="mb-4">
            <label htmlFor="author" className="block text-gray-700 font-medium mb-2">
              Author Name
            </label>
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Enter the author's name"
              className="w-full p-3 bg-gray-50 border border-gray-300 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Book Content */}
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
              Story Content
            </label>
            <textarea
              id="content"
              name="content"
              placeholder="Write your story here..."
              rows="8"
              className="w-full p-3 bg-gray-50 border border-gray-300 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-150">
              Create Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
