import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { Helmet } from "react-helmet"; // Import Helmet for dynamic head management
import Breadcrumb from "../components/Breadcrumb";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const SkeletonCard = () => (
    <div className="animate-pulse border border-gray-300 p-4 rounded-lg shadow-lg">
      <div className="bg-gray-300 h-40 w-full mb-4 rounded"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/3 mt-4"></div>
    </div>
  );

  return (
    <>
      <Breadcrumb />

      <div className="container mx-auto p-6">
        <Helmet>
          <title>Shop Products - Your Store</title>
          <meta
            name="description"
            content="Discover a wide range of products in our store. Find the best deals and shop conveniently online."
          />
        </Helmet>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
        </div>
      </div>
    </>
  );
}

export default ProductPage;
