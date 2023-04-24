import React from "react";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "../components/Header";
import Navigation from "../components/Navigation";
// import AboutMe from "../components/AboutMe";
// import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
// import Resume from "../components/Resume";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Contact />
      <Footer />
    </div>
  );
}
