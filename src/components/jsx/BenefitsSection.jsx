import "../style/BenefitsSection.css"; // Import CSS for BenefitsSection

const BenefitsSection = () => {
  return (
    <section className="benefits-section">
      {" "}
      {/* Benefits section container */}
      <h2>Benefits of Choosing ESOL</h2> {/* Section heading */}
      <ul>
        {" "}
        {/* List of benefits */}
        <li>Experience</li> {/* Benefit item */}
        <li>Innovative solutions</li>
        <li>Customer-centric approach</li>
        <li>Industry-specific expertise</li>
      </ul>
    </section>
  );
};

export default BenefitsSection; // Export BenefitsSection component
