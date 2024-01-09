import React from "react";
import "./Resume.css";

export function LeftNav() {
  return (
    <nav
      style={{
        float: "left",
        width: "30%",
        height: "100%",
        background: "#ccc",
        padding: "20px",
      }}
    >
      <ul>
        <li>Manas Kaul</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Education</li>
        <li>Skills</li>
      </ul>
    </nav>
  );
}

export function RightContent() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
        laudantium necessitatibus assumenda ratione ab temporibus dolores
        consequatur, officiis possimus minima distinctio, vel, minus quam
        pariatur?
      </section>
      <br />
      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
        laudantium necessitatibus assumenda ratione ab temporibus dolores
        consequatur, officiis possimus minima distinctio, vel, minus quam
        pariatur?
      </section>
      <br />
      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
        laudantium necessitatibus assumenda ratione ab temporibus dolores
        consequatur, officiis possimus minima distinctio, vel, minus quam
        pariatur?
      </section>
    </div>
  );
}

export default function Resume() {
  return (
    <div className="resume">
      <LeftNav />
      <RightContent />
    </div>
  );
}
