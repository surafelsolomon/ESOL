import "../style/EventsCalendar.css"; // Import CSS for EventsCalendar

const EventsCalendar = () => {
  return (
    <section className="events-calendar-section">
      {" "}
      {/* Events calendar section container */}
      <h2>Events Calendar</h2> {/* Section heading */}
      <div className="events-content">
        {" "}
        {/* Events content container */}
        <div className="event-item">
          {" "}
          {/* Single event item */}
          <h3>Upcoming Webinars</h3> {/* Item heading */}
          <p>Join our next webinar on innovative solutions.</p>{" "}
          {/* Item description */}
        </div>
        <div className="event-item">
          <h3>Seminars</h3>
          <p>Attend our seminars to gain industry insights.</p>
        </div>
        <div className="event-item">
          <h3>Other Events</h3>
          <p>Check out our other events and workshops.</p>
        </div>
        <form className="event-registration">
          {" "}
          {/* Event registration form */}
          <h3>Event Registration</h3> {/* Form heading */}
          <input type="text" placeholder="Name" required /> {/* Name input */}
          <input type="email" placeholder="Email" required />{" "}
          {/* Email input */}
          <button type="submit">Register</button> {/* Register button */}
        </form>
      </div>
    </section>
  );
};

export default EventsCalendar; // Export EventsCalendar component
