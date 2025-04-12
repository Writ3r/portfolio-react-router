import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {
  faLaptopCode,
  faPeopleCarry,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  type FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

type Information = {
  startingPos: string;
  period: string;
  currentPosition?: string;
};

type ExpInput = {
  info: Information;
  respon: string;
  awards: string;
  progress: string;
};

const ExperienceItem = (props: ExpInput) => {
  return (
    <div className="tab-pane-container">
      <h5 className="feature-title title-margin">Information</h5>
      <p className="grey-text">
        {props.info.currentPosition && (
          <>
            <strong>Position:</strong> {props.info.currentPosition}
            <br />
          </>
        )}
        <strong>Starting Position:</strong> {props.info.startingPos} <br />
        <strong>Period:</strong> {props.info.period}
      </p>
      <h5 className="feature-title title-margin">Responsibilities</h5>
      <p className="grey-text">{props.respon}</p>
      <h5 className="feature-title title-margin">Awards</h5>
      <p className="grey-text">{props.awards}</p>
      <h5 className="feature-title title-margin">Progression</h5>
      <p className="grey-text">{props.progress}</p>
    </div>
  );
};

export function Experience() {
  const [key, setKey] = useState("eng1");

  return (
    <section id="experience" className="pageAnchor">
      <h2 className="my-5 h3 text-center">Experience</h2>
      <div className="row">
        <div className="col-lg-12 col-md-12 px-4">
          <Tabs
            activeKey={key}
            onSelect={(k) => setKey(k || "eng1")}
            className="lucas-tabs nav-justified"
          >
            <Tab
              eventKey="eng1"
              title={
                <>
                  <FontAwesomeIcon icon={faLaptopCode} color="#3f51b5" className="animate__animated animate__jello animate__infinite" />{" "}BAE
                  Systems - Senior Software Engineer
                </>
              }
            >
              <ExperienceItem
                info={{
                  startingPos: "Software Engineer 1 ",
                  period: "June 2019 - PRESENT",
                  currentPosition: "Senior Software Engineer",
                }}
                respon="Engineering and developing GXP Xplorer's Service infastructure with occasional supporting webclient and cloud changes. 
                      In any down time, made development support related tools to optimize efficiency during debugging and building."
                awards="All of my performance reviews have had excellent scores thus far. In addition, achieved two Impact awards for my interest in our service infastructure, and cloud-related work during covid."
                progress="Progressed significantly in my ability to write enterprise-grade code in both the server-side and in cloud environments.
                      On the service-side I've learned about REST endoints, messaging systems, dependency injection, and service-oriented architecture.
                      In the cloud, I've learned the basics of code containerization, along with management and deployment of those containers."
              />
            </Tab>
            <Tab
              eventKey="sumhelp"
              title={
                <>
                  <FontAwesomeIcon icon={faPeopleCarry} color="#2196f3" className="animate__animated animate__jello animate__infinite" />{" "}
                  Marcellus Schools - Summer Help
                </>
              }
            >
              <ExperienceItem
                info={{
                  startingPos: "Summer Help",
                  period: "July 2012 - August 2018",
                }}
                respon="Supporting the custodial staff in cleaning out the school district over the summer. Required teams of people working together to clean all classroom furnature, 
                      and clean + wax the floors. In addition, did some yard work as well if we had some extra time."
                awards="None offered for this job. The reward was coming back the next year if you did well enough."
                progress="Learned about working in a team-based environment to accomplish tasks which are far too large to accomplish on my own.
                      I also learned humility. My co-workers were amazing. Some of the best, most hardworking people I've ever met. Just because
                      programming is a more in-demand field in job market, doesn't make it any more of less of a job than that of custodial staff."
              />
            </Tab>
            <Tab
              eventKey="worker"
              title={
                <>
                  <FontAwesomeIcon icon={faUsers} color="#00bcd4" className="animate__animated animate__jello animate__infinite"/>{" "}
                  Beak And Skiff - Worker
                </>
              }
            >
              <ExperienceItem
                info={{
                  startingPos: "Worker",
                  period: "October 2011 - November 2012",
                }}
                respon="Worked with a few other people to run the bounce houses over the weekends. We'd get a group of kids going,
                      inform them of the rules, monitor them in the bounce houses for a few minutes, then bring them back to their parents."
                awards="None offered for this job. The reward was coming back the next year if you did well enough."
                progress="This was my first actual job. It taught me the ins/outs of working for a company, having real responsibility,
                      and how to manage actually having extra money. This was an invaluable stepping stone for someone my age."
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default Experience;
