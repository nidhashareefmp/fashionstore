import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-box">
        <h2>Get in Touch</h2>
        <p><strong>Name:</strong> Khila Fashion Store</p>
        <p><strong>Address:</strong> 123 Main Street, Mumbai, India</p>
        <p><strong>Email:</strong> support@khila.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
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

export default Contact;
