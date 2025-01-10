// import React from "react"; // Import React
import { Link } from "react-router-dom"; // Import Link for routing
import "../style/Navbar.css"; // Import CSS for Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      {" "}
      {/* Navbar container */}
      <ul className="nav-links">
        {" "}
        {/* List for navigation links */}
        <li>
          <Link to="/">Home</Link>
        </li>{" "}
        <li>
          <Link to="/about-us">About Us</Link>
        </li>{" "}
        {/* Link to About Us page */}
        <li>
          <Link to="/services">Services</Link>
        </li>{" "}
        {/* Link to Services page */}
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>{" "}
        {/* Link to Portfolio page */}
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>{" "}
        <li>
          <Link to="/customer-portal">Customer Portal</Link>
        </li>{" "}
        <li>
          <Link to="/resource-center">Resource Center</Link>
        </li>{" "}
        <li>
          <Link to="/events-calendar">Events Calendar</Link>
        </li>{" "}
        <li>
          <Link to="/FAQs">FAQs</Link>
        </li>{" "}
        {/* Link to Contact Us page */}
      </ul>
    </nav>
  );
};

export default Navbar; // Export Navbar component
