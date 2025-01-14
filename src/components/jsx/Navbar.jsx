import { NavLink } from "react-router-dom"; // Import NavLink for routing
import "../style/Navbar.css"; // Import CSS for Navbar

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
  // Add more items as needed
];

const Navbar = () => (
  <nav className="navbar">
    <ul className="nav-links">
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

export default Navbar;
