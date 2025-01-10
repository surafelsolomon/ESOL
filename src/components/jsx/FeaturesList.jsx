import "../style/FeaturesList.css"; // Import CSS for FeaturesList

const FeaturesList = () => {
  return (
    <section className="features-list">
      {" "}
      {/* Features list container */}
      <h2>Our Key Offerings</h2> {/* Section heading */}
      <ul>
        {" "}
        {/* List of offerings */}
        <li>ERP Solutions</li> {/* List item */}
        <li>VDI Solutions</li>
        <li>3D Virtualization (V-Next)</li>
        <li>Business Intelligence (BI) Tools</li>
        <li>IT Consultancy</li>
        <li>Office IT Supplies</li>
      </ul>
    </section>
  );
};

export default FeaturesList; // Export FeaturesList component
