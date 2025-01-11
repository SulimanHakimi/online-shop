import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

function ProductCard({ product }) {
  const navigate = useNavigate();
  const handleProductClick = () => {
    navigate(`/product/${product._id}`);
  };

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    const productInCart = cart.find((item) => item._id === product.id);
  
    if (productInCart) {
      productInCart.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();

    };
  
  
    const discountedPrice = product.price - (product.price * (product.discount / 100));


  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      {product.discount > 0 &&   (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
          {product.discount}% OFF
        </div>
      )}

      {product.isOnSale && (
        <div className="absolute top-2 right-2 bg-yellow-400 text-black text-sm font-bold px-2 py-1 rounded">
          SALE
        </div>
      )}

      <div
        className="cursor-pointer"
        onClick={handleProductClick}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-contain"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
          <p className="text-gray-500">{product.brand}</p>

          <div className="flex items-center gap-2">
            {product.discount ? (
              <>
                <p className="text-brandGreen font-semibold">${discountedPrice.toFixed(2)}</p>
                <p className="text-gray-400 line-through">${product.price}</p>
              </>
            ) : (
              <p className="text-brandGreen font-semibold">${product.price}</p>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200 flex justify-center">
        <button
          onClick={handleAddToCart}
          className="flex items-center gap-2 bg-brandGreen text-black border-2 border-[#32CD32] px-4 py-2 rounded"
        >
          <FiShoppingCart className="text-lg" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
