import React from "react";
import "./MainContent.css";

export default function MainContent() {
  return (
    <div className="main-content">
      <div className="profile-pic"></div>
      <img
        src="/assets/images/IMG_1423.jpeg"
        alt="email"
        className="profile-pic-new"
      />
      <div className="profile-text">
        <div className="name">Manas Kaul</div>
        <div className="heading">A Bit About Me</div>
        <div className="sub-heading">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          deserunt repudiandae hic eius, recusandae incidunt vitae ab aliquam
          aspernatur dicta error aut cum veritatis voluptas expedita aperiam
          nobis totam minima!
        </div>
      </div>
    </div>
  );
}
