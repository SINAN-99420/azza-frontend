import "./Home.css";

function Home() {
  return (
    <main className="home-page">

      {/* HERO SECTION */}
      <section className="hero-section">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <div className="hero-badge">
            <span>♧</span>
            PURE BY NATURE
          </div>

          <h1 className="hero-title">
            Pure Honey.
            <br />
            Pure <span>Goodness.</span>
          </h1>

          <p className="hero-description">
            From nature to you, 100% natural & unfiltered honey,
            <br />
            packed with goodness for a healthier life.
          </p>

          <div className="hero-buttons">

            <button className="shop-now-btn">
              <span>Shop Now</span>
              <b>→</b>
            </button>

            <button className="story-btn">
              <span className="play-circle">▶</span>
              <span>Watch Our Story</span>
            </button>

          </div>


          {/* FEATURES */}
          <div className="hero-features">

            <div className="hero-feature">

              <div className="feature-circle">
                ♧
              </div>

              <div>
                <strong>100%</strong>
                <span>Natural</span>
              </div>

            </div>


            <div className="feature-divider"></div>


            <div className="hero-feature">

              <div className="feature-circle">
                ♧
              </div>

              <div>
                <strong>Raw &</strong>
                <span>Unfiltered</span>
              </div>

            </div>


            <div className="feature-divider"></div>


            <div className="hero-feature">

              <div className="feature-circle">
                ♢
              </div>

              <div>
                <strong>Premium</strong>
                <span>Quality</span>
              </div>

            </div>

          </div>

        </div>


        {/* RIGHT PRODUCT */}
        <div className="hero-product">

          <div className="product-glow"></div>

          <img
            src="/images/honey-hero.png"
            alt="Azza Pure Honey"
          />


          {/* FLOATING CARD */}
          <div className="goodness-card">

            <div className="goodness-icon">
              ♧
            </div>

            <p>
              Goodness
              <br />
              in Every Drop
            </p>

            <div className="goodness-line"></div>

          </div>

        </div>

      </section>


      {/* STATS CARD */}
      <section className="stats-card">

        <div className="stat">

          <div className="stat-icon">
            ♧
          </div>

          <div>
            <strong>100%</strong>
            <span>Natural Produce</span>
          </div>

        </div>


        <div className="stat-divider"></div>


        <div className="stat">

          <div className="stat-icon">
            ♙
          </div>

          <div>
            <strong>10K+</strong>
            <span>Happy Customers</span>
          </div>

        </div>


        <div className="stat-divider"></div>


        <div className="stat">

          <div className="stat-icon">
            ★
          </div>

          <div>
            <strong>4.9/5</strong>
            <span>Product Rating</span>
          </div>

        </div>


        <div className="stat-divider"></div>


        <div className="stat">

          <div className="stat-icon">
            ▱
          </div>

          <div>
            <strong>Fast</strong>
            <span>Delivery Across India</span>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;