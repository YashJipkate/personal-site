import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <button
            className="navbar-brand btn"
            onClick={() => document.getElementById("home").scrollIntoView()}
          >
            YJ
          </button>
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
                <button
                  className="nav-link btn"
                  onClick={() =>
                    document.getElementById("about").scrollIntoView()
                  }
                >
                  About
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn"
                  onClick={() =>
                    document.getElementById("technical").scrollIntoView()
                  }
                >
                  Technical
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn"
                  onClick={() =>
                    document.getElementById("positions").scrollIntoView()
                  }
                >
                  Positions
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn"
                  onClick={() =>
                    document.getElementById("contact").scrollIntoView()
                  }
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
