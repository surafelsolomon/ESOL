import "../style/TestimonialSection.css"; // Import CSS for TestimonialSection

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      {" "}
      {/* Testimonial section container */}
      <h2>What Our Clients Say</h2> {/* Section heading */}
      <div className="testimonials">
        {" "}
        {/* Testimonials container */}
        <div className="testimonial">
          {" "}
          {/* Single testimonial */}
          <p>ESOL provided us with outstanding service.</p>{" "}
          {/* Testimonial text */}
          <p>- Client 1</p> {/* Client name */}
        </div>
        <div className="testimonial">
          <p>Their team is highly professional and skilled.</p>
          <p>- Client 2</p>
        </div>
        {/* Repeat for other testimonials */}
      </div>
    </section>
  );
};

export default TestimonialSection; // Export TestimonialSection component
