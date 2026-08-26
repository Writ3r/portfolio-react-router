import { useState, type PropsWithChildren } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {
  faLaptopCode,
  faPeopleCarry,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SectionTitle } from "~/components/ui/Section";

function ExperienceItemHeader(props: { text: string }) {
  return <h5>{props.text}</h5>;
}

function ExperienceItemBody(props: PropsWithChildren<{}>) {
  return <p className="grey-text">{props.children}</p>;
}

const ExperienceItem = (props: {
  info: {
    startingPos: string;
    period: string;
    currentPosition?: string;
  };
  respon: string;
  awards: string;
  progress: string;
}) => {
  return (
    <div className="tab-pane-container">
      <ExperienceItemHeader text="Information" />
      <ExperienceItemBody>
        {props.info.currentPosition && (
          <>
            <strong>Position:</strong> {props.info.currentPosition}
            <br />
          </>
        )}
        <strong>Starting Position:</strong> {props.info.startingPos} <br />
        <strong>Period:</strong> {props.info.period}
      </ExperienceItemBody>
      <ExperienceItemHeader text="Responsibilities" />
      <ExperienceItemBody>{props.respon}</ExperienceItemBody>
      <ExperienceItemHeader text="Awards" />
      <ExperienceItemBody>{props.awards}</ExperienceItemBody>
      <ExperienceItemHeader text="Progression" />
      <ExperienceItemBody>{props.progress}</ExperienceItemBody>
    </div>
  );
};

export function Experience() {
  const [key, setKey] = useState("eng1");

  return (
    <section id="experience">
      <SectionTitle text="Experience" />
      <div className="row">
        <div className="col-lg-12 col-md-12 px-4">
          <Tabs
            activeKey={key}
            onSelect={(k) => setKey(k || "eng1")}
            className="nav-justified experience-tab"
          >
            <Tab
              eventKey="eng1"
              title={
                <>
                  <FontAwesomeIcon
                    icon={faLaptopCode}
                    color="#3f51b5"
                    className="animate__animated animate__jello animate__infinite"
                  />{" "}
                  BAE Systems - Senior Principal Software Engineer
                </>
              }
            >
              <ExperienceItem
                info={{
                  startingPos: "Software Engineer 1 ",
                  period: "June 2019 - PRESENT",
                  currentPosition: "Senior Principal Software Engineer",
                }}
                respon="Designing and developing GXP Platform's Service infastructure locally and in the cloud. 
                Tech leading our team of Service Infastructure engineers to achieve our feature requirements. Reviewing PRs and aiding Architects in Epic breakdowns into features.
                Working with third-parties and customers directly to solve complex problems and provide solutions."
                awards="All of my performance reviews have had excellent scores. 
                I've also achieved 15 Impact Awards for feature and/or contract related work."
                progress="Developing my ability to lead teams, design, and write enterprise-grade code in server-side, client-side and in cloud environments."
              />
            </Tab>
            <Tab
              eventKey="sumhelp"
              title={
                <>
                  <FontAwesomeIcon
                    icon={faPeopleCarry}
                    color="#2196f3"
                    className="animate__animated animate__jello animate__infinite"
                  />{" "}
                  Marcellus Schools - Summer Help
                </>
              }
            >
              <ExperienceItem
                info={{
                  startingPos: "Summer Help",
                  period: "July 2012 - August 2018",
                }}
                respon="Supporting the custodial staff in cleaning out the school district over the summer. This required teams of people working together to clean all classroom & office furnature 
                      and floors. In addition, there was yard work as well if we had some extra time."
                awards="None offered for this job. The reward was coming back the next year if you did well enough."
                progress="Learned about working in a team-based environment to accomplish tasks too large to accomplish on my own.
                      This job also helped give me perspective on what true 'work' is beyond a partial day weekend job. It was a great learning experience and working with the people there was a great time."
              />
            </Tab>
            <Tab
              eventKey="worker"
              title={
                <>
                  <FontAwesomeIcon
                    icon={faUsers}
                    color="#00bcd4"
                    className="animate__animated animate__jello animate__infinite"
                  />{" "}
                  Beak And Skiff - Worker
                </>
              }
            >
              <ExperienceItem
                info={{
                  startingPos: "Worker",
                  period: "October 2011 - November 2012",
                }}
                respon="Helped run the bounce houses for kids over the weekends. This job involved getting a group of kids together,
                      informing them of the rules, and monitoring them in the bounce houses for a few minutes."
                awards="None offered for this job. The reward was coming back the next year if you did well enough."
                progress="This was my first actual job. It taught me the ins/outs of working for a company, having real responsibility,
                      and how to manage having extra money. This was an invaluable stepping stone for someone my age to understand real world work."
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default Experience;
