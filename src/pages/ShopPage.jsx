import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { Helmet } from "react-helmet"; // Import Helmet for dynamic head management
import Breadcrumb from "../components/Breadcrumb";

function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
