import React from "react";
import "../styles/hero.css";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-6 hero-content">

            <span className="hero-badge">
              🚀 Trusted by 150+ Businesses
            </span>

            <h1>
              Build Smarter
              <span> Digital Experiences</span>
            </h1>

            <p>
              NorthPeak Digital helps startups and businesses create
              beautiful websites, improve SEO, and grow faster with
              modern digital solutions.
            </p>

            <div className="hero-buttons">

              <a href="#contact" className="btn btn-primary btn-lg">
                Get Started
                <FaArrowRight className="ms-2"/>
              </a>

              <a href="#services" className="btn btn-outline-light btn-lg">
                <FaPlayCircle className="me-2"/>
                Our Services
              </a>

            </div>

          </div>

          {/* Right Content */}
          <div className="col-lg-6">

            <div className="hero-image">

              <div className="glass-card card1">
                <h3>250+</h3>
                <p>Projects Delivered</p>
              </div>

              <div className="glass-card card2">
                <h3>98%</h3>
                <p>Client Satisfaction</p>
              </div>

              <div className="glass-card card3">
                <h3>120+</h3>
                <p>Happy Clients</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;