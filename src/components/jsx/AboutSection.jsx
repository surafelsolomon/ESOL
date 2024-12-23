import "../style/AboutSection.css"; // Import CSS for AboutSection

const AboutSection = () => {
  return (
    <section className="about-section">
      {" "}
      {/* About section container */}
      <h2>About Us</h2> {/* Section heading */}
      <p>
        <h4>Company history</h4> Esol Tech Provider is a technology solutions
        company dedicated to empowering businesses with cutting-edge software
        and hardware. We specialize in both open-source and licensed software,
        ERP systems, advanced virtual touring, and real estate workflow
        automation, along with API integrations and top-quality office
        technology. By merging robust technology with industry expertise, Esol
        helps businesses unlock potential and drive growth in an increasingly
        digital economy. OUR COMPANY HISTORY
      </p>{" "}
      {/* Company history */}
      <p>
        <h4>Misson</h4>
        Our mission is to deliver intelligent, accessible, and scalable
        technology solutions that enable organizations to optimize operations,
        make data-driven decisions, and foster meaningful customer engagement.
        We are dedicated to transforming businesses with solutions that are
        innovative, user-focused, and adaptable to the ever-evolving demands of
        the market
      </p>{" "}
      {/* Founding story */}
      <p>
        <h4>Vision for the future</h4> Our vision is to be a leading technology
        partner for businesses across industries, recognized for delivering
        high-quality software, hardware, and automation solutions that empower
        organizations to thrive in the digital era. We envision a future where
        technology simplifies complexities, drives sustainable growth, and
        fosters a connected, data-empowered business landscape.
      </p>{" "}
      {/* Vision for the future */}
    </section>
  );
};

export default AboutSection; // Export AboutSection component
