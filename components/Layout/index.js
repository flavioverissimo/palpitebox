import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header className="mb-16" />
      <div className="container mx-auto">{children}</div>
      <Footer className="mt-16" />
    </div>
  );
};

export default Layout;
