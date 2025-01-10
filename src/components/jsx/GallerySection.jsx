import "../style/GallerySection.css"; // Import CSS for GallerySection

const GallerySection = () => {
  return (
    <section className="gallery-section">
      {" "}
      {/* Gallery section container */}
      <h2>Project Gallery</h2> {/* Section heading */}
      <div className="gallery-items">
        {" "}
        {/* Container for gallery items */}
        <div className="gallery-item">
          {" "}
          {/* Single gallery item */}
          <img src="gallery1.jpg" alt="Gallery 1" /> {/* Gallery image */}
        </div>
        <div className="gallery-item">
          <img src="gallery2.jpg" alt="Gallery 2" />
        </div>
        {/* Repeat for other gallery items */}
      </div>
    </section>
  );
};

export default GallerySection;
