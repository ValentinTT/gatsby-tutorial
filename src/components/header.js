import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import HeaderStyles from "./header.module.scss";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <header>
      <h1>
        <Link className={HeaderStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={HeaderStyles.navList}>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
              to="/blog"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
              to="/contact"
            >
              Contact me
            </Link>
          </li>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
