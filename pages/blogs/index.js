import React from "react";

import Link from "next/link";
import Image from "next/image";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getAllBlogs } from "../../lib/api";

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
        <Header title="Blogs" />
        <section className="ftco-section ftco-leader">
          <div className="container-fluid">
            <div className="row justify-content-center pb-3">
              <div className="col-md-12 mb-5 heading-section text-center">
                <h2 className="mb-5">
                  Writings <span>&amp; Blogs</span>
                </h2>
              </div>
            </div>
          </div>

          {this.props.allBlogs.map((blog) => (
            <div className="container-fluid px-0 portfolio-entry">
              <div className="row no-gutters d-md-flex justify-content-start text-wrapper">
                <div
                  className="one-half img js-fullheight"
                ><Image src={`/images/${blog.image}`} alt={blog.title} objectFit="cover" layout="responsive" height={100} width={120} /></div>
                <div className="one-half half-text d-flex justify-content-end align-items-center">
                  <div className="text-2 align-items-start d-flex">
                    <div className="desc pt-5 pr-4 pl-4 pt-lg-0 pr-lg-5 pr-xl-0 pl-xl-0">
                      <div className="top">
                        <span className="subheading">
                          {blog.category}
                        </span>
                        <h2 className="mb-4">
                          <a>{blog.title}</a>
                        </h2>
                      </div>
                      <div className="absolute">
                        <div>
                          {blog.shortDesc}
                        </div>
                        <div>
                          <Link as={`/blogs/${blog.slug}`} href={`/blogs/${blog.slug}`}>
                            <a className="custom-btn hover:underline">view full blog</a>
                          </Link>
                        </div>
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
  const allBlogs = getAllBlogs(["title", "slug", "author", "image", "category", "shortDesc"]);

  return {
    props: { allBlogs },
  };
}
