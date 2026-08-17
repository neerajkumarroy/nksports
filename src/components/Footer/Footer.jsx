import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="nks-footer">
      {/* =====================================================
          TOP CTA
      ===================================================== */}

      <div className="footer-cta-wrapper">
        <div className="footer-cta">
          <div className="footer-cta-content">
            <span className="footer-cta-label">READY TO LEVEL UP?</span>

            <h2>
              Your Game.
              <span> Our Expertise.</span>
            </h2>

            <p>
              Train smarter, play stronger and take your performance to the next
              level with NKSports.
            </p>
          </div>

          <button
            className="footer-cta-btn"
            onClick={() => scrollToSection("booking")}
          >
            Book a Court
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="footer-main">
        <div className="footer-container">
          {/* =================================================
              BRAND COLUMN
          ================================================= */}

          <div className="footer-brand">
            <a
              href="#home"
              className="footer-logo"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              <span className="footer-logo-icon">N</span>

              <span className="footer-logo-text">
                NK<span>Sports</span>
              </span>
            </a>

            <p className="footer-description">
              High-performance tennis training designed to help players of every
              age and skill level become stronger, smarter and more confident on
              the court.
            </p>

            {/* Social Icons */}

            <div className="footer-socials">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div className="footer-column">
            <h3>Quick Links</h3>

            <ul>
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                  }}
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#coaches"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("coaches");
                  }}
                >
                  Our Coaches
                </a>
              </li>

              <li>
                <a
                  href="#why-choose"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("why-choose");
                  }}
                >
                  Why Choose Us
                </a>
              </li>

              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("testimonials");
                  }}
                >
                  Player Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* =================================================
              PROGRAMS
          ================================================= */}

          <div className="footer-column">
            <h3>Programs</h3>

            <ul>
              <li>
                <a
                  href="#programs"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("programs");
                  }}
                >
                  Beginner Training
                </a>
              </li>

              <li>
                <a
                  href="#programs"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("programs");
                  }}
                >
                  Junior Academy
                </a>
              </li>

              <li>
                <a
                  href="#programs"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("programs");
                  }}
                >
                  Performance Training
                </a>
              </li>

              <li>
                <a
                  href="#programs"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("programs");
                  }}
                >
                  Private Coaching
                </a>
              </li>

              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("pricing");
                  }}
                >
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <div className="footer-column footer-contact">
            <h3>Get In Touch</h3>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <FaMapMarkerAlt />
              </span>

              <div>
                <span className="contact-label">Location</span>

                <p>Your City, India</p>
              </div>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <FaPhoneAlt />
              </span>

              <div>
                <span className="contact-label">Phone</span>

                <a href="tel:+911234567890">+91 12345 67890</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <FaEnvelope />
              </span>

              <div>
                <span className="contact-label">Email</span>

                <a href="mailto:hello@nksports.com">hello@nksports.com</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <FaClock />
              </span>

              <div>
                <span className="contact-label">Opening Hours</span>

                <p>Mon - Sun: 6:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM FOOTER
      ===================================================== */}

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>
            © {currentYear} <strong>NKSports</strong>. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>

            <span></span>

            <a href="#terms">Terms & Conditions</a>
          </div>

          <p className="footer-made">
            Built for <span>Champions</span> 🏆
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
