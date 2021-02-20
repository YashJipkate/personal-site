import React from "react";

import Image from "next/image";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getAllLeaders } from "../../lib/api";
import markdownToHtml from "../../lib/mdtohtml";

import { initGA, logPageView } from "../../components/GoogleAnalytics";

export default class BlogList extends React.Component {
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
        <Header title="Leadership" />
        <section className="ftco-section ftco-leader">
          <div className="container-fluid">
            <div className="row justify-content-center pb-3">
              <div className="col-md-12 mb-5 heading-section text-center">
                <h2 className="mb-5">
                  Positions &amp;<span> Leadership</span>
                </h2>
              </div>
            </div>
          </div>

          {this.props.allRoles.map((role) => (
            <div className="container-fluid px-0 portfolio-entry">
              <div className="row no-gutters d-md-flex justify-content-start text-wrapper">
                <div
                  className="one-half img js-fullheight"
                ><Image src={`/images/${role.image}`} alt={role.title} objectFit="cover" layout="responsive" height={100} width={120} /></div>
                <div className="one-half half-text d-flex justify-content-end align-items-center">
                  <div className="text-2 align-items-start d-flex">
                    <div className="desc pt-5 pr-4 pl-4 pt-lg-0 pr-lg-5 pr-xl-0 pl-xl-0">
                      <div className="top">
                        <span className="subheading">
                          {role.category}
                        </span>
                        <h2 className="mb-4">
                          <a>{role.title}</a>
                        </h2>
                      </div>
                      <div className="absolute" dangerouslySetInnerHTML={{ __html: markdownToHtml(role.content) }}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        <Footer />
      </div>
    );
  }
}

export async function getStaticProps() {
  const allRoles = getAllLeaders([
    "title",
    "image",
    "category",
    "content",
  ])
  return {
    props: {
      allRoles
    },
  };
}
