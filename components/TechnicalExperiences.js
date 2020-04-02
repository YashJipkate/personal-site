import React from "react";

export default class TechnicalExperiences extends React.Component {
  render() {
    return (
      <section className="ftco-section ftco-portfolio" id="technical">
        <div className="container-fluid">
          <div className="row justify-content-center pb-3">
            <div className="col-md-12 mb-5 heading-section text-center">
              <h2 className="mb-5">
                Technical <span>Showcase</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="container-fluid px-0 portfolio-entry">
          <div className="row no-gutters d-xl-flex justify-content-end text-wrapper">
            <div
              className="one-half img js-fullheight"
              style={{
                backgroundImage:
                  "url('/images/Google-Summer-of-Code-Program-2018.jpeg')"
              }}
            ></div>
            <div className="one-half half-text d-flex justify-content-end align-items-center">
              <div className="text align-items-center d-flex">
                <div className="desc pt-5 pl-4 pr-4 pt-lg-0 pl-lg-5 pl-xl-0 pr-xl-0">
                  <div className="top">
                    <span className="subheading">Frontend Architecture </span>
                    <h2 className="mb-4">
                      <a>GSoC'19 @Oppia</a>
                    </h2>
                  </div>
                  <div className="absolute">
                    <div>
                      <ul>
                        <li>
                          Devised a plan for the migration of frontend
                          architecture from AngularJS to Angular 8 in
                          TypeScript.
                        </li>
                        <li>
                          Coordinated with various teams across the organization
                          to ensure smooth transition and unaffected user
                          experience.
                        </li>
                        <li>
                          Intoduced Angular and migrated services while
                          refactoring the Karma and E2E protractor tests.
                        </li>
                        <li>
                          <em>137,101</em> Lines of code, <em>72</em> Pull
                          Requests and numerous code reviews.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid px-0 portfolio-entry">
          <div className="row no-gutters d-md-flex justify-content-start text-wrapper">
            <div
              className="one-half img js-fullheight"
              style={{
                backgroundImage: "url('/images/medical-team-technology.jpg')"
              }}
            ></div>
            <div className="one-half half-text d-flex justify-content-end align-items-center">
              <div className="text-2 align-items-start d-flex">
                <div className="desc pt-5 pr-4 pl-4 pt-lg-0 pr-lg-5 pr-xl-0 pl-xl-0">
                  <div className="top">
                    <span className="subheading">Intern / Full Stack</span>
                    <h2 className="mb-4">
                      <a>Doctor Around You</a>
                    </h2>
                  </div>
                  <div className="absolute">
                    <div>
                      <ul>
                        <li>
                          Developed and designed the initial basic Django
                          structure of the website.
                        </li>
                        <li>
                          Integrated an external template to the Django app to
                          suit our needs.
                        </li>
                        <li>
                          Hosted the PostgreSQL storage on AWS and the site on
                          Heroku.
                        </li>
                        <li>
                          Used Google Maps API to find nearest doctors in an
                          area.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-12 portfolio-wrap">
              <div className="row no-gutters align-items-center flip-side">
                <div
                  className="col-md-5 order-md-last img js-fullheight"
                  style={{
                    backgroundImage:
                      "url('/images/72578778_2932337460127363_3045265455066382336_n.jpg')"
                  }}
                ></div>
                <div className="col-md-7">
                  <div className="text pt-5 pr-md-5">
                    <div className="px-4 px-lg-4">
                      <div className="desc">
                        <div className="top">
                          <span className="subheading">Hackathon</span>
                          <h2 className="mb-4">
                            <a>RoadPE - Inter IIT</a>
                          </h2>
                        </div>
                        <div className="absolute">
                          <div>
                            <ul>
                              <li>
                                Developed a responsive web-app for
                                crowd-sourcing information to track progress of
                                construction sites powered by gamification.
                              </li>
                              <li>
                                Designed an interactive game using location pins
                                from the Google Maps API.
                              </li>
                              <li>
                                The admin panel was equipped with heatmaps and
                                real time charts.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-12 portfolio-wrap">
              <div className="row no-gutters align-items-center flip-side">
                <div
                  className="col-md-5 img js-fullheight"
                  style={{
                    backgroundImage:
                      "url('/images/bridge-design-IIT-bhu20.png')"
                  }}
                ></div>
                <div className="col-md-7">
                  <div className="text pt-5 pl-md-5 pl-md-4">
                    <div className="px-4 px-lg-4">
                      <div className="desc">
                        <div className="top">
                          <span className="subheading">Site from scratch</span>
                          <h2 className="mb-4">
                            <a>Technex 2020</a>
                          </h2>
                        </div>
                        <div className="absolute">
                          <div>
                            <ul>
                              <li>
                                Designed and developed the official website for
                                Technex - The Annual Techno-Management fest of
                                IITBHU.
                              </li>
                              <li>
                                With an Angular frontend and an attractive
                                external theme integration, the site served as
                                an essential part of the organization and
                                success of the fest.
                              </li>
                              <li>
                                The Django backend equipped with swagger
                                provided a user friendly interface to visualize
                                and consume the Technex API.
                              </li>
                              <li>
                                Complete with social login and a user dashboard
                                made in Angular, the website was viewed in more
                                than 50 nations by more than 20k users.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid px-0 portfolio-entry">
          <div className="row no-gutters d-md-flex justify-content-end text-wrapper">
            <div
              className="one-half img js-fullheight"
              style={{
                backgroundImage: "url('/images/eye-1024x808.jpg')"
              }}
            ></div>
            <div className="one-half half-text d-flex justify-content-end align-items-center">
              <div className="text align-items-center d-flex">
                <div className="desc pt-5 pl-5 pr-5 pt-lg-0 pl-lg-5 pl-xl-0 pr-xl-0">
                  <div className="top">
                    <span className="subheading">Computer Vision </span>
                    <h2 className="mb-4">
                      <a>Blind Device</a>
                    </h2>
                  </div>
                  <div className="absolute">
                    <div>
                      <ul>
                        <li>
                          Developed an Android app for aiding the blind through
                          Computer Vision.
                        </li>
                        <li>
                          Used ResNet, AlexNet, YOLO, Faster-RCNN and ’Show and
                          tell’ (for image captioning) with the help of
                          Tensorflow and Keras.
                        </li>
                        <li>
                          Hosted the algo on AWS which communicated through the
                          Flask API.
                        </li>
                        <li>
                          Produced speech output of the received image caption.
                        </li>
                      </ul>
                    </div>
                    {/* <p>
                    <a href="#" className="custom-btn">
                      View Portfolio
                    </a>
                  </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
