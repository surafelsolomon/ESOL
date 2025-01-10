import "../style/FeatureSection.css"; // Import CSS for FeatureSection

const FeatureSection = () => {
  return (
    <section className="feature-section">
      {" "}
      {/* Feature section container */}
      <h2>Featured Project</h2> {/* Section heading */}
      <div className="feature-details">
        {" "}
        {/* Container for feature details */}
        <img src="featured-project.jpg" alt="Featured Project" />{" "}
        {/* Featured project image */}
        <div className="details">
          {" "}
          {/* Details container */}
          <h3>Project Title</h3> {/* Project title */}
          <p>Challenges faced</p> {/* Challenges faced */}
          <p>Solutions implemented</p> {/* Solutions implemented */}
          <p>Outcomes achieved</p> {/* Outcomes achieved */}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection; // Export FeatureSection component
