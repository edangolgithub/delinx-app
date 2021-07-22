import React from "react";
import Header from "./Header.js";
import Content from "./Content";
import LaunchList from "./LaunchList";
import Footer from "./Footer";
function Layout() {
  return (
    <div>
      <div className="container-fluid">
        <Header />
        <Content />
        <LaunchList />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
