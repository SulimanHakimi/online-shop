import React from 'react';

// Star Rating Component
const RatingStars = ({ rating }) => {
  return (
    <div className="flex text-yellow-500">
      {[...Array(5)].map((_, idx) => (
        <span key={idx} className={`text-xl ${idx < rating ? 'text-yellow-500' : 'text-gray-300'}`}>
          ★
        </span>
      ))}
    </div>
  );
};

// Single Review Component
const ReviewCard = ({ review }) => {
  return (
    <div className="flex gap-4 border-b border-gray-300 py-6">
      <img
        src={review.profileImage}
        alt={review.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-800">{review.name}</span>
            <span className="text-sm text-gray-500">{review.date}</span>
          </div>
          <RatingStars rating={review.rating} />
        </div>
        <p className="text-gray-700">{review.review}</p>
      </div>
    </div>
  );
};

// Reviews List Component
const ReviewComponent = () => {
  const reviews = [
    {
      name: 'John Doe',
      date: '2025-01-11',
      rating: 5,
      review: 'Great product! Totally worth the price.',
      profileImage: 'https://www.w3schools.com/w3images/avatar2.png',
    },
    {
      name: 'Jane Smith',
      date: '2025-01-10',
      rating: 4,
      review: 'Good quality, but the delivery was slow.',
      profileImage: 'https://www.w3schools.com/w3images/avatar2.png',
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">User Reviews</h3>
      <div>
        {reviews && reviews.length > 0 ? (
          reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))
        ) : (
          <p className="text-gray-500">No reviews yet. Be the first to leave a review!</p>
        )}
      </div>
    </div>
  );
};

export default ReviewComponent;
