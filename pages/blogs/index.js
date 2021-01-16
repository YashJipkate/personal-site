import React from "react";

import Link from "next/link";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getAllBlogs } from "../../lib/api";

export default class BlogList extends React.Component {
  render() {
    return (
      <div>
        <Header title="Blogs" />
        {this.props.allBlogs.map((blog) => (
          <div className="container-fluid px-0 portfolio-entry">
            <div className="row no-gutters d-md-flex justify-content-start text-wrapper">
              <div
                className="one-half img js-fullheight"
                style={{
                  backgroundImage:
                    `url('/images/${blog.image}')`,
                }}
              ></div>
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