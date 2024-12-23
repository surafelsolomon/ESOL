import { NavLink } from "react-router-dom"; // Import NavLink for routing
import { useState } from "react";
import "../style/Navbar.css"; // Import CSS for Navbar
const Navbar = () => {
  const [navbarState, setNavbarState] = useState(true);

  const navLinks = [
    // Array to hold navigation links
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact-us", label: "Contact Us" },
    { to: "/customer-portal", label: "Customer Portal" },
    { to: "/resource-center", label: "Resource Center" },
    { to: "/events-calendar", label: "Events Calendar" },
    { to: "/FAQs", label: "FAQs" },
  ];

  return (
    <nav className="navbar" onMouseLeave={() => setNavbarState(true)}>
      {" "}
      {/* Navbar container */}
      <div className="small-nav-links">
        <img
          alt={navbarState ? "menu-button" : "x-button"}
          onClick={() => setNavbarState(!navbarState)} // Toggle state
        />
      </div>
      <ul className={navbarState ? "nav-links" : "nav-links-small"}>
        {" "}
        {/* List for navigation links */}
        {navLinks.map(
          (
            { to, label } // Map through navLinks array
          ) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => isActive && "active"}
              >
                {label}
              </NavLink>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar; // Export Navbar component
