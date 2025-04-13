import React, { useState, type PropsWithChildren } from "react";
import {
  Nav,
  Row,
  Col,
  TabContainer,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalDialog,
  Button,
  Carousel,
  CarouselItem,
} from "react-bootstrap";
import {
  faSolarPanel,
  faLaptopCode,
  faEnvelope,
  faPeopleCarry,
  faChartPie,
  faVolleyballBall,
  faTrophy,
  faTShirt,
  faUsers,
  faLink,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  type FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

import clothesClosetItem from "./clothescloset/ClothesClosetItem.png";
import clothesClosetMenue from "./clothescloset/ClothesClosetMainMenue.png";
import ksspeLogin from "./ksspe/LoginScreen.png";
import ksspeMain from "./ksspe/KSSPEMainMenueBetter.png";
import masterPlanAbout from "./masterplan/About.png";
import masterPlanDash from "./masterplan/MasterDashboard.png";
import masterPlanAssets from "./masterplan/Assets.png";
import ksspeERD from "./ksspe/ERD.jpeg";
import ksspeSeq from "./ksspe/KSSPECompletedSeqDiagrams.pdf";
import ksspeState from "./ksspe/State.jpg";
import clothesSeq from "./clothescloset/Team6-Sequence.pdf";
import clothesState from "./clothescloset/stateDiagram.jpg";

type Technology = {
  name: string;
  desc: string;
};

type Information = {
  projName: string;
  authors: string;
  period: string;
};

type ProjectInput = {
  info: Information;
  overview: string;
  tech: Technology[];
  children?: React.ReactNode;
  conclusion: string;
  pics: string[];
};

function ProjectPictureGallery(
  props: PropsWithChildren<{
    show: boolean;
    title: string;
    handleShow: () => void;
    handleClose: () => void;
  }>
) {
  return (
    <Modal show={props.show} onHide={props.handleClose} size="lg">
      <ModalHeader closeButton>
        <ModalTitle>{props.title}</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Carousel indicators={false}>{props.children}</Carousel>
      </ModalBody>
      <ModalFooter>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
}

const Project = (props: ProjectInput) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <h5 className="feature-title">Information</h5>
      <p className="grey-text">
        <strong>Project Name:</strong> {props.info.projName} <br />
        <strong>Authors:</strong> {props.info.authors} <br />
        <strong>Period:</strong> {props.info.period}
      </p>
      <h5 className="feature-title title-margin">Overview</h5>
      <p className="grey-text">{props.overview}</p>
      <h5 className="feature-title title-margin">Technologies</h5>
      <p className="grey-text">
        {props.tech.map((tech) => {
          return (
            <div>
              <strong>{tech.name}:</strong> {tech.desc} <br />
            </div>
          );
        })}
      </p>
      <h5 className="feature-title title-margin">Resources</h5>
      <p>
        {props.children}
        <a onClick={() => setShowModal(true)} className="custom-link">
          <FontAwesomeIcon
            icon={faFolderOpen}
            color="black"
            className="animate__animated animate__pulse animate__infinite mr-2"
          />
          Pictures
        </a>
      </p>
      <h5 className="feature-title title-margin">Concluding Thoughts</h5>
      <p className="grey-text">{props.conclusion}</p>
      <ProjectPictureGallery
        title={props.info.projName}
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleShow={() => setShowModal(true)}
      >
        {props.pics.map((pic, index) => {
          return (
            <CarouselItem>
              <img className="d-block w-100" style={{height:"570px"}} src={pic} alt="..." />
            </CarouselItem>
          );
        })}
      </ProjectPictureGallery>
    </>
  );
};

export function Projects() {
  // react-bootstrap's active key appears broken with SSR, so need to manage it myself..
  const [key, setKey] = useState("dc");
  return (
    <section id="projects" className="pageAnchor">
      <h2 className="my-5 h3 text-center">Projects</h2>
      <TabContainer id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav
              variant="pills"
              className="flex-column lucas-pills projects-pills"
              defaultActiveKey="dc"
            >
              <NavItem>
                <NavLink
                  active={key === "dc"}
                  onClick={() => setKey("dc")}
                  eventKey="dc"
                >
                  <FontAwesomeIcon
                    icon={faSolarPanel}
                    color="#2196f3"
                    className="animate__animated animate__jello animate__infinite mr-2"
                  />
                  Digital Command
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={key === "mp"}
                  onClick={() => setKey("mp")}
                  eventKey="mp"
                >
                  <FontAwesomeIcon
                    icon={faChartPie}
                    color="#00bcd4"
                    className="animate__animated animate__jello animate__infinite mr-2"
                  />
                  Master Plan
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={key === "km"}
                  onClick={() => setKey("km")}
                  eventKey="km"
                >
                  <FontAwesomeIcon
                    icon={faVolleyballBall}
                    color="black"
                    className="animate__animated animate__jello animate__infinite mr-2"
                  />
                  KSSPE Management
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={key === "cc"}
                  onClick={() => setKey("cc")}
                  eventKey="cc"
                >
                  <FontAwesomeIcon
                    icon={faTShirt}
                    color="#3f51b5!"
                    className="animate__animated animate__jello animate__infinite mr-2"
                  />
                  Clothes Closet
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={key === "hm"}
                  onClick={() => setKey("hm")}
                  eventKey="hm"
                >
                  <FontAwesomeIcon
                    icon={faTrophy}
                    color="#ebdc13"
                    className="animate__animated animate__jello animate__infinite mr-2"
                  />
                  Honorable Mentions
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col sm={9}>
            <TabContent>
              <TabPane active={key === "dc"} eventKey="dc">
                <Project
                  info={{
                    projName: "Mailaway",
                    authors: "Lucas Wing",
                    period: "April 2021 - PRESENT",
                  }}
                  overview="API-powered throwaway email account service. Will have a minimal frontend, and developer-centric backend for
                          third-party integrators to use it in their own solutions. It's backed by Wildduck, a MongoDB backed extremely scalable email solution."
                  tech={[
                    { name: "Languages", desc: "Java, JavaScript, HTML, CSS" },
                    {
                      name: "Frameworks",
                      desc: "Spring-Boot, React, Bootstrap",
                    },
                    { name: "Deployment", desc: "Docker" },
                    { name: "Documentation", desc: "OpenAPI" },
                    { name: "Database", desc: "MongoDB" },
                    { name: "Metrics", desc: "Prometheus/Grafana" },
                  ]}
                  conclusion="The primary purpose of this project is to learn how spring-boot works.
                          I doubt this'll ever kick off enough to actually be profitable, and that's alright.
                          If I can get real-world experience with spring-boot, I'm happy with the outcome."
                  pics={[]}
                ></Project>
              </TabPane>
              <TabPane active={key === "mp"} eventKey="mp">
                <Project
                  info={{
                    projName: "Master Plan",
                    authors: "Lucas Wing",
                    period: "January 2019 - January 2020",
                  }}
                  overview="Financial projection service. Takes a user's current financial state, and projects it into the future.
                          Useful for testing different financial outcomes of your decisions, and not requiring experience with excel."
                  tech={[
                    { name: "Languages", desc: "PHP, Javascript, HTML, CSS" },
                    { name: "Frameworks", desc: "Bootstrap" },
                    { name: "Database", desc: "MySQL" },
                  ]}
                  conclusion="This project was my first major solo endevor to create an actually working webapp.
                            Was it optimal? No. Is there a lot of bugs? Probabily. But it served its purpose.
                            In the next few years at some point I'll likely come back and revamp this project.
                            The underlying idea is good, it just needs better execution and functionality."
                  pics={[masterPlanDash, masterPlanAbout, masterPlanAssets]}
                >
                  <a
                    className="custom-link"
                    href="https://www.master-plan.me/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLink}
                      color="black"
                      className="animate__animated animate__pulse animate__infinite mr-2"
                    />
                    Website
                  </a>
                  <br />
                </Project>
              </TabPane>
              <TabPane active={key === "km"} eventKey="km">
                <Project
                  info={{
                    projName: "KSSPE Department Inventory Management System",
                    authors:
                      "Lucas Wing, Matt Frichie, Nick Bernard, Liam Allport",
                    period: "August 2018 - May 2019",
                  }}
                  overview="Equipment reservation system for Brockport's KSSPE department. This was a senior project
                          done at the behest of our Computer Science department chair due to our excellent work on
                          Clothes Closet project to replace the current excel solution."
                  tech={[
                    { name: "Languages", desc: "Java" },
                    { name: "Frameworks", desc: "Custom MVC solution" },
                    { name: "Database", desc: "MySQL" },
                  ]}
                  conclusion="Our small team did well at this project. It was a great learning experience for us
                          to refine our Java skills before moving into the professional world."
                  pics={[ksspeLogin, ksspeMain]}
                >
                  <a
                    className="custom-link"
                    href="https://github.com/Writ3r/KSSPE-Project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLink}
                      color="black"
                      className="animate__animated animate__pulse animate__infinite mr-2"
                    />
                    Github
                  </a>
                  <br />
                  <a
                    className="custom-link"
                    href={ksspeERD}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLink}
                      color="black"
                      className="animate__animated animate__pulse animate__infinite mr-2"
                    />
                    ERD
                  </a>
                  <br />
                  <a
                    className="custom-link"
                    href="https://docs.google.com/document/d/1xK-V8XTjA9ArEFn9ioepw284b4NFE3bnGWWVYr8B2Yc/edit?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLink}
                      color="black"
                      className="animate__animated animate__pulse animate__infinite mr-2"
                    />
                    Use Cases
                  </a>
                  <br />
                  <a
                    className="custom-link"
                    href={ksspeSeq}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLink}
                      color="black"
                      className="animate__animated animate__pulse animate__infinite mr-2"
                    />
                    Sequence Diagrams
                  </a>
                  <br />
                  <a
                    className="custom-link"
                    href={ksspeState}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLink}
                      color="black"
                      className="animate__animated animate__pulse animate__infinite mr-2"
                    />
                    State Diagram
                  </a>
                  <br />
                </Project>
              </TabPane>
              <TabPane active={key === "cc"} eventKey="cc">
                <Project
                  info={{
                    projName: "Brockport Professional Clothes Closet",
                    authors:
                      "Lucas Wing, Nick Bernard, Matt Frichie, Liam Allport, Noah Tyler, Rolland Quentin, Nicholas Fontanet, Kevin Fortes",
                    period: "August 2017 - June 2018",
                  }}
                  overview="Clothing reservation system for Brockport's Professional Clothes closet. This was a class project which
                          spanned multiple semesters. The first semester we designed the project,
                          the second semester we went about actually implementing it with our teams."
                  tech={[
                    { name: "Languages", desc: "Java" },
                    { name: "Frameworks", desc: "Custom MVC solution" },
                    { name: "Database", desc: "MySQL" },
                  ]}
                  conclusion="This was a great first project to familiarize us with the inner-workings and design process
                          for client-side technologies. It was definetly rough by professional standards, but this
                          was primarily a learning experience."
                  pics={[clothesClosetMenue, clothesClosetItem]}
                >
                  <a
                    className="custom-link"
                    href="https://github.com/ntyler1/ClothesClosetProject"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLink}
                      color="black"
                      className="animate__animated animate__pulse animate__infinite mr-2"
                    />
                    Github
                  </a>
                  <br />
                  <a
                    className="custom-link"
                    href="https://docs.google.com/document/d/1V_fU_oXI0yl9uo8K4Jrjk2z4EVXhlHpVYsNIxQbXJYs/edit?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLink}
                      color="black"
                      className="animate__animated animate__pulse animate__infinite mr-2"
                    />
                    Use Cases
                  </a>
                  <br />
                  <a
                    className="custom-link"
                    href={clothesSeq}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLink}
                      color="black"
                      className="animate__animated animate__pulse animate__infinite mr-2"
                    />
                    Sequence Diagrams
                  </a>
                  <br />
                  <a
                    className="custom-link"
                    href={clothesState}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLink}
                      color="black"
                      className="animate__animated animate__pulse animate__infinite mr-2"
                    />
                    State Diagram
                  </a>
                  <br />
                </Project>
              </TabPane>
              <TabPane active={key === "hm"} eventKey="hm">
                Second tab content
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </TabContainer>
    </section>
  );
}
