import React from "react";
import "../styles/stats.css";
import {
  FaProjectDiagram,
  FaSmile,
  FaGlobe,
  FaAward,
} from "react-icons/fa";

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container">

        <div className="text-center mb-5">
          <span className="section-tag">OUR ACHIEVEMENTS</span>

          <h2 className="section-title">
            Numbers That Speak For Themselves
          </h2>

          <p className="section-subtitle">
            Our results reflect our commitment to delivering exceptional digital solutions.
          </p>
        </div>

        <div className="row g-4">

          <div className="col-lg-3 col-md-6">
            <div className="stat-card">
              <FaProjectDiagram className="stat-icon" />
              <h2>250+</h2>
              <p>Projects Completed</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stat-card">
              <FaSmile className="stat-icon" />
              <h2>150+</h2>
              <p>Happy Clients</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stat-card">
              <FaAward className="stat-icon" />
              <h2>98%</h2>
              <p>Client Satisfaction</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stat-card">
              <FaGlobe className="stat-icon" />
              <h2>15+</h2>
              <p>Countries Served</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Stats;