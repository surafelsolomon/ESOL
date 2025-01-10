import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import React Router
import "./App.css"; // Import CSS for App
import SharedLayout from "./components/layout/SharedLayout";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import CustomerPortal from "./pages/CustomerPortal";
import FAQs from "./components/jsx/FAQs";
import EventsCalendar from "./components/jsx/EventsCalendar";
import ResourceCenter from "./components/jsx/ResourceCenter";
const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route element={<SharedLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="services" element={<Services />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="customer-portal" element={<CustomerPortal />} />
            <Route path="resource-center" element={<ResourceCenter />} />
            <Route path="events-calendar" element={<EventsCalendar />} />
            <Route path="FAQs" element={<FAQs />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App; // Export App component
