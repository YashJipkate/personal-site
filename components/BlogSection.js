import React from "react";

import Link from "next/link";
import Image from "next/image";

export default class BlogSection extends React.Component {
  render() {
    return (
      <div className="container-fluid px-0 portfolio-entry">
        <div className="row no-gutters d-xl-flex justify-content-end text-wrapper">
          <div
            className="one-half img js-fullheight"
          ><Image src="/images/blogsection.jpeg" alt="Blogs section" objectFit="cover" layout="responsive" height={100} width={120} /></div>
          <div className="one-half half-text d-flex justify-content-end align-items-center">
            <div className="text align-items-center d-flex">
              <div className="desc pt-5 pl-4 pr-4 pt-lg-0 pl-lg-5 pl-xl-0 pr-xl-0">
                <div className="top">
                  <span className="subheading">Technology </span>
                  <h2 className="mb-4">
                    <a>Blogs</a>
                  </h2>
                </div>
                <div className="absolute">
                  <div>
                    See some of my writings where I share my hands on experience with the
                    various domains of software engineering and the challenges that came
                    in the way.
                  </div>
                  <div>
                    <Link href="/blogs">
                      <a className="custom-btn"> view all blogs ></a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
