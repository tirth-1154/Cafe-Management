import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Component/Footer";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Fetch all products
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/getProducts");
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Search API
  const handleSearch = async (e) => {
    const query = e.target.value; // current input value
    try {
      const response = await fetch(
        `http://localhost:4000/searchProducts?query=${query}`
      );
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // ✅ Debounce effect (search 400ms ke baad call hoga)
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      handleSearch(query);
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  // ✅ Initial load (all products)
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container my-5 product-page">
       <div className="row mb-5 d-flex justify-content-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch(e);
            }}
            className="search-box"
          >
            <input
              type="search"
              placeholder="  Search for products..."
              onChange={(e) => handleSearch(e)}
            />
            <button type="submit">Search</button>
          </form>
        </div>


        {/* Product Grid */}
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="product-grid">
            {products.length > 0 ? (
              products.map((product) => (
                <div key={product._id} className="product-card">
                  <Link to={`/prodDetail/${product._id}`}>
                    <img
                      src={`http://localhost:5000/uploads/${product.pimg}`}
                      alt={product.pname}
                      className="product-img"
                    />
                  </Link>
                  <div className="product-info">
                    <h5>{product.pname}</h5>
                    <p className="price">&#8377; {product.price}</p>
                    <Link
                      to={`/prodDetail/${product._id}`}
                      className="btn product-btn"
                    >
                      Get More Info
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted">No products found</p>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
