import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const ProdDetails = () => {
  const [data, setData] = useState({});
  const [inCart, setInCart] = useState(false);
  const { id } = useParams();
  const uid = localStorage.getItem("id");

  const fetchData = async () => {
    const response = await fetch(`http://localhost:4000/prodDetails/${id}`);
    const result = await response.json();
    setData(result);
  };

  const checkCart = async () => {
    if (!uid) return;
    const response = await fetch(
      `http://localhost:4000/checkCart/${uid}/${id}`
    );
    const result = await response.json();
    setInCart(result.inCart);
  };

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:4000/addToCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pid: id, uid, quantity }), 
    });
    const result = await response.json();
    console.log(result);
    alert("Product added to cart");
    setInCart(true);
  };

  useEffect(() => {
    fetchData();
    checkCart();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container py-5">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link className="fs-5 text-decoration-none" to="/">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item active fs-5" aria-current="page">
              {data.pname}
            </li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="row align-items-center g-5 product-detail-wrapper">
          {/* Product Image */}
          <div className="col-md-6 text-center">
            <div className="product-detail-img">
              <img
                src={`http://localhost:5000/uploads/${data.pimg}`}
                alt={data.pname}
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="col-md-6">
            <h1 className="product-title">{data.pname}</h1>
            <p className="product-desc">{data.description}</p>

            <div className="price-card">
              <h2 className="price-tag">₹ {data.price}</h2>
              <p className="tax-info">Inclusive of all taxes</p>
            </div>

            {/* Live Total */}
            <h4 className="fw-bold text-success mb-4">
              Total: ₹ {data.price ? data.price : 0}
            </h4>

            {uid === null ? (
              <Link to="/login" className="btn-premium">
                🔑 Login to Add to Cart
              </Link>
            ) : inCart ? (
              <p className="text-success mt-4 fs-5 fw-semibold">
                ✅ This product is already in your cart.
              </p>
            ) : (
              <button className="btn-premium" onClick={handleSubmit}>
                🛒 Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProdDetails;
