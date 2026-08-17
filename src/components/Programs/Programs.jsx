import React from "react";
import "./Programs.css";

const programs = [
  {
    icon: "🏃",
    title: "Junior",
    subtitle: "Development",
    description: "Fun and engaging programs for young players.",
  },
  {
    icon: "🎾",
    title: "Adult",
    subtitle: "Training",
    description: "Improve your skills and stay active.",
  },
  {
    icon: "★",
    title: "High",
    subtitle: "Performance",
    description: "Elite coaching for competitive players.",
  },
  {
    icon: "🏆",
    title: "Private",
    subtitle: "Lessons",
    description: "One-on-one sessions tailored to you.",
  },
];

const Programs = () => {
  return (
    <section className="programs-section" id="programs">
      <div className="programs-container">
        {/* Heading */}
        <div className="programs-heading">
          <span className="programs-label">NKSports</span>

          <h2>
            Our <span>Programs</span>
          </h2>

          <p>
            Training programs designed to help every player improve, compete and
            enjoy the game.
          </p>
        </div>

        {/* Program Cards */}
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div className="program-card" key={index}>
              <div className="program-icon">{program.icon}</div>

              <h3>
                {program.title}
                <br />
                <span>{program.subtitle}</span>
              </h3>

              <p>{program.description}</p>

              <button className="program-arrow">→</button>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="program-stats">
          <div className="program-stat">
            <strong>2K+</strong>
            <span>Active Players</span>
          </div>

          <div className="program-stat">
            <strong>10+</strong>
            <span>Expert Coaches</span>
          </div>

          <div className="program-stat">
            <strong>8</strong>
            <span>Premium Courts</span>
          </div>

          <div className="program-stat">
            <strong>95%</strong>
            <span>Player Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
