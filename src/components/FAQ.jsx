import React from "react";
import "../styles/faq.css";

const FAQ = () => {
  return (
    <section id="faq" className="faq-section">
      <div className="container">

        <div className="text-center mb-5">
          <span className="section-tag">FAQ</span>

          <h2 className="section-title">
            Frequently Asked Questions
          </h2>

          <p className="section-subtitle">
            Everything you need to know before working with us.
          </p>
        </div>

        <div className="accordion" id="faqAccordion">

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq1"
              >
                How long does a website project take?
              </button>
            </h2>

            <div
              id="faq1"
              className="accordion-collapse collapse show"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Most projects are completed within 2–6 weeks depending
                on complexity and client feedback.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq2"
              >
                Do you redesign existing websites?
              </button>
            </h2>

            <div
              id="faq2"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes. We redesign websites to improve performance,
                accessibility, SEO, and user experience.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq3"
              >
                Is SEO included?
              </button>
            </h2>

            <div
              id="faq3"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes. Every website includes on-page SEO fundamentals,
                optimized performance, and semantic HTML.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq4"
              >
                Do you provide ongoing support?
              </button>
            </h2>

            <div
              id="faq4"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Absolutely. We offer maintenance, updates, and technical
                support after project delivery.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;