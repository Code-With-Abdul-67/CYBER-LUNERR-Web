import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import phonSintImage from './New-Update-Screenshot.png';
import securePass from './securePass.png'
import oldPortfolio from './oldPortfolio.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
        Currently I have worked only on three projects and are available on my GitHub, so you can check them out, and I'll share more projects here very soon...
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phonSintImage}
              title="PhonSint"
              description="A Python Based Phone Number OSINT Tool to gather info about Phone Numbers. Works on Windows and Linux"
              ghLink="https://github.com/Code-With-Abdul-67/PhonSint.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={securePass}
              title="Secure Pass"
              description="A Python based command line Password manager to manage all of your passwords. Works on Windows and Linux"
              ghLink="https://github.com/Code-With-Abdul-67/Secure-Pass.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oldPortfolio}
              title="My Previous Portfolio"
              description="This is my old portfolio that I have made before so you can also check it out if you want to"
              ghLink="https://github.com/Code-With-Abdul-67/Cyber-Lunerr-Portfolio.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
