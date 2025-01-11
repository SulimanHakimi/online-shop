import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Breadcrumb from "../components/Breadcrumb";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError("Product not found");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <p className="h-screen flex justify-center items-center">Loading...</p>
    );
  if (error) return <p className="text-red-600">{error}</p>;

  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
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
  return (
    <>
      <Breadcrumb />
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-4 relative">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-auto"
            />
            {product.isOnSale && (
              <div className="absolute top-4 left-4 bg-yellow-500 text-white text-sm px-3 py-1 rounded-md shadow-lg">
                On Sale
              </div>
            )}
            {product.discount > 0 && (
              <div className="absolute top-4 left-24 bg-red-600 text-white text-sm px-3 py-1 rounded-md shadow-lg">
                {product.discount}% OFF
              </div>
            )}
          </div>

          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>

            <div className="mb-4">
              {product.discount > 0 ? (
                <>
                  <p className="text-gray-400 line-through">${product.price}</p>
                  <p className="text-red-600 font-bold">
                    ${discountedPrice.toFixed(2)}
                  </p>
                </>
              ) : (
                <p className="text-gray-800 font-bold">${product.price}</p>
              )}
            </div>

            {/* Quantity Control */}
            <div className="mb-4 flex items-center">
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-l hover:bg-gray-400 transition"
              >
                -
              </button>
              <span className="py-2 px-6 bg-gray-100 text-gray-800">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange("increment")}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-r hover:bg-gray-400 transition"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-[#32CD32] text-white py-2 px-6 rounded hover:bg-green-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
