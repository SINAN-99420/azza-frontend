import "./Home.css";

function Home() {
  return (
    <main className="home-page">

      {/* Hero Section */}
      <section className="hero-section">

        <div className="hero-content">

          <p className="hero-label">
            PURE BY NATURE
          </p>

          <h1 className="hero-title">
            Pure Honey.
            <br />
            Pure <span>Goodness.</span>
          </h1>

          <p className="hero-description">
            Naturally sourced honey, carefully selected
            <br />
            and delivered with purity in every drop.
          </p>

          <button className="hero-button">
            SHOP NOW
            <span>→</span>
          </button>

          <div className="hero-features">

            <div className="hero-feature">
              <div className="feature-icon">✦</div>
              <div>
                <strong>100%</strong>
                <small>NATURAL</small>
              </div>
            </div>

            <div className="hero-feature">
              <div className="feature-icon">◌</div>
              <div>
                <strong>RAW</strong>
                <small>& UNFILTERED</small>
              </div>
            </div>

            <div className="hero-feature">
              <div className="feature-icon">◇</div>
              <div>
                <strong>PREMIUM</strong>
                <small>QUALITY</small>
              </div>
            </div>

          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-circle">
            <div className="honey-placeholder">
              🍯
            </div>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;
