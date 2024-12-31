import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block bg-pink-400 text-white px-8 py-3 rounded-full hover:bg-pink-500 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;