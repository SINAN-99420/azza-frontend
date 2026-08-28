import { useEffect, useRef, useState } from "react";
import "./Hero.css";

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides = [
    {
      tag: "PURE BY NATURE",

      title: (
        <>
          Pure Honey.
          <br />
          Pure <span>Goodness.</span>
        </>
      ),

      description:
        "From nature to you, 100% natural & unfiltered honey, packed with goodness for a healthier life.",

      button: "Shop Honey",

      image: "/images/hero.png",

      alt: "Azza Pure Honey",
    },

    {
      tag: "NATURAL GOODNESS",

      title: (
        <>
          Honey & Nuts.
          <br />
          <span>Naturally Delicious.</span>
        </>
      ),

      description:
        "A delicious combination of natural honey and premium nuts, made for a tasty and wholesome experience.",

      button: "Shop Honey Nuts",

      image: "/images/hero2.png",

      alt: "Azza Honey Mixed Nuts",
    },
  ];

  const slide = slides[activeSlide];

  /* =========================
     NEXT SLIDE
  ========================= */

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  /* =========================
     PREVIOUS SLIDE
  ========================= */

  const prevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  /* =========================
     AUTO SLIDER
  ========================= */

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  /* =========================
     MOBILE SWIPE
  ========================= */

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;

    const difference =
      touchStartX.current - touchEndX.current;

    // Swipe left
    if (difference > 50) {
      nextSlide();
    }

    // Swipe right
    if (difference < -50) {
      prevSlide();
    }
  };

  return (
    <section
      className="hero"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      {/* =========================
          BACKGROUND GLOW
      ========================= */}

      <div className="hero-glow"></div>


      {/* =========================
          HERO CONTAINER
      ========================= */}

      <div className="hero-container">


        {/* =========================
            LEFT CONTENT
        ========================= */}

        <div
          className="hero-content"
          key={`content-${activeSlide}`}
        >

          {/* TAG */}

          <div className="hero-tag">

            <span>✦</span>

            {slide.tag}

          </div>


          {/* TITLE */}

          <h1>
            {slide.title}
          </h1>


          {/* DESCRIPTION */}

          <p>
            {slide.description}
          </p>


          {/* BUTTONS */}

          <div className="hero-buttons">

            <button className="shop-btn">

              <span>
                {slide.button}
              </span>

              <b>
                →
              </b>

            </button>


            <button className="explore-btn">
              Explore Products
            </button>

          </div>


          {/* =========================
              FEATURES
          ========================= */}

          <div className="hero-features">


            {/* FEATURE 1 */}

            <div className="feature">

              <div className="feature-icon">
                ✓
              </div>

              <div>

                <strong>
                  100% Natural
                </strong>

                <small>
                  Pure ingredients
                </small>

              </div>

            </div>


            {/* FEATURE 2 */}

            <div className="feature">

              <div className="feature-icon">
                ◇
              </div>

              <div>

                <strong>
                  Premium Quality
                </strong>

                <small>
                  Carefully selected
                </small>

              </div>

            </div>


            {/* FEATURE 3 */}

            <div className="feature">

              <div className="feature-icon">
                ♢
              </div>

              <div>

                <strong>
                  Fresh & Pure
                </strong>

                <small>
                  Packed with care
                </small>

              </div>

            </div>

          </div>

        </div>


        {/* =========================
            RIGHT PRODUCT
        ========================= */}

        <div
          className={`hero-product ${
            activeSlide === 1
              ? "nuts-slide"
              : ""
          }`}
          key={`product-${activeSlide}`}
        >

          {/* PRODUCT GLOW */}

          <div className="product-glow"></div>


          {/* PRODUCT IMAGE */}

          <img
            src={slide.image}
            alt={slide.alt}
            className="honey-image"
          />

        </div>

      </div>


      {/* =========================
          SLIDER CONTROLS
      ========================= */}

      <div className="slider-controls">


        {/* PREVIOUS */}

        <button
          className="slider-arrow"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ←
        </button>


        {/* DOTS */}

        <div className="slider-dots">

          {slides.map((_, index) => (

            <button
              key={index}
              onClick={() =>
                setActiveSlide(index)
              }
              className={`slider-dot ${
                activeSlide === index
                  ? "active"
                  : ""
              }`}
              aria-label={`Slide ${index + 1}`}
            ></button>

          ))}

        </div>


        {/* NEXT */}

        <button
          className="slider-arrow"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          →
        </button>

      </div>


      {/* =========================
          SLIDE NUMBER
      ========================= */}

      <div className="slide-number">
        <span>
          0{activeSlide + 1}
        </span>

        <div className="slide-number-line"></div>

        <span>
          0{slides.length}
        </span>
      </div>


      {/* =========================
          SCROLL INDICATOR
      ========================= */}

      <div className="scroll-indicator">

        <span>
          SCROLL
        </span>

        <div></div>

      </div>

    </section>
  );
}

export default Hero;