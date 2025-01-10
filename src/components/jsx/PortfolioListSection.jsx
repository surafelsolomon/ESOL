import "../style/PortfolioListSection.css"; // Import CSS for PortfolioListSection

const PortfolioListSection = () => {
  return (
    <section className="portfolio-list-section">
      {" "}
      {/* Portfolio list section container */}
      <h2>Our Portfolio</h2> {/* Section heading */}
      <div className="portfolio-items">
        {" "}
        {/* Container for portfolio items */}
        <div className="portfolio-item">
          {" "}
          {/* Single portfolio item */}
          <img src="project1.jpg" alt="Project 1" /> {/* Project thumbnail */}
          <p>Project 1 - Brief Description</p> {/* Project description */}
        </div>
        <div className="portfolio-item">
          <img src="project2.jpg" alt="Project 2" />
          <p>Project 2 - Brief Description</p>
        </div>
        {/* Repeat for other projects */}
      </div>
    </section>
  );
};

export default PortfolioListSection; // Export PortfolioListSection component
