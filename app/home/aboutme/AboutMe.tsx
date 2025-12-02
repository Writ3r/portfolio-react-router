import { Row, Col } from "react-bootstrap";
import {
  faCode,
  faCodeBranch,
  faGraduationCap,
  faGamepad,
  faHiking,
  faWalking,
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  type FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { SectionTitle } from "~/components/ui/Section";

const Skill = (props: {
  name: string;
  desc: string;
  fontAwesomeIconProps: FontAwesomeIconProps;
}) => {
  const updatedFAProps = {
    ...props.fontAwesomeIconProps,
    className:
      props.fontAwesomeIconProps.className +
      " animate__animated animate__pulse animate__infinite",
  };
  return (
    <Row className="row about-me-item">
      <Col xs={1} className="mr-3">
        <FontAwesomeIcon {...updatedFAProps} />
      </Col>
      <Col xs={10}>
        <h5>{props.name}</h5>
        <p className="grey-text">{props.desc}</p>
      </Col>
    </Row>
  );
};

export function AboutMe() {
  return (
    <section id="about">
      <SectionTitle text="About Me" />
      <Row className="row">
        <Col lg="6" md="12" className="px-4">
          <Skill
            name="Engineer"
            desc="Engineering new and interesting projects is my jam. It's satisfying turning an idea into a design."
            fontAwesomeIconProps={{
              icon: faCode,
              size: "2x",
              className: "fa-purple-icon",
            }}
          />
          <Skill
            name="Developer"
            desc="Developing code to fit project specifications is delightful. I love implementing new and interesting designs."
            fontAwesomeIconProps={{
              icon: faCodeBranch,
              size: "2x",
              className: "fa-blue-icon",
            }}
          />
          <Skill
            name="Problem Solver"
            desc="Problems exist to be solved. I intend to facilitate that process to its logical conclusion."
            fontAwesomeIconProps={{
              icon: faGraduationCap,
              size: "2x",
              className: "fa-teal-icon",
            }}
          />
        </Col>
        <Col lg="6" md="12">
          <Skill
            name="Gamer"
            desc="Gaming is awesome, it's a great social experience. Some games I play - Destiny, League of Legends, Minecraft, and OSRS."
            fontAwesomeIconProps={{
              icon: faGamepad,
              size: "2x",
              className: "fa-purple-icon",
            }}
          />
          <Skill
            name="Hiker"
            desc="Hiking is my preferred method to experience world. It's a relaxing activity and great exercise."
            fontAwesomeIconProps={{
              icon: faHiking,
              size: "2x",
              className: "fa-blue-icon",
            }}
          />
          <Skill
            name="Walker"
            desc="If I can't hike, I'll walk! A quick walk a day helps keep me happy and healthy."
            fontAwesomeIconProps={{
              icon: faWalking,
              size: "2x",
              className: "fa-teal-icon",
            }}
          />
        </Col>
      </Row>
    </section>
  );
}
