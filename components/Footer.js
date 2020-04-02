import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="ftco-footer ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">May the Force be with you!</h2>
                <p>
                  If you have any complaints or suggestions, please feel free to
                  reach out to me via any mode suitable. Also, find me on FB,
                  Insta, GitHub, LinkedIn and Sourcerer.
                </p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li className="ftco-animate">
                    <a href="https://github.com/YashJipkate">
                      <span className="icon-github"></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="https://www.linkedin.com/in/yashjipkate/">
                      <span className="icon-linkedin"></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="https://sourcerer.io/yashjipkate">
                      <span className="icon-terminal"></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="https://www.facebook.com/yash.jipkate">
                      <span className="icon-facebook"></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="https://www.instagram.com/the_jedi_code/">
                      <span className="icon-instagram"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Reach out!</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon icon-map-marker"></span>
                      <span className="text">
                        Room 184, Visweswaraya Hostel, IIT(BHU), Varanasi, UP -
                        221005
                      </span>
                    </li>
                    <li>
                      <span className="icon icon-phone"></span>
                      <span className="text">+91 96955 78684</span>
                    </li>
                    <li>
                      <span className="icon icon-envelope"></span>
                      <span className="text">yashjipkate@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                Developed by Yash Jipkate in{" "}
                <a href="https://nextjs.org/">Next.js</a> | Template by{" "}
                <a href="https://colorlib.com/wp/template/evans/">Colorlib</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
