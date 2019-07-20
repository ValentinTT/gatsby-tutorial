import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>Reach me via mail: valentintapiatorti@gmail</p>
      <p>
        <Link to="/">Home</Link>
      </p>
    </Layout>
  );
};

export default ContactPage;
