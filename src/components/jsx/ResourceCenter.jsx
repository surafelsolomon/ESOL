import "../style/ResourceCenter.css"; // Import CSS for ResourceCenter

const ResourceCenter = () => {
  return (
    <section className="resource-center-section">
      {" "}
      {/* Resource center section container */}
      <h2>Resource Center</h2> {/* Section heading */}
      <div className="resource-content">
        {" "}
        {/* Resource content container */}
        <div className="resource-item">
          {" "}
          {/* Single resource item */}
          <h3>Whitepapers</h3> {/* Item heading */}
          <p>Access our latest whitepapers on industry trends.</p>{" "}
          {/* Item description */}
        </div>
        <div className="resource-item">
          <h3>Case Studies</h3>
          <p>Read our success stories and case studies.</p>
        </div>
        <div className="resource-item">
          <h3>E-books</h3>
          <p>Download our informative e-books.</p>
        </div>
        <div className="resource-item">
          <h3>Videos</h3>
          <p>Watch our educational and promotional videos.</p>
        </div>
        <div className="resource-item">
          <h3>Downloadable Content</h3>
          <p>Get access to downloadable resources and materials.</p>
        </div>
      </div>
    </section>
  );
};

export default ResourceCenter; // Export ResourceCenter component
