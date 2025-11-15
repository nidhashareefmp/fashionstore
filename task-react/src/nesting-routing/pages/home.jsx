import React from "react";
import "./Home.css";

function Home() {

  return (
    <div className="home-page">

{/* banner  */}
<section className="top-banner">
  <img src="public/images/BannerNew.png" alt="Top Banner" />
   <h1>EXCLUSIVE</h1>
        <p>Luxury Styles at Best Prices</p>
</section>


      {/* CATEGORIES */}
      <section className="categories">
        <h2 className="section-title">Featured Collections</h2>

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

export default Home;
