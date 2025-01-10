import Navbar from "../jsx/Navbar";
import Footer from "../jsx/Footer";
import CTASection from "../jsx/CTASection";
import { Outlet } from "react-router-dom";

export default function SharedLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <CTASection />
      <Footer />
    </div>
  );
}
