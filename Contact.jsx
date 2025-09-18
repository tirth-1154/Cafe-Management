import React, { useState, useEffect } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

import img1 from "../assets/images/footer-bg-image.jpg";
import img2 from "../assets/images/gallery-4.jpg";
import img3 from "../assets/images/interactive-process-image-1.jpg";
import img4 from "../assets/images/interactive-process-image-2.jpg";

import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
const Contact = () => {
  const images = [img1, img2, img3, img4];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3500); // har 5 sec me change hoga
    return () => clearInterval(interval);
  }, []);
  return (
    <>
    <Navbar/>
     <section
      className="contact-section"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
       <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.55)",
          zIndex: 0,
        }}
      ></div>

  
      
      {/* contact info */}
      <div className="contact-card">
          <div className="contact-info-item">
            <div className="icon-box">
              <FiPhone />
            </div>
            <div className="contact-item-content">
              <h3>Phone</h3>
              <p>
                <a href="tel:+91123456789">+91 123 456 789</a>
              </p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="icon-box">
              <FiMail />
            </div>
            <div className="contact-item-content">
              <h3>Email</h3>
              <p>
                <a href="mailto:info@domainname.com">info@domainname.com</a>
              </p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="icon-box">
              <FiMapPin />
            </div>
            <div className="contact-item-content">
              <h3>Address</h3>
              <p>123 Creative Lane, London, SW1A 1AA</p>
            </div>
          </div>
        </div>
      
      
        <div className="contact-card contact-form">
            <h2>Send us a Message</h2>
            <form>
              <input type="text" name="firstName" placeholder="First Name" required />
              <input type="text" name="lastName" placeholder="Last Name" required />
              <input type="email" name="email" placeholder="Email Address" required />
              <input type="tel" name="phone" placeholder="Phone Number" />
              <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
              <button type="submit">Submit Message</button>
            </form>
          </div>
      

    </section>
    <Footer/>
    </>
  );
};

export default Contact;
