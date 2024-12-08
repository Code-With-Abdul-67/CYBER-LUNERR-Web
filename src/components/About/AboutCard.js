import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Cyber Lunerr</span>
            <br />
            I am currently Employed as a Call Center Agent (Feburary 16, 2024 till Present)
            <br />
            <br />
            I have completed my Matriculation in 2020 and completed my Intermediate in 2023.
            <br />
            <br />
            I am currently enrolled in ACCPAi 3 Years Diploma Course from Aptech Learning.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Book Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Fill your Brain with Giant Dreams so there is no room for Pretty Pursuits"{" "}
          </p>
          <footer className="blockquote-footer">Cyber-Lunerr</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
