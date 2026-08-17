import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="nks-navbar">
      <div className="nks-navbar-container">
        {/* ================= LOGO ================= */}
        <a href="#home" className="nks-logo" onClick={closeMenu}>
          <span className="nks-logo-icon">
            <span>N</span>
          </span>

          <span className="nks-logo-text">
            NK<span>Sports</span>
          </span>
        </a>

        {/* ================= DESKTOP / MOBILE MENU ================= */}
        <nav className={`nks-nav ${menuOpen ? "nks-nav-open" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#programs" onClick={closeMenu}>
            Programs
          </a>

          <a href="#coaches" onClick={closeMenu}>
            Coaches
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#why-choose" onClick={closeMenu}>
            Why Choose
          </a>

          <a href="#testimonials" onClick={closeMenu}>
            Players
          </a>

          <a href="#pricing" onClick={closeMenu}>
            Pricing
          </a>

          <a href="#booking" className="nks-book-btn" onClick={closeMenu}>
            Book a Court
            <span>↗</span>
          </a>
        </nav>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          className={`nks-menu-btn ${menuOpen ? "nks-menu-active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
