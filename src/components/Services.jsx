import React from "react";
import "../styles/services.css";
import {
  FaLaptopCode,
  FaPalette,
  FaSearch,
  FaBullhorn,
  FaChartLine,
  FaMobileAlt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    desc: "Fast, secure, and responsive websites built with modern technologies.",
  },
  {
    icon: <FaPalette />,
    title: "UI / UX Design",
    desc: "Beautiful interfaces designed to improve user experience.",
  },
  {
    icon: <FaSearch />,
    title: "SEO Optimization",
    desc: "Increase visibility and rank higher on search engines.",
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    desc: "Reach your audience with effective digital campaigns.",
  },
  {
    icon: <FaChartLine />,
    title: "Business Growth",
    desc: "Data-driven strategies that accelerate business growth.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Solutions",
    desc: "Responsive web experiences optimized for every device.",
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">

        <div className="text-center mb-5">
          <span className="section-tag">OUR SERVICES</span>

          <h2 className="section-title">
            Solutions Designed For Your Success
          </h2>

          <p className="section-subtitle">
            We provide complete digital solutions to help your business
            stand out and grow online.
          </p>
        </div>

        <div className="row g-4">

          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>

              <div className="service-card">

                <div className="service-icon">
                  {service.icon}
                </div>

                <h4>{service.title}</h4>

                <p>{service.desc}</p>

                <button className="btn btn-outline-primary">
                  Learn More
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;