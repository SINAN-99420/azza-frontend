import { useEffect, useRef, useState } from "react";
import "./Hero.css";

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const touchStartX = useRef(0);

  const slides = [
    {
      number: "01",
      label: "PURE HONEY",
      title: "Pure from",
      highlight: "nature.",
      description:
        "Naturally sourced honey, carefully packed to bring pure goodness to your everyday life.",
      button: "Shop Honey",
      image: "/images/hero.png",
      sideTitle: "Pure Honey",
      sideText: "100% Natural",
    },
    {
      number: "02",
      label: "HONEY & NUTS",
      title: "Nature's",
      highlight: "perfect crunch.",
      description:
        "Premium nuts blended with natural honey for a delicious and wholesome experience.",
      button: "Shop Honey Nuts",
      image: "/images/hero2.png",
      sideTitle: "Honey & Nuts",
      sideText: "Premium Selection",
    },
  ];

  const slide = slides[activeSlide];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;

    const difference =
      touchStartX.current - touchEndX;

    if (difference > 50) {
      nextSlide();
    }

    if (difference < -50) {
      prevSlide();
    }
  };

  return (
    <section
      className="azza-hero"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ================= TOP BAR ================= */}

      <div className="hero-header">
        <span>AZZA FOODSTUFF</span>

        <div className="header-center">
          NATURAL • SIMPLE • GOOD
        </div>

        <span>EST. 2026</span>
      </div>


      {/* ================= DECORATIVE BACKGROUND ================= */}

      <div className="hero-shape hero-shape-one"></div>

      <div className="hero-shape hero-shape-two"></div>

      <div className="hero-dots-bg"></div>


      {/* ================= MAIN ================= */}

      <div className="azza-hero-container">


        {/* ================= LEFT CONTENT ================= */}

        <div
          className="azza-hero-content"
          key={`content-${activeSlide}`}
        >
          <div className="hero-small-label">
            <span>{slide.number}</span>

            <i></i>

            {slide.label}
          </div>


          <h1>
            {slide.title}
            <br />
            <em>{slide.highlight}</em>
          </h1>


          <p>
            {slide.description}
          </p>


          <div className="hero-actions">

            <button className="azza-shop-btn">
              <span>{slide.button}</span>

              <b>↗</b>
            </button>

            <button className="discover-btn">
              Discover more
              <span>↓</span>
            </button>

          </div>


          {/* FEATURES */}

          <div className="hero-mini-features">

            <div>
              <strong>100%</strong>
              <span>Natural</span>
            </div>

            <div>
              <strong>PURE</strong>
              <span>Ingredients</span>
            </div>

            <div>
              <strong>FRESH</strong>
              <span>Every Pack</span>
            </div>

          </div>

        </div>


        {/* ================= PRODUCT ================= */}

        <div
          className={`azza-product ${
            activeSlide === 1
              ? "nuts-product"
              : ""
          }`}
          key={`product-${activeSlide}`}
        >

          <div className="product-bg-circle"></div>

          <div className="product-inner-circle"></div>

          <div className="product-shadow"></div>

          <img
            src={slide.image}
            alt={
              activeSlide === 0
                ? "Azza Pure Honey"
                : "Azza Honey Mixed Nuts"
            }
          />


          {/* PRODUCT BADGE */}

          <div className="product-badge">

            <span>✦</span>

            <div>
              <small>{slide.sideTitle}</small>

              <strong>{slide.sideText}</strong>
            </div>

          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="hero-right">

          {/* vertical text */}

          <div className="vertical-label">
            GOODNESS FROM NATURE
          </div>


          {/* info card */}

          <div className="hero-info-card">

            <div className="info-card-top">

              <span>AZZA</span>

              <span>0{activeSlide + 1}</span>

            </div>


            <div className="info-icon">
              ✦
            </div>


            <h3>
              Made with
              <br />
              <em>care.</em>
            </h3>


            <p>
              Quality products,
              naturally selected
              for you.
            </p>


            <div className="card-line"></div>

          </div>


          {/* NAVIGATION */}

          <div className="hero-navigation">

            <button
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              ←
            </button>

            <div className="navigation-progress">

              <span
                className={
                  activeSlide === 0
                    ? "active"
                    : ""
                }
              ></span>

              <span
                className={
                  activeSlide === 1
                    ? "active"
                    : ""
                }
              ></span>

            </div>

            <button
              onClick={nextSlide}
              aria-label="Next slide"
            >
              →
            </button>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM ================= */}

      <div className="hero-bottom">

        <div>
          <span>01</span>
          <p>FROM NATURE</p>
        </div>

        <div className="bottom-line"></div>

        <div>
          <span>02</span>
          <p>TO YOUR HOME</p>
        </div>

      </div>

    </section>
  );
}

export default Hero;