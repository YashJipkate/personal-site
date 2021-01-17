import React from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getBlogBySlug, getAllBlogs } from "../../lib/api";
import markdownToHtml from "../../lib/mdtohtml";

export default class Content extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  render() {
    return (
      <>
        <Header title={`${this.props.blog.title}`} />
        <section className="ftco-section ftco-intro">
          <div className="container">
            <div className="row justify-content">
              <div className="col-md-8">
                <h2>{this.props.blog.title}</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: this.props.blog.content }}
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export async function getStaticProps({ params }) {
  const blog = getBlogBySlug(params.slug, [
    "title",
    "slug",
    "author",
    "content",
  ]);
  const content = markdownToHtml(blog.content || "");

  return {
    props: {
      blog: {
        ...blog,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const blogs = getAllBlogs(["slug"]);

  return {
    paths: blogs.map((blog) => {
      return {
        params: {
          slug: blog.slug,
        },
      };
    }),
    fallback: false,
  };
}
