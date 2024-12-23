import "../style/Footer.css"; // Import CSS for Footer
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      {" "}
      {/* Footer container */}
      <p>© 2024 ESOL. All rights reserved.</p>
      <p>Privacy Policy | Terms of Service</p>
      <div className="social-links">
        {" "}
        {/* Social media links */}
        <Link
          to="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </Link>
        <Link
          to="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </Link>
        <Link
          to="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
      </div>
    </footer>
  );
};

export default Footer; // Export Footer component
