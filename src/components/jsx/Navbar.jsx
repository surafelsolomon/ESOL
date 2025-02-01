import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/Navbar.css";

const navItems = [
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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Mobile Toggle Button */}
      <div className="show-hide">
        {isMenuOpen ? (
          <p onClick={() => setIsMenuOpen(false)}>×</p>
        ) : (
          <p onClick={() => setIsMenuOpen(true)}>☰</p>
        )}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? "" : "hide"}`}>
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.to}
              className={({ isActive }) => (isActive ? "current-active" : "")}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
