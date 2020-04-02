import React from "react";

export default class ResponsibilityPositions extends React.Component {
  render() {
    return (
      <section className="ftco-section ftco-leader" id="positions">
        <div className="container-fluid">
          <div className="row justify-content-center pb-3">
            <div className="col-md-12 mb-5 heading-section text-center">
              <h2 className="mb-5">
                Leadership <span>Spectacle</span>
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
                  "url('/images/Screen-Shot-2019-11-12-at-2.57.31-PM.png')"
              }}
            ></div>
            <div className="one-half half-text d-flex justify-content-end align-items-center">
              <div className="text align-items-center d-flex">
                <div className="desc pt-5 pl-4 pr-4 pt-lg-0 pl-lg-5 pl-xl-0 pr-xl-0">
                  <div className="top">
                    <span className="subheading">Technex'20 </span>
                    <h2 className="mb-4">
                      <a>Head of Technical Ops</a>
                    </h2>
                  </div>
                  <div className="absolute">
                    <div>
                      <ul>
                        <li>
                          Organised and led the team that developed the official
                          website of Technex, the Campus Ambassador portal and
                          the Hospitality portal.
                        </li>
                        <li>
                          Trained the juniors in Angular, Django and Heroku
                          which form the primary tech stack of the site.
                        </li>
                        <li>
                          Maintain the database of thousands of participants
                          across various categories.
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
                backgroundImage:
                  "url('/images/the-21st-century-african-leader-760x0-c-default.png')"
              }}
            ></div>
            <div className="one-half half-text d-flex justify-content-end align-items-center">
              <div className="text-2 align-items-start d-flex">
                <div className="desc pt-5 pr-4 pl-4 pt-lg-0 pr-lg-5 pr-xl-0 pl-xl-0">
                  <div className="top">
                    <span className="subheading">The Oppia Foundation</span>
                    <h2 className="mb-4">
                      <a>Lead Of the Developer Workflow</a>
                    </h2>
                  </div>
                  <div className="absolute">
                    <div>
                      <ul>
                        <li>
                          Maintain the code quality and devise new conventions
                          while enforcing the existing ones.
                        </li>
                        <li>
                          Onboarded new members to the team and assigned them
                          tasks.
                        </li>
                        <li>
                          Specialized in linter related issues, the python part
                          of which was in PyLint with some custom extensions.
                        </li>
                        <li>
                          Collaborated with the TypeScript upgrade lead to
                          introduce new conventions for the newly introduced
                          TypeScript.
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
          <div className="row no-gutters d-xl-flex justify-content-end text-wrapper">
            <div
              className="one-half img js-fullheight"
              style={{
                backgroundImage: "url('/images/leader_647.webp')"
              }}
            ></div>
            <div className="one-half half-text d-flex justify-content-end align-items-center">
              <div className="text align-items-center d-flex">
                <div className="desc pt-5 pl-4 pr-4 pt-lg-0 pl-lg-5 pl-xl-0 pr-xl-0">
                  <div className="top">
                    <span className="subheading">The Oppia Foundation</span>
                    <h2 className="mb-4">
                      <a>Core Member</a>
                    </h2>
                  </div>
                  <div className="absolute">
                    <div>
                      <ul>
                        <li>Member of the Oppia Github organization.</li>
                        <li>
                          Maintain the repository and look for critical bugs.
                        </li>
                        <li>
                          Review pull requests critically to ensure there is no
                          breakage.
                        </li>
                      </ul>
                    </div>
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
