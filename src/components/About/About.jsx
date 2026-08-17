import React from "react";
import "./About.css";

import aboutBg from "../../assets/about-bg.png";
import aboutImage from "../../assets/about.png";

const About = () => {
  return (
    <section
      className="about-section"
      id="about"
      style={{
        backgroundImage: `url(${aboutBg})`,
      }}
    >
      <div className="about-overlay">
        <div className="about-container">
          {/* ================= LEFT CONTENT ================= */}
          <div className="about-content">
            <span className="about-label">ABOUT NKSPORTS</span>

            <h2 className="about-title">
              We Build <span>Stronger</span>
              <br />
              Players Every Day
            </h2>

            <p className="about-description">
              At NKSports Tennis Academy, we combine expert coaching, proven
              training methods, and a passion for the game to help you reach
              your full potential.
            </p>

            {/* Features */}
            <div className="about-features">
              <div className="about-feature">
                <span className="about-check">✓</span>
                <span>Personalized Training Plans</span>
              </div>

              <div className="about-feature">
                <span className="about-check">✓</span>
                <span>Modern Facilities</span>
              </div>

              <div className="about-feature">
                <span className="about-check">✓</span>
                <span>Competitive Environment</span>
              </div>
            </div>

            <a href="#programs" className="about-button">
              Learn More
            </a>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="about-image-wrapper">
            <div className="about-image-frame">
              <img
                src={aboutImage}
                alt="NKSports Tennis Training"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
