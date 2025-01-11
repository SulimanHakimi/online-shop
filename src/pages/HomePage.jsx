import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import CustomerReviews from "../components/CustomerReviews";
const HomePage = () => {
  const [randomProducts, setRandomProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const products = await response.json();

        const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
        setRandomProducts(shuffledProducts.slice(0, 4));
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="">
        <div className="bg-cover bg-center h-96 flex flex-col items-center justify-center text-center bg-[url('https://static.vecteezy.com/system/resources/thumbnails/002/006/967/small/young-women-takes-a-shopping-cart-and-enjoy-online-shopping-through-smartphones-choose-to-buy-gifts-valentine-s-day-concepts-website-or-mobile-phone-application-flat-design-illustration-vector.jpg')]">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to Afghan Market
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            Find your favorite phones and tech gadgets here!
          </p>
          <Link
            to="/shop"
            className="bg-[#32CD32] text-white py-2 px-6 rounded text-lg hover:bg-green-700 transition duration-300"
          >
            Shop Now
          </Link>
        </div>

        {loading && (
          <p className="flex justify-center items-center h-screen w-auto">
            Loading products...
          </p>
        )}
        {error && <p>{error}</p>}

        {!loading && !error && (
          <Carousel
            randomProducts={randomProducts}
            title={"Featured Products"}
          />
        )}
      </div>
      <CustomerReviews />

    </>
  );
};

export default HomePage;
