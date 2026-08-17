import React from "react";
import "./WhyChoose.css";
import whyImage from "../../assets/why.png";

const WhyChoose = () => {
  const benefits = [
    {
      icon: "✓",
      title: "Experienced Coaches",
      description: "Learn from skilled and dedicated tennis professionals.",
    },
    {
      icon: "✓",
      title: "State-of-the-Art Facilities",
      description: "Train on premium courts with modern facilities.",
    },
    {
      icon: "✓",
      title: "Personal Training Programs",
      description: "Training plans designed around your goals and skill level.",
    },
    {
      icon: "✓",
      title: "Competitive Community",
      description: "Grow, compete and improve with passionate players.",
    },
  ];

  return (
    <section className="why-section" id="why-choose">
      <div className="why-container">
        <div className="why-content">
          <span className="why-label">WHY CHOOSE NKSPORTS?</span>

          <h2 className="why-title">
            Train Better.
            <br />
            <span>Play Stronger.</span>
          </h2>

          <p className="why-description">
            At NKSports, we combine expert coaching, modern facilities,
            personalized training and a competitive environment to help every
            player reach their full potential.
          </p>

          <div className="why-benefits">
            {benefits.map((benefit, index) => (
              <div className="why-benefit" key={index}>
                <div className="why-icon">{benefit.icon}</div>

                <div className="why-benefit-content">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="why-image-wrapper">
          <div className="why-image-card">
            <img
              src={whyImage}
              alt="NKSports tennis player"
              className="why-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
