import "../style/StatsSection.css"; // Import CSS for StatsSection

const StatsSection = () => {
  return (
    <section className="stats-section">
      {" "}
      {/* Stats section container */}
      <h2>Our Achievements</h2> {/* Section heading */}
      <div className="stats-container">
        {" "}
        {/* Container for stats */}
        <div className="stat-item">
          {" "}
          {/* Single stat item */}
          <h3>100+</h3> {/* Statistic */}
          <p>Successful Projects</p> {/* Description */}
        </div>
        <div className="stat-item">
          <h3>98%</h3>
          <p>Client Satisfaction</p>
        </div>
        <div className="stat-item">
          <h3>50+</h3>
          <p>Industry Awards</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection; // Export StatsSection component
