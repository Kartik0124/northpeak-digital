import React, { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};

    if (!form.name.trim()) temp.name = "Name is required.";

    if (!form.email.trim()) {
      temp.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      temp.email = "Enter a valid email.";
    }

    if (!form.subject.trim()) temp.subject = "Subject is required.";

    if (!form.message.trim()) temp.message = "Message is required.";

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Thank you! Your message has been sent.");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <div className="text-center mb-5">
          <span className="section-tag">CONTACT</span>

          <h2 className="section-title">
            Let's Build Something Amazing
          </h2>

          <p className="section-subtitle">
            We'd love to hear about your project.
          </p>
        </div>

        <div className="row">

          {/* Contact Info */}

          <div className="col-lg-5 mb-4">

            <div className="contact-info">

              <h3>Get In Touch</h3>

              <p>
                Whether you need a new website, SEO, branding or digital
                marketing, our team is ready to help.
              </p>

              <div className="info-box">
                <strong>Email</strong>
                <p>hello@northpeakdigital.com</p>
              </div>

              <div className="info-box">
                <strong>Phone</strong>
                <p>+1 (555) 123-4567</p>
              </div>

              <div className="info-box">
                <strong>Location</strong>
                <p>New York, USA</p>
              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="col-lg-7">

            <form className="contact-form" onSubmit={handleSubmit}>

              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />
              <small>{errors.name}</small>

              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
              <small>{errors.email}</small>

              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={(e) =>
                  setForm({ ...form, subject: e.target.value })
                }
              />
              <small>{errors.subject}</small>

              <textarea
                rows="6"
                placeholder="Your Message"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
              ></textarea>
              <small>{errors.message}</small>

              <button className="btn btn-primary w-100">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;