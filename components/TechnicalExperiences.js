import React from "react";

import Link from "next/link";
import Image from "next/image";

export default class TechnicalExperiences extends React.Component {
  render() {
    return (
      <section className="ftco-section ftco-portfolio" id="technical">
        <div className="container-fluid px-0 portfolio-entry">
          <div className="row no-gutters d-xl-flex justify-content-end text-wrapper">
            <div
              className="one-half img js-fullheight"
            ><Image src="/images/simple-black-background-geometry-dark-wallpaper-preview.jpeg" alt="Projects section" objectFit="cover" layout="responsive" height={100} width={120} /></div>
            <div className="one-half half-text d-flex justify-content-end align-items-center">
              <div className="text align-items-center d-flex">
                <div className="desc pt-5 pl-4 pr-4 pt-lg-0 pl-lg-5 pl-xl-0 pr-xl-0">
                  <div className="top">
                    <span className="subheading">Experience </span>
                    <h2 className="mb-4">
                      <a>Internships &amp; Projects</a>
                    </h2>
                  </div>
                  <div className="absolute">
                    <div>
                      See some of my projects where I applied and learnt various aspects of
                      software engineering. Also, see some of the internships that I have
                      been offered and the projects that I accomplished in them.
                    </div>
                    <div>
                      <Link href="/projects">
                        <a className="custom-btn"> view all projects &gt;</a>
                      </Link>
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
