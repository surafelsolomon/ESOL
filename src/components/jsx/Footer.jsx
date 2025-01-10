import "../style/Footer.css"; // Import CSS for Footer

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
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer; // Export Footer component
