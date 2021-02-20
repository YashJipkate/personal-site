import React from "react";

import Image from "next/image";
import Link from "next/link";

export default class ResponsibilityPositions extends React.Component {
  render() {
    return (
      <section className="ftco-section ftco-portfolio" id="technical">
        <div className="container-fluid px-0 portfolio-entry">
          <div className="row no-gutters d-xl-flex justify-content-end text-wrapper">
            <div
              className="one-half img js-fullheight"
            ><Image src="/images/pngtree-dark-abstract-background-with-overlap-layers-image_305025.jpeg" alt="Leadership section" objectFit="cover" layout="responsive" height={100} width={120} /></div>
            <div className="one-half half-text d-flex justify-content-end align-items-center">
              <div className="text align-items-center d-flex">
                <div className="desc pt-5 pl-4 pr-4 pt-lg-0 pl-lg-5 pl-xl-0 pr-xl-0">
                  <div className="top">
                    <span className="subheading">Experience </span>
                    <h2 className="mb-4">
                      <a>Positions of Leadership</a>
                    </h2>
                  </div>
                  <div className="absolute">
                    <div>
                      Not just technical knowledge, sometimes teamwork and its management plays
                      a key role in development process. I was fortunate enough to have been
                      offered some key roles in some of the most challenging projects and teams.
                    </div>
                    <div>
                      <Link href="/roles">
                        <a className="custom-btn"> view all roles &gt;</a>
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
