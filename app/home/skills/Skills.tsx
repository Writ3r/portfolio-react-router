import { Row, Col } from "react-bootstrap";
import pic from "./numberSmall.png";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SectionTitle } from "~/components/ui/Section";

function SkillArea(props: {
  name: string;
  desc: {
    line1: string;
    line2: string;
    line3: string;
  };
}) {
  return (
    <Row>
      <Col xs={2}>
        <FontAwesomeIcon
          className="ml-2 animate__animated animate__pulse animate__infinite fa-purple-icon"
          icon={faCheckCircle}
          size="2x"
        />
      </Col>
      <Col xs={10}>
        <h6>{props.name}</h6>
        <p className="grey-text">
          {props.desc.line1}
          <br />
          {props.desc.line2}
          <br />
          {props.desc.line3}
        </p>
        <div className="skills-item"></div>
      </Col>
    </Row>
  );
}

export function Skills() {
  return (
    <section id="skills">
      <SectionTitle text="Skills" />
      <Row className="mb-5 mt-3">
        <Col md="4">
          <SkillArea
            name="Java"
            desc={{
              line1: "6 years of experience",
              line2: "OSGI & Spring Boot frameworks",
              line3: "Service-oriented design",
            }}
          />
          <SkillArea
            name="Databases"
            desc={{
              line1: "6 years of experience",
              line2: "MySQL, PostgreSQL, MongoDB, Solr",
              line3: "SQL and NoSQL design",
            }}
          />
          <SkillArea
            name="JavaScript"
            desc={{
              line1: "5 years of experience",
              line2: "React, Bootstrap, jQuery",
              line3: "Component-oriented design",
            }}
          />
          <SkillArea
            name="Python"
            desc={{
              line1: "4 years of experience",
              line2: "Flask, Dash, Tensorflow",
              line3: "Automation, Neural networks",
            }}
          />
        </Col>
        <Col md="4" className="flex-center">
          <img
            src={pic}
            alt="0"
            className="z-depth-0 img-fluid d-none d-md-block"
          />
        </Col>
        <Col md="4" className="mt-2">
          <SkillArea
            name="Version Control"
            desc={{
              line1: "6 years of experience",
              line2: "Git Versioning",
              line3: "Tourtoise Git, Github Desktop",
            }}
          />
          <SkillArea
            name="Building"
            desc={{
              line1: "6 years of experience",
              line2: "Ant, Maven, Docker",
              line3: "Traditional, and Cloud-oriented",
            }}
          />
          <SkillArea
            name="DevOps Tools"
            desc={{
              line1: "6 years of experience",
              line2: "Atlassian & Azure stacks",
              line3: "Stories, Bugs, PRs, etc",
            }}
          />
          <SkillArea
            name="Cloud"
            desc={{
              line1: "3 year of experience",
              line2: "Docker, Kubernetes, AWS",
              line3: "Microservice-oriented design",
            }}
          />
        </Col>
      </Row>
    </section>
  );
}
