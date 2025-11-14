import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Your Style with Khila</h1>
          <p>Trendy • Elegant • Comfortable — Made for every woman.</p>
          <button className="shop-btn">Shop Now</button>
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="categories">
        <h2>Featured Collections</h2>

        <div className="category-grid">
          <div className="category-card">
            <img src="/images/abaya.jpg" alt="Abayas" />
            <p>Abayas</p>
          </div>

          <div className="category-card">
            <img src="/images/dresses.jpg" alt="Dresses" />
            <p>Dresses</p>
          </div>

          <div className="category-card">
            <img src="/images/party.jpg" alt="Party Wear" />
            <p>Party Wear</p>
          </div>

          <div className="category-card">
            <img src="/images/casual.jpg" alt="Casual Wear" />
            <p>Casual Wear</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
     <footer className="footer">
  <div className="footer-content">
    <h3>Khila Fashion</h3>
    <p>Where elegance meets comfort.</p>

    {/* SOCIAL MEDIA ICONS */}
    <div className="social-links">

      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>

      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>

      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook"></i>
      </a>

      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-youtube"></i>
      </a>

    </div>

    {/* NORMAL LINKS */}
    <div className="footer-links">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/shop">Shop</a>
      <a href="/contact">Contact</a>
    </div>

    <p className="copyright">
      © 2025 Khila. All Rights Reserved.
    </p>
  </div>
</footer>


    </div>
  );
}

export default Home;
