import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="services-page">
      <h1>Our Services</h1>

      <div className="service-box">
        <h2>What We Offer at Khila</h2>
        <p><strong>✨ Custom Dress Designing:</strong> We create personalized dresses tailored just for you.</p>
        <p><strong>🧵 Alteration Services:</strong> Perfect fitting for every outfit you own.</p>
        <p><strong>👗 Ready-to-Wear Collection:</strong> Elegant and stylish dresses for every occasion.</p>
        <p><strong>🚚 Doorstep Delivery:</strong> Fast and reliable delivery at your convenience.</p>
      </div>

     
{/* footer  */}
      <footer className="footer">
  <h3>Khila Fashion</h3>
  <p>Where elegance meets comfort.</p>

  <div className="social-links">
    <a href="#"><i className="fab fa-instagram"></i></a>
    <a href="#"><i className="fab fa-whatsapp"></i></a>
    <a href="#"><i className="fab fa-facebook"></i></a>
    <a href="#"><i className="fab fa-youtube"></i></a>
  </div>

  <div className="footer-links">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/shop">Shop</a>
    <a href="/contact">Contact</a>
  </div>

  <div className="footer-divider"></div>

  <p className="footer-bottom">© 2025 Khila Fashion. All rights reserved.</p>
</footer>
    </div>
  );
}

export default Services;
