import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);
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
        console.log("Failed to load products");
      }
    };

    fetchProducts();
  }, []);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
  };

  const handleQuantityChange = (id, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item._id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
      <div className="bg-white rounded-lg p-6">
        {cartItems.length > 0 ? (
          <div>
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-3">Item</th>
                  <th className="py-3">Price</th>
                  <th className="py-3">Quantity</th>
                  <th className="py-3">Total</th>
                  <th className="py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="py-3">{item.name}</td>
                    <td className="py-3">${item.price}</td>
                    <td className="py-3">
                      <button
                        className="px-2 py-1 bg-gray-200 rounded-md mr-2"
                        onClick={() => {
                          if (item.quantity > 1) {
                            handleQuantityChange(item._id, item.quantity - 1);
                          }
                        }}
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        className="px-2 py-1 bg-gray-200 rounded-md ml-2"
                        onClick={() =>
                          handleQuantityChange(item._id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </td>
                    <td className="py-3">${item.price * item.quantity}</td>
                    <td className="py-3">
                      <button
                        className="text-red-600 hover:underline"
                        onClick={() => handleRemoveItem(item._id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between items-center mt-6">
              <p className="text-lg font-semibold">Total: ${total}</p>
              <Link
                to="/checkout"
                className="bg-[#32CD32] text-white py-2 px-4 rounded hover:bg-green-700 transition"
              >
                Checkout
              </Link>
            </div>
            <Carousel
              randomProducts={randomProducts}
              title={"Most Sell Items"}
            />
          </div>
        ) : (
          <>
            <p className="text-gray-600 text-center">Your cart is empty!</p>
            <Carousel
              randomProducts={randomProducts}
              title={"Most Sell Items"}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
