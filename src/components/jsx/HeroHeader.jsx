// import React from "react";
import "../style/HeroHeader.css";

const HeroSection = () => {
  return (
    <section className="hero-header">
      {/* Full-width video background */}
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero content */}
      <div className="hero-content">
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing services and products designed just for you!</p>
        <button className="cta-button">Learn More</button>
      </div>
    </section>
  );
};

export default HeroSection;
