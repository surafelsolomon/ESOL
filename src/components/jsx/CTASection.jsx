import { motion } from "framer-motion"; // Import motion for animations
import "../style/CTASection.css"; // Import CSS for CTASection

const CTASection = () => {
  return (
    <section className="cta-section">
      {" "}
      {/* CTA section container */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="cta-button"
      >
        Contact Us
      </motion.button>
      <p>Get expert advice and start your project with ESOL today!</p>
    </section>
  );
};

export default CTASection; // Export CTASection component
