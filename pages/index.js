import React from "react";

import Head from "next/head";

import Header from "../components/Header";
import Landing from "../components/Landing";
import About from "../components/About";
import TechnicalExperiences from "../components/TechnicalExperiences";
import ResponsibilityPositions from "../components/ResponsibilityPositions";
import Footer from "../components/Footer";

import { initGA, logPageView } from "../components/googleAnalytics";

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
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Barlow+Condensed:900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i&display=swap"
            rel="stylesheet"
          />
          <link href="/css/icomoon.css" rel="stylesheet" />
          <link rel="shortcut icon" href="/favicon.png" key="icon" />
          <title key="title">Yash Jipkate | Personal</title>
          <meta name="author" content="Yash Jipkate" />
          <meta
            name="description"
            content="This is the official portfolio website of Yash Jipkate. It contains all the information and contact details that aims to give the visitor complete look into the professional life of Yash Jipkate."
          />
          <meta
            property="og:image"
            content="https://cdn.dribbble.com/users/2424687/screenshots/6065697/cat-01.png"
          />
          <meta
            property="og:description"
            content="This is the official portfolio website of Yash Jipkate. It contains all the information and contact details that aims to give the visitor complete look into the professional life of Yash Jipkate."
          />
          <meta property="og:title" content="Yash Jipkate | Personal" />
        </Head>
        <Header />
        <Landing />
        <About />
        <TechnicalExperiences />
        <ResponsibilityPositions />
        <Footer />
        <script src="/js/jquery.min.js"></script>
        <script src="/js/jquery-migrate-3.0.1.min.js"></script>
        <script src="/js/popper.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/jquery.easing.1.3.js"></script>
        <script src="/js/jquery.waypoints.min.js"></script>
        <script src="/js/jquery.stellar.min.js"></script>
        <script src="/js/owl.carousel.min.js"></script>
        <script src="/js/jquery.magnific-popup.min.js"></script>
        <script src="/js/aos.js"></script>
        <script src="/js/jquery.animateNumber.min.js"></script>
        <script src="/js/scrollax.min.js"></script>
        <script src="/js/main.js"></script>
      </div>
    );
  }
}
