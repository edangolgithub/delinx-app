import React from "react";
import Nav1 from "./Nav1.js";
import "./style.css";
function Header() {
  return (
    <div className="dheader">
      <video className="videoTag" autoPlay loop muted>
        <source src="/media/video.mp4" type="video/mp4" />
      </video>
      <div className="row">
        <div className="col-7">
          <img src="/media/SpaceX-Logo.svg" alt="Space X SVG" />
        </div>
        <div className="col-5">
          <Nav1 />
        </div>
      </div>
    </div>
  );
}

export default Header;
