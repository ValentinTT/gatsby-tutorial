import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

const Head = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `).site.siteMetadata;
  return <Helmet title={`${props.title} | ${data.title}`} />;
};

export default Head;
