import React from "react";

import Head from "next/head";
import Link from "next/link";

export default class Header extends React.Component {
  render() {
    return (
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
        <title key="title">{this.props.title} | Yash Jipkate</title>
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
        <meta property="og:title" content={`${this.props.title} | Yash Jipkate`} />

        <nav
          className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
          id="ftco-navbar"
        >
          <div className="container">
            <Link href="/">
              <a className="navbar-brand btn">
                YJ
              </a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="oi oi-menu"></span> Menu
            </button>

            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <span className="nav-link">
                    <u>Jr. Undergraduate, IIT(BHU)</u>
                  </span>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/files/resume.pdf"
                    target="_blank"
                  >
                    Resume
                  </a>
                </li>
                <li className="nav-item">
                  <Link href="/projects">
                    <a className="nav-link">
                      Projects
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/roles">
                    <a className="nav-link">
                      Roles
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Head>
    );
  }
}
