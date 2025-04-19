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
  Button,
  Carousel,
  CarouselItem,
} from "react-bootstrap";
import {
  faEnvelope,
  faChartPie,
  faVolleyballBall,
  faTrophy,
  faTShirt,
  faLink,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
import mailawaySwagger from "./mailaway/swagger-endpoints.png";
import mailawayCreateAcc from "./mailaway/create-account.png";
import mailawayPortainer from "./mailaway/portainer.png";
import { SectionTitle } from "~/components/ui/Section";

function ProjectItemHeader(props: { text: string }) {
  return <h5>{props.text}</h5>;
}

function ProjectItemBody(props: PropsWithChildren<{}>) {
  return <p className="grey-text">{props.children}</p>;
}

function ProjectPictureGallery(
  props: PropsWithChildren<{
    show: boolean;
    title: string;
    handleShow: () => void;
    handleClose: () => void;
  }>
) {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      size="lg"
      key={props.title}
    >
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

type Technology = {
  name: string;
  desc: string;
};

type Picture = {
  link: string;
  alt: string;
};

const Project = (props: {
  info: {
    projName: string;
    authors: string;
    period: string;
  };
  overview: string;
  tech: Technology[];
  children?: React.ReactNode;
  conclusion: string;
  pics: Picture[];
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ProjectItemHeader text="Information" />
      <ProjectItemBody>
        <strong>Project Name:</strong> {props.info.projName} <br />
        <strong>Authors:</strong> {props.info.authors} <br />
        <strong>Period:</strong> {props.info.period}
      </ProjectItemBody>
      <ProjectItemHeader text="Overview" />
      <ProjectItemBody>{props.overview}</ProjectItemBody>
      <ProjectItemHeader text="Technologies" />
      <ProjectItemBody>
        {props.tech.map((tech) => {
          return (
            <span key={tech.name}>
              <strong>{tech.name}:</strong> {tech.desc} <br />
            </span>
          );
        })}
      </ProjectItemBody>
      <ProjectItemHeader text="Resources" />
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
      <ProjectItemHeader text="Concluding Thoughts" />
      <ProjectItemBody>{props.conclusion}</ProjectItemBody>
      <ProjectPictureGallery
        title={props.info.projName}
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleShow={() => setShowModal(true)}
      >
        {props.pics.map((pic, index) => {
          return (
            <CarouselItem key={index}>
              <img
                className="d-block w-100"
                style={{ height: "570px" }}
                src={pic.link}
                alt={pic.alt}
              />
            </CarouselItem>
          );
        })}
      </ProjectPictureGallery>
    </>
  );
};

function ProjectTabItem(
  props: PropsWithChildren<{
    navKey: string;
    activeKey: string;
    setKey: (key: string) => void;
  }>
) {
  return (
    <NavItem>
      <NavLink
        active={props.activeKey === props.navKey}
        onClick={() => props.setKey(props.navKey)}
        eventKey={props.navKey}
      >
        {props.children}
      </NavLink>
    </NavItem>
  );
}

function ProjectTabLink(props: PropsWithChildren<{ link: string }>) {
  return (
    <>
      <FontAwesomeIcon
        icon={faLink}
        color="black"
        className="animate__animated animate__pulse animate__infinite mr-2"
      />
      <a
        className="custom-link"
        href={props.link}
        target="_blank"
        rel="noreferrer"
      >
        {props.children}
      </a>
      <br />
    </>
  );
}

export function Projects() {
  // react-bootstrap's active key appears broken with SSR, so need to manage it myself..
  const [key, setKey] = useState("dc");
  return (
    <section id="projects">
      <SectionTitle text="Projects" />
      <TabContainer defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav
              variant="pills"
              className="flex-column lucas-pills projects-pills"
              defaultActiveKey="dc"
            >
              <ProjectTabItem activeKey={key} navKey="dc" setKey={setKey}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  color="#2196f3"
                  className="animate__animated animate__jello animate__infinite mr-2"
                />
                Mailaway
              </ProjectTabItem>
              <ProjectTabItem activeKey={key} navKey="mp" setKey={setKey}>
                <FontAwesomeIcon
                  icon={faChartPie}
                  color="#00bcd4"
                  className="animate__animated animate__jello animate__infinite mr-2"
                />
                Master Plan
              </ProjectTabItem>
              <ProjectTabItem activeKey={key} navKey="km" setKey={setKey}>
                <FontAwesomeIcon
                  icon={faVolleyballBall}
                  color="black"
                  className="animate__animated animate__jello animate__infinite mr-2"
                />
                KSSPE Management
              </ProjectTabItem>
              <ProjectTabItem activeKey={key} navKey="cc" setKey={setKey}>
                <FontAwesomeIcon
                  icon={faTShirt}
                  color="#3f51b5!"
                  className="animate__animated animate__jello animate__infinite mr-2"
                />
                Clothes Closet
              </ProjectTabItem>
              <ProjectTabItem activeKey={key} navKey="hm" setKey={setKey}>
                <FontAwesomeIcon
                  icon={faTrophy}
                  color="#ebdc13"
                  className="animate__animated animate__jello animate__infinite mr-2"
                />
                Honorable Mentions
              </ProjectTabItem>
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
                  pics={MAILAWAY_PICS}
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
                  pics={MASTER_PLAN_PICS}
                >
                  <ProjectTabLink link={"https://www.master-plan.me/"}>
                    Website
                  </ProjectTabLink>
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
                  pics={KSSPE_PICS}
                >
                  <ProjectTabLink
                    link={"https://github.com/Writ3r/KSSPE-Project"}
                  >
                    Github
                  </ProjectTabLink>
                  <ProjectTabLink link={ksspeERD}>ERD</ProjectTabLink>
                  <ProjectTabLink
                    link={
                      "https://docs.google.com/document/d/1xK-V8XTjA9ArEFn9ioepw284b4NFE3bnGWWVYr8B2Yc/edit?usp=sharing"
                    }
                  >
                    Use Cases
                  </ProjectTabLink>
                  <ProjectTabLink link={ksspeSeq}>
                    Sequence Diagrams
                  </ProjectTabLink>
                  <ProjectTabLink link={ksspeState}>
                    State Diagram
                  </ProjectTabLink>
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
                  pics={CLOTHES_CLOSET_PICS}
                >
                  <ProjectTabLink
                    link={"https://github.com/ntyler1/ClothesClosetProject"}
                  >
                    Github
                  </ProjectTabLink>
                  <ProjectTabLink
                    link={
                      "https://docs.google.com/document/d/1V_fU_oXI0yl9uo8K4Jrjk2z4EVXhlHpVYsNIxQbXJYs/edit?usp=sharing"
                    }
                  >
                    Use Cases
                  </ProjectTabLink>
                  <ProjectTabLink link={clothesSeq}>
                    Sequence Diagrams
                  </ProjectTabLink>
                  <ProjectTabLink link={clothesState}>
                    State Diagram
                  </ProjectTabLink>
                </Project>
              </TabPane>
              <TabPane active={key === "hm"} eventKey="hm">
                I'll fill this out later... There's a lot of projects I've
                worked that warrent a mention but not a full section.
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </TabContainer>
    </section>
  );
}

const MAILAWAY_PICS: Picture[] = [
  { link: mailawaySwagger, alt: "swagger page of Mailaway" },
  { link: mailawayCreateAcc, alt: "create account endpoint of Mailaway" },
  { link: mailawayPortainer, alt: "portainer page of Mailaway" },
];

const MASTER_PLAN_PICS: Picture[] = [
  { link: masterPlanDash, alt: "dashboard page of Mailaway" },
  { link: masterPlanAbout, alt: "about page of Mailaway" },
  { link: masterPlanAssets, alt: "assets page of Mailaway" },
];

const KSSPE_PICS: Picture[] = [
  { link: ksspeLogin, alt: "ksspe program login page" },
  { link: ksspeMain, alt: "ksspe program main page" },
];

const CLOTHES_CLOSET_PICS: Picture[] = [
  { link: clothesClosetMenue, alt: "clothes closet program menu page" },
  { link: clothesClosetItem, alt: "clothes closet item page" },
];
