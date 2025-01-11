import React from "react";

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Suliman Hakimi",
      review:
        "Excellent service and amazing products! The iPhone I purchased was delivered on time and in perfect condition. Highly recommend!",
      rating: 5,
    },
    {
      name: "Saboor Hakimi",
      review:
        "Great shopping experience! The website is easy to navigate, and I found exactly what I was looking for. The support team was very helpful too.",
      rating: 4,
    },
    {
      name: "Jawad Hakimi",
      review:
        "Good value for the price. The delivery was a bit delayed, but the product quality was worth the wait. I’ll shop again.",
      rating: 4,
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? "text-yellow-500" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <section className="bg-gray-100 py-8 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{review.name}</h3>
              <div className="mb-3">{renderStars(review.rating)}</div>
              <p className="text-gray-600 text-sm">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
