import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <span>azza</span>
        <small>FOODSTUFF</small>
      </div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
      </div>

      <div className="nav-icons">
        <span>⌕</span>
        <span>♙</span>
        <span>🛒</span>
      </div>

    </nav>
  );
}

export default Navbar;