import React from "react";

import BlogSection from "../components/BlogSection";
import Header from "../components/Header";
import Landing from "../components/Landing";
import About from "../components/About";
import TechnicalExperiences from "../components/TechnicalExperiences";
import ResponsibilityPositions from "../components/ResponsibilityPositions";
import Footer from "../components/Footer";

import { initGA, logPageView } from "../components/GoogleAnalytics";

export default class Index extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  render() {
    return (
      <div>
        <Header title="Home" />
        <Landing />
        <About />
        <BlogSection />
        <TechnicalExperiences />
        <ResponsibilityPositions />
        <Footer />
      </div>
    );
  }
}
