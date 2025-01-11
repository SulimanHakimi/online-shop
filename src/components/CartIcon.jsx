import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const CartIcon = () => {
  const [cartProductsCount, setCartProductsCount] = useState(0);

  const calculateCartProductsCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartProductsCount(cart.length);
  };
  useEffect(() => {
    calculateCartProductsCount();

    const handleCartUpdate = () => {
      calculateCartProductsCount();
    };

    window.addEventListener('cartUpdated', handleCartUpdate);

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  return (
    <div>
      <Link to="/cart" className="relative">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-lg"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        {cartProductsCount > 0 && (
          <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
            {cartProductsCount}
          </span>
        )}
      </Link>
    </div>
  );
};

export default CartIcon;
