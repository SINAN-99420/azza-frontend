import { useEffect, useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 30) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY + 5) {
        setShowNavbar(false);
        setMenuOpen(false);
      } else if (currentScrollY < lastScrollY - 5) {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${showNavbar ? "navbar-show" : "navbar-hide"}`}>

      {/* Logo */}
      <a href="/" className="navbar-logo" onClick={closeMenu}>
        <img
          src="/images/azza-logo.png"
          alt="Azza Foodstuff"
        />
      </a>

      {/* Links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="/" onClick={closeMenu}>Home</a>
        <a href="/shop" onClick={closeMenu}>Shop</a>
        <a href="/about" onClick={closeMenu}>About Us</a>
        <a href="/contact" onClick={closeMenu}>Contact</a>
      </div>

      {/* Actions */}
      <div className="nav-actions">

        <button aria-label="Search">
          <span>⌕</span>
        </button>

        <button aria-label="Account">
          <span>♙</span>
        </button>

        <button className="cart-btn" aria-label="Cart">
          <span>🛒</span>
          <i>0</i>
        </button>

      </div>

      {/* Mobile menu */}
      <button
        className={`menu-btn ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>
  );
}

export default Navbar;