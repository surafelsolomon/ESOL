import "../style/ContactForm.css"; // Import CSS for ContactForm

const ContactForm = () => {
  return (
    <section className="contact-form-section">
      {" "}
      {/* Contact form section container */}
      <h2>Contact Us</h2> {/* Section heading */}
      <form className="contact-form">
        {" "}
        {/* Contact form */}
        <input type="text" placeholder="Name" required /> {/* Name input */}
        <input type="email" placeholder="Email" required /> {/* Email input */}
        <input type="tel" placeholder="Phone" required /> {/* Phone input */}
        <textarea placeholder="Message" required></textarea>{" "}
        {/* Message textarea */}
        <button type="submit">Submit</button> {/* Submit button */}
      </form>
    </section>
  );
};

export default ContactForm; // Export ContactForm component
