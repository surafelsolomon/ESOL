import "../style/FAQs.css"; // Import CSS for FAQs

const FAQs = () => {
  return (
    <section className="faqs-section">
      {" "}
      {/* FAQs section container */}
      <h2>Frequently Asked Questions</h2> {/* Section heading */}
      <div className="faqs-content">
        {" "}
        {/* FAQs content container */}
        <div className="faq-item">
          {" "}
          {/* Single FAQ item */}
          <h3>General Questions</h3> {/* Item heading */}
          <p>Find answers to general questions about ESOL.</p>{" "}
          {/* Item description */}
        </div>
        <div className="faq-item">
          <h3>ERP Solutions</h3>
          <p>Get information about our ERP solutions.</p>
        </div>
        <div className="faq-item">
          <h3>VDI Solutions</h3>
          <p>Learn more about our VDI solutions.</p>
        </div>
        <div className="faq-item">
          <h3>3D Virtualization (V-Next)</h3>
          <p>Discover our 3D Virtualization services.</p>
        </div>
        <div className="faq-item">
          <h3>BI Tools</h3>
          <p>Understand our Business Intelligence tools.</p>
        </div>
        <div className="faq-item">
          <h3>IT Consultancy</h3>
          <p>Read about our IT consultancy services.</p>
        </div>
        <div className="faq-item">
          <h3>Office IT Supplies</h3>
          <p>Explore our range of office IT supplies.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQs; // Export FAQs component
