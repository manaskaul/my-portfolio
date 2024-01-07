import React from "react";
import "./HomePage.css";
import MainContent from "./main-content/MainContent";
import Footer from "./footer/Footer";

export default function HomePage() {
  return (
    <div className="home-page">
      <MainContent />
      <Footer />
    </div>
  );
}
