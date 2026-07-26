import React from "react";
import "../styles/footer.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">

        <div className="row">

          {/* Company */}

          <div className="col-lg-4 mb-4">

            <h2 className="footer-logo">
              NorthPeak<span>Digital</span>
            </h2>

            <p>
              We create modern websites and digital experiences that help
              businesses grow faster.
            </p>

            <div className="social-icons">

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaLinkedinIn />
              </a>

              <a href="#">
                <FaGithub />
              </a>

            </div>

          </div>

          {/* Links */}

          <div className="col-lg-4 mb-4">

            <h4>Quick Links</h4>

            <ul>

              <li><a href="#hero">Home</a></li>

              <li><a href="#about">About</a></li>

              <li><a href="#services">Services</a></li>

              <li><a href="#pricing">Pricing</a></li>

              <li><a href="#contact">Contact</a></li>

            </ul>

          </div>

          {/* Contact */}

          <div className="col-lg-4">

            <h4>Contact</h4>

            <p>hello@northpeakdigital.com</p>

            <p>+1 (555) 123-4567</p>

            <p>New York, USA</p>

          </div>

        </div>

        <hr />

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} NorthPeak Digital. All rights
            reserved.
          </p>

          <p>
            Built for{" "}
            <a
              href="https://digitalheroesco.com"
              target="_blank"
              rel="noreferrer"
            >
              Digital Heroes Training Task
            </a>
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;