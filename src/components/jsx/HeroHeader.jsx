import { motion } from "framer-motion"; // Import motion for animations
import "../style/HeroHeader.css"; // Import CSS for HeroHeader

const HeroHeader = () => {
  return (
    <header className="hero-header">
      {" "}
      {/* Hero header container */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {" "}
        {/* Animated headline */}
        Captivating Headline
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {" "}
        {/* Animated introduction */}
        Brief introduction to ESOL
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {" "}
        {/* Animated mission statement */}
        Our mission statement
      </motion.p>
    </header>
  );
};

export default HeroHeader; // Export HeroHeader component
