import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";
import blogStyles from "./blog.module.scss";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(fromNow: true)
          }
        }
      }
    }
  `).allContentfulBlogPost.edges.map(n => n.node);
  console.log(data);
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.map((blog, i) => {
          return (
            <li key={i} className={blogStyles.post}>
              <Link to={`/blog/${blog.slug}`}>
                <h2>{blog.title}</h2>
                <p>{blog.date}</p>
              </Link>
            </li>
          );
        })}
      </ol>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </Layout>
  );
};

export default BlogPage;
