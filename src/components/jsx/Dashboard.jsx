import "../style/Dashboard.css"; // Import CSS for Dashboard

const Dashboard = () => {
  return (
    <section className="dashboard-section">
      {" "}
      {/* Dashboard section container */}
      <h2>Dashboard</h2> {/* Section heading */}
      <p>Welcome to your personalized dashboard</p> {/* Welcome message */}
      <div className="dashboard-content">
        {" "}
        {/* Dashboard content container */}
        <div className="dashboard-item">
          {" "}
          {/* Single dashboard item */}
          <h3>Personalized Content</h3> {/* Item heading */}
          <p>Access your personalized content here.</p> {/* Item description */}
        </div>
        <div className="dashboard-item">
          <h3>Services</h3>
          <p>Access the services you need.</p>
        </div>
        <div className="dashboard-item">
          <h3>Account Settings</h3>
          <p>Update your account settings here.</p>
        </div>
        {/* Repeat for other dashboard items */}
      </div>
    </section>
  );
};

export default Dashboard; // Export Dashboard component
