import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const BlogPage = () => {
  return (
    <Layout>
      <h1>Blog</h1>
      <p>Here there will be displayed a blog post</p>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </Layout>
  );
};

export default BlogPage;
