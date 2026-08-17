import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Intermediate Player",
    rating: "★★★★★",
    text: "The coaching at NKSports has completely changed my game. The training sessions are practical, focused and very motivating.",
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Advanced Player",
    rating: "★★★★★",
    text: "I really love the professional environment and experienced coaches. Every session helps me improve my technique and confidence.",
  },
  {
    id: 3,
    name: "Arjun Verma",
    role: "Junior Player",
    rating: "★★★★★",
    text: "NKSports is a great place to learn tennis. The coaches are friendly, supportive and always help me become a better player.",
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    role: "Club Player",
    rating: "★★★★★",
    text: "The facilities are excellent and the training plans are well structured. I have seen a big improvement in my overall performance.",
  },
  {
    id: 5,
    name: "Aman Singh",
    role: "Competitive Player",
    rating: "★★★★★",
    text: "The high-performance training is exactly what I needed. The coaches understand every player's strengths and weaknesses.",
  },
  {
    id: 6,
    name: "Neha Sharma",
    role: "Beginner Player",
    rating: "★★★★★",
    text: "I started as a complete beginner and now I feel much more confident on the court. NKSports has been an amazing experience.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        {/* Heading */}
        <div className="testimonials-heading">
          <span className="testimonials-label">PLAYER STORIES</span>

          <h2>
            What Our <span>Players Say</span>
          </h2>

          <p>
            Real experiences from players who train, compete and grow with
            NKSports.
          </p>
        </div>

        {/* Cards */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.id}>
              <div className="testimonial-top">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div className="testimonial-user">
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.role}</span>
                </div>
              </div>

              <div className="testimonial-rating">{testimonial.rating}</div>

              <p className="testimonial-text">“{testimonial.text}”</p>

              <div className="testimonial-quote">“</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
