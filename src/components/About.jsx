import React from "react";
import "../styles/about.css";
import { FaBullseye, FaLightbulb, FaHandshake } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">

        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-lg-6">

            <span className="section-tag">
              ABOUT US
            </span>

            <h2>
              We Build Digital Products
              That Help Businesses Grow
            </h2>

            <p>
              NorthPeak Digital is a creative digital agency helping
              startups and businesses establish a strong online presence
              through modern web development, branding, SEO, and digital
              marketing solutions.
            </p>

            <p>
              Our team focuses on innovation, user experience, and
              measurable business growth with every project we deliver.
            </p>

          </div>

          {/* Right Side */}
          <div className="col-lg-6">

            <div className="feature-card">
              <FaBullseye className="feature-icon"/>
              <div>
                <h4>Our Mission</h4>
                <p>
                  Deliver high-quality digital solutions that create
                  measurable business value.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <FaLightbulb className="feature-icon"/>
              <div>
                <h4>Our Vision</h4>
                <p>
                  Become a trusted global partner for businesses seeking
                  innovation and growth.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <FaHandshake className="feature-icon"/>
              <div>
                <h4>Why Clients Choose Us</h4>
                <p>
                  Transparent communication, fast delivery, and
                  customer-focused solutions.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;