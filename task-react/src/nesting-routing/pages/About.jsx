import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <h1>About Khila</h1>

      <div className="about-content">
        <div className="about-box">
          <h2>Who We Are</h2>
          <p>
            <strong>Khila</strong> is a modern fashion destination that celebrates
            comfort, elegance, and individuality. We believe that every outfit should
            not only look stunning but also make you feel confident in your own skin.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to bring <strong>affordable luxury</strong> to everyone —
            offering stylish, high-quality apparel that reflects the essence of you.
            From trendy casuals to timeless classics, every piece is crafted with care
            and passion.
          </p>

          <h2>Why Choose Us</h2>
          <ul>
            <li>✨ Unique handpicked designs</li>
            <li>🌿 Premium quality fabrics</li>
            <li>🚚 Fast and reliable delivery</li>
            <li>🤝 Exceptional customer service</li>
          </ul>
        </div>
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
</footer>    </div>
  );
}

export default About;
