import "../style/TeamSection.css"; // Import CSS for TeamSection

const TeamSection = () => {
  return (
    <section className="team-section">
      {" "}
      {/* Team section container */}
      <h2>Our Team</h2> {/* Section heading */}
      <div className="team-members">
        {" "}
        {/* Container for team members */}
        <div className="team-member">
          {" "}
          {/* Single team member */}
          <img src="member1.jpg" alt="Team Member 1" /> {/* Member photo */}
          <p>Member 1 - Role</p> {/* Member role */}
          <p>Brief biography</p> {/* Member bio */}
        </div>
        <div className="team-member">
          <img src="member2.jpg" alt="Team Member 2" />
          <p>Member 2 - Role</p>
          <p>Brief biography</p>
        </div>
        {/* Repeat for other team members */}
      </div>
    </section>
  );
};

export default TeamSection; // Export TeamSection component
