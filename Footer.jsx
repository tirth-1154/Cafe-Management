import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid footer mt-5">
      <footer className="text-center text-lg-start text-white">
        <div className="container p-4 pb-0">
          <section>
            <div className="row">
              {/* About */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">ATLET</h6>
                <p>
                  Atlet is a modern and user-friendly online eBook store that
                  provides readers with instant access to a wide collection of
                  digital books across multiple genres.
                </p>
              </div>

              {/* Products */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p><Link className="text-decoration-none">Coffee</Link></p>
                <p><Link className="text-decoration-none">Burger</Link></p>
                <p><Link className="text-decoration-none">Cookies</Link></p>
                <p><Link className="text-decoration-none">Pizza</Link></p>
              </div>

              {/* Links */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Useful Links</h6>
                <p><Link className="text-decoration-none">Your Account</Link></p>
                <p><Link className="text-decoration-none">Categories</Link></p>
                <p><Link className="text-decoration-none" to="/orders">Your Orders</Link></p>
                <p><Link className="text-decoration-none" to="/contact">Contact Us</Link></p>
              </div>

              {/* Contact */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p>📍 New York, NY 10012, US</p>
                <p>✉ info@gmail.com</p>
                <p>📞 +01 234 567 88</p>
                <p>📠 +01 234 567 89</p>
              </div>
            </div>
          </section>

          <hr className="my-3" />

          {/* Social & Copy */}
          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start w-100">
                <div className="p-3">© 2025, All rights reserved</div>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
