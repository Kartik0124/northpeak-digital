import React from "react";
import "../styles/testimonial.css";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "BrightTech",
    review:
      "NorthPeak Digital transformed our online presence. The team delivered an exceptional website that exceeded our expectations.",
  },
  {
    name: "Michael Brown",
    company: "Vision Media",
    review:
      "Professional, responsive, and highly skilled. We saw a significant increase in customer engagement after launching our new website.",
  },
  {
    name: "Emily Davis",
    company: "Nova Solutions",
    review:
      "Fantastic experience from start to finish. Their attention to detail and creativity made a huge difference for our business.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">

        <div className="text-center mb-5">
          <span className="section-tag">TESTIMONIALS</span>

          <h2 className="section-title">
            What Our Clients Say
          </h2>

          <p className="section-subtitle">
            Trusted by startups and growing businesses worldwide.
          </p>
        </div>

        <div className="row g-4">

          {testimonials.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>

              <div className="testimonial-card">

                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <p className="review">
                  "{item.review}"
                </p>

                <div className="client-info">

                  <div className="avatar">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <h5>{item.name}</h5>
                    <small>{item.company}</small>
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;