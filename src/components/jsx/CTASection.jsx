import { motion } from "framer-motion"; // Import motion for animations
import "../style/CTASection.css"; // Import CSS for CTASection
import { Link } from "react-router-dom";
const CTASection = () => {
  return (
    <section className="cta-section">
      {" "}
      {/* CTA section container */}
      <Link to="/contact-us">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cta-button"
        >
          Contact Us
        </motion.button>
      </Link>
      <p>Get expert advice and start your project with ESOL today!</p>
    </section>
  );
};

export default CTASection; // Export CTASection component
