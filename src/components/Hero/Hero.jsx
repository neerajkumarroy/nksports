import React from "react";
import "./Hero.css";
import heroImage from "../../assets/hero.png";

const Hero = () => {
  return (
    <section
      className="hero-section"
      id="home"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* ================= HERO CONTENT ================= */}
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Play Bold.
            <br />
            <span>Train</span> Smart.
          </h1>

          <p className="hero-description">
            High-performance tennis programs
            <br className="desktop-line-break" />
            for all ages and skill levels.
          </p>

          {/* ================= BUTTONS ================= */}
          <div className="hero-buttons">
            <a href="#programs" className="hero-primary-btn">
              Explore Programs
            </a>

            <a href="#booking" className="hero-secondary-btn">
              Book a Session
            </a>
          </div>

          {/* ================= FEATURES ================= */}
          <div className="hero-features">
            {/* Expert Coaches */}
            <div className="hero-feature">
              <div className="feature-icon coach-icon">
                <span className="coach-head"></span>
                <span className="coach-body"></span>
              </div>

              <span>Expert Coaches</span>
            </div>

            {/* Premium Courts */}
            <div className="hero-feature">
              <div className="feature-icon court-icon">
                <span className="court-horizontal"></span>
                <span className="court-vertical"></span>
              </div>

              <span>Premium Courts</span>
            </div>

            {/* Flexible Schedules */}
            <div className="hero-feature">
              <div className="feature-icon calendar-icon">
                <span className="calendar-top"></span>
                <span className="calendar-line"></span>
              </div>

              <span>Flexible Schedules</span>
            </div>
          </div>
        </div>

        {/* ================= EXPERIENCE CARD ================= */}
        <div className="experience-card">
          <div className="experience-number">15+</div>

          <div className="experience-text">
            <span>Years of</span>
            <span>Excellence</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
