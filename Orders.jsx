import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import { Link } from "react-router-dom";

const Orders = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: localStorage.getItem("id") }),
    });
    const result = await response.json();
    setData(result);
  };

  const handleDelete = async (orderId) => {
    try {
      const response = await fetch(
        `http://localhost:4000/Delorders/${orderId}`,
        { method: "DELETE" }
      );

      if (response.ok) {
        alert("Order deleted successfully");
        fetchData();
      } else {
        alert("Failed to delete order");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <hr />
      </div>

      <div className="container mt-4">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link className="fs-5 text-decoration-none" to="/">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item active fs-5" aria-current="page">
              Orders
            </li>
          </ol>
        </nav>

        {/* Orders as Cards */}
        <div className="row g-4">
          {data.length > 0 ? (
            data.map((order) => {
              const product = order.product_details[0];
              const price = product?.price || 0;
              const total = price;

              return (
                <div className="col-md-6 col-lg-4" key={order._id}>
                  <div className="order-card">
                    {/* Image */}
                    <div className="order-img-wrapper">
                      <img
                        src={`http://localhost:5000/uploads/${product?.pimg}`}
                        alt={product?.pname}
                        className="order-img"
                      />
                    </div>

                    {/* Content */}
                    <div className="order-content">
                      <h5>{product?.pname}</h5>
                      <p>Price: <span className="price">₹{price}</span></p>
                      <p>Total: <span className="total">₹{total}</span></p>
                      <p>Ordered on: {new Date(order.order_date).toLocaleDateString()}</p>

                      {/* Status */}
                      <span className="status-badge status-confirmed">Confirmed</span>

                      {/* Action */}
                      <div className="mt-3 d-flex justify-content-between">
                        <button
                          onClick={() => handleDelete(order._id)}
                          className="btn-modern btn-delete"
                        >
                          ❌ Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              );
            })
          ) : (
            <p className="text-center py-5 text-muted">🛒 No orders found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Orders;
