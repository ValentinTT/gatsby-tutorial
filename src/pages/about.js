import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>Valentin Tapia Torti</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab facere, at
        possimus totam voluptatem ullam veniam quo itaque voluptas quam
        voluptatum quidem unde et sunt exercitationem velit sit earum error.
      </p>
      <p>
        <Link to="contact">Contact</Link>
      </p>
    </Layout>
  );
};

export default AboutPage;
