import { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

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

  /* Auto slider */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="hero">

      {/* Background glow */}
      <div className="hero-glow"></div>

      <div className="hero-container">

        {/* ================= LEFT ================= */}
        <div className="hero-content" key={`content-${activeSlide}`}>

          <div className="hero-tag">
            <span>✦</span>
            {slide.tag}
          </div>

          <h1>{slide.title}</h1>

          <p>{slide.description}</p>

          <div className="hero-buttons">

            <button className="shop-btn">
              <span>{slide.button}</span>
              <b>→</b>
            </button>

            <button className="explore-btn">
              Explore Products
            </button>

          </div>

          {/* Features */}
          <div className="hero-features">

            <div className="feature">
              <div className="feature-icon">✓</div>

              <div>
                <strong>100% Natural</strong>
                <small>Pure ingredients</small>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">◇</div>

              <div>
                <strong>Premium Quality</strong>
                <small>Carefully selected</small>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">♢</div>

              <div>
                <strong>Fresh & Pure</strong>
                <small>Packed with care</small>
              </div>
            </div>

          </div>

        </div>


        {/* ================= RIGHT ================= */}
        <div
          className={`hero-product ${
            activeSlide === 1 ? "nuts-slide" : ""
          }`}
          key={`product-${activeSlide}`}
        >

          <div className="product-glow"></div>

          <img
            src={slide.image}
            alt={slide.alt}
            className="honey-image"
          />

          {/* <div className="floating-card">

            <div className="card-icon">✦</div>

            <strong>
              {activeSlide === 0 ? (
                <>
                  Goodness
                  <br />
                  in Every Drop
                </>
              ) : (
                <>
                  Natural
                  <br />
                  Crunchy Goodness
                </>
              )}
            </strong>

            <div className="card-line"></div>

          </div> */}

        </div>

      </div>


      {/* ================= SLIDER ================= */}

      <div className="slider-controls">

        <button
          className="slider-arrow"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ←
        </button>

        <div className="slider-dots">

          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`slider-dot ${
                activeSlide === index ? "active" : ""
              }`}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}

        </div>

        <button
          className="slider-arrow"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          →
        </button>

      </div>


      {/* Scroll indicator */}
      {/* <div className="scroll-indicator">
        <span>SCROLL</span>
        <div></div>
      </div> */}

    </section>
  );
}

export default Hero;