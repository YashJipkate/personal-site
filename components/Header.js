import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <a role="button"
          href="/"
            className="navbar-brand"
            onClick={() =>
              document
                .getElementById("home")
                .scrollIntoView({ behaviour: "smooth" })
            }
          >
            YJ
          </a>
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
                <span className="nav-link"><u>Jr. Undergraduate, IIT(BHU)</u></span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Resume</span>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn"
                  onClick={() =>
                    document
                      .getElementById("about")
                      .scrollIntoView({ behaviour: "smooth" })
                  }
                >
                  About
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn"
                  onClick={() =>
                    document
                      .getElementById("technical")
                      .scrollIntoView({ behaviour: "smooth" })
                  }
                >
                  Technical
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn"
                  onClick={() =>
                    document
                      .getElementById("positions")
                      .scrollIntoView({ behaviour: "smooth" })
                  }
                >
                  Positions
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behaviour: "smooth" })
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
