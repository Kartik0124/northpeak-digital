import React from "react";
import "../styles/whychoose.css";
import {
  FaRocket,
  FaUsers,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRocket />,
    title: "Fast Delivery",
    text: "We deliver projects on time without compromising quality.",
  },
  {
    icon: <FaUsers />,
    title: "Expert Team",
    text: "Experienced designers, developers and digital strategists.",
  },
  {
    icon: <FaClock />,
    title: "24/7 Support",
    text: "Dedicated support whenever your business needs assistance.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Reliable & Secure",
    text: "Secure, scalable and performance-focused digital solutions.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="container">

        <div className="text-center mb-5">
          <span className="section-tag">WHY CHOOSE US</span>

          <h2 className="section-title">
            We Deliver More Than Just Websites
          </h2>

          <p className="section-subtitle">
            Every project is designed to improve your online presence,
            generate leads, and help your business grow.
          </p>
        </div>

        <div className="row g-4">

          {features.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>

              <div className="why-card">

                <div className="why-icon">
                  {item.icon}
                </div>

                <h4>{item.title}</h4>

                <p>{item.text}</p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;