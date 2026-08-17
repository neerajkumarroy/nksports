import React, { useRef } from "react";
import "./Coaches.css";

// Coach Images

import coach1 from "../../assets/coach1.png";
import coach2 from "../../assets/coach2.png";
import coach3 from "../../assets/coach1.png";
import coach4 from "../../assets/coach2.png";
import coach5 from "../../assets/coach1.png";
import coach6 from "../../assets/coach2.png";
import coach7 from "../../assets/coach1.png";

// Ready to Elevate Background
import meetBg from "../../assets/meet-bg.png";

const Coaches = () => {
  const sliderRef = useRef(null);

  // =====================================================
  // COACH DATA
  // =====================================================

  const coaches = [
    {
      id: 1,
      name: "Rafael Garcia",
      role: "Head Coach",
      image: coach1,
    },
    {
      id: 2,
      name: "Sophia Lee",
      role: "Tennis Coach",
      image: coach2,
    },
    {
      id: 3,
      name: "David Martin",
      role: "Performance Coach",
      image: coach3,
    },
    {
      id: 4,
      name: "Olivia Brown",
      role: "Tennis Coach",
      image: coach4,
    },
    {
      id: 5,
      name: "James Wilson",
      role: "Fitness Coach",
      image: coach5,
    },
    {
      id: 6,
      name: "Emma Davis",
      role: "Junior Coach",
      image: coach6,
    },
    {
      id: 7,
      name: "Daniel Smith",
      role: "Performance Coach",
      image: coach7,
    },
  ];

  // =====================================================
  // NEXT SLIDE
  // =====================================================

  const handleNext = () => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    slider.scrollBy({
      left: slider.clientWidth,
      behavior: "smooth",
    });
  };

  // =====================================================
  // PREVIOUS SLIDE
  // =====================================================

  const handlePrevious = () => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    slider.scrollBy({
      left: -slider.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="coaches" className="coaches-section">
      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div className="coaches-container">
        {/* =================================================
            SECTION HEADING
        ================================================= */}

        <div className="coaches-heading">
          <span className="coaches-label">OUR TEAM</span>

          <h2>
            Meet Our <span>Coaches</span>
          </h2>

          <p>
            Train with experienced professionals who are passionate about
            helping every player reach their full potential.
          </p>
        </div>

        {/* =================================================
            COACH SLIDER
        ================================================= */}

        <div className="coaches-slider-wrapper">
          {/* Previous Button */}

          <button
            type="button"
            className="coach-slider-btn coach-prev"
            onClick={handlePrevious}
            aria-label="Previous coaches"
          >
            ←
          </button>

          {/* Coach Cards */}

          <div className="coaches-slider" ref={sliderRef}>
            {coaches.map((coach) => (
              <article className="coach-card" key={coach.id}>
                {/* Coach Image */}

                <div className="coach-image-wrapper">
                  <img
                    src={coach.image}
                    alt={`${coach.name} - ${coach.role}`}
                    className="coach-image"
                    loading="lazy"
                  />
                </div>

                {/* Coach Information */}

                <div className="coach-info">
                  <h3>{coach.name}</h3>

                  <p>{coach.role}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Next Button */}

          <button
            type="button"
            className="coach-slider-btn coach-next"
            onClick={handleNext}
            aria-label="Next coaches"
          >
            →
          </button>
        </div>

        {/* =================================================
            READY TO ELEVATE SECTION
        ================================================= */}

        <div
          className="elevate-section"
          style={{
            backgroundImage: `url(${meetBg})`,
          }}
        >
          <div className="elevate-content">
            <span className="elevate-label">TRAIN SMART</span>

            <h2>
              Ready to Elevate
              <br />
              <span>Your Game?</span>
            </h2>

            <p>
              Build your skills, improve your confidence, and take your tennis
              game to the next level with NKSports.
            </p>

            <button type="button" className="elevate-button">
              Book Your Session
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coaches;
