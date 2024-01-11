import React from "react";
import resume from "../../resume.json";
import "./Resume.css";

export function LeftNav({ resume }) {
  let leftNavLinks = ["Manas Kaul"];
  resume.sections.forEach((resumeSection) => {
    leftNavLinks.push(resumeSection.title);
  });

  const leftNavLinksList = leftNavLinks.map((linkText, idx) => {
    const scrollPos = `#${linkText}`;

    return (
      <a href={scrollPos} key={idx}>
        {linkText}
      </a>
    );
  });

  return (
    <div className="left-nav">
      <ul
        style={{
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          padding: "0",
        }}
      >
        {leftNavLinksList}
      </ul>
    </div>
  );
}

export function RightContent({ resume }) {
  return (
    <div className="right-content">
      <Header resume={resume} />
      <Section resume={resume} />
    </div>
  );
}

export function Header({ resume }) {
  return (
    <div id="Manas Kaul">
      <p
        style={{
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        {resume.designation}
      </p>
      <p>{resume.description}</p>
    </div>
  );
}

export function Section({ resume }) {
  let allResume = resume.sections.map((resumeSection, idx) => {
    let subSections = resumeSection.subsection.map((subSec, idx) => {
      let subSectionDesc = subSec.description.map((desc, idx) => {
        return (
          <div key={idx}>
            <li>{desc}</li>
          </div>
        );
      });

      return (
        <div
          style={{
            marginLeft: "25px",
          }}
          key={idx}
        >
          <span>
            <span
              style={{
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              {subSec.heading}
            </span>{" "}
            | <span>{subSec.subHeading1}</span>
          </span>
          <div>{subSec.subHeading2}</div>
          <ul>{subSectionDesc}</ul>
        </div>
      );
    });

    return (
      <div key={idx} id={resumeSection.title}>
        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "12px",
          }}
        >
          {resumeSection.title}
        </div>
        {subSections}
        <br />
      </div>
    );
  });
  return <>{allResume}</>;
}

export default function Resume() {
  return (
    <div className="resume">
      <LeftNav resume={resume} />
      <RightContent resume={resume} />
    </div>
  );
}
