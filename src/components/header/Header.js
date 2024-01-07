import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="nav-bar">
      <div className="navigation">
        <div className="left-nav">
          <p className="name">Manas Kaul</p>
          <p className="designation">Full Stack Developer</p>
        </div>
        <div className="end-nav">
          <a href="">Resume</a>
          <div className="seperator"></div>
          <a href="">Personal</a>
        </div>
      </div>
    </div>
  );
}
