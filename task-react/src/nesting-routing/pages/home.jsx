import React from "react";
import "./Home.css";

function Home() {
  let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

setInterval(() => {
  plusSlides(1);
}, 6000);

setTimeout(showSlides, 0, slideIndex);

  return (
    <div className="home-page">

{/* banner  */}
<section className="top-banner">
  <img src="public/images/BannerNew.jpg" alt="Top Banner" />
</section>

      {/* HERO SECTION */}
     <section className="hero-carousel">

  <div className="carousel-container">

    {/* SLIDES */}
    <div className="carousel-slide fade">
      <img src="public/images/Banner1.jpg" alt="Slide 1" />
      <div className="hero-text">
        <h1>NEW IN</h1>
        <p>Shop Fresh Styles</p>
        <button className="shop-btn">Explore Now</button>
      </div>
    </div>

    <div className="carousel-slide fade">
      <img src="public/images/Banner2.jpg" alt="Slide 2" />
      <div className="hero-text">
        <h1>FRESH LOOKS</h1>
        <p>Trending This Week</p>
        <button className="shop-btn">Discover</button>
      </div>
    </div>

    <div className="carousel-slide fade">
      <img src="public/images/Banner3.jpg" alt="Slide 3" />
      <div className="hero-text">
        <h1>EXCLUSIVE</h1>
        <p>Luxury Styles at Best Prices</p>
        <button className="shop-btn">Shop Now</button>
      </div>
    </div>

    {/* ARROWS */}
    <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
    <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
  </div>

  {/* DOTS */}
  <div className="dots-container">
    <span className="dot" onClick={() => currentSlide(1)}></span>
    <span className="dot" onClick={() => currentSlide(2)}></span>
    <span className="dot" onClick={() => currentSlide(3)}></span>
  </div>

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

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
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

          <p>© 2025 Khila Fashion</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
