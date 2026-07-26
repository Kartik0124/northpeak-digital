import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container">

        <a className="navbar-brand fw-bold logo" href="#hero">
          NorthPeak<span>Digital</span>
        </a>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes color="white" /> : <FaBars color="white" />}
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>

          <ul className="navbar-nav ms-auto text-center">

            <li className="nav-item">
              <a
                className="nav-link"
                href="#hero"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#services"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#pricing"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#contact"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;