import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";

const NotFound = () => {
  return (
    <Layout>
      <Head title="Not Found" />
      <h1>Page not found</h1>
      <Link to="/">Go Home</Link>
    </Layout>
  );
};

export default NotFound;
