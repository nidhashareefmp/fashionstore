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
      <footer className="footer">
        <p>© 2025 Khila Fashion. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;
