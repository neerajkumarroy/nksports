import React from "react";
import "./Pricing.css";

const plans = [
  {
    name: "Starter",
    tag: "FOR BEGINNERS",
    price: "999",
    description:
      "Build your foundation and start your tennis journey with confidence.",
    features: [
      "8 Training Sessions",
      "Group Coaching",
      "Basic Skill Development",
      "Court Access",
      "Progress Tracking",
    ],
    button: "Start Training",
  },

  {
    name: "Pro",
    tag: "MOST POPULAR",
    price: "1,999",
    popular: true,
    description:
      "Level up your skills with structured coaching and personalized guidance.",
    features: [
      "16 Training Sessions",
      "Advanced Skill Development",
      "Small Group Coaching",
      "Premium Court Access",
      "Personalized Training Plan",
      "Monthly Progress Review",
    ],
    button: "Choose Pro",
  },

  {
    name: "Elite",
    tag: "HIGH PERFORMANCE",
    price: "3,499",
    description:
      "Train like a competitor with high-performance coaching and analysis.",
    features: [
      "Unlimited Training Sessions",
      "1-on-1 Coaching",
      "High Performance Training",
      "Premium Court Access",
      "Performance Analysis",
      "Priority Scheduling",
    ],
    button: "Go Elite",
  },
];

const Pricing = () => {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        {/* Heading */}
        <div className="pricing-heading">
          <span className="pricing-label">MEMBERSHIP</span>

          <h2>
            Pick Your <span>Perfect Plan</span>
          </h2>

          <p>
            Train smarter, improve faster and take your game to the next level
            with a plan built for you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              className={`pricing-card ${
                plan.popular ? "pricing-card-popular" : ""
              }`}
              key={index}
            >
              {/* Top Badge */}
              <div className="pricing-card-top">
                <span className="pricing-tag">{plan.tag}</span>

                {plan.popular && <span className="pricing-star">★</span>}
              </div>

              {/* Plan Name */}
              <h3>{plan.name}</h3>

              <p className="pricing-description">{plan.description}</p>

              {/* Price */}
              <div className="pricing-price">
                <span className="pricing-currency">₹</span>

                <strong>{plan.price}</strong>

                <span className="pricing-period">/month</span>
              </div>

              {/* CTA */}
              <button className="pricing-button">
                <span>{plan.button}</span>
                <span className="pricing-arrow">↗</span>
              </button>

              {/* Divider */}
              <div className="pricing-divider"></div>

              {/* Features */}
              <div className="pricing-features">
                <span className="pricing-features-title">What's included</span>

                {plan.features.map((feature, featureIndex) => (
                  <div className="pricing-feature" key={featureIndex}>
                    <span className="pricing-check">✓</span>

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Decorative Circle */}
              <div className="pricing-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
