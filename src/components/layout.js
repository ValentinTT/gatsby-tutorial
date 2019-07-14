import React from "react";
import Header from "./header";
import Footer from "./footer";
import LayoutStyle from "./layout.module.scss";
const Layout = ({ children }) => {
  return (
    <div className={LayoutStyle.container}>
      <div className={LayoutStyle.header}>
        <Header />
      </div>
      <div className={LayoutStyle.centerPage}>{children}</div>
      <div className={LayoutStyle.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
