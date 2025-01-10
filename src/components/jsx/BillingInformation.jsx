import "../style/BillingInformation.css"; // Import CSS for BillingInformation

const BillingInformation = () => {
  return (
    <section className="billing-information-section">
      {" "}
      {/* Billing information section container */}
      <h2>Billing Information</h2> {/* Section heading */}
      <div className="billing-content">
        {" "}
        {/* Billing content container */}
        <div className="billing-item">
          {" "}
          {/* Single billing item */}
          <h3>View Invoices</h3> {/* Item heading */}
          <p>Access and download your invoices.</p> {/* Item description */}
        </div>
        <div className="billing-item">
          <h3>Make Payments</h3>
          <p>Pay your bills securely online.</p>
        </div>
        {/* Repeat for other billing items */}
      </div>
    </section>
  );
};

export default BillingInformation; // Export BillingInformation component
