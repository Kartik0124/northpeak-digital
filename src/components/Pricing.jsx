import React from "react";
import "../styles/pricing.css";
import { FaCheckCircle } from "react-icons/fa";

const plans = [
  {
    name: "Starter",
    price: "$199",
    popular: false,
    features: [
      "Responsive Website",
      "Up to 5 Pages",
      "Basic SEO",
      "Email Support",
      "1 Month Maintenance",
    ],
  },
  {
    name: "Professional",
    price: "$499",
    popular: true,
    features: [
      "Everything in Starter",
      "Up to 15 Pages",
      "Advanced SEO",
      "Priority Support",
      "3 Months Maintenance",
    ],
  },
  {
    name: "Enterprise",
    price: "$999",
    popular: false,
    features: [
      "Unlimited Pages",
      "Custom Web Application",
      "Performance Optimization",
      "Dedicated Manager",
      "12 Months Support",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">

        <div className="text-center mb-5">
          <span className="section-tag">PRICING</span>

          <h2 className="section-title">
            Flexible Plans For Every Business
          </h2>

          <p className="section-subtitle">
            Choose the perfect plan that fits your business goals.
          </p>
        </div>

        <div className="row g-4">

          {plans.map((plan, index) => (
            <div className="col-lg-4" key={index}>

              <div className={`pricing-card ${plan.popular ? "popular" : ""}`}>

                {plan.popular && (
                  <span className="popular-badge">
                    Most Popular
                  </span>
                )}

                <h3>{plan.name}</h3>

                <h1>{plan.price}</h1>

                <p className="per-month">One-Time Project</p>

                <ul>

                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <FaCheckCircle className="check-icon" />
                      {feature}
                    </li>
                  ))}

                </ul>

                <button className="btn btn-primary w-100">
                  Choose Plan
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Pricing;