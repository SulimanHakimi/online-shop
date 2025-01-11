import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-green-400">404</h1>
        <p className="text-xl text-gray-700 mt-4">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-gray-500 mt-2">It seems you might have taken a wrong turn.</p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-[#32CD32] text-white rounded  transition duration-200"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
