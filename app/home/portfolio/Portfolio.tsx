import { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import pic from "./work-731198_1920.jpg";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BIRTHDAY = new Date(1997, 1, 18);
const PROJECT_START_DATE = new Date(2017, 8, 1);
const WORK_START_DATE = new Date(2019, 6, 3);

function secondsDiff(d1: Date, d2: Date) {
  let secDiff = Math.floor((d2.getTime() - d1.getTime()) / 1000);
  return secDiff;
}

function yearsDiff(d1: Date, d2: Date) {
  let date1 = new Date(d1);
  let date2 = new Date(d2);
  let yearsDiff = date2.getFullYear() - date1.getFullYear();
  return yearsDiff;
}

export function Portfolio() {
  const [secondsCoding, setSecondsCoding] = useState<number>(0);
  const currTime = new Date();

  useEffect(() => {
    const interval = setInterval(
      () => setSecondsCoding(secondsDiff(PROJECT_START_DATE, new Date())),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="portfolio">
      <Row>
        <Col md="6" className="mb-4">
          <img
            src={pic}
            className="img-fluid z-depth-1-half"
            alt="engineer programming on a laptop"
          />
        </Col>
        <Col md="6" className="mb-4">
          <h3 className="h3 mb-3">My Portfolio</h3>
          <p>
            Here's a bit about <strong>myself</strong>, my{" "}
            <strong>projects</strong>, and my <strong>experience</strong>.
          </p>
          <p>Everyone likes to show off a little right?</p>
          <hr />
          <p>
            <strong>
              {yearsDiff(PROJECT_START_DATE, currTime).toLocaleString()}
            </strong>{" "}
            years project experience,
            <strong>
              {" "}
              {yearsDiff(WORK_START_DATE, currTime).toLocaleString()}
            </strong>{" "}
            years enterprise experience, and
            <strong>
              {" "}
              {yearsDiff(BIRTHDAY, currTime).toLocaleString()}
            </strong>{" "}
            years of life experience.
            <strong> Let's hope these numbers keep growing!</strong>
          </p>
          <p>
            <strong>{secondsCoding.toLocaleString()}</strong> seconds spent
            coding projects is not enough!
          </p>
          <Button
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/document/d/1XRYsCeIkxK-lsZblag1_hA39kfoHJFjL-Tlo2_ZkGwE/edit?usp=sharing"
            className="btn-grey"
          >
            RESUME DOC
            <FontAwesomeIcon
              className="ml-2 animate__animated animate__swing animate__infinite"
              icon={faDownload}
              style={{ color: "white" }}
            />
          </Button>
          <Button
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/document/d/1ca1rWlQpQJGOK2GYhp-mz5E8NWMic65b9PZSQFZu1Ss/edit?usp=sharing"
            color="grey"
            className="btn-grey"
          >
            COVER LETTER
            <FontAwesomeIcon
              className="ml-2 animate__animated animate__swing animate__infinite"
              icon={faDownload}
              style={{ color: "white" }}
            />
          </Button>
        </Col>
      </Row>
    </section>
  );
}
