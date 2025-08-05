import React from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import FeatureWorks from "./components/FeatureWorks.jsx";
import Testimonials from "./components/Testimonials.jsx";
import CallToAction from "./components/CallToAction.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <FeatureWorks />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
