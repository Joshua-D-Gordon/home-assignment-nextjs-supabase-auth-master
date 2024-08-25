'use client';
import React, { useState } from 'react';
import sharingTree from '../../public/sharingtree.png'
import hairCut from '../../public/haircut.png'
import scaredBunny from '../../public/scaredbunny.png'
import Image from 'next/image';
import Link from 'next/link';

export default async function Library() {

  // Example data for the books
  const books = [
    {
      id: 1,
      title: 'The Sharing Tree',
      description: 'A heartwarming story that teaches the importance of sharing toys and the joy it brings to everyone involved.',
      coverImage: sharingTree, // Update with the actual file name and path
    },
    {
      id: 2,
      title: 'The Haircut Adventure',
      description: 'A fun and reassuring tale about a child’s first trip to the hair salon, turning what could be a scary experience into a brave adventure.',
      coverImage: hairCut, // Update with the actual file name and path
    },
    {
      id: 3,
      title: 'The Brave Little Bunny',
      description: 'Follow the journey of a little bunny who learns to face fears and find courage in the most unexpected places.',
      coverImage: scaredBunny, // Update with the actual file name and path
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('recent');
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 6;

  // Filter, search, and sort books
  const filteredBooks = books
    .filter((book) =>
      filter === 'all' || book.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === 'alphabetical') {
        return a.title.localeCompare(b.title);
      }
      return b.id - a.id;
    });

  // Pagination logic
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Your Library</h1>

      {/* Search Bar and Filter/Sort Options */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <input
          type="text"
          placeholder="Search for a story..."
          className="w-full md:w-1/2 lg:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4 md:mb-0"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex space-x-4">
          <select
            className="border border-gray-300 rounded-lg px-4 py-2"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Genres</option>
            <option value="adventure">Adventure</option>
            <option value="fantasy">Fantasy</option>
            <option value="science-fiction">Science Fiction</option>
            {/* Add more genres */}
          </select>
          <select
            className="border border-gray-300 rounded-lg px-4 py-2"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="recent">Most Recent</option>
            <option value="alphabetical">Alphabetical</option>
            {/* Add more sort options */}
          </select>
        </div>
      </div>

      {/* Add New Book Button */}
      <div className="text-right mb-8">
        <Link href="/create-book">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
            Add New Story
            </button>
        </Link>
      </div>

      {/* Book Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-200"
          >
            <Image
              src={book.coverImage}
              alt={book.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
              <p className="text-gray-700 mb-4">{book.description}</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <button
          className={`px-4 py-2 border border-gray-300 rounded-lg mr-2 ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className={`px-4 py-2 border border-gray-300 rounded-lg ${
            indexOfLastBook >= filteredBooks.length ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastBook >= filteredBooks.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}
